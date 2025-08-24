'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react'

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
    { name: 'Prețuri', href: '/preturi' },
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
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Negulescu gh.PFA</span>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              Specializați în montajul profesional de ferestre și uși în România. 
              Calitate superioară, materiale premium și garanție extinsă.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                </div>
                <a href="tel:+40123456789" className="text-slate-300 hover:text-white transition-all duration-300 font-medium">
                  +40 123 456 789
                </a>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                </div>
                <a href="mailto:contact@negulescu.ro" className="text-slate-300 hover:text-white transition-all duration-300 font-medium">
                  contact@negulescu.ro
                </a>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 mt-1">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                </div>
                <span className="text-slate-300 font-medium leading-relaxed">
                  Strada Exemplu 123<br />
                  București, România
                </span>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 mt-1">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                </div>
                <div className="text-slate-300 font-medium leading-relaxed">
                  <div>Luni - Vineri: 08:00 - 18:00</div>
                  <div>Sâmbătă: 09:00 - 14:00</div>
                  <div>Duminică: Închis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Servicii</h3>
            <ul className="space-y-4">
              {footerLinks.servicii.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Companie</h3>
            <ul className="space-y-4">
              {footerLinks.companie.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Legal</h3>
            <ul className="space-y-4 mb-10">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 mb-8 font-semibold shadow-lg shadow-emerald-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contactează pe WhatsApp</span>
            </a>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Urmărește-ne</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-slate-400 font-medium">
              © {currentYear} Negulescu gh.PFA. Toate drepturile rezervate.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-slate-400 font-medium">
              <span className="px-3 py-1 bg-slate-800/50 rounded-lg">CUI: RO12345678</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-lg">J40/1234/2020</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-lg">Capital social: 50.000 RON</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}