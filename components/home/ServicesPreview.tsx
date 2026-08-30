import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { services } from "@/data/services";

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="bg-[#f4f1eb] py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Our Services"
            title="Grooming with intention."
            description="From precision barbering to restorative spa treatments, every service is designed around quality, comfort and attention to detail."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2">
          {featuredServices.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group overflow-hidden bg-white">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-2xl">{service.name}</h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
                        {service.description}
                      </p>
                    </div>

                    <span className="whitespace-nowrap text-sm font-medium">
                      KSh {service.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-wider text-neutral-400">
                    {service.duration}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div className="mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 border-b border-neutral-900 pb-2 text-sm font-medium"
            >
              View all services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
