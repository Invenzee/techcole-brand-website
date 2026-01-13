import BlogHero from "@/app/components/blog/BlogHero";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogSubscribe from "@/app/components/blog/BlogSubscribe";
import DarkCTA from "@/app/components/blog/DarkCTA";
import Testimonials from "../components/Testimonials";
import Community from "../components/Community";
import ContactForm from "../components/ContactForm";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            <BlogHero />
            <BlogGrid />
            <BlogSubscribe />
            <DarkCTA />
            <Testimonials />
            <Community />
            <ContactForm />
        </main>
    );
}
