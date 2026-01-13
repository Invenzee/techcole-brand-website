"use client";
import { motion } from "framer-motion";

export default function Comparison() {
    return (
        <section className="w-full bg-black py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1140px] mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl !font-medium leading-[1] tracking-tight text-white"
                    >
                        Myths & Facts of <span className="text-primary">Website <br className="hidden md:block" /> Development</span> Agencies Promise
                    </motion.h2>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 w-full relative">

                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent -translate-x-1/2 z-20 opacity-50"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-[450px] relative z-0 md:mr-10 flex"
                    >
                        <div className="w-full rounded-2xl overflow-hidden flex flex-col">
                            <div className="bg-[#9CA3AF] p-4 text-center font-bold text-black text-xl md:text-2xl uppercase rounded-2xl -mb-6 z-20">
                                What other promises to you
                            </div>
                            <div className="bg-[#4B5563] !pt-16 p-6 md:p-10 flex-1 flex flex-col">
                                <div className="relative pl-12">
                                    <div className="absolute left-1 top-[-12px] bottom-[-12px] w-6 border border-white/20 rounded-full z-0" />

                                    <div className="flex flex-col gap-6 relative z-10">
                                        <MythItem text="We can make your website bug-free in one go." />
                                        <MythItem text="Website gets indexed on its own." />
                                        <MythItem text="We get you insane traffic the moment your website is ready." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full md:w-[450px] relative z-20 md:ml-10 flex"
                    >
                        <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(220,38,38,0.5)] flex flex-col">
                            <div className="bg-white p-4 text-center uppercase font-bold text-black text-xl md:text-2xl leading-tight rounded-2xl -mb-6 z-20">
                                You <span className="text-primary">have us</span>, Your Lucky Day
                            </div>
                            <div className="bg-primary !pt-16 p-6 md:p-10 flex-1 flex flex-col">
                                <div className="relative pl-12">
                                    <div className="absolute left-1 top-[-12px] bottom-[-12px] w-6 border border-white/40 rounded-full z-0" />

                                    <div className="flex flex-col gap-6 relative z-10">
                                        <FactItem text="We ensure rigorous testing and provide continuous support aimed at minimizing bugs." />
                                        <FactItem text="We implement comprehensive SEO strategies to Ensure proper and faster indexing." />
                                        <FactItem text="We build scalable, organic growth networks to drive sustainable traffic." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function MythItem({ text }: { text: string }) {
    return (
        <div className="flex items-start">
            {/* Center dot: (pl-12 is 48px, bar is 32px wide at left-0, so center is 16px. 48-16 = 32px offset) */}
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-[10px] absolute left-[-35px]" />
            <p className="text-lg leading-relaxed text-white/80">{text}</p>
        </div>
    )
}

function FactItem({ text }: { text: string }) {
    return (
        <div className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-[10px] absolute left-[-35px] shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <p className="text-lg font-medium leading-relaxed text-white">{text}</p>
        </div>
    )
}
