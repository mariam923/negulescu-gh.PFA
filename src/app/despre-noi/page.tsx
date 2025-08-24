import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Clock, Shield, Heart, Target, Eye, MessageCircle, Phone, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Despre Noi - Negulescu gh.PFA Tâmplărie | 15+ Ani Experiență',
  description: 'Aflați povestea Negulescu gh.PFA - 15+ ani de experiență în tâmplărie PVC și aluminiu. Echipă dedicată, tehnologie modernă, peste 500 de proiecte finalizate în București și Ilfov.',
  keywords: 'despre Negulescu gh.PFA, experiență tâmplărie, echipă profesională, istorie companie, valori, misiune, viziune',
  openGraph: {
    title: 'Despre Noi - Negulescu gh.PFA Tâmplărie | 15+ Ani Experiență',
    description: 'Povestea unei companii dedicate excelenței în tâmplărie PVC și aluminiu.',
    images: ['/images/luxury-service-bg.svg'],
  },
};

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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 overflow-hidden">
        {/* Luxury Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[url('/images/luxury-about-bg.svg')] bg-cover bg-center animate-float-slow" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400/60 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-blue-300/50 rounded-full animate-float-delayed" />
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-indigo-300/40 rounded-full animate-float-slow" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300/50 rounded-full animate-float" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              15+ Ani de Experiență
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Povestea
              <span className="text-yellow-400"> Negulescu gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              De peste 15 ani, transformăm casele și birourile clienților noștri cu soluții de tâmplărie de cea mai înaltă calitate
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 hover:-translate-y-1 transition-all duration-500 animate-shimmer" asChild>
                <Link href="#echipa">
                  <Users className="mr-3 h-6 w-6" />
                  Cunoaște Echipa
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8 py-4 rounded-2xl backdrop-blur-sm bg-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-xl hover:shadow-2xl" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Contactează-ne
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('/images/luxury-service-bg.svg')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group hover:scale-110 transition-all duration-700">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700 group-hover:rotate-6 animate-glow">
                      <Icon className="h-10 w-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl mx-auto" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="text-slate-700 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Povestea Noastră</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Totul a început în 2009, când Ion Negulescu gh.PFA, cu o experiență de peste 20 de ani în construcții, 
                  a decis să își urmeze pasiunea pentru tâmplărie și să înființeze o companie dedicată excelenței.
                </p>
                <p>
                  De la primele proiecte modeste la transformările spectaculoase de astăzi, am crescut constant, 
                  investind în echipamente moderne, tehnologii avansate și, cel mai important, în oameni dedicați.
                </p>
                <p>
                  Astăzi, Negulescu gh.PFA este recunoscută ca una dintre companiile de referință în domeniul tâmplăriei 
                  PVC și aluminiu din București și Ilfov, cu peste 500 de proiecte finalizate cu succes.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
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
                  <p className="text-lg font-semibold">Povestea Negulescu gh.PFA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcursul Nostru</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la o echipă mică la o companie de referință - iată momentele cheie din evoluția noastră.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-600">
                          {milestone.year}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-800">
                          {milestone.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Valorile Noastre</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principiile care ne ghidează în fiecare proiect și în relația cu clienții noștri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="echipa" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Echipa Noastră</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oamenii care fac diferența - specialiști dedicați cu experiență vastă în domeniu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {member.role}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificări și Parteneriate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recunoașterea calității prin certificări internaționale și parteneriate cu producători de renume.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Target className="h-8 w-8 text-yellow-400" />
                  <CardTitle className="text-2xl">Misiunea Noastră</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Să oferim soluții complete de tâmplărie PVC și aluminiu de cea mai înaltă calitate, 
                  depășind așteptările clienților prin profesionalism, inovație și atenție la detalii.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Eye className="h-8 w-8 text-yellow-400" />
                  <CardTitle className="text-2xl">Viziunea Noastră</CardTitle>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Să Colaborăm pentru Proiectul Dumneavoastră
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Cu experiența și dedicarea noastră, transformăm visurile în realitate. 
            Contactați-ne pentru o consultanță gratuită.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicită Consultanță
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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