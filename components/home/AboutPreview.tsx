import Container from "@/components/ui/Container";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="overflow-hidden">
            <img
              src="/images/gallery/about.jpg"
              alt="Inside The Place Barber Shop & Spa"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              About The Place
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              More than a haircut.
              <br />
              It's a ritual.
            </h2>

            <p className="mt-7 leading-8 text-neutral-600">
              The Place was created around a simple idea: grooming should be
              something you look forward to. Our barbers, therapists and beauty
              specialists combine technical expertise with genuine hospitality
              to create an experience that goes beyond the service itself.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block border-b border-neutral-900 pb-2 text-sm font-medium"
            >
              Discover our story →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
