"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Cloud, Server, Layers, Zap } from "lucide-react"

const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    description: "Modern UI development with component-based architecture",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: Layers,
    color: "from-gray-800 to-gray-600",
    description: "Full-stack React framework with SSR and API routes",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    color: "from-green-600 to-green-500",
    description: "Server-side JavaScript runtime environment",
  },
  {
    name: "Express",
    category: "Backend",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    description: "Fast, unopinionated web framework for Node.js",
  },
  {
    name: "Python",
    category: "Backend",
    icon: Code2,
    color: "from-blue-600 to-yellow-500",
    description: "Versatile programming language for backend development",
  },
  {
    name: "FastAPI",
    category: "Backend",
    icon: Zap,
    color: "from-teal-500 to-green-500",
    description: "High-performance Python API framework",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: Code2,
    color: "from-yellow-400 to-yellow-600",
    description: "Dynamic programming language for web development",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: Code2,
    color: "from-blue-600 to-blue-500",
    description: "Typed superset of JavaScript for better development",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
    description: "Comprehensive cloud computing platform and services",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: Layers,
    color: "from-blue-500 to-blue-600",
    description: "Containerization platform for consistent deployments",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
    color: "from-blue-700 to-blue-600",
    description: "Advanced open-source relational database system",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    color: "from-green-600 to-green-500",
    description: "Flexible NoSQL document-oriented database",
  },
]

const categories = [
  { name: "Frontend", icon: Code2, count: technologies.filter((t) => t.category === "Frontend").length },
  { name: "Backend", icon: Server, count: technologies.filter((t) => t.category === "Backend").length },
  { name: "Cloud", icon: Cloud, count: technologies.filter((t) => t.category === "Cloud").length },
  { name: "Database", icon: Database, count: technologies.filter((t) => t.category === "Database").length },
]

export default function TechCapabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-orange-500">Technology</span> Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and innovative solutions.
          </p>
        </motion.div>

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-orange-500 mb-1">{category.count}</div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-300">{category.name}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{tech.name}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
                      {tech.category}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold mb-1">12+</div>
                <div className="text-orange-100 text-sm">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">4</div>
                <div className="text-orange-100 text-sm">Core Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-orange-100 text-sm">Modern Stack</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
