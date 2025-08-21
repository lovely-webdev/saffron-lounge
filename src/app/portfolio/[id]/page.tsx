"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PortfolioDetailPage = () => {
  // Sample portfolio item data
  const portfolioItem = {
    id: 1,
    title: "Gourmet Plating",
    category: "Food",
    image: "/assets/img/portfolio/portfolio-1.webp",
    description: "Artfully presented signature dish",
    fullDescription: "This exquisite dish represents the pinnacle of our culinary artistry. Each element has been carefully selected and prepared to create a harmonious balance of flavors, textures, and visual appeal. Our chef's expertise shines through in every detail, from the precise arrangement of ingredients to the thoughtful selection of accompaniments.",
    date: "June 15, 2023",
    tags: ["Fine Dining", "Culinary Art", "Gourmet", "Presentation"],
    gallery: [
      "/assets/img/portfolio/portfolio-1.webp",
      "/assets/img/portfolio/portfolio-2.webp",
      "/assets/img/portfolio/portfolio-3.webp",
      "/assets/img/portfolio/portfolio-4.webp"
    ]
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Portfolio Detail
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <Link href="/portfolio" className="hover:text-[#e2b279] transition-colors duration-300">Portfolio</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">{portfolioItem.title}</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={portfolioItem.image}
                  alt={portfolioItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                {portfolioItem.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-[#e2b279] text-[#111115] rounded-full text-sm font-bold">
                  {portfolioItem.category}
                </span>
                <span className="text-[#bdbdbd]">{portfolioItem.date}</span>
              </div>
              
              <p className="text-[#bdbdbd] text-lg mb-8">
                {portfolioItem.fullDescription}
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {portfolioItem.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${portfolioItem.title} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a] sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Project Information
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[#bdbdbd] block mb-1">Category</span>
                    <span className="text-white">{portfolioItem.category}</span>
                  </div>
                  <div>
                    <span className="text-[#bdbdbd] block mb-1">Date</span>
                    <span className="text-white">{portfolioItem.date}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioItem.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-[#111115] text-[#bdbdbd] rounded-full text-sm border border-[#23232a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/portfolio" 
                    className="w-full py-3 bg-[#18181c] text-white border border-[#23232a] hover:bg-[#e2b279] hover:text-[#111115] hover:border-[#e2b279] transition-all duration-300 font-bold rounded-md text-center block"
                  >
                    View All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetailPage;