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
      {/* Decorative illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Add SVGs for chili, garlic, pumpkin if needed */}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Rating Stars */}
        <div className="flex justify-center items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-6 h-6 mx-0.5 ${
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
        <div className="text-xl md:text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
          {currentTestimonial.rating}/5.0
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'var(--font-el-messiri), sans-serif' }}>
          What Our Guests Are Saying
        </h2>

        {/* Testimonial Text */}
        <blockquote className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto italic mb-8 text-center" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
          "{currentTestimonial.text}"
        </blockquote>

        {/* Author */}
        <div className="text-center mb-12">
          <div className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
            {currentTestimonial.author}
          </div>
          <div className="text-sm md:text-lg text-white opacity-80" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
            {currentTestimonial.title}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-[#333] hover:bg-[#444] transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-[#333] hover:bg-[#444] transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
