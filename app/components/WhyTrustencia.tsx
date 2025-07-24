"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

const values = [
  {
    title: "AI-Native Product Thinking",
    description:
      "We don't just add AI as a feature—we architect intelligence into the core of every solution from day one.",
    detailedDescription:
      "Our team thinks in AI-first principles, designing systems that learn, adapt, and evolve with your business needs. Every product we build is designed to harness the power of artificial intelligence.",
    image: "/ai-native-thinking.png",
    highlights: [
      "Machine learning integration from ground up",
      "Intelligent automation and decision-making",
      "Predictive analytics and insights",
      "Natural language processing capabilities",
    ],
    stats: { value: "95%", label: "AI Integration Success Rate" },
  },
  {
    title: "Security from Day 0",
    description: "Security isn't an afterthought—it's woven into our DNA and every line of code we write.",
    detailedDescription:
      "We implement security-first development practices, ensuring your data and systems are protected against modern threats while maintaining optimal performance and user experience.",
    image: "/security-first-development.png",
    highlights: [
      "Zero-trust architecture implementation",
      "End-to-end encryption protocols",
      "Regular security audits and testing",
      "GDPR and compliance adherence",
    ],
    stats: { value: "99.9%", label: "Security Compliance Rate" },
  },
  {
    title: "Design + Engineering Synergy",
    description: "Beautiful interfaces powered by robust, scalable architecture—where aesthetics meet performance.",
    detailedDescription:
      "Our designers and engineers work in perfect harmony, creating solutions that are not only visually stunning but also technically excellent and user-friendly.",
    image: "/design-engineering-synergy.png",
    highlights: [
      "User-centered design methodology",
      "Responsive and accessible interfaces",
      "Performance-optimized implementations",
      "Consistent design system approach",
    ],
    stats: { value: "40%", label: "Faster Development Cycles" },
  },
  {
    title: "Concept to Cloud Delivery",
    description: "End-to-end solutions from initial ideation to production deployment and beyond.",
    detailedDescription:
      "We handle every aspect of your digital transformation journey, from conceptualization and development to deployment, monitoring, and continuous improvement.",
    image: "/cloud-delivery-pipeline.png",
    highlights: [
      "Full-stack development expertise",
      "Cloud-native architecture design",
      "CI/CD pipeline implementation",
      "24/7 monitoring and support",
    ],
    stats: { value: "50%", label: "Faster Time to Market" },
  },
  {
    title: "Global + Human Culture",
    description: "Diverse perspectives from around the world, creating solutions that resonate globally.",
    detailedDescription:
      "Our distributed team brings together talent from different cultures and backgrounds, ensuring our solutions work seamlessly across markets and user bases worldwide.",
    image: "/global-team-culture.png",
    highlights: [
      "Multi-timezone development coverage",
      "Cultural sensitivity in design",
      "International market expertise",
      "Diverse problem-solving approaches",
    ],
    stats: { value: "15+", label: "Countries Represented" },
  },
  {
    title: "Fast, Honest, Transparent Work",
    description: "Clear communication, rapid iteration, and honest timelines—no surprises, just results.",
    detailedDescription:
      "We believe in complete transparency throughout the development process, providing regular updates, honest assessments, and delivering on our promises.",
    image: "/transparent-workflow.png",
    highlights: [
      "Daily progress updates and demos",
      "Agile development methodology",
      "Realistic timeline estimates",
      "Open communication channels",
    ],
    stats: { value: "98%", label: "On-Time Delivery Rate" },
  },
]

export default function WhyTrustencia() {
  return (
    <section
      id="why-us"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-950 dark:via-black dark:to-orange-950/20"
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
            <span className="px-4 py-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium border border-orange-500/20">
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Trustencia
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We don't just build software—we craft digital experiences that transform businesses, delight users, and
            drive meaningful growth through innovation.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="space-y-32">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{value.description}</p>
                    <p className="text-lg text-gray-500 dark:text-gray-500 leading-relaxed">
                      {value.detailedDescription}
                    </p>
                  </motion.div>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Capabilities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {value.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl border border-orange-500/20"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{value.stats.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{value.stats.label}</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Image */}
              <motion.div
                className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                initial={{ opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src={value.image || "/placeholder.svg"}
                      alt={value.title}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Floating badge */}
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-orange-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Experience the Trustencia Difference?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our unique approach can transform your business and deliver exceptional results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Project Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
