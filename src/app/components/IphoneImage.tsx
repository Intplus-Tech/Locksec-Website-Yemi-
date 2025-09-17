import Image from "next/image";

export default function IphoneImage() {
  return (
    <div className="hidden lg:block">
      <Image
        src="/iphone-bg.svg"
        alt=""
        width={218}
        height={311}
        className="absolute -right-[1rem] lg:bottom-[8rem] lg:w-[218px] lg:h-[311px] lg:z-auto"
      />
    </div>
   
  );
}
