"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe } from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"

const sections = [
  {
    title: "Information We Collect",
    icon: Database,
    content: [
      {
        subtitle: "Personal Information",
        text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and any other information you choose to provide.",
      },
      {
        subtitle: "Usage Information",
        text: "We automatically collect certain information about your use of our services, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed.",
      },
      {
        subtitle: "Cookies and Tracking Technologies",
        text: "We use cookies, web beacons, and other tracking technologies to collect information about your browsing activities and to provide personalized experiences.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    icon: Users,
    content: [
      {
        subtitle: "Service Provision",
        text: "We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your account or our services.",
      },
      {
        subtitle: "Communication",
        text: "We may use your information to send you technical notices, updates, security alerts, and support messages, as well as marketing communications (with your consent).",
      },
      {
        subtitle: "Analytics and Improvement",
        text: "We use information to understand how our services are used, to develop new features, and to improve our services and user experience.",
      },
    ],
  },
  {
    title: "Information Sharing",
    icon: Globe,
    content: [
      {
        subtitle: "Service Providers",
        text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, customer support, and payment processing.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
      },
    ],
  },
  {
    title: "Data Security",
    icon: Lock,
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      },
      {
        subtitle: "Encryption",
        text: "We use industry-standard encryption to protect sensitive information during transmission and storage.",
      },
      {
        subtitle: "Access Controls",
        text: "We limit access to personal information to employees and contractors who need it to perform their job functions.",
      },
    ],
  },
  {
    title: "Your Rights",
    icon: Eye,
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us.",
      },
      {
        subtitle: "Data Portability",
        text: "You have the right to request a copy of your personal information in a structured, machine-readable format.",
      },
      {
        subtitle: "Deletion",
        text: "You have the right to request deletion of your personal information, subject to certain legal obligations and legitimate business interests.",
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-black dark:to-blue-950/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Link href="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
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
                <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Privacy & Data Protection
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Privacy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal
                information.
              </p>
              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">Last updated: January 2024</div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl border border-blue-500/10"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At Trustencia, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services. By using our services, you consent to the practices
                described in this policy.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        <section.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                    </div>

                    <div className="space-y-6">
                      {section.content.map((item, idx) => (
                        <div key={idx}>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.subtitle}</h4>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 p-8 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl border border-orange-500/10"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Email:</strong> privacy@trustencia.com
                </p>
                <p>
                  <strong>Address:</strong> Trustencia, Kolkata, India
                </p>
                <p>
                  <strong>Phone:</strong> +91 (555) 123-4567
                </p>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Policy Updates</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
