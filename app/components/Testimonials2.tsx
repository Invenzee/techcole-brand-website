"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "John Davis",
        role: "Sales Director at TechCo",
        image: "https://images.unsplash.com/photo-1545696968-1a5245650b91?q=80&w=600&auto=format&fit=crop", // Confetti guy-ish
        quote: "Techcole has completely transformed my design workflow! The efficiency and aesthetic appeal are unmatched.",
        stars: 5,
        company: "HubSpot"
    },
    {
        id: 2,
        name: "Sarah Miller",
        role: "Marketing Head at Buzz",
        image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=600&auto=format&fit=crop",
        quote: "From startups to agencies, this is a must-have. I can't imagine designing without it! Simply wonderful.",
        stars: 5,
        company: "Slack"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Product Owner at Flow",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
        quote: "Stunning templates, responsive designs, and top-notch support. Techcole has it all.",
        stars: 5,
        company: "Linear"
    },
    {
        id: 4,
        name: "Jessica Wong",
        role: "CEO at StartUp",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", // Professional woman
        quote: "The return on investment was immediate. The team is professional, creative, and deadline-oriented.",
        stars: 5,
        company: "Stripe"
    }
];

export default function Testimonials2() {
    const [activeId, setActiveId] = useState(testimonials[0].id);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveId(current => {
                const idx = testimonials.findIndex(t => t.id === current);
                const nextIdx = (idx + 1) % testimonials.length;
                return testimonials[nextIdx].id;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const activeTestimonial = testimonials.find(t => t.id === activeId) || testimonials[0];

    return (
        <section className="w-full bg-white py-24 text-black overflow-hidden relative">
            <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* 1. Left Content (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold leading-tight tracking-tight"
                    >
                        Trusted by Over <span className="text-red-500">15k+ Satisfied</span> Clients
                    </motion.h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Techcole has helped businesses across industries enhance their sales performance and achieve their goals with stunning web experiences.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm font-semibold">
                            4.9/5 Rating <br /> <span className="text-gray-400 font-normal">Based on 350+ Reviews</span>
                        </div>
                    </div>
                </div>

                {/* 2. Center Image (4 cols) */}
                <div className="lg:col-span-4 h-[500px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-2xl"
                        >
                            <img
                                src={activeTestimonial.image}
                                alt={activeTestimonial.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                                <p className="text-lg font-medium mb-4 leading-relaxed">"{activeTestimonial.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-lg">{activeTestimonial.name}</h4>
                                    <p className="text-white/70 text-sm">{activeTestimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 3. Right List (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-4 h-[500px] overflow-hidden relative mask-gradient">
                    {/* Gradient mask for smooth scroll look */}
                    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex flex-col gap-4 py-4">
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                onClick={() => setActiveId(t.id)}
                                className={`
                                    p-6 rounded-2xl cursor-pointer transition-all duration-300 border
                                    ${activeId === t.id
                                        ? 'bg-white shadow-xl border-red-100 scale-105 z-10'
                                        : 'bg-gray-50 border-transparent hover:bg-gray-100 scale-100 opacity-70 hover:opacity-100'}
                                `}
                            >
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">"{t.quote}"</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <h4 className="font-bold text-sm text-black">{t.name}</h4>
                                            <p className="text-gray-400 text-xs">{t.role.split(' at ')[0]}</p>
                                        </div>
                                    </div>
                                    {/* Simple Logo Placeholder */}
                                    <div className="font-bold text-gray-300 text-sm uppercase tracking-wider">
                                        {t.company}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
