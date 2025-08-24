'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const beforeAfterData = [
  {
    id: 1,
    title: 'Renovare Completă Ferestre PVC',
    location: 'București, Sector 1',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Înlocuirea ferestrelor vechi cu ferestre PVC premium cu triplu geam și izolație termică superioară.'
  },
  {
    id: 2,
    title: 'Uși de Intrare Securizate',
    location: 'Cluj-Napoca',
    before: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Montaj ușă de intrare blindată cu sistem de încuiere multipunct și finisaj premium.'
  },
  {
    id: 3,
    title: 'Ferestre Aluminiu Modern',
    location: 'Timișoara',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Transformare cu ferestre din aluminiu cu design contemporan și performanțe energetice excelente.'
  }
]

export default function BeforeAfter() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterData.length)
    setSliderPosition(50) // Reset slider position
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length)
    setSliderPosition(50) // Reset slider position
  }

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const currentData = beforeAfterData[currentSlide]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transformări Spectaculoase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă cum transformăm casele clienților noștri cu 
            ferestre și uși de înaltă calitate.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Project Info */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentData.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    📍 {currentData.location}
                  </p>
                  <p className="text-gray-700">
                    {currentData.description}
                  </p>
                </div>
                
                {/* Navigation */}
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Proiectul anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  
                  <div className="flex space-x-1">
                    {beforeAfterData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentSlide(index)
                          setSliderPosition(50)
                        }}
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors",
                          index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                        )}
                        aria-label={`Mergi la proiectul ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Proiectul următor"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Comparison */}
            <div className="relative aspect-video overflow-hidden before-after-slider">
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src={currentData.before}
                  alt={`Înainte - ${currentData.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ÎNAINTE
                </div>
              </div>

              {/* After Image */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={currentData.after}
                  alt={`După - ${currentData.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  DUPĂ
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 slider-handle"
                style={{ left: `${sliderPosition}%` }}
                onMouseMove={handleSliderMove}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-1 h-4 bg-gray-400 rounded-full" />
                </div>
              </div>

              {/* Interactive Area */}
              <div
                className="absolute inset-0 cursor-ew-resize"
                onMouseMove={handleSliderMove}
                aria-label="Glisează pentru a compara imaginile"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vrei să vezi și casa ta transformată astfel?
          </p>
          <a
            href="https://wa.me/40123456789?text=Vreau%20să%20văd%20mai%20multe%20exemple%20de%20transformări!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
          >
            Vezi Mai Multe Proiecte
          </a>
        </div>
      </div>
    </section>
  )
}