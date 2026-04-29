"use client";

import { motion } from "framer-motion";
import { Code2, AppWindow, Gauge, Zap } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import type { LucideIcon } from "lucide-react";

type Service = { title: string; text: string; Icon: LucideIcon; color: string };

const services: Service[] = [
  {
    title: "Engineering",
    text: "Building robust, scalable architectures with React 19 and TypeScript.",
    Icon: Code2,
    color: "var(--cyan-accent)",
  },
  {
    title: "AI Integration",
    text: "Integrating LLMs and AI workflows into production applications.",
    Icon: Zap,
    color: "var(--purple-accent)",
  },
  {
    title: "Performance",
    text: "Core Web Vital optimization and sub-second load times.",
    Icon: Gauge,
    color: "var(--orange-glow)",
  },
  {
    title: "Product Design",
    text: "User-centric design systems that convert and engage.",
    Icon: AppWindow,
    color: "var(--gold)",
  },
];

function ServiceCard({ service, idx }: { service: Service; idx: number }) {
  const { Icon } = service;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      whileHover={{ y: -4 }}
      className="panel panel-glow flex items-start gap-3 p-4 transition"
    >
      <span
        className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-panel-2"
        style={{ color: service.color, boxShadow: `0 0 18px ${service.color}33` }}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-sm tracking-wide text-foreground">{service.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{service.text}</p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="panel p-5 md:p-6">
      <AnimatedTitle 
        title="What I Do" 
        subtitle="Specialized services to build, scale, and optimize"
        Icon={Zap} 
        color="var(--gold)"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} idx={i} />
        ))}
      </div>
    </section>
  );
}
