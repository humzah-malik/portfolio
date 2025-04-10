'use client'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Weather App',
    description: 'Real-time weather using OpenWeatherMap API',
    tech: 'React, Tailwind, API',
    image: '/project1.jpg',
    type: 'website',
    link: 'https://yourweatherapp.com'
  },
  {
    title: 'Portfolio Site',
    description: 'Personal developer portfolio with animations',
    tech: 'Next.js, Tailwind, Framer Motion',
    image: '/project2.jpg',
    type: 'github',
    link: 'https://github.com/yourusername/portfolio'
  },
  // add more here...
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 py-16 bg-[#191D32] text-white">
      <h2 className="text-3xl mt-12 mb-10 text-center font-bold">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="relative bg-[#12192C] border border-[#A0EFFF] rounded-xl overflow-hidden group shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-1">{project.description}</p>
              <span className="text-xs text-green-400 block mt-2">{project.tech}</span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-[#A0EFFF] hover:text-black transition"
              >
                {project.type === 'website' ? 'Launch' : 'Open GitHub'}
                {project.type === 'website' ? <FaExternalLinkAlt /> : <FaGithub />}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}