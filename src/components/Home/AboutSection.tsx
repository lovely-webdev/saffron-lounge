import React from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const AboutSection = () => {
  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#111115] ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/assests-main/about-img-1.webp"
                alt="Two women dining at restaurant"
                width={600}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="relative pr-16">
            {/* Decorative green leafy branch using the actual image */}
            <div className="absolute -right-4 top-0 w-32 h-40 opacity-90">
              <Image
                src="/assests-main/about-shape-1.webp"
                alt="Decorative leafy branch"
                width={128}
                height={160}
                className="object-contain w-full h-full"
              />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              <span className="block mb-2">Delicium</span>
              <span className="block mb-2">Restoracia</span>
              <span className="block mb-2">Awesome Food For</span>
              <span className="block">You</span>
            </h2>
            
            <div className="space-y-4 mb-10">
              <p className="text-lg text-white leading-relaxed max-w-lg">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <p className="text-lg text-white leading-relaxed max-w-lg">
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>
            
            <button className="px-10 py-4 bg-[#e2b279] text-[#111115] font-bold text-lg rounded-lg hover:bg-[#d4a46a] transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;