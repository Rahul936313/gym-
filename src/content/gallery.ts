export type GalleryCategory = 'All' | 'Cardio' | 'Strength' | 'Workout Area'

import image1Optimized from '../assets/optimized/gym-1.webp'
import image2Optimized from '../assets/optimized/gym-2.webp'
import image3Optimized from '../assets/optimized/gym-3.webp'
import image4Optimized from '../assets/optimized/gym-4.webp'
import image5Optimized from '../assets/optimized/gym-5.webp'
import image6Optimized from '../assets/optimized/gym-6.webp'

export const galleryItems: Array<{
  id: string
  category: Exclude<GalleryCategory, 'All'>
  title: string
  image: string
  fullImage: string
}> = [
  {
    id: 'strength-hanuman',
    category: 'Strength',
    title: 'Hanuman Strength Wall',
    image: image1Optimized,
    fullImage: image1Optimized,
  },
  {
    id: 'cardio-evolve',
    category: 'Cardio',
    title: 'Evolve Beyond Limits',
    image: image2Optimized,
    fullImage: image2Optimized,
  },
  {
    id: 'strength-dumbbell',
    category: 'Strength',
    title: 'Heavy Dumbbell Rack',
    image: image3Optimized,
    fullImage: image3Optimized,
  },
  {
    id: 'workout-floor',
    category: 'Workout Area',
    title: 'Main Workout Floor',
    image: image4Optimized,
    fullImage: image4Optimized,
  },
  {
    id: 'strength-machine',
    category: 'Strength',
    title: 'Machine Training Section',
    image: image5Optimized,
    fullImage: image5Optimized,
  },
  {
    id: 'workout-infinityx',
    category: 'Workout Area',
    title: 'InfinityX Wall Zone',
    image: image6Optimized,
    fullImage: image6Optimized,
  },
]

