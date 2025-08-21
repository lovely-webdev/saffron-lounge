"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  const categories = [
    { id: 'all', name: 'All Items', count: 24 },
    { id: 'appetizers', name: 'Appetizers', count: 6 },
    { id: 'main-course', name: 'Main Course', count: 10 },
    { id: 'desserts', name: 'Desserts', count: 5 },
    { id: 'beverages', name: 'Beverages', count: 8 },
    { id: 'specials', name: 'Chef Specials', count: 3 }
  ];
  
  const tags = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 'Spicy', 'Seafood', 'Organic'
  ];
  
  // Sample shop items with more data
  const shopItems = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 24.99,
      originalPrice: 29.99,
      image: "/assets/img/menu/menu-1.webp",
      category: "main-course",
      rating: 4.8,
      tags: ['Vegetarian'],
      description: "Fresh pasta with black truffle and parmesan"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      price: 32.99,
      image: "/assets/img/menu/menu-2.webp",
      category: "main-course",
      rating: 4.9,
      tags: ['Seafood', 'Gluten-Free'],
      description: "Wild-caught salmon with herb butter"
    },
    {
      id: 3,
      name: "Chocolate Cake",
      price: 12.99,
      image: "/assets/img/menu/menu-3.webp",
      category: "desserts",
      rating: 4.7,
      tags: ['Vegetarian'],
      description: "Rich chocolate cake with ganache"
    },
    {
      id: 4,
      name: "Caesar Salad",
      price: 16.99,
      image: "/assets/img/menu/menu-4.webp",
      category: "appetizers",
      rating: 4.6,
      tags: ['Vegetarian'],
      description: "Crisp romaine with house-made dressing"
    },
    {
      id: 5,
      name: "Beef Steak",
      price: 36.99,
      image: "/assets/img/menu/menu-5.webp",
      category: "main-course",
      rating: 4.9,
      tags: ['Gluten-Free'],
      description: "Premium ribeye with garlic mashed potatoes"
    },
    {
      id: 6,
      name: "Tiramisu",
      price: 10.99,
      image: "/assets/img/menu/menu-6.webp",
      category: "desserts",
      rating: 4.8,
      tags: ['Vegetarian'],
      description: "Classic Italian dessert with espresso"
    },
    {
      id: 7,
      name: "Mojito",
      price: 9.99,
      image: "/assets/img/menu/menu-7.webp",
      category: "beverages",
      rating: 4.5,
      tags: ['Vegetarian', 'Vegan'],
      description: "Fresh mint, lime, and rum cocktail"
    },
    {
      id: 8,
      name: "Bruschetta",
      price: 11.99,
      image: "/assets/img/menu/menu-8.webp",
      category: "appetizers",
      rating: 4.7,
      tags: ['Vegetarian', 'Vegan'],
      description: "Toasted bread with tomato and basil"
    }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? shopItems 
    : shopItems.filter(item => item.category === activeCategory);
    
  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Our Menu
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Shop</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto text-center mb-16">
            Explore our carefully crafted dishes made with the finest ingredients
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a] mb-8">
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Categories
                </h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          setActiveCategory(category.id);
                          setCurrentPage(1);
                        }}
                        className={`w-full flex justify-between items-center py-2 px-3 rounded-lg text-left transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-[#e2b279] text-[#111115]'
                            : 'text-[#bdbdbd] hover:bg-[#23232a]'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm">
                          {category.id === 'all' ? shopItems.length : category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a] mb-8">
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Filter by Price
                </h3>
                <div className="mb-4">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#e2b279]"
                  />
                </div>
                <div className="flex justify-between text-[#bdbdbd]">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a]">
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-[#111115] text-[#bdbdbd] rounded-full text-sm border border-[#23232a] hover:border-[#e2b279] transition-colors duration-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Shop Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <p className="text-[#bdbdbd]">
                  Showing {paginatedItems.length} of {filteredItems.length} results
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-[#bdbdbd]">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-[#18181c] border border-[#23232a] text-white rounded-lg focus:outline-none focus:border-[#e2b279] transition-colors duration-300"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
              
              {/* Shop Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {paginatedItems.map((item) => (
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
                      {item.originalPrice && (
                        <div className="absolute top-4 left-4 bg-[#e2b279] text-[#111115] px-3 py-1 rounded-full text-sm font-bold">
                          Sale
                        </div>
                      )}
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#111115] bg-opacity-70 flex items-center justify-center text-[#e2b279] hover:bg-[#e2b279] hover:text-[#111115] transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                        <div className="text-right">
                          {item.originalPrice && (
                            <span className="text-[#bdbdbd] text-sm line-through block">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="text-xl font-bold text-[#e2b279]">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
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
                      <p className="text-[#bdbdbd] text-sm mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-[#111115] text-[#666] rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="w-full py-3 bg-[#e2b279] text-[#111115] font-bold rounded-lg hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <nav className="flex gap-2">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        currentPage === 1 
                          ? 'bg-[#18181c] text-[#444] cursor-not-allowed' 
                          : 'bg-[#18181c] text-white hover:bg-[#e2b279] hover:text-[#111115]'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          currentPage === i + 1
                            ? 'bg-[#e2b279] text-[#111115]'
                            : 'bg-[#18181c] text-white hover:bg-[#e2b279] hover:text-[#111115]'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    
                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        currentPage === totalPages 
                          ? 'bg-[#18181c] text-[#444] cursor-not-allowed' 
                          : 'bg-[#18181c] text-white hover:bg-[#e2b279] hover:text-[#111115]'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;