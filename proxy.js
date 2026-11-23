import { NextResponse } from 'next/server';
import React from 'react'

export default function proxy(request) {
    const isLoggedIn=false;
    if (!isLoggedIn){
        return NextResponse.redirect(
            new URL("/login",request.url)
        );
    }
  return NextResponse.next();
}
 export const config ={
matcher:"/admin/:path*"    
};
