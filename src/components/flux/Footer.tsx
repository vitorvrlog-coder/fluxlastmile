import logo from "@/assets/flux-logo-clean.png";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="container-flux py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logo} alt="Flux Last Mile" className="h-24 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-sm text-sm text-white/60">
              A Flux Last Mile é a parceira logística feita para o e-commerce e varejo brasileiro.
              Tecnologia, frota e gente que respira entrega.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-accent">Navegação</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#empresa" className="hover:text-accent">A Flux</a></li>
              <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
              <li><a href="#solucoes" className="hover:text-accent">Soluções</a></li>
              <li><a href="#cobertura" className="hover:text-accent">Cobertura</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-accent">Contato</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>comercial@fluxlastmile.com.br</li>
              <li>+55 11 4000-0000</li>
              <li>São Paulo · SP · Brasil</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Flux Last Mile. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Política de Privacidade</a>
            <a href="#" className="hover:text-accent">Termos de Uso</a>
            <a href="#" className="hover:text-accent">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
