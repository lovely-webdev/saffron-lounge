import teamData from '../../data/team.json';
import { TeamMember } from '../types/team';

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  // In a real application, this might fetch from an API
  return teamData;
};