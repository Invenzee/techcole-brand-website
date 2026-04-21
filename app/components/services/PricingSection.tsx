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
    // New fields for app development pricing
    tier?: string;
    subtitle?: string;
    description?: string;
    originalPrice?: number;
    deliveryTime?: string;
}

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
            {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-semibold uppercase">
                    {plan.badge}
                </div>
            )}

            <div className="text-left mb-6">
                {plan.tier && (
                    <p className={`text-sm font-semibold uppercase mb-1 ${plan.isHighlighted ? 'text-white/80' : 'text-red-600'}`}>
                        {plan.tier}
                    </p>
                )}
                <h3
                    className={`font-medium text-xl ${plan.isHighlighted ? 'text-white' : 'text-gray-900'
                        }`}
                >
                    {plan.title}
                </h3>
                {plan.description && (
                    <p className={`text-sm mt-2 leading-relaxed ${plan.isHighlighted ? 'text-white/80' : 'text-gray-600'}`}>
                        {plan.description}
                    </p>
                )}
                
                <div className="mt-4">
                    {plan.originalPrice && (
                        <span className={`text-2xl line-through ${plan.isHighlighted ? 'text-white/60' : 'text-gray-400'}`}>
                            ${plan.originalPrice.toLocaleString()}
                        </span>
                    )}
                    <div className="flex items-baseline gap-1">
                        <span className={`text-5xl font-bold tracking-tighter ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                            ${plan.price.toLocaleString()}
                        </span>
                    </div>
                    <p className={`text-xs mt-1 ${plan.isHighlighted ? 'text-white/80' : 'text-gray-500'}`}>
                        One-time · No hidden fees
                    </p>
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
                            className={`text-sm leading-relaxed ${plan.isHighlighted ? 'text-white' : 'text-gray-700'
                                }`}
                        >
                            {feature.text}
                        </p>
                    </motion.div>
                ))}
            </div>

            {plan.deliveryTime && (
                <p className={`text-sm font-semibold mb-4 ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.deliveryTime}
                </p>
            )}

            <Button link="/contact" text={plan.isHighlighted ? "Get Started Now" : "Get Started"} icon={MessageCircle} className={`${!plan.isHighlighted ? "!bg-primary text-white" : ""} `} transitionClassName="!via-white/30" />
        </motion.div>
    );
};

export default function PricingSection({ pricingPlans = [] }: { pricingPlans?: PricingPlan[] }) {
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