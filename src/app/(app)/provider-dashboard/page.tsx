import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Star, MapPin, Bell, TrendingUp, Users, Eye, MessageSquare, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function ProviderDashboardPage() {
  const session = await auth()
  if (!session?.user) redirect("/login")

  // Demo provider data
  const provider = {
    businessName: "Appalachian Septic Solutions",
    slug: "appalachian-septic",
    profileScore: 87,
    plan: "PRO",
    counties: ["Hocking County", "Fairfield County", "Perry County"],
    stats: {
      views30d: 312,
      inquiries30d: 28,
      reviewsTotal: 47,
      avgRating: 4.8,
    },
    inquiries: [
      { id: "1", name: "Robert H.", county: "Hocking County", message: "1,200 gallon tank, last pumped 2021. Available weekends. Roughly what would this cost?", date: "2 hours ago", status: "NEW" },
      { id: "2", name: "Susan M.", county: "Fairfield County", message: "Emergency situation — backup in basement. Need service today if possible.", date: "Yesterday", status: "VIEWED" },
      { id: "3", name: "Dave P.", county: "Perry County", message: "Just moved in, need an inspection and pump-out to start fresh. When's your next availability?", date: "3 days ago", status: "RESPONDED" },
    ],
    profileItems: [
      { item: "Business description added", done: true },
      { item: "Phone number verified", done: true },
      { item: "License number on file", done: true },
      { item: "Insurance certificate uploaded", done: false },
      { item: "Service photos uploaded (3+ recommended)", done: false },
      { item: "Pricing ranges set", done: true },
      { item: "County coverage confirmed", done: true },
    ],
  }

  const completedItems = provider.profileItems.filter(i => i.done).length
  const profilePercent = Math.round((completedItems / provider.profileItems.length) * 100)

  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE", minHeight: "100vh" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1
                className="text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
              >
                {provider.businessName}
              </h1>
              <p className="text-sm mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                Provider Dashboard · {provider.plan} Plan
              </p>
            </div>
            <div className="flex gap-2">
              <Link href={`/providers/${provider.slug}`}>
                <Button variant="outline" size="sm" style={{ borderColor: "#C8A882", color: "#2A2218", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  View Profile
                </Button>
              </Link>
              <Link href="/settings">
                <Button size="sm" style={{ background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <Settings size={14} className="mr-1" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: <Eye size={18} />, label: "Profile views (30d)", value: provider.stats.views30d.toLocaleString(), color: "#2D5D3B" },
              { icon: <MessageSquare size={18} />, label: "Inquiries (30d)", value: provider.stats.inquiries30d, color: "#C45E2C" },
              { icon: <Star size={18} />, label: "Avg rating", value: provider.stats.avgRating.toFixed(1), color: "#D4A017" },
              { icon: <Users size={18} />, label: "Total reviews", value: provider.stats.reviewsTotal, color: "#2B3B4E" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border p-5"
                style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
              >
                <div className="flex items-center gap-2 mb-2" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Inquiries */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
                >
                  Recent inquiries
                </h2>
                <span
                  className="px-2 py-0.5 rounded text-xs font-bold"
                  style={{ background: "#C45E2C", color: "white", fontFamily: "'DM Mono', monospace" }}
                >
                  {provider.inquiries.filter(i => i.status === "NEW").length} new
                </span>
              </div>

              <div className="space-y-3">
                {provider.inquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className="rounded-xl border p-5"
                    style={{
                      background: "#FAF7F3",
                      borderColor: inquiry.status === "NEW" ? "#C45E2C" : "#C8A882",
                      borderWidth: inquiry.status === "NEW" ? 2 : 1,
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                          {inquiry.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <MapPin size={11} style={{ color: "#C8A882" }} />
                          <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                            {inquiry.county} · {inquiry.date}
                          </span>
                        </div>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{
                          background: inquiry.status === "NEW" ? "rgba(196,94,44,0.1)" : "rgba(45,93,59,0.1)",
                          color: inquiry.status === "NEW" ? "#C45E2C" : "#2D5D3B",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.8 }}>
                      {inquiry.message}
                    </p>
                    <Button
                      size="sm"
                      className="mt-3"
                      style={{ background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Reply
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — profile score + counties */}
            <div className="space-y-4">
              {/* Profile score */}
              <div className="rounded-xl border p-5" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                    Profile score
                  </h3>
                  <span
                    className="text-xl font-bold"
                    style={{ fontFamily: "'DM Mono', monospace", color: "#2D5D3B" }}
                  >
                    {profilePercent}%
                  </span>
                </div>
                <div className="score-bar mb-4">
                  <div className="score-bar-fill" style={{ width: `${profilePercent}%`, background: "#2D5D3B" }} />
                </div>
                <div className="space-y-2">
                  {provider.profileItems.map((item) => (
                    <div key={item.item} className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: item.done ? "#2D5D3B" : "rgba(200,168,130,0.4)" }}
                      >
                        {item.done && (
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: item.done ? "#2A2218" : "#2A2218",
                          opacity: item.done ? 0.7 : 1,
                          textDecoration: item.done ? "line-through" : "none",
                        }}
                      >
                        {item.item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* County coverage */}
              <div className="rounded-xl border p-5" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                  Your counties
                </h3>
                <div className="space-y-2">
                  {provider.counties.map((county) => (
                    <div
                      key={county}
                      className="flex items-center gap-2 px-3 py-2 rounded"
                      style={{ background: "rgba(45,93,59,0.08)" }}
                    >
                      <MapPin size={12} style={{ color: "#2D5D3B" }} />
                      <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                        {county}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3"
                  style={{ borderColor: "#C8A882", color: "#2A2218", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Edit Counties
                </Button>
              </div>

              {/* Upgrade CTA for FREE plan */}
              {provider.plan === "FREE" && (
                <div className="rounded-xl p-5" style={{ background: "#C45E2C" }}>
                  <TrendingUp size={18} className="mb-2" style={{ color: "white" }} />
                  <h3 className="font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
                    Upgrade to Pro
                  </h3>
                  <p className="text-xs mb-3" style={{ fontFamily: "'Lora', serif", color: "rgba(255,255,255,0.85)" }}>
                    Get priority placement and serve up to 5 counties for $50/mo.
                  </p>
                  <Link href="/pricing">
                    <Button className="w-full" style={{ background: "white", color: "#C45E2C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      See Plans
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
