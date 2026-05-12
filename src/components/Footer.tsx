import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="py-16 md:py-20 px-6 bg-brand-dark text-white">
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="font-serif text-xl font-bold tracking-tight">CÓDIGO NEUTRÓN</p>
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-medium mt-1">por Patricia Pietrasanta</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-8 text-[10px] uppercase tracking-[0.15em] md:tracking-[0.35em] font-bold text-white/40 w-full md:w-auto">
          <a href="#proceso" className="hover:text-brand-accent transition-colors">El Proceso</a>
          <a href="#testimonios" className="hover:text-brand-accent transition-colors">Resultados</a>
          <a href="#contacto" className="hover:text-brand-accent transition-colors">Contacto</a>
        </div>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/patrilifecoach/" target="_blank" rel="noopener" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
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
      <p className="text-[10px] uppercase tracking-[0.5em] opacity-25 font-bold">© 2026 · Código Neutrón · Todos los derechos reservados</p>
    </div>
  </footer>
);

export default Footer;
