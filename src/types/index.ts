export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'consultant' | 'admin';
  subscriptionType: 'free' | 'premium';
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai' | 'consultant';
  timestamp: number;
  type: 'text' | 'voice';
}

export interface Consultant {
  id: string;
  name: string;
  expertise: string[];
  bio: string;
  avatar: string;
  rating: number;
  availability: {
    start: string;
    end: string;
  }[];
}

export interface Session {
  id: string;
  userId: string;
  consultantId?: string;
  type: 'ai' | 'consultant';
  status: 'scheduled' | 'completed' | 'cancelled';
  startTime: string;
  endTime?: string;
  messages: Message[];
}