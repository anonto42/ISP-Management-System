import { NextResponse } from "next/server";
import { ConnectMikroTik } from "@/lib/connectMikroTik";
import { isAdmin } from "@/lib/session";

export async function POST() {
  try {
    const isValid = await isAdmin();
    if (!isValid) {
      return NextResponse.json(
        { message: "You are not authorized to access this route!" },
        { status: 403 }
      );
    }

    const client = await ConnectMikroTik();
    if (!client) {
      return NextResponse.json({},{status:350})
    }
    await client.connect();

    const users = await client.write('/ppp/active/print');

    await client.close();
    
    const res = {
      success: true,
      message: users.length > 0 ? "Fetched all active PPPoE users!" : "No active PPPoE users currently connected.",
      data: users.length > 0 ? users : undefined, 
    }

    return NextResponse.json(res);
  } catch (err) {
    console.error("Error fetching PPPoE users:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const isValid = await isAdmin();
    if (!isValid) {
      return NextResponse.json(
        { message: "Unauthorized access" },
        { status: 403 }
      );
    }

    const api = await ConnectMikroTik();
    if (!api) {
      return NextResponse.json({},{status:350})
    }
    await api.connect();

    const response = await api.write('/ppp/secret/print');
    await api.close();

    const users = response ?? [];

    return NextResponse.json({
      success: true,
      message: "Fetched all PPPoE users",
      data: users,
    });
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}