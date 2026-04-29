"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled past 400px (roughly past hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 z-[100]"
        >
          <a
            href="https://wa.me/84582168746"
            target="_blank"
            rel="noreferrer"
            className="group relative block"
          >
            {/* Comic Speech Bubble on Hover */}
            <div className="absolute -top-12 right-0 hidden group-hover:block transition-all">
              <div className="bg-white border-2 border-black px-3 py-1 rounded-md shadow-[4px_4px_0_0_#000] rotate-[-5deg]">
                <p className="font-display text-[10px] text-black tracking-widest whitespace-nowrap">CHAT WITH ME!</p>
                <div className="absolute -bottom-2 right-4 h-3 w-3 bg-white border-b-2 border-r-2 border-black rotate-45" />
              </div>
            </div>

            {/* The Main Icon Box */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-black bg-[#25D366] shadow-[8px_8px_0_0_#000] transition-transform active:scale-95 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_0_#000]">
              <MessageCircle className="h-8 w-8 text-white fill-white" />
            </div>

            {/* "WHAM!" Style Glow */}
            <div className="absolute inset-0 -z-10 animate-pulse bg-[#25D366]/30 blur-2xl rounded-full" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
