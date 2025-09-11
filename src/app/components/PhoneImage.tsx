"use client";
import Image from "next/image";

export default function PhoneImage() {
  return (
    <div className="relative w-full flex justify-center">
      <Image
        src="/Phone-bg.png"
        alt="PhoneImage"
        width={172}
        height={372}
        className="rounded-[7.33px] opacity-100 
                   w-[120px] sm:w-[150px] md:w-[172px] h-auto"
      />
    </div>
  );
}
