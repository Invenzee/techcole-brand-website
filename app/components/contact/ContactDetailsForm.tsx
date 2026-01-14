"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../global/Button";
import gsap from "gsap";

export default function ContactDetailsForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        budget: "",
        projectType: "",
        message: ""
    });

    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });
            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                delay: 0.5,
            });
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="w-full bg-white py-24 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="400" stroke="#D12027" strokeWidth="1" />
                    <circle cx="100" cy="100" r="600" stroke="#D12027" strokeWidth="0.5" />
                    <circle cx="1300" cy="700" r="500" stroke="#D12027" strokeWidth="1" />
                </svg>
            </div>

            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="relative">
                            <h2 className="text-5xl md:text-6xl text-black font-medium leading-[1.1] tracking-tight">
                                Let's discuss your <span className="text-primary">goals </span>
                                and how we can help you
                                <span className="text-primary"> achieve </span> them.
                            </h2>
                            <div className="mt-2 ml-20">
                                <svg width="220" height="12" viewBox="0 0 220 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        ref={pathRef}
                                        d="M2 10C40 3 140 3 218 10"
                                        stroke="#D12027"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="space-y-2 text-black text-xl font-medium">
                            <div className="space-y-2">
                                <p className="hover:text-primary transition-colors cursor-pointer">760 280 5517</p>
                                <p className="hover:text-primary transition-colors cursor-pointer">info@techcole.com</p>
                            </div>
                            <div className="space-y-2 max-w-md opacity-80">
                                <p>12508 Center St Suite # 21 South Gate, CA 90280</p>
                                <p>254 chapman rd ste 208 newark, de 19702</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-gradient-to-b from-white to-[#EDEDED] p-8 rounded-2xl"
                    >
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name*
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                    className="w-full bg-transparent px-4 py-3 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-black"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name*
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                    className="w-full bg-transparent px-4 py-3 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-black"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Example@gmail.com"
                                required
                                className="w-full bg-transparent px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-black"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone*
                            </label>
                            <div className="flex gap-2">
                                <select
                                    className="px-4 py-3 bg-transparent bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all w-32 text-black"
                                >
                                    <option value="+1">:us: +1</option>
                                    <option value="+44">:gb: +44</option>
                                    <option value="+92">:flag-pk: +92</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="United States"
                                    required
                                    className="flex-1 px-4 py-3 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-black"
                                />
                            </div>
                        </div>

                        {/* Select Budget */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Budget*
                            </label>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer text-black"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 1rem center'
                                }}
                            >
                                <option value="">Please Select</option>
                                <option value="<5000">Less than $5,000</option>
                                <option value="5000-10000">$5,000 - $10,000</option>
                                <option value="10000-25000">$10,000 - $25,000</option>
                                <option value="25000+">$25,000+</option>
                            </select>
                        </div>

                        {/* Project Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                DESCRIBE YOUR PROJECT (Search field)*
                            </label>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer text-black"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 1rem center'
                                }}
                            >
                                <option value="">Please Select</option>
                                <option value="website">Website Development</option>
                                <option value="mobile">Mobile App Development</option>
                                <option value="branding">Branding & Design</option>
                                <option value="marketing">Digital Marketing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What else should we know?*
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your product, how you heard about us, where are you located or just say hi"
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-black"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button
                                link="#"
                                text="Submit"
                                className="!px-8 !bg-primary text-white !py-3"
                                transitionClassName="!via-white/30"
                            />
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
