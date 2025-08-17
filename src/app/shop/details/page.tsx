"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ShopDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Sample product data
  const product = {
    id: 1,
    name: "Truffle Pasta",
    price: "$24.99",
    description: "Indulge in our signature truffle pasta, featuring al dente pasta tossed in a rich, aromatic truffle sauce made from the finest ingredients. Garnished with parmesan shavings and fresh herbs.",
    category: "Main Course",
    rating: 4.8,
    images: [
      "/assets/img/menu/menu-1.webp",
      "/assets/img/menu/menu-2.webp",
      "/assets/img/menu/menu-3.webp",
      "/assets/img/menu/menu-4.webp"
    ],
    tags: ["Pasta", "Truffle", "Italian", "Vegetarian"],
    ingredients: ["Pasta", "Truffle Oil", "Parmesan Cheese", "Garlic", "Fresh Herbs", "Olive Oil"]
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
      name: "Chocolate Cake",
      price: "$8.99",
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Details</h1>
          <div className="flex items-center justify-center text-[#bdbdbd] py-6">
            <a href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</a>
            <span className="mx-3">/</span>
            <a href="/shop/grid" className="hover:text-[#e2b279] transition-colors duration-300">Shop</a>
            <span className="mx-3">/</span>
            <span className="text-[#e2b279]">Product Details</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
              <Image 
                src={product.images[selectedImage]} 
                alt={product.name} 
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage === index ? 'border-[#e2b279]' : 'border-[#23232a]'}`}
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

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>
            <div className="flex items-center mb-6">
              <div className="flex text-[#e2b279] mr-3">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#bdbdbd]">{product.rating} (128 Reviews)</span>
            </div>
            <p className="text-3xl font-bold text-[#e2b279] mb-6">{product.price}</p>
            <p className="text-[#bdbdbd] text-lg mb-8">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-[#18181c] text-[#bdbdbd] rounded-full text-sm border border-[#23232a]"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center">
                <span className="text-white mr-4">Quantity:</span>
                <div className="flex items-center border border-[#23232a] rounded-md">
                  <button 
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center text-[#bdbdbd] hover:text-white hover:bg-[#18181c] transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  </button>
                  <span className="w-12 text-center text-white">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center text-[#bdbdbd] hover:text-white hover:bg-[#18181c] transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <button className="px-8 py-3 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300">
                Add to Cart
              </button>
            </div>

            <div className="border-t border-[#23232a] pt-6">
              <div className="flex items-center mb-3">
                <span className="text-white mr-3">Category:</span>
                <span className="text-[#e2b279]">{product.category}</span>
              </div>
              <div className="flex items-center">
                <span className="text-white mr-3">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="text-[#bdbdbd] hover:text-[#e2b279] transition-colors duration-300"
                    >
                      {tag}{index < product.tags.length - 1 ? ',' : ''}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
              >
                <div className="relative h-56">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    className="object-cover"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#e2b279] text-[#111115] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#e2b279] transition-colors duration-300">{item.name}</h3>
                    <span className="text-xl font-bold text-[#e2b279]">{item.price}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#e2b279]">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-current' : 'fill-none'}`} 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[#bdbdbd] text-sm ml-2">{item.rating}</span>
                  </div>
                  <button className="w-full py-3 bg-[#18181c] text-white border border-[#23232a] hover:bg-[#e2b279] hover:text-[#111115] hover:border-[#e2b279] transition-all duration-300 font-bold rounded-md">
                    Add to Cart
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