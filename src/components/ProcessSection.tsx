import { motion } from 'motion/react';

const pillars = [
  { phase: "Fase 01", title: "Dinero y desgaste", desc: "Identificamos dónde se escapan los recursos y qué patrones lo sostienen." },
  { phase: "Fase 02", title: "Relaciones y energía", desc: "Reordenamos los vínculos que drenan en lugar de potenciar." },
  { phase: "Fase 03", title: "Decisiones y claridad", desc: "Cambiamos cómo procesás información para que decidir no cueste tanto." },
  { phase: "Fase 04", title: "Energía y funcionamiento diario", desc: "Rediseñamos cómo operás para que la vida funcione sin ese nivel de esfuerzo sostenido." }
];

const ProcessSection = () => (
  <section id="proceso" className="py-16 md:py-28 px-5 md:px-6 bg-brand-bg border-t border-brand-muted/50">
    <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">

      <div className="space-y-3 text-center">
        <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Las 4 fases</p>
        <h2 className="text-2xl md:text-4xl font-serif tracking-tight font-bold text-brand-dark leading-tight">
          La estructura<br className="md:hidden" />{' '}
          <span className="italic font-light text-brand-accent">del proceso</span>
        </h2>
      </div>

      {/* Mobile: stacked cards / Desktop: alternating timeline */}
      <div className="space-y-4 md:space-y-0 md:relative">
        {/* Timeline line - desktop only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-accent/15 -translate-x-1/2" />

        <div className="space-y-4 md:space-y-10">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Mobile card layout */}
              <div className="md:hidden flex gap-4 p-5 bg-white border border-brand-muted rounded-xl">
                <div className="shrink-0 pt-0.5">
                  <span className="text-[11px] font-black text-brand-accent uppercase tracking-widest">{pillar.phase}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-brand-dark">{pillar.title}</h3>
                  <p className="text-xs font-light text-brand-dark/55 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>

              {/* Desktop alternating layout */}
              <div className={`hidden md:flex items-center gap-16 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">{pillar.phase}</span>
                  <h3 className={`text-xl font-serif font-bold text-brand-dark ${i % 2 !== 0 ? 'text-left' : 'text-right'}`}>{pillar.title}</h3>
                  <p className={`text-base font-light text-brand-dark/55 leading-relaxed ${i % 2 !== 0 ? 'text-left' : 'text-right'}`}>{pillar.desc}</p>
                </div>
                <div className="relative z-10 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-brand-accent flex items-center justify-center shadow-md shadow-brand-accent/15">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  </div>
                </div>
                <div className="w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
