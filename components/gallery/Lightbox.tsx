"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

interface LightboxProps {
  image: string | null;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ image, alt, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={image}
              alt={alt}
              className="max-h-[85vh] max-w-full object-contain"
            />

            <button
              onClick={onClose}
              className="absolute -right-2 -top-12 text-sm uppercase tracking-wider text-white/70 hover:text-white"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
