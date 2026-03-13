import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
            Privacy Policy
          </h1>
          <p className="text-sm mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
            Last updated: March 13, 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif", color: "#2A2218" }}>
            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>1. Information We Collect</h2>
              <p className="mb-3 opacity-80">We collect information you provide directly to us, such as when you create an account, add a property, or contact a provider:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-80">
                <li>Account information: name, email address, password (stored as a secure hash)</li>
                <li>Property information: address, county, tank size, service history you enter</li>
                <li>Provider information: business name, license number, service counties, pricing ranges</li>
                <li>Communications: messages you send to providers through the platform</li>
              </ul>
              <p className="mt-3 opacity-80">We also collect certain information automatically when you use the service, including IP address, browser type, pages viewed, and referral source.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1 opacity-80">
                <li>To operate and improve the Pumpline platform</li>
                <li>To connect homeowners with providers in their county</li>
                <li>To calculate and display the "neighbors served" count on provider profiles</li>
                <li>To send service reminders and maintenance notifications (if you've opted in)</li>
                <li>To process payments via Stripe (we do not store card numbers — Stripe handles all payment data)</li>
                <li>To respond to your customer support requests</li>
                <li>To detect and prevent fraud or abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>3. Property Service Records</h2>
              <p className="opacity-80">Pumpline's core feature is property-linked service records. When you add service history to a property address, that history is associated with the address — not exclusively with your account. When a property changes ownership and a new owner claims it on Pumpline, they will see the service history for that address.</p>
              <p className="mt-3 opacity-80">Personal information (names, contact details, account information) is NOT transferred with the property — only service type, date, provider name, and notes that the original owner added to that log entry.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>4. Information Sharing</h2>
              <p className="mb-3 opacity-80">We do not sell your personal information. We share your information only in these circumstances:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-80">
                <li><strong>With providers:</strong> When you send an inquiry, your name, email, county, and message are shared with the provider you contact.</li>
                <li><strong>With service providers:</strong> We use Stripe for payments, Vercel for hosting, and other infrastructure providers who process data on our behalf under data processing agreements.</li>
                <li><strong>If required by law:</strong> We may disclose your information if required by a valid legal process.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>5. Data Retention</h2>
              <p className="opacity-80">We retain your account information as long as your account is active. Property service records are retained indefinitely (as they are tied to the property, not just your account). You may request deletion of your account and personal information at any time by contacting hello@pumpline.io.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>6. Cookies</h2>
              <p className="opacity-80">We use cookies for authentication (to keep you logged in) and basic analytics. We do not use third-party advertising cookies. You can disable cookies in your browser settings, but some features of Pumpline require cookies to function.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>7. Your Rights</h2>
              <p className="mb-3 opacity-80">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 opacity-80">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your account and personal data</li>
                <li>Export your data in a machine-readable format</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
              <p className="mt-3 opacity-80">To exercise these rights, contact us at hello@pumpline.io.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>8. Security</h2>
              <p className="opacity-80">We implement appropriate technical and organizational measures to protect your information. Passwords are hashed using bcrypt. Data is transmitted over HTTPS. Payment data is handled entirely by Stripe and never touches our servers in raw form.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>9. Contact</h2>
              <p className="opacity-80">For privacy questions or requests: hello@pumpline.io</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
