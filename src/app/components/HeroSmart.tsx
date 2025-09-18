"use client";
import Image from "next/image";
import IphoneImage from "./IphoneImage";

export default function HeroSmart() {
 
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between w-full space-x-24">
      {/* TEXT SECTION */}
      <section className="flex flex-col justify-center flex-1 mx-auto mt-6 text-center lg:text-left">
        <div>
          <p className="font-medium text-2xl sm:text-3xl lg:text-[45px] leading-tight text-[#30404D]">
            Smart <span className="font-bold"> control Account &</span>
          </p>
          <p className="text-2xl sm:text-3xl lg:text-[45px] font-bold leading-tight text-[#30404D]">
            Automated Revenue Collection
          </p>
          <p className="font-medium text-2xl sm:text-3xl lg:text-[45px] leading-tight text-[#30404D]">
            For Gated Communities
          </p>
        </div>

        <div className="mt-4 text-sm sm:text-base lg:text-[16px] font-semibold text-[#30404D]">
          <p>
            Generate visitor codes, track entries, and collect dues seamlessly—
            all from one
          </p>
          <p>secure platform.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center lg:justify-start">
          <button className="bg-[#244779] rounded p-2 w-[152px] h-[38px] text-[#FFFFFF] font-inter">
            Get Started
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
              <Image src="/Shape-bg.png" alt="Video" height={13} width={13} />
            </div>
            <p className="text-lg sm:text-xl lg:text-[22px] font-semibold text-[#30404D]">
              Watch videos
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="relative flex-shrink-0 flex items-center lg:-ml-[23.5rem]">
        <div className="relative w-full flex justify-center">
          {/* Background Security Image */}
          <Image
            src="/security-bg.png"
            alt="Security"
            width={550}
            height={420}
            className="mt-8 w-[85%] sm:w-[90%] max-w-[655px] h-auto lg:mt-12 lg:w-[655px] lg:h-[420px] lg:mr-[-2rem]"
          />

          
          <IphoneImage />
        </div>
      </section>
    </main>
  );
}
