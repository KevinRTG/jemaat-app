import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/ui/HeroSlider';
import AboutSection from '@/components/ui/AboutSection';
import ScheduleSection from '@/components/ui/ScheduleSection';
import CallToAction from '@/components/ui/CallToAction';
import LatestYoutubeVideo from '@/components/ui/LatestYoutubeVideo';
import RenunganHarian from '@/components/ui/RenunganHarian';

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ScheduleSection />
      <CallToAction />
      <LatestYoutubeVideo /> 
      <RenunganHarian />
    </main>
  );
}
