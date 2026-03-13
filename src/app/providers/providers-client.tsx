"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, MapPin, Star, Shield, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Provider = {
  id: string
  slug: string
  businessName: string
  description: string | null
  city: string
  state: string
  counties: string[]
  services: string[]
  priceMin: number | null
  priceMax: number | null
  yearsInBusiness: number | null
  insuranceVerified: boolean
  plan: string
  reviewCount: number
  serviceCount: number
  avgRating: number | null
  neighborsCount: number
}

function formatPrice(cents: number | null) {
  if (!cents) return null
  return `$${Math.round(cents / 100)}`
}

export function ProviderDirectoryClient({
  providers,
  initialLocation,
}: {
  providers: Provider[]
  initialLocation: string
}) {
  const [search, setSearch] = useState(initialLocation)

  const filtered = providers.filter((p) => {
    if (!search.trim()) return true
    const q = search.toLowerCase()
    return (
      p.counties.some((c) => c.toLowerCase().includes(q)) ||
      p.city.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.businessName.toLowerCase().includes(q)
    )
  })

  return (
    <div style={{ background: "#F7F3EE", minHeight: "100vh" }}>
      {/* Search header */}
      <div className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#2D5D3B" }}>
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}
          >
            Find septic providers in your county
          </h1>
          <div className="flex gap-3 max-w-lg">
            <div className="relative flex-1">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#C8A882" }} />
              <Input
                type="text"
                placeholder="County name or ZIP code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-11"
                style={{ background: "rgba(247,243,238,0.15)", borderColor: "rgba(200,168,130,0.3)", color: "#F7F3EE" }}
              />
            </div>
            <Button
              className="h-11 px-5"
              style={{ background: "#C45E2C", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Search size={16} />
            </Button>
          </div>
          <p
            className="mt-3 text-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}
          >
            {filtered.length} provider{filtered.length !== 1 ? "s" : ""} found
            {search ? ` near "${search}"` : ""}
          </p>
        </div>
      </div>

      {/* Provider list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-4">
          {filtered.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p
                className="text-xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
              >
                No providers found in that area — yet.
              </p>
              <p
                className="text-sm mb-6"
                style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.7 }}
              >
                We're adding providers every week. Know a provider in this area?
              </p>
              <Link href="/signup?role=provider">
                <Button style={{ background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Invite a Provider
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div
      className="rounded-xl border p-6 hover:shadow-md transition-shadow"
      style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2
              className="text-xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
            >
              {provider.businessName}
            </h2>
            {provider.plan !== "FREE" && (
              <span
                className="px-2 py-0.5 rounded text-xs font-bold"
                style={{
                  background: provider.plan === "PREMIUM" ? "#C45E2C" : "#2D5D3B",
                  color: "white",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {provider.plan}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <MapPin size={13} style={{ color: "#C8A882" }} />
              <span
                className="text-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.7 }}
              >
                {provider.city}, {provider.state}
              </span>
            </div>
            {provider.avgRating && (
              <div className="flex items-center gap-1">
                <Star size={13} fill="#C45E2C" style={{ color: "#C45E2C" }} />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218" }}
                >
                  {provider.avgRating.toFixed(1)}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}
                >
                  ({provider.reviewCount} reviews)
                </span>
              </div>
            )}
            {provider.insuranceVerified && (
              <div className="flex items-center gap-1">
                <Shield size={13} style={{ color: "#2D5D3B" }} />
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2D5D3B" }}
                >
                  Verified
                </span>
              </div>
            )}
            {provider.yearsInBusiness && (
              <div className="flex items-center gap-1">
                <Clock size={13} style={{ color: "#C8A882" }} />
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}
                >
                  {provider.yearsInBusiness} yrs
                </span>
              </div>
            )}
          </div>

          {provider.description && (
            <p
              className="text-sm mb-3 line-clamp-2"
              style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}
            >
              {provider.description}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {provider.counties.slice(0, 3).map((county) => (
              <span
                key={county}
                className="px-2 py-0.5 rounded text-xs"
                style={{
                  background: "rgba(45,93,59,0.1)",
                  color: "#2D5D3B",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {county}
              </span>
            ))}
            {provider.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-2 py-0.5 rounded text-xs"
                style={{
                  background: "rgba(200,168,130,0.2)",
                  color: "#2A2218",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          {/* Neighbor badge */}
          <div
            className="px-3 py-2 rounded-full text-white text-center"
            style={{ background: "#C45E2C" }}
          >
            <p
              className="text-2xl font-bold leading-none"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {provider.neighborsCount}
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              neighbors served
            </p>
          </div>

          {/* Price */}
          {provider.priceMin && provider.priceMax && (
            <p
              className="text-sm text-right"
              style={{ fontFamily: "'DM Mono', monospace", color: "#2A2218", opacity: 0.7 }}
            >
              {formatPrice(provider.priceMin)} – {formatPrice(provider.priceMax)}
            </p>
          )}

          <Link href={`/providers/${provider.slug}`}>
            <Button
              className="font-medium"
              style={{
                background: "#2D5D3B",
                color: "#F7F3EE",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              View Profile →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
