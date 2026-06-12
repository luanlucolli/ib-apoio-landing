import { ClipboardList, Settings, Headphones } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Gestão Administrativa",
    description:
      "Organização e controle de documentos, processos internos e rotinas administrativas com total transparência e rastreabilidade.",
  },
  {
    icon: Settings,
    title: "Organização de Processos",
    description:
      "Mapeamento, padronização e otimização de fluxos de trabalho para garantir máxima eficiência operacional.",
  },
  {
    icon: Headphones,
    title: "Suporte Operacional",
    description:
      "Assistência dedicada no dia a dia da sua empresa, garantindo continuidade e qualidade nas operações.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">
            O Que Oferecemos
          </h2>
          <div className="w-12 h-1 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-10 border border-border/50 hover:border-border transition-colors duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-8 stroke-[1.5]" />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;