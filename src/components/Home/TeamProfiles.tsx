import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import { TeamMember } from '@/types/team';

interface TeamProfilesProps {
  members: TeamMember[];
  title?: string;
  description?: string;
  variant?: string;
}

const TeamProfiles = ({
  members,
  title = "Meet Our Professionals",
  description = "Our passionate team of culinary experts",
}: TeamProfilesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  return (
    <section className={`${theme.spacing.sectionPadding} relative bg-[#111115] ${etarBellotaFont.variable}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              {title}
            </h2>
            <p className="text-xl text-[#bdbdbd]">{description}</p>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Team Members */}
          <div className="flex overflow-hidden">
            {members.map((member, index) => {
              const offset = index - currentIndex;
              return (
                <div
                  key={member.id}
                  className={`flex-none transition-transform duration-500 ${
                    offset === 0 ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                  }`}
                  style={{ minWidth: '25%' }}
                >
                  <div className="text-center px-2">
                    <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden border-4 border-[#18181c] group-hover:border-[#e2b279] transition-all duration-300 shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-4">{member.name}</h3>
                    <p className="text-lg text-[#e2b279]">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevMember}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#333] hover:bg-[#444] flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextMember}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#333] hover:bg-[#444] flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center mt-6 lg:hidden">
          {members.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-[#e2b279]' : 'bg-[#444]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;
