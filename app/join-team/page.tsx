"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Star,
  Send,
  CheckCircle,
  Code,
  TrendingUp,
  Heart,
  Coffee,
  Zap,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import { useState } from "react"

const jobOpenings = [
  {
    id: "frontend-dev",
    title: "Senior Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Hybrid",
    salary: "$60,000 - $90,000",
    experience: "3-5 years",
    description:
      "Join our engineering team to build cutting-edge web applications using React, Next.js, and modern frontend technologies.",
    responsibilities: [
      "Develop responsive web applications using React and Next.js",
      "Collaborate with designers to implement pixel-perfect UI/UX designs",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and mentor junior developers",
      "Stay up-to-date with the latest frontend technologies and best practices",
    ],
    requirements: [
      "3+ years of experience with React and modern JavaScript",
      "Strong proficiency in HTML5, CSS3, and responsive design",
      "Experience with Next.js, TypeScript, and Tailwind CSS",
      "Knowledge of state management (Redux, Zustand, or Context API)",
      "Familiarity with version control systems (Git)",
      "Understanding of web performance optimization techniques",
      "Excellent problem-solving and communication skills",
    ],
    niceToHave: [
      "Experience with Three.js or other 3D libraries",
      "Knowledge of backend technologies (Node.js, Python)",
      "Familiarity with cloud platforms (AWS, Vercel, Netlify)",
      "Experience with testing frameworks (Jest, Cypress)",
      "Understanding of SEO and accessibility best practices",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible working hours and remote-first culture",
      "Health insurance and wellness benefits",
      "Professional development budget ($2,000/year)",
      "Latest MacBook Pro and equipment",
      "Annual team retreats and company events",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    icon: Code,
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    department: "Sales & Marketing",
    type: "Full-time",
    location: "Remote / Hybrid",
    salary: "$45,000 - $70,000 + Commission",
    experience: "2-4 years",
    description:
      "Drive business growth by identifying new opportunities, building client relationships, and closing deals for our digital solutions.",
    responsibilities: [
      "Generate new business opportunities through outbound prospecting",
      "Build and maintain relationships with potential and existing clients",
      "Conduct product demonstrations and presentations",
      "Negotiate contracts and close deals to meet sales targets",
      "Collaborate with the technical team to understand client requirements",
      "Maintain accurate records in CRM system and provide regular reports",
    ],
    requirements: [
      "2+ years of B2B sales experience, preferably in tech/software",
      "Proven track record of meeting or exceeding sales targets",
      "Excellent communication and presentation skills",
      "Strong negotiation and closing abilities",
      "Experience with CRM systems (HubSpot, Salesforce, etc.)",
      "Self-motivated with strong organizational skills",
      "Bachelor's degree in Business, Marketing, or related field",
    ],
    niceToHave: [
      "Experience selling digital services or software solutions",
      "Knowledge of web development and AI/ML technologies",
      "Existing network in the startup/SMB space",
      "Experience with inbound marketing and lead generation",
      "Multilingual capabilities (especially Hindi, Spanish, or French)",
    ],
    benefits: [
      "Base salary plus uncapped commission structure",
      "Flexible working hours and remote-first culture",
      "Health insurance and wellness benefits",
      "Sales training and professional development",
      "Performance bonuses and recognition programs",
      "Annual team retreats and company events",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
    icon: TrendingUp,
  },
]

const companyPerks = [
  {
    icon: Globe,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with flexible hours",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: Coffee,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and books",
  },
  {
    icon: Zap,
    title: "Latest Equipment",
    description: "MacBook Pro, monitor, and all the tools you need",
  },
]

export default function JoinTeamPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after success
    setTimeout(() => {
      setApplicationData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        coverLetter: "",
        resume: null,
      })
      setIsSubmitted(false)
      setSelectedJob(null)
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
                  Join Our Mission
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Join Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Team</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Be part of a team that's shaping the future of digital experiences. We're looking for passionate
                individuals who want to make a real impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We believe in creating an environment where talented individuals can thrive, grow, and make meaningful
                contributions to innovative projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyPerks.map((perk, index) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <perk.icon className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{perk.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Open Positions</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We're actively hiring for these positions. Click on any role to learn more and apply.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${job.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}
                  />

                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-800">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                            <job.icon className={`w-6 h-6 ${job.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                            <p className="text-purple-600 dark:text-purple-400 font-medium">{job.department}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                          Open
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{job.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{job.experience}</span>
                        </div>
                      </div>

                      <motion.button
                        onClick={() => setSelectedJob(job.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        View Details & Apply
                        <Star className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Detail Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {(() => {
                const job = jobOpenings.find((j) => j.id === selectedJob)!
                return (
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                          <job.icon className={`w-6 h-6 ${job.iconColor}`} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h2>
                          <p className="text-purple-600 dark:text-purple-400 font-medium">{job.department}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Job Details */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Responsibilities</h3>
                          <ul className="space-y-2">
                            {job.responsibilities.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Requirements</h3>
                          <ul className="space-y-2">
                            {job.requirements.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Nice to Have</h3>
                          <ul className="space-y-2">
                            {job.niceToHave.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Benefits</h3>
                          <ul className="space-y-2">
                            {job.benefits.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Heart className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Application Form */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                          Apply for this role
                        </h3>

                        <form onSubmit={handleApplicationSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={applicationData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900 dark:text-white"
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={applicationData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900 dark:text-white"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={applicationData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900 dark:text-white"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                              Years of Experience *
                            </label>
                            <select
                              name="experience"
                              value={applicationData.experience}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900 dark:text-white"
                            >
                              <option value="">Select experience</option>
                              <option value="1-2">1-2 years</option>
                              <option value="3-5">3-5 years</option>
                              <option value="5-8">5-8 years</option>
                              <option value="8+">8+ years</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                              Portfolio/LinkedIn URL
                            </label>
                            <input
                              type="url"
                              name="portfolio"
                              value={applicationData.portfolio}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900 dark:text-white"
                              placeholder="https://portfolio.com or https://linkedin.com/in/username"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                              Resume/CV *
                            </label>
                            <input
                              type="file"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                              required
                              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                              Cover Letter *
                            </label>
                            <textarea
                              name="coverLetter"
                              value={applicationData.coverLetter}
                              onChange={handleInputChange}
                              required
                              rows={4}
                              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900 dark:text-white resize-none"
                              placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                            />
                          </div>

                          <motion.button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Submitting...
                              </>
                            ) : isSubmitted ? (
                              <>
                                <CheckCircle className="w-4 h-4" />
                                Application Sent!
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                Submit Application
                              </>
                            )}
                          </motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
