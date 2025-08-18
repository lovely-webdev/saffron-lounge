import React, { useState } from 'react';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 4.8,
      text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with",
      author: "Caroline Murray",
      title: "IUBA - Founder"
    },
    {
      id: 2,
      rating: 5.0,
      text: "Exceptional dining experience with outstanding service and delicious food. The atmosphere is perfect for both intimate dinners and business meetings. Highly recommend for anyone looking for quality cuisine.",
      author: "Michael Johnson",
      title: "Food Critic"
    },
    {
      id: 3,
      rating: 4.9,
      text: "The attention to detail in every dish is remarkable. From the presentation to the flavors, everything is crafted with care. This restaurant truly understands fine dining.",
      author: "Sarah Williams",
      title: "Chef Consultant"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`${theme.spacing.sectionPadding} relative bg-[#111115] ${etarBellotaFont.variable}`}>
      {/* Decorative food illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left chili pepper */}
        <div className="absolute top-8 left-8 w-16 h-16 opacity-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"/>
          </svg>
        </div>
        
        {/* Top-right garlic */}
        <div className="absolute top-8 right-8 w-16 h-16 opacity-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"/>
          </svg>
        </div>
        
        {/* Bottom-left squash */}
        <div className="absolute bottom-8 left-8 w-16 h-16 opacity-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"/>
          </svg>
        </div>
        
        {/* Bottom-right pumpkin */}
        <div className="absolute bottom-8 right-8 w-16 h-16 opacity-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Rating Stars */}
          <div className="flex justify-center items-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-8 h-8 ${
                  star <= Math.floor(currentTestimonial.rating)
                    ? 'text-[#e2b279]'
                    : star === Math.ceil(currentTestimonial.rating) && currentTestimonial.rating % 1 !== 0
                    ? 'text-[#e2b279] opacity-50'
                    : 'text-gray-400'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          
          {/* Rating Number */}
          <div className="text-2xl font-bold text-white mb-8">
            {currentTestimonial.rating}/5.0
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
            What Our Guest Are Saying
          </h2>
          
          {/* Testimonial Text */}
          <div className="mb-12">
            <blockquote className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto italic">
              "{currentTestimonial.text}"
            </blockquote>
          </div>
          
          {/* Author Information */}
          <div className="mb-16">
            <div className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
              {currentTestimonial.author}
            </div>
            <div className="text-lg text-white opacity-80">
              {currentTestimonial.title}
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-[#333] hover:bg-[#444] transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-[#333] hover:bg-[#444] transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;