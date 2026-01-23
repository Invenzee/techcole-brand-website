import ContactHero from "../components/contact/ContactHero";
import ContactDetailsForm from "../components/contact/ContactDetailsForm";
import ContactMap from "../components/contact/ContactMap";

export default function page() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <ContactDetailsForm />
            <ContactMap />
        </main>
    )
}
