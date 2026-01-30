import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Users, Zap, ArrowRight } from 'lucide-react';

const Solution = () => {
    return (
        <section id="solucao" className="py-24 bg-voa-navy relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-voa-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-voa-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <span className="text-voa-cyan font-bold tracking-wider text-sm uppercase mb-4 block">Nossa Solução</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Programa de Aceleração e <br />
                        <span className="text-voa-light">Estruturação em Vendas</span>
                    </h2>
                    <p className="text-xl text-voa-light mb-8">
                        Um projeto de <span className="text-white font-bold">6 meses</span> para empresas que querem crescer com método — e parar de depender de tentativa e erro.
                    </p>
                    <p className="text-lg md:text-xl font-medium text-white bg-white/5 inline-block px-6 py-3 rounded-full border border-white/10">
                        O método é aplicado em 3 etapas, de forma progressiva:
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {/* Step 1 - Marketing */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Glow Effect Container */}
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-600 via-transparent to-blue-600/20 rounded-2xl blur opacity-60 transition duration-500"></div>

                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl overflow-hidden transition-colors">

                            {/* Corner Glows - Reduced Size */}
                            <div className="absolute top-0 right-0 w-6 h-6 bg-blue-600/40 blur-[20px] rounded-full -mr-2 -mt-2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-6 h-6 bg-white/20 blur-[20px] rounded-full -ml-2 -mb-2 pointer-events-none"></div>

                            {/* Background Icon */}
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <BarChart2 size={100} className="text-blue-500" />
                            </div>

                            {/* Small Icon/Number Box */}
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                <span className="font-bold text-xl">1</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Estruturação de Marketing</h3>
                            <p className="text-blue-400 font-medium mb-4">— Demanda</p>
                            <p className="text-sm text-gray-400 mb-6">Campanhas no ar em até 30 dias, com estratégia e ativos prontos para rodar.</p>
                            <ul className="space-y-3 relative z-10">
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                    Diagnóstico e direcionamento estratégico
                                </li>
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                    Criativos + anúncios + landing page
                                </li>
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                    Tráfego rodando com clareza de objetivo
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Step 2 - Commercial */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Glow Effect Container */}
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-voa-cyan via-transparent to-voa-cyan/20 rounded-2xl blur opacity-60 transition duration-500"></div>

                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl overflow-hidden transition-colors">

                            {/* Corner Glows - Reduced Size */}
                            <div className="absolute top-0 right-0 w-6 h-6 bg-voa-cyan/40 blur-[20px] rounded-full -mr-2 -mt-2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-6 h-6 bg-white/20 blur-[20px] rounded-full -ml-2 -mb-2 pointer-events-none"></div>

                            {/* Background Icon */}
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Users size={100} className="text-voa-cyan" />
                            </div>

                            {/* Small Icon/Number Box */}
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl flex items-center justify-center mb-6 text-voa-cyan group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                <span className="font-bold text-xl">2</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-voa-cyan transition-colors">Estruturação Comercial</h3>
                            <p className="text-voa-cyan font-medium mb-4">— Conversão</p>
                            <p className="text-sm text-gray-400 mb-6">A demanda vira receita com um processo comercial desenhado para o seu cenário.</p>
                            <ul className="space-y-3 relative z-10">
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-voa-cyan mt-1.5 shrink-0" />
                                    Mapeamento do comercial atual (AS IS)
                                </li>
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-voa-cyan mt-1.5 shrink-0" />
                                    Identificação de gargalos
                                </li>
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-voa-cyan mt-1.5 shrink-0" />
                                    Processo ideal (TO BE) + treinamento gravado
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Step 3 - Performance */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Glow Effect Container */}
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-green-500 via-transparent to-green-500/20 rounded-2xl blur opacity-60 transition duration-500"></div>

                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl overflow-hidden transition-colors">

                            {/* Corner Glows - Reduced Size */}
                            <div className="absolute top-0 right-0 w-6 h-6 bg-green-500/40 blur-[20px] rounded-full -mr-2 -mt-2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-6 h-6 bg-white/20 blur-[20px] rounded-full -ml-2 -mb-2 pointer-events-none"></div>

                            {/* Background Icon */}
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap size={100} className="text-green-500" />
                            </div>

                            {/* Small Icon/Number Box */}
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                <span className="font-bold text-xl">3</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Acompanhamento e Performance</h3>
                            <p className="text-green-400 font-medium mb-4">— Previsibilidade</p>
                            <p className="text-sm text-gray-400 mb-6">Otimização contínua com foco no que importa: volume e conversão.</p>
                            <ul className="space-y-3 relative z-10">
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                    Gestor de tráfego dedicado
                                </li>
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                    Designer dedicado
                                </li>
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                    Relatórios semanais
                                </li>
                                <li className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                    Acompanhamento de volume e conversão
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center">
                    <a
                        href="https://wa.me/5534991880039?text=Gostaria%20de%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20vendas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] hover:scale-105 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 w-[200%] h-full animate-electricity" />
                        <span className="relative z-10 flex items-center gap-2">
                            Falar com Especialista
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Solution;
