import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check } from 'lucide-react';
import Button from '../global/Button';

interface Feature {
    text: string;
}

interface PricingPlan {
    id: string;
    title: string;
    price: number;
    features: Feature[];
    isHighlighted: boolean;
    badge?: string;
}

const pricingPlans: PricingPlan[] = [
    {
        id: 'basic',
        title: 'Basic Website Package',
        price: 399,
        isHighlighted: false,
        features: [
            { text: 'Hover Effects' },
            { text: '2 Banner Designs' },
            { text: 'Sliding Banner' },
            { text: '2 Stock Photos (You can provide us more)' },
            { text: 'Contact/Inquiry Form' },
            { text: '6 Revisions' },
            { text: 'Complete W3C Certified HTML' },
        ],
    },
    {
        id: 'ecommerce',
        title: 'Ecommerce Website Package',
        price: 569,
        isHighlighted: true,
        badge: 'MOST POPULAR',
        features: [
            { text: 'E-Commerce Website Design and Development' },
            { text: 'High-end Theme-Based Design' },
            { text: 'Sliding Banner' },
            { text: '5 Stock Photos' },
            { text: '10 Revisions' },
            { text: 'More Features' },
        ],
    },
    {
        id: 'professional',
        title: 'Professional Website Package',
        price: 849,
        isHighlighted: false,
        features: [
            { text: 'Up to 10 Pages Website Design' },
            { text: '3 Stock Photos' },
            { text: '3 Banner Designs' },
            { text: 'Sliding Banner' },
            { text: 'Hover Effects' },
            { text: 'Content Management System (WordPress)' },
            { text: 'Complete Deployment' },
        ],
    },
];

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative p-8 transition-all duration-300 border-1 border-gray-200 ${plan.isHighlighted
                ? 'bg-red-600 text-white scale-105 z-10'
                : 'bg-white text-gray-800'
                }`}
        >
            <div className="text-left mb-6">
                <h3
                    className={`font-medium text-xl uppercase  ${plan.isHighlighted ? 'text-white' : 'text-red-600'
                        }`}
                >
                    {plan.title}
                </h3>
                <div className="flex items-center justify-start">
                    <span className={`text-6xl font-bold tracking-tighter ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                        $ {plan.price}
                    </span>
                </div>
            </div>

            <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx + index * 0.15 }}
                        className="flex items-start gap-3"
                    >
                        <div
                            className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.isHighlighted ? 'bg-white/20' : 'bg-red-100'
                                }`}
                        >
                            <div
                                className={`w-2 h-2 rounded-full ${plan.isHighlighted ? 'bg-white' : 'bg-red-600'
                                    }`}
                            />
                        </div>
                        <p
                            className={`text-md leading-relaxed ${plan.isHighlighted ? 'text-white' : 'text-gray-700'
                                }`}
                        >
                            {feature.text}
                        </p>
                    </motion.div>
                ))}
            </div>

            <Button link="/about" text="Live Chat" icon={MessageCircle} className={`${!plan.isHighlighted ? "!bg-primary text-white" : ""} `} transitionClassName="!via-white/30" />
        </motion.div>
    );
};

export default function PricingSection() {
    return (
        <div className="min-h-screen bg-[url('/services/p-bg.png')] bg-contain bg-center bg-no-repeat py-20 px-4">
            <div className="max-w-7xl mx-auto max-sm:px-4">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-sm:text-start mb-16"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-red-600 font-medium text-2xl uppercase mb-3 max-sm:text-xl"
                    >
                        EXCLUSIVE PRICING
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 max-sm:text-4xl"
                    >
                        Decide which pricing{' '}
                        <span className="text-red-600">plan</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 max-sm:text-4xl"
                    >
                        is best for you
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={plan.id} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}