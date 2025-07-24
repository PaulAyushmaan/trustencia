"use client"
import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      <AnimatedBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-black dark:text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              trustencia
              <motion.span
                className="inline-block w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full ml-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
              />
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-200 leading-relaxed">
            Built on <span className="font-semibold text-orange-500">Trust</span>. Driven by Intelligence.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting AI-first, security-aware, full-stack digital solutions that transform ideas into powerful, scalable
            products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{"Let's Build Together"}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 border border-orange-500 text-orange-500 font-semibold rounded-lg transition-all duration-300 hover:bg-orange-500 hover:text-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
