'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import HeaderPremium from '@/components/HeaderPremium'
import FooterMinimal from '@/components/FooterMinimal'
import VideoSection from '@/components/VideoSection'
import { Home, DoorOpen, Shield, Award, Clock, Users, Sparkles, Zap, Heart } from 'lucide-react'

// Lazy load composants lourds pour accélérer le chargement initial
const Hero3D = dynamic(() => import('@/components/Hero3D'), {
  loading: () => (
    <div className="h-[85vh] bg-gradient-to-br from-argus-dark via-argus-anthracite to-black flex items-center justify-center">
      <div className="text-argus-ice-blue text-xl">Chargement...</div>
    </div>
  ),
  ssr: false
})

const ServiceCard3D = dynamic(() => import('@/components/ServiceCard3D'), {
  ssr: false
})

const Gallery3D = dynamic(() => import('@/components/Gallery3D'), {
  loading: () => <div className="h-96 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark" />,
  ssr: false
})

const ParallaxSection3D = dynamic(() => import('@/components/ParallaxSection3D'), {
  ssr: false
})

const services = [
  {
    icon: Home,
    title: 'Ferestre Premium',
    description: 'Transformă-ți casa cu ferestre de ultimă generație. Design elegant, tehnologie avansată și performanțe excepționale.',
    features: ['Eficiență energetică maximă', 'Design personalizabil', 'Tehnologie smart', 'Garanție extinsă'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DoorOpen,
    title: 'Uși de Lux',
    description: 'Uși care redefinesc eleganța și securitatea. Fiecare ușă este o operă de artă funcțională.',
    features: ['Securitate inteligentă', 'Materiale premium', 'Design exclusiv', 'Acces controlat'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Sisteme Smart',
    description: 'Jaluzele și rolete inteligente care se adaptează perfect stilului tău de viață modern.',
    features: ['Control prin aplicație', 'Automatizare completă', 'Senzori integrati', 'Design minimalist'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Sparkles,
    title: 'Soluții Inovatoare',
    description: 'Tehnologii revoluționare pentru confortul și eficiența casei tale. Viitorul începe acum.',
    features: ['Inteligență artificială', 'Materiale eco-friendly', 'Eficiență maximă', 'Design futurist'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'Instalare Rapidă',
    description: 'Echipe de specialiști cu experiență vastă. Montaj rapid, curat și fără compromisuri.',
    features: ['Montaj în 24h', 'Echipe certificate', 'Tehnologie avansată', 'Rezultate perfecte'],
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Heart,
    title: 'Satisfacție Garantată',
    description: 'Pasiunea noastră este să creăm spații care îți depășesc așteptările. Fiecare proiect este unic.',
    features: ['Consultanță personalizată', 'Suport continuu', 'Calitate superioară', 'Relații pe termen lung'],
    gradient: 'from-pink-500 to-rose-500'
  }
]

const steps = [
  {
    number: 1,
    title: 'Consultanță și Măsurători',
    description: 'Venim la tine acasă pentru consultanță gratuită și măsurători precise. Analizăm nevoile tale și îți oferim cele mai bune soluții.',
    icon: Users
  },
  {
    number: 2,
    title: 'Ofertă Personalizată',
    description: 'Îți pregătim o soluție detaliată și personalizată, cu toate specificațiile tehnice și beneficiile clare.',
    icon: Award
  },
  {
    number: 3,
    title: 'Producție și Pregătire',
    description: 'Produsele tale sunt fabricate cu atenție la detalii, folosind doar materiale premium și tehnologii moderne.',
    icon: Shield
  },
  {
    number: 4,
    title: 'Montaj Profesional',
    description: 'Echipa noastră de specialiști realizează montajul cu precizie și atenție la detalii. Curățenie și ordine garantate.',
    icon: Clock
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-argus-dark via-argus-anthracite to-black overflow-hidden">
      <HeaderPremium />
      <Hero3D />
      
      {/* Services Section */}
      <ParallaxSection3D>
        <section id="servicii" className="py-16 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-argus-ice-blue/10 rounded-full blur-3xl animate-pulse-3d-glow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-3d-glow" style={{ animationDelay: '1s' }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-argus-ice-blue animate-pulse" />
                <span className="text-sm text-argus-gray-light font-medium">Expertiza noastră</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight"
              >
                Servicii Premium
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Soluții complete pentru ferestre și uși de înaltă calitate.
                <br />
                Meșteșug excepțional și materiale premium.
              </motion.p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard3D key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection3D>
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Gallery Section */}
      <Gallery3D />

      {/* CTA Section */}
      <ParallaxSection3D>
        <section className="py-16 bg-gradient-to-br from-argus-dark via-argus-anthracite to-black relative overflow-hidden">
          {/* 3D Background Elements */}
          <div className="absolute inset-0 perspective-container pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
              animate={{
                rotateZ: 360,
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-argus-ice-blue/10 to-blue-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-dark p-8 rounded-3xl border-2 border-argus-ice-blue/20"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark mb-8">
                <Sparkles className="w-4 h-4 text-argus-ice-blue" />
                <span className="text-sm text-argus-gray-light font-medium">Începe proiectul tău</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Gata să îți transformi spațiul?
              </h2>
              <p className="text-xl text-argus-gray-light/80 mb-8 leading-relaxed font-light">
                Hai să discutăm despre proiectul tău și să creăm împreună ceva excepțional.
                <br />
                Ofertă gratuită și fără obligații.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-argus-ice-blue text-argus-dark rounded-2xl font-semibold text-lg group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 30px rgba(90,200,250,0.4), 0 10px 40px rgba(0,0,0,0.3)',
                }}
              >
                <span>Cere o Ofertă Gratuită</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </ParallaxSection3D>

      {/* Footer */}
      <FooterMinimal />
    </main>
  )
}