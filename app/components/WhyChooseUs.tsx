"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Card = ({ card }: { card: any }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for tilt with more "weight"
    const mouseX = useSpring(x, { stiffness: 200, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 200, damping: 10 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // 3D Transforms - Increased range for "Super 3D" feel
    const rotateX = useTransform(mouseY, [-400, 400], [25, -25]);
    const rotateY = useTransform(mouseX, [-400, 400], [-25, 25]);

    return (
        <div
            style={{ perspective: "1500px" }}
            className={`w-full relative hover:z-50 ${card.className || 'h-[240px]'}`}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{
                    transformStyle: "preserve-3d",
                }}
                className={`cursor-pointer relative bg-white border border-[#DCDCDC] p-4 flex flex-col justify-between group shadow-sm hover:shadow-2xl transition-shadow duration-300 w-full h-full`}
            >
                {/* Red Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E61F26] transform scale-x-100 transition-transform duration-300 origin-left" />

                {/* Number */}
                <div className="absolute top-6 right-6 text-gray-200 text-5xl font-regular font-outline-2 group-hover:text-[#E61F26]/10 transition-colors duration-300 z-0">
                    {card.number}
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto pointer-events-none">
                    <h3 className="text-2xl font-regular text-gray-900 leading-tight group-hover:text-[#E61F26] transition-colors duration-300">
                        {card.title}
                    </h3>
                </div>

                {/* Hover Image Overlay - Scales from Center with STRONG 3D Pop */}
                <motion.div
                    variants={{
                        rest: { scale: 0, opacity: 0, z: 0 },
                        hover: { scale: 1.2, opacity: 1, z: 100 } // Pop out 100px
                    }}
                    style={{
                        rotateX,
                        rotateY,
                        x: useTransform(mouseX, (val) => val / 5), // Slight parallax movement
                        y: useTransform(mouseY, (val) => val / 5),
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute inset-0 z-[99] flex items-center justify-center pointer-events-none"
                >
                    <div className="w-[140%] relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-contain"
                        />

                        {/* Gradient Overlay with Button */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end items-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="bg-[#E61F26] text-white px-6 py-3 rounded-full font-medium text-sm pointer-events-auto transform translate-y-4 hover:bg-white hover:text-[#E61F26] transition-all duration-300 hover:bg-red-700 shadow-lg flex items-center gap-2 cursor-pointer">
                                Get Started
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default function WhyChooseUs({ title, cards }: { title: string, cards: any[] }) {
    // Group cards by column
    // We assume 4 columns for large screens based on design
    const columns = {
        1: cards.filter(c => c.column === 1),
        2: cards.filter(c => c.column === 2),
        3: cards.filter(c => c.column === 3),
        4: cards.filter(c => c.column === 4),
    };

    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-[64px] font-medium text-black leading-[60px]">
                        Why Choose Us for <br />
                        <span className="text-[#E61F26]">{title}</span>
                    </h2>
                </div>

                {/* Masonry Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8">
                        {columns[1].map(card => <Card key={card.id} card={card} />)}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-8">
                        {columns[2].map(card => <Card key={card.id} card={card} />)}
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-8">
                        {columns[3].map(card => <Card key={card.id} card={card} />)}
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-8">
                        {columns[4].map(card => <Card key={card.id} card={card} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
