'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Acasă', href: '/' },
  { name: 'Servicii', href: '/servicii' },
  { name: 'Portofoliu', href: '/portofoliu' },
  { name: 'Despre Noi', href: '/despre-noi' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = "+40763564072"
  const whatsappMessage = "Bună ziua! Sunt interessat de serviciile dumneavoastră pentru ferestre și uși."
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200" 
          : "bg-white/90 backdrop-blur-md"
      )}
    >
      {/* Clean border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Animated Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/50">
              <span className="text-white font-bold text-2xl group-hover:animate-pulse">N</span>
            </div>
            <span className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Negulescu Gh.PFA
            </span>
          </Link>

          {/* Animated Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 relative group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Animated CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/40763564072"
              className="flex items-center space-x-2 px-4 py-2 text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group"
              aria-label="Sună acum"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-semibold">Sună Acum</span>
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl group"
              aria-label="Contactează pe WhatsApp"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Animated Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110 group"
            aria-label="Deschide meniul"
          >
            {isOpen ? 
              <X className="w-6 h-6 rotate-0 group-hover:rotate-90 transition-transform duration-300" /> : 
              <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            }
          </button>
        </div>

        {/* Animated Mobile Navigation */}
        <div className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 font-medium hover:translate-x-2 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{transitionDelay: isOpen ? `${index * 0.1}s` : '0s'}}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className={`px-6 py-4 border-t border-gray-200 mt-4 transition-all duration-500 delay-300 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://wa.me/40763564072"
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium group hover:translate-x-1"
                  aria-label="Sună acum"
                >
                  <Phone className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Sună Acum</span>
                </a>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium w-fit hover:scale-105 hover:shadow-lg group"
                  aria-label="Contactează pe WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 group-hover:animate-pulse" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}