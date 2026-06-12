import { motion } from 'motion/react';

const steps = [
  { n: "01", label: "Identificación de patrones automáticos", desc: "Se mapean los circuitos mentales que operan sin conciencia y generan desgaste sostenido." },
  { n: "02", label: "Intervención sobre drenajes de energía", desc: "Se detecta dónde se van los recursos mentales y emocionales, y se trabaja sobre relaciones y dinámicas de alto costo." },
  { n: "03", label: "Ejercicios concretos entre sesiones", desc: "Aplicaciones prácticas diseñadas para integrarse a tu rutina sin agregar carga." },
  { n: "04", label: "Métricas semanales de seguimiento", desc: "Evaluación cuantitativa en 5 áreas para observar movimiento real semana a semana." },
];

const HowItWorks = () => (
  <section id="metodologia" className="py-16 md:py-28 px-5 md:px-6 bg-white border-t border-brand-muted/50">
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
        <p className="text-sm md:text-base font-normal text-brand-dark/90 leading-relaxed">
          No es terapia. No es coaching motivacional. Es un proceso de intervención estructurado sobre el funcionamiento mental real, con herramientas y métricas.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group p-5 md:p-6 border border-brand-muted rounded-xl hover:border-brand-accent/40 hover:shadow-sm transition-all bg-white"
          >
            <div className="flex gap-4 items-start">
              <span className="text-xs font-black text-brand-accent/40 group-hover:text-brand-accent/80 transition-colors shrink-0 pt-0.5 tabular-nums">{step.n}</span>
              <div className="space-y-1">
                <p className="text-sm font-bold text-brand-dark leading-snug">{step.label}</p>
                <p className="text-xs md:text-sm font-normal text-brand-dark/90 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-3 items-start w-full"
      >
        <a
          href="https://calendly.com/patopietra/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-dark text-white w-full sm:w-auto px-10 py-5 rounded-md text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-accent hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-500 flex sm:inline-flex items-center justify-center text-center leading-tight"
        >
          EVALUAR MI SITUACIÓN
        </a>
        <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Acompañamiento individual integral · 3 meses</p>
      </motion.div>

    </div>
  </section>
);

export default HowItWorks;
