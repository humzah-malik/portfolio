'use client'
import { useEffect, useState } from 'react'

export default function useIntersectionObserver(options: IntersectionObserverInit) {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

  useEffect(() => {
    const targets = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver((entries) => {
      setEntries(entries)
    }, options)

    targets.forEach(target => observer.observe(target))

    return () => observer.disconnect()
  }, [options])

  return entries
}