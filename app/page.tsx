import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import Packages from "@/components/home/Packages";
import TeamPreview from "@/components/home/TeamPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import BookingCTA from "@/components/home/BookingCTA";
import BeforeAfter from "@/components/home/BeforeAfter";
import FAQ from "@/components/ui/FAQ";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <ServicesPreview />

      <AboutPreview />

      <BeforeAfter />

      <Packages />

      <TeamPreview />

      <GalleryPreview />

      <Testimonials />

      <section className="bg-[#f4f1eb] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Frequently Asked
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Good to know.
            </h2>
          </div>

          <FAQ />
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
