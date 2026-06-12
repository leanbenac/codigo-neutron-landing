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
          <p className="text-[11px] uppercase tracking-[0.45em] font-bold text-brand-accent">¡Llamada Reservada!</p>
          <h1 className="text-4xl sm:text-5xl font-serif tracking-tight font-light leading-tight">
            Tu diagnóstico está <br />
            <span className="italic font-light text-brand-accent">en camino.</span>
          </h1>
          
          <div className="h-px w-12 bg-brand-accent mx-auto" />
          
          <p className="text-sm md:text-base font-light text-white/80 max-w-md mx-auto leading-relaxed">
            Hemos registrado tu reserva con éxito. Por favor, revisá tu casilla de correo electrónico, donde recibirás la confirmación y el enlace de Google Meet para nuestra sesión.
          </p>
        </div>

        {/* Instructions */}
        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-left space-y-3 max-w-md mx-auto">
          <h4 className="text-xs uppercase tracking-wider font-bold text-brand-accent">Próximos pasos importantes:</h4>
          <ul className="space-y-2.5 text-xs text-white/70 font-light">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
              <span>Agendá la fecha en tu calendario para no olvidarla.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
              <span>Si no encontrás el mail de confirmación, revisá la carpeta de Spam o Promociones.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
              <span>Para la llamada, buscá un lugar tranquilo y con buena conexión.</span>
            </li>
          </ul>
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
