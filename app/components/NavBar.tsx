import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="absolute top-0 z-50 flex w-full justify-between border-b border-gray bg-green bg-opacity-80 p-4 backdrop-blur-lg backdrop-filter md:px-10">
      <Image src="/logo_small.svg" alt="CR 24 logo" width={30} height={30} />
      <div className="flex items-center gap-3 md:gap-7">
        {/* <a className="text-sm" href="">
          Sponsors
        </a> */}
        <a className="text-sm" href="">
          Buy Merch
        </a>
        <button className="rounded-md bg-pink px-4 py-2 text-sm">Events</button>
      </div>
    </nav>
  );
}