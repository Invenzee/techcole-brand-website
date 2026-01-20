"use client"

import Hero from "@/app/components/Hero";
import LeftImageRightContentComponent from "@/app/components/LeftImageRightContentComponent";
import PricingSection from "@/app/components/services/PricingSection";
import ServicePortfolio from "@/app/components/services/ServicePortfolio";

const portfolioItems = [
    { id: 1, image: '/services/p-1.png' },
    { id: 2, image: '/services/p-2.png' },
    { id: 3, image: '/services/p-3.png' },
    { id: 4, image: '/services/p-4.png' },
    { id: 5, image: '/services/p-5.png' },
    { id: 6, image: '/services/p-6.png' },
    { id: 7, image: '/services/p-7.png' },
];

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="Branding" description="PROFESSIONAL AND CUSTOMER-ORIENTED APPROACH TO BUSINESS, STARTING FROM FIRST CONTACT UNTIL PROJECT COMPLETION" image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Passionate and creative" description="Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions." image="/about/hero-top-bg.png" />
            <ServicePortfolio portfolioItems={portfolioItems} />
            <PricingSection />
        </main>
    )
}
