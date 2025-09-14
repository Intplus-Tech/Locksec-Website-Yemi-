"use client";

export default function PaymentText() {
  return (
    <section className="-mt-6 sm:-mt-10 space-y-5 text-center sm:text-left">
      <div>
        <h2 className="w-full sm:w-[500px] font-bold text-[20px] sm:text-[24px] text-[#30404D]">
          Payment Tracking
        </h2>
        <p className="w-full sm:w-[509px] font-normal text-[#30404D] text-[13px] sm:text-[14px]">
          Automated dues collection and financial transparency for estates.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="w-full sm:w-[500px] font-bold text-[14px] text-[#30404D]">
            Real-Time Payment Monitoring
          </h2>
          <p className="w-full sm:w-[501px] text-[#394B59] text-[12px] font-normal">
            Automated reminders (SMS/email) reduce late payments
          </p>
        </div>

        <div>
          <h2 className="w-full sm:w-[500px] font-bold text-[14px] text-[#30404D]">
            Customizable Billing Cycles
          </h2>
          <p className="w-full sm:w-[501px] text-[#394B59] text-[12px] font-normal">
            Secure payment logs for full financial accountability
          </p>
        </div>

        <div>
          <h2 className="w-full sm:w-[500px] font-bold text-[14px] text-[#30404D]">
            Financial Reporting
          </h2>
          <p className="w-full sm:w-[501px] text-[#394B59] text-[12px] font-normal">
            Customizable reports for association or management reviews
          </p>
        </div>
      </div>
    </section>
  );
}
