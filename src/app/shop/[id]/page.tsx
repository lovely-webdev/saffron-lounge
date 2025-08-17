"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShopDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Sample product data
  const product = {
    name: "Truffle Pasta",
    price: "$24.99",
    description: "Handmade pasta tossed in a rich truffle cream sauce with wild mushrooms and parmesan cheese. Garnished with fresh herbs and a drizzle of truffle oil.",
    category: "Main Course",
    rating: 4.8,
    reviews: 24,
    images: [
      "/assets/img/menu/menu-1.webp",
      "/assets/img/menu/menu-2.webp",
      "/assets/img/menu/menu-3.webp"
    ],
    ingredients: [
      "Fresh pasta",
      "Truffle cream sauce",
      "Wild mushrooms",
      "Parmesan cheese",
      "Fresh herbs",
      "Truffle oil"
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Grilled Salmon",
      price: "$28.99",
      image: "/assets/img/menu/menu-2.webp",
      rating: 4.9
    },
    {
      id: 3,
      name: "Chocolate Soufflé",
      price: "$12.99",
      image: "/assets/img/menu/menu-3.webp",
      rating: 4.7
    },
    {
      id: 4,
      name: "Caesar Salad",
      price: "$14.99",
      image: "/assets/img/menu/menu-4.webp",
      rating: 4.6
    }
  ];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="min-h-screen bg-[#111115] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link href="/shop" className="inline-flex items-center text-[#e2b279] mb-8 group">
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Menu
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden mb-6">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage === index ? 'border-[#e2b279]' : 'border-[#23232a]'}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[#e2b279] font-bold">{product.category}</span>
                <h1 className="text-3xl font-bold text-white mt-2">{product.name}</h1>
              </div>
              <span className="text-3xl font-bold text-[#e2b279]">{product.price}</span>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="flex text-[#e2b279] mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#bdbdbd]">{product.rating} ({product.reviews} reviews)</span>
            </div>
            
            <p className="text-[#bdbdbd] text-lg mb-8">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Ingredients</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center text-[#bdbdbd]">
                    <svg className="w-4 h-4 text-[#e2b279] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center border border-[#23232a] rounded-lg">
                <button 
                  onClick={decrementQuantity}
                  className="w-12 h-12 flex items-center justify-center text-[#e2b279] hover:bg-[#18181c] transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-12 text-center text-white">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="w-12 h-12 flex items-center justify-center text-[#e2b279] hover:bg-[#18181c] transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              
              <button className="flex-1 min-w-[200px] py-3 bg-[#e2b279] text-[#111115] font-bold rounded-lg hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300">
                Add to Cart
              </button>
              
              <button className="w-12 h-12 flex items-center justify-center border border-[#23232a] rounded-lg text-[#e2b279] hover:bg-[#18181c] transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            
            <div className="border-t border-[#23232a] pt-8">
              <h3 className="text-xl font-bold text-white mb-4">Category</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-[#18181c] text-white rounded-full">Main Course</span>
                <span className="px-4 py-2 bg-[#18181c] text-white rounded-full">Pasta</span>
                <span className="px-4 py-2 bg-[#18181c] text-white rounded-full">Truffle</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Related Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
              >
                <div className="relative h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <span className="text-xl font-bold text-[#e2b279]">{product.price}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#e2b279] mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`} 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[#bdbdbd] text-sm">{product.rating}</span>
                  </div>
                  <button className="w-full py-3 bg-[#e2b279] text-[#111115] font-bold rounded-lg hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetailsPage;