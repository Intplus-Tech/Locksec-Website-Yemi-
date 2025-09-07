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
        <h2 className="text-xl md:text-2xl font-bold">
          Community Management
        </h2>
        <p className="text-sm md:text-base">
          Centralized control for all estate residents, businesses,and
        </p>
        <p className="text-sm md:text-base">security operation</p>
      </div>

      {/* Block 2 */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold">Register</h2>
        <p className="text-sm md:text-base">
          Self-service tools + bulk onboarding
        </p>
      </div>

      {/* Block 3 */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold">Manage</h2>
        <p className="text-sm md:text-base">
          Filterable directory + role-based controls
        </p>
      </div>

      {/* Block 4 */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold">Track</h2>
        <p className="text-sm md:text-base">
          Access logs + financial dashboards + security reports
        </p>
      </div>
    </section>
  );
}
