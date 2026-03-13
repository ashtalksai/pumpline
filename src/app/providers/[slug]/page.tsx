import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { notFound } from "next/navigation"
import { Star, Shield, Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Demo providers for when DB is empty
const demoProviders: Record<string, any> = {
  "appalachian-septic": {
    id: "1", slug: "appalachian-septic",
    businessName: "Appalachian Septic Solutions",
    description: "Family-owned and operated since 2002. We've serviced thousands of homes across the tri-county area. Our crew knows the terrain, the soil conditions, and the common system types in this region — knowledge you don't get from a national chain.",
    city: "Logan", state: "OH",
    phone: "(740) 555-0192",
    counties: ["Hocking County", "Fairfield County", "Perry County"],
    services: ["Standard pump-out", "Emergency service", "System inspection", "Drain field evaluation", "Effluent filter cleaning"],
    priceMin: 28000, priceMax: 45000,
    yearsInBusiness: 22, licenseNumber: "OH-SEP-4471",
    insuranceVerified: true, plan: "PRO",
    profileScore: 87,
    reviews: [
      { id: "r1", authorName: "Debra K.", county: "Hocking County", rating: 5, comment: "Called Monday morning, came out same afternoon. No surprise fees, gave me the receipt with exactly what was done. Been using them for 10 years.", createdAt: "2025-11-14" },
      { id: "r2", authorName: "Mark T.", county: "Fairfield County", rating: 5, comment: "Pumped our 1,200 gallon tank and found a cracked baffle. Fixed it same visit for $75 extra. Saved us a potential backup situation.", createdAt: "2025-10-02" },
      { id: "r3", authorName: "Carol W.", county: "Perry County", rating: 4, comment: "Good work, on time, fair pricing. The only thing is they don't take credit cards on site — need to call ahead.", createdAt: "2025-08-17" },
    ],
    recentCounty: "Hocking County",
    neighborsCount: 47,
  },
  "blue-ridge-septic": {
    id: "2", slug: "blue-ridge-septic",
    businessName: "Blue Ridge Septic & Drain",
    description: "Licensed and insured since 2010. 24/7 emergency service available. We serve Botetourt and surrounding counties with a 3-truck crew. Flat-rate pricing — what we quote is what you pay.",
    city: "Fincastle", state: "VA",
    phone: "(540) 555-0847",
    counties: ["Botetourt County", "Rockbridge County", "Bedford County"],
    services: ["Pump-out", "Drain field repair", "Emergency callout", "Camera inspection", "Baffle replacement"],
    priceMin: 32000, priceMax: 55000,
    yearsInBusiness: 14, licenseNumber: "VA-DEQ-8823",
    insuranceVerified: true, plan: "PRO",
    profileScore: 79,
    reviews: [
      { id: "r4", authorName: "Tom M.", county: "Botetourt County", rating: 5, comment: "They came out at 9pm on a Saturday for an emergency. Had us sorted in 2 hours. Worth every dollar.", createdAt: "2025-12-01" },
      { id: "r5", authorName: "Sandy L.", county: "Rockbridge County", rating: 4, comment: "Fair pricing and clean work. They laid down tarps before digging. Nice touch.", createdAt: "2025-09-28" },
    ],
    recentCounty: "Botetourt County",
    neighborsCount: 38,
  },
  "rural-roots-septic": {
    id: "3", slug: "rural-roots-septic",
    businessName: "Rural Roots Septic",
    description: "Small operation, big service. Every job gets my personal attention. I've been pumping tanks in Bledsoe and Sequatchie counties for 7 years. You get the owner on every call — no subcontractors.",
    city: "Pikeville", state: "TN",
    phone: "(423) 555-0314",
    counties: ["Bledsoe County", "Sequatchie County"],
    services: ["Pump-out", "Inspection"],
    priceMin: 22000, priceMax: 38000,
    yearsInBusiness: 7, licenseNumber: "TN-SEP-1192",
    insuranceVerified: true, plan: "FREE",
    profileScore: 74,
    reviews: [
      { id: "r6", authorName: "Beth R.", county: "Bledsoe County", rating: 5, comment: "He showed up when he said he would and charged exactly what he quoted. That's all I ask. Will use again.", createdAt: "2025-11-03" },
      { id: "r7", authorName: "James P.", county: "Sequatchie County", rating: 5, comment: "Best price I found anywhere. No upsells, no nonsense. Highly recommend.", createdAt: "2025-07-19" },
    ],
    recentCounty: "Bledsoe County",
    neighborsCount: 19,
  },
  "buckeye-septic": {
    id: "4", slug: "buckeye-septic",
    businessName: "Buckeye Septic Co.",
    description: "Serving central Ohio since 2001. Full service — pumping, inspection, installation, and repair. Our 5-truck fleet means same-week appointments even in peak season. OEPA licensed, fully insured.",
    city: "Circleville", state: "OH",
    phone: "(740) 555-0628",
    counties: ["Pickaway County", "Ross County", "Hocking County", "Fairfield County"],
    services: ["Pump-out", "Inspection", "Installation", "Repair", "Emergency"],
    priceMin: 30000, priceMax: 50000,
    yearsInBusiness: 23, licenseNumber: "OH-SEP-2209",
    insuranceVerified: true, plan: "PREMIUM",
    profileScore: 91,
    reviews: [
      { id: "r8", authorName: "Greg H.", county: "Pickaway County", rating: 5, comment: "Used them twice now. Both times fast, professional, clean. The crew takes pride in their work.", createdAt: "2025-12-10" },
      { id: "r9", authorName: "Linda F.", county: "Ross County", rating: 4, comment: "Great service, slightly higher price than the one guy in town but worth it for the reliability.", createdAt: "2025-10-22" },
      { id: "r10", authorName: "Dale S.", county: "Hocking County", rating: 5, comment: "They handled a full system inspection for our home sale. Report was thorough and exactly what the buyers needed.", createdAt: "2025-09-05" },
    ],
    recentCounty: "Pickaway County",
    neighborsCount: 89,
  },
  "smoky-mountain-septic": {
    id: "5", slug: "smoky-mountain-septic",
    businessName: "Smoky Mountain Septic",
    description: "Serving Cherokee and surrounding counties since 2013. We post flat rates online — no guessing. Every pump-out includes a visual inspection and a written summary you can keep for your records.",
    city: "Canton", state: "GA",
    phone: "(770) 555-0483",
    counties: ["Cherokee County", "Pickens County", "Dawson County"],
    services: ["Pump-out", "Inspection", "Drain cleaning"],
    priceMin: 25000, priceMax: 42000,
    yearsInBusiness: 11, licenseNumber: "GA-EPD-5541",
    insuranceVerified: true, plan: "PRO",
    profileScore: 83,
    reviews: [
      { id: "r11", authorName: "Yvonne B.", county: "Cherokee County", rating: 5, comment: "They emailed me a written summary after the pump-out. Never had a septic company do that. Really appreciated it.", createdAt: "2025-11-28" },
      { id: "r12", authorName: "Randy C.", county: "Pickens County", rating: 5, comment: "Super easy to book online. Came out two days later, no issues. Price matched the website exactly.", createdAt: "2025-08-14" },
    ],
    recentCounty: "Cherokee County",
    neighborsCount: 52,
  },
  "piedmont-pumping": {
    id: "6", slug: "piedmont-pumping",
    businessName: "Piedmont Pumping & Drain",
    description: "State certified, fully insured. Residential and commercial septic services across the NC Piedmont since 2008. We handle everything from routine pump-outs to grease trap service for restaurants.",
    city: "Asheboro", state: "NC",
    phone: "(336) 555-0751",
    counties: ["Randolph County", "Montgomery County", "Moore County"],
    services: ["Pump-out", "Emergency", "Inspection", "Grease trap"],
    priceMin: 27000, priceMax: 48000,
    yearsInBusiness: 16, licenseNumber: "NC-DWQ-7734",
    insuranceVerified: true, plan: "PRO",
    profileScore: 85,
    reviews: [
      { id: "r13", authorName: "Patricia N.", county: "Randolph County", rating: 5, comment: "Called about a backup on a Friday. They were here by noon. Friendly crew, no drama, problem solved.", createdAt: "2025-12-05" },
      { id: "r14", authorName: "Kevin M.", county: "Moore County", rating: 4, comment: "Good service, the grease trap work was especially thorough. Would have given 5 stars but scheduling took a bit.", createdAt: "2025-10-11" },
      { id: "r15", authorName: "Sharon T.", county: "Montgomery County", rating: 5, comment: "Third year using them for our annual pump-out. Consistent quality every time.", createdAt: "2025-07-30" },
    ],
    recentCounty: "Randolph County",
    neighborsCount: 63,
  },
}

function formatPrice(cents: number) {
  return `$${Math.round(cents / 100)}`
}

export default async function ProviderProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const provider = demoProviders[slug]

  if (!provider) notFound()

  const avgRating =
    provider.reviews.length > 0
      ? provider.reviews.reduce((a: number, r: any) => a + r.rating, 0) / provider.reviews.length
      : null

  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE" }}>
        {/* Header */}
        <div className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#2A2218" }}>
          <div className="max-w-7xl mx-auto">
            <Link
              href="/providers"
              className="text-sm mb-6 inline-block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.7 }}
            >
              ← Back to providers
            </Link>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}
                  >
                    {provider.businessName}
                  </h1>
                  {provider.plan !== "FREE" && (
                    <span
                      className="px-2 py-0.5 rounded text-xs font-bold"
                      style={{ background: "#C45E2C", color: "white", fontFamily: "'DM Mono', monospace" }}
                    >
                      {provider.plan}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} style={{ color: "#C8A882" }} />
                    <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>
                      {provider.city}, {provider.state}
                    </span>
                  </div>
                  {avgRating && (
                    <div className="flex items-center gap-1">
                      <Star size={14} fill="#C45E2C" style={{ color: "#C45E2C" }} />
                      <span className="font-medium text-sm" style={{ fontFamily: "'DM Mono', monospace", color: "#F7F3EE" }}>
                        {avgRating.toFixed(1)}
                      </span>
                      <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.7 }}>
                        ({provider.reviews.length} reviews)
                      </span>
                    </div>
                  )}
                  {provider.insuranceVerified && (
                    <div className="flex items-center gap-1">
                      <Shield size={14} style={{ color: "#2D5D3B" }} />
                      <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}>
                        Licensed & Insured
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Neighbor badge */}
              <div
                className="self-start px-6 py-4 rounded-2xl text-center"
                style={{ background: "#C45E2C" }}
              >
                <p className="text-4xl font-bold leading-none" style={{ fontFamily: "'DM Mono', monospace", color: "white" }}>
                  {provider.neighborsCount}
                </p>
                <p className="text-sm mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.85)" }}>
                  neighbors in {provider.recentCounty}
                </p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.65)" }}>
                  used this provider
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left — main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="rounded-xl border p-6" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                  About this provider
                </h2>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.8 }}>
                  {provider.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  {[
                    { label: "In business", value: `${provider.yearsInBusiness} years` },
                    { label: "Min price", value: formatPrice(provider.priceMin) },
                    { label: "Max price", value: formatPrice(provider.priceMax) },
                    { label: "Profile score", value: `${provider.profileScore}%` },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-lg" style={{ background: "rgba(45,93,59,0.08)" }}>
                      <p className="text-lg font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "#2D5D3B" }}>
                        {stat.value}
                      </p>
                      <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="rounded-xl border p-6" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                  Services offered
                </h2>
                <div className="flex flex-wrap gap-2">
                  {provider.services.map((s: string) => (
                    <div key={s} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(45,93,59,0.1)" }}>
                      <CheckCircle size={14} style={{ color: "#2D5D3B" }} />
                      <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                  Neighbor reviews
                </h2>
                <div className="space-y-4">
                  {provider.reviews.map((review: any) => (
                    <div key={review.id} className="rounded-xl border p-5" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                            {review.authorName}
                          </p>
                          <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.5 }}>
                            {review.county} · {new Date(review.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                          </p>
                        </div>
                        <div className="flex">
                          {[1,2,3,4,5].map((s) => (
                            <Star key={s} size={14} fill={s <= review.rating ? "#C45E2C" : "transparent"} style={{ color: "#C45E2C" }} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.8, fontStyle: "italic" }}>
                        "{review.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — sidebar (county map + contact) */}
            <div className="space-y-4">
              {/* Service counties */}
              <div className="rounded-xl border p-5 sticky top-20" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                  Service area
                </h3>
                <div className="space-y-2 mb-4">
                  {provider.counties.map((county: string) => (
                    <div key={county} className="flex items-center gap-2 p-2 rounded" style={{ background: "rgba(45,93,59,0.08)" }}>
                      <MapPin size={12} style={{ color: "#2D5D3B" }} />
                      <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>{county}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="w-full h-32 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(45,93,59,0.1)", border: "1px solid rgba(45,93,59,0.2)" }}
                >
                  <p className="text-xs text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2D5D3B", opacity: 0.7 }}>
                    County map<br />visualization
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone size={14} style={{ color: "#2D5D3B" }} />
                    <span className="text-sm" style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218" }}>
                      {provider.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} style={{ color: "#2D5D3B" }} />
                    <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.7 }}>
                      License: {provider.licenseNumber}
                    </span>
                  </div>
                </div>

                <Link href={`/signup?next=/providers/${slug}`} className="block mt-4">
                  <Button
                    className="w-full h-11 font-semibold"
                    style={{ background: "#C45E2C", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Send Inquiry
                  </Button>
                </Link>
                <p className="text-xs text-center mt-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.5 }}>
                  No account required for 1 free inquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
