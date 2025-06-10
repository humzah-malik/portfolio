'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start bg-[#191D32] text-white px-4 py-12"
    >
      {/* New Title for About section */}
      <h2 className="text-3xl mt-16 mb-10 text-center font-bold">About Me</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full items-stretch md:min-h-[520px]">
        {/* Left Box */}
        <div className="bg-[#12192C] p-6 rounded-2xl border border-[#A0EFFF] flex flex-col justify-between items-center w-full md:w-[40%] shadow-lg flex-1 h-full">
          {/* Profile image */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
              src="/profile1.jpg"
              alt="Humzah"
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </div>
          {/* Social icons */}
          <div className="flex gap-6 mt-6 text-3xl">
            <a
              href="https://github.com/humzah-malik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A0EFFF] transition"
            >
              <FaGithub />
            </a>
            <a href="mailto:hmalik66@uwo.ca" className="hover:text-[#A0EFFF] transition">
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/humzahmalik076"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A0EFFF] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A0EFFF] transition"
            >
              <FaFileAlt />
            </a>
          </div>
        </div>

        {/* Right Box - About Me Text */}
        <div className="bg-[#12192C] p-6 rounded-2xl border border-[#A0EFFF] w-full md:w-1/2 shadow-lg flex-1 h-full flex flex-col justify-between">
          <h2 className="text-l mb-4 font-bold space-y-2">
            <p>
              I’ve always been drawn to creativity and design — my passion for tech
              started when I saw how code could bring ideas to life.
            </p>
            <p>
              What began as a curiosity in high school quickly became a drive to build
              thoughtful, purposeful software through self-led projects and hands-on
              learning.
            </p>
            <p>
              Now, as a third-year CS student at Western University, I’m focused on
              sharpening my skills through real-world development, strong fundamentals,
              and constant experimentation.
            </p>
            <p>
              I care about writing clean code, solving real problems, and growing
              through collaboration, iteration, and impact-driven work.
            </p>
          </h2>
        </div>
      </div>
    </section>
  )
}