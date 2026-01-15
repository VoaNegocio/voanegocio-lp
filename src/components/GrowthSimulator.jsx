import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

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

    return (
        <section className="py-24 bg-voa-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <span className="text-voa-cyan font-bold tracking-wider text-sm uppercase mb-4 block">Simulador de Crescimento</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Quanto dinheiro você está <br />
                        <span className="text-red-500">deixando na mesa?</span>
                    </h2>
                    <p className="text-lg text-voa-light">
                        Simule o impacto de uma estrutura de vendas validada no seu faturamento.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto bg-voa-grey/30 border border-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
                    {/* Inputs */}
                    <div className="space-y-8">
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
                    <div className="lg:border-l border-white/10 lg:pl-10 flex flex-col justify-center">
                        <div className="bg-voa-navy rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
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
                                    <div className="bg-brand-green/20 border border-brand-green/30 p-3 rounded-lg text-center">
                                        <p className="text-brand-green text-sm font-bold">
                                            +{formatCurrency(projectedResults.revenueIncrease)} em receita extra mental
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/5534991880039?text=Fiz%20a%20simula%C3%A7%C3%A3o%20no%20site%20e%20quero%20esse%20resultado%20na%20minha%20empresa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-voa-blue hover:bg-voa-cyan text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-voa-cyan/25 group-hover:scale-[1.02]"
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
