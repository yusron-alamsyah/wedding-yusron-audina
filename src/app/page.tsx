"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import FixedLeftSection from "@/components/FixedLeftSection";
import CoupleSection from "@/components/CoupleSection";
import CountdownSection from "@/components/CountdownSection";
import EventSection from "@/components/EventSection";
import LoveStorySection from "@/components/LoveStorySection";
import GallerySection from "@/components/GallerySection";
import GiftSection from "@/components/GiftSection";
import RSVPSection from "@/components/RSVPSection";
import ThankYouSection from "@/components/ThankYouSection";
import MusicPlayer from "@/components/MusicPlayer";

function HomeContent() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const [showGift, setShowGift] = useState(true);

  useEffect(() => {
    const versionParam = searchParams.get('version');
    if (versionParam === 'simple') {
      setShowGift(false);
    } else {
      setShowGift(true);
    }
  }, [searchParams]);

  return (
    <main className="relative">
      {!isOpen ? (
        <HeroSection onOpen={() => setIsOpen(true)} />
      ) : (
        <>
          {/* Fixed Left Section - Always visible on desktop */}
          <FixedLeftSection />
          
          <MusicPlayer shouldPlay={isOpen} />
          
          {/* Right side content wrapper - offset from left fixed section */}
          <div className="w-full md:ml-0 md:w-full lg:ml-[75%] lg:w-[25%]">
            <CountdownSection />
            <CoupleSection />
            <EventSection />
            <LoveStorySection />
            {showGift && <GallerySection />}
            {showGift && <GiftSection />}
            {showGift && <RSVPSection /> }
            <ThankYouSection /> 
          </div>
        </>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
      <HomeContent />
    </Suspense>
  );
}
