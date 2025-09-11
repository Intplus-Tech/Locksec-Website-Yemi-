"use client";

import AdminDashboard from "./AdminDashboard";
import VisitorCode from "./VisitorCode";

export default function VisitorAdmin() {
  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:gap-2">
      <VisitorCode />
      <AdminDashboard />
    </section>
  );
}
