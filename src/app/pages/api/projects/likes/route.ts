import dbConnect from "@/lib/dbConnection/dbConection";
import { ProjectSchemaStr } from "@/lib/Schema/model";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const reqBody = await request.json();
    const { userId, projectId } = reqBody;
    const findProject = await ProjectSchemaStr.findById({ _id: projectId });
    if (findProject == null) {
      return NextResponse.json({
        message: "Like not successful",
        success: false,
      });
    } else {
      const checkUserId = findProject.likes.filter(
        (item: any) => item.userId == userId
      );
      if (checkUserId.length == 0) {
        await findProject?.likes.push({ userId: userId });
        await findProject.save();
        return NextResponse.json({ message: "liked", success: true });
      } else {
        await findProject?.likes.pull({ userId: userId });
        await findProject.save();
        return NextResponse.json({
          message: "unliked",
          success: true,
        });
      }
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Like not successful",
      success: false,
    });
  }
}
