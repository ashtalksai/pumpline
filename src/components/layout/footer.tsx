import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: "#2A2218", borderColor: "#2A2218" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/logo-placeholder.png" alt="Pumpline" width={32} height={32} />
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#C8A882",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                }}
              >
                Pumpline
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Lora', serif", color: "#C8A882", opacity: 0.8 }}
            >
              The only marketplace built specifically for septic service. Find trusted providers in your county — verified reviews, transparent pricing, and your property's maintenance history in one place.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              className="font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.5 }}
            >
              Product
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/providers", label: "Find Providers" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.7 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.5 }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.7 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.5 }}>
                For Providers
              </h4>
              <Link href="/signup?role=provider" className="text-sm hover:opacity-100 transition-opacity" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}>
                List Your Business →
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "#2A2218" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.5 }}
          >
            © {new Date().getFullYear()} Pumpline. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.4 }}
          >
            21.7 million US households depend on septic systems. We serve them all.
          </p>
        </div>
      </div>
    </footer>
  )
}
