import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Pasta",
      excerpt: "Discover the secrets to creating restaurant-quality pasta dishes in your own kitchen with our expert techniques.",
      date: "June 15, 2023",
      author: "David Miller",
      category: "Cooking Tips",
      image: "/assests-main/blog-1.webp"
    },
    {
      id: 2,
      title: "Seasonal Ingredients for Summer",
      excerpt: "Explore the best seasonal ingredients to elevate your summer meals and create refreshing, vibrant dishes.",
      date: "July 2, 2023",
      author: "Sophia Williams",
      category: "Ingredients",
      image: "/assests-main/blog-2.webp"
    },
    {
      id: 3,
      title: "Wine Pairing Essentials",
      excerpt: "Learn the fundamentals of wine pairing to complement your meals and enhance the overall dining experience.",
      date: "July 20, 2023",
      author: "James Wilson",
      category: "Beverages",
      image: "/assests-main/blog-3.webp"
    }
  ];

  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#18181c] ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Our Blog</h2>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Stay updated with our latest culinary insights, recipes, and restaurant news
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#111115] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#e2b279] font-bold text-sm uppercase tracking-wider">{post.category}</span>
                  <span className="text-[#bdbdbd] text-sm">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e2b279] transition-colors duration-300" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>{post.title}</h3>
                <p className="text-[#bdbdbd] mb-6">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#e2b279]">By {post.author}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-white font-bold flex items-center group/readmore"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover/readmore:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="px-8 py-4 bg-[#e2b279] text-[#111115] font-bold text-lg rounded-full hover:bg-[#111115] hover:text-[#e2b279] border-2 border-[#e2b279] transition-all duration-300 inline-block">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;