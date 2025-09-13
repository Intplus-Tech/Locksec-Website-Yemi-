"use client";

import PaymentImage from "./PaymentImage";
import PaymentText from "./PaymentText";

export default function PaymentSection() {
  return (
    <section className="bg-[#FFFFFF] bg-[url('/Paymentframe-bg.png')] bg-cover h-auto sm:h-[512px] flex flex-col sm:flex-row gap-6 rounded-[24px] justify-center items-center p-4">
      <PaymentImage />
      <PaymentText />
    </section>
  );
}
