import { motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-muted/20">
        <div 
          className="h-full bg-brand-accent transition-all duration-150 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className={`max-w-7xl mx-auto flex justify-between items-center rounded-full px-6 py-3 border transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-brand-muted shadow-sm" 
          : "bg-white/20 backdrop-blur-sm border-transparent"
      }`}>
        <div className="flex items-center gap-3">
          <img src="/brain-logo.png" alt="Código Neutrón Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain mix-blend-multiply" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold tracking-tight text-brand-dark">CÓDIGO NEUTRÓN</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-dark/60 font-medium mt-0.5">por Patricia Pietrasanta</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-brand-dark/60">
          <a href="#proceso" className="hover:text-brand-accent transition-colors">El Proceso</a>
          <a href="#testimonios" className="hover:text-brand-accent transition-colors">Resultados</a>
          <a href="#contacto" className="hover:text-brand-accent transition-colors">Contacto</a>
          <a 
            href="https://calendly.com/patopietra/new-meeting?month=2026-05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-5 py-2.5 rounded-full hover:bg-brand-accent transition-colors flex items-center gap-2 text-[10px]"
          >
            Evaluar mi situación <ArrowRight size={12} />
          </a>
        </div>

        <button className="md:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 bg-white border border-brand-muted p-8 rounded-3xl md:hidden shadow-xl"
        >
          <div className="flex flex-col gap-6">
            <a href="#proceso" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-colors">El Proceso</a>
            <a href="#testimonios" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-colors">Resultados</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-colors">Contacto</a>
            <a 
              href="https://calendly.com/patopietra/new-meeting?month=2026-05"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark text-white p-4 rounded-2xl text-center text-sm font-bold uppercase tracking-widest"
            >
              Evaluar mi situación
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
