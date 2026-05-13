import { motion } from 'motion/react';

const includes = [
  "2 sesiones individuales semanales de 60 min por Google Meet",
  "Seguimiento continuo por WhatsApp entre sesiones",
  "Material exclusivo aplicable desde la primera semana",
  "Métricas reales de avance en 5 áreas",
  "Acceso a Taller grabado Energía Vital"
];

const Investment = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-white border-t border-brand-muted/50">
    <div className="max-w-3xl mx-auto space-y-10 md:space-y-14">

      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">La inversión</p>
        <h2 className="text-2xl md:text-4xl font-serif tracking-tight font-bold text-brand-dark leading-tight">
          Individual. Concreto.{' '}
          <span className="italic font-light text-brand-accent">Con métricas reales.</span>
        </h2>
        <p className="text-sm md:text-base font-light text-brand-dark/75 leading-relaxed max-w-xl">
          La mayoría llega cuando ya no quiere sostener el mismo nivel de desgaste otro año más.
        </p>
      </div>

      <div className="bg-brand-bg border border-brand-muted rounded-2xl md:rounded-3xl p-6 md:p-12 space-y-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-dark">USD 2.500</p>
          <p className="text-[11px] uppercase tracking-[0.35em] font-bold opacity-60">Proceso individual · 3 meses · 24 sesiones</p>
        </motion.div>

        <div className="h-px bg-brand-muted" />

        <ul className="space-y-4">
          {includes.map((item, i) => (
            <li key={i} className="flex gap-3 items-start font-light text-sm md:text-base text-brand-dark/90">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="space-y-4 pt-2">
          <a 
            href="https://calendly.com/patopietra/new-meeting?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-dark text-white px-6 py-4 md:py-5 rounded-sm text-[11px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold hover:bg-brand-accent transition-all shadow-lg flex items-center justify-center text-center leading-tight"
          >
            CONOCER LA PROPUESTA
          </a>
          <p className="text-[10px] font-light opacity-60 italic text-center leading-snug uppercase tracking-widest">
            Si en la primera semana sentís que no es para vos, devolvemos el 100% de tu inversión.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Investment;
