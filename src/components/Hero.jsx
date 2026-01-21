import React, { useRef } from 'react';
import { ArrowRight, BarChart2, Layers, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import heroStructure from '../assets/images/hero-structure.png';

const Hero = () => {
    return (
        <section
            className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/videos/videoteste1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-voa-navy/80 backdrop-blur-[4px]" />
            </div>

            {/* Background Animated Grid */}
            <div className="absolute inset-0 bg-grid-animated opacity-20 pointer-events-none" />

            {/* Background Glows */}
            <div className="absolute top-0 center-0 w-[500px] h-[500px] bg-voa-blue/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-voa-cyan/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Text Content */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-voa-light/10 text-voa-cyan text-xs md:text-sm font-medium mb-8 backdrop-blur-sm"
                        >
                            <Zap className="w-3 h-3 fill-current" />
                            <span>Aceleradora de Crescimento para PMEs</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
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
                            A <span className="text-voa-cyan">Voa </span><span className="text-white"> Negócio</span> ajuda PMEs a estruturarem <strong> <span className="text-voa-cyan">Marketing e Vendas</span></strong>, com foco total em aumento de faturamento e previsibilidade no digital.
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
                            <a href="#como-funciona" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white text-lg font-medium px-8 py-4 rounded-xl transition-all flex items-center justify-center backdrop-blur-sm">
                                Ver Como Funciona
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Glass Cards Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-24 relative z-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Marketing */}
                        <div className="group relative transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-voa-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative h-full bg-voa-navy/40 backdrop-blur-md border border-white/10 group-hover:border-voa-cyan/50 p-8 rounded-2xl overflow-hidden transition-colors">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <BarChart2 size={100} className="text-voa-cyan" />
                                </div>
                                <div className="w-14 h-14 bg-voa-blue/20 rounded-xl flex items-center justify-center mb-6 text-voa-cyan group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,207,255,0.3)]">
                                    <BarChart2 size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-voa-cyan transition-colors">Marketing</h3>
                                <p className="text-voa-light text-base leading-relaxed">Geração de demanda qualificada e previsível através de funis validados.</p>
                            </div>
                        </div>

                        {/* Card 2: Processo */}
                        <div className="group relative transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-voa-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative h-full bg-voa-navy/40 backdrop-blur-md border border-white/10 group-hover:border-voa-blue/50 p-8 rounded-2xl overflow-hidden transition-colors">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Layers size={100} className="text-voa-blue" />
                                </div>
                                <div className="w-14 h-14 bg-voa-cyan/20 rounded-xl flex items-center justify-center mb-6 text-voa-blue group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,0,242,0.3)]">
                                    <Layers size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-voa-blue transition-colors">Processo</h3>
                                <p className="text-voa-light text-base leading-relaxed">Playbook de vendas e qualificação de leads para eliminar o caos comercial.</p>
                            </div>
                        </div>

                        {/* Card 3: Vendas */}
                        <div className="group relative transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-brand-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative h-full bg-voa-navy/40 backdrop-blur-md border border-white/10 group-hover:border-brand-green/50 p-8 rounded-2xl overflow-hidden transition-colors">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Zap size={100} className="text-brand-green" />
                                </div>
                                <div className="w-14 h-14 bg-brand-green/20 rounded-xl flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(37,211,102,0.3)]">
                                    <Zap size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-green transition-colors">Vendas</h3>
                                <p className="text-voa-light text-base leading-relaxed">Conversão alta e aumento de faturamento com previsibilidade.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
