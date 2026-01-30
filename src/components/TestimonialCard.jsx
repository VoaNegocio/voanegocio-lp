import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';

const TestimonialCard = ({ item, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    const handleFlip = () => {
        setIsFlipped(true);
    };

    const handleUnflip = (e) => {
        e.stopPropagation();
        setIsFlipped(false);
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const togglePlay = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div
            className="group h-[500px] w-full perspective-1000 cursor-pointer"
            onClick={!isFlipped ? handleFlip : undefined}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{
                    rotateY: { type: "spring", stiffness: 60, damping: 12, mass: 0.8 },
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    y: { duration: 0.5, delay: index * 0.1 }
                }}
                className="relative h-full w-full transform-style-3d"
            >
                {/* Front Face - Travel Card Style */}
                <div className="absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden border-4 border-white bg-gray-900">

                    {/* Full Height Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={item.thumbnail}
                            alt={`Depoimento ${item.author}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay - Bottom Blur Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                    </div>

                    {/* Top Right Floating Icon (Heart/Play) */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play size={20} fill="currentColor" className="ml-1" />
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full pointer-events-none">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                            {/* Stars */}
                            <div className="flex gap-1 mb-3">
                                {[...Array(item.stars)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-sm drop-shadow-md">★</span>
                                ))}
                            </div>

                            {/* Author Name - Big Typography */}
                            <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-lg leading-tight">
                                {item.author}
                            </h3>

                            {/* Role / City */}
                            <p className="text-white/80 text-sm font-medium mb-6 drop-shadow-md flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-voa-cyan inline-block"></span>
                                {item.role}
                            </p>

                            {/* Action Button (Pill Shape) */}
                            <div className="bg-white text-voa-navy font-bold py-4 px-6 rounded-full w-full text-center shadow-lg transform transition-all hover:bg-gray-100 hover:scale-[1.02] active:scale-95 pointer-events-auto flex items-center justify-center gap-2 group/btn">
                                <span>Ver Depoimento </span>
                                <Play size={16} fill="currentColor" className="group-hover/btn:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Face (Video) */}
                <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-[2rem] overflow-hidden bg-black border-4 border-white group">
                    <div className="relative w-full h-full" onClick={togglePlay}>
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            playsInline
                            loop
                            muted={false}
                            controls={false}
                        >
                            <source src={item.videoUrl || "/videos/videoteste1.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Custom Play Indicator (Central) */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform">
                                    <Play size={32} className="text-white fill-current" />
                                </div>
                            </div>
                        )}

                        {/* Close Button (Top Right) */}
                        <button
                            onClick={handleUnflip}
                            className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white hover:text-white rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-110"
                        >
                            <X size={20} />
                        </button>

                        {/* Control Bar (Bottom Floating) */}
                        <div className={`absolute bottom-8 left-8 right-8 z-20 flex justify-between items-center bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                            <button onClick={toggleMute} className="text-white hover:text-voa-cyan transition-colors">
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Voa Negócio</span>
                            <div className="w-5" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TestimonialCard;
