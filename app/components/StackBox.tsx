import React from "react";

function StackBox() {
  return (
    <div className="relative group w-[60%] 0">
      <div className="absolute top-0 h-[400px] w-full bg-[#CC3272]  border-black border-2"></div>
      <div className="absolute top-0 h-[400px] w-full bg-[#F58D14] -translate-x-[10px] -translate-y-[10px] group-hover:translate-x-[0px] group-hover:translate-y-[0px]  border-black border-2 transition-all delay-75 duration-30"></div>
      <div className="absolute top-0 h-[400px] w-full bg-[#CC3272] -translate-x-[20px] -translate-y-[20px] group-hover:translate-x-[0px]  group-hover:translate-y-[0px]  border-black border-2 transition-all delay-75 duration-30"></div>
    </div>
  );
}

export default StackBox;
