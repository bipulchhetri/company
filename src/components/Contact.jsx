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
const Contact = () => {
  return (
    <>
    
    <section id="contact" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Build
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Your Success Story?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Let's discuss how I can transform your ideas into a powerful application that drives real business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-blue-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Email</div>
                    <div className="text-gray-300 text-sm sm:text-base">bipulchhetri06@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-emerald-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Phone</div>
                    <div className="text-gray-300 text-sm sm:text-base">+91- 7363833189</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-purple-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Location</div>
                    <div className="text-gray-300 text-sm sm:text-base"> Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8">
  <form
    action="https://getform.io/f/bpjponwb"
    method="POST"
    className="space-y-4 sm:space-y-6"
  >
      <input type="hidden" name="_redirect" value="https://yourdomain.com/" />

    <div className="grid gap-4 sm:grid-cols-2">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
      />
    </div>
    <input
      type="text"
      name="subject"
      placeholder="Project Subject"
      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
    />
    <textarea
      name="message"
      rows={5}
      placeholder="Tell me about your project..."
      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
    ></textarea>
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base"
    >
      Send Message
    </button>
  </form>
</div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact