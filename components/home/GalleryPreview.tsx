import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

const images = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="The Space"
              title="Step inside The Place."
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 border-b border-neutral-900 pb-2 text-sm font-medium"
            >
              View gallery
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((image, index) => (
            <FadeIn
              key={image}
              delay={index * 0.08}
              direction={index % 2 === 0 ? "up" : "down"}
            >
              <div
                className={`group overflow-hidden ${
                  index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={image}
                  alt="The Place Barber Shop & Spa"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
