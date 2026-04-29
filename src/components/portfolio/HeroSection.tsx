"use client";

import { motion } from "framer-motion";
import { Code2, Mail, Rocket, Sparkles } from "lucide-react";
import heroImg from "@/assets/fwdk_hero_section_background_image.png";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-[1400px] px-4 pt-8 pb-12 md:px-6 md:pt-12"
    >
      <div className="panel relative overflow-hidden rounded-lg border-2 border-gold/50 shadow-[0_0_60px_rgba(255,122,0,0.2)]">
        {/* Background image */}
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <img
            src={heroImg.src}
            alt="Kevin van Deventer — Full-Stack Web Developer specialized in React and modern UI/UX design"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/10 md:from-background/90 md:via-background/40 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
        </div>

        {/* Foreground content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-5 py-6 md:px-12 md:py-10">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-md border border-gold/60 bg-background/70 px-3 py-1 text-xs font-bold tracking-widest text-gold backdrop-blur-sm"
              >
                <Sparkles className="h-3.5 w-3.5" /> AVAILABLE FOR HIRE
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
              >
                <span className="text-stroke-comic block text-foreground drop-shadow-[0_4px_0_rgba(0,0,0,0.6)]">
                  FULL-STACK
                </span>
                <span className="text-stroke-gold block drop-shadow-[0_4px_0_rgba(0,0,0,0.6)]">
                  ENGINEERING
                </span>

              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 hidden max-w-md items-start gap-3 rounded-md border border-border bg-background/70 p-4 backdrop-blur-sm sm:flex"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-background text-gold">
                  <Code2 className="h-4 w-4" />
                </span>
                <span className="text-sm text-foreground/95 md:text-base">
                  I build <span className="font-bold text-gold">fast</span>,{" "}
                  <span className="font-bold text-gold">responsive</span> and{" "}
                  <span className="font-bold text-gold">beautiful</span> websites.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <a
                  href="#projects"
                  className="btn-comic inline-flex items-center gap-2 rounded-md border-2 border-black bg-gold px-5 py-3 text-xs font-extrabold tracking-widest text-primary-foreground"
                >
                  <Rocket className="h-4 w-4" /> VIEW MY WORK
                </a>
                <a
                  href="#contact"
                  className="btn-comic inline-flex items-center gap-2 rounded-md border-2 border-black bg-panel-2 px-5 py-3 text-xs font-extrabold tracking-widest text-foreground"
                >
                  <Mail className="h-4 w-4 text-gold" /> CONTACT ME
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only description below image for guaranteed readability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 flex items-start gap-3 rounded-md border border-border bg-panel-2/80 p-4 sm:hidden"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-background text-gold">
          <Code2 className="h-4 w-4" />
        </span>
        <p className="text-sm text-foreground/90">
          I build <span className="font-bold text-gold">fast</span>,{" "}
          <span className="font-bold text-gold">responsive</span> and{" "}
          <span className="font-bold text-gold">beautiful</span> websites.
        </p>
      </motion.div>
    </section>
  );
}
