"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, ArrowRight, Star, Clock, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"

const services = [
  {
    title: "Web & App Development",
    shortDescription: "Full-stack solutions with modern frameworks and scalable architecture.",
    fullDescription:
      "Transform your digital presence with cutting-edge web applications and mobile solutions. We build responsive, performant, and user-centric applications using the latest technologies and best practices.",
    detailedDescription:
      "Our development team specializes in creating robust, scalable applications that grow with your business. From concept to deployment, we handle every aspect of the development lifecycle with precision and expertise.",
    image: "/webD.png",
    features: [
      "React, Next.js, and Vue.js frontend development",
      "Node.js, Python, and FastAPI backend systems",
      "Progressive Web Apps (PWAs) and mobile development",
      "API design, integration, and microservices architecture",
      "Database design, optimization, and cloud deployment",
      "Performance optimization and security implementation",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "FastAPI", "MongoDB", "PostgreSQL", "AWS"],
    stats: {
      projects: "200+",
      satisfaction: "98%",
      performance: "3x Faster",
      clients: "150+",
    },
    pricing: "Starting from $5,000",
    timeline: "4-12 weeks",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500/30 to-cyan-500/30",
    results: [
      "Average 40% improvement in page load times",
      "95% client satisfaction rate across all projects",
      "Zero security breaches in deployed applications",
      "100% mobile responsiveness guarantee",
    ],
  },
  {
    title: "AI/ML Solutions",
    shortDescription: "Intelligent systems that learn, adapt, and deliver exceptional user experiences.",
    fullDescription:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent user experiences. Our AI solutions are tailored to your specific business needs and objectives.",
    detailedDescription:
      "We develop custom machine learning models, natural language processing systems, and computer vision applications that transform how businesses operate and interact with their customers.",
    image: "/aiml.jpg",
    features: [
      "Custom machine learning model development and training",
      "Natural Language Processing (NLP) and chatbot systems",
      "Computer vision and image recognition solutions",
      "Predictive analytics and business intelligence dashboards",
      "AI model deployment, monitoring, and optimization",
      "Integration with existing systems and workflows",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "scikit-learn", "AWS SageMaker", "Python"],
    stats: {
      projects: "150+",
      satisfaction: "97%",
      performance: "5x ROI",
      accuracy: "99.2%",
    },
    pricing: "Starting from $8,000",
    timeline: "6-16 weeks",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500/30 to-pink-500/30",
    results: [
      "Average 85% reduction in manual processing time",
      "99.2% accuracy rate in deployed AI models",
      "500% average ROI within first year",
      "24/7 automated customer support capabilities",
    ],
  },
  {
    title: "Cybersecurity-Aware Systems",
    shortDescription: "Security-first development with robust protection against modern threats.",
    fullDescription:
      "Build secure applications from the ground up with our comprehensive cybersecurity approach. We implement enterprise-grade security measures without compromising on performance or user experience.",
    detailedDescription:
      "Our security experts ensure your applications are protected against modern threats through penetration testing, secure coding practices, and continuous monitoring systems.",
    image: "/cyber-security.png",
    features: [
      "Security audits and penetration testing services",
      "Secure authentication and authorization systems",
      "Data encryption and privacy protection implementation",
      "GDPR, HIPAA, and compliance framework adherence",
      "24/7 security monitoring and incident response",
      "Secure DevOps practices and CI/CD pipeline security",
    ],
    technologies: ["OAuth", "JWT", "SSL/TLS", "OWASP", "Kubernetes", "Docker", "AWS Security"],
    stats: {
      projects: "100+",
      satisfaction: "99%",
      performance: "0 Breaches",
      compliance: "100%",
    },
    pricing: "Starting from $6,000",
    timeline: "3-10 weeks",
    gradient: "from-red-500/20 to-orange-500/20",
    borderGradient: "from-red-500/30 to-orange-500/30",
    results: [
      "Zero security breaches in deployed systems",
      "100% compliance rate with industry standards",
      "Average 60% reduction in security vulnerabilities",
      "99.9% uptime with advanced monitoring",
    ],
  },
  {
    title: "E-Commerce Platforms",
    shortDescription: "Conversion-optimized online stores with seamless payment integration.",
    fullDescription:
      "Create powerful e-commerce experiences that drive sales and customer satisfaction. Our platforms are built for scale, performance, and conversion optimization.",
    detailedDescription:
      "We develop custom e-commerce solutions that handle everything from product catalogs and inventory management to payment processing and customer analytics.",
    image: "/ecommerce.jpg",
    features: [
      "Custom e-commerce platform development",
      "Multi-payment gateway integration (Stripe, PayPal, etc.)",
      "Advanced inventory management and order processing",
      "Multi-vendor marketplace solutions and admin panels",
      "Mobile-responsive design and PWA capabilities",
      "Analytics dashboards and conversion optimization",
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Magento", "BigCommerce", "React"],
    stats: {
      projects: "120+",
      satisfaction: "96%",
      performance: "40% More Sales",
      conversion: "25% Higher",
    },
    pricing: "Starting from $7,000",
    timeline: "6-14 weeks",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-500/30 to-emerald-500/30",
    results: [
      "Average 40% increase in conversion rates",
      "25% improvement in average order value",
      "99.9% payment processing reliability",
      "50% reduction in cart abandonment rates",
    ],
  },
  {
    title: "UI/UX & Branding",
    shortDescription: "Beautiful, intuitive designs that connect with your audience.",
    fullDescription:
      "Create memorable brand experiences through thoughtful design and user-centered principles. Our design team combines aesthetic excellence with usability research.",
    detailedDescription:
      "We craft comprehensive design systems that ensure consistency across all touchpoints while delivering exceptional user experiences that drive engagement and conversion.",
    image: "/ui.png",
    features: [
      "User experience (UX) research and design strategy",
      "User interface (UI) design and interactive prototyping",
      "Brand identity development and logo design",
      "Comprehensive design system creation and documentation",
      "Accessibility-focused design and WCAG compliance",
      "User testing, iteration, and conversion optimization",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer", "Webflow"],
    stats: {
      projects: "300+",
      satisfaction: "99%",
      performance: "60% Better UX",
      engagement: "45% Higher",
    },
    pricing: "Starting from $4,000",
    timeline: "3-8 weeks",
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderGradient: "from-indigo-500/30 to-purple-500/30",
    results: [
      "Average 60% improvement in user engagement",
      "45% increase in user task completion rates",
      "30% reduction in user support tickets",
      "99% accessibility compliance achievement",
    ],
  },
  {
    title: "SEO & Hosting",
    shortDescription: "High-performance hosting with search engine optimization built-in.",
    fullDescription:
      "Maximize your online visibility and performance with our comprehensive SEO and hosting solutions. We ensure your website ranks well and loads fast globally.",
    detailedDescription:
      "Our SEO experts combine technical optimization with content strategy to improve your search rankings, while our hosting solutions ensure optimal performance and reliability.",
    image: "/seo.jpg",
    features: [
      "Technical SEO optimization and site audits",
      "Content strategy development and optimization",
      "Performance optimization and Core Web Vitals improvement",
      "Cloud hosting setup with CDN and caching",
      "Analytics implementation and monitoring dashboards",
      "Local SEO optimization and Google My Business management",
    ],
    technologies: ["Google Analytics", "Search Console", "AWS", "Vercel", "Cloudflare", "GTM", "Semrush"],
    stats: {
      projects: "250+",
      satisfaction: "98%",
      performance: "200% More Traffic",
      ranking: "Top 3 Results",
    },
    pricing: "Starting from $2,000",
    timeline: "2-6 weeks",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderGradient: "from-yellow-500/30 to-orange-500/30",
    results: [
      "Average 200% increase in organic traffic",
      "85% of keywords ranking in top 3 positions",
      "50% improvement in page load speeds",
      "99.9% uptime with global CDN coverage",
    ],
  },
]

export default function ServicesClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-black dark:to-blue-950/20">
          <div className="max-w-7xl mx-auto">
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
                <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                  Our Expertise
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to transform your business and drive growth through innovation,
                security, and exceptional user experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
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
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className={`px-3 py-1 bg-gradient-to-r ${service.borderGradient} rounded-full text-sm font-medium border border-blue-500/30`}
                          >
                            {service.pricing}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{service.timeline}</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                          {service.title}
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                          {service.fullDescription}
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-500 leading-relaxed">
                          {service.detailedDescription}
                        </p>
                      </motion.div>

                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">What's Included:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Results */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Proven Results:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 p-3 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg border border-blue-500/10"
                            >
                              <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                      >
                        {Object.entries(service.stats).map(([key, value], idx) => (
                          <div
                            key={key}
                            className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
                          >
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
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
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                      />
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                        {/* Floating badges */}
                        <div className="absolute top-6 left-6">
                          <div className="px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              {service.stats.satisfaction} Satisfaction
                            </span>
                          </div>
                        </div>

                        <div className="absolute top-6 right-6">
                          <div className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full shadow-lg">
                            <span className="text-sm font-semibold text-white flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {service.timeline}
                            </span>
                          </div>
                        </div>

                        <div className="absolute bottom-6 left-6">
                          <div className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full shadow-lg">
                            <span className="text-sm font-semibold text-white flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {service.stats.projects} Projects
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-black dark:to-blue-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Let's discuss your project and find the perfect solution that drives growth and delivers exceptional
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
