"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import Image from "next/image";


export default function GiftSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bankAccounts = [
    {
      bank: "BCA",
      bankLogo: "/images/bca.png",
      accountNumber: "0502255825",
      accountName: "AUDINA AYU MARDANI",
    },
    {
      bank: "BCA",
      bankLogo: "/images/bca.png",
      accountNumber: "0190655768",
      accountName: "MUKHAMAD YUSRON ALAMSYAH",
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-200 relative" id="gift">
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
          <h2 className="text-5xl md:text-6xl font-serif italic text-gray-700 mb-2">
            Hadiah
          </h2>
          <h3 className="text-4xl md:text-5xl font-creattion text-gray-700 mb-6">
            Pernikahan
          </h3>
          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Doa Restu Anda merupakan
            karunia yang sangat berarti bagi kami.         
          </p>
          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui salah satu rekening di bawah ini.
          </p>
        </motion.div>

        {/* Bank Accounts */}
        <div className="space-y-4">
          {bankAccounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 rounded text-white p-6 shadow-lg relative overflow-hidden"
            >
              {/* Background overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Top Section - No Rekening & Logo */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-white/70 text-sm mb-2">No Rekening</p>
                    <p className="text-2xl md:text-2xl font-bold tracking-wide">
                      {account.accountNumber}
                    </p>
                  </div>

                  {/* Bank Logo - Right side */}
                  <div className="bg-white rounded p-2 flex items-center justify-center min-w-[80px] md:min-w-[100px]">
                    <Image
                      src={account.bankLogo}
                      alt={`${account.bank} Logo`}
                      width={60}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 mb-6"></div>

                {/* Bottom Section - Atas Nama & Button */}
                <div className="flex justify-between items-end">
                  <div className="pr-2">
                    <p className="text-white/70 text-sm mb-2">Atas Nama</p>
                    <p className="text-base md:text-md font-medium">
                      {account.accountName}
                    </p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => copyToClipboard(account.accountNumber, index)}
                    className="border-2 rounded border-white px-2 py-1.5 cursor-pointer hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center gap-2"
                    aria-label="Copy account number"
                  >
                    {copiedIndex === index ? (
                      <>
                        <FaCheck className="text-sm" />
                        <span className="text-sm">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-sm" />
                        <span className="text-sm">Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
