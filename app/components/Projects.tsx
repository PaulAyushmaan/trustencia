"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight, Calendar, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "KYCfabric",
    description: "Realtime KYC pipeline with AI-powered document verification and fraud detection.",
    fullDescription:
      "Revolutionary identity verification platform that processes documents in real-time with 99.7% accuracy, serving financial institutions worldwide.",
    image: "/kyc-verification-dashboard.png",
    tech: ["FastAPI", "MongoDB", "React", "TensorFlow"],
    category: "AI/ML Platform",
    stats: {
      users: "1M+",
      accuracy: "99.7%",
      processing: "85% Faster",
      savings: "$2M+ Saved",
    },
    metrics: {
      timeline: "8 months",
      team: "6 developers",
      impact: "Enterprise Scale",
    },
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "Destini",
    description: "Interactive LMS platform with personalized learning paths and productivity tools.",
    fullDescription:
      "Advanced Learning Management System with AI-driven personalization, serving 50,000+ learners across 15 countries with 95% completion rates.",
    image: "/learning-management-system-interface.png",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    category: "EdTech Platform",
    stats: {
      users: "50K+",
      completion: "95%",
      improvement: "40% Better",
      countries: "15+ Markets",
    },
    metrics: {
      timeline: "10 months",
      team: "8 developers",
      impact: "Global Reach",
    },
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "SecureCommerce",
    description: "Enterprise e-commerce platform with advanced security and analytics.",
    fullDescription:
      "Robust e-commerce solution handling $50M+ in transactions with 99.99% uptime and 300% conversion rate improvement.",
    image: "/ecommerce-dashboard-analytics.png",
    tech: ["Node.js", "Redis", "Stripe", "AWS"],
    category: "E-Commerce",
    stats: {
      transactions: "$50M+",
      uptime: "99.99%",
      conversion: "300% Better",
      cost: "60% Reduced",
    },
    metrics: {
      timeline: "12 months",
      team: "10 developers",
      impact: "Enterprise Scale",
    },
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-500/30 to-emerald-500/30",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20"
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
            <span className="px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
              Success Stories
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Projects</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Showcasing our expertise through real-world solutions that drive business growth, user engagement, and
            measurable impact across industries.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-500 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Project Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4"
                  >
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                      <Calendar className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {project.metrics.timeline}
                      </div>
                      <div className="text-xs text-gray-500">Timeline</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                      <Users className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{project.metrics.team}</div>
                      <div className="text-xs text-gray-500">Team Size</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                      <Award className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {project.metrics.impact}
                      </div>
                      <div className="text-xs text-gray-500">Impact</div>
                    </div>
                  </motion.div>

                  {/* Key Results */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <div
                        key={key}
                        className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20"
                      >
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                  />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Floating badge */}
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          Live Project
                        </span>
                      </div>
                    </div>

                    {/* Success indicator */}
                    <div className="absolute bottom-6 right-6">
                      <div className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full shadow-lg">
                        <span className="text-sm font-semibold text-white">Success</span>
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
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-600/5 to-purple-500/10 rounded-3xl p-12 border border-purple-500/20">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our proven expertise and innovative approach to digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
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
