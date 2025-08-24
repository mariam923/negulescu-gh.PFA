import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, Star, Calculator, MessageCircle, Phone, Info, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Prețuri - Negulescu gh.PFA Tâmplărie | Oferte Transparente 2024',
  description: 'Prețuri competitive Negulescu gh.PFA pentru ferestre PVC/aluminiu, uși, jaluzele. Oferte transparente, fără costuri ascunse, consultanță gratuită. Calculează costul proiectului tău.',
  keywords: 'prețuri tâmplărie, cost ferestre PVC, tarife montaj, oferte transparente, calculare preț, consultanță gratuită',
  openGraph: {
    title: 'Prețuri - Negulescu gh.PFA Tâmplărie | Oferte Transparente 2024',
    description: 'Prețuri transparente și competitive pentru toate serviciile de tâmplărie. Pachete complete cu montaj inclus.',
    images: ['/images/luxury-service-bg.svg'],
  },
};

const pricingPackages = [
  {
    id: 'basic',
    name: 'Pachet Esențial',
    description: 'Perfect pentru renovări simple și buget limitat',
    price: 280,
    unit: 'mp',
    popular: false,
    features: [
      'Profile PVC 5 camere',
      'Geam termopan standard',
      'Feronerie de bază',
      'Montaj profesional inclus',
      'Garanție 5 ani',
      'Consultanță gratuită',
      'Măsurători precise'
    ],
    notIncluded: [
      'Geam Low-E',
      'Feronerie premium',
      'Profile colorate',
      'Jaluzele integrate'
    ],
    bestFor: 'Apartamente, renovări simple, buget limitat'
  },
  {
    id: 'premium',
    name: 'Pachet Premium',
    description: 'Soluția optimă pentru majoritatea proiectelor',
    price: 380,
    unit: 'mp',
    popular: true,
    features: [
      'Profile PVC 7 camere',
      'Geam Low-E cu argon',
      'Feronerie ROTO NT',
      'Montaj profesional inclus',
      'Garanție 8 ani',
      'Consultanță și proiectare 3D',
      'Măsurători și transport gratuit',
      'Profile disponibile în 3 culori',
      'Praguri termice incluse'
    ],
    notIncluded: [
      'Jaluzele integrate',
      'Automatizare',
      'Profile premium colorate'
    ],
    bestFor: 'Case, vile, proiecte medii și mari'
  },
  {
    id: 'luxury',
    name: 'Pachet Luxury',
    description: 'Excelența absolută pentru proiecte de lux',
    price: 520,
    unit: 'mp',
    popular: false,
    features: [
      'Profile PVC premium 7+ camere',
      'Geam tripan Low-E cu argon',
      'Feronerie ROTO NX premium',
      'Montaj cu echipă specializată',
      'Garanție extinsă 10 ani',
      'Consultanță arhitecturală',
      'Proiectare 3D detaliată',
      'Profile în orice culoare RAL',
      'Jaluzele integrate opționale',
      'Automatizare disponibilă',
      'Service post-vânzare prioritar'
    ],
    notIncluded: [],
    bestFor: 'Vile de lux, proiecte arhitecturale speciale'
  }
];

const servicesPricing = [
  {
    category: 'Ferestre PVC',
    items: [
      { name: 'Fereastră oscilo-batantă 120x140cm', price: '450 - 680', unit: 'buc' },
      { name: 'Fereastră fixă 100x120cm', price: '280 - 420', unit: 'buc' },
      { name: 'Fereastră cu 2 canaturi 150x140cm', price: '580 - 850', unit: 'buc' },
      { name: 'Balcon francez 80x220cm', price: '520 - 780', unit: 'buc' }
    ]
  },
  {
    category: 'Uși PVC/Aluminiu',
    items: [
      { name: 'Ușă intrare PVC 90x210cm', price: '800 - 1.200', unit: 'buc' },
      { name: 'Ușă terasă PVC 80x210cm', price: '650 - 950', unit: 'buc' },
      { name: 'Ușă aluminiu 90x210cm', price: '1.200 - 1.800', unit: 'buc' },
      { name: 'Ușă glisantă aluminiu 240x210cm', price: '1.800 - 2.500', unit: 'buc' }
    ]
  },
  {
    category: 'Jaluzele și Rolete',
    items: [
      { name: 'Jaluzele exterioare aluminiu', price: '120 - 180', unit: 'mp' },
      { name: 'Rolete exterioare', price: '350 - 450', unit: 'mp' },
      { name: 'Jaluzele interioare', price: '80 - 150', unit: 'mp' },
      { name: 'Plase de țânțari', price: '45 - 80', unit: 'mp' }
    ]
  },
  {
    category: 'Pergole și Sisteme',
    items: [
      { name: 'Pergolă bioclimatică standard', price: '2.500 - 3.200', unit: 'mp' },
      { name: 'Pergolă cu automatizare', price: '3.200 - 4.000', unit: 'mp' },
      { name: 'Copertină retractabilă', price: '800 - 1.200', unit: 'mp' },
      { name: 'Serre de grădină', price: '1.500 - 2.200', unit: 'mp' }
    ]
  }
];

const additionalServices = [
  { name: 'Demontare ferestre vechi', price: '25 - 40', unit: 'buc' },
  { name: 'Transport materiale (în București)', price: 'Gratuit', unit: '-' },
  { name: 'Măsurători la fața locului', price: 'Gratuit', unit: '-' },
  { name: 'Consultanță și proiectare 3D', price: 'Gratuit', unit: '-' },
  { name: 'Montaj în weekend', price: '+15%', unit: 'din valoare' },
  { name: 'Montaj urgent (sub 48h)', price: '+25%', unit: 'din valoare' },
  { name: 'Garanție extinsă (15 ani)', price: '+8%', unit: 'din valoare' },
  { name: 'Service anual preventiv', price: '150 - 300', unit: 'vizită' }
];

const paymentOptions = [
  {
    title: 'Plata în Rate',
    description: 'Împărțiți costul în rate convenabile',
    features: [
      'Până la 24 de rate fără dobândă',
      'Avans minim 30%',
      'Aprobare rapidă în 24h',
      'Fără comisioane ascunse'
    ]
  },
  {
    title: 'Plata la Livrare',
    description: 'Plătiți când proiectul este finalizat',
    features: [
      'Avans 50% la comandă',
      'Restul la finalizarea montajului',
      'Garanție de calitate',
      'Factura cu TVA inclus'
    ]
  },
  {
    title: 'Plata Integrală',
    description: 'Discount special pentru plata în avans',
    features: [
      'Discount 5% pentru plata integrală',
      'Prioritate în programare',
      'Garanție extinsă gratuită',
      'Service prioritar'
    ]
  }
];

const faqs = [
  {
    question: 'Prețurile includ TVA?',
    answer: 'Da, toate prețurile afișate includ TVA de 19%. Emitem factură fiscală pentru toate lucrările.'
  },
  {
    question: 'Sunt incluse și costurile de montaj?',
    answer: 'Da, în pachetele noastre montajul profesional este inclus în preț. Nu există costuri suplimentare pentru montaj standard.'
  },
  {
    question: 'Cât durează montajul?',
    answer: 'Pentru un apartament standard (6-8 ferestre) montajul durează 1-2 zile. Pentru proiecte mai mari, durata se stabilește în funcție de complexitate.'
  },
  {
    question: 'Oferiti garanție?',
    answer: 'Da, oferim garanție de 5-10 ani în funcție de pachetul ales, plus service post-vânzare pentru întreaga durată de viață a produselor.'
  },
  {
    question: 'Pot obține o ofertă personalizată?',
    answer: 'Absolut! Contactați-ne pentru măsurători gratuite și o ofertă detaliată adaptată nevoilor dumneavoastră specifice.'
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Prețuri Transparente și Competitive
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prețurile <span className="text-yellow-400">Negulescu gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Pachete complete cu montaj inclus, garanție extinsă și consultanță gratuită
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                <Link href="#pachete">
                  <Calculator className="mr-2 h-5 w-5" />
                  Vezi Pachetele
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ofertă Personalizată
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pachete" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pachete Complete</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alegeți pachetul potrivit pentru proiectul dumneavoastră. Toate pachetele includ montaj profesional și garanție.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg) => (
              <Card key={pkg.id} className={cn(
                "relative hover:shadow-xl transition-all duration-300",
                pkg.popular && "ring-2 ring-blue-500 scale-105"
              )}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1">
                    Cel Mai Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {pkg.description}
                  </CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-xl text-gray-500 ml-2">RON/{pkg.unit}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">de la (în funcție de dimensiuni)</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">✓ Inclus în pachet:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-red-700">✗ Nu include:</h4>
                      <ul className="space-y-2">
                        {pkg.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-500">
                            <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-1">Ideal pentru:</p>
                    <p className="text-sm text-blue-600">{pkg.bestFor}</p>
                  </div>

                  <Button 
                    className={cn(
                      "w-full",
                      pkg.popular ? "bg-blue-600 hover:bg-blue-700" : ""
                    )} 
                    size="lg" 
                    asChild
                  >
                    <Link href="/contact">
                      Solicită Ofertă
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prețuri Detaliate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prețuri orientative pentru produsele și serviciile noastre principale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {servicesPricing.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm font-medium">{item.name}</span>
                        <div className="text-right">
                          <span className="font-bold text-blue-600">{item.price} RON</span>
                          <span className="text-xs text-gray-500 ml-1">/{item.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Servicii Suplimentare</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm font-medium">{service.name}</span>
                      <div className="text-right">
                        <span className={cn(
                          "font-bold",
                          service.price === 'Gratuit' ? "text-green-600" : "text-blue-600"
                        )}>
                          {service.price} {service.unit !== '-' && service.unit !== 'din valoare' ? 'RON' : ''}
                        </span>
                        {service.unit !== '-' && (
                          <span className="text-xs text-gray-500 ml-1">/{service.unit}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Opțiuni de Plată</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim flexibilitate în plată pentru a face investiția accesibilă tuturor.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Întrebări Frecvente</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Răspunsuri la cele mai comune întrebări despre prețuri și servicii.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Garanțiile Noastre</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Investiția dumneavoastră este protejată prin garanții comprehensive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Garanție Produse</h3>
              <p className="text-blue-100">
                5-10 ani garanție pentru toate produsele, în funcție de pachetul ales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Garanție Montaj</h3>
              <p className="text-blue-100">
                2 ani garanție pentru calitatea montajului și finisajelor.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satisfacție 100%</h3>
              <p className="text-blue-100">
                Dacă nu sunteți mulțumit, remediem gratuit orice problemă.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gata să Obțineți o Ofertă Personalizată?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Contactați-ne pentru măsurători gratuite și o ofertă detaliată adaptată nevoilor dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicită Ofertă Gratuită
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:+40721234567">
                <Phone className="mr-2 h-5 w-5" />
                Sună Acum: 0721 234 567
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}