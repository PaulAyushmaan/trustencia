"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Linkedin, Github, Twitter, Mail, MapPin, Calendar, Award } from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"

const founders = [
  {
    name: "Alex Chen",
    title: "Co-Founder & CTO",
    tagline: "AI + Trust enthusiast",
    image: "/shah_alam.jpeg",
    bio: "Alex is a seasoned technology leader with over 12 years of experience in building scalable AI systems. He holds a PhD in Computer Science from MIT and has previously led engineering teams at Google and Tesla. His expertise spans machine learning, distributed systems, and cybersecurity.",
    location: "San Francisco, CA",
    joinDate: "January 2022",
    expertise: ["Artificial Intelligence", "Machine Learning", "Distributed Systems", "Cybersecurity"],
    achievements: [
      "Led development of AI systems processing 1B+ requests daily",
      "Published 15+ research papers in top-tier conferences",
      "Holds 8 patents in AI and security technologies",
      "Speaker at 20+ international tech conferences",
    ],
    social: {
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen",
      twitter: "https://twitter.com/alexchen",
      email: "alex@trustencia.com",
    },
    funFacts: [
      "Speaks 5 languages fluently",
      "Marathon runner (3:15 personal best)",
      "Plays classical piano",
      "Coffee connoisseur with 200+ bean varieties tried",
    ],
  },
  {
    name: "Priya Sharma",
    title: "Co-Founder & CEO",
    tagline: "Product visionary & growth hacker",
    image: "/female-tech-founder-headshot.png",
    bio: "Priya is a visionary leader who combines deep technical knowledge with exceptional business acumen. With an MBA from Stanford and 10+ years in product management at companies like Airbnb and Stripe, she excels at turning complex ideas into market-winning products.",
    location: "Mumbai, India",
    joinDate: "January 2022",
    expertise: ["Product Strategy", "Growth Hacking", "Business Development", "User Experience"],
    achievements: [
      "Scaled products from 0 to 10M+ users",
      "Raised $50M+ in venture funding",
      "Featured in Forbes 30 Under 30",
      "Keynote speaker at Product Management conferences",
    ],
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
      github: "https://github.com/priyasharma",
      twitter: "https://twitter.com/priyasharma",
      email: "priya@trustencia.com",
    },
    funFacts: [
      "Trained classical Indian dancer",
      "Traveled to 40+ countries",
      "Yoga instructor certification",
      "Published author of 2 business books",
    ],
  },
  {
    name: "Raj Patel",
    title: "Co-Founder & CPO",
    tagline: "Design thinking meets engineering",
    image: "/male-product-designer-headshot.png",
    bio: "Raj bridges the gap between beautiful design and robust engineering. With a background in both computer science and industrial design from RISD, he has spent 8+ years creating award-winning digital experiences at companies like Apple and Figma.",
    location: "London, UK",
    joinDate: "March 2022",
    expertise: ["Product Design", "User Experience", "Design Systems", "Frontend Engineering"],
    achievements: [
      "Designed products used by 100M+ people",
      "Won 12 international design awards",
      "Created design systems adopted by 500+ companies",
      "Mentored 50+ designers and developers",
    ],
    social: {
      linkedin: "https://linkedin.com/in/rajpatel",
      github: "https://github.com/rajpatel",
      twitter: "https://twitter.com/rajpatel",
      email: "raj@trustencia.com",
    },
    funFacts: [
      "Professional photographer",
      "Rock climbing enthusiast",
      "Collects vintage design books",
      "Makes artisanal furniture in spare time",
    ],
  },
  {
    name: "Sarah Kim",
    title: "Co-Founder & CSO",
    tagline: "Security-first mindset",
    image: "/female-security-expert-headshot.png",
    bio: "Sarah is a cybersecurity expert with a passion for building secure, privacy-first systems. With a Master's in Cybersecurity from Carnegie Mellon and 9+ years at companies like Palantir and CrowdStrike, she ensures our solutions meet the highest security standards.",
    location: "Seoul, South Korea",
    joinDate: "February 2022",
    expertise: ["Cybersecurity", "Privacy Engineering", "Compliance", "Risk Management"],
    achievements: [
      "Prevented $100M+ in potential security breaches",
      "CISSP and CISM certified",
      "Led security for Fortune 500 companies",
      "Regular contributor to security research",
    ],
    social: {
      linkedin: "https://linkedin.com/in/sarahkim",
      github: "https://github.com/sarahkim",
      twitter: "https://twitter.com/sarahkim",
      email: "sarah@trustencia.com",
    },
    funFacts: [
      "Black belt in Taekwondo",
      "Competitive chess player",
      "Speaks 4 languages",
      "Volunteers teaching cybersecurity to students",
    ],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Meet Our Team</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The brilliant minds behind Trustencia—a diverse team of innovators, builders, and dreamers united by a
                shared vision of transforming the digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Trustencia</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-500">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We bridge the gap between cutting-edge technology and real-world business needs. Our mission is to
                    democratize AI and secure digital solutions for companies of all sizes. Every project we undertake
                    is built with trust, transparency, and long-term partnership in mind.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-500">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Global Impact</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    From our roots in India to serving clients worldwide, we bring diverse perspectives to every
                    challenge. Our distributed team combines local insights with global best practices to deliver
                    solutions that work across cultures and markets. We're not just building software—we're building
                    bridges.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-500">🔮</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Future Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We envision a future where AI-powered solutions are accessible, ethical, and transformative for
                    businesses everywhere. Our commitment to security-first development and human-centered design
                    ensures that technology serves people, not the other way around. Together, we're shaping tomorrow's
                    digital landscape.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500/10 to-transparent p-8 rounded-2xl border border-orange-500/20"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why We Started Trustencia</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  In 2022, we came together with a shared frustration: too many businesses were struggling to navigate
                  the complex world of AI and digital transformation. We saw companies either overwhelmed by technical
                  complexity or disappointed by solutions that didn't deliver real value. Trustencia was born from our
                  belief that technology should empower, not intimidate—and that every business deserves access to
                  world-class digital solutions built on a foundation of trust.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-24">
              {founders.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="sticky top-24">
                      <div className="relative">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-orange-500 text-black p-4 rounded-xl shadow-lg">
                          <Award className="w-8 h-8" />
                        </div>
                      </div>

                      <div className="mt-8 text-center">
                        <div className="flex justify-center gap-4 mb-6">
                          <a
                            href={member.social.linkedin}
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href={member.social.github}
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a
                            href={member.social.twitter}
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                          <a
                            href={`mailto:${member.social.email}`}
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {member.location}
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Joined {member.joinDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div>
                      <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{member.name}</h2>
                      <p className="text-xl text-orange-500 font-medium mb-2">{member.title}</p>
                      <p className="text-lg text-gray-600 dark:text-gray-400 italic">"{member.tagline}"</p>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{member.bio}</p>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Achievements</h3>
                      <ul className="space-y-3">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Fun Facts</h3>
                      <ul className="space-y-2">
                        {member.funFacts.map((fact, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                            <span className="text-gray-600 dark:text-gray-400">{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Want to Work With Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                We're always looking for talented individuals to join our mission of building the future of digital
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-all duration-300"
                >
                  Join Our Team
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-black transition-all duration-300"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
