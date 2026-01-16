"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const servicesList = [
    { name: "Branding", href: "/services/branding" },
    { name: "Logo Design", href: "/services/logo-design" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Content Writing", href: "/services/content-writing" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    { name: "SEO", href: "/services/seo" }
];

export default function NavMenu() {
    const [active, setActive] = useState("Home");
    const [showServices, setShowServices] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
                setShowServices(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
                const isActive = active === item.name;
                const isServices = item.name === "Services";

                if (isServices) {
                    return (
                        <div
                            key={item.name}
                            ref={servicesRef}
                            className="relative"
                            onMouseEnter={() => {
                                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                setShowServices(true);
                            }}
                            onMouseLeave={() => {
                                timeoutRef.current = setTimeout(() => setShowServices(false), 200);
                            }}
                        >
                            <button
                                onClick={() => {
                                    setActive(item.name);
                                    setShowServices(!showServices);
                                }}
                                className="relative group overflow-hidden h-[20px] cursor-pointer"
                            >
                                <div
                                    className={`flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive || showServices ? "-translate-y-[20px]" : "group-hover:-translate-y-[20px]"
                                        }`}
                                >
                                    <span className="h-[20px] flex items-center text-lg font-medium capitalize tracking-wide text-gray-300 transition-opacity duration-300 group-hover:opacity-50">
                                        {item.name}
                                        <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${showServices ? "rotate-180" : ""}`} />
                                    </span>

                                    <span className="h-[20px] flex items-center text-lg font-medium capitalize tracking-wide text-primary">
                                        <span className="w-1 h-1 bg-primary rounded-full mr-1.5 animate-pulse" />
                                        {item.name}
                                        <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${showServices ? "rotate-180" : ""}`} />
                                    </span>
                                </div>

                                <span
                                    className={`absolute inset-0 bg-primary/0 blur-[20px] transition-colors duration-300 pointer-events-none ${isActive || showServices ? "bg-primary/10" : "group-hover:bg-primary/10"
                                        }`}
                                />
                            </button>

                            {/* Services Dropdown */}
                            {showServices && (
                                <div
                                    className="absolute top-full left-0 mt-4 w-56 bg-black backdrop-blur-lg rounded-lg shadow-2xl border border-gray-800 z-50 animate-fadeIn"
                                    onMouseEnter={() => {
                                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                        setShowServices(true);
                                    }}
                                    onMouseLeave={() => {
                                        timeoutRef.current = setTimeout(() => setShowServices(false), 200);
                                    }}
                                >
                                    <div className="p-2">
                                        {servicesList.map((service, index) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                onClick={() => {
                                                    setActive("Services");
                                                    setShowServices(false);
                                                }}
                                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900/50 transition-all duration-200 group"
                                                style={{ animationDelay: `${index * 40}ms` }}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                                                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 capitalize">
                                                    {service.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                }

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className="relative group overflow-hidden h-[20px] cursor-pointer"
                    >
                        <div
                            className={`flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive ? "-translate-y-[20px]" : "group-hover:-translate-y-[20px]"
                                }`}
                        >
                            <span className="h-[20px] flex items-center text-lg font-medium capitalize tracking-wide text-gray-300 transition-opacity duration-300 block group-hover:opacity-50">
                                {item.name}
                            </span>

                            <span className="h-[20px] flex items-center text-lg font-medium capitalize tracking-wide text-primary">
                                <span className="w-1 h-1 bg-primary rounded-full mr-1.5 animate-pulse" />
                                {item.name}
                            </span>
                        </div>

                        <span
                            className={`absolute inset-0 bg-primary/0 blur-[20px] transition-colors duration-300 pointer-events-none ${isActive ? "bg-primary/10" : "group-hover:bg-primary/10"
                                }`}
                        />
                    </Link>
                );
            })}

            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
            `}</style>
        </div>
    );
}