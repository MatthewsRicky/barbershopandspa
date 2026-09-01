import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ServiceFilter from "@/components/services/ServiceFilter";

export default function ServicesPage() {
  return (
    <main className="bg-[#f4f1eb]">
      {/* Page hero */}
      <section className="bg-neutral-950 px-6 pb-28 pt-40 text-white md:pt-48">
        <Container>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              The Menu
            </p>

            <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.95] md:text-8xl">
              Time well spent.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              From precision barbering to restorative treatments, choose the
              service that fits the way you want to feel when you leave.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Service categories introduction */}
      <section className="border-b border-neutral-200 bg-white">
        <Container className="py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium">Barbering</p>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Precision cuts, fades, beard care and traditional grooming.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Spa & Wellness</p>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Restorative treatments designed to help you slow down and reset.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Beauty</p>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Detailed care for hands, feet and everything in between.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section>
        <Container className="py-20 md:py-28">
          <ServiceFilter />
        </Container>
      </section>
    </main>
  );
}
