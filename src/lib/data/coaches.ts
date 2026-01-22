export interface Coach {
  id: string;
  name: string;
  title: string;
  slug: string;
  image: string;
  bio: string;
  certifications: string[];
  specialties: string[];
  favoriteExercise?: string;
  funFact?: string;
}

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Sonja Demco',
    title: 'OWNER + TRAINER',
    slug: 'sonja-demco',
    image: 'https://source.unsplash.com/600x800/?fitness-trainer-professional-woman',
    bio: `Sonja founded [Studio Name] with a simple mission: to help people build strength, move better, and feel amazing. With over 10 years of experience in personal training and nutrition coaching, she's passionate about creating customized programs that fit each client's unique body and goals.`,
    certifications: ['NASM-CPT', 'Precision Nutrition L1', 'Functional Movement Screen'],
    specialties: ['Strength Training', 'Mobility', 'Nutrition', 'Injury Prevention'],
    favoriteExercise: 'Deadlifts',
    funFact: 'Has completed 3 marathons and loves hiking on weekends',
  },
  {
    id: '2',
    name: 'Kinsey Davis',
    title: 'TRAINER',
    slug: 'kinsey-davis',
    image: 'https://source.unsplash.com/600x800/?fitness-coach-woman',
    bio: `Kinsey brings energy and expertise to every session. Specializing in strength and conditioning, she helps clients of all fitness levels achieve their goals through personalized coaching and unwavering support.`,
    certifications: ['ACE-CPT', 'TRX Certified', 'Kettlebell Level 1'],
    specialties: ['Strength Training', 'Conditioning', 'Group Fitness'],
    favoriteExercise: 'Squats',
    funFact: 'Former college athlete turned fitness professional',
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    title: 'TRAINER',
    slug: 'marcus-johnson',
    image: 'https://source.unsplash.com/600x800/?personal-trainer-man',
    bio: `Marcus believes fitness should be fun, challenging, and sustainable. With a background in sports performance and corrective exercise, he helps clients move better and perform at their best.`,
    certifications: ['CSCS', 'Corrective Exercise Specialist', 'Youth Fitness'],
    specialties: ['Performance Training', 'Corrective Exercise', 'Athletic Development'],
    favoriteExercise: 'Pull-ups',
    funFact: 'Coaches youth sports teams in his spare time',
  },
];

