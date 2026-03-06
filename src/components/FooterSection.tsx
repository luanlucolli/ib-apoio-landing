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
      <footer className="bg-footer text-footer-foreground py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <p className="font-semibold text-sm mb-1">
                IB APOIO ADMINISTRATIVO LTDA
              </p>
              <p className="text-xs opacity-75">CNPJ: 51.044.511/0001-46</p>
            </div>
            <div className="text-xs opacity-75 leading-relaxed md:text-right">
              <p>Rua Francisco Salfer, 63, Apt 102</p>
              <p>Costa e Silva, Joinville – SC, 89219-166, Brasil</p>
            </div>
          </div>

          <div className="border-t border-footer-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-60">
              © {new Date().getFullYear()} IB Apoio Administrativo. Todos os direitos reservados.
            </p>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-xs opacity-75 hover:opacity-100 underline underline-offset-2 transition-opacity"
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
              Esta política de privacidade descreve como coletamos, usamos e
              protegemos suas informações pessoais.
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              A IB Apoio Administrativo LTDA respeita a sua privacidade e está
              comprometida com a proteção dos dados pessoais dos seus clientes e
              visitantes, em conformidade com a Lei Geral de Proteção de Dados
              (LGPD – Lei nº 13.709/2018).
            </p>
            <p>
              Para mais informações sobre como seus dados são tratados, entre em
              contato conosco pelo e-mail contato@ibapoio.com.br.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FooterSection;
