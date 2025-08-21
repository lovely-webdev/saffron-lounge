"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import ResponsiveContainer from '../Home/ResponsiveContainer';

const CafeMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Coffee');
  
  const categories = ['Coffee', 'Tea', 'Pastries', 'Light Meals'];
  
  // Sample menu items for each category
  const menuItems = {
    Coffee: [
      { id: 1, name: 'Espresso', price: '$3.00', image: '/assests-main/recipe-1.webp', description: 'Strong black coffee made by forcing steam through ground coffee beans' },
      { id: 2, name: 'Cappuccino', price: '$4.50', image: '/assests-main/recipe-2.webp', description: 'Espresso with steamed milk foam' },
      { id: 3, name: 'Latte', price: '$5.00', image: '/assests-main/recipe-3.webp', description: 'Espresso with steamed milk and a small amount of foam' },
      { id: 4, name: 'Americano', price: '$3.50', image: '/assests-main/recipe-4.webp', description: 'Espresso diluted with hot water' },
    ],
    Tea: [
      { id: 5, name: 'Green Tea', price: '$3.00', image: '/assests-main/cat-1.webp', description: 'Freshly brewed green tea leaves' },
      { id: 6, name: 'Black Tea', price: '$3.00', image: '/assests-main/cat-2.webp', description: 'Classic black tea blend' },
      { id: 7, name: 'Herbal Tea', price: '$3.50', image: '/assests-main/cat-3.webp', description: 'Selection of herbal infusions' },
      { id: 8, name: 'Chai Latte', price: '$4.50', image: '/assests-main/cat-4.webp', description: 'Spiced tea with steamed milk' },
    ],
    Pastries: [
      { id: 9, name: 'Croissant', price: '$3.50', image: '/assests-main/cat-5.webp', description: 'Buttery French pastry' },
      { id: 10, name: 'Muffin', price: '$4.00', image: '/assests-main/recipe-5.webp', description: 'Blueberry or chocolate chip' },
      { id: 11, name: 'Scone', price: '$3.75', image: '/assests-main/recipe-6.webp', description: 'Fresh baked with fruit' },
      { id: 12, name: 'Danish', price: '$4.25', image: '/assests-main/recipe-7.webp', description: 'Buttery with fruit filling' },
    ],
    'Light Meals': [
      { id: 13, name: 'Avocado Toast', price: '$8.50', image: '/assests-main/recipe-8.webp', description: 'Smashed avocado with microgreens' },
      { id: 14, name: 'Breakfast Sandwich', price: '$7.50', image: '/assests-main/recipe-1.webp', description: 'Egg, cheese, and bacon on a roll' },
      { id: 15, name: 'Salad Bowl', price: '$9.00', image: '/assests-main/recipe-2.webp', description: 'Mixed greens with seasonal ingredients' },
      { id: 16, name: 'Soup of the Day', price: '$6.50', image: '/assests-main/recipe-3.webp', description: 'Ask your server for today\'s selection' },
    ],
  };

  return (
    <section className={`py-20 bg-[#111115] ${etarBellotaFont.variable}`}>
      <ResponsiveContainer>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
            Full Cafe Menu
          </h2>
          <div className="w-24 h-1 bg-[#e2b279] mx-auto mb-6"></div>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Discover our carefully crafted beverages and light meals made with the finest ingredients
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6 bg-[#18181c] rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
            >
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#e2b279] transition-colors duration-300" style={{ fontFamily: 'var(--font-el-messiri)' }}>{item.name}</h3>
                  <span className="text-xl font-bold text-[#e2b279]">{item.price}</span>
                </div>
                <p className="text-[#bdbdbd] mb-3">{item.description}</p>
                <button className="text-[#e2b279] font-bold hover:text-white transition-colors duration-300 flex items-center">
                  Add to Cart
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
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

export default CafeMenu;