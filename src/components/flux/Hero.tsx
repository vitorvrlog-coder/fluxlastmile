import { ArrowRight, Package } from "lucide-react";
import hero from "@/assets/hero-delivery.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full object-cover opacity-60" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative yellow square frames (logo motif) */}
      <div className="pointer-events-none absolute -right-24 top-32 hidden lg:block">
        <div className="relative h-80 w-80">
          {[0, 15, 30, 45].map((rot) => (
            <div
              key={rot}
              className="absolute inset-0 border-2 border-accent/40"
              style={{ transform: `rotate(${rot}deg)` }}
            />
          ))}
        </div>
      </div>

      <div className="container-flux relative z-10 flex min-h-screen flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="eyebrow text-white/80 mb-6">
            <span className="!before:bg-accent">Last mile · E-commerce · Varejo</span>
          </div>

          <h1 className="text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl">
            A última milha
            <br />
            do seu <span className="bg-accent px-3 text-ink">e-commerce</span>
            <br />
            entregue com precisão.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-white/80">
            Logística de entrega especializada para varejistas e marketplaces. Reduza prazos,
            aumente a satisfação do cliente e escale sua operação com a Flux.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contato" className="btn-yellow">
              Solicitar Proposta <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="btn-outline-light">
              Conheça os Serviços
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-px bg-white/15 lg:grid-cols-4">
          {[
            { v: "+8M", l: "Entregas/ano" },
            { v: "98%", l: "On-time delivery" },
            { v: "850+", l: "Cidades atendidas" },
            { v: "24/7", l: "Operação ativa" },
          ].map((s) => (
            <div key={s.l} className="bg-ink p-6">
              <div className="text-3xl font-black text-accent lg:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60 lg:flex">
        <Package className="h-4 w-4 text-accent" />
        Scroll
        <div className="h-px w-12 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
