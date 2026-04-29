"use client";

import { motion } from "framer-motion";
import { Code2, Box, Smartphone, Gauge } from "lucide-react";

const features = [
  {
    title: "Custom Websites",
    description: "High-performance websites built with modern tech.",
    icon: Code2,
    color: "var(--cyan-accent)",
  },
  {
    title: "Web Applications",
    description: "Scalable and dynamic web apps tailored to your needs.",
    icon: Box,
    color: "var(--purple-accent)",
  },
  {
    title: "Responsive Design",
    description: "Pixel-perfect designs that look great on every device.",
    icon: Smartphone,
    color: "var(--orange-glow)",
  },
  {
    title: "Performance",
    description: "Optimized for speed, SEO and Core Web Vitals.",
    icon: Gauge,
    color: "var(--gold)",
  },
];

export function FeaturesBanner() {
  return (
    <section className="mx-auto max-w-[1400px]">
      <div className="panel relative overflow-hidden rounded-lg border-2 border-gold/30 bg-panel/40 backdrop-blur-sm shadow-[0_0_40px_rgba(255,184,0,0.1)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/40">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 flex items-start gap-4 hover:bg-gold/5 transition-colors"
            >
              <div 
                className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border-2 border-black bg-panel-2 shadow-[4px_4px_0_0_#000] transition-transform group-hover:scale-110"
                style={{ borderColor: f.color }}
              >
                <f.icon className="h-6 w-6" style={{ color: f.color }} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-sm tracking-wide text-foreground mb-1">
                  {f.title.toUpperCase()}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
