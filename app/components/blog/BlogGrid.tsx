"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../global/Button";

interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    image: string;
    categoryColor: 'red' | 'gray';
    hasGlow?: boolean;
    containerClass?: string;
    variant: 'large' | 'small';
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Mastering EDW: A Complete Guide to Architecture, Design, and Cloud Setup",
        category: "AI & IOT",
        date: "14.Jan.2025",
        author: "By Lexya",
        readTime: "14 min",
        image: "/blog/post-1.png",
        categoryColor: 'red',
        hasGlow: true,
        variant: 'large',
        containerClass: "col-span-12 md:col-span-8 md:row-span-2 md:mt-24"
    },
    {
        id: 2,
        title: "How AI changed business and increased conversion",
        category: "AI & IOT",
        date: "14.Oct.2024",
        author: "By Lexya",
        readTime: "14 min",
        image: "/blog/post-2.png",
        categoryColor: 'gray',
        variant: 'small',
        containerClass: "col-span-12 md:col-span-4"
    },
    {
        id: 3,
        title: "Ultimate Guide to IoT Testing: Tools, Methods, and Best Practices for Testing the Internet of Things",
        category: "AI & IOT",
        date: "14.Oct.2024",
        author: "By Lexya",
        readTime: "14 min",
        image: "/blog/post-3.png",
        categoryColor: 'gray',
        variant: 'small',
        containerClass: "col-span-12 md:col-span-4"
    },
    {
        id: 4,
        title: "Ultimate Guide to IoT Testing: Tools, Methods, and Best Practices for Testing the Internet of Things",
        category: "AI & IOT",
        date: "14.Oct.2024",
        author: "By Lexya",
        readTime: "14 min",
        image: "/blog/post-3.png",
        categoryColor: 'gray',
        variant: 'small',
        containerClass: "col-span-12 md:col-span-4 md:-mt-24"
    },
    {
        id: 6,
        title: "Ultimate Guide to IoT Testing: Tools, Methods, and Best Practices for Testing the Internet of Things",
        category: "AI & IOT",
        date: "14.Oct.2024",
        author: "By Lexya",
        readTime: "14 min",
        image: "/blog/post-1.png",
        categoryColor: 'gray',
        variant: 'large',
        containerClass: "col-span-12 md:col-span-8 md:row-span-2"
    },
    {
        id: 5,
        title: "Mastering EDW: A Complete Guide to Architecture, Design, and Cloud Setup",
        category: "E-Commerce",
        date: "Jan.23.2025",
        author: "By Mark",
        readTime: "24 min",
        image: "/blog/post-2.png",
        categoryColor: 'gray',
        hasGlow: true,
        variant: 'small',
        containerClass: "col-span-12 md:col-span-4"
    },
];

export default function BlogGrid() {
    return (
        <section className="bg-white py-16 md:py-24 px-4 md:px-6 relative z-10 overflow-hidden">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-16 grid-flow-row-dense">
                    {blogPosts.map((post) => (
                        <div key={post.id} className={post.containerClass}>
                            <BlogCard post={post} variant={post.variant} />
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-28 flex justify-center">
                    <Button link="" text="Load More" className="!bg-primary text-white !p-3" transitionClassName="!via-white/30" icon={ArrowRight} />
                </div>
            </div>
        </section>
    );
}

function BlogCard({ post, variant }: { post: BlogPost; variant: 'large' | 'small' }) {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(pathRef.current, {
                            strokeDashoffset: 0,
                            duration: 2.5,
                            ease: "power2.inOut",
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(pathRef.current);
            return () => observer.disconnect();
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer flex flex-col w-full"
        >
            <div className={`relative w-full overflow-hidden rounded-[24px] md:rounded-[40px] mb-4 md:mb-6 ${variant === 'large' ? 'aspect-[1.3/1]' : 'aspect-[1.5/1]'}`}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-opacity duration-700 ${post.hasGlow ? 'bg-primary/5 opacity-40 mix-blend-overlay' : 'bg-black/10 opacity-60 group-hover:opacity-0'}`} />
            </div>

            <div className="relative p-4 md:p-6">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 600 300"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={pathRef}
                        d="M 590,5 H 40 C 20,5 5,20 5,40 V 260 C 5,280 20,295 40,295 H 350"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="1"
                        strokeOpacity="1"
                        strokeLinecap="round"
                    />
                </svg>

                <div className="relative z-10 flex flex-col">
                    <div className="flex items-center gap-3 md:gap-4 mb-3">
                        <span className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-md font-medium uppercase tracking-tighter transition-all duration-300 group-hover:shadow-[0_4px_15px_rgba(209,32,39,0.3)] ${post.categoryColor === 'red' ? 'bg-primary text-black' : 'bg-neutral-800/10 text-neutral-600'
                            }`}>
                            {post.category}
                        </span>
                        <span className="text-sm md:text-md font-medium text-black uppercase">
                            {post.date}
                        </span>
                    </div>

                    <h3 className={`font-medium text-black leading-[1.1] md:leading-[.9] mb-3 transition-colors duration-300 group-hover:text-primary break-words ${variant === 'large'
                        ? 'text-xl sm:text-2xl md:text-3xl lg:text-[42px]'
                        : 'text-lg sm:text-xl md:text-2xl lg:text-[28px]'
                        }`}>
                        {post.title}
                    </h3>

                    <div className="mt-auto flex items-center gap-2">
                        <span className="text-sm md:text-md font-medium text-black">By</span>
                        <span className="text-sm md:text-md font-medium text-black">{post.author.replace('By ', '')}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mx-2" />
                        <span className="text-sm md:text-md font-medium text-black">{post.readTime}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
