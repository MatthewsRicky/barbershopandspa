"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need to make an appointment?",
    answer:
      "Appointments are recommended, especially for spa treatments and weekends. Walk-ins are welcome when availability allows.",
  },
  {
    question: "How early should I arrive?",
    answer:
      "We recommend arriving 10 minutes before your appointment so you have enough time to settle in before your treatment.",
  },
  {
    question: "Can I book multiple services together?",
    answer:
      "Absolutely. You can combine barbering, spa and beauty treatments into one visit. Our team can also help you create a personalised experience.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept M-Pesa, major cards and cash at the studio.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes. We ask that you give us reasonable notice so that we can make the appointment available to another guest.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="divide-y divide-neutral-300 border-y border-neutral-300">
      {faqs.map((faq, index) => {
        const isOpen = active === index;

        return (
          <div key={faq.question}>
            <button
              onClick={() => setActive(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-8 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl">{faq.question}</span>

              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                }}
                transition={{ duration: 0.25 }}
                className="text-2xl font-light"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
