import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnection/dbConection";
import cloudinary from "@/lib/cloudinary/cloudinary";
import { UserSchemaStr } from "@/lib/Schema/model";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const reqBody = await request.json();
    const { userName, email, password, userImage } = reqBody;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const upLoadResponse = await cloudinary.uploader.upload(userImage, {
      folder: "portfolio_jems_1/users",
    });
    const imageUrl = upLoadResponse?.secure_url;
    const image_public_id = upLoadResponse?.public_id;

    const preSaved = await new UserSchemaStr({
      userName,
      email,
      password: hashedPassword,
      image_public_id: image_public_id,
      userImage: imageUrl,
      address: {
        villageOrTown: "",
        postOffice: "",
        thana: "",
        district: "",
        postCode: "",
        country: "",
      },
      educations: {
        ssc: {
          institution: "",
          result: "",
          passingYear: "",
        },
        hsc: {
          institution: "",
          result: "",
          passingYear: "",
        },
        ba: {
          institution: "",
          result: "",
        },
        ma: {
          institution: "",
          result: "",
          passingYear: "",
        },
        another: {
          institution: "",
          result: "",
          passingYear: "",
        },
      },

      contact: "",

      recentDate: new Date().toLocaleDateString(),
    });

    const saveData = await preSaved.save();
    const tokenData = {
      _id: saveData._id,
      name: saveData.name,
      email: saveData.email,
    };
    const token = await Jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "File is uploaded",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: "File is not uploaded",
      success: false,
    });
  }
}
