"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogPostPage = () => {
  // Sample blog post data
  const blogPost = {
    title: "The Art of Perfect Pasta",
    date: "June 15, 2023",
    author: "David Warner",
    category: "Cooking Tips",
    image: "/assets/img/blog/blog-1.webp",
    content: `
      <p>Pasta is one of the most beloved foods worldwide, and for good reason. Its versatility, simplicity, and deliciousness make it a staple in many households. But achieving restaurant-quality pasta at home can be a challenge. Today, we'll share our expert tips to help you master the art of perfect pasta.</p>
      
      <h2 className="text-2xl font-bold text-white my-6">Choosing the Right Pasta</h2>
      <p>The foundation of any great pasta dish is, of course, the pasta itself. While boxed pasta is convenient, fresh pasta made in-house can elevate your dish to new heights. If you're short on time, look for high-quality dried pasta made with bronze dies, which gives the pasta a rougher texture that holds sauce better.</p>
      
      <h2 className="text-2xl font-bold text-white my-6">Perfect Cooking Techniques</h2>
      <p>The key to perfectly cooked pasta is timing and attention. Always use plenty of salted water – about 1 tablespoon of salt per quart of water. This seasons the pasta from the inside out. Don't add oil to the water, as it can prevent the sauce from adhering to the pasta later.</p>
      
      <p>Test the pasta a minute or two before the package instructions indicate it's done. You're looking for "al dente" – tender but with a slight bite. Reserve some pasta water before draining, as the starchy liquid is invaluable for creating silky, cohesive sauces.</p>
      
      <h2 className="text-2xl font-bold text-white my-6">Sauce Pairing Mastery</h2>
      <p>The sauce should complement, not overpower, the pasta. Lighter sauces like olive oil, garlic, and herbs pair beautifully with delicate pasta like angel hair or spaghetti. Heartier sauces such as ragu or carbonara work best with thicker noodles like fettuccine or pappardelle.</p>
      
      <p>Remember to finish cooking the pasta in the sauce. Add the drained pasta to the sauce and toss everything together for a minute or so, adding reserved pasta water as needed to create a silky coating.</p>
    `
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: "Seasonal Ingredients: Summer Flavors",
      excerpt: "Explore the best seasonal ingredients for summer and how to incorporate them into your meals.",
      date: "July 22, 2023",
      image: "/assets/img/blog/blog-2.webp"
    },
    {
      id: 3,
      title: "Wine Pairing Guide for Beginners",
      excerpt: "Learn the basics of wine pairing and how to select the perfect wine for your meal.",
      date: "August 5, 2023",
      image: "/assets/img/blog/blog-3.webp"
    }
  ];

  return (
    <section className="min-h-screen bg-[#111115] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link href="/blog" className="inline-flex items-center text-[#e2b279] mb-8 group">
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        
        <article>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="text-[#e2b279] font-bold">{blogPost.category}</span>
            <span className="text-[#bdbdbd]">{blogPost.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{blogPost.title}</h1>
          
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 rounded-full bg-[#23232a] flex items-center justify-center mr-4">
              <span className="text-[#e2b279] font-bold">
                {blogPost.author.charAt(0)}
              </span>
            </div>
            <span className="text-white">{blogPost.author}</span>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden mb-10">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div 
            className="text-[#bdbdbd] prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-10 prose-p:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>
        
        <div className="border-t border-[#23232a] pt-12 mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#e2b279] transition-colors duration-300">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#bdbdbd] text-sm mb-3">{post.excerpt}</p>
                  <span className="text-[#e2b279] text-sm">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPage;