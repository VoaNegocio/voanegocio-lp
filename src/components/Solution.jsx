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

                <div className="p-1 rounded-3xl bg-gradient-to-r from-voa-blue via-voa-cyan to-brand-green max-w-5xl mx-auto">
                    <div className="bg-voa-grey rounded-[22px] p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Ideal para negócios de serviços</h3>
                        <p className="text-voa-light text-lg">
                            Onde <span className="text-voa-cyan">geração de demanda</span> e <span className="text-brand-green">conversão</span> precisam andar juntas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
