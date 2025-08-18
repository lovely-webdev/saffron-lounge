import React from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const FoodCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Salad Bowl',
      image: '/assests-main/cat-1.webp',
      description: 'Fresh and healthy salad options'
    },
    {
      id: 2,
      name: 'Chakan Roll',
      image: '/assests-main/cat-2.webp',
      description: 'Delicious savory rolls and wraps'
    },
    {
      id: 3,
      name: 'Lobsters',
      image: '/assests-main/cat-3.webp',
      description: 'Premium seafood and grilled dishes'
    },
    {
      id: 4,
      name: 'Italian Burger',
      image: '/assests-main/cat-4.webp',
      description: 'Classic Italian-style sandwiches'
    },
    {
      id: 5,
      name: 'Cappuccino Arabica',
      image: '/assests-main/cat-5.webp',
      description: 'Beverages and coffee selections'
    }
  ];

  return (
    <section className={`${theme.spacing.sectionPadding} relative overflow-hidden bg-[#111115]`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assests-main/shape-5.webp"
          alt="Background pattern"
          fill
          className="object-cover opacity-15"
        />
      </div>
      
      {/* Decorative green leafy branch on left edge */}
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
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
            <span className="block mb-3 md:mb-4">Choose Your Best Food</span>
            <span className="block">From Categories</span>
          </h2>
        </div>
        
        {/* Category Cards - Single Row on Large Screens */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {categories.map((category) => (
            <div key={category.id} className="text-center group flex-shrink-0 w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[220px]">
              {/* Circular Image with Decorative Border */}
              <div className="relative mb-6 md:mb-8">
                {/* Decorative concentric circles using cat-shape.web */}
                <div className="absolute inset-0 w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full">
                  <Image
                    src="/assests-main/cat-shape.webp"
                    alt="Decorative border"
                    width={176}
                    height={176}
                    className="w-full h-full object-contain opacity-35"
                  />
                </div>
                
                {/* Food Image */}
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
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
                {category.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-[#bdbdbd] max-w-32 md:max-w-36 lg:max-w-40 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
