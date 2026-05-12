import { useState } from 'react';

const areas = [
  { id: 'paz', label: 'Paz Mental' },
  { id: 'economia', label: 'Economía' },
  { id: 'relaciones', label: 'Relaciones' },
  { id: 'adaptabilidad', label: 'Adaptabilidad' },
  { id: 'salud', label: 'Salud' }
];

const getDiagnosis = (avg: number) => {
  if (avg < 40) return {
    title: "Funcionamiento Crítico",
    text: "Tu sistema opera por pura inercia. El agotamiento es sistémico y los riesgos de colapso en vínculos o salud son reales.",
  };
  if (avg < 70) return {
    title: "Balance Intermitente",
    text: "Operás con un alto costo de energía. Hay áreas drenando recursos que podrías estar usando para disfrutar lo que construiste.",
  };
  return {
    title: "Ajuste Fino Necesario",
    text: "Tenés una buena base, pero existen patrones sutiles que impiden un funcionamiento 100% orgánico y libre de esfuerzo.",
  };
};

const EnergyAudit = () => {
  const [scores, setScores] = useState<{ [key: string]: number }>({
    paz: 50, economia: 50, relaciones: 50, adaptabilidad: 50, salud: 50
  });

  const handleChange = (id: string, value: number) => {
    setScores(prev => ({ ...prev, [id]: value }));
  };

  const avg = (Object.values(scores) as number[]).reduce((a, b) => a + b, 0) / 5;
  const diagnosis = getDiagnosis(avg);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-brand-dark text-white rounded-[2.5rem] md:rounded-[4rem] mx-3 sm:mx-6 md:mx-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10 md:space-y-16 relative z-10">

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-4xl font-serif italic text-brand-accent font-bold">Autodiagnóstico Rápido</h2>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 font-bold">Evaluá tus 5 áreas de funcionamiento</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start">

          {/* Sliders */}
          <div className="space-y-6 md:space-y-8">
            {areas.map((area) => (
              <div key={area.id} className="space-y-4 group">
                <div className="flex justify-between items-end">
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/80 group-hover:text-brand-accent transition-colors">{area.label}</span>
                  <span className="text-xl font-serif italic text-brand-accent tabular-nums">{scores[area.id]}%</span>
                </div>
                <div className="relative h-6 flex items-center">
                  <input 
                    type="range" 
                    min="0" max="100" 
                    value={scores[area.id]} 
                    onChange={(e) => handleChange(area.id, parseInt(e.target.value))}
                    className="w-full h-0.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-accent hover:bg-white/20 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Result card */}
          <div className="bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/10 space-y-6">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-60">Lectura de sistema</p>
              <h3 className="text-2xl md:text-3xl font-serif italic leading-tight text-brand-accent">{diagnosis.title}</h3>
            </div>

            <p className="text-sm md:text-base text-white/90 font-light leading-relaxed">
              {diagnosis.text}
            </p>

            <p className="text-xs font-light italic opacity-60 leading-relaxed">
              En el proceso de Código Neutrón trabajamos para que tu balance sea la norma, no la excepción.
            </p>

            <a 
              href="https://calendly.com/patopietra/new-meeting?month=2026-05"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white py-4 md:py-5 rounded-full text-[11px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.3em] font-bold hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 flex items-center justify-center text-center leading-tight"
            >
              CONVERSAR SOBRE<br className="sm:hidden" /> MIS RESULTADOS
            </a>

            {/* Score badge */}
            <div className="text-center pt-1">
              <span className="text-4xl font-serif italic text-white/10 font-bold">{Math.round(avg)}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent blur-[180px] rounded-full -mr-80 -mt-80" />
      </div>
    </section>
  );
};

export default EnergyAudit;
