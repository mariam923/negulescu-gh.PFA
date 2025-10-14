'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Eye, Award, Star } from 'lucide-react'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: 'Ferestre Panoramice Moderne',
    category: 'Ferestre',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
    description: 'Design contemporan cu profile ultra-slim și geam triplu pentru eficiență maximă.',
    features: ['Geam triplu', 'Profile slim', 'Eficiență A+++'],
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    id: 2,
    title: 'Uși de Intrare Premium',
    category: 'Uși',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
    description: 'Uși de securitate cu design elegant și tehnologie smart de ultimă generație.',
    features: ['Securitate smart', 'Design exclusiv', 'Materiale premium'],
    gradient: 'from-purple-600 to-pink-500'
  },
  {
    id: 3,
    title: 'Sisteme de Umbrire Inteligente',
    category: 'Smart',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
    description: 'Jaluzele automatizate cu control prin aplicație și senzori de lumină.',
    features: ['Control app', 'Senzori smart', 'Automatizare'],
    gradient: 'from-green-600 to-emerald-500'
  },
  {
    id: 4,
    title: 'Pergole Bioclimatice',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description: 'Spații exterioare de lux cu control climatic și design arhitectural.',
    features: ['Control climatic', 'Design arhitectural', 'Materiale premium'],
    gradient: 'from-orange-600 to-red-500'
  },
  {
    id: 5,
    title: 'Ferestre Pivotante Designer',
    category: 'Ferestre',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    description: 'Ferestre cu deschidere pivotantă pentru spații moderne și luminoase.',
    features: ['Deschidere pivotantă', 'Design modern', 'Lumină maximă'],
    gradient: 'from-indigo-600 to-blue-500'
  },
  {
    id: 6,
    title: 'Uși Glisante Panoramice',
    category: 'Uși',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
    description: 'Uși glisante de mari dimensiuni pentru conectarea perfectă interior-exterior.',
    features: ['Dimensiuni mari', 'Glisare silentioaså', 'Conectare perfectă'],
    gradient: 'from-pink-600 to-rose-500'
  }
]

const categories = ['Toate', 'Ferestre', 'Uși', 'Smart', 'Exterior']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Toate')
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = selectedCategory === 'Toate' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">Galeria Noastră</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Proiecte de Excepție
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descoperă transformările spectaculoase realizate pentru clienții noștri. 
            Fiecare proiect este o poveste de succes și inovație.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8">
            {filteredItems.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-white/10">
                    <div className="aspect-video rounded-xl relative overflow-hidden">
                      <Image
                        src={filteredItems[currentIndex].image}
                        alt={filteredItems[currentIndex].title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${filteredItems[currentIndex].gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-3 py-2 bg-black/60 backdrop-blur-md rounded-full">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-semibold">Premium</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 mb-4">
                      <span className="text-blue-300 text-sm font-semibold">{filteredItems[currentIndex].category}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {filteredItems[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {filteredItems[currentIndex].description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 gap-3">
                    {filteredItems[currentIndex].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${filteredItems[currentIndex].gradient}`} />
                        <span className="text-gray-200 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`group px-8 py-4 bg-gradient-to-r ${filteredItems[currentIndex].gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3`}>
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Vezi Detalii
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {filteredItems.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `bg-gradient-to-r ${filteredItems[currentIndex].gradient} scale-125`
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}