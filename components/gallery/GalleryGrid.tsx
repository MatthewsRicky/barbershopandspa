"use client";

import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { gallery } from "@/data/gallery";
import Lightbox from "./Lightbox";

type Filter = "all" | "barbering" | "spa" | "interior";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState("");

  const filteredGallery = useMemo(() => {
    if (filter === "all") {
      return gallery;
    }

    return gallery.filter((item) => item.category === filter);
  }, [filter]);

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "barbering", label: "Barbering" },
    { value: "spa", label: "Spa" },
    { value: "interior", label: "Interior" },
  ];

  function openLightbox(image: string, alt: string) {
    setSelectedImage(image);
    setSelectedAlt(alt);
  }

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-3">
        {filters.map((item) => {
          const active = filter === item.value;

          return (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`relative px-5 py-3 text-sm ${
                active
                  ? "text-white"
                  : "border border-neutral-300 text-neutral-600"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="gallery-filter"
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

      <motion.div layout className="columns-1 gap-5 md:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filteredGallery.map((item) => (
            <motion.button
              key={item.id}
              layout
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
                duration: 0.35,
              }}
              onClick={() => openLightbox(item.image, item.alt)}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden text-left"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                <div className="absolute bottom-5 left-5 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider">
                    View
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        image={selectedImage}
        alt={selectedAlt}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
