"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "./global/Button";
import arrowUpImg from '@/public/arrow-up.png'
import arrowUpRedImg from '@/public/arrow-up-red.png'

const stats = [
    {
        id: 1,
        number: "24+",
        icon: arrowUpImg,
        text: "years of active, market-driven experience under our belt."
    },
    {
        id: 2,
        number: "250+",
        icon: arrowUpImg,
        text: "years of active, market-driven experience under our belt."
    },
    {
        id: 3,
        label: "Team",
        number: "224+",
        icon: arrowUpImg,
        text: "years of active, market-driven experience under our belt."
    },
    {
        id: 4,
        label: "Projects",
        number: "350+",
        icon: arrowUpImg,
        text: "years of active, market-driven experience under our belt."
    }
];

function Counter({ value }: { value: string }) {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, {
                duration: 2,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, count, numericValue]);

    return (
        <span ref={ref} className="inline-flex items-baseline">
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
        </span>
    );
}

export default function About() {
    return (
        <section className="w-full bg-white py-24 text-black relative z-20">
            <div className="max-w-[1140px] mx-auto px-6 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-20 max-sm:mb-4 max-sm:justify-start"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">About <span className="text-primary">Us</span></h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-[40%] flex flex-col justify-center"
                    >
                        <span className="text-black font-medium mb-2 block text-sm md:text-base">Techcole is the largest and most experienced IT team</span>
                        <h3 className="text-4xl md:text-6xl font-semibold leading-[1.1] md:leading-[.9] mb-6 tracking-tight">
                            Passionate and <br />
                            <span className="text-primary">creative</span>
                        </h3>
                        <p className="text-black leading-relaxed mb-8 text-base md:text-lg">
                            Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.
                        </p>
                        <div>
                            <Button text="Learn More" className="!bg-primary text-white !px-12" transitionClassName="!via-white/30" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-[60%] max-sm:w-full"
                    >
                        <div className="grid grid-cols-2">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.id}
                                    className={`
                                        p-6 md:p-8 border-gray-100 flex flex-col gap-4 group hover:bg-gray-50 transition-colors
                                        ${index === 0 ? 'border-b sm:border-r' : ''}
                                        ${index === 1 ? 'border-b' : ''}
                                        ${index === 2 ? 'border-b sm:border-b-0 sm:border-r' : ''}
                                        ${index === 3 ? '' : ''}
                                    `}
                                >
                                    {stat.label && <span className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider">{stat.label}</span>}
                                    <div className="flex items-end gap-3">
                                        <h4 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                                            <Counter value={stat.number} />
                                        </h4>
                                        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border border-red-200 flex items-center justify-center mt-2 ${index === 0 ? 'bg-primary' : ''}`}>
                                            <img src={index === 0 ? stat.icon.src : arrowUpRedImg.src} className="w-2.5 md:w-3" alt="arrow-up" />
                                        </div>
                                    </div>
                                    <p className="text-black text-sm md:text-base leading-[1.4] max-w-[240px]">
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

