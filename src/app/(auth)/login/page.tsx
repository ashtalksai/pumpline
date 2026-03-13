"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    })

    if (result?.error) {
      setError("Invalid email or password")
      setLoading(false)
      return
    }

    router.push("/dashboard")
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
              Welcome back
            </h1>
            <p
              className="text-sm"
              style={{ fontFamily: "'Lora', serif", color: "#2A2218", opacity: 0.7 }}
            >
              Don't have an account?{" "}
              <Link href="/signup" className="underline" style={{ color: "#2D5D3B" }}>
                Sign up free
              </Link>
            </p>
          </div>

          <div
            className="rounded-2xl border p-8"
            style={{ background: "#FAF7F3", borderColor: "#C8A882" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="flex items-center justify-between mb-1">
                  <Label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2A2218" }}>
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-xs underline" style={{ color: "#2D5D3B" }}>
                    Forgot password?
                  </Link>
                </div>
                <Input
                  type="password"
                  placeholder="Your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
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
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
