"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ThankYouSection() {
  return (
    <section className="relative min-h-screen py-20 px-8 flex items-center justify-center overflow-hidden" id="thanks">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_4601.jpg"
          alt="Wedding Couple Background"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-5xl font-creattion text-white mb-12">
            Terima Kasih
          </h2>
          
          <p className="text-white text-sm md:text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do&apos;a restu kepada kami.
          </p>

          <p className="text-white/90 mb-12 text-sm md:text-sm font-medium">
            Wassalamu&apos;alaikum warahmatullahi wabarakatuh
          </p>

          <div className="my-12">
            <p className="text-white/80 text-xs mb-6 uppercase tracking-[0.2em]">
              Kami yang berbahagia
            </p>
            <h3 className="text-2xl md:text-2xl font-serif italic text-white">
              Audina & Yusron
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
