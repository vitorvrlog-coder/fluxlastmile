import tracking from "@/assets/tracking.jpg";
import { Check } from "lucide-react";

const items = [
  "Integração via API com plataformas (VTEX, Magento, Shopify, Tray, Linx)",
  "Etiquetas, manifestos e tracking automatizados",
  "Painel do lojista em tempo real com SLA por pedido",
  "Notificações WhatsApp e e-mail para o consumidor",
  "SLA personalizado por região e categoria de produto",
  "NPS pós-entrega e feedback em tempo real",
];

const Solutions = () => {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div className="container-flux grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow mb-6 text-white/70">Tecnologia Flux</div>
          <h2 className="text-4xl font-black leading-tight lg:text-5xl xl:text-6xl text-balance">
            Plataforma plugada ao seu
            <span className="text-accent"> e-commerce</span>.
          </h2>
          <p className="mt-6 max-w-lg text-white/70">
            Conectamos sua operação em poucos dias. A inteligência da Flux fica invisível para o
            cliente final — só a entrega rápida aparece.
          </p>

          <ul className="mt-10 space-y-4">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center bg-accent">
                  <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                </span>
                <span className="text-white/90">{it}</span>
              </li>
            ))}
          </ul>

          <a href="#contato" className="btn-yellow mt-12">
            Quero integrar minha loja
          </a>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden">
            <img src={tracking} alt="Plataforma Flux" className="h-full w-full object-cover" loading="lazy" width={1280} height={896} />
          </div>
          {/* Animated yellow frame motif from logo */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40">
            <div className="animate-spin-slow absolute inset-0">
              {[0, 22, 45, 67].map((r) => (
                <div key={r} className="absolute inset-0 border border-accent/60" style={{ transform: `rotate(${r}deg)` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
