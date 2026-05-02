"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Mail, Rocket, Sparkles } from "lucide-react";
import heroImg from "@/assets/fwdk_hero_section_background_image.avif";
import characterImg from "@/assets/fullwebdevkev_cartoon_character_hero_secction_image.svg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-[1400px] px-4 pt-6 pb-12 md:px-6 md:pt-12"
    >
      <div className="panel relative z-0 overflow-visible rounded-lg border-2 border-gold/50 shadow-[0_0_60px_rgba(255,122,0,0.2)]">
        {/* Background area - Now strictly absolute to stay BEHIND everything */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-lg">
          <Image
            src={heroImg}
            alt="Kevin van Deventer — Full-Stack Web Developer"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          {/* Readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/60 to-background/90 md:bg-gradient-to-r md:from-background/95 md:via-background/60 md:to-background/10" />
        </div>

        {/* Cartoon character - Now inside the panel but above background, below content */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
            className="absolute right-[-10%] bottom-0 h-[40%] w-auto sm:right-[-5%] sm:h-[60%] md:right-[-2%] md:bottom-0 md:h-[108%]"
          >
            <Image
              src={characterImg}
              alt="Cartoon Kevin"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:opacity-100"
              priority
            />
          </motion.div>
        </div>

        {/* Foreground content - Relative z-20 to be above character */}
        <div className="relative z-20 flex w-full flex-col px-6 py-12 sm:px-10 md:min-h-[500px] md:flex-row md:items-center md:px-12 md:py-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-md border border-gold/60 bg-background/80 px-3 py-1 text-[10px] font-bold tracking-widest text-gold backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" /> AVAILABLE FOR HIRE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex max-w-md items-start gap-4 rounded-md border border-border bg-background/60 p-5 backdrop-blur-md"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-background text-gold shadow-sm">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium leading-relaxed text-foreground/95 md:text-base">
                <span className="font-bold text-gold">Kevin van Deventer</span> is a Full-Stack Web Engineer building <span className="font-bold text-gold">fast</span>,{" "}
                <span className="font-bold text-gold">responsive</span> and{" "}
                <span className="font-bold text-gold">beautiful</span> digital solutions.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
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
