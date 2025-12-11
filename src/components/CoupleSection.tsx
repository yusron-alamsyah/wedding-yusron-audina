"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function CoupleSection() {
  return (
    <section className="min-h-screen pb-20 bg-white" id="couple">
      <div className="max-w-6xl mx-auto">
        {/* Islamic Quote with Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 px-8"
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/img-tree-shadow-01.png"
              alt="Tree Shadow Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-0">
            {/* Initials with Divider */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="text-6xl md:text-6xl font-serif text-gray-600">A</span>
              <div className="w-px h-20 md:h-20 bg-gray-400"></div>
              <span className="text-6xl md:text-6xl font-serif text-gray-600">Y</span>
            </div>

            {/* Quote */}
            <blockquote className="text-gray-600 italic text-sm md:text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram
              kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&quot;
            </blockquote>
            
            {/* Source */}
            <p className="text-gray-500 font-serif italic text-md md:text-md">
              Q.S Ar-Rum : 21
            </p>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-8"
        >
          <div className="mb-8">
            <h2 style={{ margin: "0 2em 0 0" }}  className="text-4xl md:text-4xl font-serif italic text-gray-700">
              Kedua
            </h2>
            <h2 style={{ margin: "-10px 0 0 2em" }} className="text-5xl md:text-5xl font-creattion text-gray-700">
              Mempelai
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-600 text-sm md:text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah
              semoga ridho-Mu tercurah mengiringi pernikahan kami.
            </p>
          </div>
        </motion.div>

        {/* Couple Details */}
        <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
          {/* Mempelai Wanita */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 overflow-hidden shadow-lg max-w-xs w-full rounded"
          >
            {/* Image Container */}
            <div className="relative h-[450px] bg-gradient-to-b from-gray-300 to-gray-200 rounded">
              <Image
                src="/images/IMG_4578.jpg"
                alt="Putri Cantika Sari"
                fill
                className="object-cover object-center"
              />
              {/* Overlay Text - Nama di pojok kanan */}
              {/* <div className="absolute top-1/2 right-10 -translate-y-1/2">
                <h3 
                  className="text-white text-5xl md:text-5xl font-creattion"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  Audina
                </h3>
              </div> */}
            </div>

            {/* Details Card */}
            <div className="bg-gray-50 px-2 py-5 text-center space-y-3">
              <h3 className="text-2xl font-serif text-gray-700">
                Audina Ayu Mardani, S.Tr.T.
              </h3>
              <p className="text-gray-600 text-sm">
                Putri Kedua dari
              </p>
              <p className="text-gray-600 text-sm">
                Bapak Drs. Fattah Uddin dan <br /> Ibu Niniek Indiarti, S.Pd.
              </p>
              
              {/* Instagram Button */}
              <div className="pt-4">
                <a
                  href="https://instagram.com/user_ig_wanita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2.5 rounded-md transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 5.248 0 3.559.014 3.967.072 5.248.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 5.248.072 3.559 0 3.967-.014 5.248-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-5.248 0-3.559-.014-3.967-.072-5.248-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-5.249-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a href="https://www.instagram.com/audinaayum/" target="_blank" className="text-sm">@audinaayum</a>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mempelai Pria */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 overflow-hidden shadow-lg max-w-xs w-full rounded"
          >
            {/* Image Container */}
            <div className="relative h-[450px] bg-gradient-to-b from-gray-300 to-gray-200 rounded">
              <Image
                src="/images/IMG_4598.jpg"
                alt="Yusron Alamsyah"
                fill
                className="object-cover object-center"
              />
              {/* Overlay Text - Nama di pojok */}
              <div className="absolute top-1/2 left-8 -translate-y-1/2">
                {/* <h3 
                  className="text-white text-5xl md:text-5xl font-creattion"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  Yusron
                </h3> */}
              </div>
            </div>

            {/* Details Card */}
            <div className="bg-gray-50 px-2 py-5 text-center space-y-3">
              <h3 className="text-2xl font-serif text-gray-700">
                M. Yusron Alamsyah, S.Kom.
              </h3>
              <p className="text-gray-600 text-sm">
                Putra Kedua dari
              </p>
              <p className="text-gray-600 text-sm">
                Bapak Alm. H. Abdul Fatah dan<br /> Ibu Nur Siami
              </p>
              
              {/* Instagram Button */}
              <div className="pt-4">
                <a
                  href="https://instagram.com/yusron_alamsyah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2.5 rounded-md transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 5.248 0 3.559.014 3.967.072 5.248.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 5.248.072 3.559 0 3.967-.014 5.248-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-5.248 0-3.559-.014-3.967-.072-5.248-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-5.249-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a href="https://www.instagram.com/yusron_alamsyah/" target="_blank" className="text-sm">yusron_alamsyah</a>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
