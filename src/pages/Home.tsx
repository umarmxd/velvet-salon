import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HeroSection from '../sections/HeroSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import PhilosophySection from '../sections/PhilosophySection';
import GalleryPreviewSection from '../sections/GalleryPreviewSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PricingPreviewSection from '../sections/PricingPreviewSection';
import BookingCtaSection from '../sections/BookingCtaSection';
import ContactSection from '../sections/ContactSection';

export default function Home() {
  useScrollAnimation();

  return (
    <main>
      <HeroSection />
      <ServicesOverviewSection />
      <PhilosophySection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <BookingCtaSection />
      <ContactSection />
    </main>
  );
}
