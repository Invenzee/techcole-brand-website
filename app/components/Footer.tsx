"use client";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import footerlogo from "@/public/read-logo.png"
import reviewPlatformImage from "@/public/review-platforms.png"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full text-white relative pt-12 pb-16">
            <div className="max-w-full z-20 relative bg-black px-16 mx-auto w-full flex items-center justify-between pb-12 border-b border-white/10">
                <div>
                    <h3 className="text-4xl md:text-7xl font-regular border-t border-b border-white pb-4 pt-1">
                        What <span className="text-red-500">customers say</span>
                    </h3>
                </div>
                <div className="flex items-center gap-4">
                    <Image src={reviewPlatformImage} className="w-3/4" alt="Review Platform" />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden z-10">
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#fee2e2', stopOpacity: 0.3 }} />
                            <stop offset="30%" style={{ stopColor: '#fca5a5', stopOpacity: 0.5 }} />
                            <stop offset="60%" style={{ stopColor: '#ef4444', stopOpacity: 0.7 }} />
                            <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 0.6 }} />
                        </linearGradient>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>

                <div className="flowing-gradient-container">
                    <div className="flowing-blob flowing-blob-1"></div>
                    <div className="flowing-blob flowing-blob-2"></div>
                    <div className="flowing-blob flowing-blob-3"></div>
                    <div className="flowing-blob flowing-blob-4"></div>
                </div>
            </div>

            <div className={`max-w-full relative z-20 px-24 mx-auto w-full pt-30 pb-30 bg-[url('@/public/footershape.png')] bg-cover bg-center`}>
                <div className="flex items-start jusitfy-between gap-20">
                    <div className="w-[30%]">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src={footerlogo} alt="Footer Logo" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We host the full capacity of potential for your start-up, business.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-[15%]">
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
                    <div className="w-[15%]">
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/career-tips" className="text-gray-400 hover:text-white transition-colors">Career Tips</Link></li>
                            <li><Link href="/career" className="text-gray-400 hover:text-white transition-colors">Career</Link></li>
                        </ul>
                    </div>

                    <div className="w-[40%]">
                        <h4 className="w-full flex-1 text-4xl font-medium mb-4 leading-[.9] bg-gradient-to-r from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
                            Join the Techcole<br />Community
                        </h4>
                        <div className="relative flex items-center border border-white/20 rounded-full overflow-hidden bg-black w-full">
                            <input
                                type="email"
                                placeholder="Enter Your Gmail"
                                className="flex-1 px-6 py-3 bg-transparent border-none focus:outline-none text-white placeholder:text-white/80"
                            />
                            <button
                                className="px-8 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90 whitespace-nowrap rounded-full cursor-pointer"
                                style={{
                                    background: 'conic-gradient(from 180deg at 50% 50%, #140F2A 0%, rgba(255, 0, 4, 0.25) 50%, rgba(255, 0, 4, 0.25) 100%)'
                                }}
                            >
                                Join Us
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-4">
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
            </div>

            <div className="z-20 relative text-center mt-8">
                Designed & Developed by  Techcole
            </div>

            <style jsx>{`
                .flowing-gradient-container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    filter: blur(60px);
                }

                .flowing-blob {
                    position: absolute;
                    border-radius: 50%;
                }

                .flowing-blob-1 {
                    width: 1000px;
                    height: 500px;
                    background: radial-gradient(ellipse at center, 
                        rgba(239, 68, 68, 1) 0%,
                        rgba(220, 38, 38, 0.8) 30%,
                        rgba(185, 28, 28, 0.6) 60%,
                        transparent 100%);
                    bottom: -200px;
                    left: 20%;
                    animation: float1 8s ease-in-out infinite;
                }

                .flowing-blob-2 {
                    width: 800px;
                    height: 600px;
                    background: radial-gradient(ellipse at center,
                        rgba(252, 165, 165, 0.9) 0%,
                        rgba(239, 68, 68, 0.7) 40%,
                        rgba(220, 38, 38, 0.5) 70%,
                        transparent 100%);
                    bottom: -250px;
                    left: 50%;
                    transform: translateX(-50%);
                    animation: float2 10s ease-in-out infinite;
                }

                .flowing-blob-3 {
                    width: 900px;
                    height: 550px;
                    background: radial-gradient(ellipse at center,
                        rgba(220, 38, 38, 0.9) 0%,
                        rgba(185, 28, 28, 0.7) 35%,
                        rgba(127, 29, 29, 0.5) 65%,
                        transparent 100%);
                    bottom: -220px;
                    right: 15%;
                    animation: float3 12s ease-in-out infinite;
                }

                .flowing-blob-4 {
                    width: 700px;
                    height: 700px;
                    background: radial-gradient(circle at center,
                        rgba(254, 202, 202, 0.8) 0%,
                        rgba(252, 165, 165, 0.5) 50%,
                        transparent 100%);
                    bottom: -300px;
                    left: 10%;
                    animation: float4 15s ease-in-out infinite reverse;
                }

                @keyframes float1 {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    }
                    25% {
                        transform: translate(150px, -80px) scale(1.2);
                        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                    }
                    50% {
                        transform: translate(-100px, 100px) scale(0.8);
                        border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
                    }
                    75% {
                        transform: translate(120px, 60px) scale(1.1);
                        border-radius: 40% 50% 60% 50% / 60% 40% 50% 60%;
                    }
                }

                @keyframes float2 {
                    0%, 100% {
                        transform: translateX(-50%) translateY(0) scale(1);
                        border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
                    }
                    33% {
                        transform: translateX(-50%) translateY(-100px) scale(1.3);
                        border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
                    }
                    66% {
                        transform: translateX(-50%) translateY(80px) scale(0.7);
                        border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%;
                    }
                }

                @keyframes float3 {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        border-radius: 45% 55% 60% 40% / 55% 45% 65% 35%;
                    }
                    30% {
                        transform: translate(-150px, 100px) scale(1.25);
                        border-radius: 55% 45% 40% 60% / 45% 55% 35% 65%;
                    }
                    60% {
                        transform: translate(130px, -90px) scale(0.75);
                        border-radius: 50% 50% 50% 50% / 60% 40% 60% 40%;
                    }
                }

                @keyframes float4 {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
                    }
                    40% {
                        transform: translate(180px, -60px) scale(1.35);
                        border-radius: 40% 60% 50% 50% / 60% 40% 60% 40%;
                    }
                    80% {
                        transform: translate(-140px, 120px) scale(0.65);
                        border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%;
                    }
                }
            `}</style>
        </footer>
    );
}
