import cloudinary from "@/lib/cloudinary/cloudinary";
import dbConnect from "@/lib/dbConnection/dbConection";
import { ProjectSchemaStr } from "@/lib/Schema/model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const reqBody = await request.json();
    const {
      projectTitle,
      projectImage,
      projectDescriptions,
      projectLink,
      category,
      recentDate,
    } = reqBody;

    const uploadResponse = await cloudinary.uploader.upload(projectImage, {
      folder: "portfolio_jems_1",
    });
    const imageUrl = uploadResponse?.secure_url;
    const image_public_id = uploadResponse?.public_id;

    const preSaved = await new ProjectSchemaStr({
      projectTitle,
      projectImage: imageUrl,
      projectImagePublicId: image_public_id,
      projectDescriptions,
      projectLink,
      category,
      likes:[],
      comments:[],
      recentDate,
    });

    await preSaved.save();
    return NextResponse.json({
      message: "File is uploaded",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "File not is uploaded",
      success: false,
    });
  }
}
export async function GET() {
  await dbConnect();
  try {
    const reqApi = await ProjectSchemaStr.find().sort({ dateField: -1 });
    return NextResponse.json({ message: "Data  found", success: true, reqApi });
  } catch (error: any) {
    return NextResponse.json({ message: "Data not found", success: false });
  }
}
