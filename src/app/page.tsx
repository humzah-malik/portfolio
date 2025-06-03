'use client'
import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import HomeLanding from './components/HomeLanding'
import { motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'

export default function Page() {
  const [hasStarted, setHasStarted] = useState(false)

  const handleStart = () => {
    setHasStarted(true)
    setTimeout(() => {
      const about = document.getElementById('about')
      about?.scrollIntoView({ behavior: 'smooth' })
    }, 1000)
  }

  return (
    <main>
      <Analytics />
      {!hasStarted ? (
        <HomeLanding onStart={handleStart} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Home />
          <motion.div
            id="about-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <About />
          </motion.div>
          <Projects />
        </motion.div>
      )}
    </main>
  )
}