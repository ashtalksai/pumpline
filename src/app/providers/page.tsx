import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { prisma } from "@/lib/db"
import { ProviderDirectoryClient } from "./providers-client"

// Seed providers if empty
async function getProviders(location?: string) {
  try {
    const providers = await prisma.provider.findMany({
      include: {
        reviews: true,
        _count: { select: { reviews: true, serviceLogs: true } },
      },
      take: 20,
      orderBy: { profileScore: "desc" },
    })

    // Return seeded demo data if empty
    if (providers.length === 0) {
      return demoProviders
    }

    return providers.map((p) => ({
      id: p.id,
      slug: p.slug,
      businessName: p.businessName,
      description: p.description,
      city: p.city,
      state: p.state,
      counties: p.counties,
      services: p.services,
      priceMin: p.priceMin,
      priceMax: p.priceMax,
      yearsInBusiness: p.yearsInBusiness,
      insuranceVerified: p.insuranceVerified,
      plan: p.plan,
      reviewCount: p._count.reviews,
      serviceCount: p._count.serviceLogs,
      avgRating:
        p.reviews.length > 0
          ? p.reviews.reduce((a, r) => a + r.rating, 0) / p.reviews.length
          : null,
      neighborsCount: p._count.serviceLogs,
    }))
  } catch {
    return demoProviders
  }
}

const demoProviders = [
  { id: "1", slug: "appalachian-septic", businessName: "Appalachian Septic Solutions", description: "Family-owned, serving the tri-county area for 22 years. Specializing in residential pump-outs and inspections.", city: "Logan", state: "OH", counties: ["Hocking County", "Fairfield County", "Perry County"], services: ["Pump-out", "Inspection", "Repair", "Emergency"], priceMin: 28000, priceMax: 45000, yearsInBusiness: 22, insuranceVerified: true, plan: "PRO", reviewCount: 47, serviceCount: 312, avgRating: 4.8, neighborsCount: 47 },
  { id: "2", slug: "blue-ridge-septic", businessName: "Blue Ridge Septic & Drain", description: "Licensed and insured. 24/7 emergency service. We serve all of Botetourt and surrounding counties.", city: "Fincastle", state: "VA", counties: ["Botetourt County", "Rockbridge County", "Bedford County"], services: ["Pump-out", "Drain field repair", "Emergency", "Camera inspection"], priceMin: 32000, priceMax: 55000, yearsInBusiness: 14, insuranceVerified: true, plan: "PRO", reviewCount: 38, serviceCount: 201, avgRating: 4.7, neighborsCount: 38 },
  { id: "3", slug: "rural-roots-septic", businessName: "Rural Roots Septic", description: "Small operation, big service. Every job gets my personal attention.", city: "Pikeville", state: "TN", counties: ["Bledsoe County", "Sequatchie County"], services: ["Pump-out", "Inspection"], priceMin: 22000, priceMax: 38000, yearsInBusiness: 7, insuranceVerified: true, plan: "FREE", reviewCount: 19, serviceCount: 89, avgRating: 4.9, neighborsCount: 19 },
  { id: "4", slug: "buckeye-septic", businessName: "Buckeye Septic Co.", description: "Serving central Ohio since 2001. Full service — pumping, inspection, installation, and repair.", city: "Circleville", state: "OH", counties: ["Pickaway County", "Ross County", "Hocking County", "Fairfield County"], services: ["Pump-out", "Inspection", "Installation", "Repair", "Emergency"], priceMin: 30000, priceMax: 50000, yearsInBusiness: 23, insuranceVerified: true, plan: "PREMIUM", reviewCount: 89, serviceCount: 576, avgRating: 4.6, neighborsCount: 89 },
  { id: "5", slug: "smoky-mountain-septic", businessName: "Smoky Mountain Septic", description: "Serving Cherokee and surrounding counties. Competitive flat rates, no hidden fees.", city: "Canton", state: "GA", counties: ["Cherokee County", "Pickens County", "Dawson County"], services: ["Pump-out", "Inspection", "Drain cleaning"], priceMin: 25000, priceMax: 42000, yearsInBusiness: 11, insuranceVerified: true, plan: "PRO", reviewCount: 52, serviceCount: 287, avgRating: 4.8, neighborsCount: 52 },
  { id: "6", slug: "piedmont-pumping", businessName: "Piedmont Pumping & Drain", description: "State certified, fully insured. Residential and commercial septic services across NC Piedmont.", city: "Asheboro", state: "NC", counties: ["Randolph County", "Montgomery County", "Moore County"], services: ["Pump-out", "Emergency", "Inspection", "Grease trap"], priceMin: 27000, priceMax: 48000, yearsInBusiness: 16, insuranceVerified: true, plan: "PRO", reviewCount: 63, serviceCount: 421, avgRating: 4.7, neighborsCount: 63 },
]

export default async function ProvidersPage({
  searchParams,
}: {
  searchParams: { location?: string }
}) {
  const providers = await getProviders(searchParams.location)

  return (
    <>
      <Navbar />
      <main>
        <ProviderDirectoryClient providers={providers} initialLocation={searchParams.location || ""} />
      </main>
      <Footer />
    </>
  )
}
