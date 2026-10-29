"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLenis } from "@/components/smooth-scroll";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ServicesMenu from "@/components/servicesmenu";
import ClientReviews from "@/components/ClientReviews";
import InstagramSection from "@/components/InstagramSection";
import AboutUs from "@/components/about";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

const exconWeights = [
  { name: "Thin", weight: "font-thin", value: "100" },
  { name: "Light", weight: "font-light", value: "300" },
  { name: "Regular", weight: "font-normal", value: "400" },
  { name: "Medium", weight: "font-medium", value: "500" },
  { name: "Bold", weight: "font-bold", value: "700" },
  { name: "Black", weight: "font-black", value: "900" },
];

export default function Home() {
  const lenis = useLenis();
  const gsapBoxRef = useRef<HTMLDivElement>(null);
  const gsapTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!gsapBoxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(gsapBoxRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 8,
        ease: "none",
      });

      if (gsapTextRef.current) {
        gsap.fromTo(
          gsapTextRef.current,
          { opacity: 0.3, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id, { offset: -40, duration: 1.4 });
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <Hero />
      <ServicesMenu />
      <ClientReviews />
      <InstagramSection />
      <AboutUs />
      <AppointmentSection />
      <Footer />
    </>
  );
}
