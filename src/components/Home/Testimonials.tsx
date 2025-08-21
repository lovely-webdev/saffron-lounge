import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import ResponsiveContainer from './ResponsiveContainer';

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
      {/* Background Shapes */}
      <div className="absolute left-0 top-1/4 w-32 h-32 opacity-10 hidden lg:block">
        <Image
          src="/assests-main/shape-4.webp"
          alt="Decorative shape"
          width={128}
          height={128}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute right-0 bottom-1/4 w-32 h-32 opacity-10 hidden lg:block">
        <Image
          src="/assests-main/shape-10.webp"
          alt="Decorative shape"
          width={128}
          height={128}
          className="object-contain w-full h-full"
        />
      </div>
      
      <ResponsiveContainer>
        {/* Rating Stars */}
        <div className="flex justify-center items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-5 h-5 sm:w-6 sm:h-6 mx-0.5 ${
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
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
          {currentTestimonial.rating}/5.0
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center" style={{ fontFamily: 'var(--font-el-messiri), sans-serif' }}>
          What Our Guests Are Saying
        </h2>

        {/* Testimonial Text */}
        <blockquote className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto italic mb-6 sm:mb-8 text-center" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
          "{currentTestimonial.text}"
        </blockquote>

        {/* Author */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
            {currentTestimonial.author}
          </div>
          <div className="text-xs sm:text-sm md:text-lg text-white opacity-80" style={{ fontFamily: 'var(--font-bellota), sans-serif' }}>
            {currentTestimonial.title}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4">
          <button
            onClick={prevTestimonial}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#333] hover:bg-[#444] transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7 7-7-7" />
            </svg>
          </button>

          <div className="flex gap-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-[#e2b279]' : 'bg-[#444]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#333] hover:bg-[#444] transition-all duration-300 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default Testimonials;