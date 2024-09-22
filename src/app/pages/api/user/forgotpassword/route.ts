import dbConnect from "@/lib/dbConnection/dbConection";
import { UserSchemaStr } from "@/lib/Schema/model";
import { sendEmail } from "@/utils/nodeMailer/mailer/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    const findUser = await UserSchemaStr.findOne({ email: email });
    if (!findUser) {
      return NextResponse.json({
        message: "Account is not found",
        success: false,
      });
    } else {
      await sendEmail({
        email,
        emailType: process.env.EMAIL_TYPE,
        userId: findUser._id,
      });
      return NextResponse.json({ message: "Account is found", success: true });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Account is not found",
      success: false,
    });
  }
}
