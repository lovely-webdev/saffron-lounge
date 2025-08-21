"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CateringPage = () => {
  const [activeCategory, setActiveCategory] = useState('Corporate');
  
  const categories = ['Corporate', 'Social', 'Wedding', 'Holiday'];
  
  const cateringServices = {
    'Corporate': [
      { id: 1, name: 'Business Lunch', description: 'Professional catering for meetings and presentations', image: '/assets/img/catering/corporate-1.webp' },
      { id: 2, name: 'Conference Catering', description: 'Full-service catering for large conferences and seminars', image: '/assets/img/catering/corporate-2.webp' },
      { id: 3, name: 'Office Catering', description: 'Regular office meal services and special occasion catering', image: '/assets/img/catering/corporate-3.webp' },
    ],
    'Social': [
      { id: 4, name: 'Birthday Parties', description: 'Celebration catering for all ages with customizable menus', image: '/assets/img/catering/social-1.webp' },
      { id: 5, name: 'Anniversary Dinners', description: 'Special occasion catering for memorable celebrations', image: '/assets/img/catering/social-2.webp' },
      { id: 6, name: 'Graduation Parties', description: 'Festive catering to celebrate academic achievements', image: '/assets/img/catering/social-3.webp' },
    ],
    'Wedding': [
      { id: 7, name: 'Rehearsal Dinner', description: 'Intimate pre-wedding celebration catering', image: '/assets/img/catering/wedding-1.webp' },
      { id: 8, name: 'Wedding Reception', description: 'Elegant reception catering with full bar service', image: '/assets/img/catering/wedding-2.webp' },
      { id: 9, name: 'Brunch & Breakfast', description: 'Morning celebration catering for wedding festivities', image: '/assets/img/catering/wedding-3.webp' },
    ],
    'Holiday': [
      { id: 10, name: 'Christmas Party', description: 'Festive holiday catering with seasonal specialties', image: '/assets/img/catering/holiday-1.webp' },
      { id: 11, name: 'Thanksgiving Feast', description: 'Traditional holiday meal catering for family gatherings', image: '/assets/img/catering/holiday-2.webp' },
      { id: 12, name: 'New Year\'s Eve', description: 'Glamorous catering for elegant New Year celebrations', image: '/assets/img/catering/holiday-3.webp' },
    ]
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Catering Services
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Catering</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Professional Catering for Every Occasion
            </h2>
            <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
              From intimate gatherings to large-scale events, our catering services bring restaurant-quality cuisine to your venue
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/assets/img/catering/catering-hero.webp"
                alt="Catering Services"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                Exceptional Catering Services
              </h3>
              <p className="text-[#bdbdbd] mb-6">
                Our professional catering team brings the same level of excellence found in our restaurant 
                to your special events. We handle all aspects of event catering, from menu planning to setup and service.
              </p>
              <p className="text-[#bdbdbd] mb-8">
                Whether you're hosting a corporate conference, wedding celebration, or private party, 
                we customize our services to meet your specific needs and preferences.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Custom menu development with our executive chef</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Professional staff for setup, service, and cleanup</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Complete equipment and serving supplies</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#e2b279] text-[#111115]'
                    : 'bg-[#18181c] text-white hover:bg-[#23232a]'
                }`}
              >
                {category} Events
              </button>
            ))}
          </div>
          
          {/* Catering Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              {activeCategory} Catering Options
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cateringServices[activeCategory as keyof typeof cateringServices].map((service) => (
                <div 
                  key={service.id}
                  className="bg-[#18181c] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
                >
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#e2b279] transition-colors duration-300" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                      {service.name}
                    </h4>
                    <p className="text-[#bdbdbd] mb-6">{service.description}</p>
                    <button className="w-full py-3 bg-[#18181c] text-white border border-[#23232a] hover:bg-[#e2b279] hover:text-[#111115] hover:border-[#e2b279] transition-all duration-300 font-bold rounded-md">
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#18181c] rounded-lg p-8 md:p-12 border border-[#23232a]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Plan Your Catering Event
                </h3>
                <p className="text-[#bdbdbd] mb-6">
                  Our catering coordinator will work with you to create the perfect menu and service plan for your event. 
                  We offer flexible packages to suit any budget and occasion.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#e2b279] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#bdbdbd]">Free consultation and menu tasting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#e2b279] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#bdbdbd]">Customizable packages for any size event</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#e2b279] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#bdbdbd]">Professional grade equipment and serving staff</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#111115] rounded-lg p-8 border border-[#23232a]">
                <h4 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Request a Quote
                </h4>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md">
                      <option value="" className="text-[#666]">Event Type</option>
                      <option value="corporate" className="text-white">Corporate</option>
                      <option value="wedding" className="text-white">Wedding</option>
                      <option value="social" className="text-white">Social</option>
                      <option value="holiday" className="text-white">Holiday</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Event Details"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300"
                  >
                    Get Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CateringPage;