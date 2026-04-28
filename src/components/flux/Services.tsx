import { Truck, MapPin, RefreshCcw, Boxes, Clock, BarChart3 } from "lucide-react";

const services = [
  { icon: Truck, title: "Last Mile Express", desc: "Entrega urbana same-day e next-day para grandes centros, com SLA acordado e visibilidade ponta a ponta." },
  { icon: Boxes, title: "Fulfillment & Cross-docking", desc: "Recebemos, separamos e expedimos seus pedidos a partir dos nossos hubs estratégicos." },
  { icon: RefreshCcw, title: "Logística Reversa", desc: "Coleta, triagem e devolução de produtos com o mesmo padrão de qualidade da entrega." },
  { icon: MapPin, title: "Roteirização Inteligente", desc: "Algoritmos próprios otimizam cada rota considerando trânsito, janelas e densidade de pedidos." },
  { icon: Clock, title: "Entrega Programada", desc: "Janelas de horário escolhidas pelo consumidor para reduzir falhas e aumentar a satisfação." },
  { icon: BarChart3, title: "BI & Analytics", desc: "Dashboards em tempo real com KPIs operacionais, NPS e indicadores de performance." },
];

const Services = () => {
  return (
    <section id="servicos" className="relative bg-secondary py-24 lg:py-32">
      <div className="container-flux">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Nossos serviços</div>
            <h2 className="text-4xl font-black leading-tight lg:text-5xl xl:text-6xl text-balance">
              Soluções de ponta a ponta para o
              <span className="text-accent"> comércio digital</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Do recebimento no CD até o sorriso do consumidor na porta. Cada etapa pensada para
            converter logística em vantagem competitiva.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-background p-10 transition-all duration-500 hover:bg-ink hover:text-white"
            >
              <div className="absolute right-8 top-8 text-xs font-mono text-muted-foreground group-hover:text-accent">
                0{i + 1}
              </div>
              <s.icon className="h-10 w-10 text-accent transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-8 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">
                {s.desc}
              </p>
              <div className="mt-8 h-px w-10 bg-accent transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
