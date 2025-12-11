"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface HeroSectionProps {
  onOpen: () => void;
}

export default function HeroSection({ onOpen }: HeroSectionProps) {
  const searchParams = useSearchParams();
  const namaUndangan = searchParams.get('to') || 'Contoh Nama Undangan';
  return (
    <>
      {/* Left Side - Fixed/Sticky - Desktop Only */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex md:fixed md:left-0 md:top-0 md:w-3/4 md:h-screen md:z-40"
      >
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100/40 z-10"></div>
        <Image
          src="/images/IMG_4421.jpg"
          alt="Wedding Photo Left"
          fill
          className="object-cover"
          priority
        />
        
        {/* Text Overlay on Left Image */}
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

      {/* Right Side Wrapper - This creates the scrollable area */}
      <section className="min-h-screen flex flex-col md:flex-row relative overflow-hidden bg-gray-100">

      {/* Right Side - Always Visible - Positioned to the right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/4 md:ml-auto relative min-h-screen"
      >
        {/* Image Background */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-10"></div>
        <Image
          src="/images/IMG_4421.jpg"
          alt="Wedding Photo Right"
          fill
          className="object-cover"
          priority
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between items-center z-20 p-4 md:p-6 lg:p-12 text-white text-center">
          {/* Top Section - Mobile Title Only */}
          <div className="md:hidden pt-14">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase mb-4 text-shadow-lg"
            >
              THE WEDDING OF
            </motion.p>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl font-serif mb-3 text-shadow-lg"
            >
              Audina & Yusron
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm tracking-[0.2em] text-shadow-lg"
            >
              11 . 01 . 2026
            </motion.p>
          </div>

          {/* Spacer for mobile */}
          <div className="flex-1"></div>

          {/* Bottom Section - Card & Button */}
          <div className="pb-8 w-full flex flex-col items-center gap-6">
            {/* Invitation Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="w-full max-w-sm"
            >
              <div className="rounded-2xl p-0">
                <p className="text-sm tracking-wide mb-2">
                  Kepada Yth.
                </p>
                <p className="text-lg font-medium mb-2">
                  {namaUndangan}
                </p>
                
                <p className="text-xs italic leading-relaxed text-white/80">
                  *Mohon maaf jika ada kesalahan dalam penulisan nama / gelar.
                </p>
              </div>
            </motion.div>

            {/* Button */}
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: [0, -10, 0],
                opacity: 1 
              }}
              transition={{ 
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: {
                  delay: 1.1,
                  duration: 0.8
                }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="bg-white/5 cursor-pointer backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 font-medium border border-white/20"
            >
              <FaEnvelope className="text-xl" />
              <span>Buka Undangan</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
      </section>
    </>
  );
}
