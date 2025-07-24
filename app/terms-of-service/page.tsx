"use client"

import { motion } from "framer-motion"
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle, Gavel } from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"

const sections = [
  {
    title: "Acceptance of Terms",
    icon: CheckCircle,
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing and using Trustencia's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
      },
      {
        subtitle: "Modifications",
        text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.",
      },
    ],
  },
  {
    title: "Services Description",
    icon: FileText,
    content: [
      {
        subtitle: "Our Services",
        text: "Trustencia provides AI-first software development, cybersecurity solutions, web development, and related digital services. We offer custom software solutions, consulting, and ongoing support services.",
      },
      {
        subtitle: "Service Availability",
        text: "We strive to maintain high availability of our services but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.",
      },
      {
        subtitle: "Service Modifications",
        text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice, and without liability to you or any third party.",
      },
    ],
  },
  {
    title: "User Responsibilities",
    icon: Scale,
    content: [
      {
        subtitle: "Account Security",
        text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.",
      },
      {
        subtitle: "Acceptable Use",
        text: "You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services to transmit harmful, offensive, or illegal content.",
      },
      {
        subtitle: "Compliance",
        text: "You are responsible for ensuring that your use of our services complies with all applicable laws, regulations, and third-party rights.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    icon: Gavel,
    content: [
      {
        subtitle: "Our IP Rights",
        text: "All content, features, and functionality of our services are owned by Trustencia and are protected by copyright, trademark, and other intellectual property laws.",
      },
      {
        subtitle: "Client IP Rights",
        text: "You retain ownership of any intellectual property you provide to us. By using our services, you grant us a license to use your content solely for the purpose of providing our services.",
      },
      {
        subtitle: "Developed Solutions",
        text: "For custom development projects, intellectual property ownership will be specified in the project agreement. Generally, you will own the final deliverables upon full payment.",
      },
    ],
  },
  {
    title: "Payment Terms",
    icon: CheckCircle,
    content: [
      {
        subtitle: "Fees and Payment",
        text: "Fees for our services are as specified in your service agreement. Payment is due according to the terms specified in your invoice or service agreement.",
      },
      {
        subtitle: "Late Payments",
        text: "Late payments may result in suspension of services and may incur additional fees. We reserve the right to charge interest on overdue amounts.",
      },
      {
        subtitle: "Refunds",
        text: "Refund policies vary by service type and are specified in individual service agreements. Generally, payments for completed work are non-refundable.",
      },
    ],
  },
  {
    title: "Limitations and Disclaimers",
    icon: AlertTriangle,
    content: [
      {
        subtitle: "Service Warranties",
        text: "Our services are provided 'as is' without warranties of any kind. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.",
      },
      {
        subtitle: "Limitation of Liability",
        text: "Our liability for any claims related to our services is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages.",
      },
      {
        subtitle: "Force Majeure",
        text: "We are not liable for any failure to perform due to circumstances beyond our reasonable control, including natural disasters, government actions, or network failures.",
      },
    ],
  },
  {
    title: "Termination",
    icon: XCircle,
    content: [
      {
        subtitle: "Termination by You",
        text: "You may terminate your use of our services at any time by providing written notice. You remain responsible for all charges incurred prior to termination.",
      },
      {
        subtitle: "Termination by Us",
        text: "We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users.",
      },
      {
        subtitle: "Effect of Termination",
        text: "Upon termination, your right to use our services ceases immediately. Provisions that by their nature should survive termination will remain in effect.",
      },
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20">
          <div className="max-w-4xl mx-auto">
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
                <span className="px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/20 flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  Legal Terms & Conditions
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Terms of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                These terms govern your use of Trustencia's services. Please read them carefully before using our
                services.
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
              className="mb-16 p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl border border-purple-500/10"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Welcome to Trustencia</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These Terms of Service ("Terms") govern your use of Trustencia's website and services. By accessing or
                using our services, you agree to be bound by these Terms. If you disagree with any part of these terms,
                then you may not access our services. These Terms apply to all visitors, users, and others who access or
                use our services.
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
                      <div className="p-3 bg-purple-500/10 rounded-xl">
                        <section.icon className="w-6 h-6 text-purple-500" />
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

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 p-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl border border-blue-500/10"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of India. Any disputes arising from these
                Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in
                Kolkata, India.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl border border-orange-500/10"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Email:</strong> legal@trustencia.com
                </p>
                <p>
                  <strong>Address:</strong> Trustencia, Kolkata, India
                </p>
                <p>
                  <strong>Phone:</strong> +91 (555) 123-4567
                </p>
              </div>
            </motion.div>

            {/* Acknowledgment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Acknowledgment</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                By using our services, you acknowledge that you have read these Terms of Service and agree to be bound
                by them. These Terms constitute the entire agreement between you and Trustencia regarding your use of
                our services.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
