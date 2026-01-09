"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./components/Header";
import Button from "./components/global/Button";

export default function Home() {
  return (
    <div className="w-full relative min-h-screen bg-black text-white selection:bg-red-500/30 overflow-hidden">
      <Header />

      <div className="relative z-10 max-w-[1140px] mx-auto mt-60 mb-20 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="text-[110px] leading-[110px] font-semibold text-white"
        >
          We Deliver What
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-[110px] leading-[110px] font-semibold text-white"
        >
          We{" "}
          <span className="relative text-red-500 inline-block">
            Promise!
            <svg
              viewBox="0 0 300 30"
              className="absolute -bottom-8 left-0 w-full h-[60px] -z-10 -rotate-2"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 5 25 Q 150 5 295 25"
                fill="none"
                stroke="#E62E31"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
              />
            </svg>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="text-[18px] leading-[26px] font-regular text-white max-w-[750px] mt-16 text-center"
        >
          We’re a full-stack digital product agency specializing in design, strategy,
          and development for web and mobile applications. Startups, nonprofits, and
          enterprises count on us to launch and revamp their digital products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mt-6"
        >
          <Button text="Book a free consultation" />
          <Button text="Get Started" />
        </motion.div>
      </div>

      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0"
      >
        <source src="/s.mp4" type="video/mp4" />
      </video>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:block"
      >
        <Link href="#" className="relative flex items-center justify-center w-32 h-32 group">
          <div className="absolute inset-0 border border-neutral-800 rounded-full bg-black/40 backdrop-blur-sm" />
          <div className="animate-[spin_10s_linear_infinite] w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-white">
                <textPath xlinkHref="#circlePath">
                  Scroll Down • Scroll Down • Scroll Down •
                </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-red-500 text-xl font-light group-hover:translate-y-1 transition-transform">
            ↓
          </div>
        </Link>
      </motion.div>
    </div>
  );
}