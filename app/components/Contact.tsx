"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageCircle, Calendar, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after success animation
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", budget: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick responses and real-time updates",
      action: "Chat Now",
      href: "https://wa.me/1234567890",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation",
      action: "Book Meeting",
      href: "https://calendly.com/trustencia",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Detailed project discussions",
      action: "Send Email",
      href: "mailto:hello@trustencia.com",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
    },
  ]

  const stats = [
    { label: "Response Time", value: "< 24hrs", icon: Clock },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Projects Delivered", value: "500+", icon: CheckCircle },
    { label: "Countries Served", value: "25+", icon: MapPin },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-950 dark:via-black dark:to-indigo-950/20"
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
            <span className="px-4 py-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-500/20">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            {"Let's Build Something "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Amazing
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch and let's discuss how we can help you succeed with
            innovative digital solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <stat.icon className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Start Your Project</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors duration-300 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors duration-300 text-gray-900 dark:text-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors duration-300 text-gray-900 dark:text-white"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors duration-300 text-gray-900 dark:text-white"
                    >
                      <option value="">Select Budget</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors duration-300 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 bg-white rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      </motion.div>
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Other Ways to Connect</h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group block"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100`}
                      />
                      <div className="relative p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl group-hover:bg-transparent transition-colors duration-300">
                            <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">
                              {method.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                          </div>
                          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                            {method.action}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">Available for New Projects</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We typically respond within 24 hours and offer free initial consultations for all new projects. Our team
                is ready to help you bring your vision to life.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Response: &lt; 24hrs
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Free Consultation
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
