import React from 'react';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem = () => {
    const problems = [
        {
            icon: <TrendingDown className="w-8 h-8 text-red-500" />,
            title: "Demanda Fraca ou Errada",
            description: "Você investe, mas os leads que chegam são desqualificados ou curiosos.",
        },
        {
            icon: <Users className="w-8 h-8 text-voa-cyan" />,
            title: "Comercial Não Converte",
            description: "O time de vendas reclama da qualidade dos leads e taxa de conversão é baixa.",
        },
        {
            icon: <AlertCircle className="w-8 h-8 text-yellow-500" />,
            title: "Pouca Previsibilidade",
            description: "Muito esforço para fechar o mês e vender vira uma caixinha de surpresas.",
        },
    ];

    return (
        <section className="py-20 bg-voa-grey relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Você até investe em marketing. <br />
                        <span className="text-voa-light/60">Mas a conta não fecha.</span>
                    </h2>
                    <p className="text-lg text-voa-light">
                        No fim, sobra uma sensação comum: muito esforço e pouca previsibilidade de crescimento real.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-voa-navy p-8 rounded-2xl border border-white/5 hover:border-voa-cyan/30 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-voa-light leading-relaxed text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
