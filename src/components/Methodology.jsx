import React from 'react';
import { Check } from 'lucide-react';
import methodologyProcess from '../assets/images/methodology-process.png';

const Methodology = () => {
    const phases = [
        {
            title: "Demanda",
            color: "border-blue-500",
            bg: "bg-blue-500/10",
            text: "text-blue-400",
            description: "Porque empresa que cresce precisa gerar oportunidade todo mês — não só quando aparece indicação."
        },
        {
            title: "Conversão",
            color: "border-voa-cyan",
            bg: "bg-voa-cyan/10",
            text: "text-voa-cyan",
            description: <>Porque lead não é resultado.<br />Resultado é venda.</>
        },
        {
            title: "Acompanhamento",
            color: "border-brand-green",
            bg: "bg-green-500/10",
            text: "text-brand-green",
            description: <>Porque o que não é acompanhado… quebra.<br />E o que é acompanhado… melhora.</>
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
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6 relative z-20">NOSSA FILOSOFIA</h2>
                <p className="text-xl text-center text-voa-light mb-16 max-w-3xl mx-auto relative z-20">
                    Crescimento previsível no digital exige 3 coisas funcionando juntas:
                </p>

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
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-2 rounded-lg ${phase.bg} ${phase.text}`}>
                                            <Check className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                                    </div>

                                    <p className="text-lg text-voa-light pl-2">{phase.description}</p>
                                </div>
                            </div>
                        ))}

                        <div className="text-center pt-8 pb-4">
                            <p className="text-xl md:text-2xl font-medium text-white">
                                Esse é o nosso método. <span className="font-bold text-voa-cyan">Simples. Aplicável. Mensurável.</span>
                            </p>
                        </div>

                        <div className="text-center pt-4">
                            <a
                                href="https://wa.me/5534991880039?text=Gostaria%20de%20saber%20mais%20sobre%20a%20metodologia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-voa-cyan text-voa-navy hover:bg-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-voa-cyan/50 hover:scale-105"
                            >
                                Falar com Especialista
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
