import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SideAnnotations from "./components/SideAnnotations";
import WhatsAppButton from "./components/WhatsAppButton";

const AboutSection = lazy(() => import("./components/AboutSection"));
const FeaturedProjects = lazy(() => import("./components/FeaturedProjects"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <SideAnnotations />
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="py-32" />}>
          <AboutSection />
          <FeaturedProjects />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>

      <WhatsAppButton />
    </div>
  );
}