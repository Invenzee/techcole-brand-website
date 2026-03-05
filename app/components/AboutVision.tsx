"use client";

import { motion } from "framer-motion";

export default function AboutVision() {
    const cards = [
        {
            title: "Vision",
            text: "To become a global leader in digital transformation by empowering businesses with technology that inspires growth, innovation, and long-term impact."
        },
        {
            title: "Mission",
            text: "To deliver scalable, high-performance digital solutions through collaboration, strategy, and cutting-edge technology — ensuring every client achieves measurable success."
        },
        {
            title: "Why Us",
            text: "Techcole takes a strategy-first approach, focusing on real business goals rather than just design. We create custom digital solutions tailored to your needs with clear, transparent communication. Our development is performance-based to ensure scalable and reliable results. Every project is built as a long-term partnership, not a one-size-fits-all solution."
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
