"use client";

import ReadyText from "./ReadyText";

export default function ReadySecure() {
  return (
    <section className="relative w-full bg-[#BCCDDC] h-auto lg:h-[1081px] overflow-hidden">
      {/* Background image centered */}
      <div
        className="absolute top-1/2 left-1/2 
                   w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] 
                   md:w-[600px] md:h-[600px] 
                   lg:w-[858px] lg:h-[858px]
                   -translate-x-1/2 -translate-y-1/2 
                   opacity-100 rotate-180 
                   bg-[url('/bigLockces-bg.png')] bg-contain bg-no-repeat bg-center"
      />

      {/* Foreground content */}
      <div className="relative z-10">
        <ReadyText />
      </div>
    </section>
  );
}
