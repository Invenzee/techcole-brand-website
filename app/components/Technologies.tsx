"use client";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "./global/Button";

const technologies = [
    { name: "Adobe Illustrator", icon: '/technologies/adoble-illustrator-icon.png' },
    { name: "Android", icon: '/technologies/android-icon.png' },
    { name: "Angular", icon: '/technologies/angular-icon.png' },
    { name: "AWS", icon: '/technologies/aws-icon.png' },
    { name: "Django", icon: '/technologies/django-icon.png' },
    { name: "Dot Net", icon: '/technologies/dot-net-icon.png' },
    { name: "Figma", icon: '/technologies/figma-icon.png' },
    { name: "Firebase", icon: '/technologies/firebase-icon.png' },
    { name: "Flutter", icon: '/technologies/flutter-logo-tech-stack.png' },
    { name: "Framer Motion", icon: '/technologies/framer-motion-icon.png' },
    { name: "Git", icon: '/technologies/git-icon.png' },
    { name: "GitHub", icon: '/technologies/github-icon.png' },
    { name: "Google Cloud", icon: '/technologies/google-cloud-icon.png' },
    { name: "Google Firebase Store", icon: '/technologies/google-firebase-store-icon.png' },
    { name: "Laravel", icon: '/technologies/laravel-icon.png' },
    { name: "Meta", icon: '/technologies/meta-icon.png' },
    { name: "Microsoft Azure", icon: '/technologies/microsoft-azure-icon.png' },
    { name: "Node.js", icon: '/technologies/nodejs-icon.png' },
    { name: "Photoshop", icon: '/technologies/photoshop-icon.png' },
    { name: "PHP", icon: '/technologies/php-icon.png' },
    { name: "React Native", icon: '/technologies/react-native-icon.png' },
    { name: "Replit", icon: '/technologies/replit-icon.png' },
    { name: "Slack", icon: '/technologies/slack-icon.png' },
    { name: "SQL", icon: '/technologies/sql-icon.png' },
    { name: "Sublime", icon: '/technologies/sublime.png' },
    { name: "Swift", icon: '/technologies/swift-icon-tech-stack.png' },
    { name: "Tech Stack", icon: '/technologies/tech-stack-icon.png' },
    { name: "TypeScript", icon: '/technologies/typescript-icon.png' },
    { name: "VSCode", icon: '/technologies/vscode-icon.png' },
    { name: "Vue.js", icon: '/technologies/vue-js-icon.png' }
];

const createRows = () => {
    const row1 = technologies.slice(0, 10);
    const row2 = technologies.slice(10, 20);
    const row3 = technologies.slice(20, 30);
    return [row1, row2, row3];
};

const rows = createRows();

export default function Technologies() {
    const [isPaused, setIsPaused] = useState(false);
    const controlsRow1 = useAnimation();
    const controlsRow2 = useAnimation();
    const controlsRow3 = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    const itemWidth = 120;
    const gap = 24;
    const rowWidth = rows[0].length * (itemWidth + gap);

    useEffect(() => {
        if (!isPaused) {
            controlsRow1.start({
                x: [0, -rowWidth],
                transition: {
                    x: {
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    },
                },
            });

            controlsRow2.start({
                x: [-rowWidth, 0],
                transition: {
                    x: {
                        repeat: Infinity,
                        duration: 45,
                        ease: "linear",
                    },
                },
            });

            controlsRow3.start({
                x: [0, -rowWidth],
                transition: {
                    x: {
                        repeat: Infinity,
                        duration: 50,
                        ease: "linear",
                    },
                },
            });
        } else {
            controlsRow1.stop();
            controlsRow2.stop();
            controlsRow3.stop();
        }
    }, [isPaused, controlsRow1, controlsRow2, controlsRow3, rowWidth]);


    return (
        <section className="w-full relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                        }}
                        animate={{
                            x: [null, Math.random() * 100 + "%"],
                            y: [null, Math.random() * 100 + "%"],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight leading-tight"
                >
                    Technologies We Work ON
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/90 text-sm md:text-base max-w-[600px] mb-8 md:mb-10 leading-relaxed px-4"
                >
                    We Are the Scalable Design Solutions That Will Give Your Business An Edge In This Ever-Changing Digital Landscape.
                </motion.p>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-[1800px] mb-12 overflow-hidden"
                >
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-48 z-20 bg-gradient-to-r from-primary via-primary/90 to-transparent pointer-events-none" />

                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-48 z-20 bg-gradient-to-l from-primary via-primary/90 to-transparent pointer-events-none" />

                    <div className="relative mb-6">
                        <motion.div
                            animate={controlsRow1}
                            className="flex gap-6 md:gap-8 px-4"
                            style={{ width: rowWidth * 2 }}
                        >
                            {[...rows[0], ...rows[0], ...rows[0], ...rows[0]].map((tech, index) => (
                                <motion.div
                                    key={`row1-${tech.name}-${index}`}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-white backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/10">
                                        <motion.img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-12 h-12 md:w-14 md:h-14 object-contain"
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="relative mb-6">
                        <motion.div
                            animate={controlsRow2}
                            className="flex gap-6 md:gap-8 px-4 justify-end"
                            style={{ width: rowWidth * 2 }}
                        >
                            {[...rows[1], ...rows[1], ...rows[1], ...rows[1]].map((tech, index) => (
                                <motion.div
                                    key={`row2-${tech.name}-${index}`}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-white backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/10">
                                        <motion.img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-12 h-12 md:w-14 md:h-14 object-contain filter"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="relative">
                        <motion.div
                            animate={controlsRow3}
                            className="flex gap-6 md:gap-8 px-4"
                            style={{ width: rowWidth * 2 }}
                        >
                            {[...rows[2], ...rows[2], ...rows[2], ...rows[2]].map((tech, index) => (
                                <motion.div
                                    key={`row3-${tech.name}-${index}`}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-white backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/10">
                                        <motion.img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-12 h-12 md:w-14 md:h-14 object-contain"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button link="/contact" text="Get Started" className="!bg-primary text-white !py-2 !px-6" transitionClassName="!via-white/30" />
                </motion.div>
            </div>
        </section>
    );
}