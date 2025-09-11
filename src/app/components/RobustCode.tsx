"use client";

export default function RobustCode() {
  return (
    <ul className="list-disc flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-center sm:justify-between gap-6 sm:gap-4 mx-auto px-4 text-sm sm:text-base md:text-lg lg:text-[16px]">
      <li className="w-full sm:w-[290px] h-auto sm:h-[75px] opacity-100">
        <span className="font-bold">Robust Code Generation.</span> Create time-bound
        access passes for any visitor type.
      </li>
      <li className="w-full sm:w-[300px] h-auto sm:h-[75px] opacity-100">
        <span className="font-bold">Seamless Verification.</span> Security teams
        validate entries in real-time via PWA.
      </li>
      <li className="w-full sm:w-[300px] h-auto sm:h-[75px] opacity-100">
        <span className="font-bold">Unified Dashboard.</span> Track access logs,
        payments, and resident activity in one place.
      </li>
    </ul>
  );
}
