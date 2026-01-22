export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  quote: string;
  image: string;
  transformation?: {
    before: string;
    after: string;
    metrics?: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Tamie C.',
    age: 70,
    quote: `I started working with Sonja about two years ago. I'm 70 years old. My goal was to build upper arm strength and make sure I was steady on my feet. Sonja is awesome. Her instincts are excellent with regard to the type of exercise I needed and how to make adjustments. Today I've got my own routine and go to my gym three times a week. You can even feel the muscles in my arms, which I never had before. I highly recommend Sonja's program. You're never too old to learn how to take care of your body.`,
    image: 'https://source.unsplash.com/600x800/?senior-woman-fitness-happy',
  },
  {
    id: '2',
    name: 'Sarah M.',
    quote: `I've been training at [Studio Name] for over a year now, and it's completely transformed how I feel about fitness. The coaches are incredible—they actually care about your progress and celebrate every win with you. I've gained so much strength and confidence, and I've made amazing friends in the process. This isn't just a gym, it's a community.`,
    image: 'https://source.unsplash.com/600x800/?woman-fitness-confident',
  },
  {
    id: '3',
    name: 'James R.',
    age: 45,
    quote: `After years of back pain and avoiding the gym, I finally decided to try [Studio Name]. The personalized approach and focus on proper form changed everything. I'm stronger than I've ever been, my back pain is gone, and I actually look forward to working out. The semi-private sessions are perfect—I get the attention I need without breaking the bank.`,
    image: 'https://source.unsplash.com/600x800/?man-gym-strong',
  },
  {
    id: '4',
    name: 'Lisa K.',
    quote: `I was intimidated by strength training until I met the team here. They made me feel comfortable from day one and helped me understand that everyone starts somewhere. Now I'm deadlifting more than I ever thought possible, and I feel amazing. The weekly check-ins keep me accountable and motivated.`,
    image: 'https://source.unsplash.com/600x800/?woman-strength-training',
  },
  {
    id: '5',
    name: 'Michael T.',
    age: 52,
    quote: `The group fitness classes are exactly what I needed. Great energy, supportive community, and workouts that challenge me every time. I've lost 20 pounds and gained so much energy. The coaches know how to modify exercises for different fitness levels, so I never feel left behind.`,
    image: 'https://source.unsplash.com/600x800/?man-fitness-happy',
  },
  {
    id: '6',
    name: 'Emma L.',
    quote: `I've tried so many gyms and programs, but nothing stuck until I found [Studio Name]. The combination of personalized coaching, community support, and holistic approach to wellness is exactly what I needed. I'm not just stronger physically—I'm more confident, sleep better, and have more energy for everything else in my life.`,
    image: 'https://source.unsplash.com/600x800/?woman-wellness-happy',
  },
];

