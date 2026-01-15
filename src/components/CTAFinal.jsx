import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTAFinal = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-voa-navy via-voa-blue/20 to-voa-navy z-0"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                    Se você quer organização de verdade <br />
                    <span className="text-base md:text-2xl font-normal text-voa-light mt-4 block">
                        — e não mais uma tentativa no escuro:
                    </span>
                </h2>

                <p className="text-xl text-voa-light mb-12 max-w-2xl mx-auto">
                    Vamos entender seu momento e te dizer com clareza se o nosso método faz sentido para o seu negócio.
                </p>

                <button className="bg-brand-green hover:bg-green-500 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-[0_0_50px_-10px_rgb(16,185,129,0.4)] hover:shadow-[0_0_50px_-5px_rgb(16,185,129,0.6)] transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto group">
                    <MessageCircle className="w-6 h-6" />
                    Chamar a Voa Negócio no WhatsApp
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default CTAFinal;
