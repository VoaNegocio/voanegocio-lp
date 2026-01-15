import React from 'react';
import { CheckCircle } from 'lucide-react';

const Filter = () => {
    return (
        <section className="py-24 bg-voa-navy relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-16 rounded-3xl border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Esse programa faz sentido se você:
                    </h2>

                    <ul className="space-y-6 max-w-2xl mx-auto">
                        {[
                            "Já tem operação e quer crescer com método",
                            "Quer previsibilidade e clareza dos números",
                            "Quer parar de improvisar no marketing e nas vendas"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-4 p-4 bg-voa-navy/50 rounded-xl border border-voa-light/10">
                                <CheckCircle className="w-6 h-6 text-brand-green shrink-0" />
                                <span className="text-lg text-voa-light">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Filter;
