export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Search your county",
      description:
        "Enter your county name or ZIP. See every verified provider who actively serves your area — with response time data and current availability.",
    },
    {
      step: "02",
      title: "Compare & choose",
      description:
        "Read reviews from actual neighbors. Compare pricing ranges. Check how many homes in your county have used this provider. No guessing.",
    },
    {
      step: "03",
      title: "Contact directly",
      description:
        "Send an inquiry through the platform. No phone-tag, no lead fees, no middleman. The provider responds directly to you.",
    },
    {
      step: "04",
      title: "Log the service",
      description:
        "After the job, the service is logged to your property record. Your health score updates. You get a reminder when the next service is due.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#2D5D3B" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#C8A882" }}
          >
            How It Works
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}
          >
            From unknown to scheduled in 10 minutes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.step} className="relative">
              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px -z-0"
                  style={{ background: "rgba(200,168,130,0.3)" }}
                />
              )}
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2"
                  style={{ background: "rgba(247,243,238,0.1)", borderColor: "#C45E2C" }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ fontFamily: "'DM Mono', monospace", color: "#C45E2C" }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F7F3EE" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Lora', serif", color: "#C8A882" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
