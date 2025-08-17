"use client";

import React, { useEffect, useState } from 'react';
import TeamProfiles from '@/components/Home/TeamProfiles';
import { getTeamMembers } from '@/lib/teamData';
import { TeamMember } from '@/types/team';

const PagesTeamPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const members = await getTeamMembers();
      setTeamMembers(members);
    };
    
    fetchTeamMembers();
  }, []);

  return (
    <TeamProfiles
      members={teamMembers}
      title="Our Team"
      description="Meet the passionate professionals who make our restaurant exceptional"
      showBreadcrumbs={true}
      variant="page"
    />
  );
};

export default PagesTeamPage;