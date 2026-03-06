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
    <section id="servicos" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Oferecemos
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3 font-sans">
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
