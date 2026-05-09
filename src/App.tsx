import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className={`max-w-7xl mx-auto flex justify-between items-center rounded-full px-8 py-3 border transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-brand-muted shadow-lg shadow-brand-dark/5" 
          : "bg-white/30 backdrop-blur-sm border-transparent"
      }`}>
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold tracking-tighter">Patri Life Coach</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-bold text-brand-dark/70">
          <a href="#" className="hover:text-brand-accent transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all group-hover:w-full" />
          </a>
          <a href="#proceso" className="text-brand-accent relative group">
            Mentoría
            <span className="absolute -bottom-1 left-0 w-full h-px bg-brand-accent" />
          </a>
          <a href="#contacto" className="hover:text-brand-accent transition-colors relative group">
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all group-hover:w-full" />
          </a>
          <a 
            href="https://calendly.com/patopietra/new-meeting?month=2026-05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-6 py-2 rounded-full hover:bg-brand-accent transition-colors flex items-center gap-2"
          >
            Evaluar situación <ArrowRight size={14} />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-6 right-6 bg-white border border-brand-muted p-8 rounded-3xl md:hidden shadow-xl"
        >
          <div className="flex flex-col gap-6 text-lg font-serif">
            <a href="#" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#proceso" onClick={() => setIsOpen(false)}>Mentoría</a>
            <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
            <button className="bg-brand-dark text-white p-4 rounded-2xl w-full">Evaluar mi situación</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-48 pb-24 px-6 min-h-screen flex flex-col items-center text-center overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl space-y-16"
    >
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-accent tracking-tighter uppercase font-bold">CÓDIGO NEUTRÓN</h2>
        <p className="text-sm md:text-base uppercase tracking-[0.4em] font-bold opacity-40 text-brand-dark">Proceso individual · 3 meses</p>
      </div>
      
      <div className="space-y-8">
        <h1 className="text-4xl md:text-7xl leading-[1.1] tracking-tight text-balance font-medium text-brand-dark uppercase">
          PARA PERSONAS QUE ENTIENDEN PERFECTAMENTE LO QUE LES PASA...
          <br/>
          <span className="italic font-serif font-light text-brand-accent lowercase block mt-4">PERO SIGUEN VIVIENDO AGOTADAS.</span>
        </h1>
        
        <p className="text-lg md:text-xl font-light text-brand-dark/60 max-w-3xl mx-auto leading-relaxed">
          Un proceso individual para profesionales y emprendedores que sostienen su vida, su trabajo y sus responsabilidades... pero sienten que internamente todo requiere más energía de la necesaria.
        </p>
      </div>

      <div className="space-y-4 pt-10">
        <a 
          href="https://calendly.com/patopietra/new-meeting?month=2026-05"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-dark text-white px-10 py-6 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-brand-accent transition-all shadow-xl shadow-brand-dark/10 inline-block"
        >
          EVALUAR SI ESTE PROCESO TIENE SENTIDO PARA TU SITUACIÓN
        </a>
        <p className="text-xs uppercase tracking-widest opacity-40 font-bold">30 minutos · Sin presión · Sin venta forzada</p>
      </div>
    </motion.div>

    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(180,159,96,0.1)_0%,transparent_50%)]" />
  </section>
);

const PainPoints = () => {
  const points = [
    "Terminas el día mentalmente agotado aunque \"no haya pasado nada grave\".",
    "Entiendes tus patrones, pero eso no evita que los repitas.",
    "Necesitas demasiada energía para decisiones que deberían ser simples.",
    "Tu vida funciona, pero internamente todo cuesta más de lo necesario.",
    "Hiciste terapia, cursos, coaching. Entiendes el origen. Y aun así, nada cambia de fondo."
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-brand-accent">Autodiagnóstico de estado</h2>
              <h3 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter uppercase font-bold">
                ¿Esto describe tu <br/>
                <span className="italic font-light text-brand-accent lowercase font-serif">situación?</span>
              </h3>
            </div>
            
            <div className="h-px w-24 bg-brand-accent" />
            
            <p className="text-xl md:text-2xl font-light leading-tight text-brand-dark/80">
              Sentirse incapaz de avanzar no siempre es falta de ganas. A veces es el resultado de un sistema interno que está <span className="italic font-serif text-brand-accent border-b border-brand-accent/30">sobrecargado.</span>
            </p>
          </motion.div>

          <div className="lg:col-span-12 xl:col-span-7 space-y-3">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="group relative p-5 bg-brand-bg/40 rounded-xl transition-all hover:bg-brand-bg border border-brand-muted hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <div className="flex gap-5 items-start text-left">
                  <span className="text-xl font-serif italic text-brand-accent/40 group-hover:text-brand-accent transition-colors shrink-0 pt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-base md:text-lg font-light leading-snug text-brand-dark/70 group-hover:text-brand-dark transition-colors">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stakes = () => (
  <section className="py-32 px-6">
    <div className="max-w-5xl mx-auto space-y-12">
      <h2 className="text-3xl md:text-4xl font-serif text-brand-accent uppercase tracking-tighter">LO QUE ESTÁ EN JUEGO</h2>
      
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl leading-tight font-medium">El problema no es solo <br/> el agotamiento.</h3>
          <p className="text-lg text-brand-dark/60 leading-relaxed font-light">
            Es todo lo que ese agotamiento empieza a afectar sin que te des cuenta:
          </p>
        </div>
        <div className="space-y-6">
          {[
            "La calidad de tus decisiones.",
            "Tu capacidad de disfrutar lo que construiste.",
            "Tus vínculos más importantes.",
            "La energía para sostener cosas que antes eran simples.",
            "Tu claridad mental en los momentos que más la necesitas."
          ].map((stake, i) => (
            <div key={i} className="flex items-center gap-4 border-l-2 border-brand-accent/20 pl-6 py-2 hover:border-brand-accent transition-colors">
              <p className="text-lg md:text-xl font-serif italic text-brand-dark/80">{stake}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center pt-20 text-lg opacity-40 font-light max-w-2xl mx-auto">
        Cuanto más tiempo normalizas eso, más se convierte en tu forma habitual de vivir.
      </p>
    </div>
  </section>
);

const ProcessSection = () => (
  <section id="proceso" className="py-32 px-6 bg-brand-muted/20">
    <div className="max-w-5xl mx-auto space-y-24">
      <div className="space-y-12 text-center">
        <h2 className="text-sm uppercase tracking-[0.4em] font-black text-brand-accent">Metodología</h2>
        <h3 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tighter uppercase font-bold text-brand-dark">
          El <span className="italic font-light text-brand-accent lowercase font-serif">Proceso</span>
        </h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-medium leading-tight text-brand-dark">
            No tienes un problema de información. <br />
            Tienes un problema de <span className="italic font-serif text-brand-accent underline underline-offset-8 decoration-brand-accent/20">funcionamiento.</span>
          </p>
          <p className="text-lg font-light leading-relaxed text-brand-dark/70">
            Código Neutrón trabaja sobre los patrones mentales que consumen energía, distorsionan decisiones y sostienen formas de vida que ya no tienen sentido. <span className="italic font-serif">No para analizarlos indefinidamente, sino para que dejen de dirigir tu vida automáticamente.</span>
          </p>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-accent/20 -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-12">
          {[
            {
              phase: "Fase 01",
              title: "Dinero y desgaste",
              desc: "Identificamos dónde se escapan los recursos y qué patrones lo sostienen."
            },
            {
              phase: "Fase 02",
              title: "Relaciones y energía",
              desc: "Reordenamos los vínculos que drenan en lugar de potenciar."
            },
            {
              phase: "Fase 03",
              title: "Decisiones y claridad",
              desc: "Cambiamos cómo procesas información para que decidir no cueste tanto."
            },
            {
              phase: "Fase 04",
              title: "Energía y Funcionamiento diario",
              desc: "Rediseñamos cómo operas para que la vida funcione sin ese nivel de esfuerzo sostenido."
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <div className={`flex items-center gap-4 ${i % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">{pillar.phase}</span>
                  <h4 className="text-2xl font-serif italic text-brand-dark font-bold">{pillar.title}</h4>
                </div>
                <p className={`text-lg font-light text-brand-dark/60 leading-relaxed ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                  {pillar.desc}
                </p>
              </div>
              
              <div className="relative z-10">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-brand-accent flex items-center justify-center shadow-lg shadow-brand-accent/20">
                  <div className="w-2 h-2 rounded-full bg-brand-accent scale-0 group-hover:scale-100 transition-transform" />
                </div>
              </div>
              
              <div className="md:w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-6 bg-white overflow-hidden">
    <div className="max-w-5xl mx-auto space-y-20">
      <div className="inline-block border-b-2 border-brand-accent pb-4">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-accent uppercase tracking-tighter">LO QUE CAMBIA</h2>
      </div>
      <h3 className="text-3xl md:text-4xl font-medium">Resultados reales <br/> de personas reales.</h3>
      
      <div className="grid lg:grid-cols-3 gap-20">
        {[
          {
            name: "Alex · México · Emprendedor",
            quote: "Llegué buscando claridad en mis decisiones de negocio y encontré algo más profundo: una forma completamente distinta de relacionarme con mi vida y mis vínculos. Los resultados fueron verificables desde las primeras semanas."
          },
          {
            name: "Maga · México · Profesional",
            quote: "Mi pareja y yo trabajamos el proceso por separado y hoy somos un equipo completamente distinto. Lo que cambió no fue solo la relación, fue la forma en que cada uno opera individualmente."
          },
          {
            name: "Julián · Argentina · Creador de contenido - Speaker",
            quote: "Vine porque sentía que mi energía se escapaba sin control y eso afectaba todo: mis vínculos, mi presencia en redes, cómo me veía. Hoy tengo mucha más claridad mental y menos sensación de desgaste constante."
          }
        ].map((story, i) => (
          <div key={i} className="space-y-8 relative">
            <span className="text-8xl font-serif text-brand-accent/10 absolute -top-10 -left-6">"</span>
            <p className="text-lg font-serif italic text-brand-dark/80 leading-relaxed relative z-10">"{story.quote}"</p>
            <p className="text-xs font-bold uppercase tracking-widest opacity-40 pt-4 border-t border-brand-muted inline-block">{story.name}</p>
          </div>
        ))}
      </div>
      
      <p className="text-xs opacity-50 pt-20 uppercase tracking-widest font-bold text-center">
        Trabajo actualmente con profesionales de Madrid, Barcelona y Valencia <br/> que llegaron después de procesos previos que no terminaron de resolver lo que necesitaban.
      </p>
    </div>
  </section>
);

const Bio = () => (
  <section className="py-32 px-6 bg-brand-muted/10 border-t border-brand-muted">
    <div className="max-w-6xl mx-auto space-y-20">
      <h2 className="text-3xl md:text-4xl font-serif text-brand-accent uppercase tracking-tighter text-center">QUIÉN TE ACOMPAÑA</h2>
      
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-5xl md:text-8xl font-light tracking-tighter text-brand-dark">Patricia <br/><span className="text-brand-accent italic font-serif">Pietrasanta</span></h3>
            <p className="text-lg text-brand-dark/60 font-light">Coach ontológica con más de 13 años de experiencia.</p>
            <p className="text-sm font-bold text-brand-accent uppercase tracking-widest">Creadora de Código Neutrón.</p>
          </div>
          
          <div className="p-10 bg-white border border-brand-muted rounded-[2rem] shadow-sm italic font-serif text-xl md:text-2xl leading-relaxed text-brand-dark/80">
            "No trabajo con motivación ni con promesas de transformación. Trabajo con el funcionamiento real de la mente y con métricas verificables en 5 áreas: <span className="font-bold text-brand-accent not-italic">Paz, Economía, Relaciones, Adaptabilidad y Salud</span>."
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-brand-muted p-1 bg-white">
            <img 
              src="https://coachinginline.weebly.com/uploads/1/7/1/5/17154702/published/generated-image-october-31-2025-12-19pm-2-1.jpg?1778345920" 
              alt="Patricia Pietrasanta" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Investment = () => (
  <section className="py-32 px-6 bg-white overflow-hidden relative">
    <div className="max-w-4xl mx-auto space-y-20 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-accent uppercase tracking-tighter">LA INVERSIÓN</h2>
        <div className="h-px w-24 bg-brand-accent mx-auto" />
      </div>
      
      <div className="space-y-8">
        <h3 className="text-3xl md:text-5xl font-medium leading-tight">Individual. Concreto. <br/> <span className="italic font-serif text-brand-accent underline decoration-brand-accent/20">Con métricas reales.</span></h3>
        <p className="text-xl text-brand-dark/50 max-w-3xl mx-auto font-light leading-relaxed">
          La mayoría de las personas llegan cuando ya no quieren seguir sosteniendo el mismo nivel de desgaste otro año más.
        </p>
      </div>

      <div className="bg-brand-bg p-10 md:p-20 rounded-[3rem] border border-brand-muted space-y-12 relative shadow-2xl">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="space-y-2"
        >
          <p className="text-4xl md:text-7xl font-bold tracking-tighter text-brand-dark">USD 2.500</p>
          <p className="text-sm uppercase tracking-[0.4em] font-bold opacity-30 mt-4">Proceso individual · 3 meses · 24 sesiones</p>
        </motion.div>

        <div className="h-px w-full bg-brand-muted" />

        <ul className="text-left max-w-md mx-auto space-y-6">
          {[
            "2 sesiones individuales semanales de 60 minutos por Google Meet",
            "Seguimiento continuo por WhatsApp entre sesiones",
            "Material exclusivo aplicable desde la primera semana",
            "Métricas reales de avance en 5 áreas.",
            "Acceso a Taller grabado Energía Vital"
          ].map((item, i) => (
            <li key={i} className="flex gap-4 items-start font-light text-lg text-brand-dark/80">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="pt-8 space-y-8">
          <a 
            href="https://calendly.com/patopietra/new-meeting?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-dark text-white py-8 rounded-sm text-sm uppercase tracking-[0.3em] font-bold hover:bg-brand-accent transition-all shadow-xl hover:shadow-brand-accent/20 block text-center"
          >
            EVALUAR SI ESTE PROCESO TIENE SENTIDO PARA TU SITUACIÓN
          </a>
          <p className="text-xs font-bold leading-relaxed opacity-40 italic uppercase tracking-widest">
            Si en la primera semana sientes que no es para vos, devolvemos el 100% de tu inversión.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-muted py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-6 group"
      >
        <h4 className="text-lg md:text-xl font-bold tracking-tight text-brand-dark group-hover:text-brand-accent transition-colors">
          {q}
        </h4>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-brand-accent shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <motion.div 
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0, 
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 16 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-base md:text-lg font-light text-brand-dark/70 leading-relaxed pl-4 border-l-2 border-brand-accent/10">
          {a}
        </p>
      </motion.div>
    </div>
  );
};

const FAQ = () => (
  <section className="py-32 px-6 bg-brand-muted/20">
    <div className="max-w-4xl mx-auto space-y-20">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-accent uppercase tracking-tighter">PREGUNTAS FRECUENTES</h2>
        <p className="text-xl font-light italic opacity-60">Lo que suelen preguntarme</p>
      </div>

      <div className="space-y-2 bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-brand-muted shadow-sm">
        {[
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
            a: "2 horas de sesión semanal más aplicaciones breves integradas a tu rutina. Está diseñado para reducir carga y no para agregarla."
          },
          {
            q: "¿Cómo sé si es para mí?",
            a: "Por eso existe la conversación inicial de 30 minutos. Si no tiene sentido para tu situación te lo digo directamente."
          },
          {
            q: "¿Cuáles son los medios de pago?",
            a: "PayPal y transferencia bancaria para España y México. Otras opciones disponibles que se informan en la conversación inicial."
          }
        ].map((item, i) => (
          <FAQItem key={i} {...item} />
        ))}
      </div>
    </div>
  </section>
);

const EnergyAudit = () => {
  const [scores, setScores] = useState<{ [key: string]: number }>({
    paz: 50,
    economia: 50,
    relaciones: 50,
    adaptabilidad: 50,
    salud: 50
  });

  const areas = [
    { id: 'paz', label: 'Paz Mental' },
    { id: 'economia', label: 'Economía' },
    { id: 'relaciones', label: 'Relaciones' },
    { id: 'adaptabilidad', label: 'Adaptabilidad' },
    { id: 'salud', label: 'Salud' }
  ];

  const handleScroll = (id: string, value: number) => {
    setScores(prev => ({ ...prev, [id]: value }));
  };

  const avg = Object.values(scores).reduce((a, b) => a + b, 0) / 5;
  
  const getDiagnosis = () => {
    if (avg < 40) return {
      title: "Funcionamiento Crítico",
      text: "Tu sistema está operando por pura inercia. El agotamiento es sistémico y los riesgos de colapso en tus vínculos o salud son reales.",
      color: "text-brand-accent"
    };
    if (avg < 70) return {
      title: "Balance Intermitente",
      text: "Operas con un alto costo de energía. Hay áreas drenando recursos que podrías estar usando para disfrutar de lo que construiste.",
      color: "text-brand-accent"
    };
    return {
      title: "Ajuste Fino Necesario",
      text: "Tienes una buena base, pero existen patrones sutiles que impiden que tu funcionamiento sea 100% orgánico y libre de esfuerzo.",
      color: "text-brand-accent"
    };
  };

  const diagnosis = getDiagnosis();

  return (
    <section className="py-32 px-6 bg-brand-dark text-white rounded-[4rem] mx-4 sm:mx-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif italic text-brand-accent uppercase italic font-bold">Autodiagnóstico Rápido</h2>
          <p className="text-brand-muted/40 uppercase tracking-[0.3em] text-[10px] font-black font-sans">Evalúa tus 5 áreas de funcionamiento hoy</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-10">
            {areas.map((area) => (
              <div key={area.id} className="space-y-4">
                <div className="flex justify-between text-[10px] uppercase tracking-widest font-black opacity-60">
                  <span>{area.label}</span>
                  <span>{scores[area.id]}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={scores[area.id]} 
                  onChange={(e) => handleScroll(area.id, parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 space-y-8 flex flex-col justify-center min-h-[400px] relative overflow-hidden text-center md:text-left">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Lectura de Sistema</p>
              <h3 className={`text-4xl font-serif italic leading-none text-brand-accent`}>{diagnosis.title}</h3>
            </div>
            
            <div className="relative">
              <p className="text-brand-muted/80 font-light leading-relaxed text-xl">
                {diagnosis.text}
              </p>
            </div>

            <p className="text-xs font-light italic opacity-40 leading-relaxed max-w-md">
              En el proceso de Código Neutrón, trabajamos para que tu balance sea la norma, no la excepción.
            </p>

            <a 
              href="https://calendly.com/patopietra/new-meeting?month=2026-05"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black hover:scale-105 transition-all shadow-2xl shadow-brand-accent/30 text-center relative z-10"
            >
              Conversar sobre mis resultados
            </a>

            {/* Circular score indicator */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-white/5 rounded-full flex items-center justify-center pointer-events-none">
               <div className="w-full h-full flex items-center justify-center opacity-10 font-serif italic text-6xl">
                 {Math.round(avg)}%
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent blur-[200px] rounded-full -mr-96 -mt-96" />
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="contacto" className="py-48 px-6 text-center bg-white relative overflow-hidden">
    <div className="max-w-4xl mx-auto space-y-16 relative z-10">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.5em] font-bold text-brand-accent">EL SIGUIENTE PASO</p>
        <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-brand-dark leading-none">
          Una conversación de <span className="italic font-serif text-brand-accent italic">30 minutos</span> <br/>
          para ver si tiene sentido
        </h2>
        <div className="h-px w-24 bg-brand-accent mx-auto" />
        <p className="text-lg md:text-xl font-light text-brand-dark/50 max-w-xl mx-auto leading-relaxed">
          Sin presión. Sin venta forzada. Solo para entender tu situación y ver si este proceso es lo que necesitas ahora.
        </p>
      </div>

      <div className="pt-10 space-y-8">
        <a 
          href="https://calendly.com/patopietra/new-meeting?month=2026-05"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-dark text-white px-12 py-8 rounded-sm text-sm uppercase tracking-[0.3em] font-bold hover:bg-brand-accent transition-all shadow-2xl inline-block"
        >
          EVALUAR SI ESTE PROCESO TIENE SENTIDO PARA TU SITUACIÓN
        </a>
        <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-30">Lugares limitados · Respuesta en menos de 24 horas</p>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(180,159,96,0.05),transparent)] pointer-events-none" />
  </section>
);

const Footer = () => (
  <footer className="py-24 px-6 bg-brand-dark text-white text-center rounded-t-[4rem]">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="space-y-8">
        <p className="font-serif text-4xl font-bold tracking-tighter">Patri Life Coach</p>
        <div className="flex justify-center gap-10 text-[10px] uppercase tracking-[0.4em] font-black text-white/60">
          <a href="#" className="hover:text-brand-accent transition-colors">Home</a>
          <a href="#proceso" className="hover:text-brand-accent transition-colors">Mentoría</a>
          <a href="#contacto" className="hover:text-brand-accent transition-colors">Contacto</a>
        </div>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/patrilifecoach/" target="_blank" rel="noopener" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all text-white">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/patricia-pietrasanta/" target="_blank" rel="noopener" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all text-white">
            <Linkedin size={20} />
          </a>
          <a href="https://www.facebook.com/coachinginline" target="_blank" rel="noopener" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all text-white">
            <Facebook size={20} />
          </a>
          <a href="https://www.youtube.com/@patrilifecoach" target="_blank" rel="noopener" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all text-white">
            <Youtube size={20} />
          </a>
        </div>
      </div>
      <div className="h-px w-full bg-white/5" />
      <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-black">
        © 2026 · Todos los derechos reservados · Desarrollado para la Excelencia
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/30 text-brand-dark font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <EnergyAudit />
        <Stakes />
        <ProcessSection />
        <Testimonials />
        <Bio />
        <Investment />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
