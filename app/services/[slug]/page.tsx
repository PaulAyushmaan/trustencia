import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDetailClient from "./ServiceDetailClient"

const services = [
  {
    title: "Web & App Development",
    slug: "web-app-development",
    description: "Transform your ideas into powerful digital experiences with our cutting-edge development expertise.",
    longDescription:
      "Our web and app development services combine cutting-edge technology with user-centered design to create digital experiences that drive business growth. We specialize in full-stack development using modern frameworks like React, Next.js, and Node.js, ensuring your applications are fast, scalable, and maintainable.",
    image: "/web-development-workspace.png",
    features: [
      "React & Next.js Development",
      "Mobile-First Responsive Design",
      "API Integration & Development",
      "Performance Optimization",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Database Design & Integration",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Vercel"],
    process: [
      "Discovery & Requirements Analysis",
      "UI/UX Design & Prototyping",
      "Development & Testing",
      "Deployment & Launch",
      "Maintenance & Support",
    ],
    pricing: "From $5,000",
    timeline: "4-12 weeks",
    stats: { projects: "200+", satisfaction: "98%", performance: "3x Faster" },
  },
  {
    title: "AI/ML Solutions",
    slug: "ai-ml-solutions",
    description: "Harness the power of artificial intelligence to automate processes and unlock valuable insights.",
    longDescription:
      "Our AI/ML solutions help businesses leverage artificial intelligence to automate complex processes, gain valuable insights from data, and create intelligent user experiences. From custom machine learning models to natural language processing and computer vision applications.",
    image: "/ai-machine-learning-dashboard.png",
    features: [
      "Custom Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Applications",
      "Predictive Analytics",
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Data Mining & Analysis",
      "AI Integration Services",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Hugging Face",
      "AWS SageMaker",
      "Google Cloud AI",
      "Azure ML",
    ],
    process: [
      "Data Assessment & Strategy",
      "Model Development & Training",
      "Testing & Validation",
      "Integration & Deployment",
      "Monitoring & Optimization",
    ],
    pricing: "From $8,000",
    timeline: "6-16 weeks",
    stats: { projects: "150+", satisfaction: "97%", performance: "5x ROI" },
  },
  {
    title: "Cybersecurity Systems",
    slug: "cybersecurity-systems",
    description: "Protect your digital assets with enterprise-grade security solutions built from the ground up.",
    longDescription:
      "Our cybersecurity services provide comprehensive protection for your digital infrastructure. We implement zero-trust architecture, advanced threat detection, and compliance-ready security frameworks to safeguard your business from modern cyber threats.",
    image: "/cybersecurity-monitoring-dashboard.png",
    features: [
      "Zero-Trust Architecture",
      "Advanced Threat Detection",
      "Compliance & Audit Ready",
      "24/7 Security Monitoring",
      "Penetration Testing",
      "Security Awareness Training",
      "Incident Response Planning",
      "Data Encryption & Protection",
    ],
    technologies: [
      "SIEM Tools",
      "Firewall Systems",
      "VPN Solutions",
      "Multi-Factor Authentication",
      "Encryption",
      "Blockchain",
      "Cloud Security",
      "Network Monitoring",
    ],
    process: [
      "Security Assessment & Audit",
      "Risk Analysis & Planning",
      "Implementation & Configuration",
      "Testing & Validation",
      "Monitoring & Maintenance",
    ],
    pricing: "From $6,000",
    timeline: "3-10 weeks",
    stats: { projects: "100+", satisfaction: "99%", performance: "0 Breaches" },
  },
  {
    title: "E-Commerce Platforms",
    slug: "ecommerce-platforms",
    description: "Build powerful e-commerce experiences that drive sales and customer satisfaction.",
    longDescription:
      "Our e-commerce solutions are designed to maximize conversions and provide seamless shopping experiences. We build scalable online stores with integrated payment systems, inventory management, and analytics to help your business grow.",
    image: "/ecommerce-platform-interface.png",
    features: [
      "Custom E-commerce Development",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Analytics & Reporting Dashboard",
      "Mobile Commerce Optimization",
      "Multi-vendor Marketplace",
      "Shopping Cart Optimization",
      "Order Management System",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Stripe",
      "PayPal",
      "Square",
      "BigCommerce",
      "Custom Solutions",
    ],
    process: [
      "Business Requirements Analysis",
      "Platform Selection & Setup",
      "Custom Development & Integration",
      "Testing & Quality Assurance",
      "Launch & Ongoing Support",
    ],
    pricing: "From $7,000",
    timeline: "6-14 weeks",
    stats: { projects: "120+", satisfaction: "96%", performance: "40% More Sales" },
  },
  {
    title: "UI/UX & Branding",
    slug: "ui-ux-branding",
    description: "Create memorable brand experiences through thoughtful design and user-centered principles.",
    longDescription:
      "Our UI/UX and branding services focus on creating intuitive, accessible, and visually compelling experiences that resonate with your target audience. We combine user research, design thinking, and brand strategy to deliver cohesive digital experiences.",
    image: "/ui-ux-design-process.png",
    features: [
      "User Experience Research",
      "Design System Development",
      "Interactive Prototyping",
      "Accessibility-First Design",
      "Brand Identity Design",
      "Visual Design & Graphics",
      "Usability Testing",
      "Design Guidelines & Documentation",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer", "Miro", "Hotjar"],
    process: [
      "User Research & Analysis",
      "Wireframing & Information Architecture",
      "Visual Design & Prototyping",
      "User Testing & Iteration",
      "Design System & Handoff",
    ],
    pricing: "From $4,000",
    timeline: "3-8 weeks",
    stats: { projects: "300+", satisfaction: "99%", performance: "60% Better UX" },
  },
  {
    title: "SEO & Hosting",
    slug: "seo-hosting",
    description: "Maximize your online visibility and performance with our comprehensive SEO and hosting solutions.",
    longDescription:
      "Our SEO and hosting services ensure your website performs optimally and ranks well in search engines. We provide technical SEO, content optimization, and high-performance hosting solutions to maximize your online presence.",
    image: "/seo-analytics-dashboard.png",
    features: [
      "Technical SEO Optimization",
      "Performance & Speed Optimization",
      "Cloud Hosting Solutions",
      "Analytics Setup & Monitoring",
      "Content Strategy & Optimization",
      "Local SEO Services",
      "Link Building & Outreach",
      "SEO Audits & Reporting",
    ],
    technologies: [
      "Google Analytics",
      "Search Console",
      "SEMrush",
      "Ahrefs",
      "AWS",
      "Cloudflare",
      "GTmetrix",
      "PageSpeed Insights",
    ],
    process: [
      "SEO Audit & Analysis",
      "Strategy Development",
      "Technical Implementation",
      "Content Optimization",
      "Monitoring & Reporting",
    ],
    pricing: "From $2,000",
    timeline: "2-6 weeks",
    stats: { projects: "250+", satisfaction: "98%", performance: "200% More Traffic" },
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Service Not Found - Trustencia",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} - Trustencia`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Trustencia`,
      description: service.description,
      images: [service.image],
    },
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
