"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const categories = [
    { name: "All", active: true },
    { name: "Website Design", active: false },
    { name: "Company News", active: false },
    { name: "AI & IOT", active: false },
    { name: "E-Commerce", active: false },
    { name: "QA", active: false },
    { name: "CRM DEV", active: false },
    { name: "Mobile", active: false },
];

export default function BlogHero() {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });
            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                delay: 0.5,
            });
        }
    }, []);

    return (
        <section className="relative w-full min-h-[94vh] flex items-center pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/about/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-[1240px] mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-16">

                    <div className="relative p-10 md:p-14 max-w-2xl">
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 600 300"
                            preserveAspectRatio="none"
                        >
                            <path
                                ref={pathRef}
                                d="M 590,10 H 50 C 30,10 10,30 10,50 V 250 C 10,270 30,290 50,290 H 400"
                                fill="none"
                                stroke="white"
                                strokeWidth="1"
                                strokeOpacity="0.5"
                                strokeLinecap="round"
                            />
                        </svg>

                        <div className="relative z-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight"
                            >
                                Techcole's <span className="text-primary">Blog</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-sm md:text-base leading-[.9] font-medium text-white/80 leading-relaxed uppercase tracking-widest max-w-md"
                            >
                                PROFESSIONAL AND CUSTOMER-ORIENTED APPROACH TO BUSINESS, STARTING FROM FIRST CONTACT UNTIL PROJECT COMPLETION
                            </motion.p>
                        </div>
                    </div>

                    <div className="flex flex-wrap lg:justify-start gap-3 max-w-sm mt-4">
                        {categories.map((cat, index) => (
                            <motion.button
                                key={cat.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${cat.active
                                    ? "bg-primary/10 border-primary text-white"
                                    : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                                    }`}
                            >
                                {cat.name}
                            </motion.button>
                        ))}
                    </div>

                </div>
            </div>

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
        </section>
    );
}
