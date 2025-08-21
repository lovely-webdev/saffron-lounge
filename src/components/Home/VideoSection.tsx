import React, { useState } from 'react';
import Image from 'next/image';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`w-full relative ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto">
        {/* Main Video Banner */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
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
            <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 opacity-90">
              <div className="relative w-full h-full">
                {/* Woman silhouette */}
                <div className="absolute left-0 top-0 w-16 h-24 md:w-32 md:h-48 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full opacity-80"></div>
                {/* Table with food */}
                <div className="absolute bottom-0 left-8 md:left-16 w-16 h-12 md:w-32 md:h-24 bg-amber-800 rounded-lg opacity-90">
                  <div className="absolute top-1 md:top-2 left-1 md:left-2 w-8 h-4 md:w-16 md:h-8 bg-yellow-200 rounded opacity-80"></div>
                  <div className="absolute top-2 md:top-4 left-4 md:left-8 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Waiter serving */}
            <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 opacity-90">
              <div className="relative w-full h-full">
                {/* Waiter silhouette */}
                <div className="absolute right-0 top-0 w-16 h-24 md:w-32 md:h-48 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-80"></div>
                {/* Tray */}
                <div className="absolute bottom-0 right-8 md:right-16 w-16 h-12 md:w-32 md:h-24 bg-gray-800 rounded-lg opacity-90">
                  <div className="absolute top-1 md:top-2 left-1 md:left-2 w-8 h-4 md:w-16 md:h-8 bg-yellow-200 rounded opacity-80"></div>
                  <div className="absolute top-2 md:top-4 left-4 md:left-8 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Central Play Button and Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center">
              {/* Play Button */}
              <div 
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer group"
                onClick={openModal}
              >
                <div className="w-0 h-0 border-l-[12px] md:border-l-[20px] border-l-[#111115] border-t-[8px] md:border-t-[12px] border-t-transparent border-b-[8px] md:border-b-[12px] border-b-transparent ml-1 md:ml-2 group-hover:border-l-[14px] md:group-hover:border-l-[24px] group-hover:border-t-[10px] md:group-hover:border-t-[14px] group-hover:border-b-[10px] md:group-hover:border-b-[14px] transition-all duration-300"></div>
              </div>
              
              {/* Text */}
              <h3 
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 cursor-pointer"
                onClick={openModal}
                style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}
              >
                Play Video
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {/* Dummy Video */}
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-[12px] md:border-l-[20px] border-l-[#111115] border-t-[8px] md:border-t-[12px] border-t-transparent border-b-[8px] md:border-b-[12px] border-b-transparent ml-1 md:ml-2"></div>
                  </div>
                  <p className="text-white text-xl md:text-2xl font-bold">Restaurant Video</p>
                  <p className="text-gray-400 mt-2">A beautiful dining experience awaits you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;