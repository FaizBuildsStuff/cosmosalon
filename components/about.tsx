
"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Tooltip } from "./ui/tooltip-card";

const branches = [
  {
    name: "PIA Road",
    detail: "Head Office",
    address: "COSMO Salon, PIA Road, Lahore, Pakistan",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=COSMO+Salon+PIA+Road+Lahore",
  },
  {
    name: "MM Alam Road",
    detail: "Central Lahore",
    address: "COSMO Salon, MM Alam Road, Lahore, Pakistan",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=COSMO+Salon+MM+Alam+Road+Lahore",
  },
  {
    name: "DHA Phase 3",
    detail: "DHA",
    address: "COSMO Salon, DHA Phase 3, Lahore, Pakistan",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=COSMO+Salon+DHA+Phase+3+Lahore",
  },
  {
    name: "Allama Iqbal Town",
    detail: "Iqbal Town",
    address: "COSMO Salon, Allama Iqbal Town, Lahore, Pakistan",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=COSMO+Salon+Allama+Iqbal+Town+Lahore",
  },
];

const services = [
  "Haircuts, styling & hair treatments",
  "Professional makeup for special occasions",
  "Beauty treatments & relaxing spa experiences",
  "Grooming services for men and women",
];

function BranchLocationCard({
  branch,
}: {
  branch: (typeof branches)[number];
}) {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    branch.address
  )}&z=14&output=embed`;

  return (
    <div className="w-[260px] overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-xl">
      <div className="relative h-[145px] overflow-hidden bg-[#f3f1ed]">
        <iframe
          title={`Map showing ${branch.name}`}
          src={mapEmbedUrl}
          width="100%"
          height="180"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="p-4">
        <p className="text-sm font-medium tracking-[-0.02em] text-neutral-900">
          COSMO Salon · {branch.name}
        </p>

        <p className="mt-1 text-xs leading-5 text-neutral-500">
          {branch.address}
        </p>

        <a
          href={branch.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-neutral-900 transition-opacity hover:opacity-60"
        >
          Open in Google Maps
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-[#faf9f7] px-6 py-14 text-[#555] sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[680px]">
        <div className="mb-7">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">
            GET TO KNOW US
          </p>

          <h2 className="text-3xl font-medium tracking-[-0.055em] text-[#222] sm:text-4xl">
            About Us
          </h2>
        </div>

        <div className="space-y-4 text-[14px] leading-[1.9] tracking-[-0.01em] sm:text-[15px]">
          <p>
            <span className="font-medium text-[#222]">COSMO Salon</span> is
            more than a salon. It’s a place to unwind, refresh, and feel your
            best. We offer professional hair, beauty, and grooming services
            for both men and women, with a focus on quality, comfort, and
            personal care.
          </p>

          <p>
            With{" "}
            <span className="font-medium text-[#222]">
              four branches across Lahore
            </span>
            , we bring our signature salon experience closer to you. Our goal
            is to help every client feel confident, comfortable, and well cared
            for.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-[15px] font-medium text-[#222]">
            What we offer
          </h3>

          <ul className="space-y-2.5">
            {services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-3 text-[14px] leading-6 sm:text-[15px]"
              >
                <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-black/45" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="mb-1 text-[15px] font-medium text-[#222]">
            Four convenient locations
          </h3>
          <p className="mb-3 text-xs text-black/45">
            Hover over a location to preview the map.
          </p>

          <ul className="space-y-3">
            {branches.map((branch) => (
              <li
                key={branch.name}
                className="flex items-center justify-between gap-4 border-b border-dotted border-black/15 pb-3 text-[14px] sm:text-[15px]"
              >
                <Tooltip
                  content={<BranchLocationCard branch={branch} />}
                  containerClassName="z-50"
                >
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-medium text-[#333] underline decoration-dotted decoration-black/25 underline-offset-4 transition-colors hover:text-black"
                  >
                    <MapPin
                      size={14}
                      strokeWidth={1.5}
                      className="shrink-0 text-black/40 transition-colors group-hover:text-black"
                    />
                    {branch.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-60"
                    />
                  </a>
                </Tooltip>

                <span className="shrink-0 text-right text-xs text-black/45 sm:text-[13px]">
                  {branch.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-7 text-[14px] leading-[1.9] sm:text-[15px]">
          At COSMO, beauty is personal.{" "}
          <Link
            href="#services"
            className="font-medium text-[#222] underline decoration-dotted underline-offset-4 transition-colors hover:text-black/60"
          >
            Explore our services
          </Link>{" "}
          and experience professional care designed around you.
        </p>

        <div
          aria-hidden="true"
          className="mt-9 border-t border-dotted border-black/20"
        />
      </div>
    </section>
  );
}
