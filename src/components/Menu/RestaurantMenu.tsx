"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import ResponsiveContainer from '../Home/ResponsiveContainer';

const RestaurantMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Starter');
  
  const categories = ['Starter', 'Dishes', 'Desserts', 'Drink & Wines'];
  
  // Sample menu items for each category
  const menuItems = {
    Starter: [
      { id: 1, name: 'Foie Gras', price: '$40.00', image: '/assests-main/recipe-1.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 2, name: 'Spring Rolls', price: '$18.00', image: '/assests-main/recipe-2.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 3, name: 'Bruschetta', price: '$22.00', image: '/assests-main/recipe-3.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 4, name: 'Calamari', price: '$25.00', image: '/assests-main/recipe-4.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
    ],
    Dishes: [
      { id: 5, name: 'Foie GLyonnaise Saladras', price: '$30.00', image: '/assests-main/recipe-5.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 6, name: 'Chicken Skewers', price: '$40.00', image: '/assests-main/recipe-6.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 7, name: 'Grilled Salmon', price: '$45.00', image: '/assests-main/recipe-7.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 8, name: 'Beef Wellington', price: '$55.00', image: '/assests-main/recipe-8.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
    ],
    Desserts: [
      { id: 9, name: 'Chocolate Cake', price: '$18.00', image: '/assests-main/recipe-1.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 10, name: 'Tiramisu', price: '$16.00', image: '/assests-main/cat-1.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 11, name: 'Cheesecake', price: '$14.00', image: '/assests-main/cat-2.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 12, name: 'Crème Brûlée', price: '$15.00', image: '/assests-main/cat-3.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
    ],
    'Drink & Wines': [
      { id: 13, name: 'Red Wine', price: '$25.00', image: '/assests-main/cat-4.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 14, name: 'White Wine', price: '$22.00', image: '/assests-main/cat-5.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 15, name: 'Craft Beer', price: '$12.00', image: '/assests-main/recipe-2.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 16, name: 'Signature Cocktail', price: '$18.00', image: '/assests-main/recipe-3.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
    ]
  };

  return (
    <section className={`py-20 bg-[#111115] ${etarBellotaFont.variable}`}>
      <ResponsiveContainer>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
            Full Restaurant Menu
          </h2>
          <div className="w-24 h-1 bg-[#e2b279] mx-auto mb-6"></div>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and culinary expertise
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
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6 bg-[#18181c] rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-cover w-[120px] h-[120px] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-el-messiri)' }}>{item.name}</h3>
                  <span className="text-xl font-bold text-[#e2b279]">{item.price}</span>
                </div>
                <p className="text-[#bdbdbd] text-base mb-4">{item.description}</p>
                <button className="text-[#e2b279] font-bold text-base flex items-center group">
                  Add to Cart
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default RestaurantMenu;