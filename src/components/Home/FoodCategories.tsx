import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const FoodCategories = () => {
  const categories = [
    { id: 1, name: 'Salad Bowl', image: '/assests-main/cat-1.webp', description: 'Fresh and healthy salad options' },
    { id: 2, name: 'Chakan Roll', image: '/assests-main/cat-2.webp', description: 'Delicious savory rolls and wraps' },
    { id: 3, name: 'Lobsters', image: '/assests-main/cat-3.webp', description: 'Premium seafood and grilled dishes' },
    { id: 4, name: 'Italian Burger', image: '/assests-main/cat-4.webp', description: 'Classic Italian-style sandwiches' },
    { id: 5, name: 'Cappuccino Arabica', image: '/assests-main/cat-5.webp', description: 'Beverages and coffee selections' }
  ];

  return (
    <section className={`${theme.spacing.sectionPadding} relative overflow-hidden bg-[#111115]`}>
      
      {/* Decorative leafy branch */}
      <div className="absolute left-0 top-1/3 w-40 h-48 opacity-50 z-10 hidden lg:block">
        <Image
          src="/assests-main/about-shape-1.webp"
          alt="Decorative leafy branch"
          width={160}
          height={192}
          className="object-contain w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'var(--font-el-messiri), sans-serif' }}>
            <span className="block mb-2 sm:mb-3">Choose Your Best Food</span>
            <span className="block">From Categories</span>
          </h2>
        </div>
        
        {/* Category Cards */}
        <div className="flex flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 overflow-x-auto">
          {categories.map((category) => (
            <Link key={category.id} href="/shop" className="text-center group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
              
              {/* Circular Image with Decorative Border */}
              <div className="relative mb-6 md:mb-8">
                
                <div className="absolute inset-0 w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full">
                  <Image
                    src="/assests-main/cat-shape.webp"
                    alt="Decorative border"
                    width={176}
                    height={176}
                    className="w-full h-full object-contain opacity-35"
                  />
                </div>
                
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 mx-auto rounded-full overflow-hidden border-4 border-[#111115] group-hover:border-[#e2b279] transition-all duration-300 shadow-lg z-10">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Category Name */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 text-center group-hover:text-[#e2b279] transition-colors duration-300" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
                {category.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-[#bdbdbd] max-w-32 md:max-w-36 lg:max-w-40 leading-relaxed text-center mx-auto" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;