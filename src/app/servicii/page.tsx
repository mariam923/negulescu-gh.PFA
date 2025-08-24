import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, MessageCircle, Star, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Servicii - Negulescu gh.PFA Tâmplărie | Ferestre, Uși, Jaluzele PVC',
  description: 'Servicii complete de tâmplărie Negulescu gh.PFA: ferestre PVC/aluminiu, uși, jaluzele, pergole. Montaj profesional, garanție extinsă, consultanță gratuită în București și Ilfov.',
  keywords: 'servicii tâmplărie, ferestre PVC, uși aluminiu, jaluzele, pergole, montaj profesional, garanție',
  openGraph: {
    title: 'Servicii - Negulescu gh.PFA Tâmplărie | Ferestre, Uși, Jaluzele PVC',
    description: 'Servicii complete de tâmplărie PVC și aluminiu cu montaj profesional și garanție extinsă.',
    images: ['/images/luxury-service-bg.svg'],
  },
};

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
    priceRange: 'de la 280 RON/mp',
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
    priceRange: 'de la 1.200 RON/bucată'
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
    priceRange: 'de la 120 RON/mp'
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
    priceRange: 'de la 350 RON/mp'
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
    priceRange: 'de la 2.500 RON/mp'
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
      'Preț accesibil',
      'Întreținere minimă',
      'Durabilitate ridicată'
    ],
    priceRange: 'de la 800 RON/bucată'
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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Servicii Complete de Tâmplărie
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Serviciile <span className="text-yellow-400">Negulescu gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              De la consultanță la montaj - soluții complete pentru casa dumneavoastră
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultanță Gratuită
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Phone className="mr-2 h-5 w-5" />
                Sună Acum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviciile Noastre</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim o gamă completă de servicii de tâmplărie PVC și aluminiu, 
              de la ferestre și uși până la sisteme de protecție solară.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className={cn(
                "group hover:shadow-xl transition-all duration-300 relative overflow-hidden",
                service.popular && "ring-2 ring-yellow-500"
              )}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-yellow-500 text-black">
                    Popular
                  </Badge>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-blue-600">
                    {service.priceRange}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Caracteristici:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full group" asChild>
                      <Link href={`/servicii/${service.id}`}>
                        Detalii Complete
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cum Lucrăm</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Procesul nostru simplu și transparent vă asigură rezultate de calitate în timp optim.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-0.5" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">De Ce Să Ne Alegeți</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suntem partenerii de încredere pentru toate nevoile dumneavoastră de tâmplărie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gata să Începem Proiectul Dumneavoastră?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactați-ne astăzi pentru o consultanță gratuită și o ofertă personalizată.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicită Ofertă
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <Link href="tel:+40721234567">
                <Phone className="mr-2 h-5 w-5" />
                0721 234 567
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}