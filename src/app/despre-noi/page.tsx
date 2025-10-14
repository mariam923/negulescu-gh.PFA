'use client'

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Clock, Shield, Heart, Target, Eye, MessageCircle, Phone, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import HeaderPremium from '@/components/HeaderPremium';
import FooterMinimal from '@/components/FooterMinimal';

// Lazy load CircularOrbit3D
const CircularOrbit3D = dynamic(() => import('@/components/CircularOrbit3D'), {
  ssr: false
});

const milestones = [
  {
    year: '2009',
    title: 'Înființarea Companiei',
    description: 'Negulescu își începe activitatea cu o echipă mică dar dedicată, focusată pe calitate și satisfacția clientului.'
  },
  {
    year: '2012',
    title: 'Primul Showroom',
    description: 'Deschidem primul showroom în București, oferind clienților posibilitatea de a vedea și testa produsele.'
  },
  {
    year: '2015',
    title: 'Extinderea Echipei',
    description: 'Echipa crește la 15 specialiști și investim în echipamente moderne de producție și montaj.'
  },
  {
    year: '2018',
    title: '500+ Proiecte',
    description: 'Atingem pragul de 500 de proiecte finalizate cu succes, consolidându-ne reputația pe piață.'
  },
  {
    year: '2021',
    title: 'Certificări Internaționale',
    description: 'Obținem certificări internaționale pentru calitate și implementăm sisteme de management modern.'
  },
  {
    year: '2024',
    title: 'Lider pe Piață',
    description: 'Suntem recunoscuți ca unul dintre liderii pieței de tâmplărie PVC și aluminiu din București.'
  }
];

const values = [
  {
    icon: Heart,
    title: 'Pasiune pentru Calitate',
    description: 'Fiecare proiect este tratat cu atenție maximă la detalii și dedicare pentru rezultate perfecte.'
  },
  {
    icon: Shield,
    title: 'Încredere și Transparență',
    description: 'Construim relații pe termen lung bazate pe onestitate, transparență și respectarea angajamentelor.'
  },
  {
    icon: Users,
    title: 'Orientare către Client',
    description: 'Nevoile și satisfacția clientului sunt în centrul tuturor deciziilor și acțiunilor noastre.'
  },
  {
    icon: Award,
    title: 'Excelență în Execuție',
    description: 'Căutăm permanent să depășim așteptările prin inovație, profesionalism și atenție la detalii.'
  }
];

const team = [
  {
    name: 'Ion Negulescu',
    role: 'Fondator & Director General',
    experience: '20+ ani experiență',
    description: 'Vizionar și lider cu o pasiune pentru calitate și inovație în domeniul tâmplăriei.',
    image: '/images/luxury-window.svg',
    specialties: ['Management', 'Strategie', 'Relații Clienți']
  },
  {
    name: 'Maria Negulescu',
    role: 'Director Comercial',
    experience: '15+ ani experiență',
    description: 'Expertă în consultanță și dezvoltarea relațiilor cu clienții, cu focus pe soluții personalizate.',
    image: '/images/luxury-door.svg',
    specialties: ['Consultanță', 'Vânzări', 'Marketing']
  },
  {
    name: 'Andrei Popescu',
    role: 'Șef Echipă Montaj',
    experience: '12+ ani experiență',
    description: 'Specialist în montaj cu experiență vastă în proiecte complexe și soluții tehnice avansate.',
    image: '/images/luxury-window.svg',
    specialties: ['Montaj', 'Supervizare', 'Control Calitate']
  },
  {
    name: 'Elena Ionescu',
    role: 'Designer & Consultant',
    experience: '8+ ani experiență',
    description: 'Creatoare de soluții estetice și funcționale, specializată în proiectare și consultanță tehnică.',
    image: '/images/luxury-door.svg',
    specialties: ['Design', 'Proiectare 3D', 'Consultanță Tehnică']
  }
];

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Certificare pentru sistemul de management al calității',
    image: '/images/luxury-window.svg'
  },
  {
    name: 'CE Marking',
    description: 'Conformitate europeană pentru toate produsele',
    image: '/images/luxury-door.svg'
  },
  {
    name: 'ROTO Partner',
    description: 'Partener autorizat pentru feronerie ROTO',
    image: '/images/luxury-window.svg'
  },
  {
    name: 'REHAU Certified',
    description: 'Certificare pentru profile REHAU',
    image: '/images/luxury-door.svg'
  }
];

const stats = [
  { number: '15+', label: 'Ani de Experiență', icon: Clock },
  { number: '500+', label: 'Proiecte Finalizate', icon: Award },
  { number: '25+', label: 'Specialiști în Echipă', icon: Users },
  { number: '98%', label: 'Clienți Mulțumiți', icon: Star }
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Despre Noi - Negulescu Gh.PFA Tâmplărie | 15+ Ani Experiență';
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
              <span className="text-argus-ice-blue">15+ Ani de Experiență</span>
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Povestea
              <span className="bg-gradient-to-r from-argus-ice-blue to-blue-400 bg-clip-text text-transparent"> Negulescu Gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-argus-gray-light/80 font-light">
              De peste 15 ani, transformăm casele și birourile clienților noștri cu soluții de tâmplărie de cea mai înaltă calitate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark font-semibold shadow-lg shadow-argus-ice-blue/30" asChild>
                  <Link href="#echipa">
                    <Users className="mr-2 h-5 w-5" />
                    Cunoaște Echipa
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="glass-dark-hover border-argus-ice-blue/30 text-white" asChild>
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contactează-ne
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-argus-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
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
                  <div className="text-4xl md:text-5xl font-display font-bold text-argus-ice-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">Povestea Noastră</h2>
              <div className="space-y-6 text-lg text-argus-gray-light/80 font-light">
                <p>
                  Totul a început în 2009, când Ion Negulescu Gh.PFA, cu o experiență de peste 20 de ani în construcții, 
                  a decis să își urmeze pasiunea pentru tâmplărie și să înființeze o companie dedicată excelenței.
                </p>
                <p>
                  De la primele proiecte modeste la transformările spectaculoase de astăzi, am crescut constant, 
                  investind în echipamente moderne, tehnologii avansate și, cel mai important, în oameni dedicați.
                </p>
                <p>
                  Astăzi, Negulescu Gh.PFA este recunoscută ca una dintre companiile de referință în domeniul tâmplăriei 
                  PVC și aluminiu din București și Ilfov, cu peste 500 de proiecte finalizate cu succes.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark font-semibold shadow-lg shadow-argus-ice-blue/30" asChild>
                  <Link href="/portofoliu">
                    Vezi Proiectele Noastre
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🏗️</div>
                  <p className="text-lg font-semibold">Povestea Negulescu Gh.PFA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-argus-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Parcursul Nostru</h2>
            <p className="text-xl text-argus-gray-light/80 font-light max-w-3xl mx-auto">
              De la o echipă mică la o companie de referință - iată momentele cheie din evoluția noastră.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-argus-ice-blue/20" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="glass-dark border-2 border-argus-ice-blue/10 hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-2xl font-display font-bold text-argus-ice-blue">
                          {milestone.year}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-white">
                          {milestone.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-argus-gray-light/80 font-light">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-argus-ice-blue rounded-full border-4 border-argus-anthracite shadow-lg shadow-argus-ice-blue/50" />
                  </div>
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Valorile Noastre</h2>
            <p className="text-xl text-argus-gray-light/80 font-light max-w-3xl mx-auto">
              Principiile care ne ghidează în fiecare proiect și în relația cu clienții noștri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center glass-dark border-2 border-argus-ice-blue/10 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-argus-ice-blue text-argus-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-argus-ice-blue/30">
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-display text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-argus-gray-light/80 font-light">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="echipa" className="py-20 bg-argus-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Echipa Noastră</h2>
            <p className="text-xl text-argus-gray-light/80 font-light max-w-3xl mx-auto">
              Oamenii care fac diferența - specialiști dedicați cu experiență vastă în domeniu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center glass-dark border-2 border-argus-ice-blue/10 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-display text-white">{member.name}</CardTitle>
                  <CardDescription className="text-argus-ice-blue font-semibold">
                    {member.role}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-argus-gray-light/80 font-light mb-4">{member.description}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-argus-ice-blue" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Certificări și Parteneriate</h2>
            <p className="text-xl text-argus-gray-light/80 font-light max-w-3xl mx-auto">
              Recunoașterea calității prin certificări internaționale și parteneriate cu producători de renume.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center glass-dark border-2 border-argus-ice-blue/10 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg font-display text-white">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-argus-gray-light/80 font-light">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-argus-dark via-argus-anthracite to-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="glass-dark border-2 border-argus-ice-blue/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Target className="h-8 w-8 text-argus-ice-blue" />
                  <CardTitle className="text-2xl font-display">Misiunea Noastră</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Să oferim soluții complete de tâmplărie PVC și aluminiu de cea mai înaltă calitate, 
                  depășind așteptările clienților prin profesionalism, inovație și atenție la detalii.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark border-2 border-argus-ice-blue/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Eye className="h-8 w-8 text-argus-ice-blue" />
                  <CardTitle className="text-2xl font-display">Viziunea Noastră</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Să devenim liderul recunoscut pe piața de tâmplărie din România, 
                  setând standardele de calitate și inovație în domeniu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-argus-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            Să Colaborăm pentru Proiectul Dumneavoastră
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-argus-gray-light/80 font-light">
            Cu experiența și dedicarea noastră, transformăm visurile în realitate. 
            Contactați-ne pentru o consultanță gratuită.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark shadow-lg shadow-argus-ice-blue/30" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicită Consultanță
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