"use client";

import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ReadyText() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center p-6 lg:p-20 my-auto">
      <div className="space-y-6 w-full max-w-[1200px]">
        {/* Title + Button */}
        <div className="mb-10 lg:mb-16">
          <p
            className="font-inter font-bold text-[32px] sm:text-[40px] lg:text-[60px] 
                       leading-tight lg:leading-[64.8px]  relative 
                       top-0 lg:top-[-12px] w-full lg:w-[350px] h-auto text-[#30404D]"
          >
            Ready to secure your community?
          </p>

          <button className="mt-4 lg:mt-0 w-[150px] sm:w-[172px] h-[48px] sm:h-[52px] rounded-[142px] bg-[#FFFFFF] text-sm sm:text-base text-[#30404D]">
            Get started
          </button>
        </div>

        {/* Content boxes */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 ">
          {/* Left card */}
          <div className="w-full sm:w-[350px] h-auto lg:h-[362px] rounded-[24px] bg-[#FFFFFF] space-y-5 p-4">
            <div className="text-[24px] sm:text-[28px] lg:text-[32.28px]">
              <p className="text-[#30404D]">Every...</p>
              <p className="font-semibold text-[#30404D]">gate entry</p>
              <p className="font-semibold text-[#30404D]">visitor pass</p>
              <p className="font-semibold text-[#30404D]">payment collected</p>
              <p>...matters.</p>
            </div>

            <div className="space-y-2">
              <div className="flex space-x-3 items-center">
                <Image
                  src="/lock-logo.png"
                  alt="logo-lock"
                  width={36}
                  height={36}
                  className="sm:w-[44px] sm:h-[44px]"
                />
                <p className="text-[24px] sm:text-[28px] lg:text-[32px]">
                  <span className="font-semibold text-[#30404D]">Lock</span>
                  <span className="text-[#375DFB]">Sec</span>
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#30404D]">
                  © 2025 All Rights Reserved, Int+.
                </p>
              </div>
            </div>
          </div>

          {/* Middle cards */}
          <div className="flex flex-col gap-6">
            <div className="w-full sm:w-[350px] h-auto lg:h-[225px] rounded-[24px] bg-[#FCFCFC] p-4 space-y-4">
              <p className="font-bold text-[20px] sm:text-[24px] lg:text-[30px] text-[#333333]">
                Support
              </p>
              <div className="text-sm sm:text-[13.8px] font-normal text-[#333333]">
                <p>Have questions? Get in touch or checkout</p>
                <p>our help center</p>
              </div>
              <div className="text-sm sm:text-[13.8px] font-normal text-[#333333]">
                <p className="text-[#30404D]">You can also text our support team at (310) 23-5384</p>
                <p className="text-[#30404D]">email us at support@locksec.com</p>
              </div>
            </div>

            <div className="w-full sm:w-[350px] h-auto lg:h-[112.81px] rounded-[24px] bg-[#FCFCFC] flex flex-col items-center justify-center text-[12px] sm:text-[13.46px] p-3 text-[#30404D]">
              <p>
                <span className="text-[#30404D]">Term of use </span>
                <span className="ml-2 text-[#30404D]">privacy policy</span>
              </p>
            </div>
          </div>

          {/* Social card */}
          <div className="w-full sm:w-[168px] h-auto lg:h-[364px] rounded-[24px] bg-[#FCFCFC] flex flex-col items-center justify-center space-y-4 py-6">
            <p className="font-bold text-[20px] sm:text-[24px] lg:text-[30px] text-[#30404D]">
              Social
            </p>
            <div className="flex lg:flex-col gap-4">
              <FaInstagram size={24} className="text-[#30404D]"/>
              <FaFacebook size={24} className="text-[#30404D]"/>
              <FaTwitter size={24} className="text-[#30404D]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
