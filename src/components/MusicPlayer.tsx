"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa";

interface MusicPlayerProps {
  shouldPlay?: boolean;
}

export default function MusicPlayer({ shouldPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.currentTime = 59;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [shouldPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AnimatePresence>
      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/audio/wedding-song.mp3" type="audio/mpeg" />
      </audio>

      {showPlayer && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-5 right-5 z-50"
        >
          <div className="relative">
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
              className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-rose-300 transition-all"
            >
              {isPlaying ? (
                <FaMusic className="text-md" />
              ) : (
                <FaPlay className="text-sm ml-1" />
              )}
            </motion.button>
            
            {/* Ripple effect when playing */}
            {isPlaying && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gray-500"
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 rounded-full bg-gray-400"
                />
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
