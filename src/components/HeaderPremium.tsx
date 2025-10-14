'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Acasă', href: '/' },
  { name: 'Servicii', href: '/servicii' },
  { name: 'Portofoliu', href: '/portofoliu' },
  { name: 'Despre noi', href: '/despre-noi' },
  { name: 'Contact', href: '/contact' },
]

export default function HeaderPremium() {
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'bg-argus-dark/90 backdrop-blur-xl border-b border-argus-ice-blue/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-argus-ice-blue to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-md shadow-argus-ice-blue/30">
              <span className="text-argus-dark font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-display font-semibold text-white">
              Negulescu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-argus-gray-light hover:text-argus-ice-blue font-medium transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-argus-ice-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-argus-ice-blue text-argus-dark rounded-xl font-semibold hover:bg-argus-ice-blue/90 hover:shadow-lg hover:shadow-argus-ice-blue/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Ofertă Gratuită
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-argus-ice-blue/20 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-argus-ice-blue/10">
                <nav className="flex flex-col gap-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 text-argus-gray-light hover:text-argus-ice-blue hover:bg-argus-ice-blue/10 rounded-xl font-medium transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="mt-4 px-4 py-3 bg-argus-ice-blue text-argus-dark text-center rounded-xl font-semibold hover:bg-argus-ice-blue/90 transition-all duration-300 block"
                    >
                      Ofertă Gratuită
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
