"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { etarBellotaFont } from '../../../app/etarBellotaFont';

const RestaurantMenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('Starter');
  
  const categories = ['Starter', 'Dishes', 'Desserts', 'Drink & Wines'];
  
  // Sample menu items for each category
  const menuItems = {
    Starter: [
      // Removed items with missing images (1-4)
    ],
    Dishes: [
      { id: 5, name: 'Grilled Salmon', price: '$32.00', image: '/assets/img/menu/menu-5.webp', description: 'Fresh salmon with lemon butter sauce' },
      { id: 6, name: 'Ribeye Steak', price: '$45.00', image: '/assets/img/menu/menu-6.webp', description: 'Premium ribeye with garlic mashed potatoes' },
      { id: 7, name: 'Chicken Parmesan', price: '$28.00', image: '/assets/img/menu/menu-7.webp', description: 'Breaded chicken with marinara and mozzarella' },
      { id: 8, name: 'Vegetable Stir Fry', price: '$24.00', image: '/assets/img/menu/menu-8.webp', description: 'Seasonal vegetables with tofu in ginger sauce' },
    ],
    Desserts: [
      { id: 9, name: 'Chocolate Cake', price: '$12.00', image: '/assets/img/menu/menu-9.webp', description: 'Rich chocolate cake with ganache' },
      { id: 10, name: 'Tiramisu', price: '$10.00', image: '/assets/img/menu/menu-10.webp', description: 'Classic Italian dessert with espresso' },
      { id: 11, name: 'Cheesecake', price: '$11.00', image: '/assets/img/menu/menu-11.webp', description: 'New York style with berry compote' },
      { id: 12, name: 'Ice Cream', price: '$8.00', image: '/assets/img/menu/menu-12.webp', description: 'Vanilla bean with caramel sauce' },
    ],
    'Drink & Wines': [
      { id: 13, name: 'House Red Wine', price: '$9.00', image: '/assets/img/menu/menu-13.webp', description: 'Glass of our premium house red' },
      { id: 14, name: 'House White Wine', price: '$9.00', image: '/assets/img/menu/menu-14.webp', description: 'Glass of our premium house white' },
      { id: 15, name: 'Craft Beer', price: '$7.00', image: '/assets/img/menu/menu-15.webp', description: 'Selection of local craft beers' },
      { id: 16, name: 'Signature Cocktail', price: '$14.00', image: '/assets/img/menu/menu-16.webp', description: 'Ask your server about today\'s special' },
    ],
  };

  return (
    <section className={`min-h-screen bg-[#111115] py-20 ${etarBellotaFont.variable}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Our Restaurant Menu</h1>
          <div className="flex items-center justify-center text-[#bdbdbd] py-6">
            <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
            <span className="mx-3">/</span>
            <span className="text-[#e2b279]">Restaurant Menu</span>
          </div>
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
                  : 'bg-[#18181c] text-white hover:bg-[#e2b279] hover:text-[#111115] border border-[#23232a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems]?.length > 0 ? (
            menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 bg-[#181c] rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
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
                    <h3 className="text-xl font-bold text-white group-hover:text-[#e2b279] transition-colors duration-300">{item.name}</h3>
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
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-xl text-[#bdbdbd]">No items available in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenuPage;