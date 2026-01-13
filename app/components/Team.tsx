"use client";

import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Mark Allen",
        title: "Social Media Head",
        image: "/about/member-1.png"
    },
    {
        name: "Justin Wilson",
        title: "Sales & Marketing",
        image: "/about/member-3.png"
    },
    {
        name: "Woody",
        title: "Chief Security Officer",
        image: "/about/member-2.png",
        isCenter: true
    },
    {
        name: "William John",
        title: "SEO Executive",
        image: "/about/member-2.png"
    },
    {
        name: "Emilia Clark",
        title: "Creative Head",
        image: "/about/member-4.png"
    }
];

export default function Team() {
    return (
        <section className="w-full bg-white pt-24 pb-0 overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-6 text-center">
                <span className="text-gray-400 font-medium text-xs uppercase tracking-widest mb-3 block">
                    Meet Our Team
                </span>
                <h2 className="text-[32px] md:text-[44px] leading-[1.1] font-semibold text-gray-900 max-w-2xl mx-auto relative tracking-tight">
                    Introducing the leaders at the heart of <span className="text-primary">Techcole's</span> award-winning success.

                    <div className="flex justify-center mt-4">
                        <svg width="280" height="24" viewBox="0 0 280 24" fill="none" className="max-sm:w-[200px]">
                            <path d="M2 22C60 6 220 6 278 22" stroke="#E62E31" strokeWidth="8" strokeLinecap="round" />
                        </svg>
                    </div>
                </h2>
            </div>

            <div className="relative w-full h-full pt-80 pb-20 -mt-40 bg-[url('/about/team-bg.png')] bg-end bg-cover">

                <div className="relative z-10 max-w-[1240px] mx-auto px-6">
                    <div className="grid grid-cols-3 max-sm:grid-cols-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col gap-12 skew-y-1 skew-x-1 max-sm:mb-12"
                        >
                            <TeamCard member={teamMembers[0]} />
                            <TeamCard member={teamMembers[3]} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex items-center justify-center max-sm:mb-12"
                        >
                            <TeamCard member={teamMembers[2]} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col gap-12 -skew-y-1 -skew-x-1"
                        >
                            <TeamCard member={teamMembers[1]} />
                            <TeamCard member={teamMembers[4]} />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function TeamCard({ member, className = "" }: { member: any, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col items-center group ${className}`}
        >
            <div className="w-[300px] h-[350px] bg-[#E5E5E5] rounded-[24px] overflow-hidden relative mb-4 border border-white/10 shadow-lg">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                />
            </div>
            <div className="text-center">
                <h4 className="text-white text-xl font-normal tracking-tight leading-tight mb-1">{member.name}</h4>
                <p className="text-white text-sm tracking-widest font-light">{member.title}</p>
            </div>
        </motion.div>
    );
}
