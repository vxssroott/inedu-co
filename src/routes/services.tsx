import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { services, WHATSAPP_URL } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — INEDU & CO Professional Services" },
      {
        name: "description",
        content:
          "Consultancy, debt recovery, business and address verification, commission agency, loan facilitation and professional training services.",
      },
      { property: "og:title", content: "Our Professional Services — INEDU & CO" },
      {
        property: "og:description",
        content:
          "Reliable, strategic, and professional solutions for businesses, organizations, and individuals.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative bg-primary-deep text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        <div className="relative container-pro">
          <div className="eyebrow !text-white/80 mb-5">
            <span style={{ background: "var(--secondary)" }} />
            What We Do
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Our Professional Services
          </h1>
          <div className="h-1 w-24 bg-secondary mt-6 mb-8" />
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Our services are designed to support businesses, organizations, and
            individuals with reliable, strategic, and professional solutions.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container-pro">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.number} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-primary text-white">
        <div className="container-pro grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Engage our executive office.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Submit your professional enquiry directly via WhatsApp for a structured,
              confidential response.
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
