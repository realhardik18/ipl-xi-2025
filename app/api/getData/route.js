import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response=await fetch(process.env.JSON_BIN_URI,{
            method:"GET",
            headers:{
                "X-Master_key":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImJjNDAxN2U3MGE4MWM5NTMxY2YxYjY4MjY4M2Q5OThlNGY1NTg5MTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiamF0aW4geW8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTFBRdUR5SWZIOU5odTQ3MS1OdkRsYnZSX2t0c0dYQ052TEZ5LUp0c08yRVluaFVnPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYXktNjg3MDUiLCJhdWQiOiJwbGF5LTY4NzA1IiwiYXV0aF90aW1lIjoxNzQxMzY1Mjc2LCJ1c2VyX2lkIjoib3dyazVad250Y2EwY3NnYW5UWEF4MmZINU90MSIsInN1YiI6Im93cms1WndudGNhMGNzZ2FuVFhBeDJmSDVPdDEiL",
                "X-Access-Key":"$2a$10$EvX/3SSsN5uxnlN09gE6EuB7RPjsxhMzsrj7XRM6I/OQZT/UKUKPm"
            }            
        })
        const data = await response.json()
        return NextResponse.json(data,{"status":200})
    } catch (error) {
        return NextResponse.json({"message":error.message},{"status":500})
    }
}