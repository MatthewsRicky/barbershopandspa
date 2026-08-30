"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-neutral-950">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/images/hero/hero.jpg"
          alt="The Place Barber Shop & Spa"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/70"
          >
            Barbering · Beauty · Wellness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-6xl leading-[0.95] text-white md:text-8xl lg:text-9xl"
          >
            Your place
            <br />
            to reset.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            className="mt-8 max-w-xl text-lg leading-8 text-white/75"
          >
            Precision grooming and restorative wellness in a space designed for
            you to slow down, recharge and leave feeling your best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.7,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/booking"
              className="bg-white px-7 py-4 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Book an Appointment
            </Link>

            <Link
              href="/services"
              className="border border-white/40 px-7 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-neutral-950"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50 lg:flex"
        >
          <span>Scroll to explore</span>

          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
