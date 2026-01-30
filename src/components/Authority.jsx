import React from 'react';
import { Target, ShieldCheck, Rocket, TrendingUp, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

import authorityBg from '../assets/images/authority-structure-bg.png';

const Authority = () => {
    const features = [
        {
            title: "Marketing",
            desc: "Aquisição de clientes com previsibilidade e escala.",
            icon: Target,
            color: "blue"
        },
        {
            title: "Comercial",
            desc: "Processos que transformam leads em receita real.",
            icon: ShieldCheck,
            color: "green"
        },
        {
            title: "Processo",
            desc: "Playbooks que eliminam a dependência de talentos únicos.",
            icon: Rocket,
            color: "cyan"
        },
        {
            title: "Gestão",
            desc: "Dados claros para tomada de decisão estratégica.",
            icon: TrendingUp,
            color: "purple"
        }
    ];

    const getColorTheme = (color) => {
        const themes = {
            blue: { border: 'from-blue-600 via-transparent to-blue-600/20', glow: 'bg-blue-600/40', icon: 'text-blue-600', bgIcon: 'bg-blue-50' },
            green: { border: 'from-green-500 via-transparent to-green-500/20', glow: 'bg-green-500/40', icon: 'text-green-500', bgIcon: 'bg-green-50' },
            cyan: { border: 'from-voa-cyan via-transparent to-voa-cyan/20', glow: 'bg-voa-cyan/40', icon: 'text-voa-cyan', bgIcon: 'bg-cyan-50' },
            purple: { border: 'from-purple-600 via-transparent to-purple-600/20', glow: 'bg-purple-600/40', icon: 'text-purple-600', bgIcon: 'bg-purple-50' }
        };
        return themes[color] || themes.blue;
    };

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
            {/* Background Texture Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={authorityBg}
                    alt="Authority Structure Background"
                    className="w-full h-full object-cover opacity-20 mix-blend-multiply"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50/80 via-white/60 to-slate-200/50"></div>

            {/* Tech Light Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-voa-blue/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-voa-cyan/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-voa-blue text-xs md:text-sm font-medium mb-6">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Metodologia Validada</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-voa-navy mb-6 leading-tight">
                            Quem é a <span className="text-transparent bg-clip-text bg-gradient-to-r from-voa-blue to-voa-cyan">Voa Negócio</span>?
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Uma <span className="font-bold text-voa-navy">Aceleradora de Crescimento</span> que estrutura os 4 pilares fundamentais para sua empresa escalar de verdade.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {features.map((item, index) => {
                        const theme = getColorTheme(item.color);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Split Gradient Border */}
                                <div className={`absolute -inset-[1px] bg-gradient-to-b ${theme.border} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>

                                <div className="relative h-full bg-white border border-slate-100 p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                                    {/* Subtle Corner Glow on Hover */}
                                    <div className={`absolute top-0 right-0 w-16 h-16 ${theme.glow} blur-[40px] rounded-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition duration-500`}></div>

                                    <div className={`w-14 h-14 ${theme.bgIcon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`w-7 h-7 ${theme.icon}`} />
                                    </div>

                                    <h3 className="text-xl font-bold text-voa-navy mb-3">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 max-w-3xl mx-auto"
                >
                    <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-voa-blue via-voa-cyan to-brand-green"></div>
                        <p className="text-xl md:text-2xl text-voa-navy font-medium italic relative z-10 leading-relaxed">
                            "Nosso trabalho não é 'fazer anúncio'. É montar o sistema para sua empresa <span className="text-transparent bg-clip-text bg-gradient-to-r from-voa-blue to-voa-cyan font-bold not-italic">crescer com clareza, consistência e controle</span>."
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <button className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-orange-600 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] hover:scale-105 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 w-[200%] h-full animate-electricity" />
                            <span className="relative z-10 flex items-center gap-2">
                                Falar com Especialista
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Authority;
