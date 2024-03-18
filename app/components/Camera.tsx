// Camera.tsx
import React, { useEffect, useState } from "react";
import "./camera.css";
import { motion } from "framer-motion";

const photos = ["pol1.png", "pol2.png", "pol3.png", "pol4.png", "pol5.png", "pol6.png", "pol7.png"];
const names = ["Kalidas Jayaram", "Darshan Raval", "Vineeth Sreenivasan", "Basil Joseph", "Matadoria", "Masala Coffee", "MoniKa Starling"];

const Camera = () => {
  const ANIMATION_DURATION = 5;
  const variants = {
    visible: (i: number) => ({
      bottom: [20, -200, -200, 20],
      transition: {
        delay: i * ANIMATION_DURATION,
        duration: ANIMATION_DURATION,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: ANIMATION_DURATION * (photos.length - 1),
      },
    }),
    hidden: { bottom: 20 },
  };

  return (
    <div className="container">
      <div className="camera_wrapper">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1, transform: "translateY(0%)" },
            hidden: { opacity: 0, transform: "translateY(-100%)" },
          }}
        >
          <div className="camera">
            {photos.map((photo, index) => (
              <motion.div
                className={"photo_frame"}
                key={index}
                custom={index}
                initial={"hidden"}
                animate={"visible"}
                variants={variants}
                style={{ position: "absolute", bottom: "0px" }}
              >
                <img src={`/${photo}`} alt="" />
                <p>{names[index]}</p>
              </motion.div>
            ))}
            <div className="camera_cover"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Camera;