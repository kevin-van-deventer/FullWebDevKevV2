"use client";

import { motion } from "framer-motion";
import { Zap, Code, FileCode, Server, Palette } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import type { LucideIcon } from "lucide-react";

type Skill = {
  label: string;
  pct: number;
  color: string;
  Icon: LucideIcon;
};

const skills: Skill[] = [
  { label: "JavaScript / TypeScript", pct: 98, color: "var(--gold)", Icon: FileCode },
  { label: "React 19 / TanStack Start", pct: 95, color: "var(--cyan-accent)", Icon: Code },
  { label: "Tailwind CSS 4 / Framer Motion", pct: 95, color: "var(--orange-glow)", Icon: FileCode },
  { label: "Node.js / AI Integrations", pct: 90, color: "oklch(0.75 0.18 145)", Icon: Server },
  { label: "UI / UX Design Systems", pct: 85, color: "var(--purple-accent)", Icon: Palette },
];

function SkillBar({ skill, idx }: { skill: Skill; idx: number }) {
  const { Icon } = skill;
  return (
    <div className="flex items-center gap-3">
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-panel-2"
        style={{ color: skill.color }}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="truncate text-xs font-semibold tracking-wide text-foreground/90">
            {skill.label}
          </span>
          <span className="text-xs font-bold tabular-nums" style={{ color: skill.color }}>
            {skill.pct}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full border border-border bg-background/70">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 * idx, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color} 70%, rgba(255,255,255,0.4))`,
              boxShadow: `0 0 10px ${skill.color}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function SkillsCard() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="panel panel-glow p-5 transition md:p-6"
    >
      <AnimatedTitle 
        title="My Skills" 
        subtitle="Weaponry of Choice"
        Icon={Zap} 
        color="var(--gold)"
      />
      <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
        {skills.map((s, i) => (
          <SkillBar key={s.label} skill={s} idx={i} />
        ))}
      </div>

    </motion.section>
  );
}
