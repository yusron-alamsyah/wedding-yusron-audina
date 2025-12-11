"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FixedLeftSection() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:w-3/4 lg:h-screen lg:z-10"
    >
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100/40 z-10"></div>
      <Image
        src="/images/IMG_4421.jpg"
        alt="Wedding Photo"
        fill
        className="object-cover"
        priority
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-start z-20 text-white p-8 md:p-12 lg:p-16 pb-16 md:pb-20 lg:pb-24">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs lg:text-sm tracking-[0.3em] uppercase mb-4 text-shadow-lg"
        >
          THE WEDDING OF
        </motion.p>
        
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl lg:text-7xl xl:text-8xl font-serif mb-4 text-shadow-lg leading-tight"
        >
          Yusron & Audina
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base lg:text-lg tracking-[0.2em] text-shadow-lg"
        >
          11 . 01 . 2026
        </motion.p>
      </div>
    </motion.div>
  );
}
