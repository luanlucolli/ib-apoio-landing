import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const FooterSection = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <p className="font-semibold text-sm tracking-widest uppercase mb-2">
                IB Apoio Administrativo LTDA
              </p>
              <p className="text-sm text-white/60">CNPJ: 51.044.511/0001-46</p>
            </div>
            <div className="text-sm text-white/60 leading-relaxed md:text-right">
              <p>Rua Francisco Salfer, 63, Apt 102</p>
              <p>Costa e Silva, Joinville – SC, 89219-166, Brasil</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} IB Apoio Administrativo. Todos os direitos reservados.
            </p>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </footer>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Política de Privacidade</DialogTitle>
            <DialogDescription>
              Como lidamos com seus dados e informações.
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 mt-4">
            <p>
              A IB Apoio Administrativo LTDA respeita a sua privacidade e está
              comprometida com a proteção dos dados pessoais dos seus clientes e
              visitantes, em conformidade com a Lei Geral de Proteção de Dados
              (LGPD – Lei nº 13.709/2018).
            </p>
            <p>
              Para mais informações sobre como seus dados são tratados, entre em
              contato conosco.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FooterSection;