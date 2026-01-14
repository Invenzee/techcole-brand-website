"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import ProjectCursor, { triggerProjectCursor } from "./ProjectCursor";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Klyachkin",
        subtitle: "The best wedding host in the country",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/9bda1d9c9bd3be88c5c205c8d66f94f2_1920.mp4"
    },
    {
        id: 2,
        title: "WELLDRINK",
        subtitle: "Natural drinks",
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/45199e43a9cac5919be0ad631f087789_1920.mp4"
    },
    {
        id: 3,
        title: "Kirill nagiev",
        subtitle: "Actor and host",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/4d8879b35b0909738697035f212b0e39_1920.mp4"
    },
    {
        id: 4,
        title: "VANTA",
        subtitle: "Financial Marketplace",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/77722c6279f391bb0064f73174e5f184_1920.mp4"
    },
    {
        id: 5,
        title: "Study space",
        subtitle: "Educational platform",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/9bda1d9c9bd3be88c5c205c8d66f94f2_1920.mp4"
    }
];

export default function PortfolioStack() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = gsap.utils.toArray(".project-card-wrapper");

        cards.forEach((card: any, index: number) => {
            const isLast = index === cards.length - 1;

            if (!isLast) {
                gsap.to(card, {
                    scale: 0.5,
                    y: 150,
                    scrollTrigger: {
                        trigger: cards[index + 1] as HTMLElement,
                        start: "25% bottom",
                        end: "top 25%",
                        scrub: 1.2,
                        invalidateOnRefresh: true,
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="bg-[#050505] py-40 min-h-screen">
            <ProjectCursor />
            <div className="max-w-[1240px] mx-auto px-6 mb-12 flex items-center justify-between">
                <div>
                    <p className="text-[#888] text-sm font-medium uppercase tracking-[0.2em] mb-2">Recent work</p>
                </div>
                <a href="#" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full transition-all">
                    <span className="text-white font-medium">See all / 16</span>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                        <ArrowUpRight className="text-white w-4 h-4" />
                    </div>
                </a>
            </div>

            <div className="flex flex-col items-center gap-10">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-card-wrapper sticky top-[10vh] w-full max-w-[1240px] h-[75vh] md:h-[85vh] px-4 mb-[12vh] origin-top cursor-none"
                        style={{ zIndex: index + 1 }}
                        onMouseEnter={() => triggerProjectCursor(true)}
                        onMouseLeave={() => triggerProjectCursor(false)}
                    >
                        <div className="project-card relative w-full h-full rounded-3xl overflow-hidden bg-[#111] border border-white/5 group shadow-2xl">
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            </div>

                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                                <div className="max-w-2xl">
                                    <h3 className="text-white text-5xl md:text-7xl font-regular mb-2 tracking-tighter uppercase">
                                        {project.title}
                                    </h3>
                                    <p className="text-white text-lg md:text-xl font-regular">
                                        {project.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-[30vh] flex flex-col items-center justify-center text-center px-6">
                <h4 className="text-white/20 text-8xl md:text-[180px] font-black uppercase tracking-tighter leading-none select-none">
                    Techcole
                </h4>
            </div>
        </section>
    );
}
