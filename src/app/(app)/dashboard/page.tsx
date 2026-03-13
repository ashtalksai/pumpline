import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { MapPin, Droplets, Calendar, Bell, Search, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  // Demo data for display
  const property = {
    address: "412 Cedar Ridge Rd",
    city: "Logan",
    state: "OH",
    county: "Hocking County",
    tankSize: 1000,
    lastPumpDate: new Date("2023-06-15"),
    nextPumpDate: new Date("2026-06-15"),
    healthScore: 72, // 0-100
    healthStatus: "yellow" as "green" | "yellow" | "red",
  }

  const monthsUntilNext = Math.max(
    0,
    Math.round((property.nextPumpDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 30))
  )

  const serviceLog = [
    { date: "June 2023", type: "Standard Pump-out", provider: "Appalachian Septic Solutions", cost: "$310", notes: "1,000 gallon tank, full pump. Baffle in good condition." },
    { date: "June 2020", type: "Standard Pump-out", provider: "Appalachian Septic Solutions", cost: "$285", notes: "1,000 gallon tank. Recommended pumping every 3 years." },
    { date: "October 2018", type: "Inspection", provider: "Buckeye Septic Co.", cost: "$175", notes: "Pre-purchase inspection. System passed. Recommend pump within 1 year." },
  ]

  const nearbyProviders = [
    { name: "Appalachian Septic Solutions", county: "Hocking County", rating: 4.8, reviews: 47, slug: "appalachian-septic" },
    { name: "Buckeye Septic Co.", county: "Pickaway County", rating: 4.6, reviews: 89, slug: "buckeye-septic" },
  ]

  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE", minHeight: "100vh" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header */}
          <div className="mb-8">
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
            >
              Welcome back, {session.user.name?.split(" ")[0] || "there"}
            </h1>
            <p className="text-sm mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
              Here's the status of your property's septic system.
            </p>
          </div>

          {/* Property card */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div
              className="lg:col-span-2 rounded-2xl border p-6"
              style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} style={{ color: "#2D5D3B" }} />
                    <h2
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
                    >
                      {property.address}
                    </h2>
                  </div>
                  <p className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                    {property.city}, {property.state} · {property.county}
                  </p>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: property.healthStatus === "green" ? "#2D5D3B" : property.healthStatus === "yellow" ? "#D4A017" : "#C0392B",
                    color: "white",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {property.healthStatus === "green" ? "Healthy" : property.healthStatus === "yellow" ? "Due Soon" : "Overdue"}
                </span>
              </div>

              {/* Health bar */}
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                    System health
                  </span>
                  <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218" }}>
                    {property.healthScore}/100
                  </span>
                </div>
                <div className="score-bar">
                  <div
                    className={`score-bar-fill health-bar-${property.healthStatus}`}
                    style={{ width: `${property.healthScore}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: <Droplets size={14} />, label: "Tank size", value: `${property.tankSize} gal` },
                  { icon: <Clock size={14} />, label: "Last pumped", value: property.lastPumpDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) },
                  { icon: <Calendar size={14} />, label: "Next due", value: property.nextPumpDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) },
                  { icon: <Bell size={14} />, label: "Months away", value: `${monthsUntilNext} mo` },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg text-center" style={{ background: "rgba(45,93,59,0.08)" }}>
                    <div className="flex justify-center mb-1" style={{ color: "#2D5D3B" }}>{stat.icon}</div>
                    <p className="text-base font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218" }}>
                      {stat.value}
                    </p>
                    <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminder card */}
            <div className="rounded-2xl border p-6" style={{ background: "#2D5D3B", borderColor: "#2D5D3B" }}>
              <Bell size={20} className="mb-3" style={{ color: "#C8A882" }} />
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}
              >
                Schedule coming up
              </h3>
              <p className="text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
                Your system is due for service in {monthsUntilNext} months. Book now before the summer rush.
              </p>
              <Link href="/providers?location=Hocking+County">
                <Button
                  className="w-full"
                  style={{ background: "#C45E2C", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <Search size={14} className="mr-2" />
                  Find Providers
                </Button>
              </Link>
            </div>
          </div>

          {/* Service log */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
                >
                  Service history
                </h2>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{ background: "rgba(45,93,59,0.1)", color: "#2D5D3B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {serviceLog.length} records
                </span>
              </div>

              <div className="space-y-3">
                {serviceLog.map((log, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border p-5"
                    style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle size={14} style={{ color: "#2D5D3B" }} />
                          <p className="font-semibold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                            {log.type}
                          </p>
                        </div>
                        <p className="text-xs mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                          {log.provider} · {log.date}
                        </p>
                        <p className="text-xs" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}>
                          {log.notes}
                        </p>
                      </div>
                      <span
                        className="shrink-0 font-bold text-sm"
                        style={{ fontFamily: "'DM Mono', monospace", color: "#2D5D3B" }}
                      >
                        {log.cost}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby providers */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
              >
                Nearby providers
              </h2>
              <div className="space-y-3">
                {nearbyProviders.map((p) => (
                  <div
                    key={p.slug}
                    className="rounded-xl border p-4"
                    style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
                  >
                    <p className="font-semibold text-sm mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                      {p.name}
                    </p>
                    <p className="text-xs mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}>
                      {p.county} · ⭐ {p.rating} · {p.reviews} reviews
                    </p>
                    <Link href={`/providers/${p.slug}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-xs"
                        style={{ borderColor: "#2D5D3B", color: "#2D5D3B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        View Profile
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
