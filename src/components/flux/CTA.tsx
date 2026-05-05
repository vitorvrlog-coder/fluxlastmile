import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const CTA = () => {
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", volume: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Recebemos seu contato!", {
      description: "Nosso time comercial responde em até 1 dia útil.",
    });
    setForm({ nome: "", empresa: "", email: "", volume: "" });
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-accent py-24 text-ink lg:py-32">
      {/* Decorative logo motif */}
      <div className="pointer-events-none absolute -left-32 top-1/2 hidden h-96 w-96 -translate-y-1/2 lg:block">
        <div className="animate-spin-slow absolute inset-0">
          {[0, 15, 30, 45].map((r) => (
            <div key={r} className="absolute inset-0 border-2 border-ink/20" style={{ transform: `rotate(${r}deg)` }} />
          ))}
        </div>
      </div>

      <div className="container-flux relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow mb-6 !text-ink before:!bg-ink">Vamos conversar</div>
          <h2 className="text-4xl font-black leading-[0.95] lg:text-6xl xl:text-7xl text-balance">
            Pronto para escalar
            <br />
            sua entrega?
          </h2>
          <p className="mt-6 max-w-md text-lg text-ink/80">
            Conte com um parceiro logístico que respira e-commerce. Solicite uma proposta e
            descubra como a Flux transforma sua última milha.
          </p>

          <div className="mt-10 space-y-2 text-ink/80">
            <div><span className="font-bold text-ink">Comercial:</span> comercial@fluxlastmile.com.br</div>
            <div><span className="font-bold text-ink">Operação:</span> +55 47 98870-4724</div>
            <div><span className="font-bold text-ink">Sede:</span> São Paulo · SP</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 bg-ink p-8 text-white lg:p-10">
          <h3 className="mb-6 text-2xl font-bold">Solicite uma proposta</h3>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">Nome</label>
            <input
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full border-b border-white/30 bg-transparent py-2 text-white outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">Empresa</label>
            <input
              required
              value={form.empresa}
              onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              className="w-full border-b border-white/30 bg-transparent py-2 text-white outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">E-mail corporativo</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border-b border-white/30 bg-transparent py-2 text-white outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">Volume mensal estimado</label>
            <select
              required
              value={form.volume}
              onChange={(e) => setForm({ ...form, volume: e.target.value })}
              className="w-full border-b border-white/30 bg-ink py-2 text-white outline-none transition-colors focus:border-accent"
            >
              <option value="">Selecione</option>
              <option>Até 5 mil pedidos</option>
              <option>5 mil a 30 mil</option>
              <option>30 mil a 100 mil</option>
              <option>+100 mil pedidos</option>
            </select>
          </div>

          <button type="submit" className="btn-yellow mt-8 w-full justify-center">
            Enviar solicitação <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
