import warehouse from "@/assets/warehouse.jpg";

const About = () => {
  return (
    <section id="empresa" className="relative bg-background py-24 lg:py-32">
      <div className="container-flux grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={warehouse} alt="Centro de distribuição Flux" className="h-full w-full object-cover" loading="lazy" width={1280} height={896} />
          </div>
          {/* Yellow accent block */}
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 bg-accent lg:block" />
          <div className="absolute -top-6 -left-6 hidden h-24 w-24 border-4 border-ink lg:block" />
        </div>

        <div className="flex flex-col justify-center">
          <div className="eyebrow mb-6">A Flux Last Mile</div>
          <h2 className="text-4xl font-black leading-tight lg:text-5xl xl:text-6xl text-balance">
            Entregamos o que o
            <span className="text-accent"> e-commerce </span>
            precisa: velocidade, dado e escala.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Nascemos 100% focados em last mile para varejistas online. Não somos uma transportadora
            generalista — somos um parceiro estratégico de logística desenhado para o ritmo do
            comércio digital brasileiro.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Com tecnologia proprietária, frota dedicada e malha urbana inteligente, a Flux conecta
            o seu fulfillment ao consumidor final com a melhor experiência de entrega do mercado.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { t: "Foco total", d: "100% e-commerce e varejo" },
              { t: "Tecnologia própria", d: "Roteirização e tracking em tempo real" },
              { t: "Frota dedicada", d: "Veículos brandeados e rastreados" },
              { t: "Cobertura nacional", d: "Sul, Sudeste, Centro-Oeste e Nordeste" },
            ].map((i) => (
              <div key={i.t} className="border-l-2 border-accent pl-4">
                <div className="font-bold">{i.t}</div>
                <div className="text-sm text-muted-foreground">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
