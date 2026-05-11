import { motion } from 'motion/react';

const Hero = () => (
  <section className="relative pt-28 pb-12 px-5 min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="max-w-4xl space-y-8 md:space-y-12 w-full"
    >
      {/* Brand */}
      <div className="space-y-1.5">
        <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent/70">Proceso individual · 3 meses</p>
        <h2 className="text-lg md:text-2xl font-serif font-bold tracking-tight text-brand-dark">CÓDIGO NEUTRÓN</h2>
        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-dark/35 font-medium">por Patricia Pietrasanta</p>
      </div>

      {/* Divider */}
      <div className="h-px w-12 bg-brand-accent mx-auto" />

      {/* Headline */}
      <div className="space-y-5">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight font-medium text-brand-dark">
          Para personas que entienden<br className="hidden sm:block" /> perfectamente lo que les pasa…
          <br />
          <span className="italic font-serif font-light text-brand-accent">pero siguen viviendo agotadas.</span>
        </h1>
        
        <p className="text-sm md:text-base font-light text-brand-dark/50 max-w-xl mx-auto leading-relaxed">
          Un proceso individual para quienes sostienen su vida y su trabajo, pero sienten que todo requiere más energía de la necesaria.
        </p>
      </div>

      {/* CTA */}
      <div className="space-y-3 pt-4 w-full">
        <a 
          href="https://calendly.com/patopietra/new-meeting?month=2026-05"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-dark text-white w-full sm:w-auto px-6 py-4 md:py-5 rounded-sm text-[11px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold hover:bg-brand-accent transition-all shadow-lg shadow-brand-dark/10 flex sm:inline-flex items-center justify-center text-center leading-tight"
        >
          EVALUAR SI ESTE PROCESO<br className="sm:hidden" /> TIENE SENTIDO PARA MÍ
        </a>
        <p className="text-[10px] uppercase tracking-widest opacity-35 font-bold">30 minutos · Sin presión · Sin venta forzada</p>
      </div>
    </motion.div>

    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(180,159,96,0.15)_0%,transparent_70%)] animate-glow" />
  </section>
);

export default Hero;
