"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/services";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Replace with your API/Supabase booking logic later.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white p-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
          Appointment Request
        </p>

        <h2 className="mt-5 font-serif text-4xl">Thank you.</h2>

        <p className="mx-auto mt-4 max-w-md leading-7 text-neutral-600">
          Your appointment request has been received. We'll contact you shortly
          to confirm your booking.
        </p>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 border-b border-neutral-900 pb-2 text-sm"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12">
      <div>
        <label className="mb-2 block text-sm font-medium">Service</label>

        <select
          required
          className="w-full border border-neutral-300 bg-white px-4 py-4 outline-none focus:border-neutral-900"
        >
          <option value="">Select a service</option>

          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name} — KSh {service.price.toLocaleString()}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Preferred date
          </label>

          <input
            type="date"
            required
            className="w-full border border-neutral-300 px-4 py-4 outline-none focus:border-neutral-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Preferred time
          </label>

          <input
            type="time"
            required
            className="w-full border border-neutral-300 px-4 py-4 outline-none focus:border-neutral-900"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Full name</label>

          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-neutral-300 px-4 py-4 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Phone number</label>

          <input
            type="tel"
            required
            placeholder="+254..."
            className="w-full border border-neutral-300 px-4 py-4 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Additional notes
        </label>

        <textarea
          rows={4}
          placeholder="Anything we should know?"
          className="w-full resize-none border border-neutral-300 px-4 py-4 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
        />
      </div>

      <div className="border-t border-neutral-200 pt-8">
        <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-wider text-neutral-400">
          <span>Appointment request</span>
          <span>Step 1 of 1</span>
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 bg-neutral-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Request Appointment
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
