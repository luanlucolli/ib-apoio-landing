import { ArrowRight, CheckCircle2, BarChart3, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-primary overflow-hidden">
      {/* grade de fundo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* brilho sutil para quebrar o fundo chapado */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase">
                Apoio Administrativo Especializado
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Eficiência e segurança para a <span className="text-white/60">gestão do seu negócio.</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl font-light">
              Garantimos que você possa se concentrar no crescimento da sua empresa, 
              enquanto cuidamos de toda a operação administrativa com excelência.
            </p>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-primary font-medium text-sm hover:bg-gray-100 transition-all duration-300"
            >
              Entrar em Contato
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* composição visual lado direito */}
          <div className="relative hidden lg:block h-[480px]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[420px]">
              <div className="flex flex-col gap-4">
                
                {/* card 1 */}
                <div className="bg-primary border border-white/10 rounded-xl p-5 flex items-start gap-4 shadow-2xl shadow-black/50 transform transition-transform hover:-translate-y-1 relative z-30">
                  <div className="p-3 rounded-lg bg-white/5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium mb-1">Processos Otimizados</h3>
                    <p className="text-white/50 text-xs leading-relaxed">Fluxos de trabalho mapeados e padronizados para máxima eficiência.</p>
                  </div>
                </div>

                {/* card 2 */}
                <div className="bg-primary/95 backdrop-blur-md border border-white/10 rounded-xl p-5 flex items-start gap-4 shadow-2xl shadow-black/50 transform transition-transform hover:-translate-y-1 ml-12 relative z-20">
                  <div className="p-3 rounded-lg bg-white/5 shrink-0">
                    <BarChart3 className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium mb-1">Gestão Transparente</h3>
                    <p className="text-white/50 text-xs leading-relaxed">Acompanhamento contínuo e rastreabilidade total das operações.</p>
                  </div>
                </div>

                {/* card 3 */}
                <div className="bg-primary/90 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-start gap-4 shadow-2xl shadow-black/50 transform transition-transform hover:-translate-y-1 mr-12 relative z-10">
                  <div className="p-3 rounded-lg bg-white/5 shrink-0">
                    <FileText className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium mb-1">Controle Documental</h3>
                    <p className="text-white/50 text-xs leading-relaxed">Organização impecável do acervo físico e digital da sua empresa.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;