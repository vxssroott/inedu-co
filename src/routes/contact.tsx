import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageSquare } from "lucide-react";
import { ExecutiveContactCard } from "@/components/ExecutiveContactCard";
import { WHATSAPP_URL } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — INEDU & CO Professional Services" },
      {
        name: "description",
        content:
          "Speak directly with our executive office regarding consultancy, recovery, verification, commission deals, or financial facilitation services.",
      },
      { property: "og:title", content: "Request Professional Consultation — INEDU & CO" },
      {
        property: "og:description",
        content:
          "Direct line to the MD/CEO office of INEDU & CO Professional Services.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative bg-primary-deep text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]" />
        <div className="relative container-pro">
          <div className="eyebrow !text-white/80 mb-5">
            <span style={{ background: "var(--secondary)" }} />
            Executive Office
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Request Professional Consultation
          </h1>
          <div className="h-1 w-24 bg-secondary mt-6 mb-8" />
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Speak directly with our team regarding consultancy, professional services,
            recovery support, verification, commission deals, or financial facilitation
            services.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container-pro grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <ExecutiveContactCard />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-brand-primary text-white p-8 sm:p-10 rounded-sm shadow-[var(--shadow-elegant)] h-full flex flex-col">
              <div className="h-14 w-14 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3 leading-snug">
                Submit a structured enquiry
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Submit your professional enquiry directly via WhatsApp. Your message
                will reach the executive office of the MD/CEO.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-auto"
              >
                Request Professional Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <div className="text-xs text-white/60 mt-4 tracking-wider uppercase">
                Confidential · Response within business hours
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
