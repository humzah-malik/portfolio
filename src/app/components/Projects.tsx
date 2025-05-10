'use client'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'VoxWave',
    description: 'Productivity web app with a custom study timer to track tasks and manage time efficiently.',
    tech: 'HTML, CSS, JS, Node.js, MongoDB, Todoist API',
    image: '/voxWave',
    github: 'https://github.com/humzah-malik/VoxWave'
  },
  {
    title: 'Focus Flow',
    description: 'Productivity web app with a custom study timer to track tasks and manage time efficiently.',
    tech: 'HTML, CSS, JS, Node.js, MongoDB, Todoist API',
    image: '/focusflow.png',
    live: 'https://study-timer-app-5vuc.onrender.com/',
    github: 'https://github.com/humzah-malik/focus-flow'
  },
  {
    title: 'Portfolio Site',
    description: 'Personal developer portfolio with animations',
    tech: 'Next.js, TypeScript, Tailwind CSS, Framer Motion, React Icons',
    image: '/portfolio.png',
    live: 'https://humzahmalik-portfolio.vercel.app/',
    github: 'https://github.com/humzah-malik/portfolio'
  },
  {
    title: 'Checkers',
    description: 'Retro-style Checkers game built with C++ and Qt, featuring two-player and AI modes, custom undo logic, and sound effects.',
    tech: 'C++',
    image: '/checkers2.png',
    github: 'https://github.com/humzah-malik/Checkers'
  },
  {
    title: 'AtlasVenture',
    description: 'Educational geography game with interactive challenges, a custom hint system, and tested features to enhance user engagement.',
    tech: 'Java',
    image: '/atlasVenture.png',
    github: 'https://github.com/humzah-malik/atlasventure'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 py-16 bg-[#191D32] text-white">
      <h2 className="text-3xl mt-16 mb-10 text-center font-bold">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="relative bg-[#12192C] border border-[#A0EFFF] rounded-xl overflow-hidden group shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-top" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-1">{project.description}</p>
              <span className="text-xs text-green-400 block mt-2">{project.tech}</span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md text-white flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-[#A0EFFF] hover:text-black transition"
              >
                Live Site <FaExternalLinkAlt />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-[#A0EFFF] hover:text-black transition"
              >
                GitHub <FaGithub />
              </a>
            )}
          </div>
          </div>
        ))}
      </div>

      <h2 className="text-center text-[#A0EFFF] mt-6 text-lg md:text-xl font-semibold flicker">
        More projects launching soon. Stay tuned!
      </h2>

    </section>
  )
}