const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Sobre Nós
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            A <strong className="text-foreground">IB Apoio Administrativo</strong> oferece 
            suporte administrativo robusto e confiável para empresas que desejam 
            otimizar suas operações. Com foco em eficiência e organização, garantimos 
            que nossos clientes possam se concentrar no que realmente importa, o 
            crescimento do seu negócio, enquanto nós cuidamos de toda a parte 
            operacional e administrativa com segurança e excelência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;