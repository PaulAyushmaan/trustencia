"use client"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyTrustencia from "./components/WhyTrustencia"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Team from "./components/Team"
import TechCapabilities from "./components/TechCapabilities"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <Services />
      <WhyTrustencia />
      <Projects />
      <Testimonials />
      <Team />
      <TechCapabilities />
      <Contact />
      <Footer />
    </main>
  )
}
