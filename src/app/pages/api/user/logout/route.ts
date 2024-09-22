import dbConnect from "@/lib/dbConnection/dbConection";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });
    response.cookies.delete("token");
    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: "Something went wrong to logout",
      success: false,
    });
  }
}
