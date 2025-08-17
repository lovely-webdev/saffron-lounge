"use client";

import React from 'react';
import Image from 'next/image';
import { etarBellotaFont } from '../etarBellotaFont';

export default function AboutPage() {
  return (
    <section className={`min-h-screen bg-[#111115] py-20 ${etarBellotaFont.variable}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>About Us</h1>
          <div className="flex items-center justify-center text-[#bdbdbd] py-4">
            <a href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</a>
            <span className="mx-3">/</span>
            <span className="text-[#e2b279]">About Us</span>
          </div>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Discover our story, passion, and commitment to culinary excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Our Story</h2>
            <p className="text-lg text-[#bdbdbd] mb-6">
              Founded in 2010, The Saffron Lounge began as a small family-run restaurant with a vision to bring authentic flavors to our community. What started as a modest establishment has grown into a culinary destination celebrated for its innovative dishes and warm hospitality.
            </p>
            <p className="text-lg text-[#bdbdbd] mb-6">
              Our journey has been driven by a passion for quality ingredients, traditional cooking techniques, and creative presentations. We source locally whenever possible and maintain relationships with trusted suppliers who share our commitment to excellence.
            </p>
            <p className="text-lg text-[#bdbdbd] mb-8">
              Today, The Saffron Lounge continues to evolve while staying true to its roots, offering an unforgettable dining experience that celebrates both tradition and innovation.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-bold">Premium Ingredients</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-bold">Expert Chefs</span>
              </div>
            </div>
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
        
        <div className="bg-[#18181c] rounded-lg p-8 md:p-12 border border-[#23232a]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#e2b279] mb-2">12+</div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Years Experience</h3>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#e2b279] mb-2">50+</div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Menu Items</h3>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#e2b279] mb-2">10K+</div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Happy Customers</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 