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
const About = () => {
  return (
    <>
    
    <section id="about" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                BipcodeX?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                I'm Bipul Chhetri, a passionate full-stack developer who doesn't just write code—I build digital solutions 
                that solve real problems and drive measurable business growth. Every project is an opportunity to create something extraordinary.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Revenue-Focused Development</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Every line of code is written with your business goals in mind. I focus on performance, conversion, and user engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-emerald-400 p-2 rounded-lg flex-shrink-0">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Fast & Reliable Delivery</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Clear timelines, regular updates, and your project delivered on time. No surprises, just results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-400 p-2 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Modern Tech Stack</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Latest technologies, best practices, and scalable architecture. Your app is built to grow with your business.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-4 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-6 sm:p-8 transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <img
                  src="https://bipulchhetri-portoflio.vercel.app/static/media/Bipul%20photo.9cc79da2c0cb453956c3.jpeg"
                  alt="Developer workspace"
                  className="w-full h-54 sm:h-90 object-fill rounded-lg transform -rotate-3"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 max-w-xs">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-300">“I don't just build websites — I craft digital experiences that help businesses grow, connect, and convert.” — Bipul Chhetri

</p>
                <p className="text-xs text-gray-400 mt-2">- Bipul chhetri</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About