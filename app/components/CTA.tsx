"use client";
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import callToActionImg from '@/public/call-to-action-img.png'

export default function CTA() {
    return (
        <section className="w-full bg-primary py-10 relative overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-normal text-white -tracking-[0.03em]">
                        Book a Free <br className="md:hidden" />
                        <span className="font-semibold">Consultation</span>
                    </h2>
                </motion.div>

                <div className='flex flex-col md:flex-row items-center gap-6 md:gap-0'>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative z-10 flex-shrink-0"
                    >
                        <img src={callToActionImg.src} className='w-16 md:w-20' alt="call-to-action" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center text-white"
                    >
                        <div className="hidden md:block w-[1px] h-16 bg-white/40 mx-8" />

                        <div className="flex flex-col gap-1 text-center md:text-left">
                            <div className="text-2xl md:text-3xl font-medium tracking-tight">
                                760 280 5517
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-white/90 text-sm md:text-lg group cursor-pointer">
                                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="underline decoration-white/50 underline-offset-4 group-hover:decoration-white transition-all">info@techcole.com</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
