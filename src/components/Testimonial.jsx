import React from 'react'
import { 
    Menu, 
    X, 
    ArrowRight, 
    Star, 
    CheckCircle, 
    Code, 
    Smartphone, 
    Zap,
    TrendingUp,
    Award,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Quote,
    Globe,
    Database,
    Rocket
  } from 'lucide-react';
const Testimonial = () => {
    const testimonials = [
        {
          name: "Sarah Johnson",
          role: "CEO, TechStart",
          content: "ChhetriCode delivered beyond expectations! Our app performance improved by 300% and user engagement skyrocketed.",
          rating: 5
        },
        {
          name: "Michael Chen",
          role: "Founder, GrowthLab",
          content: "Bipul's expertise in full-stack development saved us months of work. Professional, reliable, and incredibly skilled.",
          rating: 5
        },
        {
          name: "Emily Rodriguez",
          role: "CTO, Innovate Co",
          content: "The mobile app ChhetriCode built for us generated $50K in revenue within the first month. Outstanding ROI!",
          rating: 5
        }
      ];
  return (
   <>
   
   <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              What Clients
              <span className="block bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 mb-4 sm:mb-6" />
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   </>
  )
}

export default Testimonial