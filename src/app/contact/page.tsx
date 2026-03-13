"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Clock, HelpCircle } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", type: "homeowner", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE" }}>
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#2D5D3B" }}>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
              Get in touch
            </h1>
            <p className="text-base" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
              Questions, feedback, or a problem with your account — we're real people who respond.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl border p-10 text-center" style={{ background: "#FAF7F3", borderColor: "#2D5D3B", borderWidth: 2 }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#2D5D3B" }}>
                    <MessageSquare size={20} style={{ color: "white" }} />
                  </div>
                  <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                    Message received
                  </h2>
                  <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}>
                    We'll get back to you at {form.email} within 1 business day.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border p-8" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Your name</Label>
                        <Input className="mt-1" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Full name" required style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                      </div>
                      <div>
                        <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email</Label>
                        <Input className="mt-1" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" required style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                      </div>
                    </div>
                    <div>
                      <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>I am a...</Label>
                      <div className="flex gap-3 mt-1">
                        {["homeowner", "provider", "other"].map(t => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm({...form, type: t})}
                            className="flex-1 py-2 text-xs font-medium rounded border capitalize transition-colors"
                            style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              background: form.type === t ? "#2D5D3B" : "transparent",
                              color: form.type === t ? "#F7F3EE" : "#2A2218",
                              borderColor: form.type === t ? "#2D5D3B" : "#C8A882",
                            }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Message</Label>
                      <Textarea className="mt-1" rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="What can we help you with?" required style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                    </div>
                    <Button type="submit" className="w-full h-11" style={{ background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: <Mail size={18} />, title: "Email support", body: "hello@pumpline.io — we respond within 1 business day.", color: "#2D5D3B" },
                { icon: <Clock size={18} />, title: "Response time", body: "Monday–Friday, 9am–6pm ET. Weekend messages get a Monday response.", color: "#C45E2C" },
                { icon: <HelpCircle size={18} />, title: "Provider help", body: "For billing, profile issues, or verification questions — use the contact form and select 'Provider'.", color: "#2B3B4E" },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border p-5" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${card.color}15`, color: card.color }}>
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}>
                    {card.body}
                  </p>
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
