import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import growthBg from '../assets/images/growth-simulator-bg.png';

import { sendWebhook } from '../utils/webhook';

const GrowthSimulator = () => {
    const [investment, setInvestment] = useState(5000);
    const [cpl, setCpl] = useState(50);
    const [ticket, setTicket] = useState(1000);
    const [conversion, setConversion] = useState(5);

    const [currentResults, setCurrentResults] = useState({});
    const [projectedResults, setProjectedResults] = useState({});

    // Formatting currency
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    useEffect(() => {
        // Current Scenario
        const leads = investment / cpl;
        const sales = leads * (conversion / 100);
        const revenue = sales * ticket;
        const roas = revenue / investment;

        setCurrentResults({
            leads: Math.floor(leads),
            sales: Math.floor(sales),
            revenue,
            roas: roas.toFixed(2)
        });

        // Projected Scenario (Voa Optimization)
        // Assumptions: 20% lower CPL, 20% higher conversion rate
        const improvedCpl = cpl * 0.8;
        const improvedConversion = conversion * 1.2;

        const projLeads = investment / improvedCpl;
        const projSales = projLeads * (improvedConversion / 100);
        const projRevenue = projSales * ticket;
        const projRoas = projRevenue / investment;

        setProjectedResults({
            leads: Math.floor(projLeads),
            sales: Math.floor(projSales),
            revenue: projRevenue,
            roas: projRoas.toFixed(2),
            revenueIncrease: projRevenue - revenue
        });

    }, [investment, cpl, ticket, conversion]);

    const handleCtaClick = (e) => {
        // Prevent default navigation initially to ensure logic runs
        // But since we use sendBeacon/keepalive, strictly preventing default isn't always necessary if valid href.
        // However, for clarity and explicit control:

        const payload = {
            event: 'growth_simulation_cta',
            timestamp: new Date().toISOString(),
            inputs: {
                investment,
                cpl,
                ticket,
                conversion
            },
            results: {
                currentRevenue: currentResults.revenue,
                projectedRevenue: projectedResults.revenue,
                revenueIncrease: projectedResults.revenueIncrease,
                potentialRoas: projectedResults.roas
            }
        };

        sendWebhook(payload);

        // Let the default <a> tag nav happen, or handle logic if mapped to onClick manually.
        // Since we are adding onClick to the <a>, the href will still fire after this function.
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Image with Mask */}
            <div className="absolute inset-0 z-0">
                <img
                    src={growthBg}
                    alt="Financial Growth Background"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-voa-navy via-voa-navy/95 to-voa-navy/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-voa-navy via-transparent to-voa-navy" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <span className="text-voa-cyan font-bold tracking-wider text-sm uppercase mb-4 block drop-shadow-md">Simulador de Crescimento</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Quanto dinheiro você está <br />
                        <span className="text-red-500 text-glow">deixando na mesa?</span>
                    </h2>
                    <p className="text-lg text-voa-light max-w-2xl mx-auto">
                        Simule o impacto de uma estrutura de vendas validada no seu faturamento.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto backdrop-blur-md bg-voa-navy/40 border border-white/5 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
                    {/* Decorative Background Elements inside Card */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-voa-blue/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[60px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    {/* Inputs */}
                    <div className="space-y-8 relative z-10">
                        <div>
                            <label className="block text-voa-light text-sm font-medium mb-2">Investimento em Mídia (Mensal)</label>
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold w-24">{formatCurrency(investment)}</span>
                                <input
                                    type="range"
                                    min="1000"
                                    max="50000"
                                    step="1000"
                                    value={investment}
                                    onChange={(e) => setInvestment(Number(e.target.value))}
                                    className="w-full accent-voa-cyan h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-voa-light text-sm font-medium mb-2">Custo por Lead (CPL) Atual</label>
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold w-24">{formatCurrency(cpl)}</span>
                                <input
                                    type="range"
                                    min="5"
                                    max="500"
                                    step="5"
                                    value={cpl}
                                    onChange={(e) => setCpl(Number(e.target.value))}
                                    className="w-full accent-voa-cyan h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-voa-light text-sm font-medium mb-2">Ticket Médio</label>
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold w-24">{formatCurrency(ticket)}</span>
                                <input
                                    type="range"
                                    min="100"
                                    max="10000"
                                    step="100"
                                    value={ticket}
                                    onChange={(e) => setTicket(Number(e.target.value))}
                                    className="w-full accent-voa-cyan h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-voa-light text-sm font-medium mb-2">Taxa de Conversão de Vendas</label>
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold w-24">{conversion}%</span>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    step="1"
                                    value={conversion}
                                    onChange={(e) => setConversion(Number(e.target.value))}
                                    className="w-full accent-voa-cyan h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="lg:border-l border-white/10 lg:pl-10 flex flex-col justify-center relative z-10">
                        <div className="bg-voa-navy/60 rounded-2xl p-6 border border-white/10 relative overflow-hidden group shadow-lg">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <TrendingUp className="w-24 h-24 text-voa-cyan" />
                            </div>

                            <h3 className="text-voa-light text-sm font-semibold uppercase tracking-wider mb-6">Cenário Otimizado Voa Negócio</h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                    <div>
                                        <p className="text-voa-light text-sm">Faturamento Projetado</p>
                                        <p className="text-3xl font-bold text-white mt-1">{formatCurrency(projectedResults.revenue)}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-voa-light text-xs mb-1">vs Atual</p>
                                        <p className="text-voa-light/60 text-sm line-through">{formatCurrency(currentResults.revenue)}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-3 rounded-lg">
                                        <p className="text-voa-light text-xs">Novas Vendas</p>
                                        <p className="text-xl font-bold text-white">{projectedResults.sales} <span className="text-xs font-normal text-brand-green">({currentResults.sales})</span></p>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-lg">
                                        <p className="text-voa-light text-xs">ROAS</p>
                                        <p className="text-xl font-bold text-voa-cyan">{projectedResults.roas}x</p>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="bg-brand-green/20 border border-brand-green/30 p-3 rounded-lg text-center shadow-[0_0_15px_rgba(37,211,102,0.1)]">
                                        <p className="text-brand-green text-sm font-bold">
                                            +{formatCurrency(projectedResults.revenueIncrease)} em receita extra mensal
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/5511932292255?text=Ol%C3%A1%2C%20venho%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Voa%20Neg%C3%B3cio."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleCtaClick}
                                    className="w-full bg-voa-blue hover:bg-voa-cyan text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-voa-cyan/25 group-hover:scale-[1.02] cursor-pointer"
                                >
                                    Quero construir esse resultado
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <p className="text-center text-voa-light/40 text-xs mt-4">
                            *Estimativa baseada em benchmarks de otimização de funil. Resultados reais podem variar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthSimulator;
