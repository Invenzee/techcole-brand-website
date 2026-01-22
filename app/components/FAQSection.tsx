"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Sparkles } from "lucide-react";

// --- Types ---

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

// --- Data ---

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "What Services Does Your Agency Offer?",
        answer: "Our agency provides a range of services to meet your business needs, including custom software solutions, graphic design, web development, and digital marketing. We specialize in creating high-quality, user-friendly, and visually appealing products that enhance efficiency and drive growth.",
    },
    {
        id: 2,
        question: "How Do You Ensure The Quality Of Your Work?",
        answer: "We employ a rigorous quality assurance process that involves multiple stages of testing, code reviews, and user feedback loops. Our team adheres to industry best practices and uses the latest tools to ensure that every deliverable meets the highest standards of performance, security, and usability.",
    },
    {
        id: 3,
        question: "How Do You Handle Project Revisions Or Changes?",
        answer: "We understand that requirements can evolve. We use an agile methodology that allows for flexibility and iterative improvements. We maintain open communication channels and provide regular updates, ensuring that any feedback or changes are incorporated seamlessly into the project workflow without disrupting the timeline significantly.",
    },
    {
        id: 4,
        question: "What If I'm Not Satisfied With The Final Result?",
        answer: "Client satisfaction is our top priority. We offer a satisfaction guarantee and will work closely with you to address any concerns. Our transparent workflow ensures you are involved at every step, minimizing surprises. If the final output doesn't meet the agreed-upon specifications, we will make the necessary revisions to ensure it aligns with your vision.",
    },
    {
        id: 5,
        question: "Do You Provide Post-Launch Support?",
        answer: "Yes, absolutely. We believe our partnership extends beyond the launch. We offer various support and maintenance packages to keep your website or application running smoothly, secure, and up-to-date with the latest technologies and trends.",
    },
    {
        id: 6,
        question: "What Is Your Typical Project Timeline?",
        answer: "Project timelines vary depending on the scope and complexity of the work. A standard informational website might take 4-6 weeks, while a complex web application could take 3-6 months. During the initial consultation, we provide a detailed roadmap and timeline tailored to your specific project requirements.",
    },
];

// --- Sub-Components ---

const AccordionItem = ({
    item,
    isOpen,
    onClick,
}: {
    item: FAQItem;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            initial={false}
            className={`relative w-full overflow-hidden rounded-[30px] border transition-colors duration-500 cursor-pointer group ${isOpen
                ? "bg-black border-[#E61F26]/30"
                : "bg-black border-transparent hover:border-[#E61F26]/20"
                }`}
            style={{
                // Fallback for static style
            }}
        >
            {/* Active Gradient Glow on Right */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-[#E61F26]/40 via-[#E61F26]/10 to-transparent pointer-events-none blur-3xl"
                    />
                )}
            </AnimatePresence>

            {/* Button Glow on Hover (Inactive State) */}
            {!isOpen && (
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            )}

            <motion.div
                layout
                className="relative z-10 p-7 flex flex-col justify-start"
            >
                <div className="flex items-center justify-between w-full">
                    <motion.h3
                        layout="position"
                        className={`text-xl md:text-2xl font-medium pr-8 transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-200"}`}
                    >
                        {item.question}
                    </motion.h3>

                    {/* Icon Container */}
                    <div className="flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                        {/* Plus Icon */}
                        <motion.div
                            initial={false}
                            animate={{
                                rotate: isOpen ? 135 : 0,
                                scale: isOpen ? 0.8 : 1
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center text-white"
                        >
                            <img src={isOpen ? "/services/faq-close.svg" : "/services/faq-plus.svg"} className={`${''}`} alt="Plus" />
                        </motion.div>
                    </div>
                </div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{
                                height: "auto",
                                opacity: 1,
                                marginTop: 24,
                                transition: {
                                    height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                                    opacity: { duration: 0.2, delay: 0.1 },
                                    marginTop: { duration: 0.4 }
                                }
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                                marginTop: 0,
                                transition: {
                                    height: { duration: 0.3, ease: "easeInOut" },
                                    opacity: { duration: 0.2 }
                                }
                            }}
                            className="text-gray-400 font-normal leading-relaxed text-base md:text-lg max-w-[90%]"
                        >
                            {item.answer}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

// --- Main Component ---

export default function FAQSection() {
    const [openId, setOpenId] = useState<number | null>(1); // Default first one open

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full bg-white py-24 relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-4 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    {/* Small Brand Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <img src="/services/stars.png" className="h-6 w-6" alt="Brand Tag" />
                        <span className="text-gray-900 font-semibold text-2xl tracking-wide">Sylphic</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-[64px] font-medium text-black leading-tight"
                    >
                        Frequently Asked <span className="text-[#E61F26]">Questions</span>
                    </motion.h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-5">
                    {faqData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onClick={() => handleToggle(item.id)}
                        />
                    ))}
                </div>

                {/* Decorative Elements */}
                {/* Soft red glow in background behind list */}
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#E61F26]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
                <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            </div>
        </section>
    );
}
