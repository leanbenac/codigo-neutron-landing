const stakes = [
  "La calidad de tus decisiones.",
  "Tu capacidad de disfrutar lo que construiste.",
  "Tus vínculos más importantes.",
  "La energía para sostener cosas que antes eran simples.",
  "Tu claridad mental cuando más la necesitás."
];

const Stakes = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 border-t border-brand-muted/50">
    <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Lo que está en juego</p>
        <h2 className="text-2xl md:text-4xl font-serif font-bold tracking-tight text-brand-dark leading-tight">
          El problema no es solo<br />el agotamiento.
        </h2>
        <p className="text-sm md:text-base font-light text-brand-dark/55 leading-relaxed max-w-lg">
          Es todo lo que ese agotamiento empieza a afectar sin que te des cuenta:
        </p>
      </div>

      <div className="space-y-2">
        {stakes.map((stake, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-brand-accent/20 pl-5 py-3 hover:border-brand-accent transition-colors">
            <p className="text-sm md:text-base font-serif italic text-brand-dark/70 leading-snug">{stake}</p>
          </div>
        ))}
      </div>

      <p className="text-xs md:text-sm font-light opacity-40 leading-relaxed max-w-lg">
        Cuanto más tiempo normalizás eso, más se convierte en tu forma habitual de vivir.
      </p>
    </div>
  </section>
);

export default Stakes;
