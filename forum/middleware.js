import { NextResponse } from "next/server";

export function middleware(request)
{

    console.log("여기")
    console.log(request.nextUrl);
    console.log(request.cookies);
    console.log(request.headers);

  
}