"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import Reservation from '@/components/Home/Reservation';
import Testimonials from '@/components/Home/Testimonials';
import AboutSection from '@/components/Home/AboutSection';


export default function AboutPage() {
  return (
    <>
    {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              About Us
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">About Us</span>
            </div>
          </div>
        </div>
      </div>
     {/* About Section */}
      <AboutSection />
      <Testimonials />
      <Reservation />
     
    </>
  );
}