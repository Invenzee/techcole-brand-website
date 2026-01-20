"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero({ title, description, image, className }: { title: string; description: string; image: string; className: string }) {
    const router = useRouter();
    return (
        <section className="relative pt-40 w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-black py-20">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/about/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-[1140px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-black/25 backdrop-blur-md border border-white/50 rounded-[40px] p-10 md:p-10 max-w-xl"
                    >
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-5xl md:text-7xl font-regular text-white mb-8 tracking-tight"
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-sm md:text-base font-medium text-white/90 leading-relaxed uppercase tracking-wider"
                        >
                            {description}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group"
                    >
                        <div className="rounded-[40px] overflow-hidden border border-white/50 shadow-2xl relative">
                            <img
                                src={image}
                                alt="Our Team"
                                className={`w-full ${className} object-cover aspect-[4/3] lg:aspect-[3/2.2]`}
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center text-white font-semibold transition-all duration-300 overflow-hidden cursor-pointer"
                                    onClick={() => router.push('/contact')}
                                >
                                    <div className="absolute inset-0 bg-primary/60 rounded-full shadow-[0_0_40px_rgba(230,46,49,0.5)]" />
                                    <div className="relative z-10 flex flex-col items-center">
                                        <img src="/about/arrow-up.png" className="w-16 h-16 max-sm:w-12 max-sm:h-12" alt="" />
                                        <span className="text-xl text-white/90 font-light">Get Started</span>
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
