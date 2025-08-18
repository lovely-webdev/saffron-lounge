import React from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const VideoSection = () => {
  return (
    <section className={`${theme.spacing.sectionPadding} relative w-full bg-[#111115] ${etarBellotaFont.variable}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden border border-[#23232a] shadow-2xl">
          {/* Restaurant Scene Background */}
          <div className="relative aspect-video bg-[#18181c]">
            <Image
              src="/assests-main/video-bg.webp"
              alt="Restaurant Scene"
              fill
              className="object-cover"
            />
            
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                {/* Large Play Button */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#e2b279] flex items-center justify-center mx-auto mb-6 hover:bg-[#d4a46a] transition-all duration-300 cursor-pointer group">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#111115] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                
                {/* Play Video Text */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                  Play Video
                </h3>
              </div>
            </div>
            
            {/* Restaurant Scene Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left side - Woman with burger */}
              <div className="absolute left-8 md:left-16 bottom-8 md:bottom-16 w-32 h-32 md:w-40 md:h-40">
                <div className="relative w-full h-full">
                  {/* Woman silhouette */}
                  <div className="absolute bottom-0 left-0 w-20 h-24 md:w-24 md:h-28 bg-[#e2b279] rounded-full opacity-20"></div>
                  {/* Burger on table */}
                  <div className="absolute bottom-0 left-8 w-16 h-8 bg-[#8B4513] rounded-lg opacity-60"></div>
                  {/* Fries bowl */}
                  <div className="absolute bottom-0 left-12 w-8 h-6 bg-[#FFD700] rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Right side - Waiter serving */}
              <div className="absolute right-8 md:right-16 bottom-8 md:bottom-16 w-32 h-32 md:w-40 md:h-40">
                <div className="relative w-full h-full">
                  {/* Waiter silhouette */}
                  <div className="absolute bottom-0 right-0 w-16 h-28 md:w-20 md:h-32 bg-[#4169E1] rounded-full opacity-20"></div>
                  {/* Tray */}
                  <div className="absolute bottom-8 right-8 w-20 h-4 bg-[#696969] rounded-lg opacity-60"></div>
                  {/* Food on tray */}
                  <div className="absolute bottom-8 right-10 w-12 h-3 bg-[#8B4513] rounded-lg opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;