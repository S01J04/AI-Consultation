export const mockMessages = [
  {
    id: '1',
    content: "Hello! How can I help you today?",
    sender: 'ai',
    timestamp: Date.now() - 5000,
    type: 'text'
  },
  {
    id: '2',
    content: "I need help with business strategy",
    sender: 'user',
    timestamp: Date.now() - 4000,
    type: 'text'
  },
  {
    id: '3',
    content: "I'd be happy to help with your business strategy. Could you tell me more about your business and specific areas you'd like to focus on?",
    sender: 'ai',
    timestamp: Date.now() - 3000,
    type: 'text'
  }
];

export const mockConsultants = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    expertise: ['Business Strategy', 'Marketing', 'Digital Transformation'],
    bio: 'With over 15 years of experience in business consulting, Dr. Johnson specializes in helping companies navigate digital transformation and develop effective marketing strategies.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 4.9,
    availability: [
      { start: '2024-03-20T09:00', end: '2024-03-20T17:00' },
      { start: '2024-03-21T09:00', end: '2024-03-21T17:00' }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    expertise: ['Financial Planning', 'Investment Strategy', 'Risk Management'],
    bio: 'Michael is a certified financial planner with expertise in investment strategy and risk management. He helps clients make informed decisions about their financial future.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 4.8,
    availability: [
      { start: '2024-03-20T10:00', end: '2024-03-20T18:00' },
      { start: '2024-03-22T10:00', end: '2024-03-22T18:00' }
    ]
  }
];

export const mockUser = {
  id: 'user1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
  role: 'user',
  subscriptionType: 'free'
};

export const mockSessions = [
  {
    id: 'session1',
    userId: 'user1',
    consultantId: '1',
    type: 'consultant',
    status: 'scheduled',
    startTime: '2024-03-20T14:00:00',
    endTime: '2024-03-20T15:00:00'
  },
  {
    id: 'session2',
    userId: 'user1',
    type: 'ai',
    status: 'completed',
    startTime: '2024-03-18T10:00:00',
    endTime: '2024-03-18T10:30:00',
    messages: mockMessages
  }
];

export const mockPaymentPlans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 29.99,
    features: [
      'Unlimited AI chat consultations',
      'Voice input support',
      'Basic response time',
      'Email support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 99.99,
    features: [
      'Everything in Basic',
      'Priority response time',
      '2 human expert consultations/month',
      'Advanced analytics',
      '24/7 priority support'
    ]
  }
];