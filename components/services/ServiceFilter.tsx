"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { services } from "@/data/services";

type Filter = "all" | "barbering" | "spa" | "beauty";

const filters: {
  value: Filter;
  label: string;
}[] = [
  {
    value: "all",
    label: "All Services",
  },
  {
    value: "barbering",
    label: "Barbering",
  },
  {
    value: "spa",
    label: "Spa & Wellness",
  },
  {
    value: "beauty",
    label: "Beauty",
  },
];

export default function ServiceFilter() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredServices = useMemo(() => {
    if (filter === "all") {
      return services;
    }

    return services.filter((service) => service.category === filter);
  }, [filter]);

  return (
    <div>
      {/* Filter navigation */}
      <div className="mb-12 flex flex-wrap gap-3">
        {filters.map((item) => {
          const active = filter === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`relative overflow-hidden px-5 py-3 text-sm transition-colors ${
                active
                  ? "text-white"
                  : "border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="service-filter-background"
                  className="absolute inset-0 bg-neutral-950"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Service count */}
      <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-5">
        <p className="text-sm text-neutral-500">
          {filteredServices.length}{" "}
          {filteredServices.length === 1 ? "service" : "services"}
        </p>

        <p className="hidden text-xs uppercase tracking-[0.2em] text-neutral-400 sm:block">
          The Place · Service Menu
        </p>
      </div>

      {/* Services */}
      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => (
            <motion.article
              key={service.id}
              layout
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="bg-white/95 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 backdrop-blur-sm">
                    {service.category === "barbering"
                      ? "Barbering"
                      : service.category === "spa"
                        ? "Spa & Wellness"
                        : "Beauty"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-serif text-2xl text-neutral-950">
                      {service.name}
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
                      {service.description}
                    </p>
                  </div>

                  <p className="whitespace-nowrap text-sm font-semibold">
                    KSh {service.price.toLocaleString()}
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-neutral-200 pt-5">
                  <span className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                    {service.duration}
                  </span>

                  <Link
                    href={`/booking?service=${service.id}`}
                    className="group/book inline-flex items-center gap-2 text-sm font-medium text-neutral-950"
                  >
                    Book
                    <span className="transition-transform duration-300 group-hover/book:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA */}
      <div className="mt-16 border-t border-neutral-200 pt-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-serif text-2xl">Not sure what you need?</h3>

            <p className="mt-2 text-sm text-neutral-500">
              Get in touch and we'll help you choose the right treatment.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border-b border-neutral-950 pb-2 text-sm font-medium"
          >
            Talk to us
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
