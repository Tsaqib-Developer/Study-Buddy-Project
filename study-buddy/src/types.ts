export interface User {
  name: string;
  role: string;
  level: number;
  xp: number;
  maxXp: number;
  rank: number;
  avatar: string;
  major: string;
  year: string;
  expertise: string[];
  sessions: number;
  badges: number;
}

export interface StudySession {
  id: string;
  subject: string;
  topic: string;
  partner: string;
  duration: string;
  location: string;
  status: 'open' | 'matched' | 'in-progress' | 'scheduled' | 'past';
  startTime?: string;
  icon: string;
  priority?: 'high' | 'pending-review';
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  avatar: string;
  department?: string;
  handle?: string;
  isCurrentUser?: boolean;
}
