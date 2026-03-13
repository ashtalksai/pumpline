"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

const STEPS = [
  { id: 1, title: "Business Info", description: "Tell us about your company" },
  { id: 2, title: "Service Area", description: "Which counties do you serve?" },
  { id: 3, title: "Services & Pricing", description: "What do you offer and what does it cost?" },
  { id: 4, title: "Profile Completion", description: "Add license & insurance details" },
  { id: 5, title: "Choose Your Plan", description: "Start free, upgrade anytime" },
]

const COUNTIES = [
  "Hocking County, OH", "Fairfield County, OH", "Perry County, OH",
  "Pickaway County, OH", "Ross County, OH", "Botetourt County, VA",
  "Rockbridge County, VA", "Bedford County, VA", "Cherokee County, GA",
  "Pickens County, GA", "Randolph County, NC", "Montgomery County, NC",
  "Bledsoe County, TN", "Sequatchie County, TN",
]

const SERVICES = ["Standard pump-out", "Emergency service", "System inspection", "Drain field evaluation", "Repair", "Camera inspection", "Grease trap", "Baffle replacement"]

export default function ProviderOnboardPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    businessName: "",
    description: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
    counties: [] as string[],
    services: [] as string[],
    priceMin: "",
    priceMax: "",
    licenseNumber: "",
    yearsInBusiness: "",
    plan: "FREE" as "FREE" | "PRO" | "PREMIUM",
  })

  const toggleCounty = (county: string) => {
    setForm(f => ({
      ...f,
      counties: f.counties.includes(county)
        ? f.counties.filter(c => c !== county)
        : [...f.counties, county],
    }))
  }

  const toggleService = (service: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter(s => s !== service)
        : [...f.services, service],
    }))
  }

  const next = () => {
    if (step < 5) setStep(step + 1)
    else router.push("/provider-dashboard")
  }

  const back = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4" style={{ background: "#F7F3EE" }}>
        <div className="max-w-2xl mx-auto">
          {/* Step indicators */}
          <div className="flex items-center gap-2 mb-8">
            {STEPS.map((s, idx) => (
              <div key={s.id} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: step > s.id ? "#2D5D3B" : step === s.id ? "#C45E2C" : "rgba(200,168,130,0.3)",
                    color: step >= s.id ? "white" : "#2A2218",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {step > s.id ? "✓" : s.id}
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className="flex-1 h-px"
                    style={{ background: step > s.id ? "#2D5D3B" : "rgba(200,168,130,0.3)", minWidth: 20 }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
            >
              {STEPS[step - 1].title}
            </h1>
            <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.7 }}>
              {STEPS[step - 1].description}
            </p>
          </div>

          <div className="rounded-2xl border p-8" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Business name *</Label>
                  <Input className="mt-1" value={form.businessName} onChange={e => setForm({...form, businessName: e.target.value})} placeholder="e.g., Appalachian Septic Solutions" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                </div>
                <div>
                  <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Business description</Label>
                  <Textarea className="mt-1" value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Tell homeowners what makes your business different..." rows={3} style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>City *</Label>
                    <Input className="mt-1" value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder="Logan" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                  </div>
                  <div>
                    <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>State *</Label>
                    <Input className="mt-1" value={form.state} onChange={e => setForm({...form, state: e.target.value})} placeholder="OH" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                  </div>
                </div>
                <div>
                  <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Phone number</Label>
                  <Input className="mt-1" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="(740) 555-0000" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.8 }}>
                  Select every county you actively serve. You can update this at any time.
                </p>
                <div className="flex flex-wrap gap-2">
                  {COUNTIES.map(county => (
                    <button
                      key={county}
                      type="button"
                      onClick={() => toggleCounty(county)}
                      className="px-3 py-2 rounded-lg text-sm border transition-colors"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        background: form.counties.includes(county) ? "#2D5D3B" : "transparent",
                        color: form.counties.includes(county) ? "white" : "#2A2218",
                        borderColor: form.counties.includes(county) ? "#2D5D3B" : "#C8A882",
                      }}
                    >
                      {county}
                    </button>
                  ))}
                </div>
                {form.counties.length === 0 && (
                  <p className="text-xs mt-3" style={{ color: "#C45E2C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Select at least one county to continue
                  </p>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-sm mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                    Services you offer
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map(service => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className="px-3 py-2 rounded-lg text-sm border transition-colors"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          background: form.services.includes(service) ? "#2D5D3B" : "transparent",
                          color: form.services.includes(service) ? "white" : "#2A2218",
                          borderColor: form.services.includes(service) ? "#2D5D3B" : "#C8A882",
                        }}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Minimum price ($)</Label>
                    <Input className="mt-1" type="number" value={form.priceMin} onChange={e => setForm({...form, priceMin: e.target.value})} placeholder="280" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                  </div>
                  <div>
                    <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Maximum price ($)</Label>
                    <Input className="mt-1" type="number" value={form.priceMax} onChange={e => setForm({...form, priceMax: e.target.value})} placeholder="450" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                  </div>
                </div>
                <p className="text-xs" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.6 }}>
                  Price ranges for standard pump-out. Homeowners see this range when browsing. You can always negotiate or adjust per-job.
                </p>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>License number</Label>
                  <Input className="mt-1" value={form.licenseNumber} onChange={e => setForm({...form, licenseNumber: e.target.value})} placeholder="e.g., OH-SEP-4471" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                </div>
                <div>
                  <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Years in business</Label>
                  <Input className="mt-1" type="number" value={form.yearsInBusiness} onChange={e => setForm({...form, yearsInBusiness: e.target.value})} placeholder="10" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                </div>
                <div
                  className="p-4 rounded-xl border-2 border-dashed"
                  style={{ borderColor: "#C8A882" }}
                >
                  <p className="text-sm text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                    Insurance certificate upload<br />
                    <span className="text-xs">PDF or image · Max 10MB</span>
                  </p>
                  <Button variant="outline" size="sm" className="w-full mt-2" style={{ borderColor: "#C8A882", color: "#2A2218" }}>
                    Upload Certificate
                  </Button>
                </div>
                <p className="text-xs" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.6 }}>
                  Adding these details shows a "Verified" badge on your profile. Homes with verified providers get 2x more inquiries.
                </p>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                {[
                  { plan: "FREE", price: "$0", period: "Forever", highlight: false, features: ["Basic profile", "1 county", "Unlimited inquiries", "Basic analytics"] },
                  { plan: "PRO", price: "$50", period: "/mo", highlight: true, features: ["Priority listing", "Up to 5 counties", "Profile score boost", "Review responses", "30-day analytics"] },
                  { plan: "PREMIUM", price: "$150", period: "/mo", highlight: false, features: ["Featured placement", "Unlimited counties", "County ad placement", "Full analytics", "Dedicated support"] },
                ].map((p) => (
                  <div
                    key={p.plan}
                    onClick={() => setForm({...form, plan: p.plan as any})}
                    className="rounded-xl border p-4 cursor-pointer transition-colors"
                    style={{
                      background: form.plan === p.plan ? (p.plan === "PREMIUM" ? "rgba(196,94,44,0.1)" : "rgba(45,93,59,0.1)") : "#FAF7F3",
                      borderColor: form.plan === p.plan ? (p.plan === "PREMIUM" ? "#C45E2C" : "#2D5D3B") : "#C8A882",
                      borderWidth: form.plan === p.plan ? 2 : 1,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>{p.plan}</span>
                        <span className="ml-3 text-xl font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218" }}>{p.price}<span className="text-sm font-normal opacity-60">{p.period}</span></span>
                      </div>
                      {form.plan === p.plan && <CheckCircle size={18} style={{ color: "#2D5D3B" }} />}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {p.features.map(f => (
                        <span key={f} className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.7 }}>
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {form.plan !== "FREE" && (
                  <div className="p-4 rounded-xl border" style={{ borderColor: "#C8A882", background: "#FAF7F3" }}>
                    <p className="font-semibold text-sm mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                      Payment details
                    </p>
                    <Input placeholder="Card number" className="mb-2" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="MM/YY" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                      <Input placeholder="CVC" style={{ borderColor: "#C8A882", background: "#F7F3EE" }} />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-3 mt-6">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={back}
                  style={{ borderColor: "#C8A882", color: "#2A2218", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Back
                </Button>
              )}
              <Button
                type="button"
                onClick={next}
                className="flex-1"
                style={{ background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {step === 5 ? (form.plan === "FREE" ? "Finish Setup Free" : `Start ${form.plan} Plan`) : "Continue →"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
