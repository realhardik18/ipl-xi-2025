import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response=await fetch(process.env.JSON_BIN_URI,{
            method:"GET",
            headers:{
                "X-Master_key":process.env.X_MASTER_KEY,
                "X-Access_Key":process.env.X_ACCESS_KEY
            }            
        })
        const data = await response.json()
        return NextResponse.json(data,{"status":200})
    } catch (error) {
        return NextResponse.json({"message":error.message},{"status":500})
    }
}