'use client';
import './parallelogram.css';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Image from 'next/image';
import { useInView } from "react-intersection-observer";
const events = [
  {
    name: "CSE Dept. Tech Fest",
    imageLink: "/hash.png",
    styles: 'mb-20 ml-10 md:w-[220px] md:mb-[140px] md:ml-[70px]  md:h-[280px] w-[120px] h-[147px]  lg:w-[177px] lg:h-[218px] lg:mb-22 lg:ml-12 lg:mb-[100px]'
    ,top:''
  },
  {
    name: "EEE Dept. Tech Fest",
    styles: "mb-14 ml-0 w-[204px] h-[204px] md:w-[350px] md:h-[350px] md:mb-[80px] md:ml-[10px] lg:w-[296px] lg:mr-[50px] lg:h-[296px] lg:mb-22 lg:ml-12 lg:mb-[52px]",
    imageLink: "/adharva.svg"
    , top: ' sm:mt-[100%]'
  },
  {
    name: "ECE Dept. Tech Fest",
    styles: "mb-10 ml-0 w-[213px] h-[200px] md:w-[300px] md:mb-[100px] md:ml-[30px] lg:w-[308px] md:h-[350px] lg:h-[296px] lg:mb-22 lg:ml-2 lg:mb-[40px]",
    imageLink: "/trydan.png"
    ,top:''

  },
  {
    name: "CE Dept. Tech Fest",
    imageLink: "/CE.svg",
    styles: "mb-14 ml-0 w-[204px] h-[204px] md:w-[350px] sm:pb-10 md:h-[350px] md:mb-[80px] md:ml-[10px] lg:w-[296px] lg:mr-[50px] lg:h-[296px] lg:mb-22 lg:ml-12 lg:mb-[52px]",
    top:'sm:mt-[100%]'

  },
];

const cardVariants1: Variants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
};

const Parallelogram = () => {
  const controls = useAnimation();
  const squareVariants = {
    visible: { opacity: 1.2, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const loopAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 3, ease: "easeOut", repeat: Infinity, type: 'tween' },
  };
  const [width2, setWidth] = useState(0);
  const [height2, setHeight] = useState(0);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-[calc(vw)]  h-[calc(vw)+200px] flex items-center  justify-center sm:mb-[500px] mb-5 ">
      <div className="flex lg:flex-row md:w-[500px]  md:items-center  md:justify-center  md:flex-col mb-11 gap-20 flex-col">
        {events.map((e, index) => (
          <motion.div
            key={index}
            //className="relative flex-col lg:pl-3  "
            className={`relative flex-col lg:pl-3 ${e.top}`}
            variants={cardVariants1}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            //whileHover={{ scale: 1 }}
            exit="hidden"
            transition={{ duration: 0.2, ease: "easeOut" }}
            ref={ref}
          >
            <motion.div
              key={index}
              animate={inView ? (loopAnimation) : "hidden"}
              //whileHover={{ scale: 1.2 }}
              className={` `}
              ref={ref}
            >
              <div className="absolute top-5 right-12   mr-4 ms:right-0 lg:w-[100x] lg:h-[150px] md:w-[50px] md:h-[50px] w-[30px] h-[30px]  z-30">
                <Image
                  src="/arrow.png"
                  alt=""
                  width={70}
                  height={50}
                  className=" mb-20 ml-10  h-[100%] w-[100%] lg:mb-22 lg:ml-6   md:[50px] lg:h-[50px] lg:w-[60px] z-30 top-4 left-10"
                />
              </div>
              <div className={`parallelogram md:w-[400px] md:h-[500px] w-[calc(100vw/1.8)] h-[calc(100vh/3)] lg:w-[calc(100vw/5.5)]   lg:h-[calc(100vh/2.4)]  transform -skew-x-1 -skew-y-6 flex items-center justify-center `}>
                <div key={index} className={`relative md:w-[370px] md:h-[470px] w-[calc(100vw/2)] h-[calc(100vh/3.3)] flex lg:w-[calc(100vw/6)] lg:border-10  lg:h-[calc(100vh/2.6)] border-[#061A19]  transform -skew-x-0 -skew-y-4  items-end justify-bottom  bg-[#061A19]`}>
                  <div className={`flex items-center justify-center `}>
                    <Image
                      src={e.imageLink}
                      alt=""
                      width={100}
                      height={100}
                      className={`${e.styles} `}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute pb-1 md:-ml-[2px] md:w-[calc(100vw/2.21)] lg:mt-6  top-3/4 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 lg:w-[calc(100vw/6)]  lg:h-[30px] h-[20px] lg:-ml-[2.1px]   bg-orange border-white z-30 w-[calc(100vw/1.988)]">
                <h1 className="text-center text-sm md:text-[20px] text-stone-50 lg:text-lg font-medium font-['Poppins']  tracking-tighter ">{e.name}</h1>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Parallelogram;