"use client";

import React, { useEffect, useState } from 'react';
import HeroBanner from "@/components/Home/HeroBanner";
import FeaturedList from "@/components/Home/FeaturedList";
import AboutSection from "@/components/Home/AboutSection";
import FeatureHighlights from "@/components/Home/FeatureHighlights";
import MenuShowcase from "@/components/Home/MenuShowcase";
import FoodGallery from "@/components/Home/FoodGallery";
import Testimonials from "@/components/Home/Testimonials";
import TeamProfiles from "@/components/Home/TeamProfiles";
import Reservation from "@/components/Home/Reservation";
import BlogSection from "@/components/Home/BlogSection";
import VideoSection from "@/components/Home/VideoSection";
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
    <main className="w-full flex flex-col gap-0 items-center justify-center min-h-[70vh] p-0 sm:p-0">
      <HeroBanner />
      <FeaturedList />
      <AboutSection />
      <MenuShowcase />
      <FoodGallery />
      <VideoSection />
      <Testimonials />
      <TeamProfiles
        members={teamMembers}
        title="Our Team"
        description="Meet the passionate professionals who make our culinary vision a reality"
        variant="home"
      />
      <Reservation />
      <BlogSection />
    </main>
  );
}