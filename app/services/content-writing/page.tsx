"use client"

import FAQSection from "@/app/components/FAQSection";
import Hero from "@/app/components/Hero";
import LeftImageRightContentComponent from "@/app/components/LeftImageRightContentComponent";
import PricingSection from "@/app/components/services/PricingSection";
import ProcessSection from "@/app/components/ProcessSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";

const cards = [
    {
        id: 1,
        number: "01",
        title: "Strategic Content That Converts",
        image: "/services/p-1.png",
        column: 1,
        className: "h-[240px]",
    },
    {
        id: 4,
        number: "05",
        title: "Clear Engaging Brand Messaging",
        image: "/services/p-4.png",
        column: 1,
        className: "h-[350px]",
    },
    {
        id: 2,
        number: "02",
        title: "SEO Focused Content Writing",
        image: "/services/p-2.png",
        column: 2,
        className: "h-[350px] mt-20",
    },
    {
        id: 5,
        number: "03",
        title: "Consistent Voice Across Platforms",
        image: "/services/p-5.png",
        column: 3,
        className: "h-[240px] mt-8",
    },
    {
        id: 3,
        number: "04",
        title: "Research Driven Content Creation",
        image: "/services/p-3.png",
        column: 4,
        className: "h-[240px]",
    },
    {
        id: 7,
        number: "06",
        title: "Content Aligned With Strategy",
        image: "/services/p-6.png",
        column: 3,
        className: "h-[240px]",
    },
    {
        id: 6,
        number: "07",
        title: "Reliable Ongoing Content Support",
        image: "/services/p-7.png",
        column: 4,
        className: "h-[350px]",
    },
];

const faqData = [
    {
        id: 1,
        question: "What Content Writing Services Do You Offer?",
        answer: "We provide website copy, blog articles, SEO content, product descriptions, and marketing content. Each piece is written to match your brand voice and engage your audience.",
    },
    {
        id: 2,
        question: "How Do You Ensure The Quality Of Your Content?",
        answer: "Our writers follow a structured process that includes research, editing, and proofreading. Every piece is reviewed to ensure clarity, accuracy, and consistency with your brand.",
    },
    {
        id: 3,
        question: "How Do You Handle Revisions Or Content Changes?",
        answer: "We collaborate with clients during the writing process and refine content based on feedback. Revisions ensure the final content aligns with your messaging and goals.",
    },
    {
        id: 4,
        question: "What If I'm Not Satisfied With The Final Content?",
        answer: "We work closely with you through feedback and revision stages. Adjustments are made to ensure the content meets your expectations before final delivery.",
    },
    {
        id: 5,
        question: "Do You Provide Ongoing Content Support?",
        answer: "Yes. We can provide ongoing blog writing, website updates, and marketing content. This helps keep your brand messaging fresh and consistent.",
    },
    {
        id: 6,
        question: "What Is Your Typical Content Delivery Timeline?",
        answer: "Most content projects are completed within 2–5 business days, depending on the length and scope. Larger content projects may require additional planning and review time.",
    },
];

const steps = [
    {
        title: "Discovery & Analysis:",
        description:
            "We begin by understanding your brand, audience, and business goals. This allows us to identify the right tone, messaging, and content strategy for your project.",
    },
    {
        title: "Strategy Development:",
        description:
            "Our team develops a clear content plan that aligns with your brand voice and marketing objectives. We focus on creating content that is informative, engaging, and relevant.",
    },
    {
        title: "Implementation & Optimization:",
        description:
            "Our writers produce well-researched and structured content designed for readability and performance. We also refine and optimize the content to ensure it delivers value.",
    },
    {
        title: "Monitoring & Reporting:",
        description:
            "We review content performance and make improvements where necessary. This helps ensure your content remains effective and continues to support your business growth.",
    },
];

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="Content Writing" description="We begin by understanding your brand voice, audience, and the purpose of the content. Our writers then craft clear, structured copy that communicates your message effectively. Every piece is reviewed and refined before final delivery." image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Content that drives connection" description="At Techcole, we craft clear, purposeful content that helps businesses communicate their message effectively. Our writers focus on creating well-structured, brand-aligned content that engages audiences and supports marketing goals across websites, blogs, and digital platforms." image="/about/hero-top-bg.png" />
            <ProcessSection steps={steps} />
            <WhyChooseUs title="Content Writing" cards={cards} />
            <PricingSection />
            <FAQSection faqData={faqData} />
        </main>
    )
}
