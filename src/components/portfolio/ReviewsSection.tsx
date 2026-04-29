"use client";

import { motion } from "framer-motion";
import { Quote, MessageSquare } from "lucide-react";
import reviewsData from "@/data/reviews.json";
import { AnimatedTitle } from "./AnimatedTitle";

interface Review {
  name: string;
  role: string;
  content: string;
  avatar: string;
  color: string;
}

const reviews = reviewsData as Review[];

function ReviewCard({ review, idx }: { review: Review; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
      className="relative flex flex-col p-6 rounded-lg border-4 border-black bg-panel shadow-[12px_12px_0_0_#000] group"
    >
      {/* Cartoon Avatar */}
      <div className="mb-6 flex items-center gap-4">
        <div 
          className="h-14 w-14 overflow-hidden rounded-full border-4 border-black bg-panel-2 shadow-[4px_4px_0_0_#000] transition-transform group-hover:scale-110"
          style={{ borderColor: review.color }}
        >
          <img src={review.avatar} alt={review.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="font-display text-sm tracking-wide text-foreground uppercase">{review.name}</h4>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{review.role}</p>
        </div>
      </div>

      {/* Speech Bubble Content */}
      <div className="relative flex-1 rounded-xl border-2 border-black bg-panel-2 p-4 shadow-[4px_4px_0_0_#000]">
        <Quote className="absolute -top-3 -left-2 h-6 w-6 text-gold fill-gold rotate-12" />
        <p className="text-sm italic leading-relaxed text-foreground/90">
          "{review.content}"
        </p>
        {/* Speech Bubble Tail */}
        <div className="absolute -top-3 left-6 h-4 w-4 bg-panel-2 border-t-2 border-l-2 border-black rotate-45" />
      </div>

      {/* "WOW" Badge for even indexes */}
      {idx % 2 === 0 && (
        <div className="absolute -bottom-4 -right-4 rotate-12 bg-orange-glow border-2 border-black px-3 py-1 font-display text-[10px] text-black shadow-[3px_3px_0_0_#000] z-10 uppercase">
          Epic!
        </div>
      )}
    </motion.div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-[1400px] py-12 relative overflow-visible">
      {/* Halftone Pattern Overlay (subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden" 
           style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
      
      <AnimatedTitle 
        title="Client Reviews" 
        subtitle="Tales of Digital Conquest"
        Icon={MessageSquare} 
        color="var(--cyan-accent)"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} idx={i} />
        ))}
      </div>
    </section>
  );
}
