import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
            Terms of Service
          </h1>
          <p className="text-sm mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
            Last updated: March 13, 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif", color: "#2A2218" }}>
            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>1. Acceptance</h2>
              <p className="opacity-80">By creating an account or using Pumpline ("the Service"), you agree to these Terms of Service. If you do not agree, do not use the Service. These terms apply to all users — homeowners, service providers, and visitors.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>2. What Pumpline Is (and Isn't)</h2>
              <p className="mb-3 opacity-80">Pumpline is a marketplace platform that connects homeowners with septic service providers. We are not a septic service company. We do not employ or supervise any providers listed on the platform.</p>
              <p className="opacity-80">We do not guarantee the quality, safety, legality, or accuracy of any provider's services. Agreements made between homeowners and providers are solely between those parties. We are not a party to any service transaction.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>3. Provider Listings</h2>
              <p className="mb-3 opacity-80">Providers are responsible for the accuracy of their profiles, including:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-80">
                <li>License numbers and insurance status</li>
                <li>Service areas and counties</li>
                <li>Pricing ranges</li>
                <li>Contact information</li>
              </ul>
              <p className="mt-3 opacity-80">Pumpline displays a "Verified" badge when providers submit license and insurance documentation. This badge indicates we received the documents — it does not constitute an endorsement or guarantee of licensing validity. Homeowners should independently verify licensing for major work.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>4. Reviews</h2>
              <p className="opacity-80">Reviews on Pumpline are submitted by homeowners and are linked to property records. By submitting a review, you represent that it reflects your genuine experience. Pumpline reserves the right to remove reviews that are fraudulent, abusive, or violate these terms. We do not edit review content. Providers may not offer incentives for positive reviews.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>5. Property Service Records</h2>
              <p className="opacity-80">Service records added to a property address on Pumpline are associated with the address and persist across ownership changes. By adding a service record, you grant Pumpline a license to display that information (excluding your personal contact details) to future owners who claim that property on the platform. You represent that the information you add is accurate.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>6. Subscriptions and Payments</h2>
              <p className="mb-3 opacity-80">Paid plans are billed monthly in advance. Subscriptions auto-renew unless cancelled before the renewal date. Cancellations take effect at the end of the current billing period — no partial refunds for unused months.</p>
              <p className="opacity-80">All payments are processed by Stripe. Pumpline does not store payment card data. By subscribing, you also agree to Stripe's terms of service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>7. Prohibited Uses</h2>
              <ul className="list-disc pl-5 space-y-1 opacity-80">
                <li>Creating fake reviews or accounts</li>
                <li>Listing a business that you do not operate</li>
                <li>Scraping or harvesting contact information</li>
                <li>Impersonating another person or business</li>
                <li>Using the platform for any unlawful purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>8. Limitation of Liability</h2>
              <p className="opacity-80">TO THE MAXIMUM EXTENT PERMITTED BY LAW, PUMPLINE'S LIABILITY FOR ANY CLAIM ARISING FROM USE OF THE SERVICE IS LIMITED TO THE AMOUNT YOU PAID TO PUMPLINE IN THE 12 MONTHS PRECEDING THE CLAIM. WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>9. Termination</h2>
              <p className="opacity-80">We may suspend or terminate accounts that violate these terms. You may delete your account at any time from your account settings or by contacting hello@pumpline.io. Upon termination, your personal information is deleted, but property service records (which are associated with the address) are retained.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>10. Changes to Terms</h2>
              <p className="opacity-80">We may update these terms. We'll notify you by email for material changes. Continued use of the service after changes constitutes acceptance of the new terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>11. Governing Law</h2>
              <p className="opacity-80">These terms are governed by the laws of the State of Ohio, without regard to conflict of law principles.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>12. Contact</h2>
              <p className="opacity-80">Legal notices and questions: hello@pumpline.io</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
