"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Food', 'Events', 'Restaurant', 'Chef', 'Drinks'];
  
  const portfolioItems = [
    {
      id: 1,
      title: "Gourmet Plating",
      category: "Food",
      image: "/assets/img/portfolio/portfolio-1.webp",
      description: "Artfully presented signature dish"
    },
    {
      id: 2,
      title: "Wine Tasting Event",
      category: "Events",
      image: "/assets/img/portfolio/portfolio-2.webp",
      description: "Exclusive wine tasting session"
    },
    {
      id: 3,
      title: "Restaurant Interior",
      category: "Restaurant",
      image: "/assets/img/portfolio/portfolio-3.webp",
      description: "Elegant dining room ambiance"
    },
    {
      id: 4,
      title: "Chef in Action",
      category: "Chef",
      image: "/assets/img/portfolio/portfolio-4.webp",
      description: "Master chef preparing cuisine"
    },
    {
      id: 5,
      title: "Cocktail Presentation",
      category: "Drinks",
      image: "/assets/img/portfolio/portfolio-5.webp",
      description: "Craft cocktail creation"
    },
    {
      id: 6,
      title: "Dessert Artistry",
      category: "Food",
      image: "/assets/img/portfolio/portfolio-6.webp",
      description: "Exquisite dessert presentation"
    }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Our Portfolio
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Portfolio</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto text-center mb-16">
            Explore our culinary artistry and memorable dining experiences
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#e2b279] text-[#111115]'
                    : 'bg-[#18181c] text-white hover:bg-[#23232a]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                    {item.title}
                  </h3>
                  <p className="text-[#bdbdbd] mb-4">{item.description}</p>
                  <Link 
                    href={`/portfolio/${item.id}`}
                    className="px-6 py-2 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;