import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, FileText, Eye, Lock, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Informații Legale | Politica de Confidențialitate | Negulescu gh.PFA',
  description: 'Politica de confidențialitate, termeni și condiții, informații GDPR pentru serviciile de tâmplărie PVC și aluminiu Negulescu gh.PFA.',
  keywords: 'politica confidențialitate, termeni condiții, GDPR, protecția datelor, informații legale',
  robots: 'index, follow',
};

const legalSections = [
  {
    id: 'privacy',
    title: 'Politica de Confidențialitate',
    icon: Shield,
    description: 'Cum colectăm, folosim și protejăm datele dumneavoastră personale'
  },
  {
    id: 'terms',
    title: 'Termeni și Condiții',
    icon: FileText,
    description: 'Regulile și condițiile pentru utilizarea serviciilor noastre'
  },
  {
    id: 'gdpr',
    title: 'Drepturi GDPR',
    icon: Eye,
    description: 'Drepturile dumneavoastră conform Regulamentului General privind Protecția Datelor'
  },
  {
    id: 'cookies',
    title: 'Politica Cookie-uri',
    icon: Lock,
    description: 'Informații despre utilizarea cookie-urilor pe site-ul nostru'
  }
];

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Transparență și Conformitate
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Informații Legale
              <span className="text-blue-400"> Negulescu gh.PFA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Respectăm pe deplin legislația română și europeană privind protecția datelor personale
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {legalSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Link key={section.id} href={`#${section.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Politica de Confidențialitate</h2>
              <p className="text-xl text-gray-600">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">1. Informații Generale</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">
                    Negulescu gh.PFA (&quot;noi&quot;, &quot;compania&quot;, &quot;Negulescu gh.PFA&quot;) respectă confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română aplicabilă.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Date de contact ale operatorului:</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Denumire:</strong> Negulescu gh.PFA</li>
                      <li><strong>CUI:</strong> RO12345678</li>
                      <li><strong>Adresa:</strong> Str. Exemplu Nr. 123, Sector 1, București</li>
                      <li><strong>Email:</strong> contact@negulescu.ro</li>
                      <li><strong>Telefon:</strong> +40 721 234 567</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">2. Datele Personale Colectate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Date de identificare și contact:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Nume și prenume</li>
                        <li>Adresa de email</li>
                        <li>Numărul de telefon</li>
                        <li>Adresa poștală (pentru livrări și montaj)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Date despre proiect:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Tipul serviciului solicitat</li>
                        <li>Detalii despre proiect (dimensiuni, preferințe)</li>
                        <li>Bugetul aproximativ</li>
                        <li>Termenul dorit pentru realizare</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Date tehnice:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Adresa IP</li>
                        <li>Tipul browserului și versiunea</li>
                        <li>Sistemul de operare</li>
                        <li>Paginile vizitate și timpul petrecut</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">3. Scopurile Prelucrării</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Scopuri principale:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                          <li>Furnizarea serviciilor solicitate</li>
                          <li>Comunicarea cu clienții</li>
                          <li>Elaborarea ofertelor personalizate</li>
                          <li>Programarea măsurătorilor și montajului</li>
                          <li>Facturarea și contabilitatea</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Scopuri secundare (cu consimțământ):</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                          <li>Marketing direct</li>
                          <li>Newsletter cu oferte speciale</li>
                          <li>Îmbunătățirea serviciilor</li>
                          <li>Analize statistice</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">4. Temeiurile Legale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Executarea contractului</p>
                        <p className="text-sm text-gray-600">Pentru furnizarea serviciilor de tâmplărie solicitate</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Consimțământul</p>
                        <p className="text-sm text-gray-600">Pentru marketing și comunicări promoționale</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Interesul legitim</p>
                        <p className="text-sm text-gray-600">Pentru îmbunătățirea serviciilor și securitatea site-ului</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Obligația legală</p>
                        <p className="text-sm text-gray-600">Pentru respectarea legislației fiscale și comerciale</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">5. Păstrarea Datelor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Perioade de păstrare:</h4>
                      <ul className="space-y-2 text-sm text-yellow-700">
                        <li><strong>Date contractuale:</strong> 10 ani (conform legislației fiscale)</li>
                        <li><strong>Date marketing:</strong> Până la retragerea consimțământului</li>
                        <li><strong>Date tehnice:</strong> Maximum 2 ani</li>
                        <li><strong>Oferte neacceptate:</strong> 2 ani</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* GDPR Rights */}
      <section id="gdpr" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Drepturile Dumneavoastră GDPR</h2>
              <p className="text-xl text-gray-600">
                Conform GDPR, aveți următoarele drepturi privind datele personale:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    Dreptul de Acces
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Puteți solicita informații despre datele personale pe care le procesăm despre dumneavoastră.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:gdpr@negulescu.ro?subject=Solicitare Acces Date">
                      Solicită Acces
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Dreptul de Rectificare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Puteți solicita corectarea datelor personale inexacte sau incomplete.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:gdpr@negulescu.ro?subject=Solicitare Rectificare">
                      Solicită Rectificare
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Dreptul la Ștergere
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Puteți solicita ștergerea datelor personale în anumite condiții.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:gdpr@negulescu.ro?subject=Solicitare Ștergere">
                      Solicită Ștergere
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-600" />
                    Dreptul la Portabilitate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Puteți solicita transferul datelor către alt operator în format structurat.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:gdpr@negulescu.ro?subject=Solicitare Portabilitate">
                      Solicită Transfer
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Dreptul de a Depune Plângere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-3">
                  Dacă considerați că drepturile dumneavoastră au fost încălcate, puteți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Adresa:</strong> B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București</p>
                  <p><strong>Telefon:</strong> +40 318 059 211</p>
                  <p><strong>Email:</strong> anspdcp@dataprotection.ro</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section id="terms" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Termeni și Condiții</h2>
              <p className="text-xl text-gray-600">
                Condițiile generale de utilizare a serviciilor Negulescu
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">1. Definiții și Domeniu de Aplicare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Prezentii termeni și condiții reglementează relația contractuală între Negulescu gh.PFA și clienții săi pentru serviciile de tâmplărie PVC și aluminiu.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Serviciile includ:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Consultanță și proiectare</li>
                      <li>Fabricarea produselor de tâmplărie</li>
                      <li>Montajul și instalarea</li>
                      <li>Service și întreținere</li>
                      <li>Garanție și suport post-vânzare</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">2. Procesul de Comandă</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium">Solicitarea Ofertei</p>
                        <p className="text-sm text-gray-600">Clientul solicită o ofertă prin formular, telefon sau email</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium">Măsurătorile</p>
                        <p className="text-sm text-gray-600">Programăm o vizită gratuită pentru măsurători precise</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium">Oferta Detaliată</p>
                        <p className="text-sm text-gray-600">Prezentăm oferta finală cu toate specificațiile</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <p className="font-medium">Contractul</p>
                        <p className="text-sm text-gray-600">Semnarea contractului și plata avansului</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">3. Prețuri și Plăți</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Modalități de plată acceptate:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Transfer bancar</li>
                          <li>Numerar la livrare</li>
                          <li>Card bancar (POS)</li>
                          <li>Rate fără dobândă (parteneri)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Structura plăților:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Avans: 30-50% la comandă</li>
                          <li>Restul: la finalizarea montajului</li>
                          <li>Factura cu TVA inclus</li>
                          <li>Garanție bancară disponibilă</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">4. Garanții și Responsabilități</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Garanțiile noastre:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                        <li>Produse: 5-10 ani (în funcție de tip)</li>
                        <li>Montaj: 2 ani</li>
                        <li>Feronerie: 3-5 ani</li>
                        <li>Service gratuit în perioada de garanție</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Excluderi de la garanție:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
                        <li>Deteriorări cauzate de utilizare necorespunzătoare</li>
                        <li>Daune provocate de factori externi (cutremure, inundații)</li>
                        <li>Modificări efectuate de terți</li>
                        <li>Uzura normală a produselor</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies Policy */}
      <section id="cookies" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Politica Cookie-uri</h2>
              <p className="text-xl text-gray-600">
                Informații despre utilizarea cookie-urilor pe site-ul nostru
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Ce sunt Cookie-urile?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Cookie-urile sunt fișiere mici de text stocate pe dispozitivul dumneavoastră când vizitați site-ul nostru. Acestea ne ajută să îmbunătățim experiența de navigare și să furnizăm servicii personalizate.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Tipuri de Cookie-uri Utilizate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-700">Cookie-uri Esențiale</h4>
                      <p className="text-sm text-gray-600">Necesare pentru funcționarea de bază a site-ului (sesiune, securitate, preferințe)</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-700">Cookie-uri de Performanță</h4>
                      <p className="text-sm text-gray-600">Colectează informații despre modul de utilizare a site-ului (Google Analytics)</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-700">Cookie-uri de Marketing</h4>
                      <p className="text-sm text-gray-600">Utilizate pentru afișarea de reclame relevante (Facebook Pixel, Google Ads)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Gestionarea Cookie-urilor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Puteți controla și șterge cookie-urile prin setările browserului dumneavoastră. Rețineți că dezactivarea anumitor cookie-uri poate afecta funcționalitatea site-ului.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Linkuri utile pentru gestionarea cookie-urilor:</h4>
                    <ul className="space-y-1 text-sm">
                      <li><Link href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank">Google Chrome</Link></li>
                      <li><Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-600 hover:underline" target="_blank">Mozilla Firefox</Link></li>
                      <li><Link href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 hover:underline" target="_blank">Internet Explorer</Link></li>
                      <li><Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank">Safari</Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Issues */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Întrebări despre Aspectele Legale?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Pentru orice întrebări privind protecția datelor sau aspectele legale, nu ezitați să ne contactați.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Mail className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Email GDPR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">Pentru solicitări GDPR</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                    <Link href="mailto:gdpr@negulescu.ro">
                      gdpr@negulescu.ro
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Phone className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Telefon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">Luni - Vineri: 9:00 - 17:00</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                    <Link href="tel:+40721234567">
                      0721 234 567
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Adresa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">Str. Exemplu Nr. 123<br />Sector 1, București</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                    Vezi pe Hartă
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}