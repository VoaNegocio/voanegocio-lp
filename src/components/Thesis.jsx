import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import thesisNetwork from '../assets/images/thesis-network.png';

const Thesis = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image with Mask */}
            <div className="absolute inset-0 z-0">
                <img
                    src={thesisNetwork}
                    alt="Connected Network Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-voa-navy via-voa-navy/90 to-voa-navy/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-voa-navy via-transparent to-voa-navy" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Glass Card Container */}
                    <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">

                        {/* Decorative glow inside card */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-voa-cyan/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-voa-blue/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-block px-3 py-1 bg-voa-blue/20 border border-voa-blue/30 rounded-full text-voa-cyan text-sm font-semibold mb-6 shadow-[0_0_10px_rgba(0,207,255,0.2)]">
                                    Nossa Tese
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                    Tráfego sem processo <br />
                                    vira <span className="text-voa-cyan text-glow">desperdício</span>.
                                </h2>
                                <div className="space-y-6 text-lg text-voa-light">
                                    <p>
                                        Quando marketing e comercial não estão alinhados, o anúncio só acelera o problema. Você gasta dinheiro para trazer pessoas que seu time não consegue fechar.
                                    </p>
                                    <p className="text-white font-medium border-l-4 border-voa-cyan pl-4">
                                        O que muda o jogo é ter estrutura para gerar demanda com clareza e transformar isso em venda.
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-col gap-3">
                                    {["Marketing alinhado ao Comercial", "Ativos de vendas validados", "Gestão de CRM e Pipeline"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-green drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]" />
                                            <span className="text-voa-light font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Abstract visualization of "Connection" */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="hidden md:block relative"
                            >
                                <div className="relative z-10 bg-black/40 p-8 rounded-3xl border border-white/10 shadow-inner backdrop-blur-sm">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                            <span className="text-voa-light">Tráfego</span>
                                            <div className="h-1 flex-1 mx-4 bg-gradient-to-r from-red-500/50 to-transparent dashed opacity-50"></div>
                                            <span className="text-red-400">Vendas?</span>
                                        </div>
                                        <div className="flex justify-center text-xs text-voa-light uppercase tracking-widest my-2">vs</div>
                                        <div className="flex items-center justify-between p-4 bg-voa-blue/10 rounded-xl border border-voa-blue/30 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-voa-blue/5 animate-pulse"></div>
                                            <span className="text-white font-bold relative z-10">Tráfego</span>
                                            <div className="h-1 flex-1 mx-4 bg-voa-blue rounded-full relative z-10 shadow-[0_0_10px_#3b00f2]"></div>
                                            <span className="text-white font-bold relative z-10">Processo</span>
                                            <div className="h-1 flex-1 mx-4 bg-brand-green rounded-full relative z-10 shadow-[0_0_10px_#25d366]"></div>
                                            <span className="text-brand-green font-bold relative z-10 text-shadow">Lucro</span>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-xs text-center text-voa-light/60">
                                        Sistema de escala previsível
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thesis;
