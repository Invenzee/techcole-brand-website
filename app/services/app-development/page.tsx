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
    { id: 1, title: "Concept Discovery & Project Planning", description: "We analyze your app idea, users, and goals to define features and the development roadmap." },
    { id: 2, title: "Experience Design & Prototyping", description: "Our designers create intuitive layouts and user flows that make the app simple and engaging." },
    { id: 3, title: "Application Development", description: "Our developers build scalable apps using modern frameworks for smooth and reliable performance." },
    { id: 4, title: "Quality Testing & Optimization", description: "We test the app thoroughly to ensure stability, security, and seamless functionality." },
    { id: 5, title: "App Launch & Platform Deployment", description: "We prepare and publish the app on the appropriate platforms for a smooth launch." },
    { id: 6, title: "Maintenance & Enhancements", description: "We provide updates, monitoring, and improvements to keep your app secure and optimized." },
];

const cards = [
    {
        id: 1,
        number: "01",
        title: "Custom Built Mobile Applications",
        image: "/services/p-1.png",
        column: 1,
        className: "h-[240px]",
    },
    {
        id: 4,
        number: "05",
        title: "User Focused App Design",
        image: "/services/p-4.png",
        column: 1,
        className: "h-[350px]",
    },
    {
        id: 2,
        number: "02",
        title: "Scalable High Performance Apps",
        image: "/services/p-2.png",
        column: 2,
        className: "h-[350px] mt-20",
    },
    {
        id: 5,
        number: "03",
        title: "Secure Reliable App Architecture",
        image: "/services/p-5.png",
        column: 3,
        className: "h-[240px] mt-8",
    },
    {
        id: 3,
        number: "04",
        title: "Cross Platform Development Expertise",
        image: "/services/p-3.png",
        column: 4,
        className: "h-[240px]",
    },
    {
        id: 7,
        number: "06",
        title: "End To End Development",
        image: "/services/p-6.png",
        column: 3,
        className: "h-[240px]",
    },
    {
        id: 6,
        number: "07",
        title: "Ongoing Updates And Support",
        image: "/services/p-7.png",
        column: 4,
        className: "h-[350px]",
    },
];

const faqData = [
    {
        id: 1,
        question: "What App Development Services Do You Offer?",
        answer: "We design and develop custom mobile applications for iOS, Android, and cross-platform environments. Our focus is on building scalable apps that deliver strong performance and smooth user experiences.",
    },
    {
        id: 2,
        question: "How Do You Ensure The Quality Of Your Work?",
        answer: "Our team follows structured development practices, including code reviews, performance testing, and usability checks. Every app is tested to ensure stability, security, and reliability before launch.",
    },
    {
        id: 3,
        question: "How Do You Handle Project Revisions Or Changes?",
        answer: "We work closely with clients throughout the development process and incorporate feedback at each stage. Adjustments and improvements are handled efficiently to meet project goals.",
    },
    {
        id: 4,
        question: "What If I'm Not Satisfied With The Final Result?",
        answer: "We work with you through review stages and revisions to refine the app. Our goal is to ensure the final product aligns with your vision and business needs.",
    },
    {
        id: 5,
        question: "Do You Provide Post-Launch Support?",
        answer: "Yes. We offer ongoing maintenance, updates, and performance monitoring to keep your app secure and running smoothly after launch.",
    },
    {
        id: 6,
        question: "What Is Your Typical Project Timeline?",
        answer: "Most app development projects take 4–8 weeks, depending on features and complexity. The process includes planning, design, development, testing, and deployment.",
    },
];

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="App Development" description="Our team starts by mapping the app’s core features and user flow before any development begins. They design, build, and test the application to ensure performance, security, and usability. After launch, we provide the final build ready for deployment and future scaling." image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Innovative and user-focused" description="At Techcole, we develop mobile applications that combine strong functionality with intuitive user experiences. Our team works closely with businesses to understand their goals, audience, and product vision before building scalable mobile solutions. " image="/about/hero-top-bg.png" />
            <WebDevProcess title="App Development" steps={steps} />
            <ServicePortfolio portfolioItems={portfolioItems} />
            <WhyChooseUs title="App Development" cards={cards} />
            <PricingSection />
            <FAQSection faqData={faqData}  />
        </main>
    )
}
