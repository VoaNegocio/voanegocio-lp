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
            className="group h-[450px] perspective-1000 cursor-pointer"
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
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden bg-black/20 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden flex flex-col shadow-lg">
                    {/* Top Image Thumbnail */}
                    <div className="h-3/5 w-full relative overflow-hidden">
                        <img
                            src={item.thumbnail}
                            alt={`Depoimento ${item.author}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Play Icon Hint */}
                        <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 group-hover:bg-voa-cyan group-hover:border-voa-cyan group-hover:text-voa-navy text-white transition-all duration-300 flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider">Ver Depoimento</span>
                            <Play size={14} fill="currentColor" />
                        </div>
                    </div>

                    {/* Bottom Content - Google Feedback Style */}
                    <div className="h-2/5 p-6 flex flex-col justify-between bg-gradient-to-b from-black/40 to-black/60">
                        <div>
                            <div className="flex gap-1 mb-3">
                                {[...Array(item.stars)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-xs">★</span>
                                ))}
                            </div>
                            <p className="text-voa-light text-sm italic leading-relaxed line-clamp-3">
                                {item.text}
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                            <div className="w-8 h-8 bg-gradient-to-br from-voa-navy to-voa-blue rounded-full flex items-center justify-center text-xs font-bold text-white/50 border border-white/10">
                                {item.initials}
                            </div>
                            <div>
                                <p className="text-white font-bold text-xs">{item.author}</p>
                                <p className="text-voa-light/60 text-[10px] uppercase tracking-wider">{item.role}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Face (Video) */}
                <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl bg-black border border-voa-cyan/20 group">
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
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(0,207,255,0.3)]">
                                    <Play size={32} className="text-white fill-current" />
                                </div>
                            </div>
                        )}

                        {/* Close Button (Top Right) */}
                        <button
                            onClick={handleUnflip}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 text-white/70 hover:text-white rounded-full backdrop-blur-md border border-white/10 transition-all"
                        >
                            <X size={20} />
                        </button>

                        {/* Control Bar (Bottom Glass) */}
                        <div className={`absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center bg-black/40 backdrop-blur-md rounded-full px-5 py-3 border border-white/10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                            <button onClick={toggleMute} className="text-white hover:text-voa-cyan transition-colors">
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <span className="text-white/50 text-xs font-mono uppercase tracking-widest">Voa Negócio</span>
                            <div className="w-5" /> {/* Spacer to balance layout without maximize button */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TestimonialCard;
