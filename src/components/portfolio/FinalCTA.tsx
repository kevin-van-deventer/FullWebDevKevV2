"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div
        className="relative overflow-hidden border-2 border-black bg-gold p-6 text-center text-primary-foreground shadow-[8px_8px_0_0_rgba(0,0,0,0.9)] md:p-8"
        style={{
          clipPath:
            "polygon(2% 0, 98% 0, 100% 15%, 100% 85%, 98% 100%, 2% 100%, 0 85%, 0 15%)",
        }}
      >
        {/* Burst rays */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-conic-gradient(from 0deg, rgba(0,0,0,0.15) 0deg 6deg, transparent 6deg 18deg)",
            }}
          />
        </div>

        <Zap className="absolute left-4 top-4 h-7 w-7 -rotate-12 fill-black text-black" />
        <Zap className="absolute right-4 bottom-4 h-7 w-7 rotate-180 fill-black text-black" />

        <div className="relative">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            LET'S BUILD <br className="sm:hidden" />
            <span className="inline-block -rotate-1 bg-black px-3 py-1 text-gold">
              SOMETHING EPIC!
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium text-black/80">
            Got an idea? Let's turn it into a fast, beautiful product.
          </p>
          <a
            href="mailto:kevin@neoncode.studio"
            className="btn-comic mt-5 inline-flex items-center gap-2 rounded-md border-2 border-black bg-background px-6 py-3 text-xs font-extrabold tracking-widest text-gold"
          >
            HIRE ME <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
