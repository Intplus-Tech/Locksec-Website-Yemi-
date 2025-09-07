"use client";


import AccessSection from "./AccessSection";
import BuiltText from "./BuiltText";
import HorizontalLine from "./HorizontalLine";
import RobustCode from "./RobustCode";
export default function PlateformText(){

  return(
    <section className="space-y-4">
      <AccessSection />
      <HorizontalLine/>
      <RobustCode/>
      <HorizontalLine/>
      <BuiltText/>
    </section>
  )
}