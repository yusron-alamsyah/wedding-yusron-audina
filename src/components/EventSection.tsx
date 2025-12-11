"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";

export default function EventSection() {
  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-200" id="event">
      <div className="max-w-md mx-auto">
        {/* Header Title - Separated */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-4xl md:text-4xl font-serif italic text-gray-700 mb-1">
                Wedding
              </h2>
              <h3 className="text-5xl md:text-5xl font-creattion text-gray-700">
                Event
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-48 h-px bg-gray-600"></div>
            </div>
          </div>
        </motion.div>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-transparent overflow-hidden "
        >
          {/* Sidebar - Akad Nikah */}
          <div className="absolute left-0 top-[280px] bottom-0 w-20 bg-gray-800 flex items-center justify-center">
            <h4
              className="text-white text-3xl font-serif tracking-wider rotate-180"
              style={{
                writingMode: 'vertical-lr',   /* atau vertical-rl tergantung hasil */
                textOrientation: 'mixed',
              }}
            >
              Akad Nikah
            </h4>
          </div>

          {/* Couple Image */}
          <div className="relative h-[280px] rounded-tr-[120px] overflow-hidden bg-transparent">
            <Image
              src="/images/v3_IMG_4620.jpg"
              alt="Wedding Couple"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Event Details Card */}
          <div className="bg-white text-gray-700 p-8 pl-28">
            {/* Date */}
            <div className="flex items-start gap-6 mb-4 pb-4 border-b border-gray-300">
              <div className="flex items-center justify-center">
                <p className="text-7xl md:text-7xl font-serif text-gray-700 leading-none">
                  11
                </p>
              </div>
              <div className="flex-1 pt-3">
                <p className="text-md text-gray-600 font-md">
                  Minggu
                </p>
                <p className="text-md text-gray-600 font-md">
                  Januari
                </p>
                <p className="text-md text-gray-600 font-md">
                  2026
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3 mb-6">
              <FaClock className="text-gray-700 text-xl" />
              <p className="text-gray-700 font-sm">07:00 WIB</p>
            </div>

            {/* Location */}
            <div className="mb-6">
              <h4 className="text-gray-800 font-bold text-md mb-3 uppercase tracking-wider">
                Lokasi Acara
              </h4>
              <p className="text-gray-600 text-sm">
                Ds Batankrajan RT 03 RW 02, Kec Gedeg, Kab Mojokerto
              </p>
            </div>

            {/* Google Maps Button */}
            <a
              href="https://maps.app.goo.gl/LERkjWXJkW3mm3fk6?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-700 text-gray-700 p-2 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300"
            >
              <FaMapMarkerAlt />
              <span className="text-sm">Google Maps</span>
            </a>
          </div>
        </motion.div>

        {/* Resepsi Card - Kebalikan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-transparent overflow-hidden mt-8"
        >
          {/* Sidebar - Resepsi (Kanan) */}
          <div className="absolute right-0 top-[280px] bottom-0 w-20 bg-gray-800 flex items-center justify-center">
            <h4
              className="text-white text-3xl font-serif tracking-wider rotate-180"
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'mixed',
              }}
            >
              Resepsi
            </h4>
          </div>

          {/* Couple Image */}
          <div className="relative h-[280px] rounded-tl-[120px] overflow-hidden bg-transparent">
            <Image
              src="/images/IMG_4622.jpg"
              alt="Wedding Couple"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Event Details Card */}
          <div className="bg-white text-gray-700 p-8 pr-28">
            {/* Date */}
            <div className="flex items-start gap-6 mb-4 pb-4 border-b border-gray-300">
              <div className="flex items-center justify-center">
                <p className="text-7xl md:text-7xl font-serif text-gray-700 leading-none">
                  11
                </p>
              </div>
              <div className="flex-1 pt-3">
                <p className="text-md text-gray-600 font-md">
                  Minggu
                </p>
                <p className="text-md text-gray-600 font-md">
                  Januari
                </p>
                <p className="text-md text-gray-600 font-md">
                  2026
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3 mb-6">
              <FaClock className="text-gray-700 text-xl" />
              <p className="text-gray-700 font-sm">12:30  - 15:00</p>
            </div>

            {/* Location */}
            <div className="mb-6">
              <h4 className="text-gray-800 font-bold text-md mb-3 uppercase tracking-wider">
                Lokasi Acara
              </h4>
              <p className="text-gray-600 text-sm">
                Ds Batankrajan RT 03 RW 02, Kec Gedeg, Kab Mojokerto
              </p>
            </div>

            {/* Google Maps Button */}
            <a
              href="https://maps.app.goo.gl/LERkjWXJkW3mm3fk6?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-700 text-gray-700 p-2 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300"
            >
              <FaMapMarkerAlt />
              <span className="text-sm">Google Maps</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
