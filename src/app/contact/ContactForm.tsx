'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'Prenumele trebuie să aibă cel puțin 2 caractere'),
  lastName: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  email: z.string().email('Adresa de email nu este validă'),
  phone: z.string().min(10, 'Numărul de telefon trebuie să aibă cel puțin 10 cifre'),
  service: z.string().min(1, 'Vă rugăm să selectați un serviciu'),
  projectType: z.string().min(1, 'Vă rugăm să selectați tipul proiectului'),
  budget: z.string().min(1, 'Vă rugăm să selectați bugetul aproximativ'),
  message: z.string().min(10, 'Mesajul trebuie să aibă cel puțin 10 caractere'),
  gdprConsent: z.boolean().refine(val => val === true, 'Trebuie să acceptați prelucrarea datelor personale'),
  marketingConsent: z.boolean().optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  'Ferestre PVC',
  'Uși PVC/Aluminiu',
  'Jaluzele Exterioare',
  'Rolete',
  'Pergole Bioclimatice',
  'Plase de Țânțari',
  'Reparații și Service',
  'Consultanță'
];

const projectTypes = [
  'Apartament',
  'Casă',
  'Vilă',
  'Spațiu Comercial',
  'Bloc de Apartamente',
  'Altele'
];

const budgetRanges = [
  'Sub 2.000 RON',
  '2.000 - 5.000 RON',
  '5.000 - 10.000 RON',
  '10.000 - 20.000 RON',
  '20.000 - 50.000 RON',
  'Peste 50.000 RON'
];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresa',
    details: [
      'Str. Exemplu Nr. 123',
      'Sector 1, București',
      'România, 010101'
    ],
    action: 'Vezi pe Hartă'
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: [
      '+40 721 234 567',
      '+40 31 234 5678',
      'Luni - Vineri: 8:00 - 18:00'
    ],
    action: 'Sună Acum'
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      'contact@negulescu.ro',
      'oferte@negulescu.ro',
      'Răspuns în max 2 ore'
    ],
    action: 'Trimite Email'
  },
  {
    icon: Clock,
    title: 'Program',
    details: [
      'Luni - Vineri: 8:00 - 18:00',
      'Sâmbătă: 9:00 - 14:00',
      'Duminică: Închis'
    ],
    action: 'Programează'
  }
];

export default function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    gdprConsent: false,
    marketingConsent: false
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (_error) {
      if (_error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        _error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        gdprConsent: false,
        marketingConsent: false
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        {/* Luxury Background */}
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 opacity-30 animate-float-slow"
          style={{
            backgroundImage: 'url(/images/luxury-contact-bg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-700/80" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300 rounded-full animate-float-delayed opacity-50" />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-float-slow opacity-70" />
          <div className="absolute top-60 right-1/3 w-2.5 h-2.5 bg-blue-200 rounded-full animate-float opacity-40" />
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-500 rounded-full animate-float-delayed opacity-60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Contactează-ne Acum
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactează <span className="text-yellow-400">Negulescu gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Consultanță gratuită, măsurători precise și oferte personalizate în 24 de ore
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-3xl hover:shadow-yellow-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-glow" asChild>
                <Link href="#contact-form">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Completează Formularul
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white/10 hover:text-white backdrop-blur-xl px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:-translate-y-1" asChild>
                <Link href="tel:+40721234567">
                  <Phone className="mr-3 h-6 w-6" />
                  Sună Direct: 0721 234 567
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/luxury-service-bg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-glow">Informații de Contact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Suntem aici să vă ajutăm cu orice întrebare sau proiect aveți în minte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 text-center group hover:scale-105 hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/50 relative overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                  
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3 mb-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 font-medium group-hover:text-slate-700 transition-colors duration-300">{detail}</p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-semibold py-2 rounded-lg">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicită o Ofertă</h2>
                <p className="text-xl text-gray-600">
                  Completează formularul și îți vom răspunde în maximum 2 ore cu o ofertă personalizată.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Mesaj trimis cu succes!</p>
                    <p className="text-sm text-green-600">Vă vom contacta în maximum 2 ore.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-red-800">Eroare la trimiterea mesajului</p>
                    <p className="text-sm text-red-600">Vă rugăm să încercați din nou sau să ne contactați telefonic.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prenume *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName || ''}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={cn(errors.firstName && "border-red-500")}
                      placeholder="Introduceți prenumele"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nume *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName || ''}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={cn(errors.lastName && "border-red-500")}
                      placeholder="Introduceți numele"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={cn(errors.email && "border-red-500")}
                      placeholder="exemplu@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      value={formData.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={cn(errors.phone && "border-red-500")}
                      placeholder="0721 234 567"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="service">Serviciu Dorit *</Label>
                    <Select value={formData.service || ''} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className={cn(errors.service && "border-red-500")}>
                        <SelectValue placeholder="Selectează serviciul" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-sm text-red-600 mt-1">{errors.service}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="projectType">Tip Proiect *</Label>
                    <Select value={formData.projectType || ''} onValueChange={(value) => handleInputChange('projectType', value)}>
                      <SelectTrigger className={cn(errors.projectType && "border-red-500")}>
                        <SelectValue placeholder="Tip proiect" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <p className="text-sm text-red-600 mt-1">{errors.projectType}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="budget">Buget Aproximativ *</Label>
                    <Select value={formData.budget || ''} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className={cn(errors.budget && "border-red-500")}>
                        <SelectValue placeholder="Selectează bugetul" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.budget && (
                      <p className="text-sm text-red-600 mt-1">{errors.budget}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Mesaj *</Label>
                  <Textarea
                    id="message"
                    value={formData.message || ''}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={cn(errors.message && "border-red-500")}
                    placeholder="Descrieți proiectul dumneavoastră, dimensiunile aproximative, termenul dorit, etc."
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* GDPR Consent */}
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="gdprConsent"
                      checked={formData.gdprConsent || false}
                      onCheckedChange={(checked) => handleInputChange('gdprConsent', checked as boolean)}
                      className={cn(errors.gdprConsent && "border-red-500")}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="gdprConsent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Acord prelucrare date personale *
                      </Label>
                      <p className="text-xs text-gray-600">
                        Sunt de acord cu prelucrarea datelor personale în conformitate cu 
                        <Link href="/legal#privacy" className="text-blue-600 hover:underline"> Politica de Confidențialitate</Link>.
                      </p>
                    </div>
                  </div>
                  {errors.gdprConsent && (
                    <p className="text-sm text-red-600">{errors.gdprConsent}</p>
                  )}

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketingConsent"
                      checked={formData.marketingConsent || false}
                      onCheckedChange={(checked) => handleInputChange('marketingConsent', checked as boolean)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="marketingConsent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Acord marketing (opțional)
                      </Label>
                      <p className="text-xs text-gray-600">
                        Sunt de acord să primesc oferte și informații despre produse și servicii.
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Se trimite...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Trimite Solicitarea
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Locația Noastră
                  </CardTitle>
                  <CardDescription>
                    Vizitați showroom-ul nostru pentru a vedea produsele live
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-medium">Hartă Interactivă</p>
                      <p className="text-sm">Str. Exemplu Nr. 123, București</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Cum să ne găsiți:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Metro: Stația Exemplu (5 min pe jos)</li>
                      <li>• Autobuz: Liniile 123, 456 (stația Exemplu)</li>
                      <li>• Parcare gratuită disponibilă</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Rapid</CardTitle>
                  <CardDescription>
                    Pentru urgențe sau întrebări rapide
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-bold py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-glow" asChild>
                    <Link href="https://wa.me/40721234567">
                      <MessageCircle className="mr-3 h-6 w-6" />
                      WhatsApp: 0721 234 567
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1" asChild>
                    <Link href="tel:+40721234567">
                      <Phone className="mr-3 h-6 w-6" />
                      Sună Direct: 0721 234 567
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-rotate-1" asChild>
                    <Link href="mailto:contact@negulescu.ro">
                      <Mail className="mr-3 h-6 w-6" />
                      Email: contact@negulescu.ro
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Info className="h-5 w-5" />
                    Informații Importante
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-blue-700 space-y-2">
                  <p>• Consultanța și măsurătorile sunt gratuite</p>
                  <p>• Răspundem la toate solicitările în max 2 ore</p>
                  <p>• Ofertele sunt valabile 30 de zile</p>
                  <p>• Montajul se face doar cu echipe proprii</p>
                  <p>• Garanție extinsă pentru toate produsele</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Întrebări Frecvente</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Răspunsuri rapide la cele mai comune întrebări despre procesul nostru.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cât durează să primesc o ofertă?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Răspundem la toate solicitările în maximum 2 ore în timpul programului de lucru. Pentru proiecte complexe, programăm o vizită pentru măsurători precise.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Măsurătorile sunt gratuite?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Da, consultanța și măsurătorile sunt complet gratuite, fără nicio obligație de a comanda. Venim la dumneavoastră cu toate instrumentele necesare.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">În ce zone activați?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Activăm în București și în toate localitățile din județul Ilfov. Pentru alte zone, vă rugăm să ne contactați pentru a verifica disponibilitatea.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cât durează montajul?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pentru un apartament standard (6-8 ferestre), montajul durează 1-2 zile. Durata exactă depinde de complexitatea proiectului și se stabilește la măsurători.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}