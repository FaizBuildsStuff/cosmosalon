
"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

function InstagramIcon({
  size,
  strokeWidth = 1.5,
  className,
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const instagramPosts = [
  {
    id: "nehaal",
    url: "https://www.instagram.com/p/Db8QZI4MuRP/",
    featured: true,
  },
  {
    id: "reel-1",
    url: "https://www.instagram.com/p/DeuyMuEOb4l/",
  },
  {
    id: "reel-2",
    url: "https://www.instagram.com/p/De1XfLdsxEf/",
  },
  {
    id: "reel-3",
    url: "https://www.instagram.com/p/DeZQViYMiSL/",
  },
  {
    id: "reel-4",
    url: "https://www.instagram.com/p/Ddq2gbxM-9k/",
  },
  {
    id: "reel-5",
    url: "https://www.instagram.com/p/DdtNYgZsz3Z/",
  },
];

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function InstagramSection() {
  useEffect(() => {
    const processEmbeds = () => {
      window.instgrm?.Embeds?.process();
    };

    let script = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (!script) {
      script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    script.addEventListener("load", processEmbeds);
    processEmbeds();

    return () => {
      script?.removeEventListener("load", processEmbeds);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("cosmo-instagram-track");
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="instagram"
      className="overflow-hidden bg-white px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-black/45">
              <InstagramIcon size={14} strokeWidth={1.6} />
              COSMO SALON
            </div>

            <h2 className="text-3xl font-medium tracking-[-0.06em] sm:text-4xl lg:text-[42px]">
              A little more COSMO.
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous Instagram posts"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next Instagram posts"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Compact horizontal carousel */}
        <div
          id="cosmo-instagram-track"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {instagramPosts.map((post) => (
            <article
              key={post.id}
              className={[
                "group relative shrink-0 snap-start overflow-hidden",
                "w-[76vw] max-w-[310px] sm:w-[290px] lg:w-[320px]",
                "rounded-[20px] border border-black/[0.06] bg-[#f8f7f5]",
                "shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:border-black/20",
                "hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]",
                post.featured ? "lg:w-[340px]" : "",
              ].join(" ")}
            >
              {/* Instagram media */}
              <div className="relative h-[390px] overflow-hidden bg-[#f8f7f5] sm:h-[410px]">
                <blockquote
                  className="instagram-media !m-0 !w-full !max-w-full"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                  data-instgrm-captioned="false"
                  style={{
                    background: "#f8f7f5",
                    border: 0,
                    borderRadius: 0,
                    boxShadow: "none",
                    margin: 0,
                    width: "100%",
                    minWidth: 0,
                    padding: 0,
                  }}
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[390px] items-center justify-center sm:h-[410px]"
                    aria-label="Open Instagram post"
                  >
                    <InstagramIcon
                      size={26}
                      strokeWidth={1.3}
                      className="text-black/40 transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                </blockquote>

                {/* Play action */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Watch this Instagram post"
                  className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.04] bg-white/95 text-black shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
                >
                  <Play size={15} fill="currentColor" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Minimal editorial footer */}
        <div className="mt-5 flex items-center justify-between border-t border-black/[0.08] pt-5">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit COSMO SALON on Instagram"
            className="group inline-flex items-center gap-3"
          >
            <InstagramIcon
              size={19}
              strokeWidth={1.5}
              className="text-black/60 transition-colors duration-300 group-hover:text-black"
            />

            <span className="text-sm font-medium tracking-[-0.02em] text-black/70 transition-colors duration-300 group-hover:text-black">
              @cosmosalon
            </span>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-black/50 transition-colors duration-300 hover:text-black"
          >
            <span>Follow along</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
