import { Suspense } from "react"
import { SignupClient } from "./signup-client"

export default function SignupPage() {
  return (
    <Suspense fallback={<div style={{ background: "#F7F3EE", minHeight: "100vh" }} />}>
      <SignupClient />
    </Suspense>
  )
}
