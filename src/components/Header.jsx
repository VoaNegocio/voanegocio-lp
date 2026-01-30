import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Bar - Filtro */}
            <div className="bg-voa-cyan shadow-[0_0_20px_rgba(0,207,255,0.6)] relative z-50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 w-full h-full animate-electricity translate-x-[-100%]" />
                <div className="container mx-auto px-4 py-2 relative z-10">
                    <p className="text-xs md:text-sm text-center text-voa-navy font-bold flex items-center justify-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-voa-navy animate-pulse" />
                        Recomendado para empresas com faturamento acima de R$100 mil ao mês
                    </p>
                </div>
            </div>

            {/* Main Header */}
            <header
                className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0 bg-voa-navy/80 backdrop-blur-xl border-b border-voa-light/10 py-4' : 'top-[37px] bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src="/src/assets/logo-header.png" alt="Voa Negócio" className="h-8 md:h-10 w-auto" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#solucao" className="text-sm font-medium text-voa-light hover:text-white transition-colors">Solução</a>
                        <a href="#como-funciona" className="text-sm font-medium text-voa-light hover:text-white transition-colors">Como Funciona</a>
                        <a href="#prova-social" className="text-sm font-medium text-voa-light hover:text-white transition-colors">Resultados</a>
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <button className="relative overflow-hidden bg-green-600 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(22,163,74,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 w-[200%] h-full animate-electricity" />
                            <span className="relative z-10 flex items-center gap-2">
                                Falar com Especialista
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-voa-navy border-b border-voa-light/10 p-4 flex flex-col gap-4 md:hidden shadow-2xl">
                        <a href="#solucao" className="text-voa-light hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Solução</a>
                        <a href="#como-funciona" className="text-voa-light hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Como Funciona</a>
                        <a href="#prova-social" className="text-voa-light hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Resultados</a>
                        <button className="w-full bg-green-600 hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(22,163,74,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)]">
                            Falar com Especialista
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
