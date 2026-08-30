import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const packages = [
  {
    name: "The Executive",
    description: "For the complete grooming experience.",
    services: [
      "Signature Haircut",
      "Beard Sculpt",
      "Hot Towel Treatment",
      "Signature Facial",
    ],
    price: "4,500",
  },
  {
    name: "The Reset",
    description: "A complete pause from the everyday.",
    services: [
      "60-Minute Massage",
      "Signature Facial",
      "Aromatherapy Treatment",
    ],
    price: "6,500",
  },
  {
    name: "The Complete",
    description: "The ultimate head-to-toe experience.",
    services: [
      "Signature Haircut",
      "Beard Treatment",
      "Massage",
      "Facial",
      "Manicure",
    ],
    price: "9,500",
  },
];

export default function Packages() {
  return (
    <section className="bg-neutral-950 py-24 text-white md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Curated Experiences"
          title="Make time for yourself."
          description="Our signature packages bring together our most popular treatments for a complete experience."
        />

        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-neutral-950 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Package
              </p>

              <h3 className="mt-5 font-serif text-3xl">{pkg.name}</h3>

              <p className="mt-4 text-sm leading-6 text-white/50">
                {pkg.description}
              </p>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-4 text-sm text-white/70">
                {pkg.services.map((service) => (
                  <li key={service}>— {service}</li>
                ))}
              </ul>

              <div className="mt-10 flex items-end justify-between">
                <span className="font-serif text-3xl">KSh {pkg.price}</span>

                <Link
                  href="/booking"
                  className="text-sm underline underline-offset-4"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
