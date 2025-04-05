"use client";

import React from "react";
// import Banner1 from "@/assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "@/animation/animate";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              // src={Banner1}
              src="images/b-sch-1.png"
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] ">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              Kralis elevates institutions into smart schools
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-lg leading-7"
            >
              With powerful tools for learning, result management, fee management, and computer-based testing, we streamline operations and drive excellence.{" "}
            </motion.p>
            <div>
              <Link href="https://kralis.app/" target="_blank">
                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Discover Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
