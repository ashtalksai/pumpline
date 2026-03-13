"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: "title",
    bg: "#2D5D3B",
    content: (
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}>
          Investor Deck · 2026
        </p>
        <h1 className="text-6xl sm:text-8xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
          Pumpline
        </h1>
        <p className="text-2xl" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
          The septic service marketplace for rural America
        </p>
        <p className="text-base mt-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.7 }}>
          21.7M households. $0 in dedicated marketplace infrastructure. Until now.
        </p>
      </div>
    ),
  },
  {
    id: "problem",
    bg: "#2A2218",
    content: (
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}>
          The Problem
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
          1 in 5 American homes runs on a system with zero accountability
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { stat: "No records", detail: "Service history disappears when homes are sold" },
            { stat: "Opaque pricing", detail: "No baseline — homeowners pay whatever they're quoted" },
            { stat: "Zero accountability", detail: "Bad providers face zero consequences" },
          ].map((p) => (
            <div key={p.stat} className="p-4 rounded-xl" style={{ background: "rgba(247,243,238,0.08)" }}>
              <p className="text-xl font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "#C45E2C" }}>{p.stat}</p>
              <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "market",
    bg: "#2B3B4E",
    content: (
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}>
          Market Size
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
          A neglected vertical in a massive market
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { number: "21.7M", label: "US homes on septic", sub: "1 in 5 households" },
            { number: "+8,338%", label: "Keyword growth", sub: "Septic pumping searches" },
            { number: "$0", label: "Dedicated marketplace", sub: "Angi/Thumbtack are generic" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "#F7F3EE" }}>{s.number}</p>
              <p className="text-sm font-semibold mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>{s.label}</p>
              <p className="text-xs mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.6 }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "solution",
    bg: "#2D5D3B",
    content: (
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>
          The Solution
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
          Browse first. No quote auctions. No per-lead fees.
        </h2>
        <p className="text-lg mb-8" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
          Property-linked service records. County-based search. Neighbor trust signals. The data moat no competitor can replicate.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {["County-based provider search", "Transparent pricing ranges", "Property-linked service history", '"N neighbors used this provider" badge', "Maintenance reminders", "Browse-first (no pressure)"].map((f) => (
            <div key={f} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C45E2C" }} />
              <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "revenue",
    bg: "#2A2218",
    content: (
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}>
          Revenue Model
        </p>
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
          Subscription SaaS — providers pay, homeowners browse free
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.6 }}>Providers</p>
            {[{ plan: "Free", price: "$0" }, { plan: "Pro", price: "$50/mo" }, { plan: "Premium", price: "$150/mo" }].map((p) => (
              <div key={p.plan} className="flex justify-between py-2 border-b" style={{ borderColor: "rgba(200,168,130,0.15)" }}>
                <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>{p.plan}</span>
                <span className="font-bold text-sm" style={{ fontFamily: "'DM Mono', monospace", color: "#F7F3EE" }}>{p.price}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.6 }}>Homeowners</p>
            {[{ plan: "Free", price: "$0" }, { plan: "Plus", price: "$10/mo" }].map((p) => (
              <div key={p.plan} className="flex justify-between py-2 border-b" style={{ borderColor: "rgba(200,168,130,0.15)" }}>
                <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>{p.plan}</span>
                <span className="font-bold text-sm" style={{ fontFamily: "'DM Mono', monospace", color: "#F7F3EE" }}>{p.price}</span>
              </div>
            ))}
            <p className="text-xs mt-3" style={{ fontFamily: "'Lora', serif", color: "#C8A882", opacity: 0.7 }}>
              1,000 paying providers at Pro = $600K ARR
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "traction",
    bg: "#2B3B4E",
    content: (
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}>
          Why Now
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
          The timing is clear
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {[
            "Search volume for septic services up 8,338% — massive undiscovered demand",
            "Angi and Thumbtack eroding trust — providers and homeowners both looking for alternatives",
            "Rural America underserved by every vertical marketplace — no one has targeted this",
            "Property records as data moat — first mover builds defensible position",
          ].map((point, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ background: "rgba(247,243,238,0.08)" }}>
              <span className="text-lg font-bold shrink-0" style={{ fontFamily: "'DM Mono', monospace", color: "#C45E2C" }}>0{i+1}</span>
              <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>{point}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ask",
    bg: "#2D5D3B",
    content: (
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>
          The Ask
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
          Let's build the infrastructure rural America deserves.
        </h2>
        <p className="text-base mb-8" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
          pumpline.io · hello@pumpline.io
        </p>
        <div className="inline-flex items-center px-6 py-3 rounded-full" style={{ background: "#C45E2C" }}>
          <p className="text-xl font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "white" }}>pumpline.ashketing.com</p>
        </div>
      </div>
    ),
  },
]

export default function DeckPage() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1))

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: slides[current].bg, transition: "background 0.4s ease" }}
    >
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl"
          >
            {slides[current].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-8 pb-8">
        <Button
          variant="ghost"
          onClick={prev}
          disabled={current === 0}
          style={{ color: "#C8A882" }}
        >
          <ChevronLeft size={20} className="mr-1" />
          Prev
        </Button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === current ? "#C45E2C" : "rgba(200,168,130,0.4)",
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          onClick={next}
          disabled={current === slides.length - 1}
          style={{ color: "#C8A882" }}
        >
          Next
          <ChevronRight size={20} className="ml-1" />
        </Button>
      </div>
    </div>
  )
}
