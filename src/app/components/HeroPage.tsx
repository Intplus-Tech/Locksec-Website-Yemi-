"use client";

import ContentWrapper from "./ContentWrapper";
import HeroSmart from "./HeroSmart";
import NavBar from "./NavBar";

export default function HeroPage() {
  return (
    <main className="bg-[url('/hero-bg.png')] bg-cover min-h-screen w-full">
      <ContentWrapper>
        <NavBar />
        <HeroSmart />
      </ContentWrapper>
    </main>
  );
}
