import React from 'react';
import Image from 'next/image';

const VideoSection = () => {
  return (
    <section className="relative w-full py-20 bg-[#111115]">
      <div className="px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
            Our Story
          </h2>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Discover the passion and craftsmanship behind our culinary creations
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden border border-[#23232a] shadow-2xl">
          <div className="aspect-video bg-[#18181c] flex items-center justify-center">
            {/* Video placeholder with play button */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/assests-main/video-bg.webp"
                alt="Our Story Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111115] to-[#18181c] opacity-80"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-[#e2b279] flex items-center justify-center mx-auto mb-6 hover:bg-[#11115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300 cursor-pointer">
                  <svg className="w-8 h-8 text-[#11115]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                  Watch Our Journey
                </h3>
                <p className="text-[#bdbdbd] max-w-md mx-auto">
                  See how we create exceptional dining experiences with passion and dedication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;