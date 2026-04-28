import fleet from "@/assets/fleet.jpg";

const regions = [
  { region: "Centro-Oeste", cities: "Brasília · Goiânia · Cuiabá · Campo Grande", coverage: "100%" },
  { region: "Sudeste", cities: "São Paulo · Rio · BH · Vitória", coverage: "92%" },
  { region: "Sul", cities: "Curitiba · Porto Alegre · Floripa", coverage: "85%" },
  { region: "Nordeste", cities: "Salvador · Recife · Fortaleza", coverage: "70%" },
];

const Coverage = () => {
  return (
    <section id="cobertura" className="relative bg-background py-24 lg:py-32">
      <div className="container-flux">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">Cobertura nacional</div>
            <h2 className="text-4xl font-black leading-tight lg:text-5xl text-balance">
              Onde o Brasil compra,
              <br />
              a <span className="text-accent">Flux</span> entrega.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Operação com <strong className="text-foreground">frota mista</strong> — veículos próprios
              e parceiros agregados homologados — com hub estratégico no{" "}
              <strong className="text-foreground">Centro-Oeste</strong>, atendendo o coração logístico
              do Brasil com o mesmo padrão de qualidade e rastreabilidade ponta a ponta.
            </p>

            <div className="mt-10 space-y-px">
              {regions.map((r) => (
                <div
                  key={r.region}
                  className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:border-accent"
                >
                  <div>
                    <div className="text-2xl font-bold">{r.region}</div>
                    <div className="text-sm text-muted-foreground">{r.cities}</div>
                  </div>
                  <div className="text-3xl font-black text-accent">{r.coverage}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-soft">
              <img src={fleet} alt="Frota Flux" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" width={1600} height={1024} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

              {/* Top badge */}
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink">
                <span className="h-2 w-2 animate-pulse rounded-full bg-ink" />
                Frota mista · própria + agregada
              </div>

              {/* Bottom info */}
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="grid grid-cols-3 gap-px bg-white/10">
                  <div className="bg-ink/90 p-4 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Veículos</div>
                    <div className="mt-1 text-2xl font-black text-white lg:text-3xl">50+</div>
                    <div className="mt-1 text-[11px] text-white/60">próprios e agregados</div>
                  </div>
                  <div className="bg-ink/90 p-4 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Hubs</div>
                    <div className="mt-1 text-2xl font-black text-white lg:text-3xl">3</div>
                    <div className="mt-1 text-[11px] text-white/60">base no Centro-Oeste</div>
                  </div>
                  <div className="bg-ink/90 p-4 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Entregadores</div>
                    <div className="mt-1 text-2xl font-black text-white lg:text-3xl">120+</div>
                    <div className="mt-1 text-[11px] text-white/60">homologados</div>
                  </div>
                </div>
              </div>

              {/* Corner brackets */}
              <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-accent" />
            </div>

            {/* Side caption */}
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span>Modelo híbrido</span>
              <span className="text-accent">flexibilidade + escala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
