'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Eye, Filter, Star, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';



const categories = [
  { id: 'toate', label: 'Toate Proiectele', count: 156 },
  { id: 'ferestre', label: 'Ferestre PVC', count: 89 },
  { id: 'usi', label: 'Uși Aluminiu', count: 34 },
  { id: 'jaluzele', label: 'Jaluzele', count: 23 },
  { id: 'pergole', label: 'Pergole', count: 10 }
];

const projects = [
  {
    id: 1,
    title: 'Renovare Completă Vila Pipera',
    category: 'ferestre',
    location: 'Pipera, București',
    date: '2024',
    description: 'Înlocuire completă ferestre și uși pentru o vilă de 300mp cu profile PVC 7 camere și geam tripan.',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      '/images/projects/vila-pipera-before.svg',
      '/images/projects/vila-pipera-after.svg',
      '/images/projects/casa-baneasa-after.svg'
    ],
    features: [
      '24 ferestre PVC 7 camere',
      '3 uși terasă cu geam tripan',
      'Feronerie Roto NT',
      'Montaj în 3 zile'
    ],
    rating: 5,
    testimonial: 'Echipa Negulescu a fost excepțională! Calitatea produselor și profesionalismul în montaj ne-au depășit așteptările.',
    client: 'Familie Popescu',
    featured: true
  },
  {
    id: 2,
    title: 'Apartament Modern Herastrau',
    category: 'usi',
    location: 'Herastrau, București',
    date: '2024',
    description: 'Montaj uși aluminiu cu geam securizat și jaluzele integrate pentru apartament de lux.',
    beforeImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      '/images/projects/apt-herastrau-before.svg',
      '/images/projects/apt-herastrau-after.svg'
    ],
    features: [
      'Uși aluminiu cu rupere de punte termică',
      'Geam securizat 44.2',
      'Jaluzele integrate',
      'Finisaj RAL personalizat'
    ],
    rating: 5,
    testimonial: 'Rezultatul final este spectaculos. Ușile arată exact ca în proiectul 3D prezentat.',
    client: 'Arh. Ionescu'
  },
  {
    id: 3,
    title: 'Casa Familială Baneasa',
    category: 'ferestre',
    location: 'Băneasa, București',
    date: '2024',
    description: 'Ferestre PVC cu profile colorate și jaluzele exterioare pentru o casă în stil mediteranean.',
    beforeImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      '/images/projects/casa-baneasa-before.svg',
      '/images/projects/casa-baneasa-after.svg',
      '/images/projects/vila-pipera-after.svg'
    ],
    features: [
      'Profile PVC culoare mahon',
      '18 ferestre diverse dimensiuni',
      'Jaluzele exterioare RAL 8017',
      'Geam Low-E cu argon'
    ],
    rating: 5,
    testimonial: 'Calitatea excepțională și atenția la detalii. Casa noastră arată fantastic!',
    client: 'Familie Marinescu'
  },
  {
    id: 4,
    title: 'Birou Corporate Floreasca',
    category: 'usi',
    location: 'Floreasca, București',
    date: '2023',
    description: 'Sistem complet de uși și ferestre aluminiu pentru clădire de birouri cu 4 etaje.',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      '/images/projects/casa-baneasa-before.svg',
      '/images/projects/casa-baneasa-after.svg'
    ],
    features: [
      'Fațadă cortină aluminiu',
      '120 ferestre fixe și oscilo-batante',
      'Uși automate cu senzori',
      'Certificare energetică A+'
    ],
    rating: 5,
    testimonial: 'Proiect complex realizat impecabil în termenul stabilit. Recomandăm cu încredere!',
    client: 'SC TechCorp SRL'
  },
  {
    id: 5,
    title: 'Pergolă Bioclimatică Snagov',
    category: 'pergole',
    location: 'Snagov, Ilfov',
    date: '2023',
    description: 'Pergolă bioclimatică cu lamele orientabile și sistem de iluminare LED pentru terasă de 40mp.',
    beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      '/images/projects/vila-pipera-before.svg',
      '/images/projects/vila-pipera-after.svg',
      '/images/projects/casa-baneasa-after.svg'
    ],
    features: [
      'Pergolă 8x5m cu lamele orientabile',
      'Sistem de evacuare apă integrat',
      'Iluminare LED RGB',
      'Automatizare cu telecomandă'
    ],
    rating: 5,
    testimonial: 'Pergola a transformat complet terasa. Acum putem sta afară indiferent de vreme!',
    client: 'Familie Georgescu'
  },
  {
    id: 6,
    title: 'Jaluzele Exterioare Primaverii',
    category: 'jaluzele',
    location: 'Primăverii, București',
    date: '2023',
    description: 'Jaluzele exterioare cu acționare electrică pentru apartament cu vedere panoramică.',
    beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      '/images/projects/apt-herastrau-before.svg',
      '/images/projects/apt-herastrau-after.svg'
    ],
    features: [
      '12 jaluzele exterioare aluminiu',
      'Acționare electrică cu telecomandă',
      'Senzori de vânt și ploaie',
      'Programare automată'
    ],
    rating: 5,
    testimonial: 'Confortul sporit și economia la energie sunt remarcabile. Investiție excelentă!',
    client: 'Dr. Popa'
  }
];

const stats = [
  { number: '500+', label: 'Proiecte Finalizate' },
  { number: '15+', label: 'Ani Experiență' },
  { number: '98%', label: 'Clienți Mulțumiți' },
  { number: '24h', label: 'Timp Răspuns' }
];

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'Portofoliu - Negulescu gh.PFA Tâmplărie | 500+ Proiecte Finalizate';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Peste 500 de Proiecte Finalizate
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Portofoliul <span className="text-yellow-400">Negulescu gh.PFA</span>
              <span className="text-yellow-400"> Transformări Spectaculoase</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Descoperiți cum am transformat casele și birourile clienților noștri cu soluții de tâmplărie de calitate superioară
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                <Link href="#proiecte">
                  <Eye className="mr-2 h-5 w-5" />
                  Vezi Proiectele
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicită Ofertă
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === 'toate' ? 'default' : 'outline'}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {category.label}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="proiecte" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proiectele Noastre</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiecare proiect este o poveste de succes. Vedeți cum am transformat visurile clienților noștri în realitate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className={cn(
                "group hover:shadow-xl transition-all duration-300 overflow-hidden",
                project.featured && "ring-2 ring-yellow-500"
              )}>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 z-10 bg-yellow-500 text-black">
                    Recomandat
                  </Badge>
                )}
                
                {/* Before/After Images */}
                <div className="relative h-64 overflow-hidden">
                  <div className="grid grid-cols-2 h-full">
                    <div className="relative bg-gray-200">
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} - Înainte`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdpbmUgSW5haW50ZTwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                      <div className="absolute bottom-2 left-2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                        Înainte
                      </div>
                    </div>
                    <div className="relative bg-gray-200">
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} - După`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdpbmUgRHVwxIM8L3RleHQ+PC9zdmc+';
                        }}
                      />
                      <div className="absolute bottom-2 right-2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                        După
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Caracteristici principale:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.testimonial && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs italic text-gray-600 mb-2">
                          &quot;{project.testimonial}&quot;
                        </p>
                        <p className="text-xs font-medium text-gray-800">
                          - {project.client}
                        </p>
                      </div>
                    )}

                    <Button className="w-full group" size="sm" asChild>
                      <Link href={`/portofoliu/${project.id}`}>
                        Vezi Detalii Complete
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Încarcă Mai Multe Proiecte
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">De la Idee la Realitate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiecare proiect urmează un proces bine definit pentru a asigura rezultate excepționale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultanță și Măsurători</h3>
              <p className="text-gray-600">
                Analizăm nevoile dumneavoastră și realizăm măsurători precise la fața locului.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Proiectare și Producție</h3>
              <p className="text-gray-600">
                Creăm proiectul 3D și producem elementele cu echipamente de ultimă generație.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Montaj și Finalizare</h3>
              <p className="text-gray-600">
                Montăm produsele cu atenție la detalii și vă predăm proiectul finalizat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Următorul Proiect de Succes Poate Fi al Dumneavoastră
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o consultanță gratuită și să discutăm despre visul dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Începe Proiectul Tău
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