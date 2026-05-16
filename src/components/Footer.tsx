import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="py-16 md:py-24 px-6 bg-brand-dark text-white border-t border-white/10">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
      
      {/* Column 1: Brand */}
      <div className="space-y-6 max-w-sm">
        <div className="flex items-center gap-4">
          <img src="/brain-logo.png" alt="Código Neutrón" className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-90" />
          <div>
            <p className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white">CÓDIGO NEUTRÓN</p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-brand-accent font-bold mt-1">por Patricia Pietrasanta</p>
          </div>
        </div>
        <p className="text-sm font-light text-white/60 leading-relaxed">
          Un proceso de reingeniería mental diseñado para líderes y empresarios que manejan decisiones de alto valor.
        </p>
      </div>

      {/* Column 2: Navegación */}
      <div className="space-y-6">
        <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-accent">Navegación</p>
        <div className="flex flex-col gap-4 text-xs uppercase tracking-widest font-bold text-white/70">
          <a href="#inicio" className="hover:text-white transition-colors w-fit">Inicio</a>
          <a href="#diagnostico" className="hover:text-white transition-colors w-fit">Diagnóstico</a>
          <a href="#metodologia" className="hover:text-white transition-colors w-fit">Metodología</a>
          <a href="#testimonios" className="hover:text-white transition-colors w-fit">Resultados</a>
          <a href="#inversion" className="hover:text-white transition-colors w-fit">Inversión</a>
        </div>
      </div>

      {/* Column 3: Redes & Contacto */}
      <div className="space-y-6">
        <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-accent">Conecta</p>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/patri.pietra/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
            <Instagram size={16} />
          </a>
          <a href="https://www.linkedin.com/in/patricia-pietrasanta/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
            <Linkedin size={16} />
          </a>
          <a href="https://www.facebook.com/coachinginline" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
            <Facebook size={16} />
          </a>
          <a href="https://www.youtube.com/@patrilifecoach" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
            <Youtube size={16} />
          </a>
        </div>
      </div>

    </div>

    <div className="max-w-5xl mx-auto mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold text-center md:text-left">
        © 2026 Código Neutrón · Todos los derechos reservados
      </p>
      <a href="#inicio" className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 hover:opacity-100 hover:text-brand-accent transition-all">
        Volver arriba ↑
      </a>
    </div>
  </footer>
);

export default Footer;
