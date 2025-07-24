import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Trustencia – AI-First Software Studio | Custom Development & Cybersecurity",
    template: "%s | Trustencia",
  },
  description:
    "Leading AI-first software development company in India. We build secure, scalable web applications, AI/ML solutions, and cybersecurity systems. Trusted by 150+ global clients.",
  keywords: [
    "AI software development India",
    "Next.js development agency",
    "cybersecurity software development",
    "FastAPI developers",
    "custom software solutions",
    "machine learning development",
    "web application development",
    "React development services",
    "secure software development",
    "AI consulting services",
  ],
  authors: [{ name: "Trustencia", url: "https://www.trustencia.com" }],
  creator: "Trustencia",
  publisher: "Trustencia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.trustencia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.trustencia.com",
    title: "Trustencia – AI-First Software Studio | Custom Development & Cybersecurity",
    description:
      "Leading AI-first software development company in India. We build secure, scalable web applications, AI/ML solutions, and cybersecurity systems. Trusted by 150+ global clients.",
    siteName: "Trustencia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trustencia - AI-First Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trustencia – AI-First Software Studio | Custom Development & Cybersecurity",
    description:
      "Leading AI-first software development company in India. We build secure, scalable web applications, AI/ML solutions, and cybersecurity systems.",
    images: ["/og-image.png"],
    creator: "@trustencia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Trustencia",
              alternateName: "Trustencia Software Studio",
              description:
                "Leading AI-first software development company in India specializing in secure, scalable web applications, AI/ML solutions, and cybersecurity systems.",
              url: "https://www.trustencia.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.trustencia.com/logo.png",
                width: 400,
                height: 400,
              },
              image: "https://www.trustencia.com/og-image.png",
              telephone: "+91-555-123-4567",
              email: "hello@trustencia.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "India",
              },
              foundingDate: "2020",
              numberOfEmployees: "50-100",
              industry: "Software Development",
              knowsAbout: [
                "AI Development",
                "Machine Learning",
                "Web Development",
                "Cybersecurity",
                "Next.js",
                "React",
                "FastAPI",
                "Python",
              ],
              areaServed: {
                "@type": "Place",
                name: "Worldwide",
              },
              serviceArea: {
                "@type": "Place",
                name: "Global",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI/ML Development",
                      description: "Custom AI and machine learning solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description: "Full-stack web application development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cybersecurity",
                      description: "Security-first development and consulting",
                    },
                  },
                ],
              },
              sameAs: [
                "https://linkedin.com/company/trustencia",
                "https://github.com/trustencia",
                "https://twitter.com/trustencia",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
