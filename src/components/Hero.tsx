'use client'

import { ArrowRight, Star, CheckCircle, Phone, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const whatsappNumber = "+40123456789"
  const whatsappMessage = "Bună ziua! Vreau să aflu mai multe despre serviciile dumneavoastră pentru ferestre și uși."
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Luxury Background with Floating Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.15),transparent_50%)] opacity-40" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
        
        {/* Floating Luxury Images */}
        <div className="absolute top-20 left-10 opacity-5 animate-float">
          <Image src="/images/luxury-window.svg" alt="" width={200} height={150} className="transform rotate-12" />
        </div>
        <div className="absolute top-40 right-20 opacity-5 animate-float-delayed">
          <Image src="/images/luxury-door.svg" alt="" width={120} height={160} className="transform -rotate-6" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-4 animate-float-slow">
          <Image src="/images/luxury-window.svg" alt="" width={150} height={112} className="transform rotate-6" />
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-indigo-400 rounded-full opacity-40 animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        {/* Review Badge */}
        <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 mb-12 border border-slate-200/50 shadow-lg shadow-blue-500/10">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-700">4.9/5 din 500+ recenzii</span>
          <CheckCircle className="w-5 h-5 text-emerald-500" />
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.95] tracking-tight">
            <span className="text-slate-900">Ferestre și Uși</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Premium</span>
            <span className="block text-slate-800 text-3xl md:text-4xl lg:text-5xl font-light mt-2">pentru Casa Ta</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Transformă-ți casa cu ferestre și uși de înaltă calitate.<br className="hidden md:block" /> 
          <span className="font-medium text-slate-700">Montaj profesional, materiale premium și garanție extinsă.</span>
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-3 border border-slate-200/50 shadow-sm">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700">Garanție 10 ani</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-3 border border-slate-200/50 shadow-sm">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700">Montaj în 1-2 zile</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-3 border border-slate-200/50 shadow-sm">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700">Consultanță gratuită</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-4 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white px-12 py-6 rounded-3xl font-bold text-xl transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-2 shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/50 animate-glow overflow-hidden"
            aria-label="Contactează pe WhatsApp pentru ofertă gratuită"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            <MessageCircle className="w-7 h-7 relative z-10" />
            <span className="relative z-10">Ofertă Gratuită WhatsApp</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300 relative z-10" />
          </a>
          
          <a
            href="tel:+40123456789"
            className="group relative inline-flex items-center space-x-4 bg-white/95 hover:bg-white backdrop-blur-2xl text-slate-700 hover:text-slate-900 px-12 py-6 rounded-3xl font-bold text-xl transition-all duration-500 border-2 border-slate-200/60 hover:border-blue-300/60 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
            aria-label="Sună acum pentru consultanță"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Phone className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Sună Acum</span>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">15+</div>
            <div className="text-slate-600 font-medium text-lg">Ani de experiență</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">5000+</div>
            <div className="text-slate-600 font-medium text-lg">Proiecte finalizate</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-slate-600 font-medium text-lg">Clienți mulțumiți</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300/60 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}