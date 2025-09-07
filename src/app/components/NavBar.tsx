"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar(){

  return(
 <section className="flex flex-row items-center justify-between ">
  <div className="flex gap-3">
    <div>
          <Image
            src="/lock-logo.png"
            alt="locklogo"
            height="44"
            width="44"
          />
    </div>

        <h2 className="font-bold text-[32px]">Lock<span className="text-[#375DFB]">Sec</span></h2>
  </div>

  <div className="flex max-w-[341px] pl-24">
        <ul className="flex gap-[36px] font-medium font-inter text-[16px] ">

          <li>
            <Link href="/">
              Home
            </Link>
          </li>
     
      <li>
        <Link href="/">
           Features
        </Link>
       
      </li>
      <li>
        <Link href="/">
        Price
        </Link>
      </li>
      <li>
            <Link href="/">
              Contact
            </Link></li>
       </ul>
  </div>

  <div className="flex max-w-243px gap-[16px]">
    
      <button>
      <Link href="/">
        Login
      </Link>
      </button>
    
    
        <button className="bg-[#244779] rounded p-2 w-[152px] h-[38px] text-[#FFFFFF] font-inter ">
          <Link href="/">
            Create account
          </Link>
        </button>
  
    
  </div>

 

 
 </section>

  )
}