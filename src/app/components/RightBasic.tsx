"use client";

import BasicButton from "./BasicButton";
import BasicFeatures from "./BasicFeatures";

export default function RightBasic() {
  return (
    <section className="bg-[#FFFFFF] h-auto sm:h-[692px] w-full sm:max-w-[588px] rounded-[24px] border-2 p-6 border-[#FFFFFF] flex flex-col">
      {/* Content wrapper grows and pushes button down */}
      <div className="space-y-6 flex-grow">
        <div className="space-y-4">
          <h1 className="font-bold text-[28px] sm:text-[36px] text-[#30404D]">
            BASIC
          </h1>
          <p className="text-sm sm:text-base text-[#30404D]">
            Perfect for small communities starting with access control.
          </p>
        </div>

        <div className="space-y-6">
          <p className="w-full h-auto sm:h-[76px]">
            <span className="font-bold text-[#3A7ABD] text-[40px] sm:text-[54px]">
              ₦0
            </span>
            <span className="text-[16px] sm:text-[20px] text-[#30404D] font-normal">
              /month
            </span>
          </p>

          <div className="space-y-8">
            <p className="font-bold text-[#30404D]">Core Features:</p>
            <BasicFeatures />
          </div>
        </div>
      </div>

      {/* Button stays pinned at bottom */}
      <BasicButton />
    </section>
  );
}
