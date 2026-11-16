import HeroSection from "@/components/HomeSection/HeroSection";
import TechMarquee from "@/components/UI/TechMarquee";
import ServicesSection from "@/components/HomeSection/ServicesSection";
import ProcessSection from "@/components/HomeSection/ProcessSection";
import WhyOnline from "@/components/HomeSection/WhyOnline";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyOnline />
      <ServicesSection />
      <ProcessSection />
      <TechMarquee />
    </main>
  );
}
