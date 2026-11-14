import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicTestimonialCards from "@/components/TestimonialCards";
import FeaturedCoursesSection from "@/components/ui/FeaturedCoursesSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <FeaturedCoursesSection btnText="Learn 
      More" />
      <WhyChooseUs />
      <MusicTestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}

// This page load in layout and layout reflects in the browser
