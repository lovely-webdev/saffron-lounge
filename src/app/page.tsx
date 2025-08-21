"use client";

import React, { useEffect, useState } from 'react';
import HeroBanner from "@/components/Home/HeroBanner";
import FeaturedList from "@/components/Home/FeaturedList";
import AboutSection from "@/components/Home/AboutSection";
import MenuShowcase from "@/components/Home/MenuShowcase";
import FoodCategories from "@/components/Home/FoodCategories";
import VideoSection from "@/components/Home/VideoSection";
import Testimonials from "@/components/Home/Testimonials";
import TeamProfiles from "@/components/Home/TeamProfiles";
import Reservation from "@/components/Home/Reservation";
import BlogSection from "@/components/Home/BlogSection";
import { getTeamMembers } from '@/lib/teamData';
import { TeamMember } from '@/types/team';

export default function Home() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const members = await getTeamMembers();
      setTeamMembers(members);
    };
    
    fetchTeamMembers();
  }, []);

  return (
    <main className="w-full flex flex-col gap-0 items-center justify-center min-h-[70vh]">
      <HeroBanner />
      <div className="w-full">
        <FeaturedList />
      </div>
      <div className="w-full bg-[#111115]">
        <AboutSection />
      </div>
      <div className="w-full bg-[#18171d]">
        <MenuShowcase />
      </div>
      <div className="w-full bg-[#111115]">
        <FoodCategories />
      </div>
      <div className="w-full bg-[#18171d]">
        <VideoSection />
      </div>
      <div className="w-full bg-[#111115]">
        <Testimonials />
      </div>
      <div className="w-full bg-[#18171d]">
        <TeamProfiles
          members={teamMembers}
          title="Meet Our Professionals"
          description="Meet the passionate professionals who make our culinary vision a reality"
          variant="home"
        />
      </div>
      <div className="w-full bg-[#111115]">
        <Reservation />
      </div>
      <div className="w-full bg-[#18171d]">
        <BlogSection />
      </div>
    </main>
  );
}