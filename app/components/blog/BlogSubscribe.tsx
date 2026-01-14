"use client";

import { motion } from "framer-motion";

export default function BlogSubscribe() {
    return (
        <section className="bg-primary py-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-full bg-white/5 blur-[120px] rounded-full -mr-64 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/5 blur-[100px] rounded-full -ml-32 pointer-events-none" />

            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 border border-white rounded-[60px] flex items-center justify-center relative p-12 bg-white/5 backdrop-blur-sm"
                >
                    <img src="/blog/favicon-big.png" className="w-full h-full object-contain" alt="" />
                </motion.div>

                <div className="hidden lg:block w-[1px] h-64 bg-white" />

                <div className="flex-1 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg font-ligh mb-2 opacity-90 leading-tight max-w-lg">
                            Ultimate Guide to IoT Testing: Tools, Methods, and Best Practices for Testing the Internet of Things
                        </p>
                        <h2 className="text-4xl md:text-6xl lg:text-[70px] font-medium leading-[0.95] tracking-tight mb-6">
                            Make our digital heart<br />beat faster
                        </h2>
                    </motion.div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-transparent border border-white rounded-[20px] px-8 py-5 outline-none focus:border-white transition-colors placeholder:text-white/60 text-lg"
                                />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full bg-transparent border border-white rounded-[20px] px-8 py-5 outline-none focus:border-white transition-colors placeholder:text-white/60 text-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <label className="flex items-start gap-4 flex-1 cursor-pointer group">
                                <div className="relative mt-1">
                                    <input type="checkbox" className="peer sr-only" />
                                    <div className="w-8 h-8 border-2 border-white/40 rounded-lg group-hover:border-white transition-colors peer-checked:bg-white peer-checked:border-white" />
                                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-sm font-light leading-relaxed max-w-md">
                                    We will add your info to our CRM for contacting you regarding your request. For more info please consult our <span className="underline font-bold">privacy policy</span>.
                                </span>
                            </label>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-primary px-6 py-3 rounded-xl flex items-center justify-between gap-6 font-medium text-2xl min-w-[240px] shadow-2xl shadow-black/10 transition-shadow cursor-pointer"
                            >
                                <span>Subcribe</span>
                                <img src="/blog/arrow-up-red.png" className="w-10 h-10" alt="" />
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
