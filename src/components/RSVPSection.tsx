"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, orderBy, where, Timestamp } from "firebase/firestore";

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  createdAt: Timestamp;
  isShow: boolean;
}

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [guestMessages, setGuestMessages] = useState<GuestMessage[]>([]);

  // Fetch messages from Firestore
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(
          collection(db, "rsvp"), 
          where("isShow", "==", true),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const messages: GuestMessage[] = [];
        querySnapshot.forEach((doc) => {
          messages.push({ id: doc.id, ...doc.data() } as GuestMessage);
        });
        setGuestMessages(messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add document to Firestore
      await addDoc(collection(db, "rsvp"), {
        name: formData.name,
        message: formData.message,
        isShow: true,
        createdAt: Timestamp.now(),
      });

      setSubmitted(true);
      setFormData({ name: "", message: "" });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-200 relative" id="rsvp">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/img-tree-shadow-01.png"
          alt="Tree Shadow Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-4xl font-serif italic text-gray-700 mb-2">
            Ucapan 
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-4">
            Berikan doa dan ucapan terbaik untuk kami.
          </p>
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 rounded backdrop-blur-sm p-8 md:p-10 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                placeholder="Nama"
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors resize-none text-gray-700 placeholder-gray-400"
                placeholder="Ucapan"
              />
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitted || loading}
              className="w-full rounded bg-gray-700 hover:bg-gray-800 text-white py-4 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Mengirim..." : submitted ? "✓ Terima Kasih!" : "Kirim"}
            </button>
          </form>
        </motion.div>

        {/* Guest Book Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {guestMessages.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Belum ada ucapan.</p>
            ) : (
              guestMessages.map((guest, index) => (
                <motion.div
                  key={guest.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm p-6 border-b border-gray-200"
                >
                  <p className="font-bold text-gray-800 mb-2">{guest.name}</p>
                  <p className="text-gray-600 text-sm">{guest.message}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {guest.createdAt?.toDate().toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
