import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FileText, TrendingUp, Megaphone, Palette, PresentationIcon } from "lucide-react"

const sections = [
  {
    id: "research",
    icon: <FileText size={20} />,
    title: "Research",
    description: "Market analysis, competitive landscape, user interviews, and opportunity sizing.",
    color: "#2D5D3B",
    docs: [
      { title: "Market Research Report", subtitle: "IdeaBrowser deep dive · Mar 13, 2026", href: "#" },
      { title: "Competitive Analysis", subtitle: "Angi, Thumbtack, Porch — positioning gaps", href: "#" },
      { title: "User Persona Research", subtitle: "Rural homeowner + septic provider profiles", href: "#" },
    ],
  },
  {
    id: "gtm",
    icon: <TrendingUp size={20} />,
    title: "GTM Plan",
    description: "Go-to-market strategy, launch sequence, and growth motions.",
    color: "#C45E2C",
    docs: [
      { title: "GTM Strategy", subtitle: "Launch plan + distribution channels", href: "#" },
      { title: "Provider Acquisition Playbook", subtitle: "How to get first 100 providers", href: "#" },
      { title: "County Launch Sequence", subtitle: "State-by-state expansion roadmap", href: "#" },
    ],
  },
  {
    id: "marketing",
    icon: <Megaphone size={20} />,
    title: "Marketing",
    description: "Marketing plan, content strategy, and campaign materials.",
    color: "#2B3B4E",
    docs: [
      { title: "Marketing Plan", subtitle: "12-month content + paid strategy", href: "#" },
      { title: "SEO Content Strategy", subtitle: "County pages + keyword targeting", href: "#" },
      { title: "Email Sequences", subtitle: "Onboarding + re-engagement flows", href: "#" },
    ],
  },
  {
    id: "brand",
    icon: <Palette size={20} />,
    title: "Brand",
    description: "Brand identity, design system, voice, and visual guidelines.",
    color: "#C8A882",
    docs: [
      { title: "Brand Spec", subtitle: "Colors, typography, logo usage", href: "#" },
      { title: "Voice & Tone Guide", subtitle: "How Pumpline talks to rural homeowners", href: "#" },
      { title: "Design System", subtitle: "UI tokens, components, patterns", href: "#" },
    ],
  },
  {
    id: "pitch",
    icon: <PresentationIcon size={20} />,
    title: "Pitch Deck",
    description: "Investor presentation and fundraising materials.",
    color: "#C45E2C",
    docs: [
      { title: "Investor Pitch Deck", subtitle: "Interactive slides — 7 slides", href: "/deck" },
      { title: "One Pager", subtitle: "Single-page summary for investors", href: "#" },
      { title: "Financial Projections", subtitle: "3-year model + unit economics", href: "#" },
    ],
  },
]

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F3EE", minHeight: "100vh" }}>
        <div className="flex">
          {/* Sidebar */}
          <aside
            className="hidden lg:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6 border-r"
            style={{ background: "#2D5D3B", borderColor: "#2A5535" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882", opacity: 0.6 }}
            >
              Documentation
            </p>
            <nav className="space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-white/10"
                  style={{ color: "#C8A882", textDecoration: "none" }}
                >
                  <span style={{ color: "#C8A882", opacity: 0.7 }}>{section.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {section.title}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(200,168,130,0.2)" }}>
              <Link
                href="/deck"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C", textDecoration: "none" }}
              >
                <PresentationIcon size={16} />
                View Pitch Deck →
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 px-4 sm:px-8 lg:px-12 py-12">
            <div className="max-w-4xl">
              <h1
                className="text-4xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
              >
                Pumpline Docs
              </h1>
              <p
                className="text-base mb-12"
                style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.7 }}
              >
                All research, strategy, marketing, brand, and pitch materials in one place.
              </p>

              {sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${section.color}15`, color: section.color }}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h2
                        className="text-2xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
                      >
                        {section.title}
                      </h2>
                      <p
                        className="text-xs"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}
                      >
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {section.docs.map((doc) => (
                      <Link
                        key={doc.title}
                        href={doc.href}
                        className="rounded-xl border p-4 hover:shadow-sm transition-shadow block"
                        style={{ background: "#FAF7F3", borderColor: "#C8A882", textDecoration: "none" }}
                      >
                        <div className="w-6 h-6 rounded mb-3" style={{ background: `${section.color}20` }}>
                          <FileText size={12} className="m-auto mt-1.5" style={{ color: section.color }} />
                        </div>
                        <p
                          className="font-semibold text-sm mb-1"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}
                        >
                          {doc.title}
                        </p>
                        <p
                          className="text-xs"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.55 }}
                        >
                          {doc.subtitle}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
