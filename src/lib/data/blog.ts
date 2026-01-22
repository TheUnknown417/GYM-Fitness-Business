export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Your Mental Health and How Perspective Can Shape Your Health',
    category: 'Mental Health',
    excerpt: 'Your perspective can change how you respond to life. And your approach to your physical health.',
    author: 'Sonja Demco',
    date: '3/14/25',
    slug: 'mental-health-perspective',
    image: 'https://source.unsplash.com/1200x800/?mental-health-wellness',
    content: `Your mental health and physical health are deeply connected. The way you think about yourself, your body, and your capabilities directly impacts how you show up in the gym and in life.

When you shift your perspective from "I have to work out" to "I get to move my body," everything changes. Movement becomes a gift, not a punishment. Strength training becomes empowerment, not obligation.

Here's how perspective shapes your health journey:

**1. From Limitations to Possibilities**
Instead of focusing on what you can't do, celebrate what you can. Every small step forward is progress worth acknowledging.

**2. From Perfection to Progress**
Perfectionism kills motivation. Progress, no matter how small, is what creates lasting change.

**3. From Comparison to Community**
When you stop comparing yourself to others and start supporting each other, you create an environment where everyone can thrive.

Your mindset is your most powerful tool. Use it wisely.`,
  },
  {
    id: '2',
    title: '4 Quick Body-Weight Movements You Can Do Anywhere',
    category: 'Workout Tips',
    excerpt: 'No gym? No problem. These four exercises require zero equipment and deliver real results.',
    author: 'Sonja Demco',
    date: '2/15/25',
    slug: 'body-weight-movements-anywhere',
    image: 'https://source.unsplash.com/1200x800/?bodyweight-exercise-home',
    content: `You don't need a fancy gym or expensive equipment to build strength and move better. These four body-weight movements can be done anywhere—your living room, hotel room, or even a park.

**1. Push-Ups**
Start on your knees if needed, or elevate your hands on a bench. Focus on controlled movement and full range of motion. Build up to 3 sets of 10-15 reps.

**2. Squats**
Stand with feet shoulder-width apart, lower down as if sitting in a chair, then drive through your heels to stand back up. Keep your chest up and core engaged. Aim for 3 sets of 15-20 reps.

**3. Plank**
Hold a straight line from head to heels, engaging your core. Start with 20-30 seconds and build up to 60 seconds or more. Quality over quantity.

**4. Lunges**
Step forward into a lunge position, lower your back knee toward the ground, then push back to start. Alternate legs. Complete 3 sets of 10-12 reps per leg.

These movements build functional strength that translates to everyday life. No excuses—just movement.`,
  },
  {
    id: '3',
    title: 'Sleep Better, Feel Better',
    category: 'Wellness',
    excerpt: 'The average person needs 7.5 to 9 hours of sleep. Here\'s how to optimize your sleep cycles.',
    author: 'Kinsey Davis',
    date: '2/15/25',
    slug: 'sleep-better-feel-better',
    image: 'https://source.unsplash.com/1200x800/?sleep-wellness-rest',
    content: `Sleep isn't optional—it's essential for recovery, performance, and overall health. The average person needs 7.5 to 9 hours of quality sleep per night, but most of us aren't getting enough.

Here's how to optimize your sleep:

**Create a Sleep Routine**
Go to bed and wake up at the same time every day, even on weekends. Your body loves consistency.

**Limit Screen Time**
The blue light from phones and computers disrupts melatonin production. Turn off screens at least an hour before bed.

**Optimize Your Environment**
Keep your bedroom cool, dark, and quiet. Invest in blackout curtains and consider a white noise machine if needed.

**Watch Your Caffeine**
Avoid caffeine after 2 PM. It can stay in your system for 6-8 hours.

**Move Your Body**
Regular exercise improves sleep quality, but avoid intense workouts too close to bedtime.

**Manage Stress**
Practice relaxation techniques like deep breathing or meditation before bed.

Better sleep means better recovery, more energy, and improved performance in everything you do.`,
  },
  {
    id: '4',
    title: 'Why Strength Training Matters More Than Cardio',
    category: 'Workout Tips',
    excerpt: 'Building muscle isn\'t just about looking good—it\'s about longevity, bone health, and metabolic function.',
    author: 'Marcus Johnson',
    date: '1/20/25',
    slug: 'strength-training-matters',
    image: 'https://source.unsplash.com/1200x800/?strength-training-weights',
    content: `While cardio has its place, strength training offers unique benefits that cardio alone can't provide.

**Bone Health**
As we age, we lose bone density. Strength training is one of the best ways to maintain and even increase bone density, reducing fracture risk.

**Metabolic Health**
Muscle is metabolically active tissue. The more muscle you have, the more calories you burn at rest. This helps with weight management and metabolic health.

**Functional Strength**
Strength training improves your ability to perform daily activities—carrying groceries, climbing stairs, playing with kids. It's about quality of life.

**Injury Prevention**
Strong muscles protect your joints and improve stability, reducing injury risk in daily life and other activities.

**Mental Health**
Lifting heavy things builds confidence. There's something empowering about getting stronger that translates to every area of life.

Start with body-weight movements, then gradually add resistance. Your future self will thank you.`,
  },
];

