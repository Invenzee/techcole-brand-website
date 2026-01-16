import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="w-full bg-white min-h-screen text-black pt-32 pb-20">
            <div className="max-w-[1140px] mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/50 to-primary/50 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                </div>

                <div className="space-y-12 text-gray-900 leading-relaxed">
                    <section>
                        <p className="text-lg">
                            This privacy statement describes how Techcole uses the personal information you provide on our website: www.techcole.com. It also describes the choices available to you regarding our use of your personal information and how you can access and update this information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">We collect the following personal information from you</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Contact Information such as name, email address, mailing address, phone number</li>
                            <li>Billing Information such as credit card number, and billing address</li>
                            <li>Preferences Information such as product wish lists, order history, marketing preferences</li>
                        </ul>
                        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-black">We also collect the following information from you</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Information about your business such as company name, company size, business type</li>
                            <li>As is true of most websites, we automatically gather information about your computer such as your IP address, browser type, referring/exit pages, and operating system.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">1. No Refunds for Services Rendered</h2>
                        <p className="mb-4">
                            Once a service has been rendered, initiated, or a deliverable has been provided (in part or in full), all sales are final and non-refundable. This includes any consultation, digital service, or labor-based engagement.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>For video animation packages no refund request will be entertained after the design of the storyboard.</li>
                            <li>All refund requests should be communicated to the support department. Techcole, based on the violation of your user agreement reserves the right to approve/disapprove your request on an individual case-to-case basis.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">2. Booking Fees / Deposits</h2>
                        <p>
                            All deposits or booking fees are non-refundable. They secure your spot in our calendar and compensate for administrative costs and lost opportunities due to the reserved time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">3. Cancellations</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Clients must notify us at least [X hours/days] in advance to reschedule or cancel a service.</li>
                            <li>Cancellations made within [X hours/days] of the scheduled time may be subject to a cancellation fee of [insert percentage or amount].</li>
                            <li>Missed appointments or “no-shows” are not eligible for a refund or reschedule.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">4. Dissatisfaction with Service</h2>
                        <p className="mb-4">
                            If you are dissatisfied with your service, we encourage you to contact us within [e.g., 3 business days] of completion. While we do not guarantee refunds, we are open to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Clarifying any misunderstandings</li>
                            <li>Offering minor revisions or follow-up support (at our discretion)</li>
                            <li>Applying a discount or credit toward a future service, where appropriate</li>
                        </ul>
                        <p>All resolutions are handled case-by-case and at our sole discretion.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">5. Digital Products or Downloads (if applicable)</h2>
                        <p>
                            Any downloadable or digital content provided as part of a service package is non-returnable and non-refundable once accessed or delivered.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">6. Chargebacks</h2>
                        <p>
                            We consider chargebacks a form of fraud. If you believe a charge is in error, please contact us first—we will work with you to resolve the matter. Unauthorized chargebacks may result in legal action and revocation of service access.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Choice/Opt-Out</h2>
                        <p className="mb-4">
                            You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or you can contact us at <Link href="mailto:info@techcole.com" className="text-primary hover:underline">info@techcole.com</Link>.
                        </p>
                        <p>
                            The account will be de-activated if a customer is non-responsive for more than 15 days and activation fee would be applied to proceed further.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Information Obtained from Third Parties</h2>
                        <p>
                            If you provide us personal information about others, or if others give us your information, we will only use that information for the specific reason for which it was provided to us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Information Sharing</h2>
                        <p className="mb-4">
                            We will share your personal information with third parties only in the ways that are described in this privacy statement. We do not sell your personal information to third parties. We may provide your personal information to companies that provide services to help us with our business activities such as shipping your order or offering customer service. These companies are authorized to use your personal information only as necessary to provide these services to us.
                        </p>
                        <p>
                            We may also disclose your personal information as required by law such as to comply with a subpoena, or similar legal process when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request, if Techcole is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our website of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information, to any other third party with your prior consent to do so.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Third Party E-Commerce Solutions Provider</h2>
                        <p>
                            Our shopping cart is hosted by our e-commerce solutions provider. They host our ordering system, and collect your billing information directly from you for the purpose of processing your order. This company does not use this information for any other purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Cookies and Other Tracking Technologies</h2>
                        <p className="mb-4">
                            We may use cookies, for example, to keep track of your preferences and profile information. Cookies are also used to collect general usage and volume statistical information that does not include personal information.
                        </p>
                        <p>
                            We use another company to place cookies on your computer to collect non-personally identifiable information to compile aggregated statistics for us about visitors to our site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Web beacons</h2>
                        <p className="mb-4">
                            Our Web pages contain electronic images known as Web beacons (sometimes called single-pixel gifs) and are used along with cookies to compile aggregated statistics to analyze how our site is used and may be used in some of our emails to let us know which emails and links have been opened by recipients. This allows us to gauge the effectiveness of our customer communications and marketing campaigns.
                        </p>
                        <p className="mb-4">
                            Our Web pages may also contain electronic images known as Web beacons (sometimes called single-pixel gifs) that are set by our third party partners. Web beacons are used along with cookies enabling our partners to compile aggregated statistics to analyze how our site is used.
                        </p>
                        <p>
                            We use a third party to gather information about how you and others use our website. For example, we will know how many users access a specific page and which links they clicked on. We use this aggregated information to understand and optimize how our site is used.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Security</h2>
                        <p className="mb-4">
                            When we collect personal information directly from you, we follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, we cannot guarantee its absolute security. If you have any questions about security on our website, you can contact us at <Link href="mailto:info@techcole.com" className="text-primary hover:underline">info@techcole.com</Link>.
                        </p>
                        <p>
                            In order to make a purchase from us, you must use our shopping cart provider to finalize and pay for your order. Its privacy statement and security practices will also apply to your information. We encourage you to read that privacy statement before providing your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Additional Policy Information</h2>
                        <p className="mb-4">
                            Our website includes Widgets, which are interactive mini-programs that run on our site to provide specific services from another company (e.g. displaying the news, opinions, music, etc.). Personal information, such as your email address, may be collected through the Widget. Cookies may also be set by the Widget to enable it to function properly. Information collected by this Widget is governed by the privacy policy of the company that created it.
                        </p>
                        <p>
                            Our website offers publicly accessible blogs or community forums. You should be aware that any information you provide in these areas may be read, collected, and used by others who access them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Correcting and Updating Your Personal Information</h2>
                        <p>
                            To review and update your personal information to ensure it is accurate, contact us at <Link href="mailto:info@techcole.com" className="text-primary hover:underline">info@techcole.com</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Notification of Privacy Statement Changes</h2>
                        <p>
                            We may update this privacy statement to reflect changes to our information practices. If we make any material changes, we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this Site prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.
                        </p>
                    </section>

                    <div className="mt-12 text-sm text-gray-500">
                        <h2 className="text-xl font-semibold mb-4 text-black">Use of Data</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fulfill your order</li>
                            <li>Send you an order confirmation</li>
                            <li>Assess the needs of your business to determine suitable products</li>
                            <li>Send you requested product or service information</li>
                            <li>Respond to customer service requests</li>
                            <li>Administer your account</li>
                            <li>Send you a catalog</li>
                            <li>Send you a newsletter</li>
                            <li>Send you marketing communications</li>
                            <li>Respond to your questions and concerns</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}