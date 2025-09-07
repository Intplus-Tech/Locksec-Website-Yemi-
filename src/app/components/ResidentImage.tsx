"use client";
import Image from "next/image";

export default function ResidentImage() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/Resident-bg.png"
        alt="ResidentImage"
        width={402}
        height={286}
        className="
        absolute 
        top-[12px] mx-[46px]
        rounded-[7.56px] 
        opacity-100
        w-[200px] sm:w-[280px] md:w-[350px] lg:w-[402px]
        h-auto"
      />
    </div>

  );
}
