const logos = [
  "VAREJISTA", "MARKETPLACE", "FASHION CO.", "ELETRO+", "CASA & DECOR",
  "BEAUTY BR", "SPORTS HUB", "PET STORE", "LIVRARIA", "TECH SHOP",
];

const Clients = () => {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary py-16">
      <div className="container-flux mb-10 flex items-center justify-center gap-3 text-center">
        <div className="h-px w-10 bg-accent" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Empresas que entregam com a Flux
        </span>
        <div className="h-px w-10 bg-accent" />
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-16">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-2xl font-black tracking-tight text-foreground/30 transition-colors hover:text-foreground"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
