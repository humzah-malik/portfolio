'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-6 font-[Russo_One] text-white text-center">
        Hi, my name is Humzah Malik.<br />
        <Typewriter
        words={[
          'Software Engineer.',
          'Designer.',
          'Weight Lifter.',
          'Soccer Fanatic.',
          'Sightseer.',
          'Avid Reader.',
          'TV fan.'
        ]}          
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </h1>
    </section>
  )
}