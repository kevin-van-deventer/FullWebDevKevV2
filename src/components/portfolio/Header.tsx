"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Zap, Menu, X } from "lucide-react";
import logoImg from "@/assets/neon-logo.png";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  const [active, setActive] = useState("HOME");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 md:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2" aria-label="Home">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border-2 border-gold bg-panel-2 shadow-[0_0_20px_rgba(255,184,0,0.4)]">
            <img src={logoImg.src} alt="Neon Code Studio Logo" className="h-full w-full object-cover" />
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((l) => {
            const isActive = active === l.label;
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`relative rounded-md px-3 py-2 text-xs font-bold tracking-widest transition-colors ${
                  isActive ? "text-gold" : "text-foreground/80 hover:text-gold"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-2 right-2 h-[3px] rounded-full bg-gold shadow-[0_0_10px_rgba(255,184,0,0.7)]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="https://github.com/EduardvDeventer"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-panel text-foreground/80 transition hover:border-gold hover:text-gold"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/eduardvdeventer"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-panel text-foreground/80 transition hover:border-gold hover:text-gold"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/vudovn"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-panel text-foreground/80 transition hover:border-gold hover:text-gold"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>

          <a
            href="#contact"
            className="btn-comic hidden items-center gap-2 rounded-md border-2 border-black bg-gold px-3 py-2 text-xs font-extrabold tracking-widest text-primary-foreground sm:inline-flex"
          >
            LET'S WORK TOGETHER
            <Zap className="h-4 w-4 fill-black" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border bg-panel text-gold lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 lg:hidden"
          >
            <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-4 py-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    setActive(l.label);
                    setOpen(false);
                  }}
                  className="rounded-md px-3 py-2 text-sm font-bold tracking-widest text-foreground/90 hover:bg-panel hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-comic mt-2 inline-flex items-center justify-center gap-2 rounded-md border-2 border-black bg-gold px-3 py-2 text-xs font-extrabold tracking-widest text-primary-foreground"
              >
                LET'S WORK TOGETHER <Zap className="h-4 w-4 fill-black" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
