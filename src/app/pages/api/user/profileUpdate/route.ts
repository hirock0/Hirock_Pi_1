import dbConnect from "@/lib/dbConnection/dbConection";
import { UserSchemaStr } from "@/lib/Schema/model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    await dbConnect()
    try{
        const reqBody = await request.json()
        const{

            userId,
            villageOrTown,
            postOffice,
            thana,
            district,
            postCode,
            country
        }=reqBody

        const address = {
            villageOrTown,
            postOffice,
            thana,
            district,
            postCode,
            country
        }
        const findUser = await UserSchemaStr.findByIdAndUpdate({_id:userId},{address:address})
         await findUser.save()
        return NextResponse.json({message:"Profile updated",success:true})
    }catch(error:any){
        return NextResponse.json({message:"Profile not updated",success:false})
    }
}