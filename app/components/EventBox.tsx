import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import comingSoonSVG from "../../public/comingsoon.svg";

function EventBox() {
  return (
    <div className="group relative h-[250px] w-[90%] p-1 md:h-[400px] md:w-[60%] ">
      {/* Base */}
      <div className="absolute top-0 h-[250px] w-full border-2 border-black  bg-[#CC3272] md:h-[400px]"></div>
      <div className="absolute top-0 h-[250px] w-full -translate-x-[10px] -translate-y-[10px] border-2 border-black bg-[#F58D14]  transition-all delay-75 group-hover:translate-x-[0px] group-hover:translate-y-[0px] md:h-[400px]"></div>
      {/* Top */}
      <div className="absolute top-0 flex h-[250px] w-full -translate-x-[20px] -translate-y-[20px]  overflow-hidden border-2  border-black bg-[#CC3272]   transition-all  delay-75 group-hover:translate-x-[0px] group-hover:translate-y-[0px] md:h-[400px]">
        <div className="flex w-full flex-col items-start justify-between p-2 pl-0 md:p-5">
          {/* <Image
            src="/arrow.svg"
            alt=""
            width={40}
            height={40}
            className="transition-all group-hover:rotate-[45deg]"
          /> */}
          <div className="text-[#CC3272]">.</div>

          <div className="relative p-2 md:p-5">
            <Image src={comingSoonSVG} alt="Coming Soon" className="absolute md:-right-20 md:-top-20 -right-5 -top-16 w-[80%]" />

            <h1 className=" eventheading text-left text-[#F58D14]">EVENTS</h1>
            <h2 className="lg::text-xl text-left text-xs md:text-sm">
              dive into exclusive <br />
              tech & non-tech events
            </h2>
          </div>
        </div>
        <div className="relative flex h-full w-full md:w-[70%]">
          <Image
            src="/Tiger-Events.png"
            alt=""
            width={1080}
            height={920}
            className="absolute bottom-0 left-0 object-contain  "
          />
        </div>
      </div>
    </div>
  );
}

export default EventBox;
