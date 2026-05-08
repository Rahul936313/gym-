export const membershipPlans = [
  {
    id: 'catalog',
    duration: 'Month',
    plans: [
      {
        id: 'general-training',
        name: 'General Training',
        price: 1000,
        note: 'Complete gym floor access for regular strength and fitness.',
        features: ['Modern equipment access', 'Workout floor guidance', 'Strength + functional training'],
      },
      {
        id: 'personal-training',
        name: 'Personal Training',
        price: 1200,
        note: 'Dedicated trainer support for your individual goals.',
        features: ['1-on-1 coaching support', 'Form correction', 'Customized progression plan'],
        mostPopular: true,
      },
      {
        id: 'special-cardio',
        name: 'Special Cardio',
        price: 1500,
        note: 'Focused cardio program to boost endurance and fat loss.',
        features: ['Cardio-focused routines', 'Conditioning drills', 'Progress tracking support'],
      },
    ],
  },
]

export const trainerProfiles = [
  {
    id: 't1',
    name: 'Aiden Clarke',
    role: 'Strength & Power Coach',
    specialties: ['Olympic lifts', 'Hypertrophy', 'Form coaching'],
    socials: [
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'X' },
      { href: '#', label: 'YouTube' },
    ],
  },
  {
    id: 't2',
    name: 'Marcus Vale',
    role: 'Crossfit Head Coach',
    specialties: ['WOD programming', 'Conditioning', 'Technique'],
    socials: [
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'X' },
      { href: '#', label: 'YouTube' },
    ],
  },
  {
    id: 't3',
    name: 'Noor Haddad',
    role: 'Cardio & Athletic Coach',
    specialties: ['VO2 training', 'Agility', 'Endurance'],
    socials: [
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'X' },
      { href: '#', label: 'YouTube' },
    ],
  },
]

export const fitnessQuotes = [
  'Discipline is the bridge between goals and achievement.',
  'Train hard. Stay humble. Become unstoppable.',
  'Your only limit is the strength you build daily.',
  'Consistency beats intensity—until you become intensity.',
  'Make today count. Earn tomorrow.',
]

export const testimonials = [
  { id: 'q1', name: 'Sofia R.', title: 'Transformed in 8 weeks', rating: 5, body: 'The coaching is world-class. The atmosphere is intense—in the best way.' },
  { id: 'q2', name: 'Rahul K.', title: 'Best gym experience', rating: 5, body: 'Every session feels cinematic. I’m stronger, healthier, and more confident.' },
  { id: 'q3', name: 'Emily T.', title: 'Finally found my routine', rating: 4, body: 'The programs are clear and the trainers actually care about form and progress.' },
  { id: 'q4', name: 'James M.', title: 'Results that speak', rating: 5, body: 'Great equipment, better community, and premium coaching. Highly recommended.' },
]

export const galleryCategories = ['Cardio', 'Strength', 'Workout Area'] as const

