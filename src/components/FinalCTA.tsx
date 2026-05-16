const FinalCTA = () => (
  <section id="contacto" className="py-24 md:py-40 px-6 text-center bg-brand-bg border-t border-brand-muted/50 relative overflow-hidden">
    <div className="max-w-3xl mx-auto space-y-10 relative z-10">
      <div className="space-y-5">
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-accent">El siguiente paso</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tighter text-brand-dark leading-none">
          Una conversación<br />
          de <span className="italic font-serif text-brand-accent">15 minutos.</span>
        </h2>
        <div className="h-px w-12 bg-brand-accent mx-auto" />
        <p className="text-base md:text-lg font-light text-brand-dark/45 max-w-lg mx-auto leading-relaxed">
          Para ver si este proceso tiene sentido para tu situación ahora.
        </p>
      </div>

      <div className="space-y-4 w-full">
        <a
          href="https://wa.me/5491161361269?text=Hola%20Patricia%2C%20le%C3%AD%20sobre%20el%20Programa%20C%C3%B3digo%20Neutr%C3%B3n%20y%20quiero%20evaluar%20mi%20situaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-dark text-white w-full sm:w-auto px-12 py-6 rounded-md text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-accent hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-500 flex sm:inline-flex items-center justify-center text-center leading-tight shadow-xl"
        >
          CONOCER LA PROPUESTA
        </a>
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">Lugares limitados · Respuesta en menos de 24 horas</p>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(180,159,96,0.04),transparent)] pointer-events-none" />
  </section>
);

export default FinalCTA;
