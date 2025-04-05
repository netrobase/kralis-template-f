"use client";

import React from "react";
import { delay, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "@/animation/animate";

const TestimonialData = [
  {
    id: 1,
    name: "Mrs. Chikelu",
    designation: "Parent",
    img: "https://www.netrobase.com/_next/image?url=%2Fimages%2Fprecious.png&w=256&q=75",
    text: "Kralis has made it incredibly easy to keep track of my child's academic progress. The detailed insights are invaluable.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Mr. Eze Emmanuel",
    designation: "Teacher",
    img: "https://www.netrobase.com/_next/image?url=%2Fimages%2Fleo.png&w=256&q=75",
    text: "As a teacher, Kralis has revolutionized the way I manage student results. It's intuitive and saves me so much time.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Rev Fr Alphonsus Chime",
    designation: "Dean",
    img: "https://www.netrobase.com/_next/image?url=%2Fimages%2Ffortune.png&w=256&q=75",
    text: "Kralis has transformed our academic data management. It's secure, reliable, and offers valuable insights for decision-making.",
    delay: 0.6,
  },
];
const Testimonial = () => {
  return (
    <div className="py-14">
      {/* heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Words from our coustomers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-lg max-w-[350px] mx-auto"
        >
          Real experiences, real impact—see how Kralis is transforming education.
        </motion.p>
      </div>
      {/* tesitomonial cards */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300"
              >
                {/* Upper section */}
                <div className="flex flex-row items-center gap-3 ">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold group-hover:text-black">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-black">
                      {card.designation}
                    </p>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                {/* Bottom section */}
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
