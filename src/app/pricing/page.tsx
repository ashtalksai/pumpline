import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

const homeownerPlans = [
  {
    name: "Free",
    price: 0,
    description: "Search and discover providers at no cost — forever.",
    features: [
      { text: "Browse all providers by county", included: true },
      { text: "See pricing ranges", included: true },
      { text: "Read neighbor reviews", included: true },
      { text: "Contact 1 provider/month", included: true },
      { text: "Unlimited provider contacts", included: false },
      { text: "Property service log", included: false },
      { text: "Maintenance reminders", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Start Free",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Plus",
    price: 10,
    description: "For the homeowner who wants to stay on top of their system.",
    features: [
      { text: "Browse all providers by county", included: true },
      { text: "See pricing ranges", included: true },
      { text: "Read neighbor reviews", included: true },
      { text: "Contact 1 provider/month", included: true },
      { text: "Unlimited provider contacts", included: true },
      { text: "Property service log", included: true },
      { text: "Maintenance reminders", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Get Plus",
    href: "/signup",
    highlight: true,
  },
]

const providerPlans = [
  {
    name: "Free",
    price: 0,
    description: "Get discovered. Build your first reviews.",
    features: [
      { text: "Basic profile listing", included: true },
      { text: "1 county coverage", included: true },
      { text: "Unlimited inquiries", included: true },
      { text: "Basic profile analytics", included: true },
      { text: "Priority search placement", included: false },
      { text: "Up to 5 counties", included: false },
      { text: "Review response tools", included: false },
      { text: "30-day analytics dashboard", included: false },
      { text: "County ad placement", included: false },
      { text: "Dedicated support", included: false },
    ],
    cta: "List Free",
    href: "/signup?role=provider",
    highlight: false,
  },
  {
    name: "Pro",
    price: 50,
    description: "For the established provider ready to grow their digital presence.",
    features: [
      { text: "Basic profile listing", included: true },
      { text: "Up to 5 counties", included: true },
      { text: "Unlimited inquiries", included: true },
      { text: "Basic profile analytics", included: true },
      { text: "Priority search placement", included: true },
      { text: "Review response tools", included: true },
      { text: "30-day analytics dashboard", included: true },
      { text: "County ad placement", included: false },
      { text: "Dedicated support", included: false },
    ],
    cta: "Go Pro",
    href: "/signup?role=provider",
    highlight: true,
  },
  {
    name: "Premium",
    price: 150,
    description: "For the multi-county operator who wants to dominate their market.",
    features: [
      { text: "Basic profile listing", included: true },
      { text: "Unlimited counties", included: true },
      { text: "Unlimited inquiries", included: true },
      { text: "Full analytics suite", included: true },
      { text: "Priority search placement", included: true },
      { text: "Review response tools", included: true },
      { text: "30-day analytics dashboard", included: true },
      { text: "County ad placement", included: true },
      { text: "Dedicated support", included: true },
    ],
    cta: "Go Premium",
    href: "/signup?role=provider",
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE" }}>
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "#2A2218" }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}>
            Pricing
          </p>
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
            Simple, honest pricing
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
            Homeowners browse for free. Providers pay a flat subscription — never per lead. No surprises.
          </p>
        </section>

        {/* Homeowner pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
              For Homeowners
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {homeownerPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border p-8"
                  style={{
                    background: plan.highlight ? "rgba(45,93,59,0.06)" : "#FAF7F3",
                    borderColor: plan.highlight ? "#2D5D3B" : "#C8A882",
                    borderWidth: plan.highlight ? 2 : 1,
                  }}
                >
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.5 }}>
                      {plan.name}
                    </p>
                    <p className="text-4xl font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218" }}>
                      ${plan.price}{plan.price > 0 && <span className="text-base font-normal opacity-60">/mo</span>}
                    </p>
                    <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.7 }}>
                      {plan.description}
                    </p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((f) => (
                      <div key={f.text} className="flex items-center gap-3">
                        {f.included
                          ? <Check size={15} style={{ color: "#2D5D3B", flexShrink: 0 }} />
                          : <X size={15} style={{ color: "#C8A882", flexShrink: 0 }} />
                        }
                        <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: f.included ? "#2A2218" : "#2A2218", opacity: f.included ? 1 : 0.4 }}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link href={plan.href}>
                    <Button
                      className="w-full"
                      variant={plan.highlight ? "default" : "outline"}
                      style={
                        plan.highlight
                          ? { background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }
                          : { borderColor: "#C8A882", color: "#2A2218", fontFamily: "'Plus Jakarta Sans', sans-serif" }
                      }
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provider pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FAF7F3" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
              For Providers
            </h2>
            <p className="text-center text-sm mb-8" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.7 }}>
              No per-lead fees. No competitor bids. Flat monthly subscription, cancel anytime.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {providerPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border p-6"
                  style={{
                    background: plan.highlight ? "rgba(45,93,59,0.06)" : "#F7F3EE",
                    borderColor: plan.highlight ? "#2D5D3B" : "#C8A882",
                    borderWidth: plan.highlight ? 2 : 1,
                  }}
                >
                  {plan.highlight && (
                    <div className="text-center mb-3">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold" style={{ background: "#C45E2C", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.5 }}>
                    {plan.name}
                  </p>
                  <p className="text-3xl font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218" }}>
                    ${plan.price}{plan.price > 0 && <span className="text-sm font-normal opacity-60">/mo</span>}
                  </p>
                  <p className="text-xs mb-5" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.7 }}>
                    {plan.description}
                  </p>
                  <div className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <div key={f.text} className="flex items-start gap-2">
                        {f.included
                          ? <Check size={13} className="mt-0.5" style={{ color: "#2D5D3B", flexShrink: 0 }} />
                          : <X size={13} className="mt-0.5" style={{ color: "#C8A882", flexShrink: 0 }} />
                        }
                        <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: f.included ? 1 : 0.4 }}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link href={plan.href}>
                    <Button
                      className="w-full text-sm"
                      variant={plan.highlight ? "default" : "outline"}
                      style={
                        plan.highlight
                          ? { background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }
                          : { borderColor: "#C8A882", color: "#2A2218", fontFamily: "'Plus Jakarta Sans', sans-serif" }
                      }
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
              Pricing FAQ
            </h2>
            <div className="space-y-4">
              {[
                { q: "Can I switch plans anytime?", a: "Yes. Upgrade or downgrade at any time. Changes take effect on your next billing date." },
                { q: "Is there a contract or commitment?", a: "No. Monthly subscriptions, cancel anytime. Annual plans (save 20%) are available but not required." },
                { q: "Do you take a cut of jobs?", a: "No. We charge a flat subscription. What you earn stays yours entirely." },
                { q: "What counts as an 'inquiry'?", a: "An inquiry is a message sent by a homeowner to your business via your Pumpline profile. All plans include unlimited inquiries." },
              ].map((item) => (
                <div key={item.q} className="rounded-xl border p-5" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                  <p className="font-semibold text-sm mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>{item.q}</p>
                  <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
