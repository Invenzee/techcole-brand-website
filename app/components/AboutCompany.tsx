"use client";

import { motion } from "framer-motion";

export default function AboutCompany() {
    return (
        <section className="w-full bg-white py-24 text-black overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-6 md:px-0">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2"
                    >
                        <div className="rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src="/about/hero-top-bg.png"
                                alt="Who We Are"
                                className="w-full h-auto object-cover min-h-[420px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:w-1/2 flex flex-col justify-center"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-gray-900 font-medium block text-base md:text-lg"
                        >
                            Who We Are
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-5xl md:text-[64px] font-semibold leading-[.9] mb-2 tracking-tight"
                        >
                            Passionate and <br />
                            <span className="text-primary">creative</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="space-y-6"
                        >
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-xl">
                                Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
