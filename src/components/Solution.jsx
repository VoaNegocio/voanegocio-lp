import React from 'react';
import { motion } from 'framer-motion';

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
                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-b from-white/10 to-blue-600/5 backdrop-blur-md border border-white/10 border-t-white/20 rounded-2xl p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.2)] hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-blue-400 font-bold text-xl">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Estruturação de Marketing</h3>
                        <p className="text-blue-400 font-medium mb-4">— Demanda</p>
                        <p className="text-sm text-gray-400 mb-6">Campanhas no ar em até 30 dias, com estratégia e ativos prontos para rodar.</p>
                        <ul className="space-y-3">
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
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-b from-white/10 to-voa-cyan/5 backdrop-blur-md border border-white/10 border-t-white/20 rounded-2xl p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_40px_-12px_rgba(6,182,212,0.2)] hover:border-voa-cyan/30 hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className="bg-voa-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-voa-cyan font-bold text-xl">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Estruturação Comercial</h3>
                        <p className="text-voa-cyan font-medium mb-4">— Conversão</p>
                        <p className="text-sm text-gray-400 mb-6">A demanda vira receita com um processo comercial desenhado para o seu cenário.</p>
                        <ul className="space-y-3">
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
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-b from-white/10 to-green-500/5 backdrop-blur-md border border-white/10 border-t-white/20 rounded-2xl p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_40px_-12px_rgba(34,197,94,0.2)] hover:border-green-500/30 hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-green-400 font-bold text-xl">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Acompanhamento e Performance</h3>
                        <p className="text-green-400 font-medium mb-4">— Previsibilidade</p>
                        <p className="text-sm text-gray-400 mb-6">Otimização contínua com foco no que importa: volume e conversão.</p>
                        <ul className="space-y-3">
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
                    </motion.div>
                </div>

                <div className="text-center">
                    <a
                        href="https://wa.me/5534991880039?text=Gostaria%20de%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20vendas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-voa-cyan text-voa-navy hover:bg-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-voa-cyan/50 hover:scale-105"
                    >
                        Falar com Especialista
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Solution;
