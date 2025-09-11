"use client";

import PhoneImage from "./PhoneImage";

export default function VisitorCode() {
  return (
    <section
      className="relative w-full max-w-[590px] min-h-[650px] mx-auto 
                 p-4 sm:p-6 
                 bg-[url('/linebg.png')] bg-cover bg-white 
                 border-2 border-gray-300 rounded-[24px] overflow-hidden 
                 flex flex-col"
    >
      {/* Circle background for desktop */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center -mt-40">
        <div className="w-[266px] h-[266px] bg-[#E7F4FB] rounded-full" />
      </div>

      {/* Heading */}
      <div className="relative z-20 text-center sm:text-left">
        <h2 className="text-base sm:text-lg md:text-2xl font-bold">
          Visitor Code Generation
        </h2>
        <p className="mt-2 text-xs sm:text-sm md:text-base">
          Create secure, time-bound access passes for every visitor type.
        </p>
      </div>

      {/* Circle + Phone (stacked & centered on small devices) */}
      <div className="relative z-10 flex justify-center my-6 md:hidden">
        <div className="relative flex items-center justify-center">
          {/* Circle */}
          <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] bg-[#E7F4FB] rounded-full flex items-center justify-center">
            {/* Phone inside circle */}
            <PhoneImage />
          </div>
        </div>
      </div>

      {/* Phone only (desktop) */}
      <div className="relative z-10 hidden md:flex justify-center my-6">
        <PhoneImage />
      </div>

      {/* Features */}
      <div className="relative z-20 mt-auto space-y-4 text-center sm:text-left">
        <div>
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">
            Instant Digital Codes
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-light">
            Instant generation (Installable Mobile App)
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">
            Smart Delivery Access
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-light">
            Delivery-specific codes (auto-expiry + logs)
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">
            Custom Access Rules
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-light">
            Customizable rules (time/usage/zone controls)
          </p>
        </div>
      </div>
    </section>
  );
}
