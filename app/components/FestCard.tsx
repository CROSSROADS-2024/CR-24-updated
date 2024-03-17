import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";

export default function FestCard(props: {
  src: string;
  name: string;
  primary: "#FF6B01" | "#CC3272";
  secondary: "#FF6B01" | "#CC3272";
}) {
  return (
    <motion.div
      initial={{opacity: 0, scale: "0%"}}
      whileInView={{opacity: 1, scale: ["0%", "110%", "100%"]}}
      className="group md:odd:-mt-[100px] cursor-pointer relative flex h-full w-full min-w-[200px] flex-col items-center px-[4px]">
      <div
        style={{
          borderImage: `linear-gradient(to bottom, ${props.secondary}, ${props.primary}) 1 / 5px !important`,
          border: "4px",
          borderStyle: "solid"
        }}
        className={`absolute inset-0 -skew-y-6`}
      ></div>
      <div className="flex justify-end w-full mb-8">
        <svg
          className="group-hover:rotate-12 transition-all duration-150"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
        >
          <path
            d="M13.5484 31.4447L31.3543 12.95"
            stroke={props.primary}
            stroke-width="3.63071"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.204 13.2944L31.3543 12.95L31.6987 31.1003"
            stroke={props.primary}
            stroke-width="3.63071"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image src={props.src} width={150} height={150} alt={props.name} />
      </div>
      <div style={{ backgroundColor: props.primary }} className="w-full text-center px-4 mt-3 mb-9 -skew-y-2">
        {props.name}
      </div>
    </motion.div>
  );
}
