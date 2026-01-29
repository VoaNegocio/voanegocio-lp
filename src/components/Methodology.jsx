import React from 'react';
import { Check } from 'lucide-react';
import methodologyProcess from '../assets/images/methodology-process.png';

const Methodology = () => {
    const phases = [
        {
            title: "Fase 1 — Estruturação de Marketing",
            period: "Mês 1",
            color: "border-blue-500",
            bg: "bg-blue-500/10",
            text: "text-blue-400",
            description: "Campanha no ar em até 30 dias, com base estratégica e ativos prontos para rodar.",
            items: ["Diagnóstico e direcionamento estratégico", "Criativos + anúncios + landing page", "Tráfego rodando com clareza de objetivo"]
        },
        {
            title: "Fase 2 — Estruturação Comercial",
            period: "Mês 2",
            color: "border-voa-cyan",
            bg: "bg-voa-cyan/10",
            text: "text-voa-cyan",
            description: "Desenhamos o processo de vendas para a demanda virar receita.",
            items: ["Mapeamento do comercial atual (AS IS)", "Identificação de gargalos", "Processo ideal (TO BE) + treinamento gravado"]
        },
        {
            title: "Fase 3 — Acompanhamento e Performance",
            period: "Meses 3 a 6",
            color: "border-brand-green",
            bg: "bg-green-500/10",
            text: "text-brand-green",
            description: "Otimização contínua, com acompanhamento do que importa: leads e vendas.",
            items: ["Gestor de tráfego dedicado", "Designer dedicado", "Relatórios semanais", "Acompanhamento de volume e conversão"]
        }
    ];

    return (
        <section id="como-funciona" className="relative py-24 overflow-hidden">
            {/* Background Image with Mask */}
            <div className="absolute inset-0 z-0">
                <img
                    src={methodologyProcess}
                    alt="Process Blueprint Background"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-voa-navy via-voa-navy/95 to-voa-navy/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-voa-navy via-transparent to-voa-navy" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-20 relative z-20">Como Funciona</h2>

                <div className="max-w-5xl mx-auto backdrop-blur-sm bg-voa-navy/40 rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">

                    {/* Decorative Background Elements inside Card */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-voa-blue/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-voa-cyan/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    <div className="space-y-12 relative z-10">
                        {/* Connecting Line (Vertical) */}
                        <div className="absolute left-4 md:left-8 top-8 bottom-8 w-0.5 bg-[#F8F6F1] opacity-50"></div>

                        {phases.map((phase, index) => (
                            <div key={index} className="relative pl-12 md:pl-24 group">
                                {/* Dot on line */}
                                <div className={`absolute left-0 top-0 md:left-4 w-8 h-8 md:w-8 md:h-8 rounded-full border-4 border-[#F8F6F1] bg-voa-navy z-10 translate-x-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}></div>

                                <div className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 shadow-lg">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                                        <span className={`px-4 py-1 rounded-full text-sm font-bold ${phase.bg} ${phase.text} w-fit shadow-sm`}>
                                            {phase.period}
                                        </span>
                                    </div>

                                    <p className="text-lg text-voa-light mb-8 border-l-2 border-white/10 pl-4">{phase.description}</p>

                                    <ul className="space-y-3">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-voa-light">
                                                <Check className={`w-5 h-5 ${phase.text} shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(0,207,255,0.3)]`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
