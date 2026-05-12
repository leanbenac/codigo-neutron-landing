import { motion } from 'motion/react';

const PainPoints = () => {
  const points = [
    "Terminás el día mentalmente agotado aunque no haya pasado nada grave.",
    "Entendés tus patrones, pero eso no evita que los repitás.",
    "Necesitás demasiada energía para decisiones que deberían ser simples.",
    "Tu vida funciona, pero internamente todo cuesta más de lo necesario.",
    "Ya hiciste terapia o coaching. Entendés el origen. Y aun así, nada cambia de fondo."
  ];

  return (
    <section className="py-16 md:py-32 px-5 md:px-6 bg-brand-bg border-t border-brand-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Cards Column (Left) */}
          <div className="space-y-3 order-2 md:order-1">
            {points.map((point, i) => (
              <div 
                key={i}
                className="group flex gap-5 items-start p-5 md:p-6 rounded-xl border border-brand-muted hover:border-brand-accent/30 hover:bg-white transition-all shadow-sm hover:shadow-md"
              >
                <span className="text-xs font-black text-brand-accent/40 group-hover:text-brand-accent/80 transition-colors shrink-0 pt-0.5 tabular-nums">0{i + 1}</span>
                <p className="text-sm md:text-base font-medium text-brand-dark group-hover:text-brand-dark transition-colors leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Title Column (Right) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:sticky md:top-32 order-1 md:order-2"
          >
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Autodiagnóstico</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight font-bold text-brand-dark leading-tight">
                ¿Esto describe<br />
                <span className="italic font-light text-brand-accent">tu situación?</span>
              </h2>
            </div>
            <div className="h-px w-12 bg-brand-accent" />
            <p className="text-base md:text-lg font-normal text-brand-dark/90 leading-relaxed max-w-sm">
              El agotamiento no siempre es falta de ganas. A veces es el resultado de un sistema interno que opera con demasiada fricción y un alto costo de procesamiento.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
