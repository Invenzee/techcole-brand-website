"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactHero() {
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
        <section className="relative w-full min-h-[100vh] flex items-center pt-40 pb-20 overflow-hidden">
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
                                Get a Free <span className="text-primary">Consultation</span> with Our Experts!
                            </motion.h1>
                        </div>
                    </div>

                    <div className="flex flex-wrap lg:justify-start gap-3 max-w-sm mt-4">
                        <motion.img
                            initial={{ opacity: 0, y: 20, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: 360 }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.5 },
                                y: { duration: 0.8, delay: 0.5 },
                                rotate: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                            src="/contact/contact-hero.png"
                            alt="Contact Hero Image"
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </div>

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
        </section>
    );
}
