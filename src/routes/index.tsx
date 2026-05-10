import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Award, Users, BadgeCheck, Check } from "lucide-react";
import heroImg from "@/assets/hero-skyline.jpg";
import logoImg from "@/assets/inedu-logo.jpeg";
import { ExecutiveContactCard } from "@/components/ExecutiveContactCard";
import { WHATSAPP_URL } from "@/lib/services";

export const Route = createFileRoute("/")({
  component: Index,
});

const whatWeDo: { title: string; detail?: string }[] = [
  {
    title: "Professional Services",
    detail:
      "Training on Address Verification (AVR), Internal Control, Collections and Recovery Etc.",
  },
  {
    title: "Management & Business Consultancy",
    detail: "Audited Financial Statements, Financial Advisory Services Etc.",
  },
  { title: "Debt Recovery & Portfolio Resolution" },
  {
    title: "Commission Agency Services",
    detail:
      "Sale and purchase of MFB operating licenses, Trade Finance Instruments Deals, PSSP Acquisition, General Commission involved deals. Etc.",
  },
  { title: "Business & Address Verifications" },
  { title: "Loan Facilitation and Credit Support. Etc." },
];

const trustValues = [
  { icon: BadgeCheck, t: "Professionalism", d: "Senior-level execution and reliable expert service delivery" },
  { icon: ShieldCheck, t: "Confidentiality", d: "Strict client privacy and trusted handling of sensitive matters" },
  { icon: Award, t: "Compliance", d: "Ethical, regulated, and professionally guided operations" },
  { icon: Users, t: "Executive Expertise", d: "Senior-led engagements and strategic decision support" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Corporate financial district skyline"
            className="h-full w-full object-cover"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-brand-hero" />
        </div>

        <div className="relative container-pro pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase text-white/80 mb-6">
                <span className="h-px w-10 bg-secondary" />
                Welcome to
              </div>
              <h1 className="font-serif font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
                INEDU & CO
                <span className="block text-white/85 text-2xl sm:text-3xl lg:text-4xl mt-3 tracking-wide">
                  Professional Services
                </span>
              </h1>
              <div className="h-1 w-24 bg-secondary mb-8" />
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mb-5">
                Reliable, ethical, and results-driven professional services tailored
                for individuals, SMEs, and corporate organizations.
              </p>
              <p className="text-base text-white/70 leading-relaxed max-w-2xl mb-10">
                We deliver consultancy, recovery, verification, and facilitation services
                with professionalism, confidentiality, and compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-secondary">
                  Our Services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-outline-light">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={logoImg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -top-10 -right-6 w-40 opacity-20 blur-[1px]"
                />
                <ExecutiveContactCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-primary-deep text-white border-y border-white/10">
        <div className="container-pro py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustValues.map((i) => (
            <div key={i.t} className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-sm bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <i.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold leading-tight">{i.t}</div>
                <div className="text-sm text-white/70 mt-1 leading-relaxed">{i.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-5">About the Firm</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A trusted Nigerian professional services firm.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
              Inedu & Co Professional Services is a duly registered Nigerian
              professional services firm providing reliable, ethical, and
              results-driven support to individuals, SMEs, and corporate organizations.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We deliver tailored solutions across consultancy, recovery, verification,
              and facilitation services — with a strong focus on professionalism,
              confidentiality, and compliance.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary" />
            <img
              src={heroImg}
              alt="Executive boardroom"
              loading="lazy"
              className="relative w-full h-[460px] object-cover rounded-sm shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative py-20 lg:py-28 bg-accent/30 overflow-hidden">
        {/* subtle logo watermark */}
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-20 -bottom-20 w-[420px] opacity-[0.04]"
        />
        <div className="relative container-pro grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-5">What We Do</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Our Professional Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              To provide professional services, such as:
            </p>
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-5">
              {whatWeDo.map((item) => (
                <li
                  key={item.title}
                  className="group bg-card border border-border rounded-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-sm bg-brand-primary text-white shrink-0">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground leading-snug">
                        {item.title}
                      </h3>
                      {item.detail && (
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="relative py-20 lg:py-24 bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        <div className="relative container-pro grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <div className="eyebrow !text-white mb-5">
              <span style={{ background: "white" }} />
              Begin an Engagement
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Request Professional Consultation
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Submit your professional enquiry directly via WhatsApp. Our executive
              office will respond promptly with structured guidance.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Request Professional Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-outline-light">
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
