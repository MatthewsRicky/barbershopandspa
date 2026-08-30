"use client";

import { useState } from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="bg-[#f4f1eb] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              The Transformation
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              Precision makes
              <br />
              the difference.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-neutral-600">
              Every detail matters. From the first consultation to the final
              finish, our barbers take the time to get it right.
            </p>

            <p className="mt-8 text-xs uppercase tracking-wider text-neutral-400">
              Drag the slider to compare
            </p>
          </div>

          <div
            className="relative aspect-[4/3] select-none overflow-hidden bg-neutral-300"
            style={{
              touchAction: "none",
            }}
          >
            {/* After */}
            <img
              src="/images/gallery/after.jpg"
              alt="Finished haircut"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />

            {/* Before */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{
                width: `${position}%`,
              }}
            >
              <img
                src="/images/gallery/before.jpg"
                alt="Before haircut"
                className="absolute left-0 top-0 h-full max-w-none object-cover"
                style={{
                  width: "100%",
                  minWidth: "100%",
                }}
                draggable={false}
              />
            </div>

            {/* Slider line */}
            <div
              className="absolute inset-y-0 w-px bg-white shadow-lg"
              style={{
                left: `${position}%`,
              }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-950 shadow-lg">
                <span className="text-lg">↔</span>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
              aria-label="Compare before and after"
            />

            <span className="absolute left-5 top-5 bg-black/60 px-3 py-2 text-xs uppercase tracking-wider text-white">
              Before
            </span>

            <span className="absolute right-5 top-5 bg-black/60 px-3 py-2 text-xs uppercase tracking-wider text-white">
              After
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
