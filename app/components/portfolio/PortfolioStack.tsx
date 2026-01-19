"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X } from "lucide-react";
import ProjectCursor, { triggerProjectCursor } from "./ProjectCursor";
import { portfolioData, categories, Project } from "./portfolioData";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../global/Button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    const filteredProjects = portfolioData.filter(p => p.category === selectedCategory);

    useEffect(() => {
        ScrollTrigger.getAll().forEach(t => t.kill());

        const cards = gsap.utils.toArray(".project-card-wrapper");

        cards.forEach((card: any, index: number) => {
            const isLast = index === cards.length - 1;

            if (!isLast) {
                gsap.to(card, {
                    scale: 0.5,
                    y: 150,
                    scrollTrigger: {
                        trigger: cards[index + 1] as HTMLElement,
                        start: "20% bottom",
                        end: "top 25%",
                        scrub: 1.2,
                        invalidateOnRefresh: true,
                    }
                });
            }
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [selectedCategory]);

    const handleProjectClick = (project: Project) => {
        if (project.category === "Website Development" || project.category === "App Development") {
            if (project.externalLink) {
                window.open(project.externalLink, "_blank");
            }
        } else {
            setSelectedProject(project);
        }
    };

    const pathRef = useRef<SVGPathElement>(null);

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
        <section ref={containerRef} className="bg-[#050505] pt-50 pb-40 min-h-screen">
            <ProjectCursor />

            <div className="max-w-[1240px] mx-auto px-6 mb-12">
                <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]">
                    <Image
                        src="/about/hero-bg.png"
                        alt="Hero Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                <div className="relative z-10 mx-auto w-full">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-16 max-sm:gap-4">

                        <div className="relative p-10 md:p-14 max-w-2xl">
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                viewBox="0 0 600 300"
                                preserveAspectRatio="none"
                            >
                                <path
                                    ref={pathRef}
                                    d="M 590,10 H 50 C 30,10 10,30 10,50 V 250 C 10,270 30,290 50,290 H 400"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    strokeOpacity="0.5"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <div className="relative z-10">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight"
                                >
                                    Our <span className="text-primary">Portfolio</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-sm md:text-base leading-[.9] font-medium text-white/80 leading-relaxed uppercase tracking-widest max-w-md"
                                >
                                    Our extensive portfolio showcases our commitment to delivering innovative and high-quality solutions for our clients.
                                </motion.p>
                            </div>
                        </div>

                        <div className="flex flex-wrap lg:justify-start gap-3 max-w-sm mt-4">
                            {categories.map((cat, index) => (
                                <motion.button
                                    key={cat}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-2.5 rounded-full border text-md font-medium transition-all duration-300 cursor-pointer ${selectedCategory === cat
                                        ? "bg-primary/10 border-primary text-white"
                                        : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                                        }`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-10">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-card-wrapper sticky top-[10vh] w-full max-w-[1240px] h-[75vh] md:h-[85vh] px-4 mb-[12vh] origin-top cursor-none"
                        style={{ zIndex: index + 1 }}
                        onMouseEnter={() => triggerProjectCursor(true)}
                        onMouseLeave={() => triggerProjectCursor(false)}
                        onClick={() => handleProjectClick(project)}
                    >
                        <div className="project-card relative w-full h-full rounded-3xl overflow-hidden bg-[#111] border border-white/5 group shadow-2xl transition-transform duration-500 active:scale-95">
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            </div>

                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                                <div className="flex justify-between items-end">
                                    <div className="max-w-2xl transform transition-transform duration-500 group-hover:translate-x-4">
                                        <h3 className="text-white text-4xl md:text-6xl font-regular mb-2 tracking-tighter uppercase">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/80 text-lg md:text-xl font-regular">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="h-[40vh] flex items-center justify-center">
                    <p className="text-white/40 text-xl uppercase tracking-widest">More projects coming soon</p>
                </div>
            )}

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 lg:p-12 pointer-events-auto"
                    >
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-md "
                            onClick={() => setSelectedProject(null)}
                        />

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-6xl h-full bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
                            data-lenis-prevent
                        >
                            <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent overflow-hidden">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                        <img src="/blog/favicon-big.png" className="w-5" alt="" />
                                    </span>
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Project Detail</span>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all group cursor-pointer"
                                >
                                    <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar p-6 pt-28 pb-20">
                                <section className="space-y-16">
                                    <div className="space-y-8">
                                        <div className="overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                                            <motion.img
                                                initial={{ scale: 1.1 }}
                                                animate={{ scale: 1 }}
                                                src={selectedProject.image}
                                                alt={selectedProject.title}
                                                className="w-full aspect-video object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                                            <div className="flex-1">
                                                <motion.h2
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="text-white text-5xl md:text-7xl lg:text-8xl font-medium uppercase tracking-tighter leading-[0.9] mb-0"
                                                >
                                                    {selectedProject.title}
                                                </motion.h2>
                                                <motion.p
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="text-white text-lg md:text-xl font-light max-w-2xl px-1"
                                                >
                                                    {selectedProject.subtitle}
                                                </motion.p>
                                            </div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="flex gap-4"
                                            >
                                                <div className="px-6 py-3 rounded-full border border-white/10 bg-primary text-white text-xs font-regular uppercase tracking-widest whitespace-nowrap">
                                                    {selectedProject.category}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                                        <div className="md:col-span-7 space-y-8">
                                            <div className="space-y-4">
                                                <h4 className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Overview</h4>
                                                <p className="text-white text-lg md:text-xl font-light">
                                                    {selectedProject.details || "Developing a unique voice for this project through strategic design and implementation. We focused on delivering high-impact results that align with the core business objectives."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="md:col-span-5 space-y-12">
                                            <div className="space-y-6">
                                                <h4 className="text-primary text-xs font-semibold uppercase tracking-[0.3em] border-b border-white/10 pb-4">Services provided</h4>
                                                <ul className="grid grid-cols-1 gap-4">
                                                    {["Visual Strategy", "Identity Design", "Market Analysis", "Digital Implementation"].map((item) => (
                                                        <li key={item} className="flex items-center gap-3 text-white text-sm font-light tracking-wider">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <Button link="#" text="Discuss Project" className="!px-12 !py-3" />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
