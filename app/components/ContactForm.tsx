"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        budget: "",
        projectType: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    formSource: "Homepage - Let's Get Started"
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: "success", message: "Thank you! Your message has been sent successfully." });
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    budget: "",
                    projectType: "",
                    message: ""
                });
            } else {
                setSubmitStatus({ type: "error", message: data.message || "Something went wrong. Please try again." });
            }
        } catch (error) {
            setSubmitStatus({ type: "error", message: "Failed to send message. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full bg-white py-24 relative">
            <div className="max-w-[800px] mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <h2 className="text-4xl md:text-6xl text-black font-semibold mb-4 leading-tight">
                        Let's get <span className="text-primary">started!</span>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl px-4">
                        We've Been Awarded Plenty for the Milestones<br className="hidden md:block" />
                        We Have Achieved
                    </p>
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
                                <option value="+1">US: +1</option>
                                <option value="+44">GB: +44</option>
                                <option value="+92">PK: +92</option>
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

                    {/* Submit Status Message */}
                    {submitStatus && (
                        <div className={`p-4 rounded-lg ${submitStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {submitStatus.message}
                        </div>
                    )}
                    
                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="relative overflow-hidden px-8 py-3 bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="relative z-10">
                                {isSubmitting ? "Sending..." : "Submit"}
                            </span>
                            <span className="absolute inset-0 bg-white/30 translate-y-full transition-transform duration-300 hover:translate-y-0"></span>
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}