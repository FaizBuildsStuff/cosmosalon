
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Service = {
  name: string;
  detail?: string;
  prices: string[];
};

type ServiceSection = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  priceLabels: string[];
  rows: Service[];
};


const menSections: ServiceSection[] = [
  {
    id: "groom",
    title: "Groom Makeover Deals",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Professional groom styling",
    description:
      "Single-day wedding makeovers. Every makeover includes head wash, beard/shave, hair styling, and soft makeover.",
    priceLabels: ["Director", "Top Stylist", "Stylist"],
    rows: [
      {
        name: "Engagement Groom Makeover",
        detail: "Head wash, beard/shave, hair styling & soft makeover",
        prices: ["20,000", "6,000", "4,000"],
      },
      {
        name: "Nikkah Groom Makeover",
        detail: "Head wash, beard/shave, hair styling & soft makeover",
        prices: ["20,000", "6,000", "4,000"],
      },
      {
        name: "Mehndi / Mayon Groom Makeover",
        detail: "Head wash, beard/shave, hair styling & soft makeover",
        prices: ["20,000", "6,000", "4,000"],
      },
      {
        name: "Barat Groom Makeover",
        detail: "Head wash, beard/shave, hair styling & soft makeover",
        prices: ["20,000", "6,000", "4,000"],
      },
      {
        name: "Walima Groom Makeover",
        detail:
          "Includes head wash, beard/shave, hair styling, soft makeover; cleansing/facial on demand",
        prices: ["20,000", "6,000", "4,000"],
      },
    ],
  },
  {
    id: "packages",
    title: "Groom & Party Packages",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Men's grooming and styling",
    description:
      "Complete grooming packages for parties and wedding celebrations.",
    priceLabels: ["Price"],
    rows: [
      {
        name: "Men's Party Package (1 Day)",
        detail:
          "Hair cut, beard/shave, hair styling, head wash, face massage, nail buffing & makeover",
        prices: ["6,000"],
      },
      {
        name: "Groom Services (1 Day)",
        detail:
          "Hair cut, beard/shave, hair styling, head wash, glow facial, basic manicure, basic pedicure & makeup",
        prices: ["18,000"],
      },
      {
        name: "Groom Package (2 Days)",
        detail:
          "Both days include hair cut, beard/shave, styling, head wash, artistic glow facial, hair treatment, face wax/threading, executive manicure, executive pedicure & makeup",
        prices: ["22,000"],
      },
      {
        name: "Groom Package (3 Days)",
        detail:
          "Day 1: Full grooming, artistic glow facial, hair treatment, manicure, pedicure & makeup. Day 2: Deep cleansing, beard trim/shave, hair treatment, back/head massage & makeup. Day 3: Face exfoliation, beard trim/shave, body massage, hair styling & makeup",
        prices: ["30,000"],
      },
    ],
  },
  {
    id: "pre-services",
    title: "Groom Pre-Services",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Professional men's haircut",
    description:
      "Pre-event grooming packages for a polished, well-groomed look.",
    priceLabels: ["Price"],
    rows: [
      {
        name: "Executive Groom Pre-Services Package",
        detail:
          "Top Stylist hair cut with head wash, beard/shave, face wax/threading, skin polish, hair polish, executive manicure/pedicure & 15-minute neck and shoulder massage",
        prices: ["13,500"],
      },
      {
        name: "Luxury Groom Pre-Services Package",
        detail:
          "Signature hair cut, beard/shave, face wax/threading, skin-type brightening facial, luxury spa manicure/pedicure, one-shade hair dye, beard dye, hair protein treatment & 15-minute relaxing body massage",
        prices: ["20,000"],
      },
    ],
  },
  {
    id: "haircut",
    title: "Hair Cut & Styling",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Precision men's haircut",
    description: "Precision cuts and styling for every occasion.",
    priceLabels: ["Price"],
    rows: [
      {
        name: "Signature Hair Cut",
        detail: "Signature haircut and styling",
        prices: ["3,500"],
      },
      {
        name: "Styling / Basic Hair Cut",
        detail: "A clean, everyday haircut",
        prices: ["2,500"],
      },
      {
        name: "Signature Hair Styling",
        prices: ["1,200"],
      },
      {
        name: "Basic Styling",
        prices: ["2,500"],
      },
      {
        name: "Iron Styling",
        prices: ["1,000"],
      },
      {
        name: "Messy Look Styling",
        prices: ["1,000"],
      },
    ],
  },
  {
    id: "skin",
    title: "Skin, Facials & Hydra",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Professional facial treatment",
    description: "Facials and skin treatments tailored to your needs.",
    priceLabels: ["Price"],
    rows: [
      {
        name: "Rice Facial",
        prices: ["9,500"],
      },
      {
        name: "Coffee Facial",
        prices: ["12,500"],
      },
      {
        name: "Charcoal Facial",
        prices: ["10,500"],
      },
      {
        name: "Zafran Facial",
        prices: ["7,500"],
      },
      {
        name: "Luxury Hydra Skin Need (12 Steps)",
        detail: "12-step Hydra skin treatment",
        prices: ["7,000"],
      },
      {
        name: "Hydra Facial (7 Steps)",
        detail:
          "Includes a 15-minute electric-chair relaxing massage",
        prices: ["5,000"],
      },
    ],
  },
  {
    id: "manicure-pedicure",
    title: "Manicure & Pedicure",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Spa and grooming treatment",
    description: "Choose from herbal, aloe vera, fruity and premium treatments.",
    priceLabels: ["Price"],
    rows: [
      {
        name: "Herbal Manicure / Pedicure",
        prices: ["3,500"],
      },
      {
        name: "Aloe Vera Manicure / Pedicure",
        prices: ["3,650"],
      },
      {
        name: "Fruity Manicure / Pedicure",
        prices: ["2,500"],
      },
      {
        name: "Premium Manicure / Pedicure",
        prices: ["6,000"],
      },
    ],
  },
  {
    id: "haircolor",
    title: "Hair Deals & Treatments",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Professional hair coloring and treatment",
    description:
      "Special hair deals and customized smoothing and repair treatments.",
    priceLabels: ["Price"],
    rows: [
      {
        name: "Natural Hair Colour Deal (3-inch Hair)",
        detail:
          "All-in-one deal: natural hair colour dye, senior hair cut, shave or beard trim, shampoo, lemon polisher & sea mineral mask",
        prices: ["5,500"],
      },
      {
        name: "Keratin / Botox / Caviar / Keraplex",
        detail:
          "Customized hair treatment; top head price",
        prices: ["2,500"],
      },
      {
        name: "Brazilian Blow-Out / Coffee Premium Keratin / GK-Keratin",
        detail:
          "Customized hair treatment; full head price",
        prices: ["4,900"],
      },
    ],
  },
];


const womenSections: ServiceSection[] = [
  {
    id: "bridal",
    title: "Make-up & Bridals",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Elegant bridal beauty and makeup",
    description: "Beautifully considered looks for every occasion.",
    priceLabels: ["Signature", "Senior", "Available"],
    rows: [
      {
        name: "Engagement Makeup",
        detail:
          "Makeup, hair-do, dupatta & jewellery setting, hand and feet nail polish",
        prices: ["20,000", "15,000", "10,000"],
      },
      {
        name: "Nikkah Makeup Look",
        detail: "Elegant makeup for your Nikkah",
        prices: ["25,000", "18,000", "12,000"],
      },
      {
        name: "Mayon / Mehendi",
        detail: "Festive makeup and styling",
        prices: ["30,000", "22,000", "16,000"],
      },
      {
        name: "Barat Bridal Styling",
        detail: "Signature bridal styling for a one-day event",
        prices: ["55,000", "40,000", "30,000"],
      },
      {
        name: "Walima Makeup",
        detail: "Elegant reception bridal styling",
        prices: ["45,000", "35,000", "30,000"],
      },
      {
        name: "Shendi / Shalima Makeup",
        detail: "Complete event makeup and styling",
        prices: ["55,000", "40,000", "30,000"],
      },
      {
        name: "Soft Party Makeup",
        detail: "A soft, understated party look",
        prices: ["—", "7,000", "5,000"],
      },
      {
        name: "Glam Party Makeup",
        detail: "A glamorous occasion-ready look",
        prices: ["—", "10,000", "7,000"],
      },
    ],
  },
  {
    id: "prebridal",
    title: "Pre-Bridal Packages",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Luxury beauty preparation",
    description: "Thoughtful care before your special day.",
    priceLabels: ["Price"],
    rows: [
      {
        name: "Basic Executive Package",
        detail:
          "Face / Zolton facial, whitening manicure & pedicure, threading, full arms & legs wax, hair protein treatment",
        prices: ["15,000"],
      },
      {
        name: "Luxury Bridal Transformation",
        detail:
          "Signature facial, brightening spa manicure & pedicure, face wax / threading, full body wax & polish, face care and signature hair treatment",
        prices: ["25,000"],
      },
    ],
  },
  {
    id: "womenshair",
    title: "Hair Deals & Treatments",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Women's hair styling",
    description: "Modern colour and smooth, polished finishes.",
    priceLabels: ["Price"],
    rows: [
      {
        name: "Colour Fusion Deal",
        detail: "Ombre, balayage, highlights or lowlights",
        prices: ["15,000"],
      },
      {
        name: "Premium Keratin Treatment",
        detail:
          "Special offer · Frizz-free finish, long-lasting shine & silky-smooth hair",
        prices: ["7,555"],
      },
    ],
  },
  {
    id: "mehendi",
    title: "Mehendi Services",
    image:
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Traditional mehendi artistry",
    description: "Intricate artistry for intimate moments and celebrations.",
    priceLabels: ["Price"],
    rows: [
      { name: "Foot Side", prices: ["500"] },
      { name: "Finger Design / Bazu", prices: ["500"] },
      { name: "Full Side Wrist Mehendi", prices: ["1,000"] },
      { name: "Engagement / Nikkah Mehendi", prices: ["10,000"] },
      { name: "Bridal Mehendi (2 Sides & Feet)", prices: ["15,000"] },
      {
        name: "Bridal Mehendi (4 Sides & Feet)",
        detail: "Elbow-length bridal design",
        prices: ["18,000"],
      },
    ],
  },
  {
    id: "wax",
    title: "Wax Deals",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=85&w=900",
    imageAlt: "Professional salon care",
    description: "A considered selection of personal care services.",
    priceLabels: ["Price"],
    rows: [
      { name: "Full Arms", prices: ["1,600"] },
      { name: "Full Legs", prices: ["2,200"] },
      { name: "Half Arms", prices: ["800"] },
      { name: "Half Legs", prices: ["1,100"] },
      { name: "Full Face", prices: ["1,100"] },
      { name: "Full Back", prices: ["2,300"] },
      { name: "Hands / Feet Wax", detail: "Each", prices: ["800"] },
      { name: "Belly Wax", prices: ["1,200"] },
      { name: "Chest Wax", prices: ["850"] },
      { name: "Neck Wax", prices: ["500"] },
      { name: "Under Arms", prices: ["400"] },
      { name: "Under Legs", prices: ["2,500"] },
      { name: "Full Body Wax", prices: ["10,500"] },
    ],
  },
];


function PriceList({ section }: { section: ServiceSection }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      <div
        className="grid gap-2 border-b border-neutral-300 pb-2 text-[11px] font-bold uppercase tracking-wide text-neutral-600 sm:text-xs"
        style={{
          gridTemplateColumns: `minmax(0, 1fr) repeat(${section.priceLabels.length}, minmax(0, auto))`,
        }}
      >
        <span>Service</span>
        {section.priceLabels.map((label) => (
          <span key={label} className="text-right">
            {label}
          </span>
        ))}
      </div>

      {section.rows.map((service, index) => (
        <motion.div
          key={service.name}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 18, y: 5 }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            delay: reduceMotion ? 0 : Math.min(index * 0.055, 0.3),
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-2 border-b border-neutral-200 py-3 last:border-b-0"
          style={{
            gridTemplateColumns: `minmax(0, 1fr) repeat(${section.priceLabels.length}, minmax(0, auto))`,
          }}
        >
          <div className="min-w-0">
            <p className="text-sm font-bold leading-relaxed text-neutral-950 sm:text-base">
              {service.name}
            </p>

            {service.detail && (
              <p className="mt-1 text-xs font-medium leading-relaxed text-neutral-600 sm:text-sm">
                {service.detail}
              </p>
            )}
          </div>

          {service.prices.map((price, priceIndex) => (
            <span
              key={`${service.name}-${priceIndex}`}
              className="whitespace-nowrap text-right text-sm font-bold leading-relaxed text-neutral-950 sm:text-base"
            >
              {price === "—" ? price : `Rs. ${price}`}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}



function MenuContent({
  sections,
  onBook,
}: {
  sections: ServiceSection[];
  onBook: (service: string) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-w-0">
      {sections.map((section, index) => (
        <motion.article
          key={section.id}
          id={section.id}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 28, filter: "blur(5px)" }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`scroll-mt-24 pb-8 sm:pb-10 ${
            index !== sections.length - 1
              ? "mb-5 border-b border-neutral-300 sm:mb-6"
              : ""
          }`}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[minmax(150px,0.8fr)_minmax(0,1.2fr)] lg:gap-6">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.96, y: 12 }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[4/3] overflow-hidden bg-neutral-100 sm:aspect-[0.82]"
            >
              <motion.img
                src={section.image}
                alt={section.imageAlt}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
                whileHover={reduceMotion ? undefined : { scale: 1.045 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </motion.div>

            <div className="min-w-0">
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: 14 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-5"
              >
                <h3 className="text-[27px] font-extrabold leading-none tracking-[-0.055em] sm:text-[25px] lg:text-[30px]">
                  {section.title}
                </h3>

                <p className="mt-2 text-xs font-medium leading-relaxed text-neutral-600 sm:text-sm">
                  {section.description}
                </p>
              </motion.div>

              <PriceList section={section} />

              {section.id === "womenshair" && (
                <p className="mt-3 text-xs font-semibold text-neutral-600">
                  Special offer · Was Rs. 9,900
                </p>
              )}

              <motion.button
                type="button"
                onClick={() => onBook(section.title)}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { backgroundColor: "#000000", color: "#ffffff" }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                transition={{ duration: 0.25 }}
                className="mt-5 flex h-11 w-full items-center justify-center border border-black text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-black hover:text-white sm:text-sm"
              >
                Book My Appointment
              </motion.button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}


export default function ServicesMenu() {
  const [activeMenu, setActiveMenu] = useState<"men" | "women">("men");
  const reduceMotion = useReducedMotion();

  const isWomen = activeMenu === "women";
  const sections = isWomen ? womenSections : menSections;

  const handleBooking = (service: string) => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "contact";
    }

    console.info("Selected service:", service);
  };

  const switchMenu = () => {
    setActiveMenu((current) => (current === "men" ? "women" : "men"));

    // Bring the heading back into view when changing menus.
    document.getElementById("services")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const transition = reduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 90,
        damping: 22,
        mass: 1.05,
      };

  return (
    <section
      id="services"
      className="relative overflow-x-clip bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Editorial heading */}
        <motion.div
          key={activeMenu + "-heading"}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-12 max-w-[650px] text-center sm:mb-16"
        >
          <p className="mb-5 text-[10px] leading-relaxed text-neutral-500 sm:text-xs">
            A considered approach to beauty, grooming and personal care.
          </p>

          <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-neutral-500 sm:text-xs">
            Discover Our
          </span>

          <h2 className="text-[clamp(2.8rem,8vw,5.5rem)] font-black leading-[0.88] tracking-[-0.075em]">
            {isWomen ? "Women's Menu" : "Men's Menu"}
          </h2>
        </motion.div>

        {/* Main layout with a subtle menu switch */}
        <div className="relative grid grid-cols-1 gap-7 md:grid-cols-[105px_minmax(0,1fr)] lg:grid-cols-[145px_minmax(0,1fr)] lg:gap-8">
          {/* Minimal left navigation */}
          <aside className="hidden self-start md:sticky md:top-24 md:block md:h-fit">
            <nav
              aria-label="Service categories"
              className="flex flex-col gap-1 border-l border-neutral-200 pl-4 lg:pl-5"
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                
                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: reduceMotion ? "auto" : "smooth",
                      block: "start",
                    });
                  }}
                  className="group relative -ml-4 flex items-center py-2.5 pl-4 text-[12px] tracking-[-0.01em] text-neutral-500 transition-colors hover:text-black lg:text-[13px]"
                >
                  <span className="absolute bottom-2 left-0 top-2 w-[2px] scale-y-0 bg-black transition-transform group-hover:scale-y-100" />
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Animated menu viewport */}
          <div className="relative min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeMenu}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : isWomen ? 90 : -90,
                  scale: reduceMotion ? 1 : 0.985,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: reduceMotion ? 0 : isWomen ? -90 : 90,
                  scale: reduceMotion ? 1 : 0.985,
                }}
                transition={transition}
                className="min-w-0"
              >
                <MenuContent
                  sections={sections}
                  onBook={handleBooking}
                />

<p className="pb-1 text-center text-xs leading-relaxed text-neutral-500">
                  Prices are in PKR. Please confirm service details when booking.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sticky right-side menu switch */}
          <div className="pointer-events-none absolute inset-y-0 -right-16 z-30 hidden w-14 md:block lg:-right-60">
  <div className="sticky top-[45vh] flex justify-end">
    <motion.button
      type="button"
      onClick={switchMenu}
      aria-label={
        isWomen ? "Switch to men's menu" : "Switch to women's menu"
      }
      className="pointer-events-auto group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 shadow-sm transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {isWomen ? (
        <ArrowLeft size={21} strokeWidth={1.7} />
      ) : (
        <ArrowRight size={21} strokeWidth={1.7} />
      )}
    </motion.button>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
