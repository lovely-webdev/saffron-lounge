import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import { TeamMember } from '@/types/team';

interface TeamProfilesProps {
  members: TeamMember[];
  title?: string;
  description?: string;
  variant?: 'home' | 'page';
}

const TeamProfiles = ({ members, title = "Meet Our Professionals", description = "Our passionate team of culinary experts", variant = 'home' }: TeamProfilesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === members.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMember = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  const currentMember = members[currentIndex];

  return (
    <section className={`${theme.spacing.sectionPadding} relative bg-[#111115] ${etarBellotaFont.variable}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bottom-left decorative pattern */}
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-gray-400">
            <path d="M50 0C45 20 40 40 35 60C30 80 25 100 20 120C15 140 10 150 5 150C0 150 0 140 0 130C0 120 0 110 0 100C0 90 0 80 0 70C0 60 0 50 0 40C0 30 0 20 0 10C0 0 0 0 10 0C20 0 30 0 40 0C50 0 50 0 50 0Z"/>
          </svg>
        </div>
        
        {/* Bottom-right decorative pattern */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-gray-400">
            <path d="M50 0C45 20 40 40 35 60C30 80 25 100 20 120C15 140 10 150 5 150C0 150 0 140 0 130C0 120 0 110 0 100C0 90 0 80 0 70C0 60 0 50 0 40C0 30 0 20 0 10C0 0 0 0 10 0C20 0 30 0 40 0C50 0 50 0 50 0Z"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              {title}
            </h2>
            <p className="text-xl text-[#bdbdbd] max-w-2xl">
              {description}
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevMember}
              className="w-12 h-12 rounded-full bg-[#333] hover:bg-[#444] transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextMember}
              className="w-12 h-12 rounded-full bg-[#333] hover:bg-[#444] transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Team Member Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={member.id}
              className={`text-center group transition-all duration-500 ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
              }`}
            >
              {/* Member Image */}
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden border-4 border-[#18181c] group-hover:border-[#e2b279] transition-all duration-300 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Member Information */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-lg text-[#e2b279]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-12 lg:hidden">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                index === currentIndex ? 'bg-[#e2b279]' : 'bg-[#444]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;