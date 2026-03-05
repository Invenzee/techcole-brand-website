"use client"

import Hero from "@/app/components/Hero";
import LeftImageRightContentComponent from "@/app/components/LeftImageRightContentComponent";
import PricingSection from "@/app/components/services/PricingSection";
import ProcessSection from "@/app/components/ProcessSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import FAQSection from "@/app/components/FAQSection";

const cards = [
    {
        id: 1,
        number: "01",
        title: "Results Driven Social Strategies",
        image: "/services/p-1.png",
        column: 1,
        className: "h-[240px]",
    },
    {
        id: 4,
        number: "05",
        title: "Audience Focused Content Creation",
        image: "/services/p-4.png",
        column: 1,
        className: "h-[350px]",
    },
    {
        id: 2,
        number: "02",
        title: "Consistent Brand Voice Management",
        image: "/services/p-2.png",
        column: 2,
        className: "h-[350px] mt-20",
    },
    {
        id: 5,
        number: "03",
        title: "Data Led Campaign Optimization",
        image: "/services/p-5.png",
        column: 3,
        className: "h-[240px] mt-8",
    },
    {
        id: 3,
        number: "04",
        title: "Platform Specific Growth Strategies",
        image: "/services/p-3.png",
        column: 4,
        className: "h-[240px]",
    },
    {
        id: 7,
        number: "06",
        title: "Creative Content That Engages",
        image: "/services/p-6.png",
        column: 3,
        className: "h-[240px]",
    },
    {
        id: 6,
        number: "07",
        title: "Transparent Performance Tracking Reports",
        image: "/services/p-7.png",
        column: 4,
        className: "h-[350px]",
    },
];

const faqData = [
    {
        id: 1,
        question: "What Social Media Marketing Services Do You Offer?",
        answer: "We provide social media strategy, content creation, account management, and paid social campaigns. Our focus is building engagement, growing followers, and strengthening your brand presence.",
    },
    {
        id: 2,
        question: "How Do You Develop A Social Media Strategy?",
        answer: "We analyze your brand, audience, and competitors to identify the right platforms and content approach. The strategy focuses on consistent posting, engagement, and measurable growth.",
    },
    {
        id: 3,
        question: "Can You Manage Our Social Media Accounts?",
        answer: "Yes, we handle content planning, posting, engagement, and performance tracking. This allows your brand to stay active while we focus on growth and audience interaction.",
    },
    {
        id: 4,
        question: "How Do You Measure Social Media Performance?",
        answer: "We track key metrics such as engagement, reach, follower growth, and conversions. These insights help refine campaigns and improve overall social media performance.",
    },
    {
        id: 5,
        question: "Do You Create Content For Social Media?",
        answer: "Yes, our team creates platform-specific content including posts, captions, and visuals. Everything is aligned with your brand voice and designed to engage your audience.",
    },
    {
        id: 6,
        question: "How Long Does Social Media Growth Take?",
        answer: "Social media growth is gradual and depends on strategy, content consistency, and audience engagement. Most brands begin seeing measurable improvements within a few months.",
    },
];

const steps = [
    {
        title: "Discovery & Analysis:",
        description:
            "We begin by understanding your brand, audience, and competitors. This helps us identify the right platforms, messaging, and content approach for your social media strategy.",
    },
    {
        title: "Strategy Development:",
        description:
            "Our team develops a clear content plan that aligns with your brand voice and marketing goals. We focus on creating posts and campaigns that encourage engagement and audience growth.",
    },
    {
        title: "Implementation & Optimization:",
        description:
            "We create and publish high-quality social media content designed to capture attention and encourage interaction. Content is optimized to improve reach, engagement, and brand visibility.",
    },
    {
        title: "Monitoring & Reporting:",
        description:
            "We track performance metrics such as engagement, reach, and audience growth. Regular insights help us refine strategies and improve the effectiveness of your social media campaigns.",
    },
];

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="Social Media Marketing" description="Effective social media starts with understanding your audience and the platforms they use most. Our team plans, creates, and schedules content that builds engagement and brand visibility. Performance is tracked and refined so campaigns keep improving over time." image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Strategy-driven social growth" description="At Techcole, we help businesses grow their presence through strategic social media marketing. Our team creates content and campaigns designed to attract attention, engage audiences, and strengthen brand visibility. From content planning to performance tracking, we focus on building a consistent social media presence that supports long-term business growth." image="/about/hero-top-bg.png" />
            <ProcessSection steps={steps} />
            <WhyChooseUs title="Social Media Marketing" cards={cards} />
            <PricingSection />
            <FAQSection faqData={faqData} />
        </main>
    )
}
