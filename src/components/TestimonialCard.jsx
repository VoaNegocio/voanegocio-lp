import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';

const TestimonialCard = ({ item, index }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

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
        <div className="group h-[500px] w-full cursor-pointer">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    y: { duration: 0.5, delay: index * 0.1 }
                }}
                className="relative h-full w-full rounded-[2rem] overflow-hidden bg-black border-4 border-white group"
            >
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

                    {/* Control Bar (Bottom Floating) */}
                    <div className={`absolute bottom-8 left-8 right-8 z-20 flex justify-between items-center bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                        <button onClick={toggleMute} className="text-white hover:text-voa-cyan transition-colors">
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Voa Negócio</span>
                        <div className="w-5" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TestimonialCard;
