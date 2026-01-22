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

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="Website Development" description="PROFESSIONAL AND CUSTOMER-ORIENTED APPROACH TO BUSINESS, STARTING FROM FIRST CONTACT UNTIL PROJECT COMPLETION" image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Passionate and creative" description="Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions." image="/about/hero-top-bg.png" className="" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Passionate and creative" description="Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions." image="/about/hero-top-bg.png" className="lg:flex-row-reverse" />
            <WebDevProcess />
            <ServicePortfolio portfolioItems={portfolioItems} />
            <WhyChooseUs />
            <PricingSection />
            <FAQSection />
        </main>
    )
}
