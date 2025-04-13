'use client'
import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

type HomeLandingProps = {
  onStart: () => void
}

export default function HomeLanding({ onStart }: HomeLandingProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      onStart()
    }, 2000)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#191D32]">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 font-[Russo_One] text-white text-center">
        Hi, My Name is Humzah Malik.<br />
        <Typewriter
        words={[
          'Software Engineer.',
          'Designer.',
          'Weight Lifter.',
          'Soccer Fanatic.',
          'Sightseer.',
          'Avid Reader.'
        ]}          
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </h1>

      {!loading ? (
        <button
          onClick={handleClick}
          className="border border-[#A0EFFF] hover:bg-[#A0EFFF] hover:text-black px-6 py-2 rounded-lg transition mt-4"
        >
          Press to Start
        </button>
      ) : (
        <div className="w-[200px] h-3 rounded bg-white/20 mt-4 overflow-hidden">
          <motion.div
            className="h-full bg-[#A0EFFF]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>
      )}
    </section>
  )
}