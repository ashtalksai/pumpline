"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/providers", label: "Find Providers" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "#F7F3EE",
        borderColor: "#C8A882",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-placeholder.png"
              alt="Pumpline"
              width={36}
              height={36}
              className="rounded"
            />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2D5D3B",
                fontSize: "1.25rem",
                fontWeight: 700,
              }}
            >
              Pumpline
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#2A2218",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#2A2218",
              }}
            >
              Sign in
            </Link>
            <Link href="/signup">
              <Button
                style={{
                  background: "#2D5D3B",
                  color: "#F7F3EE",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                className="hover:opacity-90"
              >
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <button
                className="p-2 rounded"
                aria-label="Open menu"
                style={{ color: "#2A2218" }}
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72"
              style={{ background: "#F7F3EE" }}
            >
              <div className="flex flex-col gap-6 pt-8">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 mb-4">
                  <Image src="/images/logo-placeholder.png" alt="Pumpline" width={32} height={32} />
                  <span style={{ fontFamily: "'Playfair Display', serif", color: "#2D5D3B", fontWeight: 700, fontSize: "1.2rem" }}>
                    Pumpline
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium py-2 border-b"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#2A2218",
                      borderColor: "#C8A882",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full" style={{ borderColor: "#2D5D3B", color: "#2D5D3B" }}>
                      Sign in
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setOpen(false)}>
                    <Button className="w-full" style={{ background: "#2D5D3B", color: "#F7F3EE" }}>
                      Get Started Free
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
