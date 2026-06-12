import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
          aria-label="IB Apoio"
        >
          <img
            src="/ibapoiologo.svg"
            alt="Logo IB Apoio"
            className="h-8 w-auto shrink-0 brightness-0 invert"
          />
          <span className="text-white font-semibold tracking-tight text-lg">
            IB Apoio
          </span>
        </button>

        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleClick(l.href)}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 pb-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="block w-full text-left px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;