export interface Membership {
  id: string;
  name: string;
  description: string;
  introOffer: string | null;
  startingPrice: string;
  image: string;
  features: string[];
  bookingLink: string;
  maxParticipants?: number;
}

export const memberships: Membership[] = [
  {
    id: 'semi-private',
    name: 'SEMI-PRIVATE TRAINING',
    description: 'Get individualized coaching and a fully customized program completely catered to your goals and abilities in a small-group setting (max 8 people). Enjoy the benefits of personal training with the added support and energy of a small group.',
    introOffer: 'Intro offer $250 for first month',
    startingPrice: '$325/month',
    image: 'https://source.unsplash.com/800x600/?small-group-training-gym',
    features: [
      'Max 8 people per session',
      'Customized program for your goals',
      'Expert coaching and form correction',
      'Community support',
      'Weekly check-ins',
    ],
    bookingLink: '#trial-class',
    maxParticipants: 8,
  },
  {
    id: 'group-fitness',
    name: 'GROUP FITNESS TRAINING',
    description: 'Group Fitness classes are welcome to all fitness levels focusing on strength and conditioning. These classes combine cardio, strength training, and flexibility workouts, allowing you to engage different muscle groups and improve overall fitness.',
    introOffer: null,
    startingPrice: '$120/month',
    image: 'https://source.unsplash.com/800x600/?group-fitness-class',
    features: [
      'All fitness levels welcome',
      'Strength and conditioning focus',
      'Variety of exercises',
      'Community atmosphere',
      'Flexible scheduling',
    ],
    bookingLink: '#trial-class',
  },
  {
    id: 'private-training',
    name: '1:1 PRIVATE TRAINING',
    description: 'Private 1:1 coaching provides a personalized fitness experience with expert trainers. Choose a trainer suited to your goals, such as strength training, nutrition, or overall health. Sessions are 60 minutes and include weekly check-ins.',
    introOffer: null,
    startingPrice: '$95/session',
    image: 'https://source.unsplash.com/800x600/?personal-training-one-on-one',
    features: [
      '60-minute sessions',
      'Fully personalized programs',
      'Weekly progress check-ins',
      'Choose your trainer',
      'Flexible scheduling',
    ],
    bookingLink: '#trial-class',
  },
];

