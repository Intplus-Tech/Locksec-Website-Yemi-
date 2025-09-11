"use client";

import Image from "next/image";

export default function PaymentImage() {
  return (
    <section className="flex justify-center items-center">
      <Image
        src="/Group-bg.png"
        alt="Groupimage"
        width={500}
        height={428}
        className="w-full max-w-[400px] sm:max-w-[500px] h-auto"
      />
    </section>
  );
}
