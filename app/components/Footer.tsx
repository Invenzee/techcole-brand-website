"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white relative overflow-hidden pt-20 pb-10">
            {/* Animated Gradient Blob */}
            <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-full"
                    style={{
                        background: 'radial-gradient(ellipse 150% 100% at 50% 100%, rgba(220, 38, 38, 0.6) 0%, rgba(127, 29, 29, 0.4) 40%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                {/* Top Section - What customers say */}
                <div className="flex items-center justify-between mb-16 pb-8 border-b border-white/10">
                    <div>
                        <h3 className="text-4xl md:text-5xl font-light">
                            What <span className="text-red-500 font-semibold">customers say</span>
                        </h3>
                    </div>

                    {/* Review Badges */}
                    <div className="flex items-center gap-4">
                        <div className="bg-white px-6 py-3 rounded-lg">
                            <p className="text-xs text-gray-600 mb-1">REVIEWED ON</p>
                            <p className="text-black font-bold text-lg">Clutch</p>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-lg flex items-center gap-2">
                            <span className="text-green-500 font-bold">★</span>
                            <p className="text-black font-bold">Trustpilot</p>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-lg">
                            <p className="text-red-500 font-bold text-lg">yelp</p>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-lg">
                            <p className="text-blue-600 font-bold">GoodFirms</p>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">T</span>
                            </div>
                            <span className="text-2xl font-bold">TECHCOLE</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We host the full capacity of potential for your start-up, business.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link href="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
                            <li><Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">testimonials</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/career-tips" className="text-gray-400 hover:text-white transition-colors">Career Tips</Link></li>
                            <li><Link href="/career" className="text-gray-400 hover:text-white transition-colors">Career</Link></li>
                        </ul>
                    </div>

                    {/* Join Community */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Join the Techcole<br />Community</h4>
                        <div className="flex gap-2 mb-4">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder:text-gray-500"
                            />
                            <button className="px-6 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                                Join Us
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                    <p className="text-gray-400 text-sm">Designed & Developed by Techcole</p>

                    {/* Scroll to Top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
