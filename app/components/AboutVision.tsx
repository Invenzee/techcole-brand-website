"use client";

import { motion } from "framer-motion";

export default function AboutVision() {
    const cards = [
        {
            title: "Vision",
            text: "Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions."
        },
        {
            title: "Mission",
            text: "Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions."
        },
        {
            title: "Why Us",
            text: "Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions."
        }
    ];

    return (
        <section className="relative w-full py-16 overflow-hidden">
            {/* Red Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary" />
                <img
                    src="/about/vision-bg.png"
                    alt="Background Pattern"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
                />
            </div>

            <div className="relative z-10 max-w-[1240px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                                ease: [0.21, 1.11, 0.81, 0.99] // Smooth bouncy ease
                            }}
                            className="bg-white rounded-4xl p-8 shadow-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                                {card.title}
                            </h3>
                            <p className="text-gray-900 leading-relaxed text-xs md:text-sm">
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
