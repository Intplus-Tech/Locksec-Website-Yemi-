"use client";


type ProButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ProButton({ className = "", ...props }: ProButtonProps) {
  return (
    <button
      className={`w-full sm:w-[450px] h-[60px] sm:h-[72px] rounded-[64px] border border-gray-400 text-[#24477966] mt-6 sm:mt-0 hover:bg-[#6E8AFC] hover:text-[#FFFFFF] transition-colors duration-200 ${className}`}
      {...props}
    >
      Get started for a free trial
    </button>
  );
}
