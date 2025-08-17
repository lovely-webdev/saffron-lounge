"use client";

import React from 'react';
import TeamProfiles from '@/components/Home/TeamProfiles';
import { getTeamMembers } from '@/lib/teamData';
import { TeamMember } from '@/types/team';

const TeamPage = async () => {
  const teamMembers: TeamMember[] = await getTeamMembers();

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

export default TeamPage;