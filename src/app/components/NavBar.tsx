"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full ">
      <div className="flex items-center justify-between  py-3 ">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image src="/lock-logo.png" alt="locklogo" height={40} width={40} />
          <h2 className="font-bold text-2xl md:text-[32px] text-black">
            Lock<span className="text-[#375DFB]">Sec</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <ul className="flex gap-6 font-medium text-[16px]">
            <li className="text-[#36364ACC]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[#36364ACC]">
              <Link href="/">Features</Link>
            </li>
            <li className="text-[#36364ACC]">
              <Link href="/">Price</Link>
            </li>
            <li className="text-[#36364ACC]">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="text-[#244779] font-medium">
            Login
          </Link>
          <Link
            href="/"
            className="bg-[#244779] rounded-lg px-4 py-2 text-white font-medium"
          >
            Create account
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg border border-gray-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pb-4 space-y-4 text-[#30404D]">
          <ul className="flex flex-col gap-4 font-medium text-[16px] text-[#30404D]">
            <li className="text-[#30404D]">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="text-[#30404D]">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Features
              </Link>
            </li>
            <li className="text-[#30404D]">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Price
              </Link>
            </li>
            <li className="text-[#30404D]">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-[#244779] text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/"
              className="bg-[#244779] rounded-lg px-4 py-2 text-center text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Create account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
