import { motion } from 'motion/react';

const steps = [
  { n: "01", label: "Identificación de patrones automáticos", desc: "Se mapean los circuitos mentales que operan sin conciencia y generan desgaste sostenido." },
  { n: "02", label: "Registro de drenajes de energía", desc: "Se detecta dónde se van los recursos mentales y emocionales sin retorno equivalente." },
  { n: "03", label: "Revisión de decisiones repetitivas", desc: "Se analizan los ciclos de decisión que se repiten aunque el resultado siempre sea el mismo." },
  { n: "04", label: "Intervención sobre vínculos de alto costo", desc: "Se trabaja sobre relaciones y dinámicas que consumen más recursos de los que aportan." },
  { n: "05", label: "Ejercicios concretos entre sesiones", desc: "Aplicaciones prácticas diseñadas para integrarse a la rutina sin agregar carga." },
  { n: "06", label: "Métricas semanales de seguimiento", desc: "Evaluación cuantitativa en 5 áreas para observar movimiento real semana a semana." },
  { n: "07", label: "Aplicación en situaciones reales", desc: "Cada herramienta se ajusta a los contextos específicos de tu vida, no a modelos genéricos." },
];

const HowItWorks = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-white border-t border-brand-muted/50">
    <div className="max-w-5xl mx-auto space-y-10 md:space-y-16">
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-3 max-w-2xl"
      >
        <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Metodología</p>
        <h2 className="text-2xl md:text-4xl font-serif tracking-tight font-bold text-brand-dark leading-tight">
          Cómo funciona<br />
          <span className="italic font-light text-brand-accent">el proceso</span>
        </h2>
        <p className="text-sm md:text-base font-light text-brand-dark/75 leading-relaxed">
          No es terapia. No es coaching motivacional. Es un proceso de intervención estructurado sobre el funcionamiento mental real, con herramientas y métricas.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className={`group p-5 md:p-6 border border-brand-muted rounded-xl hover:border-brand-accent/40 hover:shadow-sm transition-all bg-white ${i === 6 ? 'sm:col-span-2' : ''}`}
          >
            <div className="flex gap-4 items-start">
              <span className="text-xs font-black text-brand-accent/35 group-hover:text-brand-accent/70 transition-colors shrink-0 pt-0.5 tabular-nums">{step.n}</span>
              <div className="space-y-1">
                <p className="text-sm font-bold text-brand-dark/90 leading-snug">{step.label}</p>
                <p className="text-xs md:text-sm font-light text-brand-dark/75 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-3 items-start w-full"
      >
        <a
          href="https://calendly.com/patopietra/new-meeting?month=2026-05"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-dark text-white w-full sm:w-auto px-6 py-4 md:py-5 rounded-sm text-[11px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold hover:bg-brand-accent transition-all shadow-md flex sm:inline-flex items-center justify-center text-center leading-tight"
        >
          EVALUAR SI ESTE PROCESO<br className="sm:hidden" /> TIENE SENTIDO PARA MÍ
        </a>
        <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Proceso individual · 24 sesiones</p>
      </motion.div>

    </div>
  </section>
);

export default HowItWorks;
