import React from 'react';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import ResponsiveContainer from './ResponsiveContainer';

const Reservation = () => {
  return (
    <section className={`${theme.spacing.sectionPadding} relative bg-[#111115] ${etarBellotaFont.variable}`}>
      <ResponsiveContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Reservation Form */}
          <div className="relative">
            {/* Decorative Left Border - hidden on mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e2b279] via-[#e2b279] to-[#e2b279] hidden sm:block">
              {/* Top decorative element */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-[#e2b279] rounded-full"></div>
              {/* Bottom decorative element */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-[#e2b279] rounded-full"></div>
              {/* Middle flower pattern */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-[#e2b279] rounded-full opacity-80"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Form Container */}
            <div className="ml-0 sm:ml-8 p-6 sm:p-8 border border-[#333] rounded-lg bg-[#18181c]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                Make A Reserve
              </h2>
              
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-[#111115] border border-[#333] rounded-lg text-white placeholder-[#666] focus:border-[#e2b279] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-[#111115] border border-[#333] rounded-lg text-white placeholder-[#666] focus:border-[#e2b279] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <select className="w-full px-4 py-3 bg-[#111115] border border-[#333] rounded-lg text-white focus:border-[#e2b279] focus:outline-none transition-colors duration-300 text-sm sm:text-base">
                    <option value="" className="text-[#666]">Persons</option>
                    <option value="1" className="text-white">1 Person</option>
                    <option value="2" className="text-white">2 Persons</option>
                    <option value="3" className="text-white">3 Persons</option>
                    <option value="4" className="text-white">4 Persons</option>
                    <option value="5" className="text-white">5+ Persons</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      className="w-full px-4 py-3 bg-[#111115] border border-[#333] rounded-lg text-white placeholder-[#666] focus:border-[#e2b279] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                    />
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="--:--"
                      className="w-full px-4 py-3 bg-[#111115] border border-[#333] rounded-lg text-white placeholder-[#666] focus:border-[#e2b279] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                    />
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#e2b279] text-[#111115] font-bold text-base sm:text-lg rounded-lg hover:bg-[#d4a46a] transition-all duration-300"
                >
                  Book A Table
                </button>
              </form>
            </div>
            
            {/* Decorative Right Border - hidden on mobile */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e2b279] via-[#e2b279] to-[#e2b279] hidden sm:block">
              {/* Top decorative element */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-[#e2b279] rounded-full"></div>
              {/* Bottom decorative element */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-[#e2b279] rounded-full"></div>
              {/* Middle flower pattern */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-[#e2b279] rounded-full opacity-80"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              <span className="block">Enhancing</span>
              <span className="block">Your Feelings</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-[#bdbdbd] mb-8 leading-relaxed">
              From signature delights such as beef tartare and the best mashed potato in Paris, all the way to unique specialities such as thinly sliced Brittany artichokes with truffles.
            </p>
            
            {/* Statistics */}
            <div className="flex gap-8 sm:gap-12 md:gap-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#bdbdbd] mb-2">70+</div>
                <div className="text-sm sm:text-base md:text-lg text-white">Clients Every Day</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#bdbdbd] mb-2">110+</div>
                <div className="text-sm sm:text-base md:text-lg text-white">Great Moments</div>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default Reservation;