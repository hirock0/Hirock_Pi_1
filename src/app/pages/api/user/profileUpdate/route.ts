import dbConnect from "@/lib/dbConnection/dbConection";
import { UserSchemaStr } from "@/lib/Schema/model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const reqBody = await request.json();
    const {
      userId,
      villageOrTown,
      postOffice,
      thana,
      district,
      postCode,
      country,

      // --------------------------
      ssc_institution,
      ssc_result,
      ssc_passingYear,
      // -------------------------
      hsc_institution,
      hsc_result,
      hsc_passingYear,
      // -------------------------
      ba_institution,
      ba_result,
      ba_passingYear,
      // ------------------------
      ma_institution,
      ma_result,
      ma_passingYear,
      // -----------------------
    } = reqBody;

    const address = {
      villageOrTown,
      postOffice,
      thana,
      district,
      postCode,
      country,
    };
    const educations = {
      ssc: {
        institution: ssc_institution,
        result: ssc_result,
        passingYear: ssc_passingYear,
      },
      hsc: {
        institution: hsc_institution,
        result: hsc_result,
        passingYear: hsc_passingYear,
      },
      ba: {
        institution: ba_institution,
        result: ba_result,
        passingYear: ba_passingYear,
      },
      ma: {
        institution: ma_institution,
        result: ma_result,
        passingYear: ma_passingYear,
      },
    };
    if (address.district == undefined) {
      const findUser = await UserSchemaStr.findByIdAndUpdate(
        { _id: userId },
        { educations: educations }
      );
      await findUser.save();
    } else {
      const findUser = await UserSchemaStr.findByIdAndUpdate(
        { _id: userId },
        { address: address }
      );
      await findUser.save();
    }

    return NextResponse.json({ message: "Profile updated", success: true });
  } catch (error: any) {
    return NextResponse.json({
      message: "Profile not updated",
      success: false,
    });
  }
}
