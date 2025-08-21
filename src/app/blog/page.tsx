"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { etarBellotaFont } from '../etarBellotaFont';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'cooking-tips', name: 'Cooking Tips', count: 4 },
    { id: 'ingredients', name: 'Ingredients', count: 3 },
    { id: 'beverages', name: 'Beverages', count: 2 },
    { id: 'events', name: 'Events', count: 2 },
    { id: 'chef-stories', name: 'Chef Stories', count: 1 }
  ];
  
  const tags = [
    'Pasta', 'Wine', 'Summer', 'Recipes', 'Events', 'Chef', 'Tips', 'Seasonal'
  ];
  
  // Sample blog posts with more data
  const allBlogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Pasta",
      excerpt: "Discover the secrets to creating restaurant-quality pasta dishes at home with our expert tips.",
      date: "June 15, 2023",
      author: "David Warner",
      image: "/assets/img/blog/blog-1.webp",
      category: "cooking-tips",
      tags: ["Pasta", "Recipes", "Tips"]
    },
    {
      id: 2,
      title: "Seasonal Ingredients: Summer Flavors",
      excerpt: "Explore the best seasonal ingredients for summer and how to incorporate them into your meals.",
      date: "July 22, 2023",
      author: "Sarah Johnson",
      image: "/assets/img/blog/blog-2.webp",
      category: "ingredients",
      tags: ["Summer", "Seasonal", "Ingredients"]
    },
    {
      id: 3,
      title: "Wine Pairing Guide for Beginners",
      excerpt: "Learn the basics of wine pairing and how to select the perfect wine for your meal.",
      date: "August 5, 2023",
      author: "Michael Brown",
      image: "/assets/img/blog/blog-3.webp",
      category: "beverages",
      tags: ["Wine", "Beverages"]
    },
    {
      id: 4,
      title: "Mastering the Art of Risotto",
      excerpt: "Learn the secrets to creating creamy, perfect risotto every time.",
      date: "May 28, 2023",
      author: "Chef Maria Rodriguez",
      image: "/assets/img/blog/blog-4.webp",
      category: "cooking-tips",
      tags: ["Recipes", "Tips"]
    },
    {
      id: 5,
      title: "5 Essential Knife Skills for Home Cooks",
      excerpt: "Improve your cooking efficiency and safety with these fundamental techniques.",
      date: "April 12, 2023",
      author: "David Warner",
      image: "/assets/img/blog/blog-5.webp",
      category: "cooking-tips",
      tags: ["Tips", "Chef"]
    },
    {
      id: 6,
      title: "The Science of Sourdough Baking",
      excerpt: "Understanding fermentation for better bread results.",
      date: "March 30, 2023",
      author: "Sarah Johnson",
      image: "/assets/img/blog/blog-6.webp",
      category: "ingredients",
      tags: ["Recipes", "Ingredients"]
    },
    {
      id: 7,
      title: "Craft Cocktails: Summer Edition",
      excerpt: "Refreshing cocktails to elevate your summer gatherings.",
      date: "June 5, 2023",
      author: "Michael Brown",
      image: "/assets/img/blog/blog-7.webp",
      category: "beverages",
      tags: ["Summer", "Beverages"]
    },
    {
      id: 8,
      title: "Grand Opening Celebration",
      excerpt: "Join us for our grand opening weekend celebration.",
      date: "February 18, 2023",
      author: "Restaurant Team",
      image: "/assets/img/blog/blog-8.webp",
      category: "events",
      tags: ["Events", "Celebration"]
    },
    {
      id: 9,
      title: "Meet Our Executive Chef",
      excerpt: "Getting to know the culinary mastermind behind our menu.",
      date: "January 10, 2023",
      author: "Sarah Johnson",
      image: "/assets/img/blog/blog-9.webp",
      category: "chef-stories",
      tags: ["Chef", "Stories"]
    },
    {
      id: 10,
      title: "Farm to Table: Our Local Partners",
      excerpt: "Discover the farmers and producers we work with.",
      date: "December 5, 2022",
      author: "David Warner",
      image: "/assets/img/blog/blog-10.webp",
      category: "ingredients",
      tags: ["Seasonal", "Ingredients"]
    },
    {
      id: 11,
      title: "Holiday Menu Preview",
      excerpt: "A sneak peek at our special holiday offerings.",
      date: "November 20, 2022",
      author: "Chef Maria Rodriguez",
      image: "/assets/img/blog/blog-11.webp",
      category: "events",
      tags: ["Events", "Holiday"]
    },
    {
      id: 12,
      title: "Sustainable Dining Practices",
      excerpt: "Our commitment to environmentally responsible cuisine.",
      date: "October 8, 2022",
      author: "Restaurant Team",
      image: "/assets/img/blog/blog-12.webp",
      category: "cooking-tips",
      tags: ["Tips", "Sustainability"]
    }
  ];

  // Filter posts by category
  const filteredPosts = activeCategory === 'all' 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.category === activeCategory);
    
  // Pagination
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Our Blog
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Blog</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className={`min-h-screen bg-[#111115] py-20 ${etarBellotaFont.variable}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto text-center mb-16">
            Explore our latest articles, recipes, and culinary insights
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paginatedPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
                  >
                    <div className="relative h-56">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#e2b279] text-sm font-bold">{post.category.replace('-', ' ')}</span>
                        <span className="text-[#bdbdbd] text-sm">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e2b279] transition-colors duration-300" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-[#bdbdbd] mb-4">{post.excerpt}</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#23232a] flex items-center justify-center mr-3">
                          <span className="text-[#e2b279] font-bold text-sm">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                        <span className="text-white">{post.author}</span>
                      </div>
                    </div>
                  </article>
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
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
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
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a] mb-8">
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
              
              <div className="bg-[#18181c] rounded-lg p-6 border border-[#23232a]">
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {allBlogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 hover:text-[#e2b279] transition-colors duration-300">
                          <Link href={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-[#bdbdbd] text-xs">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;