"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                trustencia
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full ml-1" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md text-sm sm:text-base">
                AI-first, secure digital products. Full-stack development from India. Globally trusted.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@trustencia.com"
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-orange-500 transition-colors duration-300">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-500 transition-colors duration-300">
                    AI/ML Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-500 transition-colors duration-300">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-500 transition-colors duration-300">
                    E-Commerce
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/team" className="hover:text-orange-500 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/join-team" className="hover:text-orange-500 transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-orange-500 transition-colors duration-300">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-orange-500 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2">
                <strong>Disclaimer:</strong> Trustencia is currently a collaborative group of independent professionals
                working together to deliver exceptional digital solutions.
              </p>
              <p>© 2024 Trustencia. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
