"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Testimonial Data
const testimonials = [
    {
        id: 1,
        name: "Jim Corner",
        role: "CEO, Victonary Co.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        quote: "I would like to say a big Thank you for your immense effort and support. In addition, I have feeling that our further events are going to be Great as well, good luck to the team."
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Founder, DesignLab",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        quote: "The attention to detail and creative solutions provided were outstanding. Truly a partner in our success story."
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "CTO, TechFlow",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
        quote: "Efficient, scalable, and stunning. The team delivered exactly what we needed within a tight deadline."
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Marketing Head, Buzz",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
        quote: "Our conversion rates skyrocketed after the redesign. I can't recommend them enough for their strategic approach."
    },
    {
        id: 5,
        name: "David Wilson",
        role: "Director, Ecoworld",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        quote: "A seamless experience from start to finish. Professionalism and creativity at its peak."
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full bg-[#E50914] rounded-[30px] py-24 ml-10 my-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-[1140px] mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight">What they say about us</h2>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    <div className="flex-shrink-0 flex flex-col gap-8 relative z-10">
                        {/* Arrows */}
                        <div className="flex gap-4">
                            <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors backdrop-blur-sm group">
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white text-red-600 flex items-center justify-center shadow-lg hover:scale-105 transition-transform group">
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Active Profile Card */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-[300px] h-[380px] bg-white rounded-[2rem] p-4 pb-8 flex flex-col shadow-2xl relative"
                                >
                                    {/* Image Container */}
                                    {/* We use a purple-ish background in the ref, changing to Red-light here */}
                                    <div className="w-full h-[280px] bg-red-50 rounded-[1.5rem] overflow-hidden mb-4 relative">
                                        <img
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Name Info */}
                                    <div className="text-center mt-auto">
                                        <h3 className="text-black text-xl font-bold">{testimonials[activeIndex].name}</h3>
                                        <p className="text-gray-500 text-sm mt-1">{testimonials[activeIndex].role}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </div>

                    <div className="flex-1 w-full flex flex-col justify-end h-full">
                        <div className="md:hidden bg-white text-black p-6 rounded-2xl mb-8 shadow-lg">
                            <p>"{testimonials[activeIndex].quote}"</p>
                        </div>

                        <div className="hidden md:block mb-8 self-start ml-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`quote-right-${activeIndex}`}
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full h-[260px] bg-white rounded-3xl rounded-bl-none p-8 shadow-xl text-black"
                                >
                                    <Quote className="w-8 h-8 text-red-500 mb-4 opacity-50" />
                                    <p className="text-2xl leading-relaxed font-medium text-gray-800">
                                        "{testimonials[activeIndex].quote}"
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="w-20 py-2 rounded-full border border-white/30 flex items-center justify-center text-sm font-medium backdrop-blur-sm self-start lg:ml-8">
                                {activeIndex + 1} / {testimonials.length}
                            </div>

                            <div className="flex flex-wrap gap-4 lg:gap-6 lg:ml-8">
                                {testimonials.map((t, idx) => (
                                    <div
                                        key={t.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`
                                            relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
                                            ${idx === activeIndex
                                                ? 'ring-4 ring-white scale-110 z-10 grayscale-0'
                                                : 'grayscale opacity-70 hover:opacity-100 hover:grayscale-0'}
                                        `}
                                    >
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
