import Image from "next/image"

const features = [
  {
    icon: "🗺️",
    title: "County-Based Search",
    description:
      "Every provider is mapped to their actual service counties. No more calling three companies and learning they don't serve your area.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "Providers publish real price ranges — standard pump, emergency callout, inspection. You know the ballpark before you dial.",
  },
  {
    icon: "⭐",
    title: "Verified Neighbor Reviews",
    description:
      'Reviews are property-linked — we know "Madison County, OH" because that\'s where the service happened. No fake reviews from out-of-state accounts.',
  },
  {
    icon: "📋",
    title: "Property Service Records",
    description:
      "Every job logged builds a permanent service history tied to your address — not your account. Transfers automatically when you sell.",
  },
  {
    icon: "⏰",
    title: "Maintenance Reminders",
    description:
      "We know your tank size and last pump date. We'll remind you at the right interval — not too early, not after a backup.",
  },
  {
    icon: "🚨",
    title: "Emergency Dispatch",
    description:
      "Filter for providers with 24/7 emergency availability. See who's answered emergency calls in your county in the last 90 days.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F3EE" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}
          >
            Features
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
          >
            Everything missing from every other contractor directory
          </h2>
        </div>

        {/* Feature icons image */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/feature-icons.png"
            alt="Pumpline feature icons"
            width={720}
            height={160}
            className="w-full max-w-2xl object-contain"
          />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border hover:shadow-md transition-shadow"
              style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
            >
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
