import { motion } from 'motion/react';

const includes = [
  "2 sesiones individuales semanales de 60 min por Google Meet",
  "Seguimiento continuo por WhatsApp entre sesiones",
  "Material exclusivo aplicable desde la primera semana",
  "Métricas reales de avance en 5 áreas",
  "Acceso a Taller grabado Energía Vital"
];

const Investment = () => (
  <section id="inversion" className="py-16 md:py-28 px-5 md:px-6 bg-white border-t border-brand-muted/50">
    <div className="max-w-3xl mx-auto space-y-10 md:space-y-14">

      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">La inversión</p>
        <h2 className="text-2xl md:text-4xl font-serif tracking-tight font-bold text-brand-dark leading-tight">
          Individual. Concreto.{' '}
          <span className="italic font-light text-brand-accent">Con métricas reales.</span>
        </h2>
      </div>

      <div className="bg-brand-bg border border-brand-muted rounded-2xl md:rounded-3xl p-6 md:p-12 space-y-8">
        <p className="text-sm md:text-base font-medium text-brand-dark/90 italic leading-relaxed">
          "Un proceso de reingeniería mental diseñado para líderes y empresarios que manejan decisiones de alto valor."
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] font-bold opacity-80 text-brand-dark">Programa · Acompañamiento individual integral · 3 meses</p>
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

        <div className="p-6 md:p-8 bg-white border border-brand-muted rounded-2xl text-center space-y-6 flex flex-col items-center shadow-sm">
          <div className="space-y-1.5">
            <span className="text-xs md:text-sm uppercase tracking-[0.35em] font-bold text-brand-accent">Inversión en el programa</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-brand-dark font-bold tracking-tight">
              Postularse al programa
            </h3>
          </div>

          <a 
            href="https://forms.gle/N7AT2DBgPaVGJEuk7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-dark text-white px-8 py-5 rounded-md text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all shadow-lg flex items-center justify-center text-center leading-tight hover:scale-[1.01] duration-300"
          >
            APLICAR A CÓDIGO NEUTRÓN
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
