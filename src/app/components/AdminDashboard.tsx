"use client";

import ResidentImage from "./ResidentImage";

export default function AdminDashboard() {
  return (
    <section
      className="relative w-full max-w-[600px] min-h-[665px] mx-auto 
             p-5 sm:p-6 lg:p-8
             bg-[url('/Adminframe-bg.png')] bg-cover bg-[position:50%_center] sm:bg-center bg-white 
             border border-gray-300 rounded-[24px] overflow-hidden 
             flex flex-col"
    >
      
     
      {/* Section heading */}
      <div className="relative z-10 text-center px-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#30404D]">
          Admin Dashboard
        </h2>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-[#30404D]">
          Comprehensive analytics and user management.
        </p>
      </div>

      {/* ResidentImage stays centered on all devices */}
      <div className="relative z-10 flex justify-center my-auto sm:my-6 px-2 text-[#30404D]">
        <ResidentImage />
      </div>


      {/* Feature list */}
      <div className="relative z-20 mt-auto space-y-4 text-center sm:text-left px-2">
        <div>
          <h2 className="font-semibold text-sm sm:text-base md:text-lg text-[#30404D]">
            Real-Time Access Analytics
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[16px] font-light text-[#30404D]">
            Live access monitoring (logs, filters, alerts)
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-sm sm:text-base md:text-lg text-[#30404D]">
            Automated Payment Tracking
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[16px] font-light text-[#30404D]">
            Financial oversight (dues tracking, automated reminders)
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-sm sm:text-base md:text-lg text-[#30404D]">
            User & Security Management
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[16px] font-light text-[#30404D]">
            Role-based controls (resident/security/admin permissions)
          </p>
        </div>
      </div>
    </section>
  );
}
