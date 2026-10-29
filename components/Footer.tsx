
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

function FacebookIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Men Deals", href: "https://cosmosalon.pk/men-deals/" },
  { label: "Women Deals", href: "https://cosmosalon.pk/women-deals/" },
  { label: "Services for Men", href: "https://cosmosalon.pk/services-men/" },
  { label: "Services for Women", href: "https://cosmosalon.pk/service-women/" },
  {
    label: "Terms & Conditions",
    href: "https://cosmosalon.pk/refund_returns/",
  },
  {
    label: "Privacy Policy",
    href: "https://cosmosalon.pk/privacy-policy-for-cosmo-salon/",
  },
];

const locations = [
  "Defence J Block, Lahore",
  "Defence Y Block, Lahore",
  "Johar Town PIA Road, Lahore",
  "28-B, Block C/II, MM Alam Road, Gulberg III, Lahore",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/CosmoLHR?_rdc=1&_rdr",
    Icon: FacebookIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/CosmoLHR",
    Icon: TwitterIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cosmo_salon_lhr",
    Icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/channel/UCPaGbdYZgK_M0uMIcsECVxg",
    Icon: YoutubeIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@cosmosalon01",
    Icon: ArrowUpRight,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b0b0b] text-white">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Top CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: "easeOut" },
            },
          }}
          className="flex flex-col gap-7 border-b border-white/10 py-12 sm:py-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/65">
              <Sparkles size={12} />
              Your style, our craft
            </div>

            <h2 className="text-3xl font-light leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Make time for{" "}
              <span className="font-medium text-white/55">yourself.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/50 sm:text-base">
              Exceptional care, thoughtful details, and a look that feels like
              you.
            </p>
          </div>

          <Link
            href="/appointment"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/85"
          >
            Book an appointment
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Main footer columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-12 lg:gap-12 lg:py-16"
        >
          {/* Brand */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <Link href="/" aria-label="Cosmo Salon home" className="inline-block">
              <span className="text-3xl font-semibold tracking-[0.24em] sm:text-4xl">
                COSMO
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.55em] text-white/45">
                Salon · Lahore
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              A space to refresh your look, unwind, and feel your best. Visit
              COSMO SALON at one of our Lahore locations.
            </p>

            <a
              href="tel:03450084262"
              className="mt-6 inline-flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Phone size={15} />
              </span>
              0345 0084262
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
              Contact
            </h3>

            <ul className="space-y-5">
              {locations.map((location) => (
                <li key={location} className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="mt-0.5 shrink-0 text-white/35"
                  />
                  <span className="text-sm leading-6 text-white/50 transition-colors hover:text-white/80">
                    {location}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
              Follow Us
            </h3>

            <p className="mb-5 text-sm leading-6 text-white/45">
              Stay connected for the latest from COSMO.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow COSMO on ${label}`}
                  title={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <Icon size={16} strokeWidth={1.7} />
                </a>
              ))}
            </div>

            <p className="mt-5 text-xs text-white/35">
              Beauty. Style. Confidence.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} COSMO SALON. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="https://cosmosalon.pk/privacy-policy-for-cosmo-salon/"
              className="transition-colors hover:text-white/80"
            >
              Privacy
            </a>
            <a
              href="https://cosmosalon.pk/refund_returns/"
              className="transition-colors hover:text-white/80"
            >
              Terms
            </a>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
