"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];
  
  // Sample shop items
  const shopItems = [
    {
      id: 5,
      name: "Beef Steak",
      price: "$36.99",
      image: "/assets/img/menu/menu-5.webp",
      category: "Main Course",
      rating: 4.9
    },
    {
      id: 6,
      name: "Tiramisu",
      price: "$10.99",
      image: "/assets/img/menu/menu-6.webp",
      category: "Desserts",
      rating: 4.8
    }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? shopItems 
    : shopItems.filter(item => item.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#111115] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h1>
          <div className="flex items-center justify-center text-[#bdbdbd] py-6">
            <a href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</a>
            <span className="mx-3">/</span>
            <span className="text-[#e2b279]">Shop</span>
          </div>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Explore our carefully crafted dishes made with the finest ingredients
          </p>
        </div>
        
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
        
        {/* Shop Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#111115] bg-opacity-70 flex items-center justify-center text-[#e2b279] hover:bg-[#e2b279] hover:text-[#111115] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-xl font-bold text-[#e2b279]">{item.price}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-[#e2b279] mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-current' : 'fill-none'}`} 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[#bdbdbd] text-sm">{item.rating}</span>
                </div>
                <button className="w-full py-3 bg-[#e2b279] text-[#111115] font-bold rounded-lg hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-[#18181c] text-white flex items-center justify-center hover:bg-[#e2b279] hover:text-[#111115] transition-colors duration-300">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-[#18181c] text-white flex items-center justify-center hover:bg-[#e2b279] hover:text-[#111115] transition-colors duration-300">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-[#18181c] text-white flex items-center justify-center hover:bg-[#e2b279] hover:text-[#111115] transition-colors duration-300">
              3
            </button>
            <button className="w-10 h-10 rounded-full bg-[#18181c] text-white flex items-center justify-center hover:bg-[#e2b279] hover:text-[#111115] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;