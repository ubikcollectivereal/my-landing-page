// app/page.tsx
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
}
