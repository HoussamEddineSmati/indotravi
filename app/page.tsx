import { Hero } from '@/components/features/Hero';
import { SearchPanel } from '@/components/features/SearchPanel';
import { BestLocation } from '@/components/features/BestLocation';
import { HowItWorks } from '@/components/features/HowItWorks';
import { TourPackages } from '@/components/features/TourPackages';
import { Testimonials } from '@/components/features/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero>
        <SearchPanel />
      </Hero>
      <BestLocation />
      <HowItWorks />
      <TourPackages />
      <Testimonials />
    </main>
  );
}
