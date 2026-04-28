import { Header } from "@/components/portfolio/Header";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutCard } from "@/components/portfolio/AboutCard";
import { SkillsCard } from "@/components/portfolio/SkillsCard";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { FinalCTA } from "@/components/portfolio/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-12">
        <HeroSection />

        <section className="mx-auto max-w-[1400px] space-y-24 px-4 md:px-6">
          <AboutCard />
          <SkillsCard />
          <ProjectsSection />
          <ServicesSection />
          <FinalCTA />
        </section>
      </main>

      <footer className="border-t border-border/60 py-6 text-center text-xs tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} WEB DEVELOPER · CRAFTED WITH <span className="text-gold">★</span>
      </footer>
    </div>
  );
}
