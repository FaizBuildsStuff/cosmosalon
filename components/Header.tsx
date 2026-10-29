"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Sparkles,
  Scissors,
  Crown,
  Gem,
  CheckCircle2,
  ArrowUpRight,
  Menu,
  Flame,
  ChevronDown
} from "lucide-react";

// Shadcn UI Primitives
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
      {/* ----------------- iOS-GRADE FROSTED GLASS HEADER ----------------- */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/75 backdrop-blur-2xl border-b border-neutral-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] py-3.5"
            : "bg-white/50 backdrop-blur-xl border-b border-neutral-100/80 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Minimalist Architectural Typography */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-excon font-semibold tracking-[0.24em] text-neutral-950 group-hover:text-amber-600 transition duration-300">
                  COSMO
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
              <span className="text-[8px] font-excon font-medium tracking-[0.4em] text-neutral-400 uppercase">
                Luxury Salon
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Clean, Not Bold) */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                
                <NavigationMenuItem>
                  <a
                    href="#"
                    className={`${navigationMenuTriggerStyle()} text-xs uppercase tracking-[0.16em] font-excon font-medium text-neutral-700 hover:text-neutral-950 bg-transparent hover:bg-neutral-100/60 rounded-full px-4.5 transition duration-200`}
                  >
                    Home
                  </a>
                </NavigationMenuItem>

                {/* Services Megamenu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs uppercase tracking-[0.16em] font-excon font-medium text-neutral-700 hover:text-neutral-950 bg-transparent hover:bg-neutral-100/60 rounded-full px-4.5 transition duration-200">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-6 w-[780px] grid-cols-3 bg-white/95 backdrop-blur-2xl border border-neutral-200/80 shadow-2xl rounded-2xl font-excon">
                      
                      {/* Hair Craft */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-neutral-950 font-excon font-semibold text-xs tracking-wider uppercase border-b border-neutral-100 pb-2.5">
                          <Scissors className="w-4 h-4 text-amber-600" />
                          <span>Hair Craft</span>
                        </div>
                        <ul className="space-y-2.5 text-xs text-neutral-600 font-normal">
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Balayage & Couture Color</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Organic Keratin Treatment</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Signature Hair Botox</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Precision Styling & Cut</li>
                        </ul>
                      </div>

                      {/* Skin & Aesthetics */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-neutral-950 font-excon font-semibold text-xs tracking-wider uppercase border-b border-neutral-100 pb-2.5">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span>Skin & Derma</span>
                        </div>
                        <ul className="space-y-2.5 text-xs text-neutral-600 font-normal">
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Medical HydraFacial MD®</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Derma Collagen Renewal</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Brightening Peel Therapy</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Anti-Aging Cell Detox</li>
                        </ul>
                      </div>

                      {/* Bridal Lounges */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-neutral-950 font-excon font-semibold text-xs tracking-wider uppercase border-b border-neutral-100 pb-2.5">
                          <Crown className="w-4 h-4 text-amber-600" />
                          <span>Bridal & Groom</span>
                        </div>
                        <ul className="space-y-2.5 text-xs text-neutral-600 font-normal">
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Couture Bridal Makeup</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Groom Executive Grooming</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">Pre-Wedding Spa Package</li>
                          <li className="hover:text-neutral-950 hover:translate-x-1 cursor-pointer transition">HD Party Makeup</li>
                        </ul>
                      </div>

                      {/* Bottom Offer Strip */}
                      <div className="col-span-3 bg-neutral-50/80 rounded-xl p-3 border border-neutral-100 flex items-center justify-between">
                        <span className="text-[11px] text-neutral-600 font-normal flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Official L'Oréal & Dermalogica partner salon.
                        </span>
                        <a href="#" className="text-xs font-medium tracking-wider text-amber-600 hover:underline flex items-center gap-1">
                          Explore Full Menu <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a
                    href="#"
                    className={`${navigationMenuTriggerStyle()} text-xs uppercase tracking-[0.16em] font-excon font-medium text-neutral-700 hover:text-neutral-950 bg-transparent hover:bg-neutral-100/60 rounded-full px-4.5 transition duration-200 flex items-center gap-1.5`}
                  >
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    Deals & Offers
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a
                    href="#"
                    className={`${navigationMenuTriggerStyle()} text-xs uppercase tracking-[0.16em] font-excon font-medium text-neutral-700 hover:text-neutral-950 bg-transparent hover:bg-neutral-100/60 rounded-full px-4.5 transition duration-200`}
                  >
                    Branches
                  </a>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Action CTA: Aceternity UI Magic Shimmer Button */}
          <div className="flex items-center gap-3">
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger
                render={
                  <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F59E0B_0%,#171717_50%,#F59E0B_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-5 text-xs font-medium text-white backdrop-blur-3xl tracking-[0.14em] uppercase transition duration-300 hover:bg-neutral-900 gap-2">
                      <CalendarDays className="w-3.5 h-3.5 text-amber-400" />
                      <span>Book Appointment</span>
                    </span>
                  </button>
                }
              />

              <DialogContent className="sm:max-w-md bg-white border border-neutral-200 font-excon rounded-2xl shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="font-excon font-semibold text-xl text-neutral-950 tracking-tight">
                    Reserve Your Experience
                  </DialogTitle>
                  <DialogDescription className="text-xs text-neutral-500 font-normal">
                    Select your preferred branch to lock in your 20% online booking discount.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium tracking-wider text-neutral-600">Full Name</label>
                    <input type="text" placeholder="Enter your full name" className="w-full h-10 px-3 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-neutral-950 font-normal bg-neutral-50/50" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium tracking-wider text-neutral-600">Phone Number</label>
                    <input type="tel" placeholder="+92 300 0000000" className="w-full h-10 px-3 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-neutral-950 font-normal bg-neutral-50/50" />
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold tracking-wider text-xs h-11 rounded-xl">
                    Confirm VIP Booking
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Sheet Trigger */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger
                  render={
                    <Button variant="outline" size="icon" className="h-9 w-9 border-neutral-200 text-neutral-950 rounded-full bg-neutral-50">
                      <Menu className="w-4 h-4" />
                    </Button>
                  }
                />
                <SheetContent side="right" className="bg-white border-l border-neutral-200 w-80 font-excon">
                  <SheetHeader className="text-left border-b border-neutral-100 pb-4">
                    <SheetTitle className="font-excon font-semibold tracking-wider text-lg text-neutral-950">
                      COSMO SALON
                    </SheetTitle>
                  </SheetHeader>
                  <div className="py-6 space-y-4 text-sm font-medium tracking-wide text-neutral-800">
                    <a href="#" className="block hover:text-neutral-950 transition">Home</a>
                    <Separator className="bg-neutral-100" />
                    <a href="#" className="block hover:text-neutral-950 transition">Services Menu</a>
                    <Separator className="bg-neutral-100" />
                    <a href="#" className="block hover:text-neutral-950 transition">Deals & Offers</a>
                    <Separator className="bg-neutral-100" />
                    <a href="#" className="block hover:text-neutral-950 transition">Lahore Branches</a>
                    
                    <div className="pt-6">
                      <Button className="w-full bg-neutral-950 text-white font-medium text-xs tracking-wider h-11 rounded-full">
                        <CalendarDays className="w-4 h-4 mr-2 text-amber-400" />
                        Book Appointment
                      </Button>
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
