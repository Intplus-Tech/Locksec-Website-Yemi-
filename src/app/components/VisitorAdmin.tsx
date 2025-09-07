"use client";

import AdminDashboard from "./AdminDashboard";
import VisitorCode from "./VisitorCode";

export default function VisitorAdmin(){
 return(
<section className="flex gap-2">
  <VisitorCode/>
  <AdminDashboard/>
</section>

 )

}