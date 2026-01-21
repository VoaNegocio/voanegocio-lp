import React from 'react';
import { Target, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import authorityBg from '../assets/images/authority-grey-structure-bg.png';

const Authority = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Image with Mask */}
            <div className="absolute inset-0 z-0 bg-voa-grey">
                <img
                    src={authorityBg}
                    alt="Grey Structure Background"
                    className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-voa-grey via-transparent to-voa-grey opacity-90" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Quem é a <span className="text-voa-cyan">Voa Negócio</span>?
                        </h2>
                        <div className="backdrop-blur-sm bg-black/20 p-8 rounded-3xl border border-white/5 inline-block">
                            <p className="text-xl md:text-2xl text-voa-light font-light leading-relaxed">
                                Somos uma <strong>Aceleradora de Crescimento para PMEs</strong>. <br className="hidden md:block" />
                                Nós estruturamos o que sustenta o crescimento no digital.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-12">
                        {[
                            { title: "Marketing", desc: "Aquisição", icon: <Target className="w-6 h-6 text-voa-cyan drop-shadow-[0_0_8px_rgba(0,207,255,0.5)]" /> },
                            { title: "Comercial", desc: "Conversão", icon: <ShieldCheck className="w-6 h-6 text-brand-green drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]" /> },
                            { title: "Processo", desc: "Previsibilidade", icon: <Rocket className="w-6 h-6 text-voa-blue drop-shadow-[0_0_8px_rgba(59,0,242,0.5)]" /> },
                            { title: "Acompanhamento", desc: "Otimização", icon: <TrendingUp className="w-6 h-6 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" /> }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-voa-cyan/30 transition-all hover:-translate-y-1 shadow-lg group"
                            >
                                <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="text-voa-light text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 p-8 bg-black/30 rounded-2xl border border-white/5 backdrop-blur-md shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        <p className="text-lg md:text-xl text-white font-medium italic relative z-10">
                            "Nosso trabalho não é 'fazer anúncio'. <br />
                            É montar a estrutura para o crescimento acontecer com método."
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Authority;
