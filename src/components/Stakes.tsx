const stakes = [
  "La calidad de tus decisiones.",
  "Tu capacidad de disfrutar lo que construiste.",
  "Tus vínculos más importantes.",
  "La energía para sostener cosas que antes eran simples.",
  "Tu claridad mental cuando más la necesitás."
];

const Stakes = () => (
  <section className="py-20 md:py-32 px-5 md:px-8 border-t border-brand-muted/50">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
      {/* Columna Izquierda: Textos */}
      <div className="space-y-6 md:space-y-8 lg:sticky lg:top-32">
        <div className="space-y-4 md:space-y-5">
          <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Lo que está en juego</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-brand-dark leading-tight">
            El problema no es solo<br className="hidden md:block" /> el agotamiento.
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-light text-brand-dark/80 leading-relaxed max-w-lg">
            Es todo lo que ese agotamiento empieza a afectar sin que te des cuenta.
          </p>
        </div>
        
        <p className="hidden lg:block text-sm md:text-base font-light text-brand-dark/60 leading-relaxed max-w-md">
          Cuanto más tiempo normalizás eso, más se convierte en tu forma habitual de vivir.
        </p>
      </div>

      {/* Columna Derecha: Items */}
      <div className="space-y-4 md:space-y-6">
        {stakes.map((stake, i) => (
          <div 
            key={i} 
            className="group flex items-start gap-5 border-l-2 border-brand-accent/30 pl-6 py-4 md:py-6 hover:border-brand-accent hover:bg-brand-muted/20 transition-all duration-300"
          >
            <p className="text-lg md:text-xl font-serif italic text-brand-dark/90 leading-snug group-hover:text-brand-dark transition-colors">
              {stake}
            </p>
          </div>
        ))}
        
        <p className="lg:hidden mt-8 text-sm md:text-base font-light text-brand-dark/60 leading-relaxed">
          Cuanto más tiempo normalizás eso, más se convierte en tu forma habitual de vivir.
        </p>
      </div>
    </div>
  </section>
);

export default Stakes;
