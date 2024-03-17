import Image from "next/image";
import React from "react";

function StackBox() {
  return (
    <div className="0 group relative w-[60%]">
      {/* Base */}
      <div className="absolute top-0 h-[400px] w-full border-2  border-black bg-[#CC3272]"></div>
      <div className="absolute top-0 h-[400px] w-full -translate-x-[10px] -translate-y-[10px] border-2 border-black  bg-[#F58D14] transition-all delay-75 group-hover:translate-x-[0px] group-hover:translate-y-[0px]"></div>
      {/* Top */}
      <div className="flex absolute top-0 h-[400px] w-full -translate-x-[20px] -translate-y-[20px] border-2  border-black  bg-[#CC3272] transition-all delay-75 group-hover:translate-x-[0px] group-hover:translate-y-[0px] pr-5">
        
        <div className="w-[100%]">
          <Image src="/Tiger-Campus.png" alt='' width={1080} height={920} className="w-full h-full"/>
        </div>
        <div className="w-full flex flex-col justify-between items-end">
          <Image src="/arrow-up-right.svg" alt="" width={80} height={80} />

         <div className="p-5">
         <h1 className=" heading text-[#F58D14] text-right">
            CAMPUS <br />
            AMBASSADOR
          </h1>
          <h2 className="text-xl text-right">
          be the face of crossroads <br/> in your campus !
          </h2>
         </div>
        </div>
      </div>
    </div>
  );
}

export default StackBox;
