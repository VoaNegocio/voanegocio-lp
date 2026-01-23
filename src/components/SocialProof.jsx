import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import socialProofBg from '../assets/images/social-proof-grey-network.png';
import TestimonialCard from './TestimonialCard';

const SocialProof = () => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            stars: 5,
            text: "\"A Voa Negócio mudou completamente nossa visão. Antes gastávamos rios de dinheiro em anúncios sem retorno. Agora temos previsibilidade.\"",
            author: "Fernanda",
            role: "CEO, Empresa 1",
            initials: "FE",
            videoUrl: "/videos/videos-depoimentos/depoimento-fernanda-card1.mp4",
            thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            stars: 5,
            text: "\"O processo comercial ficou muito mais claro. A equipe sabe exatamente o que fazer com cada lead que chega.\"",
            author: "Sueli",
            role: "Diretora Comercial, Empresa 2",
            initials: "SU",
            videoUrl: "/videos/videos-depoimentos/depoimento-sueli-card2.mp4",
            thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            stars: 5,
            text: "\"Finalmente paramos de depender da sorte. Temos um funil que funciona e traz clientes qualificados todo dia.\"",
            author: "Isabela",
            role: "Fundadora, Empresa 3",
            initials: "IS",
            videoUrl: "/videos/videos-depoimentos/depoimento-isabela-card3.mp4",
            thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            stars: 5,
            text: "\"A consultoria foi um divisor de águas. Conseguimos estruturar nosso comercial e escalar as vendas em tempo recorde.\"",
            author: "Marcelo",
            role: "Marketing, Empresa 4",
            initials: "MA",
            videoUrl: "/videos/videos-depoimentos/depoimento-marcelo-card4.mp4",
            thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            stars: 5,
            text: "\"Simplesmente sensacional. A metodologia aplicada pela Voa Negócio trouxe uma clareza que nunca tivemos antes.\"",
            author: "Provence",
            role: "Diretor, Empresa 5",
            initials: "PR",
            videoUrl: "/videos/videos-depoimentos/depoimento-provence-card5.mp4",
            thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            stars: 5,
            text: "\"A parceria com a Voa Negócio foi fundamental para o nosso crescimento. Estratégias assertivas e resultados reais.\"",
            author: "Fábio",
            role: "Empresário",
            initials: "FA",
            videoUrl: "/videos/videos-depoimentos/depoimento-fabio-card6.mp4",
            thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = direction === 'left' ? -400 : 400;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollPosition = container.scrollLeft;
            const itemWidth = window.innerWidth < 768 ? window.innerWidth * 0.8 : 400;
            const index = Math.round(scrollPosition / itemWidth);
            setActiveIndex(Math.min(Math.max(0, index), testimonials.length - 1));
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [testimonials.length]);

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

                {/* Infinite Logo Carousel */}
                <div className="w-full relative overflow-hidden mb-20 pointer-events-none">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-voa-grey to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-voa-grey to-transparent z-10" />

                    <div className="flex w-max animate-scroll gap-16 items-center">
                        {/* First Set */}
                        {['CLIENTE 01', 'CLIENTE 02', 'CLIENTE 03', 'CLIENTE 04', 'CLIENTE 05', 'CLIENTE 06'].map((client, index) => (
                            <div key={`a-${index}`} className="h-20 w-48 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-white/30 border border-white/5 uppercase tracking-widest shrink-0">
                                {client}
                            </div>
                        ))}
                        {/* Duplicate Set for Loop */}
                        {['CLIENTE 01', 'CLIENTE 02', 'CLIENTE 03', 'CLIENTE 04', 'CLIENTE 05', 'CLIENTE 06'].map((client, index) => (
                            <div key={`b-${index}`} className="h-20 w-48 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-white/30 border border-white/5 uppercase tracking-widest shrink-0">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Carousel (Scrollable) */}
                <div className="w-full relative group">
                    {/* Navigation Buttons (Desktop) */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-12 z-20 w-12 h-12 bg-voa-navy/80 border border-voa-cyan/30 rounded-full items-center justify-center text-voa-cyan hover:bg-voa-cyan hover:text-voa-navy transition-all shadow-lg backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-100"
                        aria-label="Previous Testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-12 z-20 w-12 h-12 bg-voa-navy/80 border border-voa-cyan/30 rounded-full items-center justify-center text-voa-cyan hover:bg-voa-cyan hover:text-voa-navy transition-all shadow-lg backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-100"
                        aria-label="Next Testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory py-4 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none] scroll-smooth"
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={item.id}
                                className="min-w-[80vw] md:min-w-[400px] flex-shrink-0 snap-center"
                            >
                                <TestimonialCard
                                    item={item}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (scrollContainerRef.current) {
                                        const itemWidth = window.innerWidth < 768 ? window.innerWidth * 0.8 : 400;
                                        // A simple scroll to position
                                        const gap = window.innerWidth < 768 ? 16 : 32;
                                        const scrollTo = index * (itemWidth + gap)
                                        scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
                                    }
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'w-8 bg-voa-cyan shadow-[0_0_10px_rgba(0,207,255,0.5)]'
                                    : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
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
                        className="btn-primary"
                    >
                        Quero ter esses resultados
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
