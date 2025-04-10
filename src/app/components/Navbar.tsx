/** @jsxImportSource react */
'use client'

import { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>('')

  const sections = useIntersectionObserver({ threshold: 0.5 })

  useEffect(() => {
    const activeSection = sections.find(entry => entry.isIntersecting)?.target
    if (activeSection) setActiveLink(`#${activeSection.id}`)
  }, [sections])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 bg-[#191D32] border border-white-300 px-6 py-3 rounded-2xl z-50 backdrop-blur-md shadow-md"
    >
      <ul className="flex gap-6 text-white-300 text-sm">
        {navItems.map(({ id, label }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                const section = document.getElementById(id)
                if (section) {
                  const top = section.getBoundingClientRect().top + window.scrollY
                  animate(window.scrollY, top, {
                    duration: 0.8,
                    ease: 'easeInOut',
                    onUpdate: (val) => window.scrollTo(0, val),
                  })
                }
              }}
              className={`transition-all duration-200 px-4 py-2 rounded-lg ${
                activeLink === `#${id}`
                  ? 'bg-[#A0EFFF] text-black'
                  : 'text-white hover:bg-[#A0EFFF] hover:text-black'
              }`}
            >
              {label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}