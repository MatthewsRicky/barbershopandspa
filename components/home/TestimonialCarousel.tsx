"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
          Guest Experiences
        </p>

        <div className="relative mt-12 min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction * 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction * -30,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <blockquote className="font-serif text-3xl leading-tight text-neutral-900 md:text-5xl">
                “{testimonial.text}”
              </blockquote>

              <div className="mt-8">
                <p className="text-sm font-medium">{testimonial.name}</p>

                <p className="mt-2 text-xs uppercase tracking-wider text-neutral-400">
                  {testimonial.service}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setDirection(index > active ? 1 : -1);
                setActive(index);
              }}
              aria-label={`Show testimonial ${index + 1}`}
              className="p-2"
            >
              <span
                className={`block h-px transition-all duration-300 ${
                  index === active
                    ? "w-10 bg-neutral-950"
                    : "w-5 bg-neutral-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
