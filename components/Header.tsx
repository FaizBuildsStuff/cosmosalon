"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  ArrowUpRight,
  CalendarDays,
  Phone,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-excon sticky top-0 z-50 w-full">
      {/* ----------------- PURE iOS FROSTED OBSIDIAN GLASS HEADER ----------------- */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#060606]/85 backdrop-blur-2xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/60"
            : "bg-[#060606]/65 backdrop-blur-xl border-b border-white/[0.05] py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Pure Architectural "COSMO" */}
          <Link href="/" className="flex flex-col group focus:outline-none shrink-0">
            <span className="text-lg sm:text-2xl font-light tracking-[0.28em] text-white transition-opacity duration-200 group-hover:opacity-80">
              COSMO
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] font-light tracking-[0.45em] text-neutral-400 uppercase -mt-0.5">
              Salon · Lahore
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-light text-neutral-400">
            <a
              href="#services"
              className="px-4 py-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              Services
            </a>
            <a
              href="#appointment"
              className="px-4 py-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              Lounges
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              Atelier
            </a>
            <a
              href="#reviews"
              className="px-4 py-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              Reviews
            </a>
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Pure Luxury White Pill Button */}
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger
                render={
                  <button className="inline-flex h-8 sm:h-10 items-center justify-center rounded-full bg-white text-black hover:bg-neutral-200 font-medium text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.16em] uppercase px-3.5 sm:px-6 transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-xs">
                    <span className="hidden sm:inline">Book Appointment</span>
                    <span className="sm:hidden">Book</span>
                  </button>
                }
              />

              <DialogContent className="sm:max-w-md bg-[#0a0a0a] border border-white/10 font-excon rounded-2xl shadow-2xl text-white">
                <DialogHeader>
                  <DialogTitle className="font-light text-xl text-white tracking-tight">
                    Reserve Your Appointment
                  </DialogTitle>
                  <DialogDescription className="text-xs text-neutral-400 font-light">
                    Select your preferred Lahore branch and services.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-light tracking-wider text-neutral-300">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full h-10 px-3 text-xs border border-white/10 rounded-xl focus:outline-none focus:border-white/30 bg-neutral-900 text-white placeholder:text-neutral-500 font-light"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-light tracking-wider text-neutral-300">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      className="w-full h-10 px-3 text-xs border border-white/10 rounded-xl focus:outline-none focus:border-white/30 bg-neutral-900 text-white placeholder:text-neutral-500 font-light"
                    />
                  </div>
                  <a
                    href="#appointment"
                    onClick={() => setIsBookingOpen(false)}
                    className="w-full inline-flex items-center justify-center bg-white hover:bg-neutral-200 text-black font-medium tracking-wider text-xs h-11 rounded-xl transition duration-200"
                  >
                    Continue to Booking Step
                  </a>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Sheet Trigger - iOS Glass Menu Button */}
            <div className="md:hidden">
              <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 sm:h-9 sm:w-9 border-white/10 text-white rounded-full bg-white/[0.06] backdrop-blur-xl hover:bg-white/[0.12] transition-colors"
                      aria-label="Open menu"
                    >
                      <Menu className="w-4 h-4" />
                    </Button>
                  }
                />
                
                {/* ----------------- IMPRESSIVE iOS LUXURY MOBILE DRAWER ----------------- */}
                <SheetContent
                  side="right"
                  className="bg-[#080808]/95 backdrop-blur-3xl border-l border-white/10 w-[88vw] max-w-sm font-excon text-white p-6 flex flex-col justify-between overflow-y-auto"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <SheetHeader className="text-left border-b border-white/[0.08] pb-5">
                      <div className="flex flex-col">
                        <SheetTitle className="font-light tracking-[0.28em] text-xl text-white">
                          COSMO
                        </SheetTitle>
                        <span className="text-[8px] font-light tracking-[0.45em] text-neutral-400 uppercase">
                          Luxury Salon · Lahore
                        </span>
                      </div>
                    </SheetHeader>

                    {/* Curated Navigation Destinations with iOS Aesthetics */}
                    <div className="space-y-2 pt-1">
                      <a
                        href="#services"
                        onClick={() => setIsMobileOpen(false)}
                        className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-200"
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs uppercase tracking-[0.18em] text-white font-medium">
                            Services Menu
                          </p>
                          <p className="text-[11px] text-neutral-400 font-light">
                            Bridal, balayage, HydraFacial & grooming
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>

                      <a
                        href="#appointment"
                        onClick={() => setIsMobileOpen(false)}
                        className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-200"
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs uppercase tracking-[0.18em] text-white font-medium">
                            Lahore Lounges
                          </p>
                          <p className="text-[11px] text-neutral-400 font-light">
                            MM Alam · DHA Phase 3 · Johar Town
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>

                      <a
                        href="#about"
                        onClick={() => setIsMobileOpen(false)}
                        className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-200"
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs uppercase tracking-[0.18em] text-white font-medium">
                            The Atelier
                          </p>
                          <p className="text-[11px] text-neutral-400 font-light">
                            Our philosophy & master artists
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>

                      <a
                        href="#reviews"
                        onClick={() => setIsMobileOpen(false)}
                        className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-200"
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs uppercase tracking-[0.18em] text-white font-medium">
                            Client Reviews
                          </p>
                          <p className="text-[11px] text-neutral-400 font-light">
                            4.9 ★ Rating across Lahore
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Drawer Footer Actions */}
                  <div className="pt-6 space-y-3 border-t border-white/[0.08]">
                    <a
                      href="#appointment"
                      onClick={() => setIsMobileOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-wider uppercase h-11 rounded-full transition shadow-md shadow-white/5"
                    >
                      <CalendarDays className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </a>

                    <a
                      href="https://wa.me/923450084262"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] text-xs font-light tracking-wider h-10 rounded-full transition"
                    >
                      <Phone className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Concierge: 0345 0084262</span>
                    </a>

                    <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-neutral-400 font-light">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>All 4 Lahore Lounges Open Today</span>
                    </div>
                  </div>

                </SheetContent>
              </Sheet>
            </div>

          </div>

        </div>
      </header>
    </div>
  );
}
