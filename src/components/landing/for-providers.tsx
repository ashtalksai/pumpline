import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ForProvidersSection() {
  const benefits = [
    "Subscription pricing — no per-lead fees eating your margin",
    "County-based profile showing exactly where you work",
    "Verified reviews build a searchable reputation over time",
    "Inquiry inbox replaces voicemail tag",
    "Property records show your work history to future homeowners",
    "Pro tier unlocks priority placement + county ads",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FAF7F3" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/provider-section-illustration.png"
            alt="Septic service provider with truck"
            width={580}
            height={440}
            className="w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}
          >
            For Providers
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
          >
            Own your reputation. Keep your margin.
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}
          >
            Angi and Thumbtack sell your leads to three competitors and charge you whether the job converts or not. Pumpline is a flat subscription — your profile, your county, your reputation. Growing your review count is the only growth loop that matters.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                  style={{ background: "#2D5D3B" }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Lora', serif", color: "#2A2218" }}
                >
                  {benefit}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Link href="/signup?role=provider">
              <Button
                className="h-12 px-6"
                style={{ background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                List Free — 3 minutes
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                variant="outline"
                className="h-12 px-6"
                style={{ borderColor: "#2D5D3B", color: "#2D5D3B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                See Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
