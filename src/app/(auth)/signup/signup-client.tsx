"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export function SignupClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get("role") === "provider" ? "provider" : "homeowner"

  const [role, setRole] = useState<"homeowner" | "provider">(defaultRole as any)
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
        return
      }

      if (role === "provider") {
        router.push("/onboard/provider")
      } else {
        router.push("/dashboard")
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-4" style={{ background: "#F7F3EE" }}>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Image
              src="/images/logo-placeholder.png"
              alt="Pumpline"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h1
              className="text-3xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2A2218" }}
            >
              Create your account
            </h1>
            <p
              className="text-sm"
              style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.7 }}
            >
              Already have an account?{" "}
              <Link href="/login" className="underline" style={{ color: "#2D5D3B" }}>
                Sign in
              </Link>
            </p>
          </div>

          <div
            className="rounded-2xl border p-8"
            style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
          >
            {/* Role Toggle */}
            <div className="flex rounded-lg overflow-hidden border mb-6" style={{ borderColor: "#C8A882" }}>
              {(["homeowner", "provider"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className="flex-1 py-2 text-sm font-medium transition-colors capitalize"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    background: role === r ? "#2D5D3B" : "transparent",
                    color: role === r ? "#F7F3EE" : "#2A2218",
                  }}
                >
                  {r === "homeowner" ? "I'm a Homeowner" : "I'm a Provider"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                  Full name
                </Label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="mt-1"
                  style={{ borderColor: "#C8A882", background: "#F7F3EE" }}
                />
              </div>
              <div>
                <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                  Email address
                </Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="mt-1"
                  style={{ borderColor: "#C8A882", background: "#F7F3EE" }}
                />
              </div>
              <div>
                <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                  Password
                </Label>
                <Input
                  type="password"
                  placeholder="At least 8 characters"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  minLength={8}
                  required
                  className="mt-1"
                  style={{ borderColor: "#C8A882", background: "#F7F3EE" }}
                />
              </div>

              {error && (
                <p className="text-sm" style={{ color: "#C0392B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 font-semibold"
                style={{
                  background: "#2D5D3B",
                  color: "#F7F3EE",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {loading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <p
              className="text-xs text-center mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218", opacity: 0.5 }}
            >
              By signing up, you agree to our{" "}
              <Link href="/terms" className="underline">Terms</Link> and{" "}
              <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
