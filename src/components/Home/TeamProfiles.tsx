import React from 'react';
import Link from 'next/link';
import { theme } from '../../app/theme';
import { etarBellotaFont } from '../../app/etarBellotaFont';
import TeamMemberCard from '../TeamMemberCard';
import { TeamMember } from '../../types/team';

interface TeamProfilesProps {
  members: TeamMember[];
  title?: string;
  description?: string;
  showBreadcrumbs?: boolean;
  variant?: 'home' | 'page';
  className?: string;
}

const TeamProfiles: React.FC<TeamProfilesProps> = ({ 
  members, 
  title = "Our Team",
  description,
  showBreadcrumbs = false,
  variant = 'home',
  className = '' 
}) => {
  // Define styling based on variant
  const sectionStyle = variant === 'page' 
    ? 'bg-[#111115] py-20' 
    : `${theme.spacing.sectionPadding} bg-[#18181c]`;
    
  const textStyle = variant === 'page' 
    ? 'text-[#bdbdbd]' 
    : 'text-[#bdbdbd]';

  return (
    <section className={`${sectionStyle} ${etarBellotaFont.variable} ${className}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>
            {title}
          </h2>
          
          {showBreadcrumbs && (
            <div className="flex items-center justify-center py-6">
              <Link href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#e2b279]">Our Team</span>
            </div>
          )}
          
          {description && (
            <p className={`text-xl max-w-3xl mx-auto ${textStyle}`}>
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;