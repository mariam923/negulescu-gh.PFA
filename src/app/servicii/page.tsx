'use client'

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, MessageCircle, Star, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import HeaderPremium from '@/components/HeaderPremium';
import FooterMinimal from '@/components/FooterMinimal';

// Lazy load CircularOrbit3D
const CircularOrbit3D = dynamic(() => import('@/components/CircularOrbit3D'), {
  ssr: false
});

const services = [
  {
    id: 'ferestre-pvc',
    title: 'Ferestre PVC',
    description: 'Ferestre din PVC de înaltă calitate cu profile multi-camerale pentru izolație termică și fonică superioară.',
    image: '/images/luxury-window.svg',
    features: [
      'Profile 5-7 camere pentru izolație maximă',
      'Geam termopan cu argon',
      'Feronerie de calitate superioară',
      'Rezistență la intemperii',
      'Întreținere minimă',
      'Garanție 10 ani'
    ],
    benefits: [
      'Economii la încălzire până la 40%',
      'Reducerea zgomotului cu până la 45dB',
      'Durabilitate peste 50 de ani',
      'Design modern și elegant'
    ],
    popular: true
  },
  {
    id: 'usi-aluminiu',
    title: 'Uși Aluminiu',
    description: 'Uși din aluminiu rezistente și elegante, perfecte pentru intrări principale și terase.',
    image: '/images/luxury-door.svg',
    features: [
      'Profile din aluminiu extrudat',
      'Sisteme de închidere securizate',
      'Rezistență la coroziune',
      'Varietate de culori și finisaje',
      'Izolație termică îmbunătățită',
      'Garanție 8 ani'
    ],
    benefits: [
      'Securitate sporită',
      'Aspect modern și profesional',
      'Rezistență la uzură',
      'Întreținere ușoară'
    ],
  },
  {
    id: 'jaluzele',
    title: 'Jaluzele',
    description: 'Jaluzele interioare și exterioare pentru controlul luminii și intimității.',
    image: '/images/luxury-window.svg',
    features: [
      'Materiale de calitate: aluminiu, lemn, PVC',
      'Sisteme de acționare manuale și electrice',
      'Rezistență la UV și decolorare',
      'Varietate de culori și texturi',
      'Montaj rapid și precis',
      'Garanție 5 ani'
    ],
    benefits: [
      'Control perfect al luminii',
      'Protecție împotriva căldurii',
      'Intimitate sporită',
      'Design personalizabil'
    ],
  },
  {
    id: 'rolete',
    title: 'Rolete',
    description: 'Rolete exterioare pentru protecție solară și securitate sporită.',
    image: '/images/luxury-door.svg',
    features: [
      'Lamele din aluminiu extrudat',
      'Sisteme de acționare electrice',
      'Protecție antispargere',
      'Izolație termică suplimentară',
      'Telecomandă și automatizare',
      'Garanție 7 ani'
    ],
    benefits: [
      'Securitate maximă',
      'Economii de energie',
      'Protecție împotriva vremii',
      'Confort sporit'
    ],
  },
  {
    id: 'pergole',
    title: 'Pergole',
    description: 'Pergole bioclimatice pentru terase și grădini, cu lamele orientabile.',
    image: '/images/luxury-service-bg.svg',
    features: [
      'Structură din aluminiu rezistent',
      'Lamele orientabile 0-135°',
      'Sistem de evacuare a apei',
      'Iluminare LED integrată',
      'Automatizare cu senzori',
      'Garanție 10 ani'
    ],
    benefits: [
      'Protecție solară reglabilă',
      'Rezistență la vânt până la 120 km/h',
      'Design modern și elegant',
      'Utilizare pe tot parcursul anului'
    ],
  },
  {
    id: 'usi-pvc',
    title: 'Uși PVC',
    description: 'Uși din PVC pentru interior și exterior, cu izolație termică și fonică excelentă.',
    image: '/images/luxury-door.svg',
    features: [
      'Profile multi-camerale',
      'Feronerie de securitate',
      'Geam securizat opțional',
      'Varietate de decoruri',
      'Praguri termice',
      'Garanție 8 ani'
    ],
    benefits: [
      'Izolație termică superioară',
      'Calitate superioară',
      'Întreținere minimă',
      'Durabilitate ridicată'
    ],
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Consultanță Gratuită',
    description: 'Vă oferim consultanță specializată pentru a identifica soluția optimă pentru nevoile dumneavoastră.'
  },
  {
    step: '02',
    title: 'Măsurători Precise',
    description: 'Echipa noastră realizează măsurători exacte la locația dumneavoastră, gratuit și fără obligații.'
  },
  {
    step: '03',
    title: 'Ofertă Personalizată',
    description: 'Elaborăm o ofertă detaliată, transparentă, adaptată bugetului și cerințelor dumneavoastră.'
  },
  {
    step: '04',
    title: 'Producție și Montaj',
    description: 'Producem și montăm produsele cu echipamente moderne și personal calificat, respectând termenele.'
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Experiență de 15+ ani',
    description: 'Peste 15 ani de experiență în domeniul tâmplăriei PVC și aluminiu.'
  },
  {
    icon: Shield,
    title: 'Garanție Extinsă',
    description: 'Oferim garanție extinsă pentru toate produsele și serviciile noastre.'
  },
  {
    icon: Clock,
    title: 'Livrare Rapidă',
    description: 'Respectăm termenele de livrare și montaj convenite cu clienții.'
  },
  {
    icon: Star,
    title: 'Calitate Superioară',
    description: 'Folosim doar materiale de cea mai bună calitate de la producători recunoscuți.'
  }
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Servicii - Negulescu Gh.PFA Tâmplărie | Ferestre, Uși, Jaluzele PVC';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-argus-dark via-argus-anthracite to-black">
      <HeaderPremium />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-argus-dark via-argus-anthracite to-black text-white py-32 overflow-hidden">
        <CircularOrbit3D size={600} color="#5AC8FA" thickness={3} speed={25} />
        
        {/* Ambient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-argus-ice-blue/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 glass-dark border-argus-ice-blue/20">
              <span className="text-argus-ice-blue">Servicii Complete de Tâmplărie</span>
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Serviciile <span className="bg-gradient-to-r from-argus-ice-blue to-blue-400 bg-clip-text text-transparent">Negulescu Gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-argus-gray-light/80 font-light">
              De la consultanță la montaj - soluții complete pentru casa dumneavoastră
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark font-semibold shadow-lg shadow-argus-ice-blue/30">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultanță Gratuită
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="glass-dark-hover border-argus-ice-blue/30 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Sună Acum
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-argus-ice-blue/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
            >
              Serviciile Noastre
            </motion.h2>
            <p className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto font-light">
              Oferim o gamă completă de servicii de tâmplărie PVC și aluminiu, 
              de la ferestre și uși până la sisteme de protecție solară.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "group hover:shadow-xl transition-all duration-300 relative overflow-hidden glass-dark glass-dark-hover border-2",
                  service.popular ? "border-argus-ice-blue/40" : "border-argus-ice-blue/10"
                )}>
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-argus-ice-blue text-argus-dark">
                      Popular
                    </Badge>
                  )}
                  <div className="relative h-48 overflow-hidden bg-argus-anthracite">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-60"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white font-display">{service.title}</CardTitle>
                    <CardDescription className="text-base text-argus-gray-light/70">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-white">Caracteristici:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-argus-gray-light/70">
                              <CheckCircle className="h-4 w-4 text-argus-ice-blue mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full group bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark" asChild>
                        <Link href={`/servicii/${service.id}`}>
                          Detalii Complete
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-argus-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Cum Lucrăm</h2>
            <p className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto font-light">
              Procesul nostru simplu și transparent vă asigură rezultate de calitate în timp optim.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-argus-ice-blue text-argus-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-lg shadow-argus-ice-blue/30">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-argus-ice-blue/20 -translate-y-0.5" />
                  )}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-argus-gray-light/70 font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">De Ce Să Ne Alegeți</h2>
            <p className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto font-light">
              Suntem partenerii de încredere pentru toate nevoile dumneavoastră de tâmplărie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-argus-ice-blue text-argus-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-argus-ice-blue/30">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-argus-gray-light/70 font-light">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-argus-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-argus-ice-blue/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            Gata să Începem Proiectul Dumneavoastră?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-argus-gray-light/80 font-light">
            Contactați-ne astăzi pentru o consultanță gratuită și o ofertă personalizată.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark font-semibold shadow-lg shadow-argus-ice-blue/30" asChild>
              <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicită Ofertă
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="glass-dark-hover border-argus-ice-blue/30 text-white" asChild>
              <Link href="tel:+40763564072">
                  <Phone className="mr-2 h-5 w-5" />
                  +40 763 564 072
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <FooterMinimal />
    </div>
  );
}