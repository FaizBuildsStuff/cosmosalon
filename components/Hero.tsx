"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ArrowUpRight, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// ----------------- ACETERNITY UI primitive: Background Beams -----------------
export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-amber-300/5 to-transparent rounded-full blur-3xl opacity-70" />
    </div>
  );
};

export default function HeroSection() {
  const [salonMode, setSalonMode] = useState<"women" | "men">("women");

  return (
    <section className="relative min-h-[88vh] w-full flex items-center justify-center overflow-hidden bg-neutral-950 font-excon text-white">
      
      {/* ----------------- ACETERNITY BEAMS & CINEMATIC BACKGROUND ----------------- */}
      <BackgroundBeams />

      <AnimatePresence mode="wait">
        <motion.div
          key={salonMode}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 mix-blend-luminosity"
          style={{
            backgroundImage: `url(${
              salonMode === "women"
                ? "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
                : "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920"
            })`,
          }}
        />
      </AnimatePresence>

      {/* Restored Rich Cinematic Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/80" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/40 to-neutral-950" />

      {/* ----------------- STREAMLINED HERO CONTENT ----------------- */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8 py-12">
        
        {/* Aceternity Animated Gender Selector Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center p-1 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl"
        >
          <button
            onClick={() => setSalonMode("women")}
            className={cn(
              "px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300",
              salonMode === "women"
                ? "bg-white text-neutral-950 shadow-md font-bold"
                : "text-neutral-400 hover:text-white"
            )}
          >
            Haute Beauté
          </button>
          <button
            onClick={() => setSalonMode("men")}
            className={cn(
              "px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300",
              salonMode === "men"
                ? "bg-white text-neutral-950 shadow-md font-bold"
                : "text-neutral-400 hover:text-white"
            )}
          >
            Executive Lounge
          </button>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-excon font-bold tracking-tight text-white leading-[1.08]">
            {salonMode === "women" ? (
              <>
                Lahore's Elite <span className="font-serif italic text-amber-400 font-normal">Couture</span> Hair & Beauty.
              </>
            ) : (
              <>
                Executive <span className="font-serif italic text-amber-400 font-normal">Grooming</span> & Hair Craft.
              </>
            )}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-lg mx-auto tracking-wide leading-relaxed">
            {salonMode === "women"
              ? "Master balayage, organic hair treatments, and clinical skincare across 5 luxury Lahore branches."
              : "Precision haircuts, beard sculpting, and executive facial treatments for gentlemen."}
          </p>
        </motion.div>

        {/* Dual CTAs (Aceternity UI Shimmer Button) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          {/* Aceternity Shimmer CTA */}
          <button className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D97706_0%,#171717_50%,#D97706_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 text-xs font-medium text-white backdrop-blur-3xl tracking-[0.2em] uppercase transition duration-300 hover:bg-neutral-900 gap-2.5">
              <CalendarDays className="w-4 h-4 text-amber-400" />
              <span>Book Appointment</span>
            </span>
          </button>

        </motion.div>

        {/* Minimalist Micro Proof Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6 flex items-center justify-center gap-6 text-[11px] text-neutral-400 font-light"
        >
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-white font-medium">4.9 / 5.0 Rating</span>
          </div>
          <span className="text-neutral-800">•</span>
          <span>5 Lahore Branches</span>
          <span className="text-neutral-800">•</span>
          <span className="text-amber-400 font-medium">20% OFF Online</span>
        </motion.div>

      </div>
    </section>
  );
}