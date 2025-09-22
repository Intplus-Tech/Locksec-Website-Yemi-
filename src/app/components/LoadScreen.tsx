"use client";
import Image from "next/image";

export default function LoadScreen() {
  return (
    <section className="bg-[#0D0D1B] w-full h-screen flex flex-col justify-between items-center">
      
      <div className="flex flex-col items-center justify-center flex-1">
        <Image
          src="/lock-logo.png"
          alt="Locksec"
          width={44}
          height={44}
          className="mb-4"
        />

        <h2 className="font-bold text-2xl md:text-[32px] text-[#FFFFFF]">
          Lock<span className="text-[#375DFB]">Sec</span>
        </h2>
      </div>

      {/* ===== Bottom Content ===== */}
      <div className="flex flex-col items-center gap-4 pb-6">
        <p>
          <span className="text-[#EEEEEE]">Powered By </span>
          <span className="text-[#FFFFFF]">int+</span>
        </p>
        <div className="w-[148px] h-[5px] bg-[#FFFFFF]" />
      </div>
    </section>
  );
}
