import React from 'react';
import { Target, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import authorityBg from '../assets/images/authority-grey-structure-bg.png';

const Authority = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
            {/* Background Image with Mask */}
            <div className="absolute inset-0 z-0">
                <img
                    src={authorityBg}
                    alt="Grey Structure Background"
                    className="w-full h-full object-cover opacity-5 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50 opacity-90" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-voa-navy mb-8">
                            Quem é a <span className="text-voa-blue">Voa Negócio</span>?
                        </h2>
                        <div className="backdrop-blur-sm bg-white/60 p-8 rounded-3xl border border-voa-navy/5 inline-block shadow-lg">
                            <p className="text-xl md:text-2xl text-voa-navy/80 font-light leading-relaxed">
                                A Voa Negócio é uma <span className="text-voa-blue font-bold">Aceleradora de Crescimento para Pequenas e Médias Empresas</span>. <br className="hidden md:block" />
                                Nós estruturamos o que sustenta o crescimento no digital:
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-12">
                        {[
                            { title: "Marketing", desc: "Aquisição", icon: <Target className="w-6 h-6 text-voa-blue drop-shadow-sm" /> },
                            { title: "Comercial", desc: "Conversão", icon: <ShieldCheck className="w-6 h-6 text-brand-green drop-shadow-sm" /> },
                            { title: "Processo", desc: "Previsibilidade", icon: <Rocket className="w-6 h-6 text-voa-purple drop-shadow-sm" /> },
                            { title: "Acompanhamento", desc: "Otimização", icon: <TrendingUp className="w-6 h-6 text-purple-600 drop-shadow-sm" /> }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-voa-blue/30 transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl group"
                            >
                                <div className="mb-4 bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-100 group-hover:bg-voa-blue/5 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-voa-navy">{item.title}</h3>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 p-8 bg-white/80 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-voa-blue/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        <p className="text-lg md:text-xl text-voa-navy font-medium italic relative z-10">
                            "Nosso trabalho não é “fazer anúncio”. <br />
                            É montar o sistema para sua empresa <span className="text-voa-blue not-italic font-bold">crescer com clareza, consistência e controle</span>."
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Authority;
