"use client"

import Hero from "@/app/components/Hero";
import LeftImageRightContentComponent from "@/app/components/LeftImageRightContentComponent";
import PricingSection from "@/app/components/services/PricingSection";
import ProcessSection from "@/app/components/ProcessSection";

export default function page() {
    return (
        <main className="w-full bg-white">
            <Hero title="SEO Services" description="PROFESSIONAL AND CUSTOMER-ORIENTED APPROACH TO BUSINESS, STARTING FROM FIRST CONTACT UNTIL PROJECT COMPLETION" image="/about/hero-top-bg.png" className="h-[330px]" />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Passionate and creative" description="Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions.Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions." image="/about/hero-top-bg.png" />
            <ProcessSection />
            <PricingSection />
        </main>
    )
}
