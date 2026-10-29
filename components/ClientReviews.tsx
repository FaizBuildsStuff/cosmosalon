"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquareQuote,
  Star,
} from "lucide-react";
import { reviews } from "@/data/reviews";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/COSMO+SALON/@31.5103073,74.3498389,17z/data=!4m8!3m7!1s0x391905dab51da5ab:0xaa38eec877b398e2!8m2!3d31.5103073!4d74.3498389!9m1!1b1!16s%2Fg%2F11j2423h1h";

// Update these with the exact figures displayed on Google Maps.
const GOOGLE_RATING = 4.8;
const GOOGLE_REVIEW_COUNT = 1783;

function GoogleMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.5a12 12 0 0 1 0-7.7v-5.3H5.8a20 20 0 0 0 0 18.3l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 11.4c3 0 5.7 1 7.8 3.1l5.9-5.9C34.1 5.2 29.5 3 24 3A20 20 0 0 0 5.8 14.5l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z"
      />
    </svg>
  );
}

function Stars({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "lg";
}) {
  const safeRating = Math.max(0, Math.min(5, rating));

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${safeRating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          className={`${
            size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5"
          } ${
            value <= Math.round(safeRating)
              ? "fill-amber-400 text-amber-400"
              : "text-neutral-200"
          }`}
          strokeWidth={1.7}
        />
      ))}
    </div>
  );
}

function formatDate(date?: string) {
  if (!date) return null;

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(parsed);
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function ClientReviews() {
  const reducedMotion = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive number of visible cards.
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  // Max index we can navigate to (so the last group of cards is fully visible).
  const maxIndex = Math.max(0, reviews.length - visibleCount);

  // Keep activeIndex valid when screen size changes.
  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  // Scroll carousel to the card at `index`.
  const goToIndex = useCallback(
    (index: number) => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const safeIndex = Math.max(0, Math.min(index, maxIndex));
      const targetCard = carousel.children[safeIndex] as
        | HTMLElement
        | undefined;

      if (!targetCard) return;

      carousel.scrollTo({
        left: targetCard.offsetLeft - carousel.offsetLeft,
        behavior: reducedMotion ? "auto" : "smooth",
      });

      setActiveIndex(safeIndex);
    },
    [maxIndex, reducedMotion]
  );

  // Sync dot indicator with manual touch/trackpad scrolling.
  const updateActiveIndex = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = Array.from(carousel.children) as HTMLElement[];
    if (!cards.length) return;

    const scrollPosition = carousel.scrollLeft;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - carousel.offsetLeft - scrollPosition
      );

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(Math.min(closestIndex, maxIndex));
  }, [maxIndex]);

  // Track manual touchpad, trackpad, and swipe scrolling.
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", updateActiveIndex, {
      passive: true,
    });

    return () => {
      carousel.removeEventListener("scroll", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const goToPrevious = () => {
    goToIndex(activeIndex === 0 ? maxIndex : activeIndex - 1);
  };

  const goToNext = () => {
    goToIndex(activeIndex >= maxIndex ? 0 : activeIndex + 1);
  };

  // Total navigable positions (dots).
  const dotCount = maxIndex + 1;

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#faf9f6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-16 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
<motion.div
  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="mb-12 sm:mb-16"
>
  <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
    {/* Title and description */}
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-medium tracking-wide text-neutral-500">
        COSMO SALON · Client reviews
      </p>

      <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl">
        Loved by our clients.
        <br />
        <span className="text-neutral-400">Defined by the details.</span>
      </h2>

      <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
        Real experiences from people who trust us with their style.
      </p>
    </div>

    {/* Google rating */}
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="View COSMO SALON reviews on Google"
      className="group flex w-full items-center justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 sm:w-fit sm:min-w-[260px] sm:p-6"
    >
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-semibold tracking-[-0.05em] text-neutral-950">
            {GOOGLE_RATING.toFixed(1)}
          </span>
          <span className="text-sm text-neutral-400">/ 5</span>
        </div>

        <div className="mt-2">
          <Stars rating={GOOGLE_RATING} size="lg" />
        </div>

        <p className="mt-2 text-xs text-neutral-500">
          {GOOGLE_REVIEW_COUNT.toLocaleString()} Google reviews
        </p>
      </div>

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-50 transition-colors group-hover:bg-neutral-100">
        <GoogleMark />
      </div>
    </a>
  </div>

  <div className="mt-10 border-t border-neutral-200" />
</motion.div>

        {/* Carousel */}
        {reviews.length > 0 ? (
          <>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-neutral-900">
                  Words from our clients
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Thoughtful details. Personal experiences.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="mr-2 hidden text-xs tabular-nums text-neutral-400 sm:block">
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span className="mx-1 text-neutral-300">/</span>
                  {String(dotCount).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous reviews"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next reviews"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Scrollable cards */}
            <div
              ref={carouselRef}
              onScroll={updateActiveIndex}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
              aria-label="Client reviews carousel"
              aria-roledescription="carousel"
            >
              {reviews.map((review, index) => {
                const name = review.name || "Client";
                const date = formatDate(review.date);

                return (
                  <motion.article
                    key={review.id}
                    initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={
                      reducedMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.4,
                      delay: reducedMotion ? 0 : (index % 3) * 0.06,
                      ease: "easeOut",
                    }}
                    className="group flex min-h-[330px] w-full shrink-0 snap-start flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 transition duration-300 hover:border-neutral-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.045)] sm:w-[calc((100%-1.25rem)/2)] sm:p-7 lg:w-[calc((100%-2.5rem)/3)]"
                    aria-label={`Review by ${name}`}
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f5f0] text-neutral-700">
                        <MessageSquareQuote
                          className="h-[17px] w-[17px]"
                          strokeWidth={1.5}
                        />
                      </div>

                      <div className="flex items-center gap-1.5 rounded-full border border-neutral-100 bg-neutral-50 px-2.5 py-1">
                        <GoogleMark />
                        <span className="text-[10px] font-medium text-neutral-500">
                          Google
                        </span>
                      </div>
                    </div>

                    <Stars rating={review.rating} />

                    <p className="mt-5 flex-1 text-[14px] leading-7 text-neutral-700 sm:text-[15px]">
                      &ldquo;{review.review}&rdquo;
                    </p>

                    <div className="mt-7 border-t border-neutral-100 pt-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-semibold tracking-wide text-neutral-700">
                          {review.initials || getInitials(name)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-neutral-900">
                            {name}
                          </p>

                          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500">
                            <span>{review.service}</span>
                            {date && (
                              <>
                                <span className="text-neutral-300">·</span>
                                <span>{date}</span>
                              </>
                            )}
                          </div>
                        </div>

                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-neutral-300"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Pagination dots */}
            <div className="mt-7 flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: dotCount }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToIndex(index)}
                    aria-label={`Go to review ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-7 bg-neutral-900"
                        : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
                    }`}
                  />
                ))}
              </div>

              <p className="text-[11px] text-neutral-400">
                Swipe to explore
              </p>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-14 text-center">
            <MessageSquareQuote className="mx-auto h-6 w-6 text-neutral-400" />
            <h3 className="mt-4 text-lg font-medium text-neutral-900">
              Reviews coming soon
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Add client reviews to your local reviews data file to display them here.
            </p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl bg-neutral-950 p-6 text-white sm:mt-16 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <GoogleMark />
            </div>

            <div>
              <h3 className="text-base font-medium">
                Your experience matters.
              </h3>
              <p className="mt-1 max-w-md text-sm leading-6 text-neutral-400">
                Visited COSMO SALON? Share your experience with others.
              </p>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            View Google reviews
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-5 text-center text-[10px] leading-5 text-neutral-400">
          Client reviews are managed locally by COSMO SALON.
        </p>
      </div>
    </section>
  );
}
