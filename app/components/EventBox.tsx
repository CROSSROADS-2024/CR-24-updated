import Image from "next/image";
import React from "react";

function EventBox() {
  return (
   
      <div className="group relative w-[90%] md:h-[400px] h-[250px] p-1 md:w-[60%] ">
        {/* Base */}
        <div className="absolute top-0 h-[250px] w-full border-2 border-black  bg-[#CC3272] md:h-[400px]"></div>
        <div className="absolute top-0 h-[250px] w-full -translate-x-[10px] -translate-y-[10px] border-2 border-black bg-[#F58D14]  transition-all delay-75 group-hover:translate-x-[0px] group-hover:translate-y-[0px] md:h-[400px]"></div>
        {/* Top */}
        <div className="absolute top-0 flex h-[250px] w-full -translate-x-[20px] -translate-y-[20px]  overflow-hidden border-2  border-black bg-[#CC3272]   transition-all  delay-75 group-hover:translate-x-[0px] group-hover:translate-y-[0px] md:h-[400px]">
          <div className="relative flex h-full w-full">
            <Image
              src="/Tiger-Campus.png"
              alt=""
              width={1080}
              height={920}
              className="absolute bottom-0 left-0 object-contain  "
            />
          </div>
          <div className="flex w-full flex-col items-end justify-between p-2 pl-0 md:p-5">
            <Image src="/arrow.svg" alt="" width={40} height={40} />

            <div className="p-2 md:p-5">
              <h1 className=" eventheading text-right text-[#F58D14]">
                CAMPUS <br />
                AMBASSADOR
              </h1>
              <h2 className="text-right text-xs lg::text-xl md:text-sm">
                be the face of crossroads <br className="hidden md:flex" /> in your campus
                !
              </h2>
            </div>
          </div>
        </div>
      </div>

  );
}

export default EventBox;
