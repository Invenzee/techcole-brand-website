"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProcessSection = () => {
    const steps = [
        {
            title: "Discovery & Analysis:",
            description:
                "Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.",
        },
        {
            title: "Strategy Development:",
            description:
                "Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.",
        },
        {
            title: "Implementation & Optimization:",
            description:
                "Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.",
        },
        {
            title: "Monitoring & Reporting:",
            description:
                "Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.",
        },
    ];

    return (
        <section className="w-full bg-[#D12027] text-white py-16 md:py-24 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-regular text-center text-white mb-8 tracking-tight"
                >
                    Our Process
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Text Steps */}
                    <div className="space-y-8 md:space-y-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col gap-2"
                            >
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Image */}
                    <motion.div
                        className="relative h-[400px] md:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/about/hero-top-bg.png"
                            alt="Hero Background"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
