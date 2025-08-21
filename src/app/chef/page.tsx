"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChefPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Our Chef
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Chef</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/assets/img/chef/chef-profile.webp"
                alt="Head Chef"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                Chef Alexander Morrison
              </h2>
              <p className="text-[#e2b279] text-xl mb-6">Executive Chef & Culinary Director</p>
              <p className="text-[#bdbdbd] text-lg mb-8">
                With over 20 years of culinary experience, Chef Alexander Morrison brings a wealth of knowledge and passion to our kitchen. 
                Trained in the finest culinary schools across Europe and having worked in Michelin-starred restaurants, 
                he combines traditional techniques with innovative approaches to create extraordinary dining experiences.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Winner of multiple culinary awards including "Chef of the Year 2022"</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Featured in top culinary magazines and food networks</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Specializes in contemporary fusion cuisine with global influences</p>
                </div>
              </div>
              
              <button className="px-8 py-4 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300">
                View Full Menu
              </button>
            </div>
          </div>
          
          <div className="bg-[#18181c] rounded-lg p-8 md:p-12 border border-[#23232a]">
            <h3 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Culinary Philosophy
            </h3>
            <p className="text-[#bdbdbd] text-lg mb-6">
              "At The Saffron Lounge, we believe that food is more than just sustenance—it's an experience that engages all the senses. 
              My culinary philosophy centers on sourcing the finest ingredients, respecting traditional techniques, 
              and presenting each dish as a work of art."
            </p>
            <p className="text-[#bdbdbd] text-lg mb-6">
              "We're committed to sustainability and work closely with local farmers and producers to ensure that every meal 
              not only delights the palate but also supports our community and environment. 
              Each dish tells a story, and we're honored to be the storytellers."
            </p>
            <p className="text-[#bdbdbd] text-lg">
              "Join us for a journey that celebrates the beauty of food, the joy of dining, 
              and the memories created around the table."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChefPage;