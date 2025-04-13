'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-start bg-[#191D32] text-white px-4 py-12">
      
      {/* New Title for About section */}
      <h2 className="text-3xl mt-16 mb-10 text-center font-bold">About Me</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full items-stretch">
        {/* Left Box and Right Box stay the same */}
        <div className="bg-[#12192C] p-6 rounded-2xl border border-[#A0EFFF] flex flex-col items-center w-full md:w-[40%] shadow-lg h-full"> 
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <Image
            src="/profile1.jpg"
            alt="Humzah"
            fill
            className="object-cover rounded-lg"
            unoptimized
        />
        </div>
          <div className="flex gap-4 mt-4 text-3xl">
            <a href="https://github.com/humzah-malik" target="_blank" rel="noopener noreferrer" className="hover:text-[#A0EFFF] transition">
                <FaGithub />
            </a>
            <a href="mailto:hmalik66@uwo.ca" className="hover:text-[#A0EFFF] transition">
                <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/humzahmalik076" target="_blank" rel="noopener noreferrer" className="hover:text-[#A0EFFF] transition">
                <FaLinkedin />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#A0EFFF] transition">
                <FaFileAlt />
            </a>
          </div>
        </div>

        {/* Right Box - About Me Text */}
        <div className="bg-[#12192C] p-6 rounded-2xl border border-[#A0EFFF] w-full md:w-1/2 shadow-lg">
          <h2 className="text-l mb-4 font-bold">
          I’ve always been drawn to creativity and design, but my passion for tech began when I realized how code could transform ideas into interactive experiences. 
          Creating a mini text-based adventure game in high school sparked my interest in computer science and opened the door to building projects that blend logic with creativity. 
          Now, as a third-year Computer Science student at Western University, I focus on developing design-driven applications with clean interfaces and intuitive user experiences. 
          I’m currently seeking opportunities for Summer 2025 where I can learn, contribute, and help build meaningful products.
            </h2>
        </div>
      </div>
    </section>
  )
}