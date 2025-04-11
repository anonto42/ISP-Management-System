import { ConnectMikroTik } from "@/lib/connectMikroTik";
import { isAdmin } from "@/lib/session";
import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
      const router = await ConnectMikroTik();
      if (router == undefined) {
        return NextResponse.json({},{status:350})
      }
      await router.connect();
  
      const profiles = await router.write('/ppp/profile/print');
      
      await router.close();

      const packagesFromDB = await prismaDB.packages.findMany({where:{}});

      return NextResponse.json({
        success: true,
        fromMickrotik: profiles.map((p) => ({
          name: p.name,
          rateLimit: p["rate-limit"]
        })),
        formDB:packagesFromDB
      });
  
    } catch (err) {
      console.log(err)
      return NextResponse.json({
        message: "Error retrieving profiles",
        success: false
      }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const isExist = await isAdmin();
        if (!isExist) {
            return NextResponse.json(
                {
                    message:"You are not authorized to access this api!",
                    success: false
                },{
                    status:350
                }
            )
        };

        const router = await ConnectMikroTik();
        if (router == undefined) {
          return NextResponse.json({},{status:350})
        };

        await router.connect();

        const { title, price, mbps } = await req.json();
        if (!title.trim() || !price.trim() || !mbps.trim()) {
            return NextResponse.json(
                {
                    message: "All fields are requird!",
                    success: false
                },{
                    status: 500
                }
            )
        };
        
        const routetPackage:string[] = [
            `=name=${title.trim()}`,
            `=rate-limit=${mbps.trim()}`
        ];
        await router.write('/ppp/profile/add',routetPackage);
        await router.close();

        const data = {
            title: title.trim(),
            price: Number(price.trim()),
            mbps: mbps.trim()
        };

        const packages = await prismaDB.packages.create({data});
        if (!packages) {
            return NextResponse.json(
                {
                    message: "Package was't create!",
                    success: false
                },{
                    status: 305
                }
            )
        };

        return NextResponse.json(
            {
                message: "Created the package!",
                success: true,
                data
            },{
                status: 200
            }
        );
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Some problem on the server!",
                success: false
            },{
                status: 500
            }
        );
    } finally{
        await prismaDB.$disconnect();
    }
}

export async function DELETE(req: NextRequest) {
  const { title } = await req.json();

  if (!title.trim()) {
    return NextResponse.json({
      success: false,
      message: "Missing package name",
    }, { status: 400 });
  }

  try {
    const router = await ConnectMikroTik();
    if (!router) {
      return NextResponse.json({},{status:350})
    }
    await router.connect();

    // 1. Get all PPP profiles
    const profiles = await router.write('/ppp/profile/print');

    // 2. Find the profile with the matching name
    const target = profiles.find(profile => profile.name === title.trim());

    if (!target) {
      await router.close();
      return NextResponse.json({
        success: false,
        message: `No package found with name: ${title}`
      }, { status: 404 });
    }

    // 3. Delete the profile using its .id
    await router.write('/ppp/profile/remove', [
      `=.id=${target['.id']}`
    ]);

    await router.close();

    await prismaDB.packages.delete({where:{title:title.trim()}})

    return NextResponse.json({
      success: true,
      message: `Package '${name}' deleted successfully`
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error deleting package",
      error
    }, { status: 500 });
  } finally {
    await prismaDB.$disconnect()
  }
}