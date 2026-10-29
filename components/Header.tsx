"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-excon sticky top-0 z-50 w-full">
      {/* ----------------- PURE iOS MINIMALIST GLASS HEADER ----------------- */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#060606]/85 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50"
            : "bg-[#060606]/65 backdrop-blur-xl border-b border-white/[0.05] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Pure "COSMO" Typography, No Cheap Badges */}
          <Link href="/" className="flex flex-col group focus:outline-none">
            <span className="text-xl sm:text-2xl font-light tracking-[0.28em] text-white transition-opacity duration-200 group-hover:opacity-80">
              COSMO
            </span>
            <span className="text-[8px] font-light tracking-[0.45em] text-neutral-400 uppercase -mt-0.5">
              Salon · Lahore
            </span>
          </Link>

          {/* Desktop Navigation Links (Understated, Architectural) */}
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
          <div className="flex items-center gap-3">
            
            {/* Pure Luxury White Pill Button */}
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger
                render={
                  <button className="inline-flex h-9 sm:h-10 items-center justify-center rounded-full bg-white text-black hover:bg-neutral-200 font-medium text-[11px] tracking-[0.16em] uppercase px-5 sm:px-6 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                    Book Appointment
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

            {/* Mobile Sheet Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger
                  render={
                    <Button variant="outline" size="icon" className="h-9 w-9 border-white/10 text-white rounded-full bg-neutral-900/80 hover:bg-neutral-800">
                      <Menu className="w-4 h-4" />
                    </Button>
                  }
                />
                <SheetContent side="right" className="bg-[#090909] border-l border-white/10 w-80 font-excon text-white">
                  <SheetHeader className="text-left border-b border-white/10 pb-4">
                    <SheetTitle className="font-light tracking-[0.25em] text-lg text-white">
                      COSMO
                    </SheetTitle>
                  </SheetHeader>
                  <div className="py-6 space-y-4 text-xs font-light tracking-[0.2em] uppercase text-neutral-300">
                    <a href="#services" className="block hover:text-white transition py-1.5">Services</a>
                    <a href="#appointment" className="block hover:text-white transition py-1.5">Lounges</a>
                    <a href="#about" className="block hover:text-white transition py-1.5">Atelier</a>
                    <a href="#reviews" className="block hover:text-white transition py-1.5">Reviews</a>
                    
                    <div className="pt-6">
                      <a
                        href="#appointment"
                        className="w-full inline-flex items-center justify-center bg-white hover:bg-neutral-200 text-black font-medium text-xs tracking-wider uppercase h-11 rounded-full transition"
                      >
                        Book Appointment
                      </a>
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
