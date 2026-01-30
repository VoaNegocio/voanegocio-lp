import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, BarChart2, Layers, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';
import heroStructure from '../assets/images/hero-structure.png';

const HeroCard = ({ icon: Icon, title, description, activeColor, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Logic: Active if (Mobile & InView) OR (Desktop & Hovered)
    const isActive = (isMobile && isInView) || (!isMobile && isHovered);

    // Color definitions
    const colors = {
        blue: {
            borderFrom: 'from-blue-600',
            borderTo: 'to-blue-600/20',
            cornerGlow: 'bg-blue-600/40',
            iconText: 'text-blue-500',
            boxText: 'text-blue-600',
            titleHover: 'text-blue-400'
        },
        green: {
            borderFrom: 'from-green-500',
            borderTo: 'to-green-500/20',
            cornerGlow: 'bg-green-500/40',
            iconText: 'text-green-500',
            boxText: 'text-green-600',
            titleHover: 'text-green-400'
        },
        cyan: {
            borderFrom: 'from-voa-cyan',
            borderTo: 'to-voa-cyan/20',
            cornerGlow: 'bg-voa-cyan/40',
            iconText: 'text-voa-cyan',
            boxText: 'text-voa-cyan',
            titleHover: 'text-voa-cyan'
        }
    };

    // Default to Cyan properties if not active
    const theme = isActive ? colors[activeColor] : colors['cyan'];

    return (
        <div
            ref={ref}
            className="group relative transition-all duration-300 hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow Effect Container */}
            <div className={`absolute -inset-[1px] bg-gradient-to-b ${theme.borderFrom} via-transparent ${theme.borderTo} rounded-2xl blur opacity-60 transition duration-500`}></div>

            <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl overflow-hidden transition-colors">

                {/* Corner Glows - Reduced Size */}
                <div className={`absolute top-0 right-0 w-6 h-6 ${theme.cornerGlow} blur-[20px] rounded-full -mr-2 -mt-2 pointer-events-none transition-colors duration-500`}></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-white/20 blur-[20px] rounded-full -ml-2 -mb-2 pointer-events-none"></div>

                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon size={100} className={`${theme.iconText} transition-colors duration-500`} />
                </div>
                <div className={`w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl flex items-center justify-center mb-6 ${theme.boxText} group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)] duration-500`}>
                    <Icon size={28} />
                </div>
                <h3 className={`text-2xl font-bold mb-3 text-white ${isActive ? theme.titleHover : ''} transition-colors duration-500`}>{title}</h3>
                <p className="text-white text-base leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <section
            className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/videos/videoteste1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-voa-navy/80 backdrop-blur-[4px]" />
            </div>

            {/* Background Animated Grid */}
            <div className="absolute inset-0 bg-grid-animated opacity-20 pointer-events-none" />

            {/* Background Glows */}
            <div className="absolute top-0 center-0 w-[500px] h-[500px] bg-voa-blue/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-voa-cyan/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Text Content */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-voa-light/10 text-voa-cyan text-xs md:text-sm font-medium mb-8 backdrop-blur-sm"
                        >
                            <Zap className="w-3 h-3 fill-current" />
                            <span>Aceleradora de Crescimento para PMEs</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
                        >
                            Tráfego não resolve vendas. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-voa-cyan to-white text-glow">
                                Estrutura resolve.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-voa-light mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            <span className="text-white font-bold">A <span className="text-voa-cyan">Voa </span></span> Negócio é uma <span className="text-voa-cyan font-bold">Aceleradora de Crescimento</span> que ajuda empresas a transformarem o digital em <span className="text-voa-cyan font-bold">faturamento previsível</span>, com método e execução.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <button className="relative overflow-hidden w-full sm:w-auto bg-green-600 hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] hover:scale-105 flex items-center justify-center gap-2 group">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 w-[200%] h-full animate-electricity" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Falar com Especialista
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <a href="#como-funciona" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white text-lg font-medium px-8 py-4 rounded-xl transition-all flex items-center justify-center backdrop-blur-sm">
                                Ver Como Funciona
                            </a>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-24 relative z-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <HeroCard
                            activeColor="blue"
                            icon={BarChart2}
                            title="Demanda Qualificada"
                            description="Criar um fluxo constante de leads certos, com clareza de oferta e público."
                        />
                        <HeroCard
                            activeColor="cyan"
                            icon={Layers}
                            title="Conversão em Receita"
                            description="Garantir que a demanda gerada vire venda — e não frustração."
                        />
                        <HeroCard
                            activeColor="green"
                            icon={Zap}
                            title="Performance e Acompanhamento"
                            description="Acompanhar, ajustar e escalar o que funciona."
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
