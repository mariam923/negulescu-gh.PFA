'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/servicii' },
  { name: 'Portofoliu', href: '/portofoliu' },
  { name: 'À propos', href: '/despre-noi' },
  { name: 'Contact', href: '/contact' },
]

export default function HeaderMinimal() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-minimal-light-gray'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-minimal-deep-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-semibold text-minimal-deep-black">
              Negulescu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-minimal-dark-gray hover:text-minimal-deep-black font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-minimal-deep-black text-white rounded-lg font-medium hover:bg-minimal-black transition-all duration-300 hover:shadow-md"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-minimal-deep-black"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-minimal-light-gray">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-minimal-dark-gray hover:text-minimal-deep-black hover:bg-minimal-off-white rounded-lg font-medium transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-3 bg-minimal-deep-black text-white text-center rounded-lg font-medium hover:bg-minimal-black transition-all duration-300"
              >
                Demander un devis
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
