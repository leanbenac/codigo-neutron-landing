import { motion } from 'motion/react';

const stories = [
  {
    initials: "AL",
    name: "Alex",
    role: "Emprendedor",
    location: "México",
    quote: "Llegué buscando claridad en mis decisiones de negocio. Encontré algo más concreto: una forma distinta de operar que redujo el costo mental de casi todo lo que hacía. Los resultados fueron verificables desde las primeras semanas."
  },
  {
    initials: "MG",
    name: "Maga",
    role: "Profesional",
    location: "México",
    quote: "Mi pareja y yo hicimos el proceso por separado. Hoy somos un equipo completamente distinto. Lo que cambió no fue solo la dinámica entre nosotros, fue cómo cada uno funciona por dentro."
  },
  {
    initials: "JU",
    name: "Julián",
    role: "Creador de contenido · Speaker",
    location: "Argentina",
    quote: "Sentía que mi energía se escapaba sin control y afectaba todo: vínculos, presencia, trabajo. Hoy tengo más claridad mental y menos desgaste. Y lo noto en resultados concretos."
  }
];

const Testimonials = () => (
  <section id="testimonios" className="py-16 md:py-28 px-5 md:px-6 bg-brand-bg border-t border-brand-muted/50">
    <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
      
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
        <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Resultados</p>
        <h2 className="text-2xl md:text-4xl font-serif tracking-tight font-bold text-brand-dark leading-tight">
          Lo que cambia.{' '}
          <span className="italic font-light text-brand-accent">En palabras de quienes lo vivieron.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="bg-white border border-brand-muted rounded-2xl p-6 flex flex-col gap-5"
          >
            <p className="text-sm font-light text-brand-dark/85 leading-relaxed flex-1">
              "{story.quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-brand-muted">
              <div className="w-9 h-9 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
                <span className="text-[11px] font-black text-brand-accent tracking-wider">{story.initials}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark leading-none">{story.name}</p>
                <p className="text-[11px] uppercase tracking-wider text-brand-dark/50 font-medium mt-0.5">{story.role} · {story.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-[11px] opacity-35 uppercase tracking-widest font-bold text-center">
        Trabajo con profesionales de Argentina, España y México.
      </p>
    </div>
  </section>
);

export default Testimonials;
