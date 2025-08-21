"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CareersPage = () => {
  const positions = [
    {
      id: 1,
      title: "Executive Chef",
      department: "Kitchen",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead our culinary team in creating exceptional dining experiences. Responsible for menu development and kitchen operations."
    },
    {
      id: 2,
      title: "Sous Chef",
      department: "Kitchen",
      type: "Full-time",
      experience: "3+ years",
      description: "Support the executive chef in daily kitchen operations and assist with menu preparation and staff management."
    },
    {
      id: 3,
      title: "Restaurant Manager",
      department: "Front of House",
      type: "Full-time",
      experience: "4+ years",
      description: "Oversee daily restaurant operations, staff management, and ensure exceptional guest experiences."
    },
    {
      id: 4,
      title: "Server",
      department: "Front of House",
      type: "Part-time/Flexible",
      experience: "1+ year preferred",
      description: "Provide excellent customer service and ensure guests have memorable dining experiences."
    },
    {
      id: 5,
      title: "Bartender",
      department: "Beverage",
      type: "Part-time/Flexible",
      experience: "2+ years",
      description: "Create craft cocktails and provide beverage service in our upscale bar environment."
    },
    {
      id: 6,
      title: "Pastry Chef",
      department: "Kitchen",
      type: "Full-time",
      experience: "3+ years",
      description: "Create exquisite desserts and pastries to complement our culinary offerings."
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Health, dental, and vision insurance",
    "Paid time off and holidays",
    "Employee meal discounts",
    "Professional development opportunities",
    "Team building events and activities",
    "Flexible scheduling options"
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="et-breadcrumb bg-[#18181c] py-20 pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Join Our Team
            </h1>
            <div className="flex items-center text-[#bdbdbd]">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Careers</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="min-h-screen bg-[#111115] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Build Your Career With Us
            </h2>
            <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
              Join a team that values excellence, creativity, and passion for exceptional dining experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                Why Work At The Saffron Lounge?
              </h3>
              <p className="text-[#bdbdbd] mb-6">
                At The Saffron Lounge, we believe our team is our greatest asset. 
                We foster a culture of growth, creativity, and excellence where every team member 
                contributes to our mission of providing unforgettable dining experiences.
              </p>
              <p className="text-[#bdbdbd] mb-8">
                We offer competitive compensation, comprehensive benefits, and opportunities 
                for professional development in a dynamic culinary environment.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Work in a Michelin-star inspired environment</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Collaborate with award-winning culinary professionals</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">Opportunities for career advancement and skill development</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/assets/img/careers/team.webp"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Current Openings
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {positions.map((position) => (
                <div 
                  key={position.id}
                  className="bg-[#18181c] rounded-lg p-6 border border-[#23232a] hover:border-[#e2b279] transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                      {position.title}
                    </h4>
                    <span className="text-sm text-[#e2b279] bg-[#111115] px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#bdbdbd] mb-4">
                    <span>{position.department}</span>
                    <span>{position.experience}</span>
                  </div>
                  <p className="text-[#bdbdbd] mb-6">{position.description}</p>
                  <button className="w-full py-3 bg-[#18181c] text-white border border-[#23232a] hover:bg-[#e2b279] hover:text-[#111115] hover:border-[#e2b279] transition-all duration-300 font-bold rounded-md">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              Employee Benefits
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-[#18181c] rounded-lg p-6 border border-[#23232a] flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#bdbdbd]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#18181c] rounded-lg p-8 md:p-12 border border-[#23232a]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Ready to Join Our Team?
                </h3>
                <p className="text-[#bdbdbd] mb-6">
                  We're always looking for passionate individuals to join our team. 
                  If you don't see a position that matches your skills, 
                  we'd still love to hear from you.
                </p>
                <p className="text-[#bdbdbd]">
                  Send your resume and a brief introduction to careers@saffronlounge.com 
                  and tell us why you'd be a great fit for our team.
                </p>
              </div>
              
              <div className="bg-[#111115] rounded-lg p-8 border border-[#23232a]">
                <h4 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-el-messiri)' }}>
                  Submit Your Application
                </h4>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
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
                    <select className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md">
                      <option value="" className="text-[#666]">Position Interested In</option>
                      {positions.map((position) => (
                        <option key={position.id} value={position.title} className="text-white">
                          {position.title}
                        </option>
                      ))}
                      <option value="other" className="text-white">Other</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#18181c] border border-[#23232a] text-white placeholder-[#666] focus:outline-none focus:border-[#e2b279] transition-colors duration-300 rounded-md resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <label className="flex items-center text-[#bdbdbd] mb-4">
                      <input type="checkbox" className="mr-2" />
                      I agree to the processing of my personal data
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e2b279] text-[#111115] font-bold rounded-md hover:bg-[#d1a05a] transition-colors duration-300"
                  >
                    Submit Application
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

export default CareersPage;