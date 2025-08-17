import React from 'react';
import Image from 'next/image';
import { theme } from '../../app/theme';

const TeamProfiles = () => {
  const teamMembers = [
    {
      id: 1,
      name: "David Miller",
      role: "Head Chef",
      image: "/assets/img/team/team-1.webp",
      bio: "With over 15 years of culinary experience, David brings innovative techniques to traditional recipes."
    },
    {
      id: 2,
      name: "Sophia Williams",
      role: "Sous Chef",
      image: "/assets/img/team/team-2.webp",
      bio: "Sophia specializes in pastry and dessert creations, ensuring every sweet ending to your meal."
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Restaurant Manager",
      image: "/assets/img/team/team-3.webp",
      bio: "James ensures seamless operations and exceptional service for all our valued guests."
    }
  ];

  return (
    <section className={`${theme.spacing.sectionPadding} bg-[#18181c]`}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Meet the passionate professionals who make our culinary vision a reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#111115] rounded-lg overflow-hidden border border-[#23232a] hover:border-[#e2b279] transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#e2b279] text-lg mb-4">{member.role}</p>
                <p className="text-[#bdbdbd] mb-6">{member.bio}</p>
                
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center hover:border-[#e2b279] hover:bg-[#e2b279] group transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e2b279] group-hover:text-[#111115] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center hover:border-[#e2b279] hover:bg-[#e2b279] group transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e2b279] group-hover:text-[#111115] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-2-14h4v4h-4V6zm0 6h4v8h-4v-8z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center hover:border-[#e2b279] hover:bg-[#e2b279] group transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e2b279] group-hover:text-[#111115] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4 11h-4v4h-2v-4H6v-2h4V7h2v4h4v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;