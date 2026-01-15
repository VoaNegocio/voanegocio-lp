import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-black border-t border-white/10 text-center text-voa-light text-sm">
            <div className="container mx-auto px-4">
                <div className="mb-4 text-2xl font-display font-bold text-white tracking-tight">
                    Voa<span className="text-voa-cyan">Negócio</span>
                </div>
                <p>© {new Date().getFullYear()} Voa Negócio. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
