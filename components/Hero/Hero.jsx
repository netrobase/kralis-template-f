"use client";

import React from "react";
// import HeroPng from "@/assets/hero.png";
import { motion } from "framer-motion";
import { SlideUp } from "@/animation/animate";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif uppercase"
            >
              Welcome to Future Prep
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-500 leading-7"
            >
              Building a brighter future through knowledge, character, and real-world skills—preparing you to lead, innovate, and succeed in an ever-evolving world.
            </motion.p>
            <div className="space-x-4">
              <Link href="https://www.kralis.app/" target="_blank">
                <motion.button
                  variants={SlideUp(0.8)}
                  initial="initial"
                  animate="animate"
                  className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Result Portal
                </motion.button>
              </Link>
              <Link href="https://wa.me/2349028366697" target="_blank">
                <motion.button
                  variants={SlideUp(1.1)}
                  initial="initial"
                  animate="animate"
                  className="primary-btn uppercase"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
          {/* Images section */}
          <div className="flex flex-col items-center justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              // src={HeroPng}
              src="images/b-sch.png"
              alt=""
              className="w-[80%] md:w-[700px] object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
