"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./global/Button";

const orbitItems = [
    {
        id: 1,
        orbitIndex: 0,
        angle: 190,
        type: "card",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        name: "Louis Patridge",
        text: "That was amazing! Great job!"
    },
    {
        id: 2,
        orbitIndex: 0,
        angle: 350,
        type: "card",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        name: "Byeon Wo Seok",
        text: "Nice work, love it! 🔥"
    },
    {
        id: 3,
        orbitIndex: 0,
        angle: 80,
        type: "avatar",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    },

    {
        id: 4,
        orbitIndex: 1,
        angle: 150,
        type: "card",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        name: "Carlos Sainz",
        text: "Highly Recommended!"
    },
    {
        id: 5,
        orbitIndex: 1,
        angle: 20,
        type: "avatar",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop"
    },

    {
        id: 6,
        orbitIndex: 2,
        angle: 280,
        type: "avatar",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 7,
        orbitIndex: 2,
        angle: 50,
        type: "card",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        name: "Gracie Abrams",
        text: "The results are outstanding!"
    }
];

const ORBIT_DURATIONS = [30, 40, 50];

export default function Community() {
    const [scale, setScale] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            if (width < 640) {
                setScale(0.5);
            } else if (width < 768) {
                setScale(0.6);
            } else if (width < 1024) {
                setScale(0.7);
            } else {
                setScale(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const ORBIT_RADII = [400 * scale, 520 * scale, 640 * scale];
    return (
        <section className="w-full bg-black py-40 overflow-hidden relative min-h-[700px] max-sm:min-h-[400px] flex items-center justify-center">

            <div className="absolute bottom-10 z-50 flex flex-col items-center justify-center text-center px-6 max-sm:bottom-4">
                <h2 className="text-4xl md:text-7xl font-medium text-white mb-6 md:mb-8 tracking-tight">
                    Join Our <br /> Community
                </h2>
                <Button className="px-10 md:px-12 py-3" text="Join Us" />
            </div>

            <div className="absolute top-[100%] inset-0 flex items-center justify-center pointer-events-none">
                {ORBIT_RADII.map((radius, index) => (
                    <OrbitRing
                        key={index}
                        radius={radius}
                        duration={ORBIT_DURATIONS[index]}
                        items={orbitItems.filter(item => item.orbitIndex === index)}
                        direction={index % 2 === 0 ? 1 : -1}
                        isMobile={isMobile}
                    />
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 z-30" />
        </section>
    );
}

function OrbitRing({ radius, duration, items, direction, isMobile }: { radius: number, duration: number, items: any[], direction: number, isMobile: boolean }) {
    return (
        <div
            className="absolute border border-primary rounded-full flex items-center justify-center"
            style={{ width: radius * 2, height: radius * 2 }}
        >
            <motion.div
                className="w-full h-full absolute inset-0 rounded-full"
                animate={{ rotate: direction * 360 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
            >
                {items.map((item) => (
                    <OrbitItem
                        key={item.id}
                        item={item}
                        radius={radius}
                        duration={duration}
                        direction={direction}
                        isMobile={isMobile}
                    />
                ))}
            </motion.div>
        </div>
    );
}

function OrbitItem({ item, radius, duration, direction, isMobile }: { item: any, radius: number, duration: number, direction: number, isMobile: boolean }) {
    return (
        <div
            className="absolute top-1/2 left-1/2 flex items-center justify-center"
            style={{
                width: 0,
                height: 0,
                transform: `rotate(${item.angle}deg) translate(${radius}px) rotate(-${item.angle}deg)`
            }}
        >
            <motion.div
                animate={{ rotate: direction * -360 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                className="flex items-center justify-center"
            >
                <div className={`flex items-center gap-3 bg-primary px-3 py-2 rounded-full shadow-[0_4px_20px_rgba(209,32,39,0.4)] whitespace-nowrap min-w-max border border-white/10 ${item.type === "avatar" || isMobile ? "!p-0 !rounded-full !border-2 !border-white/40 !bg-gray-800 !pointer-events-auto" : ""}`}>
                    <img src={item.image} className="w-10 h-10 rounded-full object-cover border-2 border-white/20" alt="avatar" />
                    {
                        !isMobile &&
                        item.text && (
                            <div className="flex flex-col text-left">
                                <span className="text-white text-sm font-semibold leading-tight">{item.text}</span>
                                <span className="text-white/60 text-[10px] font-medium">{item.name}</span>
                            </div>
                        )
                    }
                </div>
            </motion.div>
        </div>
    )
}
