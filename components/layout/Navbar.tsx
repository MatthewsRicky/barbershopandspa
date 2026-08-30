"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex h-24 items-center justify-between border-b border-white/20">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif text-2xl tracking-wide text-white"
          >
            THE PLACE
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm text-white/90"
              >
                {link.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="/booking"
              className="bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen((current) => !current)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-5 w-6">
              <motion.span
                className="absolute left-0 top-0 block h-px w-6 bg-white"
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 9 : 0,
                }}
                transition={{ duration: 0.25 }}
              />

              <motion.span
                className="absolute left-0 top-2 block h-px w-6 bg-white"
                animate={{
                  opacity: open ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />

              <motion.span
                className="absolute left-0 top-4 block h-px w-6 bg-white"
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -7 : 0,
                }}
                transition={{ duration: 0.25 }}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden bg-neutral-950 md:hidden"
          >
            <div className="px-6 pb-8 pt-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-col"
              >
                {links.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -15,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-5 font-serif text-2xl text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="pt-6"
                >
                  <Link
                    href="/booking"
                    onClick={() => setOpen(false)}
                    className="block bg-white px-5 py-4 text-center text-sm font-medium text-neutral-950"
                  >
                    Book an Appointment
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
