"use client";

export default function CommunityText() {
  return (
    <section
      className="
        relative 
       max-w-[625px] min-h-[332px] 
        flex flex-col gap-4
        opacity-100 
         ml-[36px]
      "
    >
      {/* Block 1 */}
      <div className="w-full max-w-[360px] flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-bold text-[#30404D]">
          Community Management
        </h2>
        <p className="text-sm md:text-base text-[#30404D]">
          Centralized control for all estate residents, businesses,and
        </p>
        <p className="text-sm md:text-base">security operation text-[#30404D]</p>
      </div>

      {/* Block 2 */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-[#30404D]">Register</h2>
        <p className="text-sm md:text-base text-[#30404D]">
          Self-service tools + bulk onboarding
        </p>
      </div>

      {/* Block 3 */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-[#30404D]">Manage</h2>
        <p className="text-sm md:text-base text-[#30404D]">
          Filterable directory + role-based controls
        </p>
      </div>

      {/* Block 4 */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-[#30404D]">Track</h2>
        <p className="text-sm md:text-base text-[#30404D]">
          Access logs + financial dashboards + security reports
        </p>
      </div>
    </section>
  );
}
