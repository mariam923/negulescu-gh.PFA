'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, MessageCircle, Send, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import HeaderPremium from '@/components/HeaderPremium';
import FooterMinimal from '@/components/FooterMinimal';

// Lazy load CircularOrbit3D
const CircularOrbit3D = dynamic(() => import('@/components/CircularOrbit3D'), {
  ssr: false
});

import { cn } from '@/lib/utils';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'Prenumele trebuie să aibă cel puțin 2 caractere'),
  lastName: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  email: z.string().email('Email-ul nu este valid'),
  phone: z.string().min(10, 'Numărul de telefon trebuie să aibă cel puțin 10 cifre'),
  service: z.string().min(1, 'Vă rugăm să selectați un serviciu'),
  projectType: z.string().min(1, 'Vă rugăm să selectați tipul proiectului'),

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

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    details: [
      '+40 763 564 072',
      'Luni - Vineri: 8:00 - 18:00',
      'Sâmbătă: 9:00 - 14:00'
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

  useEffect(() => {
    document.title = 'Contact - Negulescu Gh.PFA Tâmplărie | Ofertă Gratuită în 24h';
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
              <span className="text-argus-ice-blue">Contactează-ne Acum</span>
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Contactează <span className="bg-gradient-to-r from-argus-ice-blue to-blue-400 bg-clip-text text-transparent">Negulescu Gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-argus-gray-light/80 font-light">
              Consultanță gratuită, măsurători precise și oferte personalizate în 24 de ore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark font-semibold shadow-lg shadow-argus-ice-blue/30" asChild>
                  <Link href="#contact-form">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Completează Formularul
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="glass-dark-hover border-argus-ice-blue/30 text-white" asChild>
                  <Link href="tel:+40763564072">
                    <Phone className="mr-2 h-5 w-5" />
                    Sună Direct: +40 763 564 072
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-argus-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Informații de Contact</h2>
            <p className="text-xl text-argus-gray-light/80 max-w-3xl mx-auto font-light">
              Suntem aici să vă ajutăm cu orice întrebare sau proiect aveți în minte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 text-center group hover:scale-105 hover:-translate-y-2 glass-dark border-2 border-argus-ice-blue/10 relative overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                  
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 bg-argus-ice-blue text-argus-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white font-display transition-colors duration-300">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3 mb-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-argus-gray-light/80 font-medium group-hover:text-white transition-colors duration-300">{detail}</p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full glass-dark-hover border-argus-ice-blue/30 text-argus-ice-blue hover:bg-argus-ice-blue hover:text-argus-dark transition-all duration-300 font-semibold py-2 rounded-lg">
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
      <section id="contact-form" className="py-20 bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Solicită o Ofertă</h2>
                <p className="text-xl text-argus-gray-light/80">
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
                      placeholder="+40 763 564 072"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-4">
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
                <div className="space-y-4 p-4 glass-dark rounded-lg border border-argus-ice-blue/10">
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
                      <p className="text-xs text-argus-gray-light/70">
                        Sunt de acord cu prelucrarea datelor personale în conformitate cu 
                        <Link href="/legal#privacy" className="text-argus-ice-blue hover:underline"> Politica de Confidențialitate</Link>.
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
                      <p className="text-xs text-argus-gray-light/70">
                        Sunt de acord să primesc oferte și informații despre produse și servicii.
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-argus-ice-blue hover:bg-argus-ice-blue/90 text-argus-dark font-semibold shadow-lg shadow-argus-ice-blue/30" 
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
              {/* Quick Contact */}
              <Card className="glass-dark border-2 border-argus-ice-blue/10">
                <CardHeader>
                  <CardTitle className="text-white">Contact Rapid</CardTitle>
                  <CardDescription className="text-argus-gray-light/70">
                    Pentru urgențe sau întrebări rapide
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-bold py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-glow" asChild>
                    <Link href="https://wa.me/40763564072">
                      <MessageCircle className="mr-3 h-6 w-6" />
                      WhatsApp: +40 763 564 072
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full glass-dark-hover border-argus-ice-blue/30 text-argus-ice-blue hover:bg-argus-ice-blue hover:text-argus-dark font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1" asChild>
                    <Link href="tel:+40763564072">
                      <Phone className="mr-3 h-6 w-6" />
                      Sună Direct: +40 763 564 072
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full glass-dark-hover border-argus-ice-blue/30 text-argus-ice-blue hover:bg-argus-ice-blue hover:text-argus-dark font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-rotate-1" asChild>
                    <Link href="mailto:contact@negulescu.ro">
                      <Mail className="mr-3 h-6 w-6" />
                      Email: contact@negulescu.ro
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card className="glass-dark border-2 border-argus-ice-blue/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Info className="h-5 w-5" />
                    Informații Importante
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-argus-gray-light/80 space-y-2">
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
                <p className="text-gray-600">Activăm în București și Ilfov. Pentru alte zone, contactați-ne pentru a verifica disponibilitatea.</p>
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
      
      <FooterMinimal />
    </div>
  );
}