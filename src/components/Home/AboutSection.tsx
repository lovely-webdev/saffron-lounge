import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const AboutSection = () => {
  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#111115] ${etarBellotaFont.variable} relative overflow-hidden`}>
      {/* Background Shape */}
      <div className="absolute right-0 top-1/3 w-40 h-48 opacity-20 z-0 hidden lg:block">
        <Image
          src="/assests-main/about-shape-1.webp"
          alt="Decorative leafy branch"
          width={160}
          height={192}
          className="object-contain w-full h-full"
        />
      </div>
      
      <div className="max-w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Image */}
          <div className="relative mb-8 lg:mb-0">
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
          <div className="relative pr-0 lg:pr-16">
            
            {/* Decorative green leafy branch */}
            <div className="absolute -right-4 top-0 w-24 sm:w-32 h-32 sm:h-40 opacity-90">
              <Image
                src="/assests-main/about-shape-1.webp"
                alt="Decorative leafy branch"
                width={128}
                height={160}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight" style={{ fontFamily: 'var(--font-el-messiri), sans-serif' }}>
              <span className="block mb-1">Delicium Restoracia</span>
              <span className="block mb-1">Awesome Food For You</span>
        
            </h2>
            
            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg text-white leading-relaxed max-w-lg" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed max-w-lg" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>
            
            {/* Button */}
            <Link href="/about" className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#e2b279] text-white font-bold text-base sm:text-lg rounded-lg hover:bg-[#d4a46a] transition-all duration-300" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;