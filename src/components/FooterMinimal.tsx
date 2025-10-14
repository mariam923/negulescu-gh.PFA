'use client'

import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Ferestre PVC', href: '/servicii#ferestre-pvc' },
    { name: 'Ferestre Aluminiu', href: '/servicii#ferestre-aluminiu' },
    { name: 'Uși de intrare', href: '/servicii#usi-intrare' },
    { name: 'Uși interioare', href: '/servicii#usi-interior' },
  ],
  company: [
    { name: 'Despre noi', href: '/despre-noi' },
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Termeni și condiții', href: '/legal#termeni' },
    { name: 'Confidențialitate', href: '/legal#confidentialitate' },
    { name: 'Garanții', href: '/legal#garantii' },
  ]
}

export default function FooterMinimal() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-argus-dark border-t border-argus-ice-blue/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-argus-ice-blue to-blue-400 rounded-xl flex items-center justify-center shadow-md shadow-argus-ice-blue/30">
                <span className="text-argus-dark font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-display font-semibold text-white">
                Negulescu
              </span>
            </div>
            
            <p className="text-argus-gray-light/70 mb-8 max-w-sm leading-relaxed font-light">
              Expert în ferestre și uși premium din 2008. 
              Calitate excepțională, serviciu personalizat.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="tel:+40763564072" 
                className="flex items-center gap-3 text-argus-gray-light/70 hover:text-argus-ice-blue transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+40 763 564 072</span>
              </a>
              
              <a 
                href="mailto:contact@negulescu.ro" 
                className="flex items-center gap-3 text-argus-gray-light/70 hover:text-argus-ice-blue transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>contact@negulescu.ro</span>
              </a>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Servicii
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-argus-gray-light/70 hover:text-argus-ice-blue transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Companie
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-argus-gray-light/70 hover:text-argus-ice-blue transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-argus-gray-light/70 hover:text-argus-ice-blue transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-argus-ice-blue/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-argus-gray-light/60">
            <p>© {currentYear} Negulescu Gh.PFA. Toate drepturile rezervate.</p>
            <div className="flex gap-6">
              <span>CUI: RO12345678</span>
              <span>J40/1234/2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
