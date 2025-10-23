'use client'

import { Phone, CheckCircle, Sparkles, Award, Shield, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Background Image with Parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern home interior"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/20 to-orange-900/30" />
      </div>
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{animationDelay: '4s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Animated Badge */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/50 text-slate-700 text-sm font-semibold shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="w-4 h-4 mr-2 text-blue-500 animate-pulse" />
            Peste 15 ani de experiență în tâmplărie de calitate
          </div>

          {/* Animated Main Heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
              Creăm Spații
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-clip-text text-transparent font-extrabold hover:scale-105 transition-transform duration-300 inline-block">
              Extraordinare
            </span>
          </h1>

          {/* Animated Subtitle */}
          <p className={`text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transformăm visurile tale în realitate prin <span className="text-blue-600 font-semibold hover:text-orange-500 transition-colors duration-300">tâmplărie premium</span>, 
            <span className="text-blue-600 font-semibold hover:text-orange-500 transition-colors duration-300">design elegant</span> și 
            <span className="text-blue-600 font-semibold hover:text-orange-500 transition-colors duration-300">atenție la detalii</span> de neegalat.
          </p>

          {/* Animated Features */}
          <div className={`flex flex-wrap justify-center gap-6 pt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-5 py-3 border border-blue-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Consultanță Gratuită</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-5 py-3 border border-orange-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-orange-400/50 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">Montaj Premium</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-5 py-3 border border-green-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-green-400/50 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-slate-800 group-hover:text-green-600 transition-colors duration-300">Garanție Extinsă</span>
            </div>
          </div>

          {/* Animated CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-10 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Descoperă Soluțiile Noastre
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-slate-800 bg-white/90 backdrop-blur-md text-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-900 px-10 py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
              asChild
            >
              <Link href="https://wa.me/40763564072?text=Salut!%20Sunt%20interesat%20de%20serviciile%20de%20t%C3%A2mpl%C4%83rie.%20A%C8%99%20dori%20s%C4%83%20aflu%20mai%20multe%20detalii." target="_blank">
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Contactează-ne Direct
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}