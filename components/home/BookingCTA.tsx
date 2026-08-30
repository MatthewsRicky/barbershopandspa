import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-32">
      <img
        src="/images/gallery/booking.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          Your time starts here
        </p>

        <h2 className="mt-6 font-serif text-5xl text-white md:text-7xl">
          Ready to make time for yourself?
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-white/70">
          Choose your service, select a time and leave the rest to us.
        </p>

        <Link
          href="/booking"
          className="mt-10 inline-block bg-white px-8 py-4 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  );
}
