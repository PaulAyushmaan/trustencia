import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Our Services - AI Development, Web Development & Cybersecurity",
  description:
    "Comprehensive software development services including AI/ML solutions, web development, cybersecurity, e-commerce platforms, UI/UX design, and SEO optimization. Starting from $2,000.",
  keywords: [
    "software development services",
    "AI development services",
    "web development agency",
    "cybersecurity consulting",
    "e-commerce development",
    "UI UX design services",
    "SEO optimization services",
  ],
  openGraph: {
    title: "Our Services - AI Development, Web Development & Cybersecurity",
    description:
      "Comprehensive software development services including AI/ML solutions, web development, cybersecurity, e-commerce platforms, UI/UX design, and SEO optimization.",
    url: "https://www.trustencia.com/services",
    images: [
      {
        url: "/services-og.png",
        width: 1200,
        height: 630,
        alt: "Trustencia Services - Comprehensive Software Development",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
