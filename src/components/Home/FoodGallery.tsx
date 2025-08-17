import React from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const FoodGallery = () => {
  // Sample gallery images
  const galleryImages = [
    { id: 1, src: '/assets/img/gallery/gallery-1.webp', alt: 'Delicious Dish 1' },
    { id: 2, src: '/assets/img/gallery/gallery-2.webp', alt: 'Delicious Dish 2' },
    { id: 3, src: '/assets/img/gallery/gallery-3.webp', alt: 'Delicious Dish 3' },
    { id: 4, src: '/assets/img/gallery/gallery-4.webp', alt: 'Delicious Dish 4' },
    { id: 5, src: '/assets/img/gallery/gallery-5.webp', alt: 'Delicious Dish 5' },
    { id: 6, src: '/assets/img/gallery/gallery-6.webp', alt: 'Delicious Dish 6' },
  ];

  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#18181c] ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Food Gallery</h2>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Explore our culinary creations through these carefully curated images
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e2b279] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#111115]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;