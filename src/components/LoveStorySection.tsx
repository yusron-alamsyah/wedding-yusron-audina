"use client";

import { motion } from "framer-motion";

const loveStory = [
  {
    date: "5 Oktober 2022",
    description: `Semuanya berawal dari perkenalan singkat, "Halo Kak, kenal aku ga?". Perkenalan sederhana itu tumbuh menjadi hubungan yang penuh cinta dan kebersamaan.`,
  },
  {
    date: "31 Agustus 2025",
    description: `Setelah melewati banyak hal bersama dan saling mengenal lebih dalam, kami memutuskan untuk melangkah lebih serius. 31 Agustus 2025 ini, kedua keluarga akhirnya dipertemukan sebagai awal dari perjalanan baru.`,
  },
  {
    date: "11 Januari 2026",
    description: `Hari yang kami tunggu pun tiba. Dengan restu keluarga dan penuh rasa syukur, kami mengikat janji suci sebagai suami istri. Awal dari hidup bersama yang insya Allah penuh cinta, keberkahan, dan kebahagiaan.`,
  },
];

export default function LoveStorySection() {
  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-200" id="story">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif italic text-gray-700">
                Love
              </h2>
              <div className="text-right">
                <h3 style={{ margin: "-20px 0 0 2em" }} className="text-5xl md:text-5xl font-creattion text-gray-700">
                  Story
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-px bg-gray-600"></div>
            </div>
          </div>
        </motion.div>

        {/* Love Story Items */}
        <div className="space-y-16">
          {loveStory.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              {/* Date */}
              <h3 className="text-lg md:text-lg font-bold text-gray-700 mb-6 uppercase tracking-wide">
                {story.date}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-md md:text-md leading-relaxed max-w-xl mx-auto">
                {story.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
