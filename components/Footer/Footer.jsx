"use client";

import React from "react";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "@/animation/animate";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="m-3 container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src="images/Logo.png" alt="" className="w-6" />
              <p className="text-xl font-semibold">Future Prep</p>
            </div>
            <p>4517 Washington Ave. Enugu, Nigeria</p>
            <p>@ {year} Future Prep All rights reserved</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Products</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <Link href="https://www.kralis.app/srms" target="_blank">Kralis SRMS</Link>
                </li>
                <li>
                  <Link href="https://www.kralis.app/lms" target="_blank">Kralis LMS</Link>
                </li>
                <li>
                  <Link href="https://www.kralis.app/cbt" target="_blank">Kralis CBT</Link>
                </li>
                <li>
                  <Link href="https://www.kralis.app/fees" target="_blank">Kralis Fees (Beta)</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <Link href="https://www.kralis.app/contact" target="_blank">Contact Us</Link>
                </li>
                <li>
                  <Link href="https://docs.kralis.app/" target="_blank">Kralis Docs</Link>
                </li>
                <li>
                  <Link href="https://support.netrobase.dev/" target="_blank">Help Center</Link>
                </li>
                <li>
                  <Link href="https://status.netrobase.dev/" target="_blank">Status Page</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="https://wa.me/2349028366697">+234 9028366697</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:info@netrobase.dev">Email</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-5">
          &copy; {year} Future Prep. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
