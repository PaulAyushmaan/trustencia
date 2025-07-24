import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trustencia – AI-First Software Studio",
  description: "AI-first, secure digital products. Full-stack development from India. Globally trusted.",
  keywords: "AI software company India, Next.js agency, cybersecurity software development, FastAPI developers",
  authors: [{ name: "Trustencia" }],
  creator: "Trustencia",
  publisher: "Trustencia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.trustencia.com",
    title: "Trustencia – AI-First Software Studio",
    description: "AI-first, secure digital products. Full-stack development from India. Globally trusted.",
    siteName: "Trustencia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trustencia – AI-First Software Studio",
    description: "AI-first, secure digital products. Full-stack development from India. Globally trusted.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
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
              description: "AI-first, secure digital products. Full-stack development from India.",
              url: "https://www.trustencia.com",
              logo: "https://www.trustencia.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressCountry: "India",
              },
              sameAs: ["https://linkedin.com/company/trustencia", "https://github.com/trustencia"],
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
