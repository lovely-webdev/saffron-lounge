import React from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Critic",
      content: "The culinary experience at Etar is unparalleled. Every dish is a masterpiece of flavor and presentation. The attention to detail is remarkable.",
      rating: 5,
      avatar: "/assets/img/testimonial/testimonial-1.webp"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      content: "I've been dining here for over three years, and the quality has never wavered. The seasonal menu changes keep things exciting.",
      rating: 5,
      avatar: "/assets/img/testimonial/testimonial-2.webp"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Restaurant Blogger",
      content: "Etar exceeded all my expectations. The ambiance, service, and of course, the food, make this place a true gem in the culinary scene.",
      rating: 5,
      avatar: "/assets/img/testimonial/testimonial-3.webp"
    }
  ];

  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#111115] ${etarBellotaFont.variable}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Testimonials</h2>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Hear what our valued customers have to say about their dining experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#18181c] p-8 rounded-lg border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#e2b279]' : 'text-[#444]'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-[#bdbdbd] text-lg mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="relative overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="object-cover w-[60px] h-[60px] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>{testimonial.name}</h4>
                  <p className="text-[#e2b279]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;