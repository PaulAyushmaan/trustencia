"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Web & App Development",
    shortDescription: "Full-stack solutions with modern frameworks and scalable architecture.",
    description: "Transform your ideas into powerful digital experiences with our cutting-edge development expertise.",
    image: "/web-development-workspace.png",
    features: ["React & Next.js", "Mobile-First Design", "API Integration", "Performance Optimization"],
    stats: { projects: "200+", satisfaction: "98%", performance: "3x Faster" },
    pricing: "From $5,000",
    timeline: "4-12 weeks",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500/30 to-cyan-500/30",
    slug: "web-app-development",
  },
  {
    title: "AI/ML Solutions",
    shortDescription: "Intelligent systems that learn, adapt, and deliver exceptional user experiences.",
    description: "Harness the power of artificial intelligence to automate processes and unlock valuable insights.",
    image: "/ai-machine-learning-dashboard.png",
    features: ["Custom ML Models", "NLP Processing", "Computer Vision", "Predictive Analytics"],
    stats: { projects: "150+", satisfaction: "97%", performance: "5x ROI" },
    pricing: "From $8,000",
    timeline: "6-16 weeks",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500/30 to-pink-500/30",
    slug: "ai-ml-solutions",
  },
  {
    title: "Cybersecurity Systems",
    shortDescription: "Security-first development with robust protection against modern threats.",
    description: "Protect your digital assets with enterprise-grade security solutions built from the ground up.",
    image: "/cybersecurity-monitoring-dashboard.png",
    features: ["Zero-Trust Architecture", "Threat Detection", "Compliance Ready", "24/7 Monitoring"],
    stats: { projects: "100+", satisfaction: "99%", performance: "0 Breaches" },
    pricing: "From $6,000",
    timeline: "3-10 weeks",
    gradient: "from-red-500/20 to-orange-500/20",
    borderGradient: "from-red-500/30 to-orange-500/30",
    slug: "cybersecurity-systems",
  },
  {
    title: "E-Commerce Platforms",
    shortDescription: "Conversion-optimized online stores with seamless payment integration.",
    description: "Build powerful e-commerce experiences that drive sales and customer satisfaction.",
    image: "/ecommerce-platform-interface.png",
    features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "Mobile Commerce"],
    stats: { projects: "120+", satisfaction: "96%", performance: "40% More Sales" },
    pricing: "From $7,000",
    timeline: "6-14 weeks",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-500/30 to-emerald-500/30",
    slug: "ecommerce-platforms",
  },
  {
    title: "UI/UX & Branding",
    shortDescription: "Beautiful, intuitive designs that connect with your audience.",
    description: "Create memorable brand experiences through thoughtful design and user-centered principles.",
    image: "/ui-ux-design-process.png",
    features: ["User Research", "Design Systems", "Prototyping", "Accessibility Focus"],
    stats: { projects: "300+", satisfaction: "99%", performance: "60% Better UX" },
    pricing: "From $4,000",
    timeline: "3-8 weeks",
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderGradient: "from-indigo-500/30 to-purple-500/30",
    slug: "ui-ux-branding",
  },
  {
    title: "SEO & Hosting",
    shortDescription: "High-performance hosting with search engine optimization built-in.",
    description: "Maximize your online visibility and performance with our comprehensive SEO and hosting solutions.",
    image: "/seo-analytics-dashboard.png",
    features: ["Technical SEO", "Performance Optimization", "Cloud Hosting", "Analytics Setup"],
    stats: { projects: "250+", satisfaction: "98%", performance: "200% More Traffic" },
    pricing: "From $2,000",
    timeline: "2-6 weeks",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderGradient: "from-yellow-500/30 to-orange-500/30",
    slug: "seo-hosting",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-black dark:to-blue-950/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
              Our Expertise
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Create</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            From concept to deployment, we deliver comprehensive digital solutions that drive growth, innovation, and
            exceptional user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}
              />

              <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-800 group-hover:border-transparent h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating stats */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        {service.stats.satisfaction}
                      </span>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${service.borderGradient} backdrop-blur-sm rounded-full border border-white/20`}
                    >
                      <span className="text-xs font-medium text-white">{service.pricing}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{service.stats.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">{service.timeline}</div>
                      <div className="text-xs text-gray-500">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {service.stats.performance}
                      </div>
                      <div className="text-xs text-gray-500">Results</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/services/${service.slug}`} className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-600/5 to-blue-500/10 rounded-3xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive services and discover how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
