"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#060606] text-neutral-300 font-excon overflow-hidden border-t border-white/10">
      {/* ----------------- VIVID EDITORIAL BRIDAL PHOTOGRAPHY ----------------- */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-[center_right_15%] opacity-65 sm:opacity-75 pointer-events-none transition-transform duration-700 ease-out hover:scale-[1.01]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=2400&q=85')",
        }}
      />
      {/* iOS Directional Gradient - Smooth fade to solid dark on content side */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060606] via-[#060606]/85 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/60 pointer-events-none" />

      {/* ----------------- iOS MINIMALIST CONTENT (MONOCHROME LUXURY) ----------------- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand Column - Pure COSMO Typography */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex flex-col group focus:outline-none">
              <span className="text-2xl sm:text-3xl font-light tracking-[0.28em] text-white transition-opacity duration-200 group-hover:opacity-80">
                COSMO
              </span>
              <span className="text-[9px] font-light tracking-[0.45em] text-neutral-400 uppercase -mt-0.5">
                Salon · Lahore
              </span>
            </Link>

            <p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
              Couture bridal styling, precision hair craft, and medical aesthetics across four Lahore lounges.
            </p>

            <div className="pt-1">
              <a
                href="https://wa.me/923450084262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition group"
              >
                <span>Concierge & Appointments: +92 345 0084262</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Minimalist Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Services */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Services
              </p>
              <ul className="space-y-3 text-xs text-neutral-300 font-light">
                <li>
                  <a href="#appointment" className="hover:text-white transition">Couture Bridal</a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-white transition">Balayage & Color</a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-white transition">Signature Hair Botox</a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-white transition">HydraFacial MD®</a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-white transition">Groom Styling</a>
                </li>
              </ul>
            </div>

            {/* Lounges */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Lahore Lounges
              </p>
              <ul className="space-y-3 text-xs text-neutral-300 font-light">
                <li className="cursor-default">
                  <span className="block text-white font-normal">MM Alam Road</span>
                  <span className="text-[11px] text-neutral-400">Gulberg III</span>
                </li>
                <li className="cursor-default">
                  <span className="block text-white font-normal">DHA Phase 3</span>
                  <span className="text-[11px] text-neutral-400">Sector Y</span>
                </li>
                <li className="cursor-default">
                  <span className="block text-white font-normal">Defence</span>
                  <span className="text-[11px] text-neutral-400">J-Block Market</span>
                </li>
                <li className="cursor-default">
                  <span className="block text-white font-normal">Johar Town</span>
                  <span className="text-[11px] text-neutral-400">Main PIA Road</span>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Connect
              </p>
              <ul className="space-y-3 text-xs text-neutral-300 font-light">
                <li>
                  <a
                    href="https://www.instagram.com/cosmo_salon_lhr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1 group"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.facebook.com/CosmoLHR?_rdc=1&_rdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1 group"
                  >
                    <span>Facebook</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/channel/UCPaGbdYZgK_M0uMIcsECVxg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1 group"
                  >
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@cosmosalon01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1 group"
                  >
                    <span>TikTok</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* ----------------- iOS MINIMALIST BOTTOM BAR ----------------- */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-neutral-400 font-light">
          <p>© {new Date().getFullYear()} COSMO SALON. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              11:00 AM – 10:00 PM Daily
            </span>
            <span>·</span>
            <span className="text-neutral-400">Lahore, Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
