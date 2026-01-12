"use client";
import { motion } from "framer-motion";
import Button from "./global/Button";
import growthImage from "@/public/growth.png";

export default function Growth() {
    return (
        <section className="w-full bg-white pt-24 relative">
            <div className="max-w-[1240px] mx-auto px-6 relative">
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 md:space-y-8 pb-0 lg:pb-20 w-full lg:w-1/2 lg:text-left"
                    >
                        <h3 className="text-3xl md:text-5xl font-light text-gray-400 leading-[.9]">
                            Your Growth Is Our<br className="hidden md:block" />
                            Utmost Priority!
                        </h3>

                        <div>
                            <Button
                                text="Book a Free Discovery Session"
                                className="!bg-primary text-white !py-2.5 !px-6"
                                transitionClassName="!via-white/30"
                            />
                        </div>

                        <h2 className="text-4xl md:text-6xl font-semibold text-black leading-[.9]">
                            <span className="text-primary">Let's Build</span> Something <br className="hidden md:block" />
                            <span className="text-primary">Great Together</span>
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            <span className="font-semibold text-primary">TechCole</span> is here to help you reach your goal. Contact us today for a personalized consultation and let's discuss how we can elevate your brand and drive measurable success.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full lg:w-1/2"
                    >
                        <div className="text-left mb-6 lg:ml-20 lg:-mb-12 relative z-10 px-4 max-sm:m-0 max-sm:p-0">
                            <p className="text-3xl md:text-4xl font-light text-gray-400 leading-tight">
                                Their <span className="text-primary font-semibold">Success<br />Stories Hear Them<br />Out!</span>
                            </p>
                        </div>

                        <div className="relative">
                            <img
                                src={growthImage.src}
                                alt="Success Stories"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* Red Vertical Divider */}
                <div className="hidden lg:block absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-primary" />
            </div>

        </section>
    );
}
