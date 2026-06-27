'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useDarkMode } from '@/components/ui/DarkModeProvider'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const navLinks = [
  {
    label: 'Product',
    href: '#features',
    dropdown: [
      { label: 'Features', href: '#features', desc: 'Everything you need to collaborate' },
      { label: 'Integrations', href: '#integrations', desc: 'Connect your favorite tools' },
      { label: 'How It Works', href: '#how-it-works', desc: 'Step-by-step guide' },
    ],
  },
  { label: 'Solutions', href: '#statistics' },
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#cta' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('')
  const { isDark, toggle } = useDarkMode()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['features', 'integrations', 'statistics', 'how-it-works', 'resources', 'cta']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    setOpenDropdown(null)
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </div>
            whitepace
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                      activeSection && link.dropdown.some((d) => d.href === `#${activeSection}`)
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                      activeSection === link.href.slice(1)
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </button>
                )}

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 p-2 animate-fade-in">
                    {link.dropdown.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollTo(item.href)}
                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <div className="font-medium text-sm text-slate-900 dark:text-white">{item.label}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 6a6 6 0 100 12 6 6 0 000-12z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Button variant="ghost" size="sm" href="#">Log in</Button>
            <Button variant="primary" size="sm" href="#">Try for free</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </span>
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {link.label}
              </button>
              {link.dropdown && (
                <div className="ml-4 space-y-1">
                  {link.dropdown.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollTo(item.href)}
                      className="w-full text-left px-4 py-2 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-slate-600 dark:text-slate-400">Dark mode</span>
              <button
                onClick={toggle}
                className="relative w-12 h-6 bg-slate-200 dark:bg-indigo-600 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Toggle dark mode"
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${isDark ? 'translate-x-3' : 'translate-x-1'}`}
                />
              </button>
            </div>
            <Button variant="ghost" size="md" className="w-full justify-center">Log in</Button>
            <Button variant="primary" size="md" className="w-full justify-center">Try for free</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
