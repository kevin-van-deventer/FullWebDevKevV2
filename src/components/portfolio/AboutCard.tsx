import { motion } from "framer-motion";
import { User, ArrowRight, Leaf } from "lucide-react";

export function AboutCard() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="panel panel-glow relative p-5 transition md:p-6"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-panel-2 text-gold">
          <User className="h-4 w-4" />
        </span>
        <h2 className="font-display text-xl tracking-wide text-foreground">ABOUT ME</h2>
      </div>

      <p className="max-w-3xl text-base leading-relaxed text-foreground/90 md:text-lg">
        I lead <span className="font-bold text-gold underline decoration-gold/30 underline-offset-4">Neon Code Studio</span>, 
        an engineering-first collective dedicated to building high-performance, accessible, 
        and visually stunning web applications. I specialize in turning complex 
        requirements into seamless digital experiences.
      </p>


      <a
        href="#contact"
        className="btn-comic mt-5 inline-flex items-center gap-2 rounded-md border-2 border-black bg-gold px-4 py-2 text-[11px] font-extrabold tracking-widest text-primary-foreground"
      >
        MORE ABOUT ME <ArrowRight className="h-3.5 w-3.5" />
      </a>

      {/* Sticky note */}
      <div className="absolute -right-2 top-4 rotate-[8deg] rounded-sm border-2 border-black bg-orange-glow px-3 py-2 text-center font-display text-[10px] leading-tight text-black shadow-[3px_3px_0_0_rgba(0,0,0,0.9)]">
        DO
        <br />
        EPIC
        <br />
        STUFF
      </div>

      {/* Plant deco */}
      <Leaf className="absolute bottom-3 right-4 h-7 w-7 -rotate-12 text-emerald-400/70" />
    </motion.section>
  );
}
