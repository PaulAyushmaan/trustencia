"use client"

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CTO",
    company: "FinTech Solutions",
    image: "/client-1.png",
    rating: 5,
    text: "Trustencia transformed our legacy banking system into a modern, secure platform. Their AI-driven fraud detection has reduced false positives by 85% and improved customer satisfaction significantly.",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "Founder & CEO",
    company: "HealthTech Innovations",
    image: "/client-2.png",
    rating: 5,
    text: "The telemedicine platform they built for us handles over 10,000 consultations monthly. The HIPAA-compliant architecture and intuitive UX have been game-changers for our practice.",
  },
  {
    id: 3,
    name: "Emily Watson",
    position: "Head of Digital",
    company: "RetailMax",
    image: "/client-3.png",
    rating: 5,
    text: "Our e-commerce conversion rates increased by 40% after Trustencia's redesign. Their data-driven approach to UX optimization and performance improvements exceeded all expectations.",
  },
  {
    id: 4,
    name: "David Kim",
    position: "VP of Technology",
    company: "EduLearn Platform",
    image: "/client-4.png",
    rating: 5,
    text: "The learning management system they developed scales beautifully. We went from 1,000 to 50,000 active users without any performance issues. Exceptional engineering quality.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Chief Marketing Officer",
    company: "GreenEnergy Corp",
    image: "/client-5.png",
    rating: 5,
    text: "Trustencia's SEO and digital marketing strategy increased our organic traffic by 300%. Their technical expertise combined with marketing insights delivered outstanding ROI.",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    position: "Startup Founder",
    company: "PropTech Ventures",
    image: "/client-6.png",
    rating: 5,
    text: "From MVP to Series A, Trustencia has been our technology partner. Their agile development approach and deep understanding of startup needs helped us scale rapidly.",
  },
  {
    id: 7,
    name: "Jennifer Park",
    position: "Operations Director",
    company: "LogiFlow Systems",
    image: "/client-7.png",
    rating: 5,
    text: "The supply chain optimization platform they built using AI has reduced our operational costs by 25%. The real-time analytics dashboard provides incredible visibility.",
  },
  {
    id: 8,
    name: "Robert Johnson",
    position: "Security Officer",
    company: "CyberGuard Inc",
    image: "/client-8.png",
    rating: 5,
    text: "Their cybersecurity implementation is top-notch. Zero security incidents in 18 months, and their 24/7 monitoring gives us complete peace of mind.",
  },
  {
    id: 9,
    name: "Maria Gonzalez",
    position: "Product Manager",
    company: "SocialConnect",
    image: "/client-9.png",
    rating: 5,
    text: "The mobile app they developed has 4.8 stars on app stores. User engagement increased by 60% thanks to their intuitive design and smooth performance.",
  },
  {
    id: 10,
    name: "Thomas Anderson",
    position: "CTO",
    company: "DataInsights Pro",
    image: "/client-10.png",
    rating: 5,
    text: "Their machine learning models have improved our prediction accuracy by 45%. The custom analytics dashboard provides actionable insights that drive business decisions.",
  },
  {
    id: 11,
    name: "Rachel Green",
    position: "Brand Manager",
    company: "CreativeStudio",
    image: "/client-11.png",
    rating: 5,
    text: "The brand identity and website they created perfectly captures our vision. Our brand recognition has increased significantly, and client inquiries are up 80%.",
  },
  {
    id: 12,
    name: "Michael Brown",
    position: "Founder",
    company: "TechStartup Hub",
    image: "/client-12.png",
    rating: 5,
    text: "Trustencia doesn't just deliver code; they deliver solutions. Their strategic thinking and technical execution have been instrumental in our company's growth.",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-black dark:to-blue-950/20">
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
              Client Success Stories
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Clients</span>{" "}
            Say
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Real feedback from businesses we've helped transform through innovative technology solutions.
          </p>
        </motion.div>

        {/* Main Content - 50/50 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Testimonial Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Current Testimonial */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <Quote className="w-12 h-12 text-orange-500 mb-6" />

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].position}</p>
                  <p className="text-orange-600 dark:text-orange-400 font-medium">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-orange-500 w-8"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Client Pictures Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Stats Overlay */}
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </div>

            <div className="absolute top-4 right-4 z-10">
              <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
              </div>
            </div>

            {/* Client Pictures Grid */}
            <div className="grid grid-cols-4 gap-4 p-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    index === currentTestimonial ? "ring-4 ring-orange-500 scale-110 z-10" : "hover:scale-105"
                  }`}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-20 object-cover rounded-2xl shadow-lg"
                  />
                  {index === currentTestimonial && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/5 to-orange-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together and add your testimonial to our growing list of satisfied clients.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
