"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center"
    >
      <motion.div 
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 10 }}
        className="relative mb-8"
      >
        <h1 className="font-display text-9xl md:text-[12rem] leading-none tracking-tighter text-black/5 drop-shadow-[4px_4px_0_rgba(255,184,0,0.5)]">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="bg-gold px-4 py-2 font-display text-xl md:text-3xl uppercase tracking-widest text-black border-4 border-black shadow-[8px_8px_0_0_#000]">
            MISSION FAILED
          </p>
        </div>
      </motion.div>

      <h2 className="mb-4 font-display text-2xl md:text-4xl uppercase text-foreground">
        PAGE NOT FOUND
      </h2>
      
      <p className="mb-10 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
        The coordinate you are looking for does not exist in this dimension. 
        Did you take a wrong turn in the code?
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="btn-comic inline-flex items-center gap-2 rounded-md border-2 border-black bg-gold px-8 py-4 text-xs font-extrabold tracking-widest text-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000]"
        >
          <Home className="h-4 w-4" /> BACK TO HOME
        </Link>
        
        <button
          onClick={() => typeof window !== "undefined" && window.history.back()}
          className="btn-comic inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-8 py-4 text-xs font-extrabold tracking-widest text-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000]"
        >
          <ArrowLeft className="h-4 w-4" /> GO BACK
        </button>
      </div>

      {/* Decorative Anime Elements */}
      <div className="fixed bottom-10 left-10 hidden lg:block opacity-10 pointer-events-none">
        <div className="h-40 w-1 bg-gold mb-2" />
        <div className="h-20 w-1 bg-gold" />
      </div>
      <div className="fixed top-20 right-10 hidden lg:block opacity-10 pointer-events-none">
        <div className="h-20 w-1 bg-gold mb-2" />
        <div className="h-40 w-1 bg-gold" />
      </div>
    </motion.div>
  );
}
