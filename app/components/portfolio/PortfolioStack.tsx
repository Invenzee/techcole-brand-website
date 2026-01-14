"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Klyachkin",
        subtitle: "The best wedding host in the country",
        tags: ["UI/UX", "Tilda"],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/9bda1d9c9bd3be88c5c205c8d66f94f2_1920.mp4"
    },
    {
        id: 2,
        title: "WELLDRINK",
        subtitle: "Natural drinks",
        tags: ["Web Design"],
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/45199e43a9cac5919be0ad631f087789_1920.mp4"
    },
    {
        id: 3,
        title: "Kirill nagiev",
        subtitle: "Actor and host",
        tags: ["UI/UX", "Tilda"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/4d8879b35b0909738697035f212b0e39_1920.mp4"
    },
    {
        id: 4,
        title: "VANTA",
        subtitle: "Financial Marketplace",
        tags: ["3D", "WEB"],
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop",
        video: "https://salakhov-design.ru/f/77722c6279f391bb0064f73174e5f184_1920.mp4"
    },
    {
        id: 5,
        title: "Study space",
        subtitle: "Educational platform",
        tags: ["UI/UX", "Tilda"],
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
                        className="project-card-wrapper sticky top-[10vh] w-full max-w-[1240px] h-[75vh] md:h-[85vh] px-4 mb-[12vh] origin-top"
                        style={{ zIndex: index + 1 }}
                    >
                        <div className="project-card relative w-full h-full rounded-3xl overflow-hidden bg-[#111] border border-white/5 group shadow-2xl">
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </div>

                            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-16">
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map(tag => (
                                        <div key={tag} className="px-5 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
                                            <span className="text-white text-xs font-bold uppercase tracking-widest">{tag}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[35px] md:rounded-[50px] w-full">
                                        <h3 className="text-white text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase whitespace-nowrap">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/60 text-lg md:text-2xl font-medium">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 font-bold backdrop-blur-md">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 cursor-pointer">
                                        <ArrowUpRight className="text-white w-6 h-6" />
                                    </div>
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
