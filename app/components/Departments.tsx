'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import LogoLanding from '../../public/coming-soon.png';
const Departmental = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    }, []);
    return (
        <div className="w-vw h-vh pt-10 flex flex-col overflow-hidden" >
            <div className="mx-auto">
            <Image
            className="w-[200px] max-w-[300px]  object-contain sm:w-[300px] sm:h-[300px] "
            src={LogoLanding}
            alt="tiger image"
          />
            </div>
            <div className="w-full flex flex-col items-center mt-6 sm:mb-20 mb-10  relative ">
                <div className="text-center text-orange sm:text-[110px] font-bold font-['Mohave'] leading-[96.25px] tracking-wide z-10 text-[70px] sm:leading-[44px]">DIVE INTO</div>
                <div className="absolute text-center text-black top-5 sm:text-[110px] font-bold font-['Mohave'] leading-[96.25px] tracking-wide z-0 text-[70px] sm:leading-[44px]">DIVE INTO</div>
            </div>
            <div className="capitalize  text-white text-center text-2xl sm:text-4xl font-medium font-['Poppins'] leading-[50.06px] mt-5 sm:mt-10">the technical fests of MCBET</div>

        </div>
    )
}

export default Departmental


