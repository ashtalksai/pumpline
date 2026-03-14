"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FileText,
  TrendingUp,
  Megaphone,
  Palette,
  PresentationIcon,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
} from "lucide-react"

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

// ─── Section: Research ────────────────────────────────────────────────────────
function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${brand.forestGreen}15` }}>
          <FileText size={20} style={{ color: brand.forestGreen }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: brand.playfair, color: brand.darkBrown }}>
            Research
          </h2>
          <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5 }}>
            Market analysis · Competitive landscape · Opportunity sizing
          </p>
        </div>
      </div>

      {/* Executive summary */}
      <div
        className="rounded-2xl p-6 mb-5"
        style={{ background: brand.forestGreen, color: brand.agedPaper }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.7 }}>
          Executive Summary
        </p>
        <p className="text-lg font-bold mb-3" style={{ fontFamily: brand.playfair }}>
          Pumpline addresses a $6.5B market with zero vertical marketplace infrastructure.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: brand.lora, opacity: 0.85 }}>
          21.7 million US households depend on septic systems — roughly 1 in 5 homes. Despite a massive market with explosive search growth (+8,338% for "septic tank pumping services"), no dedicated browse-first marketplace existed before Pumpline. The incumbent platforms (Angi, Thumbtack, HomeAdvisor) are generic home service aggregators with broken lead-gen models that frustrate both homeowners and providers.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { num: "21.7M", label: "US homes on septic" },
            { num: "+8,338%", label: "Search volume growth" },
            { num: "9/10", label: "Validation score" },
          ].map((s) => (
            <div key={s.num} className="text-center p-3 rounded-xl" style={{ background: "rgba(247,243,238,0.1)" }}>
              <p style={{ fontFamily: brand.mono, fontSize: "1.5rem", fontWeight: 700, color: brand.agedPaper }}>{s.num}</p>
              <p style={{ fontFamily: brand.jakarta, fontSize: "0.7rem", color: brand.warmTan, opacity: 0.7 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Market opportunity */}
      <div className="grid sm:grid-cols-3 gap-4 mb-5">
        {[
          { label: "TAM", sub: "Total Addressable Market", num: "$6.5B", detail: "Annual US residential septic service market — 21.7M households × avg $300 spend", accent: true },
          { label: "SAM", sub: "Serviceable Addressable Market", num: "$1.2B", detail: "Homes with internet + septic in target 18 states — 4M+ addressable households", accent: false },
          { label: "SOM", sub: "Serviceable Obtainable (Yr 3)", num: "$12M ARR", detail: "2% market capture — 20K providers + 300K homeowners", accent: false },
        ].map((m) => (
          <div
            key={m.label}
            className="p-5 rounded-2xl"
            style={m.accent
              ? { background: brand.terracotta, color: brand.agedPaper }
              : { background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}
          >
            <p className="text-xs font-bold uppercase" style={{ fontFamily: brand.jakarta, color: m.accent ? "rgba(255,255,255,0.7)" : brand.terracotta }}>
              {m.label}
            </p>
            <p className="text-xs mb-2" style={{ fontFamily: brand.jakarta, color: m.accent ? "rgba(255,255,255,0.5)" : brand.darkBrown, opacity: 0.6 }}>
              {m.sub}
            </p>
            <p className="text-3xl font-bold mb-2" style={{ fontFamily: brand.mono, color: m.accent ? "white" : brand.darkBrown }}>
              {m.num}
            </p>
            <p className="text-xs leading-relaxed" style={{ fontFamily: brand.lora, color: m.accent ? "rgba(255,255,255,0.75)" : brand.darkBrown, opacity: 0.8 }}>
              {m.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Competitive landscape */}
      <div className="rounded-2xl p-5 mb-5" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
        <p className="text-sm font-bold mb-4" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
          Competitive Landscape
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs" style={{ fontFamily: brand.jakarta }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${brand.warmTan}40` }}>
                <th className="text-left py-2 pr-4" style={{ color: brand.darkBrown, opacity: 0.5 }}>Feature</th>
                <th className="text-center py-2 px-3 font-bold" style={{ color: brand.terracotta }}>Pumpline</th>
                <th className="text-center py-2 px-3" style={{ color: brand.darkBrown, opacity: 0.5 }}>Angi</th>
                <th className="text-center py-2 px-3" style={{ color: brand.darkBrown, opacity: 0.5 }}>Thumbtack</th>
                <th className="text-center py-2 px-3" style={{ color: brand.darkBrown, opacity: 0.5 }}>HomeAdvisor</th>
              </tr>
            </thead>
            <tbody>
              {[
                { f: "Septic-specific", p: "✅", a: "❌", t: "❌", h: "❌" },
                { f: "Browse-first", p: "✅", a: "❌", t: "❌", h: "❌" },
                { f: "Property records", p: "✅", a: "❌", t: "❌", h: "❌" },
                { f: "Flat subscription", p: "✅", a: "❌", t: "❌", h: "❌" },
                { f: "Neighbor badge", p: "✅", a: "❌", t: "❌", h: "❌" },
                { f: "Provider cost", p: "$50-150/mo", a: "$15-100/lead", t: "Bidding", h: "$15-80/lead" },
              ].map((r) => (
                <tr key={r.f} style={{ borderBottom: `1px solid ${brand.warmTan}20` }}>
                  <td className="py-2 pr-4" style={{ color: brand.darkBrown, opacity: 0.7 }}>{r.f}</td>
                  <td className="text-center py-2 px-3 font-bold" style={{ color: brand.terracotta }}>{r.p}</td>
                  <td className="text-center py-2 px-3" style={{ color: brand.darkBrown, opacity: 0.4 }}>{r.a}</td>
                  <td className="text-center py-2 px-3" style={{ color: brand.darkBrown, opacity: 0.4 }}>{r.t}</td>
                  <td className="text-center py-2 px-3" style={{ color: brand.darkBrown, opacity: 0.4 }}>{r.h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Validation signals */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
          <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
            Community Validation Signals
          </p>
          <div className="space-y-2">
            {[
              "r/homeowners (2.3M) + r/DIY (5M+) + r/rural — regular septic questions with zero tool recommendation",
              "6 county Facebook groups, 150K+ members — \"who do you use for septic?\" among most common posts",
              "NOWRA: 10,000+ provider members with no dedicated lead platform",
              "\"Septic tank pumping services\": 110K/mo searches, LOW competition — nobody built a vertical",
            ].map((s) => (
              <div key={s} className="flex gap-2">
                <span style={{ color: brand.forestGreen, flexShrink: 0 }}>→</span>
                <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.75, lineHeight: 1.5 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 rounded-2xl" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
          <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
            Growth Tailwinds
          </p>
          <div className="space-y-2">
            {[
              "Rural broadband expansion: 65M+ rural Americans coming online",
              "Real estate transactions: 3.5M/yr rural, all needing septic history",
              "Angi eroding provider trust — flat subscription model wins loyalty",
              "Property records = 10-year data moat, impossible to replicate",
            ].map((s) => (
              <div key={s} className="flex gap-2">
                <span style={{ color: brand.terracotta, flexShrink: 0 }}>→</span>
                <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.75, lineHeight: 1.5 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: GTM Plan ────────────────────────────────────────────────────────
function GTMSection() {
  return (
    <section id="gtm" className="scroll-mt-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${brand.terracotta}15` }}>
          <TrendingUp size={20} style={{ color: brand.terracotta }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: brand.playfair, color: brand.darkBrown }}>
            GTM Plan
          </h2>
          <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5 }}>
            Go-to-market strategy · Launch sequence · Growth motions
          </p>
        </div>
      </div>

      {/* Positioning */}
      <div className="rounded-2xl p-6 mb-5" style={{ background: brand.slateNavy }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.6 }}>
          Positioning
        </p>
        <p className="text-xl font-bold mb-3" style={{ fontFamily: brand.playfair, color: brand.agedPaper }}>
          "The septic marketplace built for rural America."
        </p>
        <p className="text-sm leading-relaxed" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.85 }}>
          The first browse-first marketplace where rural homeowners see real neighbor reviews, transparent pricing, and property maintenance records — and where septic providers pay a flat subscription instead of gambling on per-lead auctions.
        </p>
      </div>

      {/* Target personas */}
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        {[
          {
            title: "Rural Homeowner",
            subtitle: '"The Responsible Steward"',
            color: brand.forestGreen,
            points: [
              "Homeowners 35-65 in towns under 50K population",
              "Buys on trust and word-of-mouth",
              "Uses Facebook Groups for local recommendations",
              "Pain: no records, opaque pricing, no accountability",
              "Trigger: moving in, selling, septic backup",
            ],
            searches: ["septic tank pumping near me (110K/mo, LOW)", "how often pump septic", "septic service [county]"],
          },
          {
            title: "Septic Service Provider",
            subtitle: '"The Working Pro"',
            color: brand.terracotta,
            points: [
              "Owner-operated, 1-10 trucks, 2-8 counties",
              "Annual revenue $150K-$1.5M",
              "Pain: Angi $15-100/lead for price-shoppers",
              "Pain: Thumbtack bidding wars, no stable presence",
              "Wants: consistent leads, professional profile, no per-lead fees",
            ],
            searches: ["NOWRA (10K+ members)", "State septic associations", "Rural business Facebook groups"],
          },
        ].map((p) => (
          <div key={p.title} className="p-5 rounded-2xl" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg" style={{ background: `${p.color}15` }} />
              <div>
                <p className="font-bold text-sm" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>{p.title}</p>
                <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.55 }}>{p.subtitle}</p>
              </div>
            </div>
            <div className="space-y-1.5 mb-3">
              {p.points.map((pt) => (
                <div key={pt} className="flex gap-2">
                  <span style={{ color: p.color, flexShrink: 0, fontSize: "0.8rem" }}>·</span>
                  <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.75 }}>{pt}</p>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t" style={{ borderColor: `${brand.warmTan}40` }}>
              <p className="text-xs font-bold mb-1" style={{ fontFamily: brand.jakarta, color: p.color }}>Where they hang out</p>
              {p.searches.map((s) => (
                <p key={s} className="text-xs" style={{ fontFamily: brand.mono, color: brand.darkBrown, opacity: 0.6 }}>{s}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Launch channels */}
      <div className="mb-5">
        <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
          Launch Channels
        </p>
        <div className="space-y-3">
          {[
            {
              ch: "Reddit (Organic)",
              timing: "Week 1-4",
              budget: "$0",
              why: "5 subreddits, 2.5M+ members — r/homeowners, r/DIY, r/FirstTimeHomeBuyer, r/rural, r/realestate",
              approach: "Value-first comments on existing threads → standalone 'we built this' posts. No promotional language.",
              outcome: "2K-10K impressions, 50-200 signups in first 30 days",
            },
            {
              ch: "Facebook Groups",
              timing: "Week 2-6",
              budget: "$300-500/mo",
              why: "6 county homeowner groups, 150K+ members. Rural homeowners live on Facebook.",
              approach: "Join groups, provide value 1-2 weeks, share the tool with context. Geo-target rural counties in WV, KY, NC, TN, OH.",
              outcome: "3K-15K reach/post, 100-400 signups in first 60 days",
            },
            {
              ch: "SEO / Content",
              timing: "Month 1+",
              budget: "$0",
              why: '"Septic tank pumping services": 110K/mo LOW competition. Long-tail county keywords essentially uncontested.',
              approach: "State guides + county pages auto-generated as providers sign up. FAQ content. Compounds over time.",
              outcome: "1K-5K monthly organic by Month 6",
            },
            {
              ch: "Provider Direct Outreach",
              timing: "Week 1-3",
              budget: "$0",
              why: "Two-sided marketplace needs supply first. 10-20 quality providers makes homeowner side viable.",
              approach: "NOWRA directory + Google Maps cold email/call. Message: 'Free listing, no lead fees, flat $50/mo when ready'.",
              outcome: "10-25 providers in first 60 days",
            },
            {
              ch: "ProductHunt / IndieHackers",
              timing: "Month 2",
              budget: "$0",
              why: "Tech-adjacent launch generates backlinks, early adopter energy, press potential.",
              approach: "Line up 20+ upvotes before launch. Authentic 'why I built this' story. Post r/SideProject simultaneously.",
              outcome: "200-800 signups in 48-hour launch window",
            },
          ].map((c) => (
            <div key={c.ch} className="p-4 rounded-xl" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-sm" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>{c.ch}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded" style={{ background: `${brand.forestGreen}15`, color: brand.forestGreen, fontFamily: brand.jakarta }}>{c.timing}</span>
                  <span className="text-xs px-2 py-0.5 rounded font-bold" style={{ background: `${brand.terracotta}15`, color: brand.terracotta, fontFamily: brand.mono }}>{c.budget}</span>
                </div>
              </div>
              <p className="text-xs mb-1" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.7 }}><strong>Why:</strong> {c.why}</p>
              <p className="text-xs mb-1" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.7 }}><strong>Approach:</strong> {c.approach}</p>
              <p className="text-xs font-semibold" style={{ fontFamily: brand.jakarta, color: brand.forestGreen }}>→ {c.outcome}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 90-day timeline */}
      <div className="rounded-2xl p-5" style={{ background: brand.forestGreen }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.7 }}>
          90-Day Timeline
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              period: "Month 1",
              title: "Seed & Validate",
              cost: "$0",
              items: ["50 provider outreach (NOWRA)", "Reddit & Facebook seeding", "2 SEO articles/week", "5 state guide articles"],
              target: "10 providers live, first signups",
            },
            {
              period: "Month 2",
              title: "Launch Push",
              cost: "$300",
              items: ["ProductHunt + IndieHackers", "Facebook Ads test ($300)", "3 geo-targets (WV, KY, OH)", "Email newsletter to signups"],
              target: "500 users, 10 providers, first paying",
            },
            {
              period: "Month 3",
              title: "Scale Winners",
              cost: "$500-1K/mo",
              items: ["Auto county landing pages", "Provider referral program", "Scale Facebook Ads (CPA <$8)", "SEO compounding from county pages"],
              target: "1K users, 25 providers, $500+ MRR",
            },
          ].map((m) => (
            <div key={m.period} className="p-4 rounded-xl" style={{ background: "rgba(247,243,238,0.1)" }}>
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-bold uppercase" style={{ fontFamily: brand.jakarta, color: brand.terracotta }}>{m.period}</p>
                <span className="text-xs font-bold" style={{ fontFamily: brand.mono, color: brand.warmTan }}>{m.cost}</span>
              </div>
              <p className="font-semibold mb-3" style={{ fontFamily: brand.playfair, color: brand.agedPaper }}>{m.title}</p>
              <div className="space-y-1 mb-3">
                {m.items.map((i) => (
                  <div key={i} className="flex gap-2">
                    <span style={{ color: brand.warmTan, fontSize: "0.75rem" }}>·</span>
                    <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.8 }}>{i}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold" style={{ fontFamily: brand.jakarta, color: brand.terracotta }}>Target: {m.target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Marketing ───────────────────────────────────────────────────────
function MarketingSection() {
  return (
    <section id="marketing" className="scroll-mt-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${brand.slateNavy}15` }}>
          <Megaphone size={20} style={{ color: brand.slateNavy }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: brand.playfair, color: brand.darkBrown }}>
            Marketing Plan
          </h2>
          <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5 }}>
            Positioning · Messaging · Content strategy · KPIs
          </p>
        </div>
      </div>

      {/* Brand voice */}
      <div className="rounded-2xl p-6 mb-5" style={{ background: brand.slateNavy }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.6 }}>
          Brand Voice & Tone
        </p>
        <p className="text-lg font-bold mb-3" style={{ fontFamily: brand.playfair, color: brand.agedPaper }}>
          Direct, trustworthy, slightly irreverent.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.85 }}>
          Pumpline talks like the knowledgeable neighbor who actually knows what they're talking about — not a corporate home services brand. We're on the homeowner's side.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold mb-2" style={{ fontFamily: brand.jakarta, color: brand.terracotta }}>Key phrases</p>
            {['"Your county" — always hyperlocal', '"Real neighbors" / "verified neighbor reviews"', '"Property record" — permanence, not just a booking', '"Browse first" — agency, not pressure', '"Built for rural America" — geographic identity'].map((p) => (
              <p key={p} className="text-xs mb-1" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.8 }}>· {p}</p>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold mb-2" style={{ fontFamily: brand.jakarta, color: brand.terracotta }}>Never says</p>
            {['"Get free quotes" (pay-per-lead language)', '"We connect you with top-rated local pros" (Angi language)', '"Trusted by millions" (lean into small)', "Corporate speak: 'leverage', 'solutions', 'paradigm'"].map((p) => (
              <p key={p} className="text-xs mb-1" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.8 }}>✗ {p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Messaging pillars */}
      <div className="mb-5">
        <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
          Messaging Pillars
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { title: "Hyperlocal", body: '"Your county" and your neighbors. Not reviews from strangers in New Jersey.' },
            { title: "Community Trust", body: "Verified neighbor reviews and 'N neighbors used this provider' badge. Real social proof." },
            { title: "Transparency", body: "Upfront pricing ranges and what neighbors paid. No surprises. No middlemen." },
            { title: "Permanence", body: "Property records tied to the address, transferable on home sale. The Carfax for septic." },
            { title: "Browse-first UX", body: "Homeowners browse before contacting. No pushy lead capture. No callbacks from random contractors." },
            { title: "Provider-friendly", body: "Flat subscription vs pay-per-lead. Providers pay once, profile works 24/7." },
          ].map((m, i) => (
            <div
              key={m.title}
              className="p-4 rounded-xl"
              style={i === 1 ? { background: brand.terracotta } : { background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}
            >
              <p className="font-bold text-sm mb-2" style={{ fontFamily: brand.jakarta, color: i === 1 ? "white" : brand.darkBrown }}>
                {m.title}
              </p>
              <p className="text-xs leading-relaxed" style={{ fontFamily: brand.lora, color: i === 1 ? "rgba(255,255,255,0.85)" : brand.darkBrown, opacity: i === 1 ? 1 : 0.7 }}>
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SEO content strategy */}
      <div className="rounded-2xl p-5 mb-5" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
        <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
          SEO Content Strategy
        </p>
        <div className="space-y-2">
          {[
            { title: "\"How Much Does Septic Pumping Cost in 2026? (By State)\"", kw: "septic pumping cost", cta: "Find providers in your county" },
            { title: "\"How Often Should You Pump Your Septic Tank? The Real Answer\"", kw: "how often pump septic tank", cta: "Set a maintenance reminder free" },
            { title: "\"What to Know Before Buying a House with a Septic System\"", kw: "buying house with septic system", cta: "Check the property's service history" },
            { title: "\"Why Angi and Thumbtack Don't Work for Septic Service\"", kw: "competitive comparison", cta: "Try Pumpline free" },
            { title: "\"The Complete Guide to Septic System Maintenance for Rural Homeowners\"", kw: "septic system maintenance", cta: "Track your maintenance on Pumpline" },
          ].map((a) => (
            <div key={a.title} className="flex items-start justify-between gap-4 py-2 border-b" style={{ borderColor: `${brand.warmTan}30` }}>
              <div className="flex-1">
                <p className="text-xs font-semibold" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>{a.title}</p>
                <p className="text-xs" style={{ fontFamily: brand.mono, color: brand.terracotta }}>KW: {a.kw}</p>
              </div>
              <p className="text-xs shrink-0" style={{ fontFamily: brand.lora, color: brand.forestGreen }}>CTA: {a.cta} →</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social cadence */}
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div className="p-5 rounded-2xl" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
          <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
            Social Cadence
          </p>
          {[
            { platform: "Reddit", freq: "2-3 value-first posts/comments/week" },
            { platform: "Facebook Groups", freq: "1-2 posts/week per active group" },
            { platform: "Twitter/X", freq: "3-4 posts/week" },
            { platform: "LinkedIn", freq: "1 post/week (real estate agents, providers)" },
          ].map((s) => (
            <div key={s.platform} className="flex justify-between py-2 border-b" style={{ borderColor: `${brand.warmTan}30` }}>
              <p className="text-xs font-bold" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>{s.platform}</p>
              <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.6 }}>{s.freq}</p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-2xl" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
          <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
            Email Welcome Sequence
          </p>
          {[
            { day: "Immediate", subj: "Welcome to Pumpline — your county's septic resource", cta: "Set up your property" },
            { day: "Day 3", subj: "Did you know? Most homeowners don't know their septic history", cta: "Log your last service date" },
            { day: "Day 7", subj: "3 providers serving [county] are verified on Pumpline", cta: "View providers in your area" },
            { day: "Day 14", subj: "Your property report — what buyers will ask", cta: "Upgrade to Plus ($10/mo)" },
          ].map((e) => (
            <div key={e.day} className="py-2 border-b" style={{ borderColor: `${brand.warmTan}30` }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-1.5 py-0.5 rounded" style={{ background: `${brand.terracotta}15`, color: brand.terracotta, fontFamily: brand.mono }}>{e.day}</span>
                <p className="text-xs font-semibold" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>{e.subj}</p>
              </div>
              <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.forestGreen }}>CTA: {e.cta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="rounded-2xl p-5" style={{ background: brand.darkBrown }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.6 }}>
          KPIs & Success Metrics
        </p>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { metric: "Month 1", target: "10+ providers listed, 100+ homeowner signups" },
            { metric: "Month 2", target: "500 users, first paying subscribers" },
            { metric: "Month 3", target: "1K users, $500+ MRR, SEO traffic starting" },
            { metric: "Month 6", target: "100 providers, 2.5K homeowners, $2.75K+ MRR" },
          ].map((k) => (
            <div key={k.metric} className="p-3 rounded-xl" style={{ background: "rgba(247,243,238,0.08)" }}>
              <p className="text-xs font-bold mb-1" style={{ fontFamily: brand.mono, color: brand.terracotta }}>{k.metric}</p>
              <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.8 }}>{k.target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Brand ───────────────────────────────────────────────────────────
function BrandSection() {
  const colors = [
    { name: "Forest Green", hex: "#2D5D3B", role: "Primary — CTAs, headings, trust signals" },
    { name: "Terracotta", hex: "#C45E2C", role: "Accent — highlights, badges, urgency" },
    { name: "Slate Navy", hex: "#2B3B4E", role: "Secondary — dark sections, contrast" },
    { name: "Warm Tan", hex: "#C8A882", role: "Muted text — supporting content" },
    { name: "Dark Brown", hex: "#2A2218", role: "Foreground — body text on light" },
    { name: "Aged Paper", hex: "#F7F3EE", role: "Background — base, card surfaces" },
  ]

  return (
    <section id="brand" className="scroll-mt-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${brand.warmTan}30` }}>
          <Palette size={20} style={{ color: brand.darkBrown }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: brand.playfair, color: brand.darkBrown }}>
            Brand Spec
          </h2>
          <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5 }}>
            Colors · Typography · Voice · Design system
          </p>
        </div>
      </div>

      {/* Brand identity summary */}
      <div className="rounded-2xl p-6 mb-5" style={{ background: brand.darkBrown }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.6 }}>
          Brand DNA
        </p>
        <p className="text-xl font-bold mb-2" style={{ fontFamily: brand.playfair, color: brand.agedPaper }}>
          Earthy. Editorial. Rural-authentic.
        </p>
        <p className="text-sm leading-relaxed" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.85 }}>
          Pumpline is not a Silicon Valley startup. It's a tool built for rural America — and it should feel like it. Aged paper textures, editorial serif headlines, forest green as primary. Trustworthy without being corporate. Confident without being slick.
        </p>
      </div>

      {/* Color palette */}
      <div className="mb-5">
        <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
          Color Palette
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {colors.map((c) => (
            <div key={c.name} className="rounded-xl overflow-hidden border" style={{ borderColor: `${brand.warmTan}40` }}>
              <div className="h-16" style={{ background: c.hex }} />
              <div className="p-3" style={{ background: brand.agedPaper }}>
                <p className="font-bold text-sm" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>{c.name}</p>
                <p className="text-xs mb-1" style={{ fontFamily: brand.mono, color: brand.terracotta }}>{c.hex}</p>
                <p className="text-xs" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.6 }}>{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="rounded-2xl p-5 mb-5" style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50` }}>
        <p className="text-sm font-bold mb-4" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
          Typography
        </p>
        <div className="space-y-4">
          {[
            { role: "Display / Headlines", name: "Playfair Display", sample: "The septic marketplace", size: "36-72px, Bold/Italic", use: "H1, H2, slide headlines, hero text" },
            { role: "Body / Editorial", name: "Lora", sample: "Rural America deserves better.", size: "16-18px, Regular/Italic", use: "Body copy, quotes, descriptions" },
            { role: "UI / Interface", name: "Plus Jakarta Sans", sample: "Find providers near me", size: "12-16px, Regular/Semibold/Bold", use: "Navigation, labels, buttons, captions" },
            { role: "Mono / Data", name: "DM Mono", sample: "$50/mo · 110K/mo · +8,338%", size: "12-16px", use: "Pricing, stats, code, badges" },
          ].map((t) => (
            <div key={t.name} className="flex items-start gap-4 py-3 border-b" style={{ borderColor: `${brand.warmTan}30` }}>
              <div className="w-32 shrink-0">
                <p className="text-xs font-bold" style={{ fontFamily: brand.jakarta, color: brand.terracotta }}>{t.role}</p>
                <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5 }}>{t.name}</p>
              </div>
              <div className="flex-1">
                <p className="text-lg mb-1" style={{ fontFamily: t.name === "Playfair Display" ? brand.playfair : t.name === "Lora" ? brand.lora : t.name === "DM Mono" ? brand.mono : brand.jakarta, color: brand.darkBrown }}>
                  {t.sample}
                </p>
                <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5 }}>{t.size} · {t.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Do / Don't */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl" style={{ background: `${brand.forestGreen}10`, border: `1px solid ${brand.forestGreen}40` }}>
          <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.forestGreen }}>
            ✅ Do
          </p>
          {[
            "Use 'your county' framing — hyperlocal always wins",
            "Editorial serif (Playfair) for headlines, always",
            "Aged paper background (#F7F3EE) for light sections",
            "Terracotta for single accent element per section",
            "Neighbor count badge whenever showing reviews",
            "Property-first language: 'property record', not 'history'",
          ].map((d) => (
            <p key={d} className="text-xs mb-1.5" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.75 }}>· {d}</p>
          ))}
        </div>
        <div className="p-5 rounded-2xl" style={{ background: `${brand.terracotta}08`, border: `1px solid ${brand.terracotta}30` }}>
          <p className="text-sm font-bold mb-3" style={{ fontFamily: brand.jakarta, color: brand.terracotta }}>
            ❌ Don&apos;t
          </p>
          {[
            "Generic home services language — Pumpline is septic-only",
            "Blue color palette — that's Angi's visual territory",
            "San-serif headlines — kills the editorial, rural feel",
            "\"Get quotes\" or \"free estimates\" — pay-per-lead language",
            "City or suburban imagery — always rural, always county",
            "Logos of Angi/Thumbtack without competitive context",
          ].map((d) => (
            <p key={d} className="text-xs mb-1.5" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.75 }}>· {d}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Pitch ───────────────────────────────────────────────────────────
function PitchSection() {
  const slides = [
    { num: "01", title: "Title", desc: "Pumpline — The septic marketplace built for rural America. Live at pumpline.ashketing.com" },
    { num: "02", title: "Problem", desc: "21.7M households. Zero accountability infrastructure. No records, opaque pricing, no accountability." },
    { num: "03", title: "Solution", desc: "Browse-first marketplace. County search, transparent pricing, property records." },
    { num: "04", title: "Market Size", desc: "$6.5B TAM — $1.2B SAM — $12M ARR by Year 3 SOM." },
    { num: "05", title: "How It Works", desc: "Three steps for homeowners. Three steps for providers. Both sides, zero friction." },
    { num: "06", title: "Traction & Proof", desc: "110K/mo searches, 2.5M Reddit members, 0 vertical marketplaces before us." },
    { num: "07", title: "Business Model", desc: "Provider SaaS ($50-150/mo) + Homeowner freemium ($10/mo Plus). 90% gross margin." },
    { num: "08", title: "Competition", desc: "Angi sells leads. Thumbtack runs auctions. We built a marketplace. Our moat: property records." },
    { num: "09", title: "GTM", desc: "Organic first: Reddit, Facebook Groups, SEO. Then scale what works. Month 1 cost: $0." },
    { num: "10", title: "Team & Ask", desc: "ChimeStream indie studio. Not raising. Looking for NOWRA, real estate data, rural platform partnerships." },
  ]

  return (
    <section id="pitch" className="scroll-mt-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${brand.terracotta}15` }}>
          <PresentationIcon size={20} style={{ color: brand.terracotta }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: brand.playfair, color: brand.darkBrown }}>
            Pitch Deck
          </h2>
          <p className="text-xs" style={{ fontFamily: brand.jakarta, color: brand.darkBrown, opacity: 0.5 }}>
            10-slide investor presentation
          </p>
        </div>
      </div>

      {/* CTA to view deck */}
      <div
        className="rounded-2xl p-6 mb-5 flex items-center justify-between"
        style={{ background: brand.forestGreen }}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.7 }}>
            Interactive Pitch Deck
          </p>
          <p className="text-xl font-bold mb-1" style={{ fontFamily: brand.playfair, color: brand.agedPaper }}>
            10 slides · Framer Motion animations · Arrow key navigation
          </p>
          <p className="text-sm" style={{ fontFamily: brand.lora, color: brand.warmTan, opacity: 0.8 }}>
            Full-screen slides with brand design and all marketer-sourced content
          </p>
        </div>
        <Link
          href="/pitch"
          className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-80"
          style={{ background: brand.terracotta, color: "white", fontFamily: brand.jakarta, textDecoration: "none" }}
        >
          Open Pitch
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Slide index */}
      <div className="grid sm:grid-cols-2 gap-3">
        {slides.map((s) => (
          <Link
            key={s.num}
            href={`/pitch`}
            className="flex gap-3 p-4 rounded-xl transition-shadow hover:shadow-sm"
            style={{ background: "#FAF7F3", border: `1px solid ${brand.warmTan}50`, textDecoration: "none" }}
          >
            <p className="text-xl font-bold shrink-0" style={{ fontFamily: brand.mono, color: brand.terracotta }}>
              {s.num}
            </p>
            <div>
              <p className="font-semibold text-sm" style={{ fontFamily: brand.jakarta, color: brand.darkBrown }}>
                {s.title}
              </p>
              <p className="text-xs leading-relaxed" style={{ fontFamily: brand.lora, color: brand.darkBrown, opacity: 0.6 }}>
                {s.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Deck link + live site */}
      <div className="flex items-center gap-3 mt-5">
        <a
          href="https://pumpline.ashketing.com/pitch"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm hover:opacity-80 transition-opacity"
          style={{ fontFamily: brand.jakarta, color: brand.terracotta, textDecoration: "none" }}
        >
          <ExternalLink size={14} />
          pumpline.ashketing.com/pitch
        </a>
        <span style={{ color: brand.warmTan }}>·</span>
        <a
          href="https://pumpline.ashketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm hover:opacity-80 transition-opacity"
          style={{ fontFamily: brand.jakarta, color: brand.forestGreen, textDecoration: "none" }}
        >
          <ExternalLink size={14} />
          Live marketplace
        </a>
      </div>
    </section>
  )
}

// ─── Docs hub shell ───────────────────────────────────────────────────────────
const navItems = [
  { id: "research", label: "Research", icon: FileText, color: brand.forestGreen },
  { id: "gtm", label: "GTM Plan", icon: TrendingUp, color: brand.terracotta },
  { id: "marketing", label: "Marketing", icon: Megaphone, color: brand.slateNavy },
  { id: "brand", label: "Brand", icon: Palette, color: brand.warmTan },
  { id: "pitch", label: "Pitch Deck", icon: PresentationIcon, color: brand.terracotta },
]

const sectionComponents: Record<string, React.FC> = {
  research: ResearchSection,
  gtm: GTMSection,
  marketing: MarketingSection,
  brand: BrandSection,
  pitch: PitchSection,
}

export default function DocsPage() {
  const [active, setActive] = useState("research")
  const [mobileOpen, setMobileOpen] = useState(false)

  const ActiveSection = sectionComponents[active]

  return (
    <div style={{ background: brand.agedPaper, minHeight: "100vh" }}>
      {/* Top bar */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between px-6 h-14 border-b"
        style={{ background: brand.agedPaper, borderColor: `${brand.warmTan}50` }}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-lg font-bold hover:opacity-80 transition-opacity"
            style={{ fontFamily: brand.playfair, color: brand.darkBrown, textDecoration: "none" }}
          >
            Pumpline
          </Link>
          <span
            className="text-xs px-2 py-0.5 rounded"
            style={{ background: `${brand.forestGreen}15`, color: brand.forestGreen, fontFamily: brand.jakarta }}
          >
            Docs
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://pumpline.ashketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-xs hover:opacity-80 transition-opacity"
            style={{ fontFamily: brand.jakarta, color: brand.terracotta, textDecoration: "none" }}
          >
            <ExternalLink size={12} />
            Live site
          </a>
          <button
            className="sm:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: brand.darkBrown }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed sm:sticky top-14 h-[calc(100vh-3.5rem)] w-60 shrink-0 border-r overflow-y-auto z-30 transition-transform ${mobileOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
          style={{ background: brand.forestGreen, borderColor: `${brand.forestGreen}80` }}
        >
          <div className="p-5">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ fontFamily: brand.jakarta, color: brand.warmTan, opacity: 0.5 }}
            >
              Documentation
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = active === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActive(item.id)
                      setMobileOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all"
                    style={{
                      background: isActive ? "rgba(247,243,238,0.12)" : "transparent",
                      borderLeft: isActive ? `3px solid ${brand.terracotta}` : "3px solid transparent",
                    }}
                  >
                    <Icon size={16} style={{ color: isActive ? brand.terracotta : brand.warmTan, opacity: isActive ? 1 : 0.6 }} />
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: brand.jakarta, color: isActive ? brand.agedPaper : brand.warmTan }}
                    >
                      {item.label}
                    </span>
                  </button>
                )
              })}
            </nav>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(200,168,130,0.2)" }}>
              <Link
                href="/pitch"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
                style={{ fontFamily: brand.jakarta, color: brand.terracotta, textDecoration: "none" }}
              >
                <PresentationIcon size={14} />
                View Pitch Deck →
              </Link>
              <a
                href="https://pumpline.ashketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
                style={{ fontFamily: brand.jakarta, color: brand.warmTan, textDecoration: "none", opacity: 0.7 }}
              >
                <ExternalLink size={14} />
                Live marketplace →
              </a>
            </div>
          </div>
        </aside>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-20 sm:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 px-6 sm:px-10 lg:px-16 py-10 min-w-0">
          <div className="max-w-3xl">
            <ActiveSection />
          </div>
        </main>
      </div>
    </div>
  )
}
