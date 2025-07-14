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
const Portfolio = () => {
    const portfolio = [
        {
          title: "E-commerce Platform",
          category: "Full Stack Development",
          image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Complete online store with payment integration, inventory management, and admin dashboard"
        },
        {
          title: "Food Delivery App",
          category: "WebApp Development",
          image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Cross-platform mobile app with real-time tracking and payment integration"
        },
        {
          title: "SaaS Dashboard",
          category: "Web Development",
          image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Analytics dashboard with real-time data visualization and reporting"
        },
        {
          title: "Fitness Tracking App",
          category: "WebApp Development",
          image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "iOS/Android fitness app with workout tracking and social features"
        }
      ];
  return (
   <>
   
   <section id="portfolio" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Recent
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {/* Success Stories */} Projects
              </span>
            </h2>
             <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
             Here are some of my latest projects where I crafted real solutions to real business needs.
            </p>
            {/* <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Real projects, real results. See how I've helped businesses transform their digital presence and boost revenue.
            </p> */}
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-purple-400 mb-2">{project.category}</div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm sm:text-base">
                    View Project
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   </>
  )
}

export default Portfolio