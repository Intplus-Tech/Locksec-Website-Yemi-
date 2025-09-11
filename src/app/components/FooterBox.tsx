"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import HorizontalLine from "./HorizontalLine";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterBox = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9yher8u",
        "template_6r53fk8",
        { user_email: email },
        "q8HD3p5J-GfkDUgoa"
      )
      .then(
        () => {
          alert("Subscription successful!");
          setEmail("");
          setLoading(false);
        },
        (error) => {
          alert("❌ Failed to send email. Please try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <footer className="w-full bg-[#244779] px-4 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-24 space-y-10 mx-auto max-h-[614.82px]">

      {/* Newsletter Section */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-4 mx-auto space-y-4 text-center">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
          Subscribe to our newsletter
        </h2>

        <div className="text-white text-sm sm:text-base leading-relaxed text-[16.61px]">
          <p>Get expert advice for your journey to LockSec delivered to your inbox each month.</p>
          <p>its short and worthwhile — we promise!.</p>
        </div>

        {/* Input & Button */}
        <form
          onSubmit={sendEmail}
          className="
            relative mt-4 bg-[#FFFFFF] p-2 flex items-center 
            w-full max-w-[658px]   <!--  Fix: scales on small, stays 658px max on desktop -->
          "
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-14 pl-4 text-black text-sm focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              absolute right-2 sm:right-6 top-3 
              w-[120px] sm:w-[188.72px] h-[43.57px]  <!--  Responsive button width -->
              bg-[#999894] hover:bg-[#999984] text-white
              p-2 sm:px-6 md:px-8
              text-xs sm:text-sm md:text-base font-semibold font-[Poppins] 
              transition duration-300
            "
          >
            {loading ? "Sending..." : "Subscribe Now"}
          </button>
        </form>
      </div>

      <HorizontalLine />

      {/* Social Icons */}
      <div className="flex flex-wrap gap-6 justify-center items-center mt-5">
        <FaFacebook size={24} className="text-white" />
        <FaInstagram size={24} className="text-white" />
        <FaTwitter size={24} className="text-white" />
        <FaLinkedin size={24} className="text-white" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center items-center gap-4 text-[#FFFFFF] text-sm sm:text-base">
        <a className="text-[13.59px]" href="">Courses</a>
        <a className="text-[13.59px]" href="">Instructors</a>
        <a className="text-[13.59px]" href="">About Us</a>
        <a className="text-[13.59px]" href="">Contact</a>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs sm:text-sm md:text-base font-poppins font-medium text-white">
        © 2025 - int+
      </p>
    </footer>
  );
};

export default FooterBox;
