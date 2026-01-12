"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
];

export default function NavMenu() {
    const [active, setActive] = useState("Home");

    return (
        <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
                const isActive = active === item.name;

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

                            <span className="h-[20px] flex items-center text-lg font-medium capitalize tracking-wide text-red-500">
                                <span className="w-1 h-1 bg-red-500 rounded-full mr-1.5 animate-pulse" />
                                {item.name}
                            </span>
                        </div>

                        <span
                            className={`absolute inset-0 bg-red-500/0 blur-[20px] transition-colors duration-300 pointer-events-none ${isActive ? "bg-red-500/10" : "group-hover:bg-red-500/10"
                                }`}
                        />
                    </Link>
                );
            })}
        </div>
    );
}
