import React from 'react';

const SocialProof = () => {
    // Placeholder for logos - using generic shapes for now or text
    return (
        <section id="prova-social" className="py-24 bg-voa-grey border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-4xl mx-auto">
                    Empresas que aplicam estrutura param de "testar marketing" e começam a <span className="text-voa-cyan">operar crescimento</span>.
                </h2>

                {/* Placeholder for Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 mb-20 grayscale">
                    {/* Replace these with actual SVGs later */}
                    <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center font-bold text-white/40">CLIENTE 01</div>
                    <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center font-bold text-white/40">CLIENTE 02</div>
                    <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center font-bold text-white/40">CLIENTE 03</div>
                    <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center font-bold text-white/40">CLIENTE 04</div>
                </div>

                {/* Text/Video Testimonials Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-voa-navy p-6 rounded-2xl border border-white/5 text-left">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-500">★</span>)}
                            </div>
                            <p className="text-voa-light mb-6 text-sm">"A Voa Negócio mudou completamente nossa visão. Antes gastávamos rios de dinheiro em anúncios sem retorno. Agora temos previsibilidade."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <p className="text-white font-bold text-sm">Nome do Cliente</p>
                                    <p className="text-slate-500 text-xs">CEO, Empresa {i}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
