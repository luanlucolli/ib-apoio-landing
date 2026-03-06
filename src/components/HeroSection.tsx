const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in-up">
            Apoio Administrativo Especializado
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            IB Apoio Administrativo
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Eficiência, segurança e organização para a gestão do seu negócio.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors duration-200 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
