
// landing page
import React from 'react'
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolio = [
    {
      title: "Lawyer Demo Website ",
      category: "FrontEnd Development",
      image: "https://cdn.pixabay.com/photo/2022/11/19/21/13/judge-7602999_1280.png",
      description: "Professional and responsive lawyer website with service details, appointment booking, client testimonials, and a strong visual presence to build trust and credibility.",
      link: "https://lawyerdemo1.netlify.app/"
    },
    {
      title: "E-Book Platform",
      category: "Full Stack Development",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete online store with payment integration, inventory management, and admin dashboard",
      link: "https://book-store-lyart-gamma.vercel.app/"
    },
    {
      title: "Learning Platform",
      category: "WebApp Development",
      image: "https://cdn.pixabay.com/photo/2024/08/14/14/41/home-based-learning-8968710_1280.png",
      description: "Modern e-learning platform with courses, progress tracking, and quiz modules",
      link: "https://nalanda-learning.vercel.app/"
    },
    {
      title: "Blog Web App",
      category: "Web Development",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Blogging platform with admin dashboard and detailed blog view pages",
      link: "https://learn-englisify.vercel.app/"
    },
    {
      title: "Landing Page Design",
      category: "UI/UX + Frontend",
      image: "https://cdn.pixabay.com/photo/2016/08/27/12/06/website-1624028_1280.png",
      description: "Responsive modern design landing page for a tech startup",
      link: "https://internshala-assignment-ebon.vercel.app/"
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
                Projects
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Here are some of my latest projects where I crafted real solutions to real business needs.
            </p>
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm sm:text-base"
                  >
                    View Project
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
