"use client";

import { motion } from "framer-motion";
import { Send, Rocket, Target, Cpu, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  projectType: z.enum(["web", "app", "design", "consult"]),
  message: z.string().min(10, "Tell me a bit more about your project"),
});

type FormData = z.infer<typeof formSchema>;

export function HireMeSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { projectType: "web" }
  });

  const selectedType = watch("projectType");

  const onSubmit = async (data: FormData) => {
    setIsSending(true);
    
    // Simulate encryption and secure transmission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSending(false);
    setIsSubmitted(true);
    toast.success("Mission Briefing Received! I'll contact you soon.");
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="mx-auto max-w-[1400px] py-12">
      <div className="relative overflow-visible">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gold/10 blur-[80px]" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-accent/10 blur-[80px]" />

        {/* Anime Speed Lines Background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] z-0 overflow-hidden" 
             style={{ backgroundImage: "linear-gradient(45deg, transparent 48%, #fff 50%, transparent 52%)", backgroundSize: "60px 60px" }} />
        
        {/* Floating Cartoon SFX */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-6 left-[20%] z-20 hidden lg:block bg-orange-glow border-2 border-black px-3 py-1 font-display text-xs text-black shadow-[4px_4px_0_0_#000] skew-x-[-10deg]"
        >
          CLICK!
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[10%] -left-8 z-20 hidden lg:block bg-cyan-accent border-2 border-black px-3 py-1 font-display text-xs text-black shadow-[4px_4px_0_0_#000] rotate-[-15deg]"
        >
          ZOOM!
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Branding/Mission */}
          <div className="lg:col-span-5 flex flex-col justify-center p-8 panel bg-panel-2/50 backdrop-blur-md border-2 border-gold/20 shadow-glow-gold">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-gold shadow-[4px_4px_0_0_#000]">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] text-foreground">
                INITIATE <br />
                <span className="text-gold text-stroke-comic">MISSION</span> <br />
                <span className="text-cyan-accent">BRIEFING</span>
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm">
                Ready to deploy your next digital masterpiece? Fill out the coordinates and let&apos;s launch.
              </p>


              <div className="space-y-4 pt-4 border-t border-border/40">
                {[
                  { icon: Cpu, text: "Architecture Planning", color: "text-gold" },
                  { icon: Rocket, text: "Rapid Deployment", color: "text-cyan-accent" },
                  { icon: CheckCircle2, text: "Quality Assurance", color: "text-purple-accent" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-xs font-bold tracking-widest text-foreground/80 uppercase">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7 panel relative overflow-hidden bg-background border-2 border-black shadow-[12px_12px_0_0_#000]">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80">Agent Name</label>
                  <input
                    {...register("name")}
                    placeholder="ENTER NAME..."
                    className="w-full bg-panel-2 border-2 border-border/40 p-4 font-display text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-muted-foreground/30"
                  />
                  {errors.name && <p className="text-[10px] text-orange-glow font-bold uppercase">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80">Secure Email</label>
                  <input
                    {...register("email")}
                    placeholder="EMAIL@PROTO.COL"
                    className="w-full bg-panel-2 border-2 border-border/40 p-4 font-display text-sm focus:border-cyan-accent focus:outline-none transition-colors placeholder:text-muted-foreground/30"
                  />
                  {errors.email && <p className="text-[10px] text-orange-glow font-bold uppercase">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80">Mission Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: "web", label: "WEB DEV" },
                    { id: "app", label: "APP DEV" },
                    { id: "design", label: "UI DESIGN" },
                    { id: "consult", label: "CONSULT" },
                  ].map((type) => (
                    <label 
                      key={type.id}
                      className={`cursor-pointer group relative p-3 border-2 transition-all text-center rounded-md ${
                        selectedType === type.id 
                        ? "bg-gold border-black text-black scale-95" 
                        : "bg-panel-2 border-border/40 text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      <input type="radio" {...register("projectType")} value={type.id} className="hidden" />
                      <span className="text-[10px] font-black tracking-widest">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80">Project Intel</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="DESCRIBE THE OBJECTIVE..."
                  className="w-full bg-panel-2 border-2 border-border/40 p-4 font-display text-sm focus:border-purple-accent focus:outline-none transition-colors placeholder:text-muted-foreground/30 resize-none"
                />
                {errors.message && <p className="text-[10px] text-orange-glow font-bold uppercase">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-md border-2 border-black bg-gold py-5 transition-transform active:scale-[0.98]"
              >
                <div className="relative z-10 flex items-center justify-center gap-3 font-display text-lg tracking-tighter text-black">
                  {isSending ? (
                    <>
                      <Cpu className="h-6 w-6 animate-spin" />
                      ENCRYPTING...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="h-6 w-6 animate-bounce" />
                      BRIEFING RECEIVED
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      LAUNCH MISSION
                    </>
                  )}
                </div>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </form>

            {/* Aesthetic grid overlay */}
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />
            
            {/* Manga Style Impact Corners */}
            <div className="absolute top-0 right-0 h-16 w-16 border-t-4 border-r-4 border-gold z-0 opacity-40" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-b-4 border-l-4 border-cyan-accent z-0 opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
