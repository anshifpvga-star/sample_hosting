"use client";

import React, { useEffect } from 'react'

export default function Footer() {

  useEffect(()=>{
    console.log("its client browser");
  },[])
   return  
    <div>Footer</div>
  
}
