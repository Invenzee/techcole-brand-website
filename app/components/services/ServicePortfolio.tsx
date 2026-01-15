import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface PortfolioItem {
    id: number;
    image: string;
}

const portfolioItems: PortfolioItem[] = [
    { id: 1, image: '/services/p-1.png' },
    { id: 2, image: '/services/p-2.png' },
    { id: 3, image: '/services/p-3.png' },
    { id: 4, image: '/services/p-4.png' },
    { id: 5, image: '/services/p-5.png' },
    { id: 6, image: '/services/p-6.png' },
    { id: 7, image: '/services/p-4.png' },
    { id: 8, image: '/services/p-5.png' },
    { id: 9, image: '/services/p-7.png' },
];

export default function ServicePortfolio() {
    const pathRef = useRef<SVGPathElement>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && gsap) {
            const items = sectionRef.current?.querySelectorAll('.portfolio-item');

            if (items) {
                gsap.fromTo(
                    items,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        }
    }, []);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });
            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                delay: 0.5,
            });
        }
    }, []);

    return (
        <section className="w-full min-h-screen h-full bg-[url('/services/portfolio-section-bg.png')]">
            <div className="w-full max-w-[1240px] mx-auto py-12 max-sm:p-4 max-sm:py-8">

                <div className="relative w-full flex flex-col items-center justify-center mb-12">
                    <h2 className="text-5xl md:text-6xl text-white font-medium leading-[1.1] tracking-tight">
                        Portfolio
                    </h2>
                    <div className="mt-2">
                        <svg width="220" height="12" viewBox="0 0 220 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                ref={pathRef}
                                d="M2 10C40 3 140 3 218 10"
                                stroke="black"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="portfolio-item relative aspect-[1/1] rounded-2xl overflow-hidden cursor-pointer group"
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={item.image}
                                alt={`Portfolio item ${item.id}`}
                                className="w-full h-full object-cover"
                            />

                            <AnimatePresence>
                                {hoveredId === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
                                        onClick={() => setSelectedImage(item)}
                                    >
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            exit={{ scale: 0, rotate: 180 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                            className="bg-white/20 p-6 rounded-full"
                                        >
                                            <Search className="w-6 h-6 text-white" strokeWidth={2.5} />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-colors z-10"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-8 h-8 text-white" strokeWidth={2.5} />
                            </motion.button>

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="max-w-[80vw] w-full max-h-[100vh] relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.image}
                                    alt={`Portfolio item ${selectedImage.id}`}
                                    className="w-full h-[90vh] object-cover rounded-2xl shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    )
}