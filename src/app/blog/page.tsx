"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { etarBellotaFont } from '../etarBellotaFont';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Pasta",
      excerpt: "Discover the secrets to creating restaurant-quality pasta dishes at home with our expert tips.",
      date: "June 15, 2023",
      author: "David Warner",
      image: "/assets/img/blog/blog-1.webp",
      category: "Cooking Tips"
    },
    {
      id: 2,
      title: "Seasonal Ingredients: Summer Flavors",
      excerpt: "Explore the best seasonal ingredients for summer and how to incorporate them into your meals.",
      date: "July 22, 2023",
      author: "Sarah Johnson",
      image: "/assets/img/blog/blog-2.webp",
      category: "Ingredients"
    },
    {
      id: 3,
      title: "Wine Pairing Guide for Beginners",
      excerpt: "Learn the basics of wine pairing and how to select the perfect wine for your meal.",
      date: "August 5, 2023",
      author: "Michael Brown",
      image: "/assets/img/blog/blog-3.webp",
      category: "Beverages"
    }
  ];

  return (
    <section className={`min-h-screen bg-[#111115] py-20 ${etarBellotaFont.variable}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Our Blog</h1>
          <div className="flex items-center justify-center text-[#bdbdbd] py-6">
            <a href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</a>
            <span className="mx-3">/</span>
            <span className="text-[#e2b279]">Blog</span>
          </div>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Explore our latest articles, recipes, and culinary insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
                  <span className="text-[#e2b279] text-sm font-bold">{post.category}</span>
                  <span className="text-[#bdbdbd] text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e2b279] transition-colors duration-300" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
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
        
        <div className="flex justify-center mt-12">
          <nav className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-[#18181c] text-white flex items-center justify-center hover:bg-[#e2b279] hover:text-[#111115] transition-colors duration-300">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-[#18181c] text-white flex items-center justify-center hover:bg-[#e2b279] hover:text-[#111115] transition-colors duration-300">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-[#18181c] text-white flex items-center justify-center hover:bg-[#e2b279] hover:text-[#111115] transition-colors duration-300">
              3
            </button>
            <button className="w-10 h-10 rounded-full bg-[#18181c] text-white flex items-center justify-center hover:bg-[#e2b279] hover:text-[#111115] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;