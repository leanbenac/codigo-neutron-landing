import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import EnergyAudit from './components/EnergyAudit';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Bio from './components/Bio';
import Investment from './components/Investment';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Gracias from './components/Gracias';

import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [isThankYou, setIsThankYou] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const search = window.location.search;
    if (path === '/gracias' || search.includes('gracias') || search.includes('booking=success')) {
      setIsThankYou(true);
    }
  }, []);

  if (isThankYou) {
    return (
      <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/30 text-brand-dark font-sans antialiased">
        <Gracias />
        <Analytics />
      </div>
    );
  }

  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/30 text-brand-dark font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <EnergyAudit />
        <HowItWorks />
        <Bio />
        <Testimonials />
        <Investment />
        <FinalCTA />
      </main>
      <FloatingWhatsApp />
      <Footer />
      <Analytics />
    </div>
  );
}

