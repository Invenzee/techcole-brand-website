"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    Mail,
    Settings,
    DollarSign,
    Star,
    Home,
    ChevronRight
} from "lucide-react";

import HomeSvg from "@/public/services/home.svg"
import StarSvg from "@/public/services/star.svg"
import GrowthSvg from "@/public/services/growth.svg"
import EmailSvg from "@/public/services/email.svg"
import SettingSvg from "@/public/services/setting.svg"
import DollarSvg from "@/public/services/dollar.svg"

// --- Types ---

interface Step {
    id: number;
    title: string;
    description: string;
}

// --- Data ---
const steps: Step[] = [
    { id: 1, title: "Requirement Analysis & Planning", description: "We provide everything you need in one convenient place." },
    { id: 2, title: "UI/UX Design & Wireframing", description: "We provide everything you need in one convenient place." },
    { id: 3, title: "Web Development", description: "We provide everything you need in one convenient place." },
    { id: 4, title: "Testing & Quality Assurance", description: "We provide everything you need in one convenient place." },
    { id: 5, title: "Deployment & Launch", description: "We provide everything you need in one convenient place." },
    { id: 6, title: "Maintenance & Optimization", description: "We provide everything you need in one convenient place." },
];

export default function WebDevProcess() {
    // --- Geometric Configuration ---
    const width = 950;
    const height = 800;
    const cx = 500;
    const cy = 400; // Center Y

    // Spiral parameters (Archimedean: r = a + b * theta)
    // We want it strictly circular, so we simply map polar coordinates.
    // Start from Center (r=0) to Max Radius.
    const numTurns = -1.7;
    const maxRadius = 300;
    const pointsCount = 200;

    // Generate Path Points
    const { pathData, points, arrowPoints, iconsOnPath } = useMemo(() => {
        let d = "";
        const pts = [] as any;
        const iconPlacements = [];

        // We want the spiral to start at Center and go OUT.
        // Let's generate a smooth spiral path first.
        for (let i = 0; i <= pointsCount; i++) {
            const progress = i / pointsCount;
            const theta = progress * numTurns * 2.8 * Math.PI; // 0 to 3.4*PI
            const r = (theta / (numTurns * 2.8 * Math.PI)) * maxRadius;

            // Rotation offset to align spiral strictly like the image
            const offsetAngle = Math.PI; // Rotate spiral
            const finalAngle = theta + offsetAngle;

            const x = cx + r * Math.cos(finalAngle);
            const y = cy + r * Math.sin(finalAngle);

            pts.push({ x, y, angle: finalAngle });
            if (i === 0) d += `M ${x} ${y}`;
            else d += ` L ${x} ${y}`;
        }


        const iconConfig = [
            { id: 0, index: 0, xOffset: 60, yOffset: -10, icon: HomeSvg, arrowBack: 0, arrowFront: 0 },
            { id: 1, index: 35, xOffset: 205, yOffset: -60, icon: StarSvg, arrowBack: -6, arrowFront: 4 },
            { id: 2, index: 80, xOffset: 130, yOffset: -210, icon: GrowthSvg, arrowBack: 0, arrowFront: 9 },
            { id: 3, index: 125, xOffset: -375, yOffset: -50, icon: EmailSvg, arrowBack: 0, arrowFront: 7 },
            { id: 4, index: 165, xOffset: 200, yOffset: 280, icon: SettingSvg, arrowBack: -5, arrowFront: 1 },
            { id: 5, index: 198, xOffset: 110, yOffset: -80, icon: DollarSvg, arrowBack: 0, arrowFront: 0 },
        ];

        const finalIcons = iconConfig.map((config) => {
            // Get base position from path
            const p = pts[Math.min(config.index, pts.length - 1)];

            // Apply manual offsets
            return {
                x: p.x + config.xOffset,
                y: p.y + config.yOffset,
                angle: p.angle,
                icon: config.icon,
                id: config.id,
                arrowBack: config.arrowBack,
                arrowFront: config.arrowFront
            };
        });

        // Arrows: Place arrows surrounding the VISUAL position of each icon
        const arrows = [] as any;

        finalIcons.forEach((icon) => {
            if (icon.id === 0) return; // Skip Home

            let closestDist = Infinity;
            let closestIdx = 0;

            pts.forEach((pt: any, i: number) => {
                const dx = pt.x - icon.x;
                const dy = pt.y - icon.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestIdx = i;
                }
            });

            // Use individual offsets for this icon
            const targetIndices = [closestIdx + icon.arrowBack, closestIdx + icon.arrowFront];

            targetIndices.forEach(idx => {
                if (idx >= 0 && idx < pts.length - 1) {
                    const p1 = pts[idx];
                    const p2 = pts[idx + 1];

                    if (p1 && p2) {
                        const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
                        arrows.push({ x: p1.x, y: p1.y, rotation: angle });
                    }
                }
            });
        });

        return { pathData: d, points: pts, arrowPoints: arrows, iconsOnPath: finalIcons };
    }, []);

    return (
        <section className="w-full bg-white py-24 overflow-hidden relative">
            <div className="max-w-[1140px] mx-auto relative">
                <div className="text-center">
                    <h2 className="text-4xl md:text-[64px] font-medium text-black leading-[60px]">
                        Our Web <span className="text-[#E61F26]">Development</span>
                        <br />Process
                    </h2>
                </div>

                <div className="relative w-full text-center mx-auto -mt-20" style={{ height }}>
                    <div className="absolute left-[0%] top-[20%] text-right hidden lg:block">
                        <LabelCard step={steps[0]} align="right" />
                    </div>
                    <div className="absolute left-[-2%] top-[45%] text-right hidden lg:block">
                        <LabelCard step={steps[1]} align="right" />
                    </div>
                    <div className="absolute left-[0%] top-[70%] text-right hidden lg:block">
                        <LabelCard step={steps[2]} align="right" />
                    </div>

                    <div className="absolute right-[0%] top-[20%] text-left hidden lg:block">
                        <LabelCard step={steps[3]} align="left" />
                    </div>
                    <div className="absolute right-[-2%] top-[45%] text-left hidden lg:block">
                        <LabelCard step={steps[4]} align="left" />
                    </div>
                    <div className="absolute right-[0%] top-[70%] text-left hidden lg:block">
                        <LabelCard step={steps[5]} align="left" />
                    </div>

                    {/* Center SVG */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
                            <defs>
                                <mask id="spiral-mask">
                                    <motion.path
                                        d={pathData}
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="5"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 4, ease: "linear" }}
                                    />
                                </mask>
                            </defs>

                            {/* Dashed Path with Mask Reveal */}
                            <path
                                d={pathData}
                                fill="none"
                                stroke="#000000c4"
                                strokeWidth="2"
                                strokeDasharray="10 10"
                                mask="url(#spiral-mask)"
                            />

                            {/* Arrows */}
                            {arrowPoints.map((arrow: any, i: number) => (
                                <motion.g
                                    key={`arrow-${i}`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }} // Faster stagger
                                >
                                    <polygon
                                        points="0,0 -8,-5 -8,5"
                                        fill="#E61F26"
                                        transform={`translate(${arrow.x}, ${arrow.y}) rotate(${arrow.rotation}) scale(2)`}
                                    />
                                </motion.g>
                            ))}
                        </svg>

                        {/* Icons */}
                        {iconsOnPath.map((item, i) => (
                            <motion.div
                                key={`icon-${i}`}
                                className="absolute flex items-center justify-center bg-[#E61F26] text-white rounded-full !z-20"
                                style={{
                                    left: item.x,
                                    top: item.y,
                                    width: 60,
                                    height: 60,
                                    transform: 'translate(-50%, -50%)'
                                }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.6, type: "spring", stiffness: 200 }}
                            >
                                <img src={item.icon.src} className="w-8 h-8" alt="" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Labels (Stacked) */}
                    <div className="lg:hidden relative z-30 pt-[800px] px-4 pb-10 space-y-8">
                        {steps.map(step => (
                            <div key={step.id} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-[#E61F26] font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function LabelCard({ step, align }: { step: Step, align: 'left' | 'right' }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: step.id * 1 }}
            className={`flex flex-col ${align === 'right' ? 'items-end' : 'items-start'}`}
        >
            <div className={`bg-[#E61F26] text-white py-3 px-4 rounded-[30px] font-medium text-md shadow-lg mb-3 max-w-[320px] w-full text-center rounded-full`}>
                {step.title}
            </div>
            <p className="text-gray-500 max-w-[280px] font-medium leading-relaxed text-left px-6">
                {step.description}
            </p>
        </motion.div>
    );
}
