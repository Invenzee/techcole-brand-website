"use client"

import FAQSection from "@/app/components/FAQSection";
import Hero from "@/app/components/Hero";
import LeftImageRightContentComponent from "@/app/components/LeftImageRightContentComponent";
import PricingSection from "@/app/components/services/PricingSection";
import ServicePortfolio from "@/app/components/services/ServicePortfolio";
import WebDevProcess from "@/app/components/WebDevProcess";
import WhyChooseUs from "@/app/components/WhyChooseUs";

const portfolioItems = [
    { id: 1, image: '/services/p-1.png' },
    { id: 2, image: '/services/p-2.png' },
    { id: 3, image: '/services/p-3.png' },
    { id: 4, image: '/services/p-4.png' },
    { id: 5, image: '/services/p-5.png' },
    { id: 6, image: '/services/p-6.png' },
    { id: 7, image: '/services/p-7.png' },
];

const steps = [
    { id: 1, title: "Brand Discovery & Insight", description: "We provide everything you need in one convenient place." },
    { id: 2, title: "UI/UX Design & Wireframing", description: "We provide everything you need in one convenient place." },
    { id: 3, title: "Web Development", description: "We provide everything you need in one convenient place." },
    { id: 4, title: "Testing & Quality Assurance", description: "We provide everything you need in one convenient place." },
    { id: 5, title: "Deployment & Launch", description: "We provide everything you need in one convenient place." },
    { id: 6, title: "Maintenance & Optimization", description: "We provide everything you need in one convenient place." },
];

const cards = [
    {
        id: 1,
        number: "01",
        title: "Experienced Branding Lead",
        image: "/services/p-1.png",
        column: 1,
        className: "h-[240px]",
    },
    {
        id: 4,
        number: "05",
        title: "SEO-Optimized Development",
        image: "/services/p-4.png",
        column: 1,
        className: "h-[350px]",
    },
    {
        id: 2,
        number: "02",
        title: "Mobile-First & Responsive Design",
        image: "/services/p-2.png",
        column: 2,
        className: "h-[350px] mt-20",
    },
    {
        id: 5,
        number: "03",
        title: "Ongoing Support",
        image: "/services/p-5.png",
        column: 3,
        className: "h-[240px] mt-8",
    },
    {
        id: 3,
        number: "04",
        title: "Fast Loading & Secure Websites",
        image: "/services/p-3.png",
        column: 4,
        className: "h-[240px]",
    },
    {
        id: 7,
        number: "06",
        title: "Branding",
        image: "/services/p-6.png",
        column: 3,
        className: "h-[240px]",
    },
    {
        id: 6,
        number: "07",
        title: "Agile & Transparent Workflow",
        image: "/services/p-7.png",
        column: 4,
        className: "h-[350px]",
    },
];

const faqData = [
    {
        id: 1,
        question: "What Branding Services Do You Offer?",
        answer: "We create complete brand identities, including logo design, color palettes, typography, and visual guidelines. Our goal is to build a consistent brand that clearly represents your business.",
    },
    {
        id: 2,
        question: "How Do You Ensure Brand Consistency?",
        answer: "We develop clear brand guidelines that define colors, typography, and visual elements. This ensures your brand looks consistent across websites, marketing materials, and digital platforms.",
    },
    {
        id: 3,
        question: "Can You Rebrand An Existing Business?",
        answer: "Yes. We help businesses refresh outdated branding or reposition their identity. Our process keeps what works while improving clarity, relevance, and visual impact.",
    },
    {
        id: 4,
        question: "How Do You Handle Feedback Or Revisions?",
        answer: "Branding is collaborative. We refine concepts based on your feedback to ensure the final brand identity reflects your vision and business goals.",
    },
    {
        id: 5,
        question: "Will My Brand Work Across Platforms?",
        answer: "Yes. We design branding that works across websites, social media, print materials, and marketing campaigns while maintaining a consistent visual identity.",
    },
    {
        id: 6,
        question: "How Long Does A Branding Project Take?",
        answer: "Most branding projects take 1–3 weeks, depending on the scope and revisions. The timeline includes research, concept development, and final brand asset delivery.",
    },
];

const pricingPlans = [
    {
        id: 'starter',
        title: 'Basic Branding',
        tier: 'STARTER',
        description: 'Perfect for startups and small businesses ready to establish their identity.',
        originalPrice: 299,
        price: 149,
        isHighlighted: false,
        features: [
            { text: 'Logo Design (3 concepts)' },
            { text: 'Business Card Design' },
            { text: 'Brand Color Palette' },
            { text: 'Typography Selection' },
            { text: 'Letterhead Design' },
            { text: '3 Revisions' },
            { text: 'All Source Files (AI, PNG, SVG)' },
        ],
        deliveryTime: '5-Day Delivery',
    },
    {
        id: 'professional',
        title: 'Brand Identity',
        tier: 'PROFESSIONAL',
        badge: 'MOST POPULAR',
        description: 'Complete brand identity system for growing US businesses ready to dominate their market.',
        originalPrice: 799,
        price: 399,
        isHighlighted: true,
        features: [
            { text: 'Logo Design (5 concepts)' },
            { text: 'Full Brand Style Guide (PDF)' },
            { text: 'Social Media Kit (FB, IG, LinkedIn, X)' },
            { text: 'Business Stationery Set' },
            { text: 'Brand Patterns & Textures' },
            { text: 'Email Signature Design' },
            { text: 'Packaging Design (1 product)' },
            { text: 'Unlimited Revisions' },
            { text: 'All Source Files' },
        ],
        deliveryTime: '7-Day Delivery',
    },
    {
        id: 'enterprise',
        title: 'Brand Strategy',
        tier: 'ENTERPRISE',
        description: 'Full-scale branding for established US businesses scaling to new markets.',
        originalPrice: 1999,
        price: 999,
        isHighlighted: false,
        features: [
            { text: 'Everything in Brand Identity' },
            { text: 'Brand Strategy & Positioning' },
            { text: 'Competitor Analysis Report' },
            { text: 'Brand Voice & Messaging Guide' },
            { text: 'Website UI Design (up to 5 pages)' },
            { text: 'Marketing Collateral (brochure, flyer)' },
            { text: 'Product Packaging (up to 3 items)' },
            { text: 'Dedicated Brand Manager' },
            { text: '6-Month Priority Support' },
        ],
        deliveryTime: '10-Day Delivery',
    },
];

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="Branding" description="At Techcole, branding goes beyond logos and colors. From strategy to visual identity and digital presence, our team ensures every element of your brand works together to create an impactful experience." image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Strategic brand thinking" description="Techcole helps businesses build strong, recognizable brands that stand out in competitive markets. Our team focuses on strategy, visual identity, and consistency to shape how your brand is seen and remembered. From logos to brand systems, we create identities that communicate clearly, connect with audiences, and support long-term business growth." image="/about/hero-top-bg.png" />
            <WebDevProcess title="Branding" steps={steps} />
            <ServicePortfolio portfolioItems={portfolioItems} />
            <WhyChooseUs title="Branding" cards={cards} />
            <PricingSection pricingPlans={pricingPlans} />
            <FAQSection faqData={faqData} />
        </main>
    )
}
