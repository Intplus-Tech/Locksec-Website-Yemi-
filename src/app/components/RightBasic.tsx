"use client";

import BasicButton from "./BasicButton";
import BasicFeatures from "./BasicFeatures";

export default function RightBasic() {
  return (
    <section className="bg-[#FFFFFF] h-auto sm:h-[692px] w-full sm:max-w-[588px] rounded-[24px] border-2 p-6 border-[#FFFFFF] space-y-6">
      <div className="space-y-4">
        <h1 className="font-bold text-[28px] sm:text-[36px]">BASIC</h1>
        <p className="text-sm sm:text-base">
          Perfect for small communities starting with access control.
        </p>
      </div>

      <div className="space-y-6">
        <p className="w-full h-auto sm:h-[76px]">
          <span className="font-bold text-[#3A7ABD] text-[40px] sm:text-[54px]">
            #0
          </span>
          <span className="text-[16px] sm:text-[20px] text-[#98A8B3] font-normal">
            /month
          </span>
        </p>

        <div className="space-y-8">
          <p className="font-bold">Core Features:</p>
          <BasicFeatures />
        </div>
      </div>

      <BasicButton />
    </section>
  );
}
