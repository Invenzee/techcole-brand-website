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
            <Hero title="About us" description="We help ambitious brands transform ideas into powerful digital experiences. From first conversation to final launch, our approach is collaborative, transparent, and results-focused. At Techcole, we don’t just build websites; we build digital ecosystems that drive growth, engagement, and long-term success." image="/about/hero-top-bg.png" className="h-[265px]" />
            <About />
            <LeftImageRightContentComponent subtitle="Who We Are" title="Passionate. Strategic. Performance-Driven." description="Techcole is a full-service digital agency specializing in web design, web development, and growth-focused marketing.
We combine creativity with technical precision to deliver digital products that are visually compelling, functionally flawless, and built for measurable impact.
Our team thrives on solving complex business challenges through innovative thinking and data-backed execution. Whether you’re launching a startup or scaling an enterprise, we help you move forward with confidence.
" image="/about/hero-top-bg.png" />
            <AboutVision />
            <Team />
            <Services />
            <Testimonials />
            <Community />
            <ContactForm />
        </main>
    )
}
