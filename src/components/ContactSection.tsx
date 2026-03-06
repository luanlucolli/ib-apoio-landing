import { Phone, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contato e Localização
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Entre em contato conosco ou venha nos visitar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14">
          {/* Telefone */}
          <a
            href="tel:+5516999625009"
            className="group relative bg-card rounded-xl border border-border p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-accent/40 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
              <Phone className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-sans text-lg">
              Telefone
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Ligue ou envie uma mensagem
            </p>
            <span className="text-accent font-medium text-base tracking-wide">
              +55 16 99962-5009
            </span>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-accent transition-colors duration-300">
              Clique para ligar
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          {/* Endereço */}
          <a
            href="https://maps.google.com/?q=Rua+Francisco+Salfer+63+Costa+e+Silva+Joinville+SC"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card rounded-xl border border-border p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-accent/40 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
              <MapPin className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-sans text-lg">
              Endereço
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Venha nos visitar
            </p>
            <span className="text-foreground font-medium text-sm leading-relaxed">
              Rua Francisco Salfer, 63, Apt 102
              <br />
              Costa e Silva, Joinville – SC
              <br />
              89219-166, Brasil
            </span>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-accent transition-colors duration-300">
              Abrir no Google Maps
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md border border-border">
          <iframe
            title="Localização IB Apoio Administrativo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.!2d-48.8487!3d-26.3044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Francisco+Salfer%2C+63+-+Costa+e+Silva%2C+Joinville+-+SC%2C+89219-166!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
