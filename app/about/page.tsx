"use client";

import LeftImageRightContentComponent from "../components/LeftImageRightContentComponent";
import AboutVision from "../components/AboutVision";
import Team from "../components/Team";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Community from "../components/Community";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";
import Hero from "../components/Hero";

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            <Hero title="About us" description="PROFESSIONAL AND CUSTOMER-ORIENTED APPROACH TO BUSINESS, STARTING FROM FIRST CONTACT UNTIL PROJECT COMPLETION" image="/about/hero-top-bg.png" className="h-[265px]" />
            <About />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Passionate and creative" description="Techcole believes in the power of collaboration and strives to create an environment of shared success. Our experienced team of professionals is dedicated to delving into the complexities of business challenges and finding creative solutions." image="/about/hero-top-bg.png" />
            <AboutVision />
            <Team />
            <Services />
            <Testimonials />
            <Community />
            <ContactForm />
        </main>
    )
}
