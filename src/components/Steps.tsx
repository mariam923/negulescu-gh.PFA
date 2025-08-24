'use client'

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step {
  number: number
  title: string
  description: string
  icon: LucideIcon
}

interface StepsProps {
  steps: Step[]
  className?: string
}

export default function Steps({ steps, className }: StepsProps) {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cum Funcționează
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Procesul nostru simplu și transparent în 4 pași pentru 
            a-ți transforma casa cu ferestre și uși premium.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1
              
              return (
                <div key={step.number} className="relative">
                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-blue-600 transform -translate-x-1/2 z-0" />
                  )}
                  
                  <div className={cn(
                    "relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100",
                    "lg:hover:-translate-y-2"
                  )}>
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 pt-4">
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300",
                        isEven 
                          ? "bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white" 
                          : "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
                      )}>
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-200 rounded-full opacity-50" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-200 rounded-full opacity-50" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gata să Începem?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactează-ne astăzi pentru o consultanță gratuită și 
              să discutăm despre proiectul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/40123456789?text=Bună%20ziua!%20Vreau%20să%20încep%20procesul%20pentru%20ferestre%20și%20uși."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
              >
                Începe Acum pe WhatsApp
              </a>
              <a
                href="tel:+40123456789"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-200 transition-all"
              >
                Sună pentru Consultanță
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}