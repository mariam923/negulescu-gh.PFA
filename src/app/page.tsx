'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Steps from '@/components/Steps'
import BeforeAfter from '@/components/BeforeAfter'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import { Home, DoorOpen, Shield, Award, Clock, Users } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Ferestre PVC',
    description: 'Ferestre PVC de înaltă calitate cu izolație termică și fonică superioară. Montaj profesional cu garanție extinsă.',
    features: ['Izolație termică excelentă', 'Rezistență la intemperii', 'Întreținere minimă', 'Garanție 10 ani']
  },
  {
    icon: Home,
    title: 'Ferestre Aluminiu',
    description: 'Ferestre din aluminiu moderne, durabile și elegante. Perfecte pentru stilul contemporan.',
    features: ['Design modern', 'Durabilitate maximă', 'Varietate de culori', 'Rezistență la coroziune']
  },
  {
    icon: DoorOpen,
    title: 'Uși de Intrare',
    description: 'Uși de intrare securizate din materiale premium. Protecție și eleganță pentru casa ta.',
    features: ['Securitate maximă', 'Izolație termică', 'Design personalizat', 'Sisteme de încuiere avansate']
  },
  {
    icon: DoorOpen,
    title: 'Uși Interior',
    description: 'Uși interior din lemn masiv și materiale composite. Finisaje premium pentru fiecare cameră.',
    features: ['Lemn masiv premium', 'Finisaje personalizate', 'Montaj precis', 'Varietate de stiluri']
  },
  {
    icon: Shield,
    title: 'Jaluzele și Rolete',
    description: 'Sisteme de umbrire moderne și funcționale. Control perfect al luminii și intimității.',
    features: ['Control automat', 'Materiale durabile', 'Design elegant', 'Instalare profesională']
  },
  {
    icon: Award,
    title: 'Servicii Complete',
    description: 'De la consultanță la montaj și service post-vânzare. Soluții complete pentru casa ta.',
    features: ['Consultanță gratuită', 'Măsurători precise', 'Montaj profesional', 'Service post-vânzare']
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
    description: 'Îți pregătim o ofertă detaliată și personalizată, cu toate specificațiile tehnice și costurile transparente.',
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
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section id="servicii" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim o gamă completă de servicii pentru ferestre și uși, 
              de la consultanță la montaj și service post-vânzare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <Steps steps={steps} />

      {/* Before/After Section */}
      <BeforeAfter />

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </main>
  )
}