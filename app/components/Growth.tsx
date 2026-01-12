"use client";
import { motion } from "framer-motion";
import Button from "./global/Button";
import growthImage from "@/public/growth.png";

export default function Growth() {
    return (
        <section className="w-full bg-white pt-24 relative">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex items-end justify-between">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 pb-20"
                    >
                        <h3 className="text-4xl md:text-5xl font-light text-gray-400 leading-[.9]">
                            Your Growth Is Our<br />
                            Utmost Priority!
                        </h3>

                        <div>
                            <Button
                                text="Book a Free Discovery Session"
                                className="!bg-red-500 text-white !py-2.5 !px-6"
                                transitionClassName="!via-white/30"
                            />
                        </div>

                        <h2 className="text-5xl md:text-6xl font-semibold text-black leading-[.9">
                            <span className="text-red-500">Let's Build</span> Something<br />
                            <span className="text-red-500">Great Together</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed w-[550px]">
                            <span className="font-semibold leading-[.9] text-red-500">TechCole</span> is here to help you reach your goal. Contact us today for a personalized consultation and let's discuss how we can elevate your brand and drive measurable success.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full"
                    >
                        <div className="text-left ml-40 -mb-12">
                            <p className="text-2xl md:text-4xl font-light text-gray-400 leading-[.9]">
                                Their <span className="text-red-500 font-semibold">Success<br />Stories Hear Them<br />Out!</span>
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
                <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-red-500" />
            </div>

        </section>
    );
}
