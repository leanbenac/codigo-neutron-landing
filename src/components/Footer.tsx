import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="py-16 md:py-20 px-6 bg-brand-dark text-white">
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-4">
          <img src="/brain-logo.png" alt="Código Neutrón" className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-90" />
          <div>
            <p className="font-serif text-xl font-bold tracking-tight">CÓDIGO NEUTRÓN</p>
            <p className="text-[10px] uppercase tracking-widest text-white/60 font-medium mt-1">por Patricia Pietrasanta</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-8 text-[10px] uppercase tracking-[0.15em] md:tracking-[0.35em] font-bold text-white/60 w-full md:w-auto">
          <a href="#proceso" className="hover:text-brand-accent transition-colors">El Proceso</a>
          <a href="#testimonios" className="hover:text-brand-accent transition-colors">Resultados</a>
          <a href="#contacto" className="hover:text-brand-accent transition-colors">Contacto</a>
        </div>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/patri.pietra/" target="_blank" rel="noopener" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
            <Instagram size={16} />
          </a>
          <a href="https://www.linkedin.com/in/patricia-pietrasanta/" target="_blank" rel="noopener" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
            <Linkedin size={16} />
          </a>
          <a href="https://www.facebook.com/coachinginline" target="_blank" rel="noopener" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
            <Facebook size={16} />
          </a>
          <a href="https://www.youtube.com/@patrilifecoach" target="_blank" rel="noopener" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
            <Youtube size={16} />
          </a>
        </div>
      </div>
      <div className="h-px w-full bg-white/5" />
      <p className="text-[10px] uppercase tracking-[0.5em] opacity-50 font-bold">© 2026 · Todos los derechos reservados</p>
    </div>
  </footer>
);

export default Footer;
