import { isAdmin } from "@/lib/session";
import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloud, UploadApiResponse } from "cloudinary";
import streamifier from "streamifier";

cloud.config({
    cloud_name: process.env.CLD_NAME,
    api_key: process.env.CLD_API_KEY,
    api_secret: process.env.CLD_API_SECRET_KEY,
});

export async function POST(req: NextRequest) {
    try {

        const val = await isAdmin();
        if (!val) {
            return NextResponse.json(
                {
                    message: "You are not authorized to access this route!",
                    success: false
                }, {
                status: 401
            }
            )
        }

        const formData = await req.formData();
        // we will get a image named: picture
        if (!formData) {
            return NextResponse.json(
                {
                    message: "No form data!",
                    success: false
                }, {
                status: 400
            }
            )
        }

        const userName = formData.get("userName") as string;
        const email = formData.get("email") as string;
        const phoneNumber = formData.get("phoneNumber") as string;
        const fullName = formData.get("fullName") as string;
        const extraNumber = formData.get("extraNumber") as string;
        const interNetPackage = formData.get("interNetPackage") as string;
        const district = formData.get("district") as string;
        const upozala = formData.get("upozala") as string;
        const area = formData.get("area") as string;
        const houseNo = formData.get("houseNo") as string;
        const floorNo = formData.get("flooreNo") as string;
        const password = formData.get("password") as string;
        const dateOfConnection = formData.get("dateOfConnection") as string;
        const connectivityType = formData.get("connectivityType") as string;
        const referral = formData.get("referral") as string;
        const wireCode = formData.get("wireCode") as string;
        const wireType = formData.get("wireType") as string;
        const reseller = formData.get("reSeller") as string;
        const securityDeposit = formData.get("securityDeposit") as string;
        const nid = formData.get("nid") as string;
        const picture = formData.get("picture") as unknown as File;
        const userType = formData.get("userType") as string;

        if (userType === "admin") {
            return NextResponse.json(
                {
                    message: "You are not alow to do that!",
                    success: false
                }, {
                status: 303
            }
            )
        }

        let imageUrl;

        if (picture.size > 0) {
            const bytes = await picture.arrayBuffer();
            const bufferFile = Buffer.from(bytes);
            if (bytes) {
                const uploadResult = await new Promise((resolve, reject) => {
                    const uploadStream = cloud.uploader.upload_stream(
                        {
                            folder: "isp",
                            public_id: picture.name,
                            resource_type: "image",
                        },
                        (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result as UploadApiResponse);
                            }
                        }
                    );
                    streamifier.createReadStream(bufferFile).pipe(uploadStream);
                });
                imageUrl = (uploadResult as UploadApiResponse).secure_url;
            } else {
                imageUrl = ""
            }
        }


        const allData = {
            userName,
            email,
            phoneNumber,
            fullName,
            extraNumber,
            interNetPackage,
            district,
            upozala,
            area,
            houseNo,
            floorNo,
            password,
            dateOfConnection,
            connectivityType,
            referral,
            wireCode,
            wireType,
            reseller,
            securityDeposit,
            nid,
            userType,
            picture: imageUrl?.trim() ? imageUrl : "https://res.cloudinary.com/ddsnont4o/image/upload/v1725253663/vbxpip1zbmceklphph7m.png",
            expireDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
        }

        const isExist = await prismaDB.user.findUnique({ where: { userName } });
        if (isExist) {
            return NextResponse.json(
                {
                    message: "User already exists on user name: " + userName,
                    success: true
                }, {
                status: 200
            }
            )
        }

        await prismaDB.user.create({
            data: allData
        })

        return NextResponse.json(
            {
                message: "User created successfully!",
                success: true
            }, {
            status: 200
        }
        )

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "Internal Server Error!",
                success: false
            }, {
            status: 500
        }
        )
    } finally {
        await prismaDB.$disconnect()
    }
}