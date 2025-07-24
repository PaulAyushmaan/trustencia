import type { Metadata } from "next"
import PrivacyPolicyClientPage from "./PrivacyPolicyClientPage"

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Security",
  description:
    "Learn how Trustencia protects your personal information. Our comprehensive privacy policy covers data collection, usage, sharing, and your rights under GDPR and other regulations.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage />
}
