import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="bg-[#f4f1eb]">
      <section className="bg-neutral-950 px-6 pb-24 pt-48 text-white">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            The Space
          </p>

          <h1 className="mt-5 font-serif text-6xl md:text-8xl">Gallery</h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
            A glimpse into the atmosphere, craft and experience at The Place.
          </p>
        </Container>
      </section>

      <Container className="py-20 md:py-28">
        <GalleryGrid />
      </Container>
    </main>
  );
}
