"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "@/animation/animate";
import Link from "next/link";

const Banner2 = () => {
  return (
    <div>
      <div className="m-3 container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              Smart schools run on seamless management
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-lg leading-7"
            >
              Our platform enhances collaboration among administrators, teachers, students, and parents, simplifying operations and improving learning outcomes.{" "}
            </motion.p>
            <div>
              <Link href="https://wa.me/2349028366697" target="_blank">
                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src="images/b-sch-2.png"
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
