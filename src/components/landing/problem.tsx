export function ProblemSection() {
  const problems = [
    {
      number: "01",
      headline: "You don't know when you last pumped",
      body:
        "Most homeowners can't tell you the last time their tank was serviced — or the one before. No records transfer when a house is sold. You're maintaining a $10,000 system completely blind.",
    },
    {
      number: "02",
      headline: "Pricing is totally opaque",
      body:
        'Call three contractors, get three wildly different quotes. No baseline, no transparency, no way to know if $350 is fair or if $800 is a rip-off. Your only option is to guess — or get taken.',
    },
    {
      number: "03",
      headline: "No accountability when things go wrong",
      body:
        "A generic handyman-directory listing is deleted the moment something fails. No verified work history. No before-and-after photos. No way to hold anyone accountable when a $400 pump turns into a $4,000 repair.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F3EE" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C45E2C" }}
          >
            The Problem
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
          >
            Septic service is the only home system<br />
            with zero accountability infrastructure
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.number}
              className="p-8 rounded-xl border"
              style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
            >
              <span
                className="block text-5xl font-bold mb-4"
                style={{ fontFamily: "'DM Mono', monospace", color: "#C8A882" }}
              >
                {p.number}
              </span>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
              >
                {p.headline}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.75 }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p
            className="text-lg font-medium"
            style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.8, fontStyle: "italic" }}
          >
            21.7 million US households depend on septic systems. None of them have a proper service marketplace.
          </p>
        </div>
      </div>
    </section>
  )
}
