"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useSearchParams } from "next/navigation";
import { image } from "framer-motion/client";

export default function CountdownSection() {
  const weddingDate = new Date("2026-01-11T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#couple');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const searchParams = useSearchParams();
  const versionParam = searchParams.get('version');

  let images: string[] = [];
  if (versionParam === 'simple') {
    images = [
    "/images/IMG_8239.jpg"
    ];
  }else{
    images = [
      "/images/v2_IMG_4656.jpg",
      "/images/IMG_8239.jpg",
      "/images/v2_A86557AB-D314-418C-A8D8-CB82FE594A82-22591-0000058CAFCBCFDB.jpg"
    ];
  }

  // Embla Carousel with Autoplay
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      duration: 20 
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="countdown">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        <div className="embla overflow-hidden h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {images.map((image, index) => (
              <div key={index} className="embla__slide relative flex-[0_0_100%] min-w-0 h-full">
                <Image
                  src={image}
                  alt={`Wedding Background ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Positioned at Bottom */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-3xl mx-auto mb-12 flex flex-col justify-end min-h-screen pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-3 text-shadow-lg"
          >
            THE WEDDING OF
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-4xl font-serif mb-3 text-shadow-lg"
          >
            Audina & Yusron
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-sm tracking-[0.2em] mb-8 text-shadow-lg"
          >
            11 . 01 . 2026
          </motion.p>

          {/* Countdown Display */}
          <div className="grid grid-cols-4 gap-3 md:gap-6 mb-8 max-w-xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-md md:text-md mb-1 text-shadow-lg">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/90">
                  {unit === "days" ? "Hari" : 
                   unit === "hours" ? "Jam" : 
                   unit === "minutes" ? "Menit" : "Detik"}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, 10, 0] 
            }}
            transition={{ 
              opacity: { delay: 1.4, duration: 0.6 },
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="flex flex-col items-center gap-2 mt-4 cursor-pointer"
            onClick={scrollToNextSection}
          >
            <FaChevronDown className="text-2xl animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
