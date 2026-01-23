import Header from './components/Header';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Authority from './components/Authority';
import Solution from './components/Solution';
import Methodology from './components/Methodology';
import SocialProof from './components/SocialProof';
import Filter from './components/Filter';
import GrowthSimulator from './components/GrowthSimulator';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-voa-navy relative overflow-hidden font-sans text-voa-light selection:bg-voa-cyan selection:text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03] pointer-events-none" />

      <Header />

      <main>
        <Hero />
        <SocialProof />
        <Thesis />
        <Authority />
        <Solution />
        <Methodology />
        <GrowthSimulator />
        <CTAFinal />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
