import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-neutral-950 px-6 pb-24 pt-48 text-white">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Our Story
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-6xl md:text-8xl">
            A place to look good and feel better.
          </h1>
        </Container>
      </section>

      <Container className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xl leading-9 text-neutral-700 md:text-2xl">
            The Place Barber Shop & Spa was built around the belief that
            personal care should never feel rushed.
          </p>

          <div className="mt-10 space-y-6 leading-8 text-neutral-600">
            <p>
              From the moment you walk through our doors, our goal is to provide
              an experience that feels considered, comfortable and personal.
            </p>

            <p>
              Our barbers and wellness specialists combine traditional
              craftsmanship with modern techniques to deliver exceptional
              grooming and spa experiences.
            </p>

            <p>
              Whether you're here for a quick trim, a complete grooming session
              or an hour of uninterrupted relaxation, this is your time.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
