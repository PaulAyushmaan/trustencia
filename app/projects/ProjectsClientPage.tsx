"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
  Target,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"

const projects = [
  {
    title: "KYCfabric",
    description: "Realtime KYC pipeline with AI-powered document verification and fraud detection.",
    fullDescription:
      "Revolutionary identity verification platform that processes documents in real-time with 99.7% accuracy, serving financial institutions worldwide with enterprise-grade security and compliance.",
    detailedDescription:
      "Built for financial institutions requiring robust identity verification, KYCfabric combines advanced AI algorithms with real-time processing capabilities to deliver unmatched accuracy and speed in document verification and fraud detection.",
    image: "/kyc-verification-dashboard.png",
    tech: ["FastAPI", "MongoDB", "React", "TensorFlow", "OpenCV", "Redis", "AWS", "Docker"],
    category: "AI/ML Platform",
    timeline: "8 months",
    teamSize: "6 developers",
    impact: "Enterprise Scale",
    stats: {
      users: "1M+",
      accuracy: "99.7%",
      processing: "85% Faster",
      savings: "$2M+ Saved",
    },
    features: [
      "Real-time document processing and verification",
      "AI-powered fraud detection algorithms",
      "Regulatory compliance automation (KYC/AML)",
      "Multi-language document support",
      "Advanced analytics and reporting dashboard",
      "RESTful API integration capabilities",
    ],
    challenges: [
      "Processing high-volume document uploads efficiently",
      "Ensuring 99.9% accuracy in identity verification",
      "Meeting strict regulatory compliance requirements",
      "Implementing real-time fraud detection algorithms",
    ],
    results: [
      "Reduced verification time by 85% compared to manual processes",
      "Achieved 99.7% accuracy rate in document verification",
      "Successfully processed 1M+ documents monthly",
      "Saved clients $2M+ annually in operational costs",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "Destini",
    description: "Interactive LMS platform with personalized learning paths and productivity tools.",
    fullDescription:
      "Advanced Learning Management System with AI-driven personalization, serving 50,000+ learners across 15 countries with 95% course completion rates and adaptive learning algorithms.",
    detailedDescription:
      "Destini revolutionizes online education through personalized learning experiences, interactive content delivery, and comprehensive progress tracking, making it the preferred choice for educational institutions worldwide.",
    image: "/learning-management-system-interface.png",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "WebRTC", "Socket.io", "AWS", "Redis"],
    category: "EdTech Platform",
    timeline: "10 months",
    teamSize: "8 developers",
    impact: "Global Reach",
    stats: {
      users: "50K+",
      completion: "95%",
      improvement: "40% Better",
      countries: "15+ Markets",
    },
    features: [
      "Personalized learning paths with AI recommendations",
      "Interactive video content with real-time collaboration",
      "Advanced progress analytics and performance tracking",
      "Mobile-responsive design with offline capabilities",
      "Multi-language support and accessibility features",
      "Integration with popular educational tools and platforms",
    ],
    challenges: [
      "Scaling video streaming infrastructure globally",
      "Creating adaptive learning algorithms for personalization",
      "Ensuring cross-platform compatibility and performance",
      "Implementing real-time collaboration features",
    ],
    results: [
      "Achieved 50,000+ active learners across 15 countries",
      "Maintained 95% course completion rate consistently",
      "Delivered 40% improvement in learning outcomes",
      "Successfully expanded to 15+ international markets",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "SecureCommerce",
    description: "Enterprise e-commerce platform with advanced security and analytics.",
    fullDescription:
      "Robust e-commerce solution handling $50M+ in transactions with 99.99% uptime, 300% conversion rate improvement, and enterprise-grade security features for large-scale retail operations.",
    detailedDescription:
      "SecureCommerce provides enterprise retailers with a comprehensive e-commerce platform that combines high-performance architecture, advanced security measures, and powerful analytics to drive sales and customer satisfaction.",
    image: "/ecommerce-dashboard-analytics.png",
    tech: ["Node.js", "Redis", "Stripe", "AWS", "Docker", "Kubernetes", "PostgreSQL", "React"],
    category: "E-Commerce",
    timeline: "12 months",
    teamSize: "10 developers",
    impact: "Enterprise Scale",
    stats: {
      transactions: "$50M+",
      uptime: "99.99%",
      conversion: "300% Better",
      cost: "60% Reduced",
    },
    features: [
      "Multi-vendor marketplace with advanced vendor management",
      "Comprehensive payment processing with fraud protection",
      "Real-time inventory management and order processing",
      "Advanced analytics suite with business intelligence",
      "Mobile-first responsive design and PWA capabilities",
      "International shipping and multi-currency support",
    ],
    challenges: [
      "Handling peak traffic loads during sales events",
      "Ensuring PCI DSS compliance and data security",
      "Integrating multiple payment gateways seamlessly",
      "Building scalable microservices architecture",
    ],
    results: [
      "Successfully processed $50M+ in transactions annually",
      "Achieved 99.99% uptime with zero data breaches",
      "Delivered 300% increase in conversion rates",
      "Reduced operational costs by 60% through automation",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-500/30 to-emerald-500/30",
  },
  {
    title: "HealthTrack Pro",
    description: "Comprehensive healthcare management system with patient portal and telemedicine features.",
    fullDescription:
      "Complete healthcare management solution connecting patients, doctors, and healthcare providers through unified platform with telemedicine capabilities, appointment scheduling, and HIPAA-compliant health record management.",
    detailedDescription:
      "HealthTrack Pro streamlines healthcare delivery through digital transformation, enabling healthcare providers to offer better patient care while maintaining strict compliance with healthcare regulations and data privacy requirements.",
    image: "/healthcare-management-dashboard.png",
    tech: ["React", "Node.js", "MongoDB", "WebRTC", "FHIR", "AWS", "Docker", "Redis"],
    category: "Healthcare",
    timeline: "14 months",
    teamSize: "12 developers",
    impact: "Healthcare Innovation",
    stats: {
      providers: "100+",
      records: "500K+",
      efficiency: "80% Better",
      compliance: "99.9%",
    },
    features: [
      "Telemedicine video consultations with HD quality",
      "Electronic health records (EHR) with FHIR compliance",
      "Comprehensive appointment scheduling and management",
      "Prescription management and pharmacy integration",
      "Insurance claim processing and billing automation",
      "HIPAA compliant infrastructure with end-to-end encryption",
    ],
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Integrating with existing hospital management systems",
      "Building secure and reliable video consultation platform",
      "Managing complex healthcare workflows and regulations",
    ],
    results: [
      "Successfully onboarded 100+ healthcare providers",
      "Managed 500,000+ patient records securely",
      "Achieved 80% reduction in administrative tasks",
      "Maintained 99.9% data security and compliance rate",
    ],
    gradient: "from-red-500/20 to-pink-500/20",
    borderGradient: "from-red-500/30 to-pink-500/30",
  },
  {
    title: "FinanceFlow",
    description: "AI-powered financial planning and investment management platform.",
    fullDescription:
      "Intelligent financial platform using machine learning to provide personalized investment advice, automated portfolio management, and comprehensive financial planning tools for individuals and businesses with $100M+ assets under management.",
    detailedDescription:
      "FinanceFlow democratizes wealth management through AI-driven insights, automated portfolio optimization, and comprehensive financial planning tools, making professional-grade financial services accessible to everyone.",
    image: "/financial-planning-dashboard.png",
    tech: ["Python", "Django", "PostgreSQL", "TensorFlow", "Celery", "React", "AWS", "Redis"],
    category: "FinTech",
    timeline: "16 months",
    teamSize: "14 developers",
    impact: "Financial Innovation",
    stats: {
      assets: "$100M+",
      improvement: "25% Better",
      investors: "10K+",
      compliance: "SEC Certified",
    },
    features: [
      "AI-powered investment recommendations and portfolio optimization",
      "Automated portfolio rebalancing with risk management",
      "Advanced risk assessment algorithms and stress testing",
      "Real-time market data integration and analysis",
      "Tax optimization strategies and loss harvesting",
      "Comprehensive reporting suite with performance analytics",
    ],
    challenges: [
      "Processing and analyzing real-time market data efficiently",
      "Building accurate financial prediction models",
      "Ensuring compliance with financial regulations (SEC, FINRA)",
      "Handling high-frequency trading data and transactions",
    ],
    results: [
      "Successfully managing $100M+ in assets under management",
      "Delivered 25% average portfolio performance improvement",
      "Attracted 10,000+ active investors to the platform",
      "Achieved SEC compliance certification and regulatory approval",
    ],
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderGradient: "from-yellow-500/30 to-orange-500/30",
  },
  {
    title: "SmartCity IoT",
    description: "IoT-based smart city management system with real-time monitoring and analytics.",
    fullDescription:
      "Comprehensive IoT platform for smart city management monitoring traffic, air quality, energy consumption, and public safety through 50,000+ interconnected sensors with intelligent analytics and automated response systems.",
    detailedDescription:
      "SmartCity IoT transforms urban management through connected infrastructure, enabling cities to optimize resources, improve citizen services, and create sustainable urban environments through data-driven decision making.",
    image: "/smart-city-iot-dashboard.png",
    tech: ["Python", "InfluxDB", "Grafana", "MQTT", "Kubernetes", "TensorFlow", "AWS IoT", "React"],
    category: "IoT Platform",
    timeline: "18 months",
    teamSize: "16 developers",
    impact: "Urban Innovation",
    stats: {
      sensors: "50K+",
      traffic: "30% Better",
      quality: "25% Improved",
      cities: "5 Deployed",
    },
    features: [
      "Real-time sensor data processing and analytics",
      "Predictive maintenance algorithms for city infrastructure",
      "Intelligent traffic optimization and flow management",
      "Environmental monitoring with air quality tracking",
      "Emergency response automation and alert systems",
      "Citizen engagement portal with service requests",
    ],
    challenges: [
      "Managing and processing data from millions of IoT devices",
      "Ensuring system reliability and 24/7 uptime",
      "Integrating with existing city infrastructure systems",
      "Building scalable architecture for multiple cities",
    ],
    results: [
      "Successfully deployed 50,000+ IoT sensors across cities",
      "Achieved 30% reduction in traffic congestion",
      "Delivered 25% improvement in air quality monitoring",
      "Deployed and operational in 5 major cities worldwide",
    ],
    gradient: "from-teal-500/20 to-blue-500/20",
    borderGradient: "from-teal-500/30 to-blue-500/30",
  },
]

export default function ProjectsClientPage() {
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
                  Success Stories
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Explore our portfolio of successful projects that showcase our expertise in delivering innovative
                digital solutions with measurable impact and exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
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
                            className={`px-3 py-1 bg-gradient-to-r ${project.borderGradient} rounded-full text-sm font-medium border border-purple-500/30`}
                          >
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
                          {project.fullDescription}
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-500 leading-relaxed">
                          {project.detailedDescription}
                        </p>
                      </motion.div>

                      {/* Project Metrics */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-4"
                      >
                        <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                          <Calendar className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{project.timeline}</div>
                          <div className="text-xs text-gray-500">Timeline</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                          <Users className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{project.teamSize}</div>
                          <div className="text-xs text-gray-500">Team Size</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                          <Award className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{project.impact}</div>
                          <div className="text-xs text-gray-500">Impact</div>
                        </div>
                      </motion.div>

                      {/* Key Features */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Technology Stack */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
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

                      {/* Key Results */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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

                        {/* Floating badges */}
                        <div className="absolute top-6 left-6">
                          <div className="px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              Live Project
                            </span>
                          </div>
                        </div>

                        <div className="absolute top-6 right-6">
                          <div className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full shadow-lg">
                            <span className="text-sm font-semibold text-white flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              Success
                            </span>
                          </div>
                        </div>

                        <div className="absolute bottom-6 left-6">
                          <div className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full shadow-lg">
                            <span className="text-sm font-semibold text-white flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              {project.impact}
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Let's bring your vision to life with our proven expertise and innovative approach to digital solutions
                that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Our Services
                  <Code className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
