import React from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const VideoSection = () => {
  return (
    <section className={`w-full px-4 sm:px-6 relative ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto">
        {/* Main Video Banner */}
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
          {/* Background Video Image */}
          <Image
            src="/assests-main/video-bg.webp"
            alt="Restaurant scene background"
            fill
            className="object-cover"
            priority
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Restaurant Scene Elements */}
          <div className="absolute inset-0">
            {/* Left Side - Woman with burger */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-64 h-64 opacity-90">
              <div className="relative w-full h-full">
                {/* Woman silhouette */}
                <div className="absolute left-0 top-0 w-32 h-48 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full opacity-80"></div>
                {/* Table with food */}
                <div className="absolute bottom-0 left-16 w-32 h-24 bg-amber-800 rounded-lg opacity-90">
                  <div className="absolute top-2 left-2 w-16 h-8 bg-yellow-200 rounded opacity-80"></div>
                  <div className="absolute top-4 left-8 w-8 h-8 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Waiter serving */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-64 h-64 opacity-90">
              <div className="relative w-full h-full">
                {/* Waiter silhouette */}
                <div className="absolute right-0 top-0 w-32 h-48 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-80"></div>
                {/* Tray */}
                <div className="absolute bottom-0 right-16 w-32 h-24 bg-gray-800 rounded-lg opacity-90">
                  <div className="absolute top-2 left-2 w-16 h-8 bg-yellow-200 rounded opacity-80"></div>
                  <div className="absolute top-4 left-8 w-8 h-8 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Central Play Button and Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center">
              {/* Play Button */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <div className="w-0 h-0 border-l-[20px] border-l-[#111115] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2 group-hover:border-l-[24px] group-hover:border-t-[14px] group-hover:border-b-[14px] transition-all duration-300"></div>
              </div>
              
              {/* Text */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                Play Video
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;