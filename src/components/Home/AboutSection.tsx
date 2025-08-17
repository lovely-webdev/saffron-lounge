import React from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const AboutSection = () => {
  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#111115] ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>DELICIUM RESTORACIA AWESOME FOOD FOR YOU</h2>
            <p className="text-xl text-[#bdbdbd] mb-8">
              Our restaurant offers a unique dining experience with a blend of traditional and modern culinary techniques. We source the finest ingredients locally and globally to create dishes that delight the senses.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Premium Ingredients</h3>
                  <p className="text-[#bdbdbd]">We source only the finest ingredients from trusted local suppliers and international markets.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Expert Chefs</h3>
                  <p className="text-[#bdbdbd]">Our team of award-winning chefs bring years of experience and creativity to every dish.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Exceptional Service</h3>
                  <p className="text-[#bdbdbd]">Our attentive staff ensures every guest enjoys a memorable dining experience from start to finish.</p>
                </div>
              </div>
            </div>
            
            <button className="px-8 py-4 bg-[#e2b279] text-[#111115] font-bold text-lg rounded-lg hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300">
              Discover More
            </button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="/assets/img/gallery/gallery-4.webp"
                alt="Our Restaurant"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden border-4 border-[#111115] hidden md:block">
              <Image
                src="/assets/img/gallery/gallery-2.webp"
                alt="Our Chef"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;