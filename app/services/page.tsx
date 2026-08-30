import Container from "@/components/ui/Container";
import ServiceFilter from "@/components/services/ServiceFilter";

export default function ServicesPage() {
  return (
    <main className="bg-[#f4f1eb]">
      <section className="bg-neutral-950 px-6 pb-24 pt-48 text-white">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            The Menu
          </p>

          <h1 className="mt-5 font-serif text-6xl md:text-8xl">Services</h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
            Thoughtful grooming, beauty and wellness treatments designed around
            you.
          </p>
        </Container>
      </section>

      <Container className="py-20 md:py-28">
        <ServiceFilter />
      </Container>
    </main>
  );
}
