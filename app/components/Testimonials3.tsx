"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Zahra Aziz",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        quote: "Wow! what an amazing journey, Techcole made digital transformation a breeze. Their super friendly team handled every detail, so all I had to do was relax and watch the growth."
    },
    {
        id: 2,
        name: "James Carter",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
        quote: "An incredible experience from start to finish. The team's dedication to quality and speed is unmatched in the industry."
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
        quote: "They truly understood our brand vision and brought it to life in ways we never imagined. Highly recommended!"
    },
    {
        id: 4,
        name: "David Chen",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        quote: "The best decision we made for our business this year. Techcole's expertise is worth every penny."
    },
    {
        id: 5,
        name: "Sarah Kim",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
        quote: "Professional, creative, and efficient. They turned our outdated website into a modern masterpiece."
    },
    {
        id: 6,
        name: "Michael Ross",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
        quote: "I was blown away by the results. The team went above and beyond to ensure our satisfaction."
    },
    {
        id: 7,
        name: "Emily Watson",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
        quote: "Simply the best agency we've worked with. Clear communication and outstanding results."
    }
];

export default function Testimonials3() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(handleNext, 4000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    // Calculate highlighting parts of the quote
    // We'll just hardcode the logic to split the quote for specific styling "Techcole" styling
    const activeTestimonial = testimonials[activeIndex];

    // Helper to render quote with colored brand name
    const renderQuote = (text: string) => {
        const parts = text.split("Techcole");
        if (parts.length === 1) return text;
        return (
            <>
                {parts[0]}
                <span className="text-red-500 font-bold">Techcole</span>
                {parts[1]}
            </>
        );
    };


    return (
        <section className="w-full bg-white py-24 text-black relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center">

                {/* Badge */}
                <div className="px-6 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-12">
                    Testimonials
                </div>

                {/* Quote Text */}
                <div className="text-center mb-12 min-h-[160px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={activeTestimonial.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="text-2xl md:text-4xl font-medium leading-snug text-gray-900"
                        >
                            {renderQuote(activeTestimonial.quote)}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Audio Wave Visualizer */}
                <div className="flex gap-1 h-8 items-center justify-center mb-8">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                height: isPlaying ? [10, 24, 10] : 10,
                                opacity: isPlaying ? 1 : 0.5
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.05
                            }}
                            className={`w-1 rounded-full ${i % 2 === 0 ? 'bg-gray-400' : 'bg-red-400'}`}
                            style={{ height: 10 }} // fallback
                        />
                    ))}
                </div>


                {/* Avatar Carousel */}
                <div className="w-full relative h-[200px] flex items-center justify-center mb-4">
                    {/* We want to show a centered item and neighbors. 
                        A simple way is to position them absolute based on their distance from activeIndex 
                    */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-container overflow-hidden md:overflow-visible">
                        {testimonials.map((t, index) => {
                            // Calculate offset relative to active index (handling wrap-around visually is tricky without a massive list, 
                            // simpler to just do standard distance logic and let it wrap logic handle the data)
                            // To make wrap around visual work perfectly requires duplicating list or complex math. 
                            // We will stick to a simpler window: active is center, +-1, +-2, etc.

                            let offset = index - activeIndex;
                            // Correct for wrap-around to find shortest path
                            if (offset > testimonials.length / 2) offset -= testimonials.length;
                            if (offset < -testimonials.length / 2) offset += testimonials.length;

                            const isActive = offset === 0;

                            // Only render if within range (e.g., -3 to 3) to prevent clutter logic issues if list is long
                            if (Math.abs(offset) > 3) return null;

                            return (
                                <motion.div
                                    key={t.id}
                                    layout
                                    animate={{
                                        x: offset * 130, // 130px spacing
                                        scale: isActive ? 1.3 : 0.9,
                                        opacity: isActive ? 1 : 0.4,
                                        zIndex: isActive ? 10 : 10 - Math.abs(offset),
                                        filter: isActive ? 'blur(0px)' : 'blur(1px)' // Blur non-active
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    onClick={() => setActiveIndex(index)}
                                    className={`
                                        absolute w-24 h-24 rounded-3xl overflow-hidden cursor-pointer shadow-lg border-4
                                        ${isActive ? 'border-white shadow-2xl ring-2 ring-red-100' : 'border-transparent'}
                                    `}
                                >
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Active Name */}
                <motion.div
                    key={`name-${activeTestimonial.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-8"
                >
                    <h3 className="text-lg font-bold text-black">{activeTestimonial.name}</h3>
                </motion.div>

                {/* Controls */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        {isPlaying ? <Pause className="w-5 h-5 text-gray-600" fill="currentColor" /> : <Play className="w-5 h-5 text-gray-600" fill="currentColor" />}
                    </button>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ArrowRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

            </div>
        </section>
    );
}
