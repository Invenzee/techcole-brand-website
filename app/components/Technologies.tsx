"use client";
import { motion } from "framer-motion";
import Button from "./global/Button";

export default function Technologies() {
    return (
        <section className="w-full relative py-16 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')"
                }}
            />

            <div className="absolute inset-0 bg-[#E50914] opacity-90" />

            <div className="relative z-10 max-w-[1140px] mx-auto px-6 flex flex-col items-center justify-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight"
                >
                    Technologies We Work ON
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/90 text-md md:text-md max-w-[600px] mb-10 leading-relaxed"
                >
                    We Are the Scalable Design Solutions That Will Give Your Business An Edge In This Ever-Changing Digital Landscape.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button text="Get Started" className="!bg-red-500 text-white !py-2 !px-6" transitionClassName="!via-white/30" />
                </motion.div>
            </div>
        </section>
    );
}
