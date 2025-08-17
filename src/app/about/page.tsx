"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { etarBellotaFont } from '../../app/etarBellotaFont';

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-[#111115] ${etarBellotaFont.variable}`}>
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
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="text-[#e2b279] text-lg font-bold tracking-wider uppercase">About Our Restaurant</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                  We Provide Good Food For Your Family!
                </h2>
                <p className="text-[#bdbdbd] text-lg leading-relaxed">
                  Our story began with a simple idea: to create a place where people could come together to enjoy exceptional food in a warm, welcoming environment. What started as a small family restaurant has grown into a beloved dining destination.
                </p>
              </div>

              <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
                We believe that great food brings people together. That&apos;s why we&apos;re committed to using only the finest ingredients, sourced locally whenever possible, and prepared with passion and creativity by our talented chefs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-[#e2b279]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                    <p className="text-[#bdbdbd]">
                      To be the premier dining destination known for exceptional cuisine, outstanding service, and a warm, inviting atmosphere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-[#e2b279]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                    <p className="text-[#bdbdbd]">
                      To provide our guests with an unforgettable dining experience through innovative cuisine, exceptional service, and a commitment to excellence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button className="px-8 py-4 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/img/about-img-1.webp"
                  alt="About Our Restaurant"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-lg overflow-hidden border-8 border-[#111115]">
                <Image
                  src="/assets/img/about-img-2.webp"
                  alt="Restaurant Interior"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 bg-[#e2b279] text-[#111115] px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-lg font-bold">Years Of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-[#18181c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#e2b279] text-lg font-bold tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              What We Offer For Your Family
            </h2>
            <p className="text-[#bdbdbd] text-lg max-w-3xl mx-auto mt-6">
              We&apos;re committed to providing you with an exceptional dining experience that combines delicious food, outstanding service, and a warm, inviting atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#111115] p-8 rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group text-center">
              <div className="w-20 h-20 rounded-full bg-[#18181c] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e2b279] transition-colors duration-300">
                <svg className="w-10 h-10 text-[#e2b279] group-hover:text-[#111115] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Food</h3>
              <p className="text-[#bdbdbd]">
                We source only the finest ingredients and prepare each dish with care and attention to detail.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#111115] p-8 rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group text-center">
              <div className="w-20 h-20 rounded-full bg-[#18181c] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e2b279] transition-colors duration-300">
                <svg className="w-10 h-10 text-[#e2b279] group-hover:text-[#111115] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Skilled Chefs</h3>
              <p className="text-[#bdbdbd]">
                Our team of experienced chefs brings creativity and expertise to every dish they prepare.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#111115] p-8 rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group text-center">
              <div className="w-20 h-20 rounded-full bg-[#18181c] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e2b279] transition-colors duration-300">
                <svg className="w-10 h-10 text-[#e2b279] group-hover:text-[#111115] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Best Service</h3>
              <p className="text-[#bdbdbd]">
                Our attentive staff is dedicated to providing you with exceptional service from the moment you arrive.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#111115] p-8 rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group text-center">
              <div className="w-20 h-20 rounded-full bg-[#18181c] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e2b279] transition-colors duration-300">
                <svg className="w-10 h-10 text-[#e2b279] group-hover:text-[#111115] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Food Safety</h3>
              <p className="text-[#bdbdbd]">
                We maintain the highest standards of food safety and hygiene to ensure your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#e2b279] text-lg font-bold tracking-wider uppercase">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              Meet Our Chefs
            </h2>
            <p className="text-[#bdbdbd] text-lg max-w-3xl mx-auto mt-6">
              Our talented team of chefs brings passion, creativity, and expertise to every dish they create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group text-center">
              <div className="relative h-80">
                <Image
                  src="/assets/img/team/team-1.webp"
                  alt="Chef John Anderson"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm3.97 14.97c-.11.11-.24.19-.38.24-.14.05-.29.08-.44.08-.15 0-.3-.03-.44-.08-.14-.05-.27-.13-.38-.24L12 14.59l-2.17 2.16c-.11.11-.24.19-.38.24-.14.05-.29.08-.44.08-.15 0-.3-.03-.44-.08-.14-.05-.27-.13-.38-.24-.11-.11-.19-.24-.24-.38-.05-.14-.08-.29-.08-.44 0-.15.03-.3.08-.44.05-.14.13-.27.24-.38L10.41 12l-2.16-2.17c-.11-.11-.19-.24-.24-.38-.05-.14-.08-.29-.08-.44 0-.15.03-.3.08-.44.05-.14.13-.27.24-.38.11-.11.24-.19.38-.24.14-.05.29-.08.44-.08.15 0 .3.03.44.08.14.05.27.13.38.24L12 9.41l2.17-2.16c.11-.11.24-.19.38-.24.14-.05.29-.08.44-.08.15 0 .3.03.44.08.14.05.27.13.38.24.11.11.19.24.24.38.05.14.08.29.08.44 0 .15-.03.3-.08.44-.05.14-.13.27-.24.38L13.41 12l2.16 2.17c.11.11.19.24.24.38.05.14.08.29.08.44 0 .15-.03.3-.08.44-.05.14-.13.27-.24.38z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">John Anderson</h3>
                <p className="text-[#e2b279] mb-3">Master Chef</p>
                <p className="text-[#bdbdbd]">
                  With over 15 years of experience, John brings creativity and passion to every dish.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group text-center">
              <div className="relative h-80">
                <Image
                  src="/assets/img/team/team-2.webp"
                  alt="Chef Sarah Johnson"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm3.97 14.97c-.11.11-.24.19-.38.24-.14.05-.29.08-.44.08-.15 0-.3-.03-.44-.08-.14-.05-.27-.13-.38-.24L12 14.59l-2.17 2.16c-.11.11-.24.19-.38.24-.14.05-.29.08-.44.08-.15 0-.3-.03-.44-.08-.14-.05-.27-.13-.38-.24-.11-.11-.19-.24-.24-.38-.05-.14-.08-.29-.08-.44 0-.15.03-.3.08-.44.05-.14.13-.27.24-.38L10.41 12l-2.16-2.17c-.11-.11-.19-.24-.24-.38-.05-.14-.08-.29-.08-.44 0-.15.03-.3.08-.44.05-.14.13-.27.24-.38.11-.11.24-.19.38-.24.14-.05.29-.08.44-.08.15 0 .3.03.44.08.14.05.27.13.38.24L12 9.41l2.17-2.16c.11-.11.24-.19.38-.24.14-.05.29-.08.44-.08.15 0 .3.03.44.08.14.05.27.13.38.24.11.11.19.24.24.38.05.14.08.29.08.44 0 .15-.03.3-.08.44-.05.14-.13.27-.24.38L13.41 12l2.16 2.17c.11.11.19.24.24.38.05.14.08.29.08.44 0 .15-.03.3-.08.44-.05.14-.13.27-.24.38z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">Sarah Johnson</h3>
                <p className="text-[#e2b279] mb-3">Pastry Chef</p>
                <p className="text-[#bdbdbd]">
                  Sarah&apos;s artistic touch and innovative techniques create unforgettable desserts.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group text-center">
              <div className="relative h-80">
                <Image
                  src="/assets/img/team/team-3.webp"
                  alt="Chef Michael Chen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm3.97 14.97c-.11.11-.24.19-.38.24-.14.05-.29.08-.44.08-.15 0-.3-.03-.44-.08-.14-.05-.27-.13-.38-.24L12 14.59l-2.17 2.16c-.11.11-.24.19-.38.24-.14.05-.29.08-.44.08-.15 0-.3-.03-.44-.08-.14-.05-.27-.13-.38-.24-.11-.11-.19-.24-.24-.38-.05-.14-.08-.29-.08-.44 0-.15.03-.3.08-.44.05-.14.13-.27.24-.38L10.41 12l-2.16-2.17c-.11-.11-.19-.24-.24-.38-.05-.14-.08-.29-.08-.44 0-.15.03-.3.08-.44.05-.14.13-.27.24-.38.11-.11.24-.19.38-.24.14-.05.29-.08.44-.08.15 0 .3.03.44.08.14.05.27.13.38.24L12 9.41l2.17-2.16c.11-.11.24-.19.38-.24.14-.05.29-.08.44-.08.15 0 .3.03.44.08.14.05.27.13.38.24.11.11.19.24.24.38.05.14.08.29.08.44 0 .15-.03.3-.08.44-.05.14-.13.27-.24.38L13.41 12l2.16 2.17c.11.11.19.24.24.38.05.14.08.29.08.44 0 .15-.03.3-.08.44-.05.14-.13.27-.24.38z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center hover:bg-[#111115] hover:text-[#e2b279] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">Michael Chen</h3>
                <p className="text-[#e2b279] mb-3">Sous Chef</p>
                <p className="text-[#bdbdbd]">
                  Michael&apos;s precision and dedication ensure every dish meets our high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}