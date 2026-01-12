import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './global/Button';
import { ArrowLeft, ArrowRight, Code, PenTool, BarChart3, Smartphone, Globe, Megaphone } from 'lucide-react';
import starImg from '@/public/vector.png'

const services = [
    {
        title: "Website Development",
        description: "Our Hardware Solution service provides top-notch hardware tailored to your business needs. We offer installation and support for a wide range of devices.",
        icon: <Code strokeWidth={1} className="w-8 h-8 text-white relative z-10" />,
    },
    {
        title: "Logo Design",
        description: "Our Software Solution service offers custom, high-quality software to meet your business needs, enhancing efficiency and driving growth.",
        icon: <PenTool strokeWidth={1} className="w-8 h-8 text-white relative z-10" />,
    },
    {
        title: "Digital Marketing",
        description: "Our Innovative Solutions service offers creative and cutting-edge strategies to solve complex business challenges.",
        icon: <Megaphone strokeWidth={1} className="w-8 h-8 text-white relative z-10" />,
    },
    {
        title: "App Development",
        description: "Building robust mobile applications that provide seamless user experiences across all devices and platforms.",
        icon: <Smartphone strokeWidth={1} className="w-8 h-8 text-white relative z-10" />,
    },
    {
        title: "SEO Optimization",
        description: "Optimizing your digital presence to ensure maximum visibility and organic traffic growth for your business.",
        icon: <Globe strokeWidth={1} className="w-8 h-8 text-white relative z-10" />,
    },
    {
        title: "Branding",
        description: "Creating unique brand identities that resonate with your audience and stand out in the competitive market.",
        icon: <BarChart3 strokeWidth={1} className="w-8 h-8 text-white relative z-10" />,
    }
];

export default function Services() {
    const [currDeg, setCurrDeg] = useState(0);

    const panelSize = 300;
    const numberOfPanels = services.length;
    const tz = Math.round((panelSize / 2) / Math.tan((Math.PI * 2 / numberOfPanels) / 2)) + 100;
    const rY = 360 / numberOfPanels;

    const rotate = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrDeg(prev => prev - rY);
        } else {
            setCurrDeg(prev => prev + rY);
        }
    };

    return (
        <section className="w-full bg-black py-24 !pb-40 text-white overflow-hidden relative">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">

                <div className="flex flex-col items-center justify-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
                    >
                        <img src={starImg.src} className='w-5 h-5' alt="" />
                        <span className="text-md font-medium tracking-wide">Services</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-semibold leading-[.9]"
                    >
                        Discover our Expertise <br />
                        as a <span className="text-red-500">Website Design</span> Agency
                    </motion.h2>
                </div>

                <div className="relative h-[400px] w-full flex items-center justify-center my-10 perspective-container">
                    <div
                        className="carousel-tilt-wrapper"
                        style={{
                            transform: 'rotateX(-5deg) translateY(-20px)',
                            transformStyle: 'preserve-3d',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div
                            className="carousel-3d"
                            style={{
                                transform: `rotateY(${currDeg}deg)`,
                            }}
                        >
                            {services.map((service, index) => {
                                const rotation = index * rY;
                                let effectiveAngle = (rotation + currDeg) % 360;
                                if (effectiveAngle < 0) effectiveAngle += 360;
                                if (effectiveAngle > 180) effectiveAngle -= 360;

                                const rad = (effectiveAngle * Math.PI) / 180;
                                const cosVal = Math.cos(rad);
                                const opacity = (cosVal + 1) / 2 * 0.7 + 0.3;
                                const yOffset = Math.round(cosVal * 80);

                                const faceCorrection = cosVal > 0 ? -effectiveAngle * .9 * cosVal : 0;
                                const isBack = cosVal < 0;

                                return (
                                    <div
                                        key={index}
                                        className={`absolute left-0 top-0 flex flex-col justify-between p-8 rounded-xl border border-white/10 shadow-2xl transition-all duration-1000 group hover:brightness-110 ${isBack ? 'bg-[#DF0A0A]/20' : 'bg-[#DF0A0A]'}`}
                                        style={{
                                            width: `${panelSize}px`,
                                            height: '350px',
                                            transform: `rotateY(${rotation}deg) translateZ(${tz}px) translateY(${yOffset}px) rotateY(${faceCorrection}deg)`,
                                            left: `calc(50% - ${panelSize / 2}px)`,
                                            top: 'calc(50% - 200px)',
                                            opacity: isBack ? 1 : opacity,
                                            filter: `brightness(${opacity})`,
                                            zIndex: Math.round(opacity * 100),
                                            willChange: 'transform'
                                        }}
                                    >
                                        {!isBack ? (
                                            <>
                                                <div className="relative z-10">
                                                    <h3 className="text-2xl font-semibold mb-4 leading-tight">{service.title}</h3>
                                                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <div className="relative z-10 flex items-end justify-between mt-auto">
                                                    <Button text="Learn More" className="!bg-red-500 text-white !py-1.5" transitionClassName="!via-white/30" />
                                                    <div className="">
                                                        {service.icon}
                                                    </div>
                                                </div>

                                                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-tl-[100px] z-0 pointer-events-none" />
                                            </>
                                        ) : (
                                            /* Back Card Visual - Just a reflection/gradient shape */
                                            <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full absolute top-2/3 left-0 px-4 md:px-10 -translate-y-1/2 pointer-events-none">
                    <button
                        onClick={() => rotate('prev')}
                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 pointer-events-auto group cursor-pointer"
                    >
                        <ArrowLeft strokeWidth={1} className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={() => rotate('next')}
                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 pointer-events-auto group cursor-pointer"
                    >
                        <ArrowRight strokeWidth={1} className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .perspective-container {
                    perspective: 1200px; /* Controls the depth of the 3D space */
                    overflow: visible; /* Allowing items to "pop out" if needed, though usually hidden is safer for page flow */
                }
                .carousel-3d {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transform-style: preserve-3d;
                    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1); /* Smooth ease-out */
                }
            `}</style>
        </section>
    );
}
