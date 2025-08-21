"use client";

import React, { useEffect, useState } from 'react';
import TeamProfiles from '@/components/Home/TeamProfiles';
import { getTeamMembers } from '@/lib/teamData';
import { TeamMember } from '@/types/team';
import Link from 'next/link';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const members = await getTeamMembers();
      setTeamMembers(members);
    };
    
    fetchTeamMembers();
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Our Team
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Our Team</span>
            </div>
          </div>
        </div>
      </div>
      
      <TeamProfiles
        members={teamMembers}
        title="Our Team"
        description="Meet the passionate professionals who make our restaurant exceptional"
        variant="page"
      />
    </>
  );
};

export default TeamPage;