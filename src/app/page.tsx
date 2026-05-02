import { Header } from "@/components/portfolio/Header";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutCard } from "@/components/portfolio/AboutCard";
import { SkillsCard } from "@/components/portfolio/SkillsCard";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { FAQSection } from "@/components/portfolio/FAQSection";
import { FeaturesBanner } from "@/components/portfolio/FeaturesBanner";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ReviewsSection } from "@/components/portfolio/ReviewsSection";
import { HireMeSection } from "@/components/portfolio/HireMeSection";
import { FinalCTA } from "@/components/portfolio/FinalCTA";

import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />

        <Section id="about-skills">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AboutCard />
            <SkillsCard />
          </div>
        </Section>

        <Section id="features" className="py-0 md:py-0">
          <FeaturesBanner />
        </Section>

        <Section id="projects">
          <ProjectsSection />
        </Section>

        <Section id="faq">
          <FAQSection />
        </Section>

        <Section id="services">
          <ServicesSection />
        </Section>

        <Section id="reviews">
          <ReviewsSection />
        </Section>

        <Section id="contact">
          <HireMeSection />
        </Section>

        <Section id="cta">
          <FinalCTA />
        </Section>
      </main>

      <footer className="border-t border-border/60 py-6 text-center text-xs tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} WEB DEVELOPER · CRAFTED WITH <span className="text-gold">★</span> BY{" "}
        <a 
          href="https://unlimitedoptionsenterprise.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4"
        >
          UNLIMITED OPTIONS ENTERPRISE
        </a>
      </footer>
    </div>
  );
}
