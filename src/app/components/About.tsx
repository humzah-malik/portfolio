'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-[#191D32] text-white px-4 py-12">
      
      {/* New Title for About section */}
      <h2 className="text-3xl mt-12 mb-10 text-center font-bold">About</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        {/* Left Box and Right Box stay the same */}
        <div className="bg-[#12192C] p-6 rounded-2xl border border-[#A0EFFF] flex flex-col items-center w-full md:w-[40%] shadow-lg h-[310px]"> 
        <div className=" rounded-lg w-[250px] h-[250px] relative overflow-hidden">
        <Image
            src="/randomm.jpg"
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
          <h2 className="text-xl mb-4 font-bold">About Me</h2>
          <p>
            {/* Replace with your own text later */}
            im sorry
          </p>
        </div>
      </div>
    </section>
  )
}