import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

export const metadata: Metadata = {
  title: "Our Projects - Success Stories & Case Studies",
  description:
    "Explore our portfolio of successful AI, web development, and cybersecurity projects. From KYC platforms to e-commerce solutions, see how we deliver measurable results for 150+ clients.",
  keywords: [
    "software development portfolio",
    "AI project case studies",
    "web development projects",
    "cybersecurity implementations",
    "client success stories",
    "software development examples",
  ],
  openGraph: {
    title: "Our Projects - Success Stories & Case Studies",
    description:
      "Explore our portfolio of successful AI, web development, and cybersecurity projects with measurable results for 150+ clients.",
    url: "https://www.trustencia.com/projects",
    images: [
      {
        url: "/projects-og.png",
        width: 1200,
        height: 630,
        alt: "Trustencia Projects - Success Stories & Case Studies",
      },
    ],
  },
  alternates: {
    canonical: "/projects",
  },
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
