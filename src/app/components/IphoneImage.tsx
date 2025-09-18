"use client";

import { useEffect, useState } from "react";

export default function IphoneImage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // check on mount
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();

    // listen for resize
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (!isDesktop) return null; 

  return (
    <img
      src="/iphone-bg.svg"
      alt="iPhone"
      width={218}
      height={311}
      className="absolute -right-[1rem] bottom-[8rem]"
    />
  );
}
