import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import GallerySection from '../components/sections/GallerySection'
import MembershipSection from '../components/sections/MembershipSection'
import TrainersSection from '../components/sections/TrainersSection'
import QuotesSection from '../components/sections/QuotesSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <MembershipSection />
      <TrainersSection />
      <QuotesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

