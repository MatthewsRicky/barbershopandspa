import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { team } from "@/data/team";

export default function TeamPreview() {
  return (
    <section className="bg-[#f4f1eb] py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our People"
          title="Meet the specialists."
          description="Experienced professionals who care about their craft and the people they serve."
          centered
        />

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <StaggerItem key={member.id}>
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="font-serif text-xl">{member.name}</h3>

                  <p className="mt-1 text-sm font-medium">{member.role}</p>

                  <p className="mt-1 text-sm text-neutral-500">
                    {member.specialty}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
