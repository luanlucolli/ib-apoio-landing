const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-primary border-t border-white/5 overflow-hidden">
      {/* mantendo a grade sutil da hero para continuidade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="shrink-0 md:w-48">
            <h2 className="text-xs font-medium text-white/40 tracking-[0.2em] uppercase">
              Sobre Nós
            </h2>
          </div>
          <div>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-light">
              A IB Apoio Administrativo oferece suporte robusto e confiável para 
              empresas que desejam otimizar suas operações. Com foco absoluto em 
              organização, desenhamos fluxos de trabalho claros para que nenhuma 
              informação se perca e sua empresa opere com máxima fluidez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;