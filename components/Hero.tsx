"use client";

import React from "react";
import { CalendarDays, ArrowUpRight, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] w-full flex items-center justify-center overflow-hidden bg-[#060606] font-excon text-white">
      
      {/* ----------------- VIVID AESTHETIC BRIDAL BACKGROUND (MATCHING FOOTER) ----------------- */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-65 sm:opacity-75 transition-transform duration-1000 ease-out hover:scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=2400&q=85')",
        }}
      />

      {/* iOS Soft Ambient Vignettes - Keeps bride vivid while text is effortlessly readable */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#060606] via-[#060606]/45 to-[#060606]/70 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#060606]/30 to-[#060606]/80 pointer-events-none" />

      {/* ----------------- CLEAN MINIMALIST CONTENT (MONOCHROME LUXURY) ----------------- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 py-16 sm:py-20">
        
        {/* Subtle iOS Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-xl text-[10px] tracking-[0.22em] uppercase text-neutral-300">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>Cosmo Salon · Lahore</span>
        </div>

        {/* Understandable, Elegant Headline - Pure White */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08]">
          Exceptional hair & bridal beauty,{" "}
          <span className="font-serif italic font-normal text-white/90">
            crafted for you.
          </span>
        </h1>

        {/* Clear, Understandable Subtitle */}
        <p className="text-sm sm:text-base text-neutral-300 font-light max-w-lg mx-auto leading-relaxed">
          Signature bridal glam, master balayage, and clinical skincare across four convenient Lahore locations.
        </p>

        {/* iOS-grade Simple Actions - Crisp White Luxury Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href="#appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-medium text-xs uppercase tracking-[0.16em] px-8 py-3.5 sm:py-4 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-white/5"
          >
            <CalendarDays className="w-4 h-4 text-black" />
            <span>Book Appointment</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-xl text-white text-xs uppercase tracking-[0.16em] px-7 py-3.5 sm:py-4 transition duration-200"
          >
            <span>View Services</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
          </a>
        </div>

        {/* Understated Location Line */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-neutral-400 font-light">
          <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span>MM Alam Road · DHA Phase 3 · Defence · Johar Town</span>
        </div>

      </div>

    </section>
  );
}
