'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Eye, Filter, Star, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeaderPremium from '@/components/HeaderPremium';
import FooterMinimal from '@/components/FooterMinimal';

// Lazy load CircularOrbit3D
const CircularOrbit3D = dynamic(() => import('@/components/CircularOrbit3D'), {
  ssr: false
});

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
    date: '2024',
    description: 'Înlocuire completă ferestre și uși pentru o vilă de 300mp cu profile PVC 7 camere și geam tripan.',
    image: '/images/portfolio/IMG-20250826-WA0040.jpg',
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
    date: '2024',
    description: 'Montaj uși aluminiu cu geam securizat și jaluzele integrate pentru apartament de lux.',
    image: '/images/portfolio/IMG-20250826-WA0043.jpg',
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
    date: '2024',
    description: 'Ferestre PVC cu profile colorate și jaluzele exterioare pentru o casă în stil mediteranean.',
    image: '/images/portfolio/IMG-20250826-WA0045.jpg',
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
    date: '2023',
    description: 'Sistem complet de uși și ferestre aluminiu pentru clădire de birouri cu 4 etaje.',
    image: '/images/portfolio/IMG-20250826-WA0048.jpg',
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
    title: 'Renovare Rezidențială Premium',
    category: 'ferestre',
    date: '2023',
    description: 'Înlocuire ferestre cu profile PVC premium pentru casă rezidențială, îmbunătățind eficiența energetică.',
    image: '/images/portfolio/IMG-20250826-WA0050.jpg',
    features: [
      'Profile PVC 7 camere',
      'Geam tripan cu argon',
      'Feronerie de calitate superioară',
      'Instalare profesională'
    ],
    rating: 5,
    testimonial: 'Transformare completă! Casa este acum mai caldă și mai liniștită.',
    client: 'Familie Georgescu'
  },
  {
    id: 6,
    title: 'Apartament Modern Centru',
    category: 'usi',
    date: '2023',
    description: 'Instalare uși interioare și exterioare moderne pentru apartament renovat complet.',
    image: '/images/portfolio/IMG-20250826-WA0053.jpg',
    features: [
      'Uși interioare design modern',
      'Ușă de intrare securizată',
      'Finisaje premium',
      'Montaj rapid și curat'
    ],
    rating: 5,
    testimonial: 'Calitate excepțională și montaj impecabil. Recomand cu încredere!',
    client: 'Dr. Popa'
  },
  {
    id: 7,
    title: 'Vila Luxury Snagov',
    category: 'ferestre',
    date: '2023',
    description: 'Proiect complet pentru vilă de lux cu ferestre și uși premium.',
    image: '/images/portfolio/IMG-20250826-WA0055.jpg',
    features: [
      'Ferestre panoramice',
      'Profile aluminiu premium',
      'Sistem de ventilare inteligent',
      'Design personalizat'
    ],
    rating: 5,
    testimonial: 'Un proiect extraordinar realizat la cele mai înalte standarde!',
    client: 'Familie Ionescu'
  },
  {
    id: 8,
    title: 'Renovare Casa Buftea',
    category: 'ferestre',
    date: '2023',
    description: 'Modernizare completă cu ferestre PVC și jaluzele exterioare.',
    image: '/images/portfolio/IMG-20250826-WA0058.jpg',
    features: [
      'Ferestre PVC 5 camere',
      'Jaluzele exterioare',
      'Eficiență energetică îmbunătățită',
      'Montaj profesional'
    ],
    rating: 5,
    testimonial: 'Foarte mulțumiți de rezultat și de echipa profesionistă!',
    client: 'Familie Stan'
  },
  {
    id: 9,
    title: 'Apartament Renovat Titan',
    category: 'usi',
    date: '2023',
    description: 'Uși noi interioare și ferestre pentru apartament complet renovat.',
    image: '/images/portfolio/IMG-20250826-WA0060.jpg',
    features: [
      'Uși interioare moderne',
      'Ferestre PVC',
      'Design contemporan',
      'Finisaje de calitate'
    ],
    rating: 5,
    testimonial: 'Transformare completă! Apartamentul arată ca nou.',
    client: 'Familie Dumitrescu'
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
    document.title = 'Portofoliu - Negulescu Gh.PFA Tâmplărie | 500+ Proiecte Finalizate';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-argus-dark via-argus-anthracite to-black">
      <HeaderPremium />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-argus-dark via-argus-anthracite to-black text-white py-32 overflow-hidden">
        <CircularOrbit3D size={600} color="#5AC8FA" thickness={3} speed={25} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 glass-dark border-argus-ice-blue/20">
              <span className="text-argus-ice-blue">Peste 500 de Proiecte Finalizate</span>
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Portofoliul <span className="bg-gradient-to-r from-argus-ice-blue to-blue-400 bg-clip-text text-transparent">Negulescu Gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-argus-gray-light/80 font-light">
              Descoperiți cum am transformat casele și birourile clienților noștri cu soluții de tâmplărie de calitate superioară
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark font-semibold shadow-lg shadow-argus-ice-blue/30" asChild>
                  <Link href="#proiecte">
                    <Eye className="mr-2 h-5 w-5" />
                    Vezi Proiectele
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="glass-dark-hover border-argus-ice-blue/30 text-white" asChild>
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicită Ofertă
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-argus-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-argus-ice-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-argus-anthracite border-b border-argus-ice-blue/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                  category.id === 'toate'
                    ? 'bg-argus-ice-blue text-argus-dark'
                    : 'bg-argus-anthracite/50 text-white border border-argus-ice-blue/30 hover:bg-argus-ice-blue/20'
                }`}
              >
                <Filter className="h-4 w-4" />
                {category.label}
                <span className="ml-1 px-2 py-0.5 bg-argus-dark/50 rounded text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="proiecte" className="py-20 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Proiectele Noastre</h2>
            <p className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto font-light">
              Fiecare proiect este o poveste de succes. Vedeți cum am transformat visurile clienților noștri în realitate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={cn(
                  "group hover:shadow-xl transition-all duration-300 overflow-hidden glass-dark glass-dark-hover border-2",
                  project.featured ? "border-argus-ice-blue/40" : "border-argus-ice-blue/10"
                )}>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 z-10 bg-argus-ice-blue text-argus-dark">
                      Recomandat
                    </Badge>
                  )}
                  
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-argus-anthracite">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 text-white font-display">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-argus-gray-light/60 mb-2">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-argus-ice-blue text-argus-ice-blue" />
                        ))}
                      </div>
                    </div>
                    <CardDescription className="text-sm text-argus-gray-light/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-white">Caracteristici principale:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-xs text-argus-gray-light/70 flex items-start gap-1">
                              <div className="w-1 h-1 bg-argus-ice-blue rounded-full mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.testimonial && (
                        <div className="bg-argus-anthracite/50 p-3 rounded-lg border border-argus-ice-blue/10">
                          <p className="text-xs italic text-argus-gray-light/70 mb-2">
                            &quot;{project.testimonial}&quot;
                          </p>
                          <p className="text-xs font-medium text-white">
                            - {project.client}
                          </p>
                        </div>
                      )}

                      <Button className="w-full group bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark" size="sm" asChild>
                        <Link href={`/portofoliu/${project.id}`}>
                          Vezi Detalii Complete
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-argus-anthracite/50 text-white border border-argus-ice-blue/30 rounded-md font-medium hover:bg-argus-ice-blue/20 transition-colors">
              Încarcă Mai Multe Proiecte
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-argus-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">De la Idee la Realitate</h2>
            <p className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto font-light">
              Fiecare proiect urmează un proces bine definit pentru a asigura rezultate excepționale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-argus-ice-blue text-argus-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-argus-ice-blue/30">
                1
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">Consultanță și Măsurători</h3>
              <p className="text-argus-gray-light/70 font-light">
                Analizăm nevoile dumneavoastră și realizăm măsurători precise la fața locului.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-argus-ice-blue text-argus-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-argus-ice-blue/30">
                2
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">Proiectare și Producție</h3>
              <p className="text-argus-gray-light/70 font-light">
                Creăm proiectul 3D și producem elementele cu echipamente de ultimă generație.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-argus-ice-blue text-argus-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-argus-ice-blue/30">
                3
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">Montaj și Finalizare</h3>
              <p className="text-argus-gray-light/70 font-light">
                Montăm produsele cu atenție la detalii și vă predăm proiectul finalizat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-argus-dark via-argus-anthracite to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-argus-ice-blue/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            Următorul Proiect de Succes Poate Fi al Dumneavoastră
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-argus-gray-light/80 font-light">
            Contactați-ne pentru o consultanță gratuită și să discutăm despre visul dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark font-semibold shadow-lg shadow-argus-ice-blue/30" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Începe Proiectul Tău
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