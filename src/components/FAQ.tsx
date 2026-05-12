import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Ya hice terapia y coaching. ¿Por qué esto sería diferente?",
    a: "La terapia explica qué te pasa y por qué. Código Neutrón trabaja en otra capa: cambiar cómo funcionan los patrones para que los resultados cambien. Entender el origen de un problema y resolverlo son dos procesos distintos."
  },
  {
    q: "¿Es individual o grupal?",
    a: "Completamente individual. Cada proceso está diseñado a partir de tu situación específica."
  },
  {
    q: "¿Cuánto tiempo demanda por semana?",
    a: "2 horas de sesión semanal más aplicaciones breves integradas a tu rutina. Está diseñado para reducir carga, no para agregarla."
  },
  {
    q: "¿Cómo sé si es para mí?",
    a: "Por eso existe la conversación inicial de 30 minutos. Si no tiene sentido para tu situación te lo digo directamente."
  },
  {
    q: "¿Cuáles son los medios de pago?",
    a: "PayPal y transferencia bancaria para España y México. Otras opciones se informan en la conversación inicial."
  }
];

const FAQItem = ({ q, a }: { q: string; a: string; key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-muted last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4 py-5 group"
      >
        <h4 className="text-sm md:text-base font-bold tracking-tight text-brand-dark group-hover:text-brand-accent transition-colors leading-snug">
          {q}
        </h4>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-brand-accent shrink-0"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <motion.div 
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0, 
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 16 : 0
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-sm font-light text-brand-dark/85 leading-relaxed pl-4 border-l-2 border-brand-accent/15 pb-1">
          {a}
        </p>
      </motion.div>
    </div>
  );
};

const FAQ = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-brand-bg border-t border-brand-muted/50">
    <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Preguntas frecuentes</p>
        <h2 className="text-2xl md:text-4xl font-serif tracking-tight font-bold text-brand-dark leading-tight">
          Lo que suelen{' '}
          <span className="italic font-light text-brand-accent">preguntarme</span>
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-brand-muted p-5 md:p-8">
        {faqs.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
