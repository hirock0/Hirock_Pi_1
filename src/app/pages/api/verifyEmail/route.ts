import dbConnect from "@/lib/dbConnection/dbConection";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import { UserSchemaStr } from "@/lib/Schema/model";
dbConnect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, password } = reqBody;

    const hashedPassword = await bcryptjs.hash(password, 10);

    const findUser = await UserSchemaStr.findOneAndUpdate({ isToken: token, isTokenVerified: { $gt: Date.now() } },
      { password: hashedPassword }
    );
    if (!findUser) {
      return NextResponse.json({ message: "Invalid token" }, { status: 400 });
    }

    findUser.isVerified = true;
    findUser.isToken = undefined;
    findUser.isTokenVerified = undefined;
    await findUser.save();
    return NextResponse.json({ message: "Email verified", success: true });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
