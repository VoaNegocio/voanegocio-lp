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
                    <div className="glass bg-white/10 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">

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
                                    O problema não é <span className="text-transparent bg-clip-text bg-gradient-to-r from-voa-cyan to-white text-glow">“anúncio”</span>.
                                </h2>
                                <div className="space-y-6 text-lg text-voa-light">
                                    <p className="text-white text-xl">
                                        O problema é que <strong className="text-voa-cyan">tráfego só acelera o que já existe:</strong>
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-col gap-4">
                                    {[
                                        { text: "se sua comunicação está confusa → acelera lead ruim", highlight: "confusa" },
                                        { text: "se o comercial está desorganizado → acelera perda", highlight: "desorganizado" },
                                        { text: "se não existe acompanhamento → acelera desgaste e desistência", highlight: "acompanhamento" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 shrink-0 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                            <span className="text-voa-light font-medium leading-relaxed">
                                                {item.text.split('→').map((part, index) => (
                                                    <span key={index}>
                                                        {index === 0 ? part : <><span className="text-red-400 font-bold">→</span>{part}</>}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="mt-8">
                                        <a
                                            href="https://wa.me/5534991880039?text=Gostaria%20de%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20vendas"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-600 text-white hover:bg-green-500 font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-green-500/50 hover:scale-105"
                                        >
                                            Falar com Especialista
                                        </a>
                                    </div>
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
                                <div className="relative z-10 bg-white/10 p-8 rounded-3xl border border-white/10 shadow-inner backdrop-blur-sm">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-black/60 rounded-xl border border-white/5">
                                            <span className="text-voa-light">Tráfego</span>
                                            <div className="h-1 flex-1 mx-4 bg-gradient-to-r from-red-500/50 to-transparent dashed opacity-50"></div>
                                            <span className="text-red-400">Vendas?</span>
                                        </div>
                                        <div className="flex justify-center text-xs text-voa-light uppercase tracking-widest my-2">vs</div>
                                        <div className="flex items-center justify-between p-4 bg-voa-purple/50 rounded-xl border border-voa-blue/30 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-voa-blue/5 animate-pulse"></div>
                                            <span className="text-white font-bold relative z-10">Tráfego</span>
                                            <div className="h-1 flex-1 mx-4 bg-voa-cyan rounded-full relative z-10 shadow-[0_0_10px_#3b00f2]"></div>
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
