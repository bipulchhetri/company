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
const Hero = () => {
  return (
    <>
    
    
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div 
            className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I Transform Ideas Into
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Powerful Website
              </span>
              That Generate Revenue
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Full-stack developer specializing in web applications that drive real business results. 
              From concept to deployment, I build scalable solutions that grow with your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-6 sm:px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20your%20website%20development%20services.%20Can%20you%20please%20share%20more%20details%3F" target="_blank" rel="noopener noreferrer" >
  Get Started</a>
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-600 hover:border-blue-400 px-6 sm:px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10" >
              <a href="#portfolio">Portfolio</a>
              </button>
            </div>
{/* 
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">40+</div>
                <div className="text-xs sm:text-sm text-gray-400">Apps Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">2Y+</div>
                <div className="text-xs sm:text-sm text-gray-400">Experience</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute top-1/4 left-4 sm:left-10 animate-float">
          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform rotate-12 shadow-2xl"></div>
        </div>
        <div className="absolute top-1/3 right-4 sm:right-10 animate-float delay-1000">
          <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-2xl"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float delay-2000">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-purple-400 to-purple-600 transform rotate-45 shadow-2xl"></div>
        </div>
      </section>
    </>
  )
}

export default Hero