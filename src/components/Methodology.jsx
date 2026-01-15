import React from 'react';
import { Check } from 'lucide-react';

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
        <section id="como-funciona" className="py-24 bg-voa-navy relative">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-20">Como Funciona</h2>

                <div className="max-w-4xl mx-auto space-y-12 relative">
                    {/* Connecting Line (Vertical) - Left aligned on mobile, center on desktop doesn't work well for steps, keeping left aligned list type structure is better for detailed steps */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-voa-cyan to-green-500 opacity-30"></div>

                    {phases.map((phase, index) => (
                        <div key={index} className="relative pl-12 md:pl-24 group">
                            {/* Dot on line */}
                            <div className={`absolute left-0 top-0 md:left-4 w-8 h-8 md:w-8 md:h-8 rounded-full border-4 ${phase.color} bg-voa-navy z-10 translate-x-1/2 md:-translate-x-1/2`}></div>

                            <div className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${phase.bg} ${phase.text} w-fit`}>
                                        {phase.period}
                                    </span>
                                </div>

                                <p className="text-lg text-voa-light mb-8 border-l-2 border-white/10 pl-4">{phase.description}</p>

                                <ul className="space-y-3">
                                    {phase.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-voa-light">
                                            <Check className={`w-5 h-5 ${phase.text} shrink-0 mt-0.5`} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
