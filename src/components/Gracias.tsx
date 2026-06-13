import { useEffect } from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const Gracias = () => {
  useEffect(() => {
    // Fire Meta Pixel Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  const handleGoBack = () => {
    window.location.href = '/';
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center p-6 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-xl space-y-8 md:space-y-10 w-full relative z-10">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent animate-pulse">
            <CheckCircle2 size={32} />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 md:space-y-5">
          <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">Aplicación Recibida</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight font-light leading-tight">
            Tu aplicación fue <br />
            <span className="italic font-light text-brand-accent">recibida correctamente.</span>
          </h1>
          
          <div className="h-px w-12 bg-brand-accent mx-auto" />
          
          <p className="text-sm md:text-base font-light text-white/80 max-w-lg mx-auto leading-relaxed">
            Gracias por completar el formulario de admisión de Código Neutrón. Voy a revisar personalmente tus respuestas para comprender mejor tu situación actual, los resultados que buscás lograr y el nivel de compromiso con el que llegás a este proceso.
          </p>
        </div>

        {/* Instructions */}
        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-left space-y-4 max-w-lg mx-auto">
          <h4 className="text-xs uppercase tracking-wider font-bold text-brand-accent text-center pb-2 border-b border-white/10">Próximos pasos:</h4>
          <ul className="space-y-3 text-sm text-white/80 font-light">
            <li className="flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
              <span>Revisaré tu aplicación.</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
              <span>Si detecto un buen encaje entre tu situación y la mentoría, me pondré en contacto para coordinar una sesión diagnóstica de 15 minutos.</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
              <span>En esa conversación analizaremos tu situación actual y definiremos si este proceso es el adecuado para vos.</span>
            </li>
          </ul>
          
          <div className="pt-3 mt-3 border-t border-white/10 text-center">
            <p className="text-sm text-brand-accent font-medium mb-4">
              Mientras tanto, revisá tu correo electrónico y tu WhatsApp durante las próximas 48 horas.
            </p>
            <p className="text-xs text-white/60 font-light italic">
              Gracias por tu confianza.<br/>
              Patricia Pietrasanta<br/>
              Código Neutrón
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="pt-4">
          <button
            onClick={handleGoBack}
            className="border border-white/20 hover:border-brand-accent hover:bg-brand-accent/10 text-white px-8 py-4 rounded-md text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={14} /> Volver al inicio
          </button>
        </div>

      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(180,159,96,0.12)_0%,transparent_60%)] pointer-events-none" />
    </section>
  );
};

export default Gracias;
