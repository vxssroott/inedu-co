import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import boardroom from "@/assets/about-boardroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — INEDU & CO Professional Services" },
      {
        name: "description",
        content:
          "INEDU & CO is a duly registered Nigerian professional services firm delivering consultancy, recovery, verification and facilitation with confidentiality and compliance.",
      },
      { property: "og:title", content: "About — INEDU & CO Professional Services" },
      {
        property: "og:description",
        content:
          "A trusted Nigerian firm providing professional services to individuals, SMEs, and corporate organizations.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const principles = [
    "Professionalism in every engagement",
    "Strict client confidentiality",
    "Ethical, compliance-driven practice",
    "Results-oriented execution",
    "Senior executive oversight",
    "Tailored solutions for each client",
  ];

  return (
    <>
      <section className="relative bg-primary-deep text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_30%,white,transparent_60%)]" />
        <div className="relative container-pro">
          <div className="eyebrow !text-white/80 mb-5">
            <span style={{ background: "var(--secondary)" }} />
            About the Firm
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            About INEDU & CO
          </h1>
          <div className="h-1 w-24 bg-secondary mt-6" />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Inedu & Co Professional Services is a duly registered Nigerian
              professional services firm providing reliable, ethical, and
              results-driven support to individuals, SMEs, and corporate organizations.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We deliver tailored solutions across consultancy, recovery, verification,
              and facilitation services, with a strong focus on professionalism,
              confidentiality, and compliance.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Our goal is to provide dependable professional support that helps clients
              make better business decisions, recover value, and execute critical
              transactions with confidence.
            </p>
            <Link to="/services" className="btn-primary">
              View Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary" />
            <img
              src={boardroom}
              alt="Executive boardroom"
              loading="lazy"
              width={1280}
              height={896}
              className="relative w-full h-[420px] object-cover rounded-sm shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30 border-y border-border">
        <div className="container-pro">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">Our Principles</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              The standards that guide every engagement.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p) => (
              <div
                key={p}
                className="flex items-start gap-4 bg-card p-6 rounded-sm border border-border"
              >
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
