import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#2B3B4E" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}
          >
            The Solution
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}
          >
            Browse first. No quotes, no callbacks, no pressure.
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}
          >
            Pumpline is a browse-first marketplace — you see pricing, reviews, and service area before you contact anyone. Search by county, filter by service type, and read what your actual neighbors paid and experienced. No lead-generation middlemen. Direct relationships.
          </p>

          <div className="space-y-4">
            {[
              "Search providers by county — your area only",
              "See upfront pricing ranges before you call",
              "Read verified neighbor reviews with real service history",
              "Track your property's maintenance record permanently",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                  style={{ background: "#C45E2C" }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/providers">
              <Button
                className="h-12 px-6"
                style={{ background: "#2D5D3B", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Browse Providers Free
              </Button>
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(200,168,130,0.2)" }}>
          <Image
            src="/images/hero-illustration.png"
            alt="Pumpline county search interface"
            width={580}
            height={440}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
