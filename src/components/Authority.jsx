import React from 'react';
import { Target, ShieldCheck, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Authority = () => {
    return (
        <section className="py-24 bg-voa-grey relative overflow-hidden">
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
                        <p className="text-xl md:text-2xl text-voa-light font-light leading-relaxed mb-12">
                            Somos uma <strong>Aceleradora de Crescimento para PMEs</strong>. <br className="hidden md:block" />
                            Nós estruturamos o que sustenta o crescimento no digital.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                        {[
                            { title: "Marketing", desc: "Aquisição", icon: <Target className="w-6 h-6 text-voa-cyan" /> },
                            { title: "Comercial", desc: "Conversão", icon: <ShieldCheck className="w-6 h-6 text-brand-green" /> },
                            { title: "Processo", desc: "Previsibilidade", icon: <Rocket className="w-6 h-6 text-voa-blue" /> },
                            { title: "Acompanhamento", desc: "Otimização", icon: <TrendingUp className="w-6 h-6 text-purple-400" /> }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-voa-blue/30 transition-colors"
                            >
                                <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
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
                        className="mt-16 p-8 bg-voa-blue/10 rounded-2xl border border-voa-blue/20"
                    >
                        <p className="text-lg md:text-xl text-white font-medium">
                            "Nosso trabalho não é 'fazer anúncio'. <br />
                            É montar a estrutura para o crescimento acontecer com método."
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

// Start of dummy icons import since TrendingUp was missing in first block
import { TrendingUp } from 'lucide-react';

export default Authority;
