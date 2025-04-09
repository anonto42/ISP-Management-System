import { isAdmin } from "@/lib/session";
import prismaDB from "@/prisma/pot";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const isAuthorized = await isAdmin();
    if (!isAuthorized) {
      return NextResponse.json(
        {
          message: "You are not authorized to access this route!",
          success: false,
        },
        { status: 403 }
      );
    }

    const body = await req.json();

    const adminUser = await prismaDB.user.findFirst({
      where: { userType: "admin" },
    });

    if (!adminUser) {
      return NextResponse.json(
        {
          message: "Something went wrong fetching the Admin or company details!",
          success: false,
        },
        { status: 404 }
      );
    }

    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
    }

    const keys = Object.keys(body);
    if (keys.length > 0) {
      const updatedAdmin = await prismaDB.user.update({
        where: { id: adminUser.id },
        data: body,
      });

      return NextResponse.json(
        {
          message: "Admin data updated successfully!",
          success: true,
          data: updatedAdmin,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "Data successfully get",
        success: true,
        data: adminUser,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      {
        message: "Error on the server!",
        success: false,
      },
      { status: 500 }
    );
  } finally {
    await prismaDB.$disconnect();
  }
}
