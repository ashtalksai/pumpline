import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE" }}>
        {/* Hero */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "#2A2218" }}>
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/about-visual.png" alt="Rural American landscape" fill className="object-cover" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}>
              Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
              Built for the 1 in 5 Americans on a septic system
            </h1>
            <p className="text-lg leading-relaxed" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
              We started Pumpline because we were tired of watching rural homeowners get ripped off by a system with zero transparency, zero accountability, and zero memory. Every other home system has a marketplace. Septic didn't.
            </p>
          </div>
        </section>

        {/* Problem we solve */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                The problem nobody was fixing
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.8 }}>
                <p>When a rural homeowner's septic system backs up, they Google "septic pumping near me" and get a list of generic directory listings — most of which are just resellers sending jobs to the lowest bidder. No pricing. No history. No accountability.</p>
                <p>When they sell the house, every service record disappears with them. The next owner starts from zero. The contractor who did shoddy work gets another chance with no consequences.</p>
                <p>And the providers who are doing good work — the family businesses with 20 years in the area — have no way to build the kind of digital reputation that generates referrals beyond word-of-mouth.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/provider-section-illustration.png"
                alt="Small business septic provider"
                width={580}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#2D5D3B" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
              Our mission
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
              Build the infrastructure that rural septic service has always been missing: a place where property maintenance records live permanently, providers earn reputation through verified work history, and homeowners can browse before they call.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "'Lora', serif", color: "#C8A882", opacity: 0.8 }}>
              Not a lead-gen middleman. Not a review farm. A real marketplace with a real data moat that makes every transaction better for everyone involved.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
              What we believe
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Transparency over opacity", body: "If you can't see the pricing, you'll get taken. We fix that." },
                { title: "Records follow property", body: "Service history should outlast homeowners, not die with their account." },
                { title: "Providers deserve better", body: "Good tradespeople deserve a way to build digital reputation." },
                { title: "Browse first, call second", body: "No pressure, no fake urgency. See everything before you decide." },
              ].map((v) => (
                <div key={v.title} className="p-6 rounded-xl border" style={{ background: "#FAF7F3", borderColor: "#C8A882" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "#2B3B4E" }}>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}>
            Join us in building something that matters
          </h2>
          <p className="text-base mb-8" style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}>
            21.7 million households. Zero dedicated marketplace. Until now.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/providers">
              <Button style={{ background: "#C45E2C", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Find Providers</Button>
            </Link>
            <Link href="/signup?role=provider">
              <Button variant="outline" style={{ borderColor: "rgba(200,168,130,0.4)", color: "#F7F3EE", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                List Your Business
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
