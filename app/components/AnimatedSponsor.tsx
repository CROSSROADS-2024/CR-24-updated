"use client";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import hand from "@/public/Hand.png";
import { SponsorList } from "../utils/sponsorList";

export default function AnimatedSponsor() {
  const [containerRef, animate] = useAnimate();
  const isInView = useInView(containerRef);

  useEffect(() => {
    console.log(isInView);

    if (isInView) {
      animate("#hand_container", { gap: "110vw" }, { duration: 1, delay: 1.0 });
      animate(
        "#hand_left",
        { transform: "rotate(-30deg) scaleX(-1)" },
        { duration: 0.5, delay: 1.2 }
      );
      animate(
        "#hand_right",
        { transform: "rotate(30deg)" },
        { duration: 0.5, delay: 1.2 }
      );
      animate(".sponsor_card", { opacity: 100 }, { duration: 0.5, delay: 1.0 });
    } else if (containerRef.current) {
      animate("#hand_container", { gap: "0" }, { duration: 0 });
      animate("#hand_left", { transform: "rotate(0deg) scaleX(-1)" }, { duration: 0 });
      animate("#hand_right", { transform: "rotate(0deg)" }, { duration: 0 });
      animate(".sponsor_card", { opacity: 0 }, { duration: 0 });
    }
  }, [animate, isInView, containerRef]);

  return (
    <motion.section
      ref={containerRef}
      className="relative flex items-center justify-center pt-20 sm:m-[10%] pb-10 "
    >
      <div className="grid max-w-[90vw] grid-flow-row grid-cols-6 gap-2 md:max-w-[70vw] md:grid-cols-8">
        {SponsorList.map((name, i) => (
          <div
            key={i}
            className={`sponsor_card max-h-[80px] max-w-[100px] gap-2  rounded-md bg-white p-1 opacity-0 drop-shadow-xl`}
            style={
              i == 5 || i == 48
                ? { backgroundColor: "black" }
                : { backgroundColor: "white" }
            }
          >
            <Image
              key={i}
              src={`/logos/${name}`}
              width={200}
              height={100}
              alt={`Sponsor ${i}`}
              className="h-full w-full"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}

        <div className="col-start-3 col-end-5 row-start-4 row-end-6 flex flex-col items-center justify-center p-10 text-center text-sm font-bold md:col-start-4 md:col-end-6 md:row-start-2 md:row-end-4 md:text-3xl">
          <h4>Our</h4>
          <h4>Sponsors</h4>
        </div>
      </div>
      <motion.div
        id="hand_container"
        className="absolute flex h-full w-full items-center justify-center gap-0"
        transition={{delay:4}}
      >
        <Image
          id="hand_left"
          src={hand}
          className="max-w-[50vw]"
          alt="left_hand"
          style={{ transform: "scaleX(-1)" }}
        />
        <Image
          id="hand_right"
          src={hand}
          className="max-w-[50vw] transform "
          alt="right_hand"
        />
      </motion.div>
    </motion.section>
  );
}
