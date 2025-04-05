"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'

const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "#",
  },
  {
    id: 3,
    title: "Services",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="m-3 flex items-center gap-3">
          <img src="images/Logo.png" alt="logo" className="w-10" />
          <span className="text-2xl font-bold">Future Prep</span>
        </div>
        {/* Link section */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                className="inline-block mx-4 text-lg font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button section */}
        <div>
          <Link href="https://www.kralis.app/" target="_blank">
            <button className="primary-btn">School Portal</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
