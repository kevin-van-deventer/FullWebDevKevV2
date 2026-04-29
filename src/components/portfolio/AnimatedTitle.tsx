"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedTitleProps {
  title: string;
  subtitle?: string;
  Icon: LucideIcon;
  color?: string;
}

export function AnimatedTitle({ title, subtitle, Icon, color = "var(--gold)" }: AnimatedTitleProps) {
  const characters = Array.from(title);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div className="mb-8 flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <motion.div 
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="grid h-12 w-12 place-items-center rounded-lg border-2 border-black bg-panel-2 shadow-[4px_4px_0_0_#000]"
          style={{ borderColor: color }}
        >
          <Icon className="h-6 w-6" style={{ color }} />
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap overflow-hidden"
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              variants={child}
              className="font-display text-3xl md:text-4xl tracking-tight text-foreground"
            >
              {char === " " ? "\u00A0" : char.toUpperCase()}
            </motion.span>
          ))}
        </motion.div>
      </div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-16"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
