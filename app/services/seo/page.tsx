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
        title: "Data Driven SEO Strategies",
        image: "/services/p-1.png",
        column: 1,
        className: "h-[240px]",
    },
    {
        id: 4,
        number: "05",
        title: "Sustainable Organic Traffic Growth",
        image: "/services/p-4.png",
        column: 1,
        className: "h-[350px]",
    },
    {
        id: 2,
        number: "02",
        title: "Comprehensive Technical SEO Optimization",
        image: "/services/p-2.png",
        column: 2,
        className: "h-[350px] mt-20",
    },
    {
        id: 5,
        number: "03",
        title: "Targeted Keyword Research Approach",
        image: "/services/p-5.png",
        column: 3,
        className: "h-[240px] mt-8",
    },
    {
        id: 3,
        number: "04",
        title: "Search Focused Content Optimization",
        image: "/services/p-3.png",
        column: 4,
        className: "h-[240px]",
    },
    {
        id: 7,
        number: "06",
        title: "Transparent SEO Performance Reporting",
        image: "/services/p-6.png",
        column: 3,
        className: "h-[240px]",
    },
    {
        id: 6,
        number: "07",
        title: "Long Term Ranking Improvements",
        image: "/services/p-7.png",
        column: 4,
        className: "h-[350px]",
    },
];

const faqData = [
    {
        id: 1,
        question: "What SEO Services Do You Offer?",
        answer: "We provide keyword research, technical SEO, on-page optimization, and link-building strategies. Our goal is to improve search rankings and increase qualified organic traffic.",
    },
    {
        id: 2,
        question: "How Do You Improve Search Rankings?",
        answer: "We optimize website structure, content, and keywords based on search engine best practices. Continuous analysis and updates help maintain and improve ranking performance.",
    },
    {
        id: 3,
        question: "How Do You Handle SEO Strategy Changes?",
        answer: "SEO strategies evolve with search engine updates and performance data. We regularly adjust optimization tactics to maintain visibility and improve results.",
    },
    {
        id: 4,
        question: "What If My Website Isn’t Ranking Well?",
        answer: "We conduct a detailed SEO audit to identify technical and content issues. From there, we implement improvements to strengthen rankings and search visibility.",
    },
    {
        id: 5,
        question: "Do You Provide Ongoing SEO Support?",
        answer: "Yes, SEO requires continuous monitoring, optimization, and reporting. We track rankings, traffic, and performance to ensure long-term growth.",
    },
    {
        id: 6,
        question: "How Long Does SEO Take To Show Results?",
        answer: "SEO is a long-term strategy that typically shows measurable improvements within a few months. Consistent optimization helps maintain sustainable search visibility.",
    },
];

const steps = [
    {
        title: "Discovery & Analysis:",
        description:
            "We begin by understanding your business, target audience, and competitors. This research helps us identify the most valuable keywords and opportunities to improve your website’s search performance.",
    },
    {
        title: "Strategy Development:",
        description:
            "Our team develops a tailored SEO strategy that focuses on keyword targeting, technical improvements, and content optimization. Every step is aligned with search engine best practices and your business goals.",
    },
    {
        title: "Implementation & Optimization:",
        description:
            "We optimize website structure, content, and technical elements to improve search engine visibility. Continuous improvements ensure your site remains competitive in evolving search algorithms.",
    },
    {
        title: "Monitoring & Reporting:",
        description:
            "We track rankings, traffic, and user behavior to measure the impact of our SEO efforts. Regular reporting and insights help refine strategies and ensure consistent performance improvements.",
    },
];

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="SEO Services" description="SEO starts with a detailed review of your website, keywords, and competitors. We then optimize site structure, content, and technical elements to improve search visibility. Rankings and traffic are monitored continuously to refine the strategy." image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Data-driven search specialists" description="At Techcole, we help businesses improve online visibility through strategic SEO. Our team focuses on increasing organic traffic, improving search rankings, and attracting the right audience with smart optimization, keyword-focused content, and continuous performance tracking." image="/about/hero-top-bg.png" />
            <ProcessSection steps={steps} />
            <WhyChooseUs title="SEO Services" cards={cards} />
            <PricingSection />
            <FAQSection faqData={faqData} />
        </main>
    )
}
