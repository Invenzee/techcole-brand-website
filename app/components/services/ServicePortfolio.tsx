import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";



interface PortfolioItem {
    id: number;
    image: string;
}

export default function ServicePortfolio({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
    const pathRef = useRef<SVGPathElement>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [index, setIndex] = useState(-1);
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

                <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                className="w-full h-full object-cover object-top transition-[object-position] duration-[4s] ease-in-out group-hover:object-bottom"
                            />

                            <AnimatePresence>
                                {hoveredId === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
                                        onClick={() => setIndex(portfolioItems.indexOf(item))}
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

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={portfolioItems.map(item => ({ src: item.image }))}
                    plugins={[Zoom]}
                    animation={{ fade: 100 }}
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
                    zoom={{
                        maxZoomPixelRatio: 3,
                        scrollToZoom: true
                    }}
                />

            </div>
        </section>
    )
}