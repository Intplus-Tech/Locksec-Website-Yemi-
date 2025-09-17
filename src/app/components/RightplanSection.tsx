"use client";

import RightBasic from "./RightBasic";
import RightHeader from "./RightHeader";
import RightPro from "./RightPro";


export default function RightplanSection() {
  return (
    <section className="space-y-6 p-1">
      <RightHeader />
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center sm:items-start">
        <RightBasic />
        <RightPro/>
      </div>
    </section>
  );
}