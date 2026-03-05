"use client"

import FAQSection from "@/app/components/FAQSection";
import Hero from "@/app/components/Hero";
import LeftImageRightContentComponent from "@/app/components/LeftImageRightContentComponent";
import PricingSection from "@/app/components/services/PricingSection";
import ServicePortfolio from "@/app/components/services/ServicePortfolio";
import WebDevProcess from "@/app/components/WebDevProcess";
import WhyChooseUs from "@/app/components/WhyChooseUs";

const portfolioItems = [
    { id: 1, image: '/portfolio/web-development/web-page-1.png' },
    { id: 2, image: '/portfolio/web-development/web-page-2.jpg' },
    { id: 3, image: '/portfolio/web-development/web-page-3.jpg' },
    { id: 4, image: '/portfolio/web-development/web-page-4.jpg' },
    { id: 5, image: '/portfolio/web-development/web-page-5.jpg' },
    { id: 6, image: '/portfolio/web-development/web-page-6.jpg' },
    { id: 7, image: '/portfolio/web-development/web-page-7.jpg' },
    { id: 8, image: '/portfolio/web-development/web-page-8.jpg' },
    { id: 9, image: '/portfolio/web-development/web-page-9.jpg' },
    { id: 10, image: '/portfolio/web-development/web-page-10.jpg' },
    { id: 11, image: '/portfolio/web-development/web-page-11.jpg' },
    { id: 12, image: '/portfolio/web-development/web-page-12.jpg' },
];

const steps = [
    { id: 1, title: "Project Discovery & Planning", description: "We analyze your business goals, audience, and features to plan a clear website structure." },
    { id: 2, title: "Interface Design & Experience Mapping", description: "We design intuitive layouts and wireframes that make your website simple to navigate." },
    { id: 3, title: "Custom Website Development", description: "Our developers build fast, responsive websites using reliable technologies and clean code." },
    { id: 4, title: "Performance Testing & Review", description: "We test your website for speed, functionality, and compatibility across browsers and devices." },
    { id: 5, title: "Website Launch & Deployment", description: "Once approved, we deploy your website securely and ensure a smooth launch." },
    { id: 6, title: "Maintenance & Optimization", description: "We provide updates, monitoring, and improvements to keep your website secure and optimized." },
];

const cards = [
    {
        id: 1,
        number: "01",
        title: "Custom Built Business Websites",
        image: "/services/p-1.png",
        column: 1,
        className: "h-[240px] max-sm:h-[300px]",
    },
    {
        id: 4,
        number: "05",
        title: "Performance Focused Web Development",
        image: "/services/p-4.png",
        column: 1,
        className: "h-[350px] max-sm:h-[300px]",
    },
    {
        id: 2,
        number: "02",
        title: "Secure Scalable Website Architecture",
        image: "/services/p-2.png",
        column: 2,
        className: "h-[350px] mt-20 max-sm:h-[300px] max-sm:mt-0",
    },
    {
        id: 5,
        number: "03",
        title: "Conversion Driven Website Solutions",
        image: "/services/p-5.png",
        column: 3,
        className: "h-[240px] mt-8 max-sm:h-[300px] max-sm:mt-0",
    },
    {
        id: 3,
        number: "04",
        title: "Responsive Design Across Devices",
        image: "/services/p-3.png",
        column: 4,
        className: "h-[240px] max-sm:h-[300px]",
    },
    {
        id: 7,
        number: "06",
        title: "Optimized Websites For Speed",
        image: "/services/p-6.png",
        column: 3,
        className: "h-[240px] max-sm:h-[300px]",
    },
    {
        id: 6,
        number: "07",
        title: "Reliable Post Launch Support",
        image: "/services/p-7.png",
        column: 4,
        className: "h-[350px] max-sm:h-[300px]",
    },
];

const faqData = [
    {
        id: 1,
        question: "What Website Development Services Do You Offer?",
        answer: "We build custom business websites, eCommerce platforms, and CMS-based sites tailored to your goals. Our focus is on performance, usability, and scalable solutions.",
    },
    {
        id: 2,
        question: "How Do You Ensure The Quality Of Your Website Development Work?",
        answer: "We start by understanding your brand, audience, and industry. Our designers create original concepts and refine them through structured revisions, ensuring the final website is polished, versatile, and aligned with your business goals.",
    },
    {
        id: 3,
        question: "How Do You Handle Project Revisions Or Changes?",
        answer: "We collaborate closely with clients during development and incorporate feedback throughout the process. Revisions are handled efficiently to ensure the final website meets your expectations.",
    },
    {
        id: 4,
        question: "What If I'm Not Satisfied With The Final Result?",
        answer: "We work with you through review stages and revisions to refine the website. Our goal is to ensure the final product aligns with your vision and business needs.",
    },
    {
        id: 5,
        question: "Do You Provide Post-Launch Support?",
        answer: "Yes. We provide ongoing maintenance, updates, and technical support to keep your website secure and performing smoothly after launch.",
    },
    {
        id: 6,
        question: "What Is Your Typical Project Timeline?",
        answer: "Most websites are completed within 2–4 weeks, depending on complexity and features. The timeline includes design, development, testing, and deployment.",
    },
];


export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="Website Development" description="We start by understanding your business goals and structuring the website around what your users actually need. Our team designs, develops, and tests the site to ensure it is fast, responsive, and easy to manage. " image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Engineered for digital growth" description="At Techcole, we build websites that do more than just look good—they work for your business. Our development team focuses on performance, usability, and scalability to create websites that attract visitors and convert them into customers. From custom builds to optimized business websites, we develop digital platforms that are fast, secure, and designed for long-term growth." image="/about/hero-top-bg.png" className="" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Engineered for digital growth" description="At Techcole, we build websites that do more than just look good—they work for your business. Our development team focuses on performance, usability, and scalability to create websites that attract visitors and convert them into customers. From custom builds to optimized business websites, we develop digital platforms that are fast, secure, and designed for long-term growth." image="/about/hero-top-bg.png" className="lg:flex-row-reverse" />
            <WebDevProcess title="Website Development" steps={steps} />
            <ServicePortfolio portfolioItems={portfolioItems} />
            <WhyChooseUs title="Website Development" cards={cards} />
            <PricingSection />
            <FAQSection faqData={faqData} />
        </main>
    )
}
