import ContactHero from "../components/contact/ContactHero";
import ContactDetailsForm from "../components/contact/ContactDetailsForm";

export default function page() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <ContactDetailsForm />
            <img src="/contact/map.png" alt="" />
        </main>
    )
}
