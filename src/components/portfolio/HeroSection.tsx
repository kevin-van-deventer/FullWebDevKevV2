"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Mail, Rocket, Sparkles } from "lucide-react";
import heroImg from "@/assets/fwdk_hero_section_background_image.png";
import characterImg from "@/assets/fullwebdevkev_cartoon_character_hero_secction_image.svg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-[1400px] overflow-hidden px-4 pt-6 pb-12 md:px-6 md:pt-12"
    >
      <div className="panel relative flex flex-col overflow-hidden rounded-lg border-2 border-gold/50 shadow-[0_0_60px_rgba(255,122,0,0.2)] md:block">
        {/* Background area - Strictly absolute behind everything */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={heroImg}
            alt="Background"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/95 md:bg-gradient-to-r md:from-background/95 md:via-background/60 md:to-background/10" />
        </div>

        {/* Character Section - TOP on mobile, RIGHT on desktop */}
        <div className="relative z-10 flex h-[320px] w-full items-end justify-center overflow-hidden border-b border-gold/20 md:absolute md:inset-0 md:h-full md:border-0">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[90%] w-auto md:absolute md:right-[-5%] md:bottom-[-5%] md:h-[110%]"
          >
            <Image
              src={characterImg}
              alt="Cartoon Kevin"
              className="h-full w-auto object-contain object-bottom md:opacity-100"
              priority
            />
            {/* Mobile-only spotlight glow behind character */}
            <div className="absolute inset-0 -z-10 bg-gold/10 blur-3xl md:hidden" />
          </motion.div>
        </div>

        {/* Content Section - BELOW character on mobile, overlay on desktop */}
        <div className="relative z-20 flex w-full flex-col px-6 py-10 sm:px-10 md:absolute md:inset-0 md:flex-row md:items-center md:px-12 md:py-0">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-md border border-gold/60 bg-background/80 px-3 py-1 text-[10px] font-bold tracking-widest text-gold backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" /> AVAILABLE FOR HIRE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display text-5xl leading-[0.85] sm:text-7xl md:text-8xl lg:text-9xl"
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
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex max-w-md items-start gap-4 rounded-md border border-border bg-background/60 p-5 backdrop-blur-md"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-background text-gold shadow-sm">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium leading-relaxed text-foreground/95 md:text-base">
                I build <span className="font-bold text-gold">fast</span>,{" "}
                <span className="font-bold text-gold">responsive</span> and{" "}
                <span className="font-bold text-gold">beautiful</span> websites.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="btn-comic flex items-center justify-center gap-3 rounded-md border-2 border-black bg-gold px-8 py-4 text-xs font-black tracking-widest text-primary-foreground"
              >
                <Rocket className="h-5 w-5" /> VIEW MY WORK
              </a>
              <a
                href="#contact"
                className="btn-comic flex items-center justify-center gap-3 rounded-md border-2 border-black bg-panel-2 px-8 py-4 text-xs font-black tracking-widest text-foreground"
              >
                <Mail className="h-5 w-5 text-gold" /> CONTACT ME
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
