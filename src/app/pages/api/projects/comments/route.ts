import dbConnect from "@/lib/dbConnection/dbConection";
import { ProjectSchemaStr } from "@/lib/Schema/model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  await dbConnect();
  try {
    const reqComments = await request.json();
    const { comment, projectId, userId,recentDate, userImage } = reqComments;
    if (userId !== undefined) {
      const findProducts = await ProjectSchemaStr.findById({ _id: projectId });
      findProducts?.comments.push({
        userImage,
        userId,
        recentDate,
        comment,
        dateField: Date.now(),
      });
      const commentData = await findProducts.save();

      return NextResponse.json({
        message: "comment successful",
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "You are not logged in",
        success: true,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: " something went wrong",
      success: false,
    });
  }
}
