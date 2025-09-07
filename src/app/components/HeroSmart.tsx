"use client";
import Image from "next/image";

export default function HeroSmart() {
  return (
    <main className="flex items-center justify-between w-full gap-6">
      {/* TEXT SECTION */}
      <section className="flex flex-col justify-center flex-1 mx-auto mt-8">
        <div>
          <p className="font-medium text-[45px] leading-tight">
            Smart <span className="font-bold"> control Account &</span>
          </p>
          <p className="text-[45px] font-bold leading-tight whitespace-nowrap">
            Automated Revenue Collection
          </p>
          <p className="leading-tight font-medium text-[45px]">For Gated Communities</p>
        </div>

        <div className="mt-4 text-[16px] font-semibold">
          <p>
            Generate visitor codes, track entries, and collect dues
            seamlessly—all from one
          </p>
          <p>secure platform.</p>
        </div>

        <div className="flex gap-3 mt-6 items-center">
          <button className="bg-[#244779] rounded p-2 w-[152px] h-[38px] text-[#FFFFFF] font-inter">
            Get Started
          </button>
          <div className="w-10 h-10 border border-gray-300 rounded-full overflow-hidden flex items-center justify-center">
            <Image src="/Shape-bg.png" alt="Video" height={13} width={13} />
          </div>
          <p className="text-[22px] font-semibold">Watch videos</p>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="relative flex-shrink-0 flex items-center -ml-[13.5rem]">
        <div className="relative ">
          <Image
            src="/security-bg.png"
            alt="Security"
            width={550}
            height={420}
            className="mt-12 w-[655px] h-[420px]"
          />
          <Image
            src="/iphone-bg.png"
            alt="iPhone"
            width={230}
            height={380}
            className="absolute top-2 right-9"
          />
         
        </div>
      </section>
    </main>
  );
}
