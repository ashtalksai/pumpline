import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#2B3B4E" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}
          >
            Simple pricing for homeowners and providers
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}
          >
            Homeowners browse free. Providers pay a flat monthly fee — no per-lead nonsense.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Homeowners */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}
            >
              For Homeowners
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Free */}
              <div className="p-6 rounded-xl border" style={{ background: "rgba(247,243,238,0.08)", borderColor: "rgba(200,168,130,0.3)" }}>
                <p className="text-xs font-semibold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.7 }}>Free</p>
                <p className="text-3xl font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "#F7F3EE" }}>$0</p>
                <p className="text-xs mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.6 }}>Forever free</p>
                {["Browse all providers", "See pricing ranges", "Read reviews", "Contact 1 provider/mo"].map(f => (
                  <div key={f} className="flex items-center gap-2 mb-2">
                    <Check size={14} style={{ color: "#C45E2C" }} />
                    <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>{f}</span>
                  </div>
                ))}
                <Link href="/signup" className="block mt-4">
                  <Button variant="outline" className="w-full" style={{ borderColor: "rgba(200,168,130,0.4)", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Start Free
                  </Button>
                </Link>
              </div>

              {/* Plus */}
              <div className="p-6 rounded-xl border relative" style={{ background: "rgba(45,93,59,0.3)", borderColor: "#2D5D3B" }}>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold" style={{ background: "#C45E2C", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Popular</div>
                <p className="text-xs font-semibold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.7 }}>Plus</p>
                <p className="text-3xl font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "#F7F3EE" }}>$10<span className="text-base font-normal opacity-60">/mo</span></p>
                <p className="text-xs mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.6 }}>per property</p>
                {["Everything in Free", "Unlimited contacts", "Property service log", "Maintenance reminders", "Priority support"].map(f => (
                  <div key={f} className="flex items-center gap-2 mb-2">
                    <Check size={14} style={{ color: "#2D5D3B" }} />
                    <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>{f}</span>
                  </div>
                ))}
                <Link href="/signup" className="block mt-4">
                  <Button className="w-full" style={{ background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Get Plus
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Providers */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}
            >
              For Providers
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { name: "Free", price: "$0", period: "Forever", features: ["Basic profile", "1 county", "Unlimited inquiries", "Basic analytics"], cta: "List Free", highlight: false },
                { name: "Pro", price: "$50", period: "/mo", features: ["Priority listing", "Up to 5 counties", "Profile score boost", "Review responses", "30-day analytics"], cta: "Go Pro", highlight: true },
                { name: "Premium", price: "$150", period: "/mo", features: ["Featured placement", "Unlimited counties", "County ad placement", "Full analytics", "Dedicated support", "Early access features"], cta: "Go Premium", highlight: false },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="p-5 rounded-xl border"
                  style={{
                    background: plan.highlight ? "rgba(45,93,59,0.3)" : "rgba(247,243,238,0.08)",
                    borderColor: plan.highlight ? "#2D5D3B" : "rgba(200,168,130,0.3)",
                  }}
                >
                  <p className="text-xs font-semibold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.7 }}>{plan.name}</p>
                  <p className="text-2xl font-bold mb-4" style={{ fontFamily: "'DM Mono', monospace", color: "#F7F3EE" }}>
                    {plan.price}<span className="text-sm font-normal opacity-60">{plan.period}</span>
                  </p>
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2 mb-2">
                      <Check size={12} style={{ color: plan.highlight ? "#2D5D3B" : "#C45E2C" }} />
                      <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>{f}</span>
                    </div>
                  ))}
                  <Link href="/signup?role=provider" className="block mt-4">
                    <Button
                      variant={plan.highlight ? "default" : "outline"}
                      className="w-full text-xs h-8"
                      style={
                        plan.highlight
                          ? { background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }
                          : { borderColor: "rgba(200,168,130,0.4)", color: "#C8A882", fontFamily: "'Plus Jakarta Sans', sans-serif" }
                      }
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/pricing">
            <Button variant="ghost" style={{ color: "#C8A882", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              See full plan comparison →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
