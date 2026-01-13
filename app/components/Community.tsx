"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./global/Button";

const orbitItems = [
    {
        id: 1,
        orbitIndex: 2,
        angle: 180,
        type: "card",
        direction: 1,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        name: "Louis Patridge",
        text: "That was amazing!"
    },
    {
        id: 2,
        orbitIndex: 2,
        angle: 360,
        type: "card",
        direction: -1,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
        name: "Carlos Sainz",
        text: "Highly Recommended!"
    },
    {
        id: 3,
        orbitIndex: 1,
        angle: 220,
        type: "avatar",
        direction: -1,
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 4,
        orbitIndex: 1,
        angle: 320,
        type: "avatar",
        direction: -1,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 5,
        orbitIndex: 0,
        angle: 245,
        type: "card",
        direction: 1,
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=150&auto=format&fit=crop",
        name: "Gracie Abrams",
        text: "The results are outstanding!"
    },
    {
        id: 6,
        orbitIndex: 0,
        angle: 295,
        type: "avatar",
        direction: 1,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
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
                <button
                    className="px-6 md:px-8 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90 whitespace-nowrap rounded-full cursor-pointer text-sm"
                    style={{
                        background: 'conic-gradient(from 250deg at 50% 50%, #140F2A 0%, rgba(209, 32, 38, .50) 50%, rgba(209, 32, 38, 1) 100%)'
                    }}
                >
                    Join Us
                </button>
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
            className="absolute border-[1.5px] border-primary rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(209,32,39,0.05)]"
            style={{ width: radius * 2, height: radius * 2 }}
        >
            <motion.div
                className="w-full h-full absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {items.map((item, idx) => (
                    <OrbitItem
                        key={item.id}
                        item={item}
                        radius={radius}
                        duration={duration}
                        defaultDirection={direction}
                        isMobile={isMobile}
                        idx={idx}
                    />
                ))}
            </motion.div>
        </div>
    );
}

function OrbitItem({ item, radius, duration, defaultDirection, isMobile, idx }: { item: any, radius: number, duration: number, defaultDirection: number, isMobile: boolean, idx: number }) {
    const isLeft = item.angle < 270;
    const startAngle = isLeft ? 180 : 360;
    const itemDirection = item.direction || defaultDirection;

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 flex items-center justify-center"
            initial={{
                rotate: startAngle,
                opacity: 0,
                scale: 0
            }}
            animate={{
                rotate: item.angle,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
                delay: idx * 0.2 + 0.5,
                ease: "circOut"
            }}
            style={{
                width: 0,
                height: 0,
            }}
        >
            <motion.div
                animate={{ rotate: itemDirection * 360 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{ width: 0, height: 0 }}
            >
                <div
                    style={{
                        transform: `translate(${radius}px) rotate(-${item.angle}deg)`
                    }}
                >
                    <motion.div
                        animate={{ rotate: itemDirection * -360 }}
                        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                        className="flex items-center justify-center relative"
                    >
                        {item.type === "avatar" && (
                            <div className="absolute w-3 h-3 bg-[#D1D1D1] rounded-full border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)] z-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                        )}
                        <div className={`flex items-center gap-3 bg-primary px-3 py-2 rounded-full shadow-[0_4px_20px_rgba(209,32,39,0.4)] whitespace-nowrap min-w-max border border-white/10 ${item.type === "avatar" || isMobile ? "!p-0 !rounded-full !border-2 !border-white !bg-gray-800 !pointer-events-auto -mt-16" : ""}`}>
                            <img src={item.image} className="w-10 h-10 rounded-full object-cover" alt="avatar" />
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
            </motion.div>
        </motion.div>
    )
}

