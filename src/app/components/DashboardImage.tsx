"use client";

import Image from "next/image";
export default function DashboardImage(){

  return(
   <div className="flex ">
    <Image
    src="/Dashboard-bg.png"
    alt="Dashboard"
    width={600}
    height={445}
    />
   </div>

  )
}