"use client";

import HeroBanner from "@/components/Home/HeroBanner";
import FeatureHighlights from "@/components/Home/FeatureHighlights";
import MenuShowcase from "@/components/Home/MenuShowcase";
import FoodGallery from "@/components/Home/FoodGallery";
import Testimonials from "@/components/Home/Testimonials";
import TeamProfiles from "@/components/Home/TeamProfiles";
import Reservation from "@/components/Home/Reservation";
import BlogSection from "@/components/Home/BlogSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 items-center justify-center min-h-[70vh] p-0 sm:p-0">
      <HeroBanner />
      <FeatureHighlights />
      <MenuShowcase />
      <FoodGallery />
      <Testimonials />
      <TeamProfiles />
      <Reservation />
      <BlogSection />
    </main>
  );
}