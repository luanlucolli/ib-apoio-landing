import { Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">
              Contato e Localização
            </h2>
            <div className="w-12 h-1 bg-primary mb-12" />
            
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Telefone</h3>
                  <a
                    href="tel:+5516999625009"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 16 99962-5009
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Endereço</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rua Francisco Salfer, 63, Apt 102<br />
                    Costa e Silva, Joinville – SC<br />
                    89219-166, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[400px] bg-muted border border-border p-1">
            <iframe
              title="Localização IB Apoio Administrativo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.632938167733!2d-48.8687796!3d-26.2735749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deaf6209503525%3A0xc3191fcdfa0dd48c!2sR.%20Francisco%20Salfer%2C%2063%20-%20Costa%20e%20Silva%2C%20Joinville%20-%20SC%2C%2089219-166!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;