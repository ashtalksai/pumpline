"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Is Pumpline really free for homeowners?",
    a: "Yes. Browsing providers, reading reviews, and seeing pricing ranges are free forever. You only upgrade to Plus ($10/mo) if you want unlimited provider contacts, property service logs, and maintenance reminders.",
  },
  {
    q: "How are provider reviews verified?",
    a: "Reviews are linked to property records, not anonymous accounts. A reviewer for 'Madison County, OH' has to be a homeowner in that county with a service log entry for that provider. We can't guarantee every review is 100% authentic, but we can guarantee they're geographically real.",
  },
  {
    q: "Why should I trust a provider's pricing on here?",
    a: "Providers set their own ranges — we don't set prices. But we show you what other homeowners in your county paid for the same service type. If a provider's range is significantly higher than the local average, you'll see that immediately.",
  },
  {
    q: "What happens to my property records if I sell the house?",
    a: "Records are tied to the property address, not your account. When a new owner claims the property on Pumpline, the full service history transfers automatically. This is one of the most valuable things Pumpline creates for rural homeowners.",
  },
  {
    q: "I'm a provider — how is this different from Angi or Thumbtack?",
    a: "Angi and Thumbtack charge you per lead, then sell the same lead to 3–5 competitors. You pay whether the job converts or not. Pumpline is a flat subscription — you pay once a month and every inquiry is exclusively yours. No competition, no per-lead fees.",
  },
  {
    q: "How do you verify that providers are licensed and insured?",
    a: "Providers submit their license number and insurance certificates during onboarding. We display whether a provider is verified. We don't guarantee licensing validity — we strongly recommend homeowners confirm independently for any major work.",
  },
  {
    q: "What areas does Pumpline cover?",
    a: "We're currently live in 18 states with the highest rural septic adoption: OH, VA, NC, GA, PA, TN, WV, KY, IN, MO, AR, AL, MS, SC, TX, NY, MI, WI. Expanding monthly based on provider signups.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F3EE" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
          >
            Questions worth asking
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "#C8A882", background: "#FAF7F3" }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span
                  className="font-semibold text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 transition-transform"
                  style={{
                    transform: open === idx ? "rotate(180deg)" : "rotate(0deg)",
                    color: "#2D5D3B",
                  }}
                />
              </button>
              {open === idx && (
                <div className="px-6 pb-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.8 }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
