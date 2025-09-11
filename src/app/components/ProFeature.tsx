"use client";

export default function ProFeature() {

  return (
    <div className="space-y-4">
      {[
        "Up to 500 residential units",
        "Custom access rules (time/date restrictions)",
        "Automated payment reminders",
        "Priority support (24hr response)",
        "Financial reporting dashboard",
        "Reduced 2% transaction fee",
      ].map((text, index) => (
        <div key={index} className="flex items-center gap-3">
          {/* Tick Container */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "12px",
              background: "#E1EEFA",
              opacity: 1,
            }}
          >
            {/* Tick SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
            >
              <path
                d="M1 5.5L4.5 9L11 2"
                stroke="#2F5F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Text */}
          <p className="text-[#30404D] text-sm">{text}</p>
        </div>
      ))}
    </div>


  )
}