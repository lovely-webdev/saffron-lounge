import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const MenuShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('Dishes');
  
  const categories = ['Starter', 'Dishes', 'Desserts', 'Drink & Wines'];
  
  const menuItems = {
    Starter: [
      { id: 1, name: 'Foie Gras', price: '$40.00', image: '/assests-main/recipe-1.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 2, name: 'Spring Rolls', price: '$18.00', image: '/assests-main/recipe-2.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 3, name: 'Bruschetta', price: '$22.00', image: '/assests-main/recipe-3.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
    ],
    Dishes: [
      { id: 4, name: 'Foie GLyonnaise Saladras', price: '$30.00', image: '/assests-main/recipe-4.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 5, name: 'Chicken Skewers', price: '$40.00', image: '/assests-main/recipe-5.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 6, name: 'Grilled Salmon', price: '$45.00', image: '/assests-main/recipe-6.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
    ],
    Desserts: [
      { id: 7, name: 'Chocolate Cake', price: '$18.00', image: '/assests-main/recipe-7.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 8, name: 'Tiramisu', price: '$16.00', image: '/assests-main/cat-1.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 9, name: 'Cheesecake', price: '$14.00', image: '/assests-main/cat-2.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
    ],
    'Drink & Wines': [
      { id: 10, name: 'Red Wine', price: '$25.00', image: '/assests-main/cat-3.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 11, name: 'White Wine', price: '$22.00', image: '/assests-main/cat-4.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
      { id: 12, name: 'Craft Beer', price: '$12.00', image: '/assests-main/cat-5.webp', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' },
    ]
  };

  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#111115] ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left side - Banner */}
          <div className="relative mb-12 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-10 leading-tight" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              <span className="block mb-2">From Our</span>
              <span className="block">Restaurant Menu</span>
            </h2>
            
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden transform rotate-2 sm:rotate-3">
                <Image
                  src="/assests-main/recipe-1.webp"
                  alt="Main dish"
                  width={500}
                  height={400}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>

              <div className="absolute -bottom-10 -left-10 w-24 sm:w-36 h-28 sm:h-44 opacity-90">
                <Image
                  src="/assests-main/about-shape-1.webp"
                  alt="Decorative leafy branch"
                  width={144}
                  height={176}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right side - Menu Items */}
          <div className="relative">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-14">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[#e2b279] text-[#111115]'
                      : 'bg-[#18181c] text-white hover:bg-[#23232a]'
                  }`}
                  style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}
                >
                  {category}
                </button>
              ))}
              <button 
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold bg-transparent text-white border border-white hover:bg-white hover:text-[#111115] transition-all duration-300"
                style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}
              >
                View All Menu
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-8 sm:space-y-10">
              {menuItems[activeCategory as keyof typeof menuItems]?.slice(0, 3).map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="relative overflow-hidden rounded-lg w-20 h-20 sm:w-24 sm:h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/assests-main/recipe-1.webp';
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                        {item.name}
                      </h3>
                      <span className="text-lg sm:text-xl font-bold text-[#e2b279]" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                        {item.price}
                      </span>
                    </div>
                    <div className="w-full border-b border-dashed border-[#e2b279] mb-2 sm:mb-4"></div>
                    <p className="text-white text-sm sm:text-base leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;
