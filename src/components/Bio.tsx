import { motion } from 'motion/react';

const Bio = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-white border-t border-brand-muted/50">
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* Photo - shows first on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-brand-muted/20">
            <img 
              src="https://coachinginline.weebly.com/uploads/1/7/1/5/17154702/published/generated-image-october-31-2025-12-19pm-2-1.jpg?1778345920" 
              alt="Patricia Pietrasanta" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <div className="space-y-1.5">
            <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Quién te acompaña</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-brand-dark leading-none">
              Patricia<br />
              <span className="font-serif italic text-brand-accent">Pietrasanta</span>
            </h2>
          </div>

          <div className="h-px w-10 bg-brand-accent" />

          <div className="space-y-3 md:space-y-4">
            <p className="text-sm md:text-base font-light text-brand-dark/65 leading-relaxed">
              Hace más de 13 años acompaño a profesionales y emprendedores en procesos de cambio personal y mental. Trabajo con quienes ya agotaron las explicaciones y necesitan que algo realmente cambie de fondo.
            </p>
            <p className="text-sm md:text-base font-light text-brand-dark/65 leading-relaxed">
              Creadora de Código Neutrón, un método de intervención estructurado sobre patrones mentales con métricas verificables en 5 áreas: <span className="font-medium text-brand-dark">Paz, Economía, Relaciones, Adaptabilidad y Salud.</span>
            </p>
          </div>

          <blockquote className="border-l-2 border-brand-accent pl-5 py-1">
            <p className="text-sm font-serif italic text-brand-dark/55 leading-relaxed">
              "No trabajo con motivación ni con promesas. Trabajo con el funcionamiento real de la mente."
            </p>
          </blockquote>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Bio;
