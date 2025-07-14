
import React, { useState, useEffect } from 'react';

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
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <>
    
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              BipcodeX
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors text-sm lg:text-base">Home</a>
              <a href="#services" className="hover:text-blue-400 transition-colors text-sm lg:text-base">Services</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors text-sm lg:text-base">Portfolio</a>
              <a href="#about" className="hover:text-blue-400 transition-colors text-sm lg:text-base">About</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors text-sm lg:text-base">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-3 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-3 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="block py-3 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#about" className="block py-3 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block py-3 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Nav