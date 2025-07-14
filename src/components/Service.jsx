import React from 'react'
import { 
    CheckCircle, 
    Smartphone, 
    Zap,
    Globe,
    Rocket,
    Code,
    TrendingUp
} from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Website Development",
      description: "Launch your business with a tailor-made website that builds trust, looks professional, and helps convert visitors into paying clients. Fast, SEO-friendly, and mobile-optimized.",
      price: "Starting at ₹7,999",
      features: ["All Types of Informational Websites", "Modern UI/UX with Tailwind CSS", "Mobile-First Responsive Design", "SEO Optimization", "Contact Form Integration", "Fast Hosting Setup"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website for Lawyers",
      description: "Establish your legal credibility online with a professional, responsive website tailored for lawyers. Highlight your expertise, showcase services, and make it easy for clients to contact or consult with you.",
      price: "Starting at ₹1,999",
      features: ["Practice Area Pages", "Client Testimonials", "About, Contact, Consultation Sections", "Mobile-Optimized Design", "Modern UI/UX", "Fully Deploy-Ready"]
    },
    
    // {
    //   icon: <Rocket className="w-8 h-8" />,
    //   title: "Multi-Page React Website",
    //   description: "Build scalable, multi-page React websites with reusable components and blazing-fast performance for startups and businesses.",
    //   price: "Starting at ₹3,999",
    //   features: ["React + Tailwind Architecture", "Client-Side Routing", "Clean Component Structure", "SEO Friendly", "Contact & About Pages", "Fully Responsive"]
    // },
  
    // {
    //   icon: <Smartphone className="w-8 h-8" />,
    //   title: "Landing Page Design",
    //   description: "High-converting landing pages designed to capture leads, sell offers, and drive user actions. Built for performance and marketing.",
    //   price: "Starting at ₹1,499",
    //   features: ["Single-Scroll Conversion Focus", "Optimized Call-to-Actions", "Responsive Layout", "Speed Performance", "Lead Capture Forms", "Modern Animations"]
    // },
    // {
    //   icon: <Zap className="w-8 h-8" />,
    //   title: "Fixes & Performance Boost",
    //   description: "Already have a site? Let me fix responsiveness, squash bugs, and make your website load like lightning on all devices.",
    //   price: "Starting at ₹1999",
    //   features: ["Mobile Responsiveness Fix", "Core Web Vitals Optimization", "Layout/Display Issues", "Page Speed Boosting", "Cross-Browser Fixes", "Accessibility Improvements"]
    // },

    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Website Redesign & Revamp",
      description: "Transform your outdated website into a modern, user-friendly experience with a clean layout, fresh visuals, and optimized structure.",
      price: "Starting at ₹3,999",
      features: ["New Visual Design", "Improved Layout & Typography", "Better UX Flow", "Mobile Responsiveness", "Performance Boost", "SEO & Speed Optimization"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Development Services That
            <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Drive Real Growth
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            I create high-impact websites tailored to your goals — whether you're launching a business, showcasing your work, or upgrading an old site. Fast, modern, and built to convert.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-blue-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
                {service.title.includes("Lawyers") && (
                  <span className="ml-2 text-lg bg-yellow-500 text-black px-2 py-1 rounded-md">
                    (Most Demanded)
                  </span>
                )}
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 mb-4 sm:mb-6">
                {service.price}
              </div>
              <ul className="space-y-2 mb-6 sm:mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2 sm:mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base">
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20your%20website%20development%20services.%20Can%20you%20please%20share%20more%20details%3F" target="_blank" rel="noopener noreferrer" >
              Get Started</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
