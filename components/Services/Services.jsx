"use client";

import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdLaptopMac } from "react-icons/md";
import { motion } from "framer-motion";
import { SlideUp } from "@/animation/animate";
import Link from "next/link";

const ServiceCard = [
  {
    id: 1,
    title: "Result Management",
    description:
      "Efficiently manage and track student performance data with our advanced result management system.",
    icon: <FaVectorSquare />,
    textlink: "srms.kralis.app",
    link: "https://srms.kralis.app/",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Administrative Tools",
    description:
      "Manage staff and student information, attendance, and other administrative tasks with ease.",
    icon: <FaPenToSquare />,
    textlink: "kralis.app",
    link: "https://kralis.app/",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Computer-Based Testing",
    description:
      "Conduct secure and efficient online assessments and examinations",
    icon: <MdLaptopMac />,
    textlink: "cbt.kralis.app",
    link: "https://cbt.kralis.app/",
    delay: 0.6,
  },
];
const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            Awesome features that make Kralis the ultimate smart school solution
          </motion.p>
        </div>
        {/* card section */}
        <div className="m-3 grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-sm">{card.description}</p>
                <Link
                  href={card.link}
                  target="_blank"
                  className="inline-block border-b border-black"
                >
                  <p>{card.textlink}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
