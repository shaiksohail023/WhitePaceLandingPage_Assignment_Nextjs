'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

const DarkModeContext = createContext<{
  isDark: boolean
  toggle: () => void
}>({ isDark: false, toggle: () => {} })

export const useDarkMode = () => useContext(DarkModeContext)

export default function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // const shouldBeDark = stored === 'dark' || (!stored && prefersDark)
    const shouldBeDark = stored === 'dark' 
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggle }}>
      {children}
    </DarkModeContext.Provider>
  )
}
