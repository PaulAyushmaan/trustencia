import type { Metadata } from "next"
import TermsOfServicePageClient from "./TermsOfServicePageClient"

export const metadata: Metadata = {
  title: "Terms of Service - Legal Terms & Conditions",
  description:
    "Read Trustencia's terms of service covering user responsibilities, intellectual property, payment terms, and service agreements for our software development services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/terms-of-service",
  },
}

export default function TermsOfServicePage() {
  return <TermsOfServicePageClient />
}
