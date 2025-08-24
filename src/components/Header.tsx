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
  { name: 'Prețuri', href: '/preturi' },
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

  const whatsappNumber = "+40123456789" // Replace with actual WhatsApp number
  const whatsappMessage = "Bună ziua! Sunt interessat de serviciile dumneavoastră pentru ferestre și uși."
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl shadow-xl shadow-slate-200/20 border-b border-slate-200/50" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/25">
              <span className="text-white font-black text-2xl">N</span>
            </div>
            <span className={cn(
              "text-3xl font-black transition-all duration-300 tracking-tight",
              isScrolled ? "text-slate-900" : "text-slate-900 drop-shadow-lg"
            )}>
              Negulescu gh.PFA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-base font-semibold transition-all duration-300 hover:scale-105 group drop-shadow-lg",
                  isScrolled ? "text-slate-700 hover:text-blue-600" : "text-slate-900 hover:text-blue-600"
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+40123456789"
              className={cn(
                "flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-300 font-semibold hover:scale-105",
                isScrolled 
                  ? "text-slate-700 hover:bg-slate-100 border border-slate-200" 
                  : "text-slate-900 hover:bg-white/10 border border-slate-300 drop-shadow-lg"
              )}
              aria-label="Sună acum"
            >
              <Phone className="w-5 h-5" />
              <span>Sună Acum</span>
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 font-semibold"
              aria-label="Contactează pe WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-3 rounded-2xl transition-all duration-300 hover:scale-105",
              isScrolled 
                ? "text-slate-700 hover:bg-slate-100 border border-slate-200" 
                : "text-slate-900 hover:bg-white/10 border border-slate-300 drop-shadow-lg"
            )}
            aria-label="Deschide meniul"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/50 shadow-2xl shadow-slate-200/20">
            <nav className="py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-semibold text-lg border-l-4 border-transparent hover:border-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-6 py-4 border-t border-slate-200/50 mt-4">
                <div className="flex flex-col space-y-4">
                  <a
                    href="tel:+40123456789"
                    className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold p-3 rounded-2xl hover:bg-slate-100"
                    aria-label="Sună acum"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Sună Acum</span>
                  </a>
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-4 rounded-2xl transition-all duration-300 w-fit font-semibold shadow-lg shadow-emerald-500/25"
                    aria-label="Contactează pe WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}