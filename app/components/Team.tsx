"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Twitter, ArrowRight, MapPin, Star } from "lucide-react"
import Link from "next/link"

const founders = [
  {
    name: "Alex Chen",
    title: "Co-Founder & CTO",
    tagline: "AI + Trust enthusiast",
    description: "Visionary technologist with 12+ years building scalable AI systems at Google and Tesla.",
    image: "/male-tech-founder-headshot.png",
    location: "San Francisco, CA",
    experience: "12+ Years",
    expertise: ["AI/ML", "Distributed Systems", "Cybersecurity", "Cloud Architecture"],
    achievements: ["1B+ Daily Requests", "15+ Research Papers", "8 Patents", "20+ Conferences"],
    stats: {
      projects: "200+",
      patents: "8",
      papers: "15+",
      experience: "12Y",
    },
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Priya Sharma",
    title: "Co-Founder & CEO",
    tagline: "Product visionary & growth hacker",
    description: "Strategic leader combining technical expertise with business acumen from Airbnb and Stripe.",
    image: "/female-tech-founder-headshot.png",
    location: "Mumbai, India",
    experience: "10+ Years",
    expertise: ["Product Strategy", "Growth Hacking", "Business Development", "User Experience"],
    achievements: ["10M+ Users Scaled", "$50M+ Raised", "Forbes 30 Under 30", "Global Speaker"],
    stats: {
      users: "10M+",
      funding: "$50M+",
      growth: "500%",
      markets: "40+",
    },
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Raj Patel",
    title: "Co-Founder & CPO",
    tagline: "Design thinking meets engineering",
    description: "Creative technologist bridging design and engineering with experience from Apple and Figma.",
    image: "/male-product-designer-headshot.png",
    location: "London, UK",
    experience: "8+ Years",
    expertise: ["Product Design", "User Experience", "Design Systems", "Frontend Engineering"],
    achievements: ["100M+ Users Reached", "12 Design Awards", "500+ Companies", "50+ Mentees"],
    stats: {
      users: "100M+",
      awards: "12",
      systems: "500+",
      mentees: "50+",
    },
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Sarah Kim",
    title: "Co-Founder & CSO",
    tagline: "Security-first mindset",
    description:
      "Cybersecurity expert ensuring enterprise-grade security with experience from Palantir and CrowdStrike.",
    image: "/female-security-expert-headshot.png",
    location: "Seoul, South Korea",
    experience: "9+ Years",
    expertise: ["Cybersecurity", "Privacy Engineering", "Compliance", "Risk Management"],
    achievements: ["$100M+ Protected", "CISSP Certified", "Fortune 500 Security", "Research Contributor"],
    stats: {
      protected: "$100M+",
      breaches: "0",
      compliance: "100%",
      audits: "500+",
    },
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    gradient: "from-red-500/20 to-orange-500/20",
  },
]

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-green-50/30 dark:from-gray-950 dark:via-black dark:to-green-950/20"
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
            <span className="px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium border border-green-500/20">
              Meet the Team
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Founders
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Meet the brilliant minds behind Trustencia—a diverse team of innovators, builders, and dreamers united by a
            shared vision of transforming the digital landscape.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}
              />

              <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-800">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        Founder
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-xs font-semibold text-white">{founder.experience}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={founder.social.linkedin}
                      className="p-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.social.github}
                      className="p-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.social.twitter}
                      className="p-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 right-4">
                    <div className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-xs font-medium text-gray-900 dark:text-white flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {founder.location.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{founder.name}</h3>
                    <p className="text-lg text-green-600 dark:text-green-400 font-medium mb-2">{founder.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 italic">"{founder.tagline}"</p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{founder.description}</p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(founder.stats)
                      .slice(0, 4)
                      .map(([key, value], idx) => (
                        <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-500/10 via-emerald-600/5 to-green-500/10 rounded-3xl p-12 border border-green-500/20">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Want to Work With Our Team?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our mission of building the future of digital
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join-team"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Join Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-4 border border-green-500 text-green-600 dark:text-green-400 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Meet the Full Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
