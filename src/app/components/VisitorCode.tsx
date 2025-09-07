"use client";

import PhoneImage from "./PhoneImage";

export default function VisitorCode() {
  return (
    <section className="relative w-full max-w-[590px] min-h-[650px] mx-auto p-6 bg-[url('/linebg.png')] bg-cover bg-white border-2 border-gray-300 rounded-[24px] overflow-hidden flex flex-col">
      
      <div className="absolute inset-0 flex items-center justify-center -mt-[6rem]  md:-mt-40">
        <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[266px] md:h-[266px] bg-[#E7F4FB] rounded-full"/>
      </div>

      
      <div className="relative z-20 ">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Visitor Code Generation</h2>
        <p className="mt-2 text-sm sm:text-base">
          Create secure, time-bound access passes for every visitor type.
        </p>
      </div>

      {/* Phone image */}
      <div className="relative z-10 flex justify-center my-6">
        <PhoneImage />
      </div>

   
      <div className="relative z-20 mt-auto space-y-4 text-center sm:text-left">
        <div>
          <h2 className="font-semibold text-base sm:text-lg">Instant Digital Codes</h2>
          <p className="text-[14px] sm:text-[16px] font-light">Instant generation (Installable Mobile App)</p>
        </div>
        <div>
          <h2 className="font-semibold text-base sm:text-lg">Smart Delivery Access</h2>
          <p className="text-[14px] sm:text-[16px] font-light">Delivery-specific codes (auto-expiry + logs)</p>
        </div>
        <div>
          <h2 className="font-semibold text-base sm:text-lg">Custom Access Rules</h2>
          <p className="text-[14px] sm:text-[16px] font-light">Customizable rules (time/usage/zone controls)</p>
        </div>
      </div>
    </section>
  );
}
