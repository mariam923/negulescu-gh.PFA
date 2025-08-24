import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Negulescu gh.PFA Tâmplărie | Ofertă Gratuită în 24h',
  description: 'Contactați Negulescu gh.PFA pentru montaj ferestre și uși PVC/aluminiu. Ofertă gratuită în 24h, consultanță specializată, echipă profesională în București și Ilfov.',
  keywords: 'contact Negulescu gh.PFA, ofertă ferestre, consultanță tâmplărie, montaj București, telefon, email, adresă',
  openGraph: {
    title: 'Contact - Negulescu gh.PFA Tâmplărie | Ofertă Gratuită în 24h',
    description: 'Contactați-ne pentru consultanță gratuită și oferte personalizate. Răspundem în maximum 2 ore.',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Negulescu gh.PFA Tâmplărie | Ofertă Gratuită în 24h',
    description: 'Contactați-ne pentru consultanță gratuită și oferte personalizate. Răspundem în maximum 2 ore.',
  },
  alternates: {
    canonical: '/contact',
  },
};




export default function ContactPage() {
  return <ContactForm />;
}