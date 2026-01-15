import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-black border-t border-white/10 text-center text-voa-light text-sm">
            <div className="container mx-auto px-4">
                <div className="mb-6 flex justify-center">
                    <img src="/src/assets/logo-horizontal.svg" alt="Voa Negócio" className="h-8 md:h-10 w-auto" />
                </div>
                <p>© {new Date().getFullYear()} Voa Negócio. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
