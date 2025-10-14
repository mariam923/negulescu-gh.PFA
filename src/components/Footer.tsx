'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin, Send, Award, Shield, Star } from 'lucide-react'

const footerLinks = {
  servicii: [
    { name: 'Ferestre PVC', href: '/servicii#ferestre-pvc' },
    { name: 'Ferestre Aluminiu', href: '/servicii#ferestre-aluminiu' },
    { name: 'Uși de Intrare', href: '/servicii#usi-intrare' },
    { name: 'Uși Interior', href: '/servicii#usi-interior' },
    { name: 'Jaluzele și Rolete', href: '/servicii#jaluzele' },
  ],
  companie: [
    { name: 'Despre Noi', href: '/despre-noi' },
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Contact', href: '/contact' },
    { name: 'Cariere', href: '/cariere' },
  ],
  legal: [
    { name: 'Termeni și Condiții', href: '/legal#termeni' },
    { name: 'Politica de Confidențialitate', href: '/legal#confidentialitate' },
    { name: 'GDPR', href: '/legal#gdpr' },
    { name: 'Cookies', href: '/legal#cookies' },
    { name: 'Garanții', href: '/legal#garantii' },
  ]
}

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/negulescu',
    icon: Facebook,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/negulescu',
    icon: Instagram,
    color: 'hover:text-pink-600'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/negulescu',
    icon: Linkedin,
    color: 'hover:text-blue-700'
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappUrl = "https://wa.me/40123456789?text=Bună%20ziua!%20Vreau%20să%20aflu%20mai%20multe%20despre%20serviciile%20dumneavoastră."

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-blob" style={{animationDelay: '4s'}} />
      </div>
      
      {/* Animated Main Footer Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Animated Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/50 transform-gpu perspective-1000" style={{transformStyle: 'preserve-3d'}}>
                <span className="text-white font-bold text-2xl group-hover:animate-pulse">N</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Negulescu Gh.PFA</h3>
                <p className="text-blue-200 group-hover:text-orange-300 transition-colors duration-300 font-medium">Ferestre & Uși Premium</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg hover:text-white transition-colors duration-300">
              Specializați în montajul profesional de ferestre și uși în România.
              <br />
              <span className="text-blue-300 font-semibold">Calitate superioară</span>, <span className="text-orange-300 font-semibold">materiale premium</span> și <span className="text-green-300 font-semibold">garanție extinsă</span>.
            </p>

            {/* Animated Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 transform-gpu" style={{transformStyle: 'preserve-3d'}}>
                  <Phone className="w-6 h-6 text-blue-300 group-hover:text-white group-hover:animate-bounce transition-all duration-300" />
                </div>
                <a href="tel:+40763564072" className="text-white hover:text-blue-300 transition-colors duration-300 font-semibold text-lg">
                  +40 763 564 072
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300" style={{transitionDelay: '0.1s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600/20 to-pink-600/20 backdrop-blur-sm border border-orange-400/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-600 group-hover:to-pink-600 transform-gpu" style={{transformStyle: 'preserve-3d'}}>
                  <Mail className="w-6 h-6 text-orange-300 group-hover:text-white group-hover:animate-pulse transition-all duration-300" />
                </div>
                <a href="mailto:contact@negulescu.ro" className="text-white hover:text-orange-300 transition-colors duration-300 font-semibold text-lg">
                  contact@negulescu.ro
                </a>
              </div>
              
              <div className="flex items-start space-x-3 group hover:translate-x-2 transition-all duration-300" style={{transitionDelay: '0.3s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-indigo-600 transform-gpu" style={{transformStyle: 'preserve-3d'}}>
                  <Clock className="w-6 h-6 text-purple-300 group-hover:text-white group-hover:animate-spin transition-all duration-300" />
                </div>
                <div className="text-white leading-relaxed group-hover:text-purple-300 transition-colors duration-300 font-semibold">
                  <div className="hover:translate-x-1 transition-transform duration-300">Luni - Vineri: 08:00 - 18:00</div>
                  <div className="hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>Sâmbătă: 09:00 - 14:00</div>
                  <div className="hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>Duminică: Închis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Services */}
          <div className="group">
            <h4 className="text-xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Servicii
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicii.map((link, index) => (
                <li key={link.name} className="hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 0.1}s`}}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:font-semibold relative group/link flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/link:scale-150 transition-transform duration-300"></span>
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Animated Company */}
          <div className="group">
            <h4 className="text-xl font-bold mb-6 text-white group-hover:text-orange-300 transition-colors duration-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Companie
            </h4>
            <ul className="space-y-3">
              {footerLinks.companie.map((link, index) => (
                <li key={link.name} className="hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 0.1}s`}}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:font-semibold relative group/link flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/link:scale-150 transition-transform duration-300"></span>
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Animated Legal & Contact */}
          <div className="group">
            <h4 className="text-xl font-bold mb-6 text-white group-hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Legal
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link, index) => (
                <li key={link.name} className="hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 0.1}s`}}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:font-semibold relative group/link flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/link:scale-150 transition-transform duration-300"></span>
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Animated WhatsApp CTA */}
            <div className="mb-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 hover:-translate-y-1 group/whatsapp transform-gpu" style={{transformStyle: 'preserve-3d'}}
              >
                <MessageCircle className="w-6 h-6 group-hover/whatsapp:animate-pulse" />
                <span>Contactează pe WhatsApp</span>
                <Send className="w-4 h-4 group-hover/whatsapp:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Animated Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white hover:text-blue-300 transition-colors duration-300">Urmărește-ne</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 group hover:rotate-6 transform-gpu" style={{transformStyle: 'preserve-3d', transitionDelay: `${index * 0.1}s`}}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Copyright Section */}
      <div className="border-t border-white/10 py-10 bg-gradient-to-br from-slate-950/50 to-blue-950/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left group">
              <p className="text-white font-bold mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-lg">
                © {currentYear} Negulescu Gh.PFA
              </p>
              <p className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors duration-300">
                Toate drepturile rezervate.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-slate-400">
              <span className="hover:text-white hover:font-semibold transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">CUI: RO12345678</span>
              <span className="hover:text-white hover:font-semibold transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10" style={{transitionDelay: '0.1s'}}>J40/1234/2020</span>
              <span className="hover:text-white hover:font-semibold transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10" style={{transitionDelay: '0.2s'}}>Înregistrat în România</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}