import React from 'react';
import { motion } from 'framer-motion';

const Solution = () => {
    return (
        <section id="solucao" className="py-24 bg-voa-navy relative">
            <div className="container mx-auto px-4">
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
                    <p className="text-xl text-voa-light">
                        Um projeto de <span className="text-white font-bold">6 meses</span> para empresas que querem crescer com método — e parar de depender de tentativa e erro.
                    </p>
                </motion.div>


                <div className="mt-12 text-center">
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
