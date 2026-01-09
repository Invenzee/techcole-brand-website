"use client";

import { motion } from "framer-motion";
import { Check, Clock, Users, Briefcase } from "lucide-react";
import Button from "./global/Button";

const stats = [
    {
        id: 1,
        number: "24+",
        icon: <Clock className="w-4 h-4 text-red-500" />,
        text: "years of active, market-driven experience under our belt."
    },
    {
        id: 2,
        number: "250+",
        icon: <Check className="w-4 h-4 text-red-500" />,
        text: "years of active, market-driven experience under our belt."
    },
    {
        id: 3,
        label: "Team",
        number: "224+",
        icon: <Users className="w-4 h-4 text-red-500" />,
        text: "years of active, market-driven experience under our belt."
    },
    {
        id: 4,
        label: "Projects",
        number: "350+",
        icon: <Briefcase className="w-4 h-4 text-red-500" />,
        text: "years of active, market-driven experience under our belt."
    }
];

export default function About() {
    return (
        <section className="w-full bg-white py-24 text-black relative z-20">
            <div className="max-w-[1140px] mx-auto px-6 md:px-0">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About <span className="text-red-500">Us</span></h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-[40%] flex flex-col justify-center"
                    >
                        <span className="text-gray-500 font-medium mb-4 block">Techcole is the largest and most experienced IT team</span>
                        <h3 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                            Passionate and <br />
                            <span className="text-red-500">creative</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.
                        </p>

                        <div>
                            <button className="bg-red-600 text-white rounded-full px-8 py-4 font-semibold hover:bg-red-700 transition-colors shadow-lg">
                                Learn More
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-[60%]"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.id}
                                    className={`
                                        p-10 border-gray-100 flex flex-col gap-4 group hover:bg-gray-50 transition-colors
                                        ${index === 0 ? 'border-b md:border-r' : ''}
                                        ${index === 1 ? 'border-b' : ''}
                                        ${index === 2 ? 'border-b md:border-b-0 md:border-r' : ''}
                                        ${index === 3 ? '' : ''}
                                    `}
                                >
                                    {stat.label && <span className="text-red-500 font-medium text-sm">{stat.label}</span>}
                                    <div className="flex items-start gap-3">
                                        <h4 className="text-5xl font-bold tracking-tighter">{stat.number}</h4>
                                        <div className="w-6 h-6 rounded-full border border-red-200 flex items-center justify-center mt-2">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                                        {stat.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
