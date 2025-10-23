'use client'

import { MessageCircle, Calendar, Wrench, Star, Sparkles, Award, Shield, Phone } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Consultanță Personalizată',
    description: 'Analizăm împreună nevoile tale și îți oferim soluții inovatoare adaptate perfect stilului tău de viață.',
    icon: Sparkles,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50'
  },
  {
    id: 2,
    title: 'Măsurători de Precizie',
    description: 'Specialiștii noștri realizează măsurători milimetrice și evaluează toate aspectele tehnice ale proiectului.',
    icon: Calendar,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    id: 3,
    title: 'Propunere Exclusivă',
    description: 'Dezvoltăm o soluție unică, cu design personalizat și specificații tehnice adaptate perfect cerințelor tale.',
    icon: Award,
    color: 'from-emerald-500 to-green-500',
    bgColor: 'from-emerald-50 to-green-50'
  },
  {
    id: 4,
    title: 'Execuție Impecabilă',
    description: 'Montajul se realizează cu atenție la fiecare detaliu, folosind tehnologii avansate și materiale premium.',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50'
  },
  {
    id: 5,
    title: 'Garanție Premium',
    description: 'Beneficiezi de garanție extinsă și service de excelență pentru o experiență completă și durabilă.',
    icon: Shield,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50'
  }
]

export default function Steps() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40" />
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Procesul Nostru de Excelență
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            De la Viziune la Realitate
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fiecare proiect este o călătorie unică, ghidată de experiența noastră și atenția la detalii pentru rezultate extraordinare.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-200 via-blue-300 via-purple-300 via-pink-300 to-indigo-200 transform -translate-y-1/2 z-0 rounded-full opacity-60" />
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="text-center group">
                  {/* Enhanced Step Circle */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                      <Icon className="w-10 h-10 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">{step.id}</span>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute -top-2 -left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
                      <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Enhanced Step Content */}
                  <div className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 border border-white/50`}>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Enhanced Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="relative">
                        <svg className="w-10 h-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity duration-300" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Să Creăm Ceva <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Extraordinar</span>
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Fiecare proiect începe cu o conversație. Hai să discutăm despre visurile tale și să le transformăm în realitate.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Începe Proiectul
                  </span>
                </a>
                <a 
                  href="tel:+40763564072" 
                  className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 rounded-full font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:border-white/60"
                >
                  <span className="flex items-center">
                    <Phone className="mr-3 h-5 w-5" />
                    Sună Acum
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}