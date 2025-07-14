import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-3 sm:mb-4">
              BipCodeX
            </div>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base px-4">
              Transforming ideas into powerful applications, one project at a time.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a>
            </div> */}
            <div className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm">
              © 2025 BipcodeX. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer