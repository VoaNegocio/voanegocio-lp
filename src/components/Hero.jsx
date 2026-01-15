import React from 'react';
import { ArrowRight, BarChart2, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 center-0 w-[500px] h-[500px] bg-voa-blue/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-voa-cyan/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-voa-light/10 text-voa-cyan text-xs md:text-sm font-medium mb-8"
                    >
                        <Zap className="w-3 h-3 fill-current" />
                        <span>Aceleradora de Crescimento para PMEs</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
                    >
                        Tráfego não resolve vendas. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-voa-cyan to-white text-glow">
                            Estrutura resolve.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-voa-light mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        A Voa Negócio ajuda PMEs a estruturarem <strong>Marketing e Vendas</strong>, com foco total em aumento de faturamento e previsibilidade no digital.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full sm:w-auto bg-voa-blue hover:bg-voa-cyan hover:text-voa-navy text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_0_30px_-5px_rgb(59,0,242,0.4)] hover:shadow-[0_0_40px_-5px_rgb(0,207,255,0.6)] flex items-center justify-center gap-2 group">
                            Falar com Especialista
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white text-lg font-medium px-8 py-4 rounded-xl transition-all flex items-center justify-center">
                            Ver Como Funciona
                        </button>
                    </motion.div>

                </div>

                {/* Abstract "Structure" Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 relative max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Marketing */}
                        <div className="glass p-6 rounded-2xl border-l-4 border-l-voa-blue relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <BarChart2 size={80} />
                            </div>
                            <div className="w-12 h-12 bg-voa-blue/20 rounded-lg flex items-center justify-center mb-4 text-voa-blue">
                                <BarChart2 />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Marketing</h3>
                            <p className="text-voa-light text-sm">Geração de demanda qualificada e previsível.</p>
                        </div>

                        {/* Card 2: Processo */}
                        <div className="glass p-6 rounded-2xl border-l-4 border-l-voa-cyan relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Layers size={80} />
                            </div>
                            <div className="w-12 h-12 bg-voa-cyan/20 rounded-lg flex items-center justify-center mb-4 text-voa-cyan">
                                <Layers />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Processo</h3>
                            <p className="text-voa-light text-sm">Playbook de vendas e qualificação de leads.</p>
                        </div>

                        {/* Card 3: Vendas */}
                        <div className="glass p-6 rounded-2xl border-l-4 border-l-brand-green relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap size={80} />
                            </div>
                            <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-4 text-brand-green">
                                <Zap />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Vendas</h3>
                            <p className="text-voa-light text-sm">Conversão alta e aumento de faturamento.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
