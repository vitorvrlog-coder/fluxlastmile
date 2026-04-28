import fleet from "@/assets/fleet.jpg";

const regions = [
  { region: "Sudeste", cities: "São Paulo · Rio · BH · Vitória", coverage: "100%" },
  { region: "Sul", cities: "Curitiba · Porto Alegre · Floripa", coverage: "98%" },
  { region: "Centro-Oeste", cities: "Brasília · Goiânia · Cuiabá", coverage: "92%" },
  { region: "Nordeste", cities: "Salvador · Recife · Fortaleza", coverage: "85%" },
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
              Mais de 850 cidades atendidas com hubs próprios e parceiros homologados,
              garantindo o mesmo padrão de qualidade em todas as regiões.
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
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={fleet} alt="Frota Flux" className="h-full w-full object-cover" loading="lazy" width={1600} height={1024} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-accent">Frota dedicada</div>
                  <div className="mt-2 text-3xl font-black">+2.500 veículos</div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/60">Hubs</div>
                  <div className="mt-2 text-3xl font-black">38</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
