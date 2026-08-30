import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <main className="bg-[#f4f1eb]">
      <section className="bg-neutral-950 px-6 pb-24 pt-48 text-white">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Get In Touch
          </p>

          <h1 className="mt-5 font-serif text-6xl md:text-8xl">Contact</h1>
        </Container>
      </section>

      <Container className="py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl">Come see us.</h2>

            <div className="mt-8 space-y-6 text-neutral-600">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Location
                </p>
                <p className="mt-2">Diani Beach Road</p>
                <p>Diani, Kenya</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Phone
                </p>
                <p className="mt-2">+254 700 000 000</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Email
                </p>
                <p className="mt-2">hello@theplace.co.ke</p>
              </div>
            </div>
          </div>

          <div className="min-h-[400px] bg-neutral-300">
            <div className="flex h-full min-h-[400px] items-center justify-center text-sm text-neutral-500">
              Map
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
