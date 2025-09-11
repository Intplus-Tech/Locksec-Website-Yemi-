"use client";

import PaymentImage from "./PaymentImage";
import PaymentText from "./PaymentText";

export default function PaymentSection() {
  return (
    <section className="bg-[#FFFFFF] h-auto sm:h-[512px] flex flex-col sm:flex-row gap-6 rounded-[24px] justify-center items-center p-4">
      <PaymentImage />
      <PaymentText />
    </section>
  );
}
