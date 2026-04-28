"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import dashboard from "@/assets/project-dashboard.jpg";
import ecom from "@/assets/project-ecom.jpg";
import portfolio from "@/assets/project-portfolio.jpg";

type Project = {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  image: string;
};

const projects: Project[] = [
  {
    title: "DevFlow Dashboard",
    description: "A modern admin dashboard with analytics, charts and real-time data.",
    tags: [
      { label: "React", color: "var(--cyan-accent)" },
      { label: "TypeScript", color: "var(--gold)" },
      { label: "Tailwind", color: "var(--orange-glow)" },
    ],
    image: dashboard.src,
  },
  {
    title: "Ecom Store",
    description: "A fully responsive e-commerce website with cart and payments.",
    tags: [
      { label: "Next.js", color: "var(--foreground)" },
      { label: "Stripe", color: "var(--purple-accent)" },
      { label: "Tailwind", color: "var(--orange-glow)" },
    ],
    image: ecom.src,
  },
  {
    title: "Creative Portfolio",
    description: "A sleek portfolio template for creatives and developers.",
    tags: [
      { label: "HTML", color: "var(--orange-glow)" },
      { label: "CSS", color: "var(--cyan-accent)" },
      { label: "JavaScript", color: "var(--gold)" },
    ],
    image: portfolio.src,
  },
];

function TagPill({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="rounded-md border px-2 py-0.5 text-[10px] font-bold tracking-wider"
      style={{ borderColor: color, color }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      whileHover={{ y: -6 }}
      className="panel panel-glow group flex flex-col overflow-hidden transition"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={768}
          height={512}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="font-display text-base tracking-wide text-foreground">{project.title}</h3>
          <a
            href="#"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-border bg-panel-2 text-gold transition hover:border-gold"
            aria-label={`Open ${project.title}`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <TagPill key={t.label} {...t} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="panel p-5 md:p-6"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-panel-2 text-gold">
            <Star className="h-4 w-4 fill-gold" />
          </span>
          <h2 className="font-display text-xl tracking-wide text-foreground">FEATURED PROJECTS</h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-[11px] font-extrabold tracking-widest text-gold hover:text-orange-glow"
        >
          VIEW ALL PROJECTS <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid gap-8">


        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} idx={i} />
        ))}
      </div>
    </motion.section>
  );
}
