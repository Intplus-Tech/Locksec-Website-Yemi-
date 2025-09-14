"use client";

import ProButton from "./ProButton";
import ProFeature from "./ProFeature";

export default function RightPro() {
  return (
    <section className="bg-[#FFFFFF] h-auto sm:h-[692px] w-full sm:max-w-[588px] rounded-[24px] border-2 p-6 border-[#FFFFFF] space-y-6">
      <div className="space-y-4">
        <h1 className="font-bold text-[28px] sm:text-[36px] text-[#30404D]">PROFESSIONAL</h1>
        <p className="text-sm sm:text-base text-[#30404D]">
          For growing estates needing advanced management
        </p>
      </div>

      <div className="space-y-6">
        <p className="w-full h-auto sm:h-[76px]">
          <span className="font-bold text-[#3A7ABD] text-[32px] sm:text-[54px]">
            #100000
          </span>
          <span className="text-[16px] sm:text-[20px] text-[#30404D] font-normal">
            /month
          </span>
        </p>

        <div className="space-y-8">
          <p className="font-bold text-[#30404D]">Core Features:</p>
          <p className="font-bold text-[#30404D]">Everything in Basic, plus:</p>
          <ProFeature />
        </div>
      </div>

      <ProButton />
    </section>
  );
}
