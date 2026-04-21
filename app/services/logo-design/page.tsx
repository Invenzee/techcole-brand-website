"use client"

import FAQSection from "@/app/components/FAQSection";
import Hero from "@/app/components/Hero";
import LeftImageRightContentComponent from "@/app/components/LeftImageRightContentComponent";
import PricingSection from "@/app/components/services/PricingSection";
import ServicePortfolio from "@/app/components/services/ServicePortfolio";
import WhyChooseUs from "@/app/components/WhyChooseUs";

const portfolioItems = [
    { id: 1, image: '/portfolio/logo-design/logo-1.jpg' },
    { id: 2, image: '/portfolio/logo-design/logo-2.jpg' },
    { id: 3, image: '/portfolio/logo-design/logo-3.jpg' },
    { id: 4, image: '/portfolio/logo-design/logo-4.jpg' },
    { id: 5, image: '/portfolio/logo-design/logo-5.jpg' },
    { id: 6, image: '/portfolio/logo-design/logo-6.jpg' },
    { id: 7, image: '/portfolio/logo-design/logo-7.jpg' },
    { id: 8, image: '/portfolio/logo-design/logo-8.jpg' },
    { id: 9, image: '/portfolio/logo-design/logo-9.jpg' },
    { id: 10, image: '/portfolio/logo-design/logo-10.jpg' },
    { id: 11, image: '/portfolio/logo-design/logo-11.jpg' },
    { id: 12, image: '/portfolio/logo-design/logo-12.jpg' },
];

const cards = [
    {
        id: 1,
        number: "01",
        title: "Strategic Brand Identity Design",
        image: "/services/p-1.png",
        column: 1,
        className: "h-[240px]",
    },
    {
        id: 4,
        number: "05",
        title: "Memorable Logos That Convert",
        image: "/services/p-4.png",
        column: 1,
        className: "h-[350px]",
    },
    {
        id: 2,
        number: "02",
        title: "Custom Designed Brand Marks",
        image: "/services/p-2.png",
        column: 2,
        className: "h-[350px] mt-20",
    },
    {
        id: 5,
        number: "03",
        title: "Versatile Logos For Growth",
        image: "/services/p-5.png",
        column: 3,
        className: "h-[240px] mt-8",
    },
    {
        id: 3,
        number: "04",
        title: "Research Driven Design Process",
        image: "/services/p-3.png",
        column: 4,
        className: "h-[240px]",
    },
    {
        id: 7,
        number: "06",
        title: "Timeless And Scalable Logos",
        image: "/services/p-6.png",
        column: 3,
        className: "h-[240px]",
    },
    {
        id: 6,
        number: "07",
        title: "Collaborative Creative Design Approach",
        image: "/services/p-7.png",
        column: 4,
        className: "h-[350px]",
    },
];

const faqData = [
    {
        id: 1,
        question: "What Services Does Your Agency Offer?",
        answer: "Techcole provides custom logo design services for startups, growing businesses, and established brands. Our process focuses on creating unique, professional logos that reflect your brand identity and work seamlessly across digital and print platforms.",
    },
    {
        id: 2,
        question: "How Do You Ensure The Quality Of Your Work?",
        answer: "We start by understanding your brand, audience, and industry. Our designers create original concepts and refine them through structured revisions, ensuring the final logo is polished, versatile, and aligned with your business goals.",
    },
    {
        id: 3,
        question: "How Do You Handle Project Revisions Or Changes?",
        answer: "Every package includes multiple revision rounds so you can refine the design. We adjust elements like colors, typography, and layout based on your feedback until the logo matches your vision.",
    },
    {
        id: 4,
        question: "What If I'm Not Satisfied With The Final Result?",
        answer: "Our collaborative process allows feedback throughout the project, ensuring the final design meets your expectations. We work closely with you during revisions to reach a result you are happy with.",
    },
    {
        id: 5,
        question: "Do You Provide Post-Launch Support?",
        answer: "Yes. We deliver your logo in all essential formats for web, social media, and print. If you need additional branding assets or adjustments later, our team can assist.",
    },
    {
        id: 6,
        question: "What Is Your Typical Project Timeline?",
        answer: "Most logo design projects are completed within 5–10 business days, depending on the package and revision process. We begin with concept creation and refine the design based on your feedback.",
    },
];

const pricingPlans = [
    {
        id: 'starter',
        title: 'Basic Logo',
        tier: 'STARTER',
        description: 'Great for startups and solo businesses needing a clean, professional logo fast.',
        originalPrice: 199,
        price: 79,
        isHighlighted: false,
        features: [
            { text: '2 Logo Concepts' },
            { text: '1 Logo Style (Wordmark or Icon)' },
            { text: '3 Revisions' },
            { text: 'JPG & PNG Files' },
            { text: 'Transparent Background' },
            { text: 'Black & White Version' },
            { text: '100% Ownership Rights' },
        ],
        deliveryTime: '3-Day Delivery',
    },
    {
        id: 'professional',
        title: 'Premium Logo',
        tier: 'PROFESSIONAL',
        badge: 'MOST POPULAR',
        description: 'The complete logo package for growing US businesses that want to stand out.',
        originalPrice: 499,
        price: 199,
        isHighlighted: true,
        features: [
            { text: '5 Logo Concepts' },
            { text: 'All Logo Styles (Wordmark, Icon, Combo)' },
            { text: 'Unlimited Revisions' },
            { text: 'AI, EPS, SVG, PNG, JPG Files' },
            { text: 'Transparent & White Background' },
            { text: 'Color + Black & White Versions' },
            { text: 'Brand Color Palette Included' },
            { text: 'Font Recommendation Guide' },
            { text: 'Social Media Logo Sizes' },
            { text: '100% Ownership Rights' },
        ],
        deliveryTime: '5-Day Delivery',
    },
    {
        id: 'enterprise',
        title: 'Brand Logo Suite',
        tier: 'ENTERPRISE',
        description: 'Full logo system for established US companies scaling their brand presence.',
        originalPrice: 999,
        price: 449,
        isHighlighted: false,
        features: [
            { text: 'Everything in Premium Logo' },
            { text: 'Logo Variations (Horizontal, Stacked, Icon-only)' },
            { text: 'Favicon Design' },
            { text: 'Watermark Version' },
            { text: 'Full Brand Style Guide (PDF)' },
            { text: 'Business Card Design Included' },
            { text: 'Letterhead Design Included' },
            { text: 'Email Signature Design' },
            { text: 'Dedicated Designer Assigned' },
            { text: '100% Ownership Rights' },
        ],
        deliveryTime: '7-Day Delivery',
    },
];

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="Logo Design" description="We study your brand, design initial logo concepts, and refine the chosen direction through feedback. The final delivery includes a complete logo package ready for both digital and print use." image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Where strategy meets design" description="At Techcole, we believe a logo is more than just a graphic, it’s the visual foundation of your brand. Our design team works closely with businesses to understand their story, values, and audience before crafting a logo that truly represents them. Whether you’re launching a new brand or refreshing an existing identity, our goal is to design a logo that makes a strong and lasting impression." image="/about/hero-top-bg.png" />
            <ServicePortfolio portfolioItems={portfolioItems} />
            <WhyChooseUs title="Logo Design" cards={cards} />
            <PricingSection pricingPlans={pricingPlans} />
            <FAQSection faqData={faqData} />
        </main>
    )
}
