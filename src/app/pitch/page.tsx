"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

// Brand tokens
const brand = {
  forestGreen: "#2D5D3B",
  terracotta: "#C45E2C",
  slateNavy: "#2B3B4E",
  warmTan: "#C8A882",
  darkBrown: "#2A2218",
  agedPaper: "#F7F3EE",
  playfair: "'Playfair Display', Georgia, serif",
  lora: "'Lora', Georgia, serif",
  jakarta: "'Plus Jakarta Sans', system-ui, sans-serif",
  mono: "'DM Mono', 'Courier New', monospace",
}

// ─── Slide 1: Title ───────────────────────────────────────────────────────────
function TitleSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
      {/* Topographic background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx={400 + Math.sin(i) * 100}
              cy={300 + Math.cos(i * 0.7) * 80}
              rx={150 + i * 30}
              ry={80 + i * 20}
              fill="none"
              stroke={brand.warmTan}
              strokeWidth="1"
              opacity={0.6}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ fontFamily: brand.jakarta, color: brand.terracotta }}
        >
          Investor Deck · 2026
        </p>

        <h1
          className="text-7xl sm:text-9xl font-bold mb-4"
          style={{ fontFamily: brand.playfair, color: brand.agedPaper, lineHeight: 1 }}
        >
          Pumpline
        </h1>

        <p
          className="text-2xl sm:text-3xl mb-3"
          style={{ fontFamily: brand.lora, color: brand.warmTan }}
        >
          The septic marketplace built for rural America.
        </p>

        <p
          className="text-base mb-10 max-w-xl mx-auto"
          style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.7 }}
        >
          Find verified providers in your county. See what neighbors paid.
          Track your property's full service history.
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          {[
            { num: "21.7M", label: "US households on septic" },
            { num: "$6.5B", label: "Annual market size" },
            { num: "$0", label: "Dedicated marketplace (before us)" },
          ].map((s) => (
            <div
              key={s.num}
              className="p-4 rounded-xl"
              style={{ background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.2)" }}
            >
              <p style={{ fontFamily: brand.mono, fontSize: "1.6rem", fontWeight: 700, color: brand.agedPaper }}>
                {s.num}
              </p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.7rem", color: brand.warmTan, opacity: 0.7 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://pumpline.ashketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ background: brand.terracotta, color: "white", fontFamily: brand.jakarta, textDecoration: "none" }}
        >
          pumpline.ashketing.com
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

// ─── Slide 2: Problem ──────────────────────────────────────────────────────────
function ProblemSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ fontFamily: brand.jakarta, color: brand.terracotta }}
        >
          The Problem
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold mb-10"
          style={{ fontFamily: brand.playfair, color: brand.agedPaper, lineHeight: 1.15 }}
        >
          Septic service is the only home system<br /> with zero accountability infrastructure.
        </h2>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {[
            {
              stat: "No records",
              detail: "Service history disappears when homes are sold. 21.7M households maintaining a $10,000 system completely blind.",
            },
            {
              stat: "Opaque pricing",
              detail: "Call three contractors, get three wildly different quotes. No baseline, no transparency. Just guess — or get taken.",
            },
            {
              stat: "Zero accountability",
              detail: "Generic listings vanish when something fails. No verified work history. No way to hold anyone accountable.",
            },
          ].map((p, i) => (
            <div
              key={p.stat}
              className="p-6 rounded-2xl"
              style={{ background: "rgba(247,243,238,0.06)", border: "1px solid rgba(196,94,44,0.3)" }}
            >
              <p
                className="text-3xl font-bold mb-1"
                style={{ fontFamily: brand.mono, color: brand.terracotta }}
              >
                0{i + 1}
              </p>
              <p className="text-lg font-bold mb-2" style={{ fontFamily: brand.playfair, color: brand.agedPaper }}>
                {p.stat}
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.85 }}>
                {p.detail}
              </p>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-3 gap-8 pt-6 border-t"
          style={{ borderColor: "rgba(200,168,130,0.2)" }}
        >
          {[
            { num: "21.7M", label: "US homes on septic" },
            { num: "30-60%", label: "Average overpayment on pumping" },
            { num: "87%", label: "Failures preventable with maintenance" },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <p style={{ fontFamily: brand.mono, fontSize: "2rem", fontWeight: 700, color: brand.terracotta }}>
                {s.num}
              </p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.75rem", color: brand.warmTan, opacity: 0.7 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Slide 3: Solution ────────────────────────────────────────────────────────
function SolutionSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ fontFamily: brand.jakarta, color: brand.warmTan }}
        >
          The Solution
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ fontFamily: brand.playfair, color: brand.agedPaper, lineHeight: 1.15 }}
        >
          Browse first. No quotes, no callbacks, no pressure.
        </h2>
        <p
          className="text-lg mb-10"
          style={{ fontFamily: brand.lora, color: brand.warmTan, maxWidth: "600px" }}
        >
          A browse-first marketplace designed exclusively for septic services. Every provider is verified. Every price range is disclosed upfront.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {[
            {
              icon: "🗺️",
              title: "County Search",
              body: "Find every verified provider serving your exact area. Pricing visible before you call anyone.",
            },
            {
              icon: "💰",
              title: "Transparent Pricing",
              body: "See real price ranges upfront — because you deserve to know what you're paying before someone shows up in a truck.",
            },
            {
              icon: "📋",
              title: "Property Records",
              body: "Service history stays with the address, survives home sales. The Carfax for your septic system.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl"
              style={{ background: "rgba(247,243,238,0.1)", border: "1px solid rgba(200,168,130,0.25)" }}
            >
              <p className="text-3xl mb-3">{f.icon}</p>
              <p className="text-lg font-bold mb-2" style={{ fontFamily: brand.playfair, color: brand.agedPaper }}>
                {f.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.85 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="flex items-center gap-3 px-5 py-3 rounded-xl"
          style={{ background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.2)" }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: brand.terracotta }} />
          <p style={{ fontFamily: brand.jakarta, fontSize: "0.85rem", color: brand.warmTan }}>
            Also: "N neighbors in your county used this provider" badge — hyperlocal trust that Angi can never replicate.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 4: Market Size ─────────────────────────────────────────────────────
function MarketSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ fontFamily: brand.jakarta, color: brand.terracotta }}
        >
          Market Size
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold mb-10"
          style={{ fontFamily: brand.playfair, color: brand.agedPaper, lineHeight: 1.15 }}
        >
          A $6.5B market with zero vertical marketplace.
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              label: "TAM",
              sublabel: "Total Addressable Market",
              number: "$6.5B",
              detail: "Annual US residential septic service market — 21.7M households × avg $300 spend",
              featured: true,
            },
            {
              label: "SAM",
              sublabel: "Serviceable Addressable Market",
              number: "$1.2B",
              detail: "Homes with internet + septic in target 18 states — 4M+ addressable households",
              featured: false,
            },
            {
              label: "SOM",
              sublabel: "Serviceable Obtainable (Year 3)",
              number: "$12M ARR",
              detail: "2% market capture — 20K providers + 300K homeowners",
              featured: false,
            },
          ].map((m) => (
            <div
              key={m.label}
              className="p-6 rounded-2xl"
              style={
                m.featured
                  ? { background: brand.terracotta, border: "1px solid transparent" }
                  : { background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.2)" }
              }
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ fontFamily: brand.jakarta, color: m.featured ? "rgba(255,255,255,0.7)" : brand.terracotta }}
              >
                {m.label}
              </p>
              <p
                className="text-xs mb-3"
                style={{ fontFamily: brand.jakarta, color: m.featured ? "rgba(255,255,255,0.6)" : brand.warmTan, opacity: 0.7 }}
              >
                {m.sublabel}
              </p>
              <p
                className="text-4xl font-bold mb-3"
                style={{ fontFamily: brand.mono, color: m.featured ? "white" : brand.agedPaper }}
              >
                {m.number}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: brand.lora, color: m.featured ? "rgba(255,255,255,0.75)" : brand.warmTan, opacity: 0.85 }}
              >
                {m.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { stat: "+8,338%", label: "Search volume growth for septic pumping" },
            { stat: "65M+", label: "Rural Americans coming online via broadband expansion" },
            { stat: "3.5M", label: "Rural real estate transactions/year, all needing septic history" },
          ].map((s) => (
            <div
              key={s.stat}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: "rgba(247,243,238,0.06)" }}
            >
              <p style={{ fontFamily: brand.mono, fontSize: "1.3rem", fontWeight: 700, color: brand.warmTan }}>
                {s.stat}
              </p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.75rem", color: brand.warmTan, opacity: 0.65 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Slide 5: How It Works ───────────────────────────────────────────────────
function HowItWorksSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ fontFamily: brand.jakarta, color: brand.forestGreen }}
        >
          How It Works
        </p>
        <h2
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: brand.playfair, color: brand.darkBrown, lineHeight: 1.15 }}
        >
          Three steps from problem to solved.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Homeowners */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b"
              style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5, borderColor: brand.warmTan }}
            >
              For Homeowners
            </p>
            <div className="space-y-4">
              {[
                { step: "01", title: "Search your county", body: "Enter your county or ZIP. See every verified septic provider. Pricing visible. No phone required." },
                { step: "02", title: "Compare and choose", body: "Read reviews from actual neighbors. See verified service history. Check emergency availability. Zero pressure." },
                { step: "03", title: "Send a direct inquiry", body: "Contact your chosen provider directly. They respond to you — not to a lead auction." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span
                    className="text-2xl font-bold shrink-0 mt-1"
                    style={{ fontFamily: brand.mono, color: brand.forestGreen }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
                      {s.title}
                    </p>
                    <p className="text-sm" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.7 }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Providers */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b"
              style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5, borderColor: brand.warmTan }}
            >
              For Providers
            </p>
            <div className="space-y-4">
              {[
                { step: "01", title: "Claim your free listing", body: "15-minute setup: business info, counties served, services, pricing range. Live immediately." },
                { step: "02", title: "Build your verified profile", body: "Every completed job adds to your public record. Reviews are property-linked — impossible to fake." },
                { step: "03", title: "Upgrade when you're ready", body: "Pro at $50/mo unlocks 3 counties + featured placement. Premium at $150/mo is unlimited." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span
                    className="text-2xl font-bold shrink-0 mt-1"
                    style={{ fontFamily: brand.mono, color: brand.terracotta }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
                      {s.title}
                    </p>
                    <p className="text-sm" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.7 }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 6: Traction ───────────────────────────────────────────────────────
function TractionSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ fontFamily: brand.jakarta, color: brand.terracotta }}
        >
          Traction & Proof
        </p>
        <h2
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: brand.playfair, color: brand.agedPaper, lineHeight: 1.15 }}
        >
          The market signal was undeniable.<br />We built it anyway.
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <div
            className="p-6 rounded-2xl"
            style={{ background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.2)" }}
          >
            <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.warmTan }}>
              Community Signals (Pre-launch)
            </p>
            <div className="space-y-2">
              {[
                "Reddit: 5 subreddits, 2.5M+ combined members asking for septic recommendations",
                "Facebook: 6 county homeowner groups, 150K+ members — \"who do you use for septic?\" is most common post",
                "\"Septic tank pumping services\": 110K monthly searches, LOW competition — nobody built a vertical",
                "NOWRA: 10,000+ provider members with no dedicated lead platform",
              ].map((s) => (
                <div key={s} className="flex gap-2">
                  <span style={{ color: brand.terracotta, flexShrink: 0 }}>→</span>
                  <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.85, lineHeight: 1.5 }}>
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-6 rounded-2xl"
            style={{ background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.2)" }}
          >
            <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.warmTan }}>
              Market Validation
            </p>
            <div className="space-y-2">
              {[
                "Angi charges $15-100/lead — providers actively looking for alternatives",
                "Google Maps: septic providers averaging 2-3 reviews — zero digital presence claimed",
                "Real estate agents request septic history documentation on nearly every rural transaction",
                "Live at pumpline.ashketing.com — provider and homeowner signups tracking",
              ].map((s) => (
                <div key={s} className="flex gap-2">
                  <span style={{ color: brand.terracotta, flexShrink: 0 }}>→</span>
                  <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.85, lineHeight: 1.5 }}>
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { num: "110K", label: "Monthly septic searches", sub: "LOW competition" },
            { num: "2.5M+", label: "Reddit community members", sub: "5 targeted subreddits" },
            { num: "$0", label: "Dedicated vertical before Pumpline", sub: "First mover advantage" },
          ].map((s) => (
            <div
              key={s.num}
              className="text-center p-4 rounded-xl"
              style={{ background: "rgba(196,94,44,0.12)" }}
            >
              <p style={{ fontFamily: brand.mono, fontSize: "1.8rem", fontWeight: 700, color: brand.agedPaper }}>
                {s.num}
              </p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.7rem", color: brand.warmTan, marginBottom: "2px" }}>
                {s.label}
              </p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.65rem", color: brand.terracotta }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Slide 7: Business Model ─────────────────────────────────────────────────
function BusinessModelSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ fontFamily: brand.jakarta, color: brand.terracotta }}
        >
          Business Model
        </p>
        <h2
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: brand.playfair, color: brand.agedPaper, lineHeight: 1.15 }}
        >
          Two sides, one platform. Revenue from both.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {/* Provider tiers */}
          <div>
            <p className="text-xs font-bold uppercase mb-3" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.6 }}>
              Providers
            </p>
            <div className="space-y-2">
              {[
                { plan: "Basic", price: "Free", detail: "1 county, profile, accept inquiries" },
                { plan: "Pro", price: "$50/mo", detail: "3 counties, featured badge, review showcase", featured: true },
                { plan: "Premium", price: "$150/mo", detail: "Unlimited counties, top placement, SMS alerts" },
              ].map((p) => (
                <div
                  key={p.plan}
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={
                    p.featured
                      ? { background: brand.terracotta }
                      : { background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.2)" }
                  }
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: brand.jakarta, color: p.featured ? "white" : brand.agedPaper }}>
                      {p.plan}
                    </p>
                    <p className="text-xs" style={{ fontFamily: brand.lora, color: p.featured ? "rgba(255,255,255,0.75)" : brand.warmTan, opacity: 0.8 }}>
                      {p.detail}
                    </p>
                  </div>
                  <p className="font-bold" style={{ fontFamily: brand.mono, color: p.featured ? "white" : brand.agedPaper, fontSize: "1rem" }}>
                    {p.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Homeowner tiers */}
          <div>
            <p className="text-xs font-bold uppercase mb-3" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.6 }}>
              Homeowners
            </p>
            <div className="space-y-2 mb-4">
              {[
                { plan: "Free", price: "$0", detail: "Browse + find providers + log service history" },
                { plan: "Plus", price: "$10/mo", detail: "Maintenance reminders, emergency badge, property PDF for home sale" },
              ].map((p) => (
                <div
                  key={p.plan}
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{ background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.2)" }}
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: brand.jakarta, color: brand.agedPaper }}>
                      {p.plan}
                    </p>
                    <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.8 }}>
                      {p.detail}
                    </p>
                  </div>
                  <p className="font-bold" style={{ fontFamily: brand.mono, color: brand.agedPaper, fontSize: "1rem" }}>
                    {p.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue snapshot */}
            <div className="p-4 rounded-xl" style={{ background: "rgba(45,93,59,0.3)", border: "1px solid rgba(45,93,59,0.5)" }}>
              <p className="text-xs font-bold mb-2" style={{ fontFamily: brand.jakarta, color: brand.warmTan }}>
                Revenue Trajectory
              </p>
              <div className="space-y-1">
                {[
                  { period: "Month 3", mrr: "$650" },
                  { period: "Month 6", mrr: "$2,750" },
                  { period: "Year 1", mrr: "$11,000" },
                  { period: "Year 2", mrr: "$55,000" },
                ].map((r) => (
                  <div key={r.period} className="flex justify-between">
                    <p style={{ fontFamily: brand.jakarta, fontSize: "0.75rem", color: brand.warmTan, opacity: 0.7 }}>
                      {r.period}
                    </p>
                    <p style={{ fontFamily: brand.mono, fontSize: "0.75rem", fontWeight: 700, color: brand.agedPaper }}>
                      {r.mrr} MRR
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t" style={{ borderColor: "rgba(200,168,130,0.2)" }}>
          {[
            { num: "24x", label: "Provider LTV:CAC", sub: "~$25 CAC → $600/yr LTV" },
            { num: "40x", label: "Homeowner LTV:CAC", sub: "~$3-8 CAC → $120/yr LTV" },
            { num: "~90%", label: "Gross margin", sub: "SaaS — minimal marginal cost" },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <p style={{ fontFamily: brand.mono, fontSize: "1.8rem", fontWeight: 700, color: brand.terracotta }}>
                {s.num}
              </p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.7rem", color: brand.warmTan }}>
                {s.label}
              </p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.65rem", color: brand.warmTan, opacity: 0.6 }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Slide 8: Competition ─────────────────────────────────────────────────────
function CompetitionSlide() {
  const rows = [
    { feature: "Septic-specific", pumpline: true, angi: false, thumb: false, ha: false },
    { feature: "Browse-first", pumpline: true, angi: false, thumb: false, ha: false },
    { feature: "Property records", pumpline: true, angi: false, thumb: false, ha: false },
    { feature: "Flat subscription", pumpline: true, angi: false, thumb: false, ha: false },
    { feature: "Neighbor badge", pumpline: true, angi: false, thumb: false, ha: false },
  ]

  const moat = [
    "Property-attached records — a 10-year data asset. Once a home's service history is on Pumpline, it stays. Impossible to replicate without time.",
    "Vertical focus — Angi will never build a septic-only product. Too niche for them. Too big for nobody to have built it.",
    "Provider trust — providers have been burned by lead-gen models. A flat subscription builds loyalty they won't abandon.",
  ]

  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ fontFamily: brand.jakarta, color: brand.terracotta }}
        >
          Competition
        </p>
        <h2
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: brand.playfair, color: brand.agedPaper, lineHeight: 1.15 }}
        >
          Angi sells leads. Thumbtack runs auctions.<br />We built a marketplace.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Comparison table */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(200,168,130,0.2)" }}
          >
            <div className="grid grid-cols-5" style={{ background: "rgba(247,243,238,0.12)" }}>
              <div className="p-3" />
              {["Pumpline", "Angi", "Thumbtack", "HomeAdvisor"].map((c, i) => (
                <div key={c} className="p-3 text-center">
                  <p
                    className="text-xs font-bold"
                    style={{ fontFamily: brand.jakarta, color: i === 0 ? brand.terracotta : brand.warmTan, opacity: i === 0 ? 1 : 0.5 }}
                  >
                    {c}
                  </p>
                </div>
              ))}
            </div>
            {rows.map((r, ri) => (
              <div
                key={r.feature}
                className="grid grid-cols-5 border-t"
                style={{ borderColor: "rgba(200,168,130,0.1)", background: ri % 2 === 0 ? "rgba(247,243,238,0.04)" : "transparent" }}
              >
                <div className="p-3">
                  <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.7 }}>
                    {r.feature}
                  </p>
                </div>
                {[r.pumpline, r.angi, r.thumb, r.ha].map((val, ci) => (
                  <div key={ci} className="p-3 text-center">
                    <span style={{ fontSize: "1.1rem" }}>{val ? "✅" : "❌"}</span>
                  </div>
                ))}
              </div>
            ))}
            <div className="grid grid-cols-5 border-t" style={{ borderColor: "rgba(200,168,130,0.1)" }}>
              <div className="p-3">
                <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.7 }}>
                  Provider cost
                </p>
              </div>
              {["$50-150/mo", "$15-100/lead", "Bidding", "$15-80/lead"].map((v, i) => (
                <div key={v} className="p-3 text-center">
                  <p
                    className="text-xs font-bold"
                    style={{ fontFamily: brand.mono, color: i === 0 ? brand.terracotta : brand.warmTan, opacity: i === 0 ? 1 : 0.5 }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our moat */}
          <div>
            <p
              className="text-xs font-bold uppercase mb-4"
              style={{ fontFamily: brand.jakarta, color: brand.terracotta }}
            >
              Our Moat
            </p>
            <div className="space-y-4">
              {moat.map((m, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl"
                  style={{ background: "rgba(196,94,44,0.1)", border: "1px solid rgba(196,94,44,0.25)" }}
                >
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: brand.mono, color: brand.terracotta }}
                  >
                    0{i + 1}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ fontFamily: brand.lora, color: brand.warmTan }}>
                    {m}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 9: GTM ─────────────────────────────────────────────────────────────
function GTMSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ fontFamily: brand.jakarta, color: brand.warmTan }}
        >
          Go-to-Market
        </p>
        <h2
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: brand.playfair, color: brand.darkBrown, lineHeight: 1.15 }}
        >
          Organic first. Reddit, Facebook, SEO.<br />Then scale what works.
        </h2>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              month: "Month 1",
              title: "Seed the Supply",
              color: brand.forestGreen,
              steps: [
                "50 provider outreach (NOWRA directory)",
                "Target: WV, KY, OH, NC, TN",
                "Reddit: value-first in r/homeowners, r/DIY",
                "Facebook: 6 county homeowner groups",
                "2 SEO articles/week",
              ],
              cost: "$0",
            },
            {
              month: "Month 2",
              title: "Launch Push",
              color: brand.terracotta,
              steps: [
                "ProductHunt launch (target Top 5)",
                "IndieHackers Show IH post",
                "Facebook Ads: $300 test budget",
                "3 rural county geo-targets",
                "10 providers live on platform",
              ],
              cost: "$300",
            },
            {
              month: "Month 3",
              title: "Scale What Works",
              color: brand.slateNavy,
              steps: [
                "Double Facebook Ads on winning counties",
                "Auto-generated county landing pages",
                "Provider referral: 1 month free",
                "Target CPA < $8",
                "SEO compounding from county pages",
              ],
              cost: "$500-1K/mo",
            },
          ].map((m) => (
            <div
              key={m.month}
              className="p-5 rounded-2xl"
              style={{ background: brand.agedPaper }}
            >
              <div
                className="flex items-center justify-between mb-1"
              >
                <p className="text-xs font-bold uppercase" style={{ fontFamily: brand.jakarta, color: m.color }}>
                  {m.month}
                </p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: `${m.color}20`, color: m.color, fontFamily: brand.mono }}
                >
                  {m.cost}
                </span>
              </div>
              <p className="font-semibold mb-3" style={{ fontFamily: brand.playfair, color: brand.darkBrown }}>
                {m.title}
              </p>
              <div className="space-y-1.5">
                {m.steps.map((s) => (
                  <div key={s} className="flex gap-2">
                    <span style={{ color: m.color, flexShrink: 0, fontSize: "0.8rem" }}>·</span>
                    <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.75, lineHeight: 1.4 }}>
                      {s}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[
            { num: "50-200", label: "Reddit signups (30 days)" },
            { num: "100-400", label: "Facebook signups (60 days)" },
            { num: "200-800", label: "ProductHunt launch (48 hrs)" },
            { num: "1K-5K", label: "Monthly organic by Month 6" },
          ].map((s) => (
            <div key={s.num} className="text-center p-3 rounded-xl" style={{ background: `${brand.darkBrown}15` }}>
              <p style={{ fontFamily: brand.mono, fontSize: "1.1rem", fontWeight: 700, color: brand.darkBrown }}>
                {s.num}
              </p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.65rem", color: brand.darkBrown, opacity: 0.6 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Slide 10: Team & Ask ─────────────────────────────────────────────────────
function TeamSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ fontFamily: brand.jakarta, color: brand.warmTan }}
        >
          Team & Ask
        </p>
        <h2
          className="text-5xl sm:text-6xl font-bold mb-4"
          style={{ fontFamily: brand.playfair, color: brand.agedPaper, lineHeight: 1.1 }}
        >
          Let&apos;s build the infrastructure<br />rural America deserves.
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 mt-8">
          <div>
            <p className="text-xs font-bold uppercase mb-3" style={{ fontFamily: brand.jakarta, color: brand.terracotta }}>
              About ChimeStream
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: brand.lora, color: brand.warmTan }}>
              An indie product studio building vertical marketplaces and SaaS tools for underserved markets. We ship fast, validate with real users, and iterate in production.
            </p>
            <div className="space-y-2">
              {[
                "Multiple products live across home services, productivity, niche verticals",
                "Proven pipeline: idea → research → build → launch in 2-4 weeks",
                "Distribution-first: every product ships with GTM baked in",
              ].map((t) => (
                <div key={t} className="flex gap-2">
                  <span style={{ color: brand.terracotta }}>→</span>
                  <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.85 }}>
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase mb-3" style={{ fontFamily: brand.jakarta, color: brand.terracotta }}>
              What We&apos;re Looking For
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: "🤝",
                  title: "Industry Partnerships",
                  body: "Septic industry associations (NOWRA), real estate data providers (Zillow, Redfin), rural broadband platforms",
                },
                {
                  icon: "📈",
                  title: "Revenue Milestones",
                  body: "$10K MRR by end of Year 1. Partnership conversations welcome at that milestone.",
                },
                {
                  icon: "🏗️",
                  title: "Bootstrapped & Lean",
                  body: "Not currently raising. Pumpline is a lean, bootstrapped operation proving unit economics first.",
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="p-4 rounded-xl flex gap-3"
                  style={{ background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.15)" }}
                >
                  <span className="text-xl">{i.icon}</span>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ fontFamily: brand.jakarta, color: brand.agedPaper }}>
                      {i.title}
                    </p>
                    <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.8 }}>
                      {i.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between mt-8 p-5 rounded-2xl"
          style={{ background: "rgba(247,243,238,0.08)", border: "1px solid rgba(200,168,130,0.25)" }}
        >
          <div>
            <p className="text-xs uppercase" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.6 }}>
              Live now
            </p>
            <p className="text-lg font-bold" style={{ fontFamily: brand.mono, color: brand.agedPaper }}>
              pumpline.ashketing.com
            </p>
          </div>
          <div className="text-sm sm:text-right mt-2 sm:mt-0">
            <p style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.7, fontSize: "0.8rem" }}>
              For providers: claim your free listing
            </p>
            <p style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.7, fontSize: "0.8rem" }}>
              For partners: hello@chimestream.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Slide definitions ───────────────────────────────────────────────────────
const SLIDES = [
  {
    id: "title",
    bg: brand.forestGreen,
    label: "Title",
    component: TitleSlide,
  },
  {
    id: "problem",
    bg: brand.darkBrown,
    label: "Problem",
    component: ProblemSlide,
  },
  {
    id: "solution",
    bg: brand.forestGreen,
    label: "Solution",
    component: SolutionSlide,
  },
  {
    id: "market",
    bg: brand.slateNavy,
    label: "Market",
    component: MarketSlide,
  },
  {
    id: "how-it-works",
    bg: brand.agedPaper,
    label: "How It Works",
    component: HowItWorksSlide,
  },
  {
    id: "traction",
    bg: brand.darkBrown,
    label: "Traction",
    component: TractionSlide,
  },
  {
    id: "business-model",
    bg: "#1C1410",
    label: "Business Model",
    component: BusinessModelSlide,
  },
  {
    id: "competition",
    bg: brand.slateNavy,
    label: "Competition",
    component: CompetitionSlide,
  },
  {
    id: "gtm",
    bg: brand.agedPaper,
    label: "GTM",
    component: GTMSlide,
  },
  {
    id: "team",
    bg: brand.forestGreen,
    label: "Team & Ask",
    component: TeamSlide,
  },
]

// ─── Main pitch deck ──────────────────────────────────────────────────────────
export default function PitchPage() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), [])
  const next = useCallback(() => setCurrent((c) => Math.min(SLIDES.length - 1, c + 1)), [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next()
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next, prev])

  const slide = SLIDES[current]
  const Slide = slide.component

  return (
    <div
      className="h-screen w-screen overflow-hidden flex flex-col relative"
      style={{ background: slide.bg, transition: "background 0.5s ease" }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-6 py-3 shrink-0 border-b"
        style={{ borderColor: "rgba(200,168,130,0.15)" }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-sm font-bold"
            style={{
              fontFamily: brand.playfair,
              color: [brand.agedPaper, brand.darkBrown].includes(slide.bg) && slide.bg !== brand.forestGreen
                ? brand.forestGreen
                : brand.agedPaper,
            }}
          >
            Pumpline
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded"
            style={{
              fontFamily: brand.jakarta,
              background: "rgba(200,168,130,0.15)",
              color: [brand.agedPaper].includes(slide.bg) ? brand.darkBrown : brand.warmTan,
            }}
          >
            Investor Deck
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            className="text-xs"
            style={{ fontFamily: brand.mono, color: [brand.agedPaper].includes(slide.bg) ? brand.darkBrown : brand.warmTan, opacity: 0.6 }}
          >
            {current + 1} / {SLIDES.length}
          </span>
          <a
            href="https://pumpline.ashketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs hover:opacity-80 transition-opacity"
            style={{ fontFamily: brand.jakarta, color: brand.terracotta, textDecoration: "none" }}
          >
            Live site
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Slide content */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="h-full"
          >
            <Slide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav */}
      <div
        className="flex items-center justify-between px-6 py-4 shrink-0 border-t"
        style={{ borderColor: "rgba(200,168,130,0.15)" }}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1 text-sm transition-opacity disabled:opacity-30 hover:opacity-70"
          style={{ fontFamily: brand.jakarta, color: [brand.agedPaper].includes(slide.bg) ? brand.darkBrown : brand.warmTan }}
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        {/* Slide dots */}
        <div className="flex items-center gap-1.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              title={s.label}
              className="transition-all duration-200"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current
                  ? brand.terracotta
                  : [brand.agedPaper].includes(slide.bg)
                    ? "rgba(42,34,24,0.3)"
                    : "rgba(200,168,130,0.35)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === SLIDES.length - 1}
          className="flex items-center gap-1 text-sm transition-opacity disabled:opacity-30 hover:opacity-70"
          style={{ fontFamily: brand.jakarta, color: [brand.agedPaper].includes(slide.bg) ? brand.darkBrown : brand.warmTan }}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Slide title watermark */}
      <div
        className="absolute bottom-16 left-6 hidden sm:block"
      >
        <p
          className="text-xs uppercase tracking-widest"
          style={{
            fontFamily: brand.jakarta,
            color: [brand.agedPaper].includes(slide.bg) ? "rgba(42,34,24,0.3)" : "rgba(200,168,130,0.3)",
          }}
        >
          {slide.label}
        </p>
      </div>
    </div>
  )
}
