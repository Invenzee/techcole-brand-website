"use client";

import AboutHero from "../components/AboutHero";
import AboutCompany from "../components/AboutCompany";
import AboutVision from "../components/AboutVision";
import Team from "../components/Team";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Community from "../components/Community";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            <AboutHero />
            <About />
            <AboutCompany />
            <AboutVision />
            <Team />
            <Services />
            <Testimonials />
            <Community />
            <ContactForm />
        </main>
    )
}
