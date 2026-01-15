"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Phone, Instagram, Linkedin, Facebook, ChevronDown } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
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

const menuVariants = {
    closed: {
        x: "100%",
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1] as any,
        },
    },
    open: {
        x: "0%",
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1] as any,
        },
    },
};

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);

    return (
        <div className="md:hidden">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-white hover:text-primary transition-colors cursor-pointer"
                aria-label="Open Menu"
            >
                <div className="flex flex-col gap-1.5 items-end">
                    <span className="w-8 h-0.5 bg-current transition-all" />
                    <span className="w-5 h-0.5 bg-current transition-all" />
                    <span className="w-6 h-0.5 bg-current transition-all" />
                </div>
            </button>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-black z-[100] flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <img src="/logo.png" className="h-8" alt="Logo" />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-4 mt-8">
                            <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold mb-4">Navigation</span>
                            {navItems.map((item, i) => {
                                const isServices = item.name === "Services";

                                if (isServices) {
                                    return (
                                        <div key={item.name} className="flex flex-col">
                                            <button
                                                onClick={() => setShowServices(!showServices)}
                                                className="text-3xl font-light text-white hover:text-primary transition-colors group flex items-center justify-between w-full py-2"
                                            >
                                                <span className="">
                                                    {item.name}
                                                </span>
                                                <ChevronDown
                                                    className={`w-6 h-6 transition-transform duration-300 ${showServices ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {showServices && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                                        className="overflow-hidden ml-6 mt-2"
                                                    >
                                                        <div className="flex flex-col gap-3 py-3 border-l border-white/10 pl-4">
                                                            {servicesList.map((service, index) => (
                                                                <motion.div
                                                                    key={service.name}
                                                                    initial={{ x: -20, opacity: 0 }}
                                                                    animate={{ x: 0, opacity: 1 }}
                                                                    transition={{ delay: index * 0.05 }}
                                                                >
                                                                    <Link
                                                                        href={service.href}
                                                                        onClick={() => {
                                                                            setIsOpen(false);
                                                                            setShowServices(false);
                                                                        }}
                                                                        className="text-xl font-light text-gray-400 hover:text-primary transition-colors inline-block group"
                                                                    >
                                                                        <div className="flex items-center gap-3">
                                                                            <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                                                                            <span className="inline-block transition-transform group-hover:translate-x-2">
                                                                                {service.name}
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }

                                return (
                                    <motion.div
                                        key={item.name}
                                        custom={i}
                                        variants={{
                                            initial: { x: 80, opacity: 0, rotateZ: 5 },
                                            enter: (i: number) => ({
                                                x: 0,
                                                opacity: 1,
                                                rotateZ: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: [0.76, 0, 0.24, 1] as any,
                                                    delay: 0.1 + i * 0.1,
                                                },
                                            }),
                                            exit: (i: number) => ({
                                                x: 80,
                                                opacity: 0,
                                                rotateZ: 5,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: [0.76, 0, 0.24, 1] as any,
                                                    delay: i * 0.1,
                                                },
                                            }),
                                        }}
                                        initial="initial"
                                        animate="enter"
                                        exit="exit"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-light text-white hover:text-primary transition-colors inline-block group"
                                        >
                                            <span className="inline-block transition-transform group-hover:translate-x-4">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* Footer within menu */}
                        <div className="mt-auto pt-10 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex flex-col gap-4"
                                >
                                    <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold">Contact</span>
                                    <a href="tel:+" className="text-white hover:text-primary transition-colors flex items-center gap-2">
                                        <Phone size={16} />
                                        <span>Inquire Now</span>
                                    </a>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex flex-col gap-4"
                                >
                                    <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold">Social</span>
                                    <div className="flex gap-4">
                                        <Instagram size={20} className="text-white hover:text-primary cursor-pointer transition-colors" />
                                        <Linkedin size={20} className="text-white hover:text-primary cursor-pointer transition-colors" />
                                        <Facebook size={20} className="text-white hover:text-primary cursor-pointer transition-colors" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Background Animated Gradient (Subtle) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}