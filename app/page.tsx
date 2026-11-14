import HeroSection from "@/components/HeroSection";
import FeaturedCoursesSection from "@/components/ui/FeaturedCoursesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <FeaturedCoursesSection btnText="Learn 
      More" />
    </main>
  );
}

// This page load in layout and layout reflects in the browser
