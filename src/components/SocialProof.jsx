import React from 'react';
import { motion } from 'framer-motion';
import socialProofBg from '../assets/images/social-proof-grey-network.png';

const SocialProof = () => {
    return (
        <section id="prova-social" className="py-24 relative overflow-hidden">
            {/* Background Image with Mask */}
            <div className="absolute inset-0 z-0 bg-voa-grey">
                <img
                    src={socialProofBg}
                    alt="Grey Network Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-voa-grey via-transparent to-voa-grey opacity-90" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-4xl mx-auto"
                >
                    Empresas que aplicam estrutura param de "testar marketing" e começam a <span className="text-voa-cyan">operar crescimento</span>.
                </motion.h2>

                {/* Placeholder for Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {/* Replace these with actual SVGs later */}
                    {['CLIENTE 01', 'CLIENTE 02', 'CLIENTE 03', 'CLIENTE 04'].map((client, index) => (
                        <div key={index} className="h-16 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-white/30 border border-white/5 hover:border-voa-cyan/20 transition-colors">
                            {client}
                        </div>
                    ))}
                </div>

                {/* Text/Video Testimonials Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i, index) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-white/5 text-left hover:border-voa-cyan/30 transition-all hover:-translate-y-1 shadow-lg"
                        >
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-500">★</span>)}
                            </div>
                            <p className="text-voa-light mb-6 text-sm italic leading-relaxed">"A Voa Negócio mudou completamente nossa visão. Antes gastávamos rios de dinheiro em anúncios sem retorno. Agora temos previsibilidade."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-voa-navy to-voa-blue rounded-full flex items-center justify-center text-xs font-bold text-white/50">FT</div>
                                <div>
                                    <p className="text-white font-bold text-sm">Nome do Cliente</p>
                                    <p className="text-voa-light/60 text-xs">CEO, Empresa {i}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://wa.me/5534991880039?text=Quero%20ter%20esses%20resultados%20na%20minha%20empresa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-voa-cyan/10 border border-voa-cyan text-voa-cyan hover:bg-voa-cyan hover:text-voa-navy font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(0,207,255,0.15)] hover:shadow-[0_0_30px_rgba(0,207,255,0.4)]"
                    >
                        Quero ter esses resultados
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
