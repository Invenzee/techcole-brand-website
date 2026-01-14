"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setShowLoader(false);
                        setTimeout(() => setIsLoading(false), 300);
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 20;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
                >
                    <div className="relative">
                        <MicrochipAnimation />
                    </div>

                    <motion.img
                        key="logo"
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.3,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-8 md:w-12 lg:w-16"
                        src="/blog/favicon-big.png"
                        alt="TechCole Logo"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}


function MicrochipAnimation() {
    return (
        <div className="relative">
            {/* Microchip SVG Animation */}
            <svg
                className="microchip w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72"
                viewBox="0 0 128 128"
                role="img"
                aria-label="A square pops in emitting waves and lines, and sparks run through the lines"
            >
                <defs>
                    {/* Dots */}
                    <circle id="dot-1" r="3" cx="3" cy="38" />
                    <circle id="dot-2" r="3" cx="3" cy="54" />
                    <circle id="dot-3" r="3" cx="3" cy="70" />
                    <circle id="dot-4" r="3" cx="3" cy="3" />
                    <circle id="dot-5" r="3" cx="20" cy="3" />
                    <circle id="dot-6" r="3" cx="3" cy="30" />
                    <circle id="dot-7" r="3" cx="37" cy="3" />
                    <circle id="dot-8" r="3" cx="54" cy="3" />
                    <circle id="dot-9" r="3" cx="71" cy="3" />

                    {/* Lines */}
                    <polyline
                        id="line-1"
                        points="12 54,12 46,3 46,3 38"
                        strokeDasharray="42 42"
                    />
                    <polyline id="line-2" points="29 54,3 54" strokeDasharray="42 42" />
                    <polyline
                        id="line-3"
                        points="12 54,12 62,3 62,3 70"
                        strokeDasharray="42 42"
                    />
                    <polyline
                        id="line-4"
                        points="28 20,28 12,20 12,20 3"
                        strokeDasharray="60 60"
                    />
                    <polyline
                        id="line-5"
                        points="37 29,37 20,3 20,3 3"
                        strokeDasharray="60 60"
                    />
                    <polyline
                        id="line-6"
                        points="15 20,15 30,3 30"
                        strokeDasharray="60 60"
                    />
                    <polyline
                        id="line-7"
                        points="54 12,37 12,37 3"
                        strokeDasharray="43 43"
                    />
                    <polyline id="line-8" points="54 29,54 3" strokeDasharray="43 43" />
                    <polyline
                        id="line-9"
                        points="54 12,71 12,71 3"
                        strokeDasharray="43 43"
                    />

                    {/* Sparks */}
                    <polyline
                        id="spark-1"
                        points="12 54,12 46,3 46,3 38"
                        strokeDasharray="15 69"
                    />
                    <polyline
                        id="spark-2"
                        points="29 54,3 54"
                        strokeDasharray="15 69"
                    />
                    <polyline
                        id="spark-3"
                        points="12 54,12 62,3 62,3 70"
                        strokeDasharray="15 69"
                    />
                    <polyline
                        id="spark-4"
                        points="28 20,28 12,20 12,20 3"
                        strokeDasharray="15 105"
                    />
                    <polyline
                        id="spark-5"
                        points="37 29,37 20,3 20,3 3"
                        strokeDasharray="15 105"
                    />
                    <polyline
                        id="spark-6"
                        points="15 20,15 30,3 30"
                        strokeDasharray="15 105"
                    />
                    <polyline
                        id="spark-7"
                        points="54 12,37 12,37 3"
                        strokeDasharray="15 71"
                    />
                    <polyline
                        id="spark-8"
                        points="54 29,54 3"
                        strokeDasharray="15 71"
                    />
                    <polyline
                        id="spark-9"
                        points="54 12,71 12,71 3"
                        strokeDasharray="15 71"
                    />

                    {/* Wave */}
                    <rect id="wave" x="3" y="3" rx="2.5" ry="2.5" width="44" height="44" />
                </defs>

                <g transform="translate(10,10)">
                    {/* Lines and Sparks Groups */}
                    <g
                        className="microchip__lines"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Group 1 */}
                        <g>
                            <g fill="none" stroke="#D12027" strokeWidth="2">
                                <use className="microchip__line microchip__line--1" href="#line-1" />
                                <use className="microchip__spark microchip__spark--1" href="#spark-1" />
                                <use className="microchip__line microchip__line--2" href="#line-2" />
                                <use className="microchip__spark microchip__spark--2" href="#spark-2" />
                                <use className="microchip__line microchip__line--3" href="#line-3" />
                                <use className="microchip__spark microchip__spark--3" href="#spark-3" />
                            </g>
                            <g fill="#D12027">
                                <use className="microchip__dot microchip__dot--1" href="#dot-1" />
                                <use className="microchip__dot microchip__dot--2" href="#dot-2" />
                                <use className="microchip__dot microchip__dot--3" href="#dot-3" />
                            </g>
                        </g>

                        {/* Group 2 */}
                        <g>
                            <g fill="none" stroke="#D12027" strokeWidth="2">
                                <use className="microchip__line microchip__line--4" href="#line-4" />
                                <use className="microchip__spark microchip__spark--4" href="#spark-4" />
                                <use className="microchip__line microchip__line--5" href="#line-5" />
                                <use className="microchip__spark microchip__spark--5" href="#spark-5" />
                                <use className="microchip__line microchip__line--6" href="#line-6" />
                                <use className="microchip__spark microchip__spark--6" href="#spark-6" />
                            </g>
                            <g fill="#D12027">
                                <use className="microchip__dot microchip__dot--4" href="#dot-4" />
                                <use className="microchip__dot microchip__dot--5" href="#dot-5" />
                                <use className="microchip__dot microchip__dot--6" href="#dot-6" />
                            </g>
                        </g>

                        {/* Group 3 */}
                        <g>
                            <g fill="none" stroke="#D12027" strokeWidth="2">
                                <use className="microchip__line microchip__line--7" href="#line-7" />
                                <use className="microchip__spark microchip__spark--7" href="#spark-7" />
                                <use className="microchip__line microchip__line--8" href="#line-8" />
                                <use className="microchip__spark microchip__spark--8" href="#spark-8" />
                                <use className="microchip__line microchip__line--9" href="#line-9" />
                                <use className="microchip__spark microchip__spark--9" href="#spark-9" />
                            </g>
                            <g fill="#D12027">
                                <use className="microchip__dot microchip__dot--7" href="#dot-7" />
                                <use className="microchip__dot microchip__dot--8" href="#dot-8" />
                                <use className="microchip__dot microchip__dot--9" href="#dot-9" />
                            </g>
                        </g>

                        {/* Mirror Groups */}
                        <g transform="translate(108,0) scale(-1,1)">
                            <g fill="none" stroke="#D12027" strokeWidth="2">
                                <use className="microchip__line microchip__line--4" href="#line-4" />
                                <use className="microchip__spark microchip__spark--4" href="#spark-4" />
                                <use className="microchip__line microchip__line--5" href="#line-5" />
                                <use className="microchip__spark microchip__spark--5" href="#spark-5" />
                                <use className="microchip__line microchip__line--6" href="#line-6" />
                                <use className="microchip__spark microchip__spark--6" href="#spark-6" />
                            </g>
                            <g fill="#D12027">
                                <use className="microchip__dot microchip__dot--4" href="#dot-4" />
                                <use className="microchip__dot microchip__dot--5" href="#dot-5" />
                                <use className="microchip__dot microchip__dot--6" href="#dot-6" />
                            </g>
                        </g>

                        <g transform="translate(108,0) scale(-1,1)">
                            <g fill="none" stroke="#D12027" strokeWidth="2">
                                <use className="microchip__line microchip__line--1" href="#line-1" />
                                <use className="microchip__spark microchip__spark--1" href="#spark-1" />
                                <use className="microchip__line microchip__line--2" href="#line-2" />
                                <use className="microchip__spark microchip__spark--2" href="#spark-2" />
                                <use className="microchip__line microchip__line--3" href="#line-3" />
                                <use className="microchip__spark microchip__spark--3" href="#spark-3" />
                            </g>
                            <g fill="#D12027">
                                <use className="microchip__dot microchip__dot--1" href="#dot-1" />
                                <use className="microchip__dot microchip__dot--2" href="#dot-2" />
                                <use className="microchip__dot microchip__dot--3" href="#dot-3" />
                            </g>
                        </g>

                        <g transform="translate(108,108) scale(-1,-1)">
                            <g fill="none" stroke="#D12027" strokeWidth="2">
                                <use className="microchip__line microchip__line--4" href="#line-4" />
                                <use className="microchip__spark microchip__spark--4" href="#spark-4" />
                                <use className="microchip__line microchip__line--5" href="#line-5" />
                                <use className="microchip__spark microchip__spark--5" href="#spark-5" />
                                <use className="microchip__line microchip__line--6" href="#line-6" />
                                <use className="microchip__spark microchip__spark--6" href="#spark-6" />
                            </g>
                            <g fill="#D12027">
                                <use className="microchip__dot microchip__dot--4" href="#dot-4" />
                                <use className="microchip__dot microchip__dot--5" href="#dot-5" />
                                <use className="microchip__dot microchip__dot--6" href="#dot-6" />
                            </g>
                        </g>

                        <g transform="translate(0,108) scale(1,-1)">
                            <g fill="none" stroke="#D12027" strokeWidth="2">
                                <use className="microchip__line microchip__line--7" href="#line-7" />
                                <use className="microchip__spark microchip__spark--7" href="#spark-7" />
                                <use className="microchip__line microchip__line--8" href="#line-8" />
                                <use className="microchip__spark microchip__spark--8" href="#spark-8" />
                                <use className="microchip__line microchip__line--9" href="#line-9" />
                                <use className="microchip__spark microchip__spark--9" href="#spark-9" />
                            </g>
                            <g fill="#D12027">
                                <use className="microchip__dot microchip__dot--7" href="#dot-7" />
                                <use className="microchip__dot microchip__dot--8" href="#dot-8" />
                                <use className="microchip__dot microchip__dot--9" href="#dot-9" />
                            </g>
                        </g>

                        <g transform="translate(0,108) scale(1,-1)">
                            <g fill="none" stroke="#D12027" strokeWidth="2">
                                <use className="microchip__line microchip__line--4" href="#line-4" />
                                <use className="microchip__spark microchip__spark--4" href="#spark-4" />
                                <use className="microchip__line microchip__line--5" href="#line-5" />
                                <use className="microchip__spark microchip__spark--5" href="#spark-5" />
                                <use className="microchip__line microchip__line--6" href="#line-6" />
                                <use className="microchip__spark microchip__spark--6" href="#spark-6" />
                            </g>
                            <g fill="#D12027">
                                <use className="microchip__dot microchip__dot--4" href="#dot-4" />
                                <use className="microchip__dot microchip__dot--5" href="#dot-5" />
                                <use className="microchip__dot microchip__dot--6" href="#dot-6" />
                            </g>
                        </g>
                    </g>

                    {/* Center Core and Waves */}
                    <g transform="translate(29,29)">
                        <g className="microchip__center">
                            <g fill="none" stroke="#D12027" strokeWidth="6">
                                <use className="microchip__wave microchip__wave--1" href="#wave" />
                                <use className="microchip__wave microchip__wave--2" href="#wave" />
                            </g>
                            <rect
                                className="microchip__core"
                                fill="#D12027"
                                rx="5"
                                ry="5"
                                width="50"
                                height="50"
                            />
                        </g>
                    </g>
                </g>
            </svg>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
        </div>
    );
}