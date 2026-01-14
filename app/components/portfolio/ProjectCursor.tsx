"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ProjectCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const handleProjectHover = (e: any) => {
            if (e.detail.active) {
                setIsVisible(true);
                gsap.to(cursor, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            } else {
                setIsVisible(false);
                gsap.to(cursor, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("projectHover", handleProjectHover as EventListener);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("projectHover", handleProjectHover as EventListener);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-24 h-12 bg-primary rounded-full z-[9999] pointer-events-none flex items-center justify-center opacity-0 scale-0 origin-center -translate-x-1/2 -translate-y-1/2 shadow-2xl"
        >
            <span className="text-white text-lg font-medium">View</span>
        </div>
    );
}

// Helper to trigger the cursor
export const triggerProjectCursor = (active: boolean) => {
    if (typeof window !== "undefined") {
        const event = new CustomEvent("projectHover", { detail: { active } });
        window.dispatchEvent(event);
    }
};
