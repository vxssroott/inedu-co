import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="group relative bg-card border border-border rounded-sm p-8 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 hover:border-primary/40 overflow-hidden">
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-secondary group-hover:w-full transition-all duration-500" />
      <div className="absolute top-6 right-6 font-serif text-5xl font-bold text-accent group-hover:text-primary/10 transition-colors">
        {service.number}
      </div>
      <div className="relative">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-brand-primary mb-6 shadow-[var(--shadow-card)]">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-snug pr-8">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      </div>
    </div>
  );
}
