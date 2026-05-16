import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import EnergyAudit from './components/EnergyAudit';
import Stakes from './components/Stakes';
import HowItWorks from './components/HowItWorks';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import Bio from './components/Bio';
import Investment from './components/Investment';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/30 text-brand-dark font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <EnergyAudit />
        <Stakes />
        <HowItWorks />
        <ProcessSection />
        <Bio />
        <Testimonials />
        <Investment />
        <FAQ />
        <FinalCTA />
      </main>
      <FloatingWhatsApp />
      <Footer />
      <Analytics />
    </div>
  );
}
