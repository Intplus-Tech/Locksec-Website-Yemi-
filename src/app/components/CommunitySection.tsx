"use client";

import CommunityText from "./CommunityText";
import DashboardImage from "./DashboardImage";
import Image from "next/image";

export default function CommunitySection() {
  return (
    <section
      className="
        relative 
        w-full max-w-[1200px] h-auto min-h-[512px] 
        mx-auto  py-8 
        bg-[url('/Frame.png')] bg-cover bg-white 
        border-2 border-gray-300 rounded-[24px] 
        overflow-hidden
      "
    >
      {/* Background decorative arrow */}
      <Image
        src="/arrow-shape.png"
        alt="Decorative Arrow"
        width={300}
        height={300}
        className="absolute bottom-0 left-0 opacity-90 pointer-events-none"
      />

      {/* Section content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 h-full ">
        <CommunityText />
        <DashboardImage />
      </div>
    </section>
  );
}
