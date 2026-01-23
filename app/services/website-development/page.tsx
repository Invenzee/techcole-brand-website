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
    { id: 1, title: "Requirement Analysis & Planning", description: "We provide everything you need in one convenient place." },
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
        title: "Experienced Web Developers",
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

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="Website Development" description="PROFESSIONAL AND CUSTOMER-ORIENTED APPROACH TO BUSINESS, STARTING FROM FIRST CONTACT UNTIL PROJECT COMPLETION" image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Passionate and creative" description="Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions." image="/about/hero-top-bg.png" className="" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Passionate and creative" description="Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions." image="/about/hero-top-bg.png" className="lg:flex-row-reverse" />
            <WebDevProcess title="Website Development" steps={steps} />
            <ServicePortfolio portfolioItems={portfolioItems} />
            <WhyChooseUs title="Website Development" cards={cards} />
            <PricingSection />
            <FAQSection />
        </main>
    )
}
