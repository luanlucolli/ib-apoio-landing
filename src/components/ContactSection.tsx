import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contato e Localização
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-sans">Telefone</h3>
            <a
              href="tel:+5516999625009"
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              +55 16 99962-5009
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-sans">E-mail</h3>
            <a
              href="mailto:contato@ibapoio.com.br"
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              contato@ibapoio.com.br
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-sans">Endereço</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Rua Francisco Salfer, 63, Apt 102
              <br />
              Costa e Silva, Joinville – SC
              <br />
              89219-166, Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
