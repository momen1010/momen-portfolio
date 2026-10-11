import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedProjects from "./components/FeaturedProjects";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SideAnnotations from "./components/SideAnnotations";

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <SideAnnotations />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}