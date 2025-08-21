import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import ResponsiveContainer from './ResponsiveContainer';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

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
    <section className={`${theme.spacing.sectionPadding} relative bg-[#18171d] ${etarBellotaFont.variable}`}>
      {/* Background Shapes */}
      <div className="absolute left-0 top-1/4 w-32 h-32 opacity-10 hidden lg:block">
        <Image
          src="/assests-main/shape-9.webp"
          alt="Decorative shape"
          width={128}
          height={128}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute right-0 bottom-1/4 w-32 h-32 opacity-10 hidden lg:block">
        <Image
          src="/assests-main/shape-12.webp"
          alt="Decorative shape"
          width={128}
          height={128}
          className="object-contain w-full h-full"
        />
      </div>
      
      <ResponsiveContainer>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 lg:mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#bdbdbd]">{description}</p>
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
                  className={`flex-none transition-transform duration-500 ease-in-out ${
                    offset === 0 ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                  }`}
                  style={{ minWidth: '50%' }} // Show 2 items on mobile, 4 on larger screens
                >
                  <div className="text-center px-1 sm:px-2">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-lg overflow-hidden border-4 border-[#18181c] group-hover:border-[#e2b279] transition-all duration-300 shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-3 sm:mt-4">{member.name}</h3>
                    <p className="text-sm sm:text-base text-[#e2b279]">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows - hidden on mobile */}
          <button
            onClick={prevMember}
            className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#333] hover:bg-[#444] flex items-center justify-center hidden sm:flex"
            aria-label="Previous team member"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextMember}
            className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#333] hover:bg-[#444] flex items-center justify-center hidden sm:flex"
            aria-label="Next team member"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center mt-6">
          {members.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 mx-1 sm:mx-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-[#e2b279]' : 'bg-[#444]'
              }`}
              aria-label={`Go to team member ${idx + 1}`}
            />
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default TeamProfiles;