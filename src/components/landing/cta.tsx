import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 relative topo-overlay"
      style={{ background: "#2D5D3B" }}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}
        >
          Your septic system needs a record.
          <br />
          <em>Start building one today.</em>
        </h2>
        <p
          className="text-base leading-relaxed mb-10"
          style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}
        >
          Browse providers free. No account required to search your county and see pricing. Sign up when you're ready to contact someone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/providers">
            <Button
              size="lg"
              className="h-14 px-8 text-base font-semibold"
              style={{ background: "#C45E2C", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Browse Providers — It's Free
            </Button>
          </Link>
          <Link href="/signup?role=provider">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-semibold"
              style={{ borderColor: "rgba(200,168,130,0.5)", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              List Your Business
            </Button>
          </Link>
        </div>

        <p
          className="mt-6 text-xs"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.6 }}
        >
          No credit card required. Free tier has no time limit.
        </p>
      </div>
    </section>
  )
}
