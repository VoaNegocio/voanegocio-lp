import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5511932292255?text=Ol%C3%A1%2C%20venho%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Voa%20Neg%C3%B3cio." // Placeholder number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-brand-green hover:bg-green-500 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-1 hover:scale-110 flex items-center justify-center group"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle className="w-8 h-8 fill-current" />
            <span className="absolute right-full mr-4 bg-white text-voa-navy px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                Fale conosco
            </span>
        </a>
    );
};

export default WhatsAppButton;
