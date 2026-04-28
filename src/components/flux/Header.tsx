import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/flux-logo-clean.png";
import logoLight from "@/assets/flux-logo-clean.png";

const links = [
  { href: "#empresa", label: "A Flux" },
  { href: "#servicos", label: "Serviços" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-flux flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Flux Last Mile"
            className={`h-16 md:h-20 w-auto transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn-yellow hidden lg:inline-flex">
          Solicitar Proposta
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-flux flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contato" className="btn-yellow w-fit" onClick={() => setOpen(false)}>
              Solicitar Proposta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
