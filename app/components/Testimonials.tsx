"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
    text: "Trustencia transformed our entire digital infrastructure. Their AI-native approach helped us reduce operational costs by 40% while improving user experience dramatically. The team's expertise in security and scalability is unmatched.",
    rating: 5,
    image: "/client-1.png",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "CTO, InnovateLab",
    company: "InnovateLab",
    text: "Working with Trustencia was a game-changer for our startup. They delivered a robust platform that scales seamlessly with our growth. Their transparent workflow and global perspective brought fresh insights to our project.",
    rating: 5,
    image: "/client-2.png",
  },
  {
    id: 3,
    name: "Emily Watson",
    position: "Founder, GreenTech Ventures",
    company: "GreenTech Ventures",
    text: "The level of innovation and attention to detail Trustencia brings is exceptional. They didn't just build our platform; they helped us reimagine our entire business model. The ROI has been incredible.",
    rating: 5,
    image: "/client-3.png",
  },
  {
    id: 4,
    name: "David Kim",
    position: "Product Director, FinanceForward",
    company: "FinanceForward",
    text: "Trustencia's security-first approach gave us the confidence to handle sensitive financial data. Their team understood our compliance requirements and delivered a solution that exceeded all expectations.",
    rating: 5,
    image: "/client-4.png",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "VP of Operations, HealthSync",
    company: "HealthSync",
    text: "The healthcare platform Trustencia built for us has revolutionized patient care delivery. Their understanding of complex healthcare workflows and regulatory requirements is impressive.",
    rating: 5,
    image: "/client-5.png",
  },
]

const clientImages = [
  "/client-1.png",
  "/client-2.png",
  "/client-3.png",
  "/client-4.png",
  "/client-5.png",
  "/client-6.png",
  "/client-7.png",
  "/client-8.png",
  "/client-9.png",
  "/client-10.png",
  "/client-11.png",
  "/client-12.png",
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentReview = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Trusted by innovative companies worldwide to deliver exceptional digital solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side - Testimonial Content */}
          <div className="space-y-8">
            <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-[500px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-orange-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium flex-1">
                  "{currentReview.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-200 dark:border-orange-800">
                    <Image
                      src={currentReview.image || "/placeholder.svg"}
                      alt={currentReview.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{currentReview.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{currentReview.position}</p>
                    <p className="text-orange-600 dark:text-orange-400 font-medium">{currentReview.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-orange-500 w-8"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-950 bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-950 bg-transparent"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Client Images Grid */}
          <div className="relative">
            <div className="h-[500px] bg-white/50 dark:bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              {/* Client Images Grid */}
              <div className="grid grid-cols-4 gap-3 h-full">
                {clientImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      index === currentTestimonial ? "ring-3 ring-orange-400 scale-105 z-10" : "hover:scale-105"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Client ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    {index === currentTestimonial && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white dark:border-gray-900">
                        <div className="w-full h-full bg-orange-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Ready to join our satisfied clients?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  )
}
