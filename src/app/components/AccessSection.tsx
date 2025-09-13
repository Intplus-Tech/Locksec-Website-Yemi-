"use client";

export default function AccessSection() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto">
      {/* Heading */}
      <div className="w-full max-w-[725px] min-h-[106px] opacity-100 flex flex-col justify-center text-center px-4 text-[#000000]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#000000]">
          At its core, Lock<span className="text-blue-600">Sec</span> is a powerful
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#000000]">
          access management platform.
        </h2>
      </div>

      {/* Subtext */}
      <div className="w-full max-w-[725px] min-h-[75px] opacity-100 flex flex-col justify-center items-center px-4 text-sm sm:text-base md:text-lg lg:text-[18px] text-[#000000] text-center">
        <p className="text-[#000000]">
        
          Our solution transforms gate security and resident convenience through interactive,
        </p>
        <p className="text-[#000000]">
          interdisciplinary technology. Every modern estate can benefit from these key
        </p>
        <p className="text-[#000000]">features:</p>
      </div>
    </section>
  );
}
