"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";
import { useState } from "react";

const faqs = [
  {
    question: "How do you ensure high-quality work?",
    answer: "I follow industry standards, use professional-grade tools, and maintain a strong attention to detail in every project, delivering polished results that match each client’s goals."
  },
  {
    question: "What industries and clients have you worked with?",
    answer: "I’ve collaborated with a diverse range of clients — from startups to established brands — delivering design, web, video, and marketing solutions they trust."
  },
  {
    question: "Do you work independently or as part of a team?",
    answer: "Both. I thrive leading teams and working alongside them. In my last three positions, I’ve successfully led design and marketing teams, mentoring talent and driving projects to completion. At the same time, I’m equally comfortable contributing as a team member under another leader’s direction."
  },
  {
    question: "What makes you a good team player?",
    answer: "Clear communication, openness to feedback, and a collaborative attitude – I value the team’s success as much as my own and help wherever I can."
  },
  {
    question: "How do you approach client feedback?",
    answer: "I listen carefully, take feedback on board, and iterate to align the project with client expectations while maintaining creative and technical excellence."
  },
  {
    question: "Have you handled large or complex projects?",
    answer: "Yes. I have successfully managed long-term, multi-faceted projects, breaking them into clear phases to deliver quality on time and on brief."
  },
  {
    question: "Why do clients trust you?",
    answer: "Clients appreciate my reliability, my commitment to their goals, and my ability to translate their vision into effective, polished design and marketing solutions."
  },
  {
    question: "If you build agency, why apply for an in-house role?",
    answer: "I want to focus my energy on one team and one product, but at the same time I have been building side-projects for over 4-5 years. I love to build products. I thrive when multi-tasking and when I work on multiple platforms. An in-house role lets me do that every day."
  }
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void }) {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`panel-glow w-full text-left transition-all duration-300 ${
          isOpen ? "bg-panel-2 border-gold shadow-glow-gold" : "bg-panel border-border/40"
        } rounded-lg border-2 p-5 flex items-center justify-between gap-4 group`}
      >
        <span className="font-display text-sm md:text-base tracking-wide text-foreground group-hover:text-gold transition-colors">
          {faq.question.toUpperCase()}
        </span>
        <div className={`shrink-0 grid place-items-center h-8 w-8 rounded-md border-2 border-black bg-background shadow-[2px_2px_0_0_#000] transition-transform ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? <Minus className="h-4 w-4 text-gold" /> : <Plus className="h-4 w-4 text-cyan-accent" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-2 text-sm text-muted-foreground leading-relaxed border-x-2 border-b-2 border-gold/30 rounded-b-lg bg-gold/5 mx-2">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-[1400px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />
      <div className="panel p-6 md:p-10 relative overflow-visible">
        <AnimatedTitle 
          title="Frequently Asked Questions" 
          subtitle="Curiosity didn't kill the dev — it built the product."
          Icon={HelpCircle} 
          color="var(--gold)"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          <div className="flex flex-col">
            {faqs.slice(0, 4).map((faq, i) => (
              <FAQItem 
                key={i} 
                faq={faq} 
                isOpen={openIndex === i} 
                onClick={() => setOpenIndex(openIndex === i ? null : i)} 
              />
            ))}
          </div>
          <div className="flex flex-col">
            {faqs.slice(4).map((faq, i) => (
              <FAQItem 
                key={i + 4} 
                faq={faq} 
                isOpen={openIndex === i + 4} 
                onClick={() => setOpenIndex(openIndex === i + 4 ? null : i + 4)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
