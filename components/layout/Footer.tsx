import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl">THE PLACE</h2>

            <p className="mt-4 max-w-md leading-7 text-white/60">
              A modern destination for precision grooming, beauty and complete
              relaxation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/booking">Book Appointment</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Visit
            </h3>

            <div className="mt-5 space-y-2 text-sm leading-6 text-white/60">
              <p>Diani Beach Road</p>
              <p>Diani, Kenya</p>
              <p>Mon – Sat: 8:00 – 20:00</p>
              <p>Sunday: 10:00 – 18:00</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} The Place Barber Shop & Spa. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
