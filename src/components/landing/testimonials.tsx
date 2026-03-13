const testimonials = [
  {
    quote:
      "Searched our county and found a provider 8 miles away with 40 local reviews. Used him, he was excellent, and now I know exactly when our next pump is due. Never had this before in 12 years of homeownership.",
    name: "Debra K.",
    location: "Licking County, OH",
    county: "Licking County",
    neighborsCount: 41,
  },
  {
    quote:
      "I was paying $425 for a standard pump for five years. Found through Pumpline that the local average was $310. Called a provider with 22 reviews in our county. Saved $115 on the first job.",
    name: "Tom M.",
    location: "Botetourt County, VA",
    county: "Botetourt County",
    neighborsCount: 22,
  },
  {
    quote:
      "As a provider, Thumbtack was costing me $200/month in leads that barely converted. I signed up on Pumpline for $50/month and got 8 inquiries in my first 30 days. All from people in my actual service area.",
    name: "Randy H.",
    location: "Cherokee County, GA — Provider",
    county: "Cherokee County",
    neighborsCount: null,
    isProvider: true,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F3EE" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}
          >
            Social Proof
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
          >
            What your neighbors are saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border flex flex-col justify-between"
              style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#C45E2C">
                      <path d="M8 1.3L9.5 5.6H14L10.5 8.6L11.7 13L8 10.4L4.3 13L5.5 8.6L2 5.6H6.5L8 1.3Z" />
                    </svg>
                  ))}
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.85, fontStyle: "italic" }}
                >
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.6 }}
                    >
                      {t.location}
                    </p>
                  </div>
                  {t.neighborsCount && (
                    <div
                      className="px-3 py-1 rounded-full text-white text-xs font-bold"
                      style={{ background: "#C45E2C", fontFamily: "'DM Mono', monospace" }}
                    >
                      {t.neighborsCount} neighbors
                    </div>
                  )}
                  {t.isProvider && (
                    <div
                      className="px-3 py-1 rounded-full text-white text-xs font-bold"
                      style={{ background: "#2D5D3B", fontFamily: "'DM Mono', monospace" }}
                    >
                      Provider
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
