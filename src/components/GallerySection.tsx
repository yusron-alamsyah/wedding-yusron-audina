"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // All gallery images from public/images
  const galleryImages = [
    "/images/IMG_4656.jpg",
    "/images/IMG_4578.jpg",
    "/images/IMG_4598.jpg",
    "/images/IMG_4597.jpg",
    "/images/IMG_4601.jpg",
    "/images/IMG_4675.jpg",
    "/images/IMG_4622.jpg",
    "/images/IMG_4620.jpg", 
    "/images/IMG_4671.jpg",
    "/images/IMG_4624.jpg",
    "/images/v2_IMG_4676.jpg",
    "/images/IMG_4795.jpg",
    "/images/IMG_8239.jpg",
    "/images/5EB90206-A488-4636-8FD3-B83459A95F92-8399-000001DB822C81B5.jpg",
    "/images/v2_A86557AB-D314-418C-A8D8-CB82FE594A82-22591-0000058CAFCBCFDB.jpg",
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
    }
  };

  // Add keyboard event listener
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown);
  }

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-200" id="gallery">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex items-center justify-center">
              <div className="w-full h-px bg-gray-600"></div>
            </div>
            <div className="text-right">
              <h2 className="text-5xl md:text-5xl font-serif italic text-gray-700 mb-1">
                Gallery
              </h2>
              <h3 className="text-4xl md:text-4xl font-creattion text-gray-700">
                Our Moment
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Grid Gallery - TikTok Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-1"
        >
          {galleryImages.map((image, index) => {
            // Define different sizes for variety
            const sizes = [
              'col-span-2 row-span-2', // Large square
              'col-span-1 row-span-1', // Small square
              'col-span-1 row-span-1', // Small square

              'col-span-1 row-span-1', // Small square
              'col-span-1 row-span-1', // Small square
              'col-span-1 row-span-1', // Small square

              'col-span-1 row-span-1', // Small square
              'col-span-2 row-span-2', // Large square
              'col-span-1 row-span-1', // Small square
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative overflow-hidden bg-gray-300 cursor-pointer group ${sizes[index % sizes.length]}`}
                style={{ minHeight: '200px' }}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors z-10"
              >
                <FaTimes />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              >
                <FaChevronLeft />
              </button>

              {/* Image Container */}
              <motion.div
                key={selectedImage}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-[90vw] h-[90vh] max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImage]}
                  alt={`Gallery ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              >
                <FaChevronRight />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
