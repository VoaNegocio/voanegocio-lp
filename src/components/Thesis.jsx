import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Thesis = () => {
    return (
        <section className="py-24 bg-voa-navy relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 bg-voa-blue/10 border border-voa-blue/20 rounded-full text-voa-blue text-sm font-semibold mb-6">
                            Nossa Tese
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Tráfego sem processo <br />
                            vira <span className="text-voa-cyan">desperdício</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-voa-light">
                            <p>
                                Quando marketing e comercial não estão alinhados, o anúncio só acelera o problema. Você gasta dinheiro para trazer pessoas que seu time não consegue fechar.
                            </p>
                            <p className="text-white font-medium border-l-4 border-voa-blue pl-4">
                                O que muda o jogo é ter estrutura para gerar demanda com clareza e transformar isso em venda.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col gap-3">
                            {["Marketing alinhado ao Comercial", "Ativos de vendas validados", "Gestão de CRM e Pipeline"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                                    <span className="text-voa-light">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Abstract visualization of "Connection" */}
                        <div className="relative z-10 bg-gradient-to-br from-voa-grey to-black p-8 rounded-3xl border border-white/10 shadow-2xl">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-voa-light">Tráfego</span>
                                    <div className="h-1 flex-1 mx-4 bg-gradient-to-r from-red-500/50 to-transparent dashed opacity-50"></div>
                                    <span className="text-red-400">Vendas?</span>
                                </div>
                                <div className="flex justify-center text-xs text-voa-light uppercase tracking-widest my-2">vs</div>
                                <div className="flex items-center justify-between p-4 bg-voa-blue/10 rounded-xl border border-voa-blue/30 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-voa-blue/5 animate-pulse"></div>
                                    <span className="text-white font-bold relative z-10">Tráfego</span>
                                    <div className="h-1 flex-1 mx-4 bg-voa-blue rounded-full relative z-10"></div>
                                    <span className="text-white font-bold relative z-10">Processo</span>
                                    <div className="h-1 flex-1 mx-4 bg-brand-green rounded-full relative z-10"></div>
                                    <span className="text-brand-green font-bold relative z-10">Lucro</span>
                                </div>
                            </div>
                        </div>

                        {/* Background decorative glow */}
                        <div className="absolute inset-0 bg-voa-blue/20 blur-[80px] -z-10 rounded-full"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Thesis;
