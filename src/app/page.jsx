import HeroSection from "./home_components/hero_section";
import ServicesSection from "./home_components/ServicesSection";
import ProjectsSection from "./home_components/ProjectsSection";
import Testimonial from "./home_components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <Testimonial />
    </div>
  );
}
