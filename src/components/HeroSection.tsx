const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large abstract shapes */}
      <div className="absolute -top-32 -right-28 w-[420px] h-[420px] rounded-full border border-primary-foreground/10" />
      <div className="absolute -top-20 -right-12 w-[280px] h-[280px] rounded-full border border-primary-foreground/10" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[360px] h-[360px] rounded-full border border-primary-foreground/10" />

      {/* Accent lines */}
      <div className="absolute right-0 top-24 hidden lg:block w-[38%] h-px bg-gradient-to-l from-accent/70 via-primary-foreground/15 to-transparent" />
      <div className="absolute right-20 top-40 hidden lg:block w-[28%] h-px bg-gradient-to-l from-primary-foreground/25 to-transparent" />
      <div className="absolute left-0 bottom-28 hidden md:block w-[32%] h-px bg-gradient-to-r from-accent/60 via-primary-foreground/10 to-transparent" />

      {/* Floating administrative cards */}
      <div className="absolute right-12 top-1/2 hidden xl:block w-64 -translate-y-1/2 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5 backdrop-blur-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-accent/90" />
          <div>
            <div className="h-2.5 w-24 rounded-full bg-primary-foreground/30" />
            <div className="mt-2 h-2 w-16 rounded-full bg-primary-foreground/15" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-2.5 w-full rounded-full bg-primary-foreground/15" />
          <div className="h-2.5 w-5/6 rounded-full bg-primary-foreground/15" />
          <div className="h-2.5 w-2/3 rounded-full bg-primary-foreground/15" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-14 rounded-lg bg-primary-foreground/[0.06]" />
          <div className="h-14 rounded-lg bg-primary-foreground/[0.09]" />
          <div className="h-14 rounded-lg bg-accent/20" />
        </div>
      </div>

      <div className="absolute right-[28%] bottom-24 hidden lg:block rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70 backdrop-blur-sm">
        Processos
      </div>

      <div className="absolute right-[18%] top-28 hidden lg:flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/[0.04] px-4 py-2 text-xs text-primary-foreground/65 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-accent" />
        Organização operacional
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in-up">
            Apoio Administrativo Especializado
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            IB Apoio Administrativo
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Eficiência, segurança e organização para a gestão do seu negócio.
          </p>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors duration-200 animate-fade-in-up shadow-lg shadow-black/10"
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