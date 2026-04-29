export const dynamic = "force-dynamic";

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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-12">
        <HeroSection />

        <section className="mx-auto max-w-[1400px] space-y-24 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AboutCard />
            <SkillsCard />
          </div>
          <FeaturesBanner />
          <ProjectsSection />
          <FAQSection />
          <ServicesSection />
          <ReviewsSection />
          <HireMeSection />
          <FinalCTA />
        </section>
      </main>

      <footer className="border-t border-border/60 py-6 text-center text-xs tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} WEB DEVELOPER · CRAFTED WITH <span className="text-gold">★</span>
      </footer>
    </div>
  );
}
