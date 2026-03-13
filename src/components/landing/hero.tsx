"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [location, setLocation] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (location.trim()) {
      router.push(`/providers?location=${encodeURIComponent(location)}`)
    } else {
      router.push("/providers")
    }
  }

  return (
    <section
      className="relative min-h-[600px] flex items-center overflow-hidden topo-overlay"
      style={{ background: "#2D5D3B" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero-illustration.png"
          alt="Rural county map with provider pins"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{
              background: "rgba(196, 94, 44, 0.2)",
              color: "#F7A87C",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#C45E2C" }} />
            The only marketplace built for septic
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F7F3EE",
            }}
          >
            Find a trusted septic pro in your county
          </h1>

          <p
            className="text-lg mb-8 leading-relaxed"
            style={{
              fontFamily: "'Lora', serif",
              color: "#C8A882",
              opacity: 0.9,
            }}
          >
            Browse providers who actually serve your area — see what your neighbors paid, read verified reviews, and get your system on a maintenance schedule that protects your home investment.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex gap-3 max-w-md">
            <div className="relative flex-1">
              <MapPin
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "#C8A882" }}
              />
              <Input
                type="text"
                placeholder="Enter your county or ZIP code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-9 h-12"
                style={{
                  background: "rgba(247, 243, 238, 0.12)",
                  border: "1px solid rgba(200, 168, 130, 0.4)",
                  color: "#F7F3EE",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 px-6 font-semibold"
              style={{
                background: "#C45E2C",
                color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <Search size={16} className="mr-2" />
              Search
            </Button>
          </form>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { number: "2,400+", label: "Verified providers" },
              { number: "18 states", label: "Coverage" },
              { number: "97%", label: "Satisfaction rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'DM Mono', monospace", color: "#F7F3EE" }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — illustration */}
        <div className="hidden lg:block">
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(200, 168, 130, 0.3)" }}
          >
            <Image
              src="/images/hero-illustration.png"
              alt="County map with provider service areas"
              width={560}
              height={420}
              className="w-full object-cover"
            />
            <div
              className="p-4"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              <p
                className="text-sm text-center"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#C8A882",
                }}
              >
                <span style={{ color: "#F7F3EE", fontWeight: 600 }}>34 providers</span> found in Madison County, OH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
