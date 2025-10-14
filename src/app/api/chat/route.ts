import { NextRequest, NextResponse } from 'next/server';

// Base de données des questions/réponses pour le chatbot
const chatDatabase = {
  // Services généraux
  'servicii': {
    keywords: ['servicii', 'ce faceți', 'ce oferiti', 'lucrări', 'activitate'],
    response: 'Negulescu Gh.PFA oferă servicii complete de montaj ferestre și uși în România. Specializările noastre includ: montaj ferestre PVC, aluminiu și lemn, montaj uși de intrare și interior, renovări complete, consultanță tehnică și service post-montaj.'
  },
  'ferestre': {
    keywords: ['ferestre', 'geamuri', 'termopane', 'pvc', 'aluminiu', 'lemn'],
    response: 'Oferim montaj profesional pentru toate tipurile de ferestre: PVC cu profile de înaltă calitate, ferestre din aluminiu rezistente și durabile, ferestre din lemn pentru un aspect tradițional. Toate ferestrele vin cu garanție extinsă și certificări de calitate.'
  },
  'usi': {
    keywords: ['uși', 'ușă', 'intrare', 'interior', 'blindate'],
    response: 'Montăm uși de toate tipurile: uși de intrare blindate pentru securitate maximă, uși interior din lemn masiv sau MDF, uși glisante pentru economie de spațiu. Toate cu montaj profesional și garanție completă.'
  },

  'oferta': {
    keywords: ['ofertă', 'devis', 'estimare', 'calcul', 'măsurători'],
    response: 'Realizăm oferte personalizate gratuite! Includem: măsurători precise la domiciliu, consultanță tehnică specializată, planificare lucrărilor. Contactați-ne pentru o programare rapidă.'
  },
  
  // Contact și programări
  'contact': {
    keywords: ['contact', 'telefon', 'whatsapp', 'programare', 'adresă'],
    response: 'Ne puteți contacta prin: Telefon pentru urgențe și programări, WhatsApp pentru întrebări rapide și poze, Email pentru oferte detaliate. Suntem disponibili Luni-Vineri 08:00-18:00, Sâmbătă 09:00-14:00.'
  },
  'programare': {
    keywords: ['programare', 'când', 'disponibilitate', 'orar', 'măsurători'],
    response: 'Programările se fac telefonic sau prin WhatsApp. Suntem flexibili cu orarul și ne adaptăm programului dumneavoastră. Măsurătorile și consultanțele sunt gratuite în București și împrejurimile apropiate.'
  },
  
  // Garanție și calitate
  'garantie': {
    keywords: ['garanție', 'garantii', 'service', 'defecte', 'probleme'],
    response: 'Oferim garanție extinsă pentru toate lucrările: 5 ani garanție pentru montaj, 10 ani garanție pentru profile și geamuri, Service post-montaj inclus, Intervenții rapide în caz de probleme. Calitatea este prioritatea noastră numărul 1!'
  },
  'calitate': {
    keywords: ['calitate', 'materiale', 'certificări', 'standarde'],
    response: 'Folosim exclusiv materiale premium: Profile certificate CE, Geamuri cu eficiență energetică ridicată, Feronerie de marcă europeană, Materiale de etanșare profesionale. Toate produsele respectă standardele europene de calitate.'
  },
  
  // Proces și timp
  'proces': {
    keywords: ['proces', 'etape', 'cum', 'procedură', 'pași'],
    response: 'Procesul nostru în 5 etape: 1) Consultanță și măsurători gratuite, 2) Ofertă detaliată personalizată, 3) Comandă și producție (7-14 zile), 4) Montaj profesional (1-2 zile), 5) Verificare finală și garanție. Totul organizat și transparent!'
  },
  'timp': {
    keywords: ['timp', 'durată', 'cât durează', 'când', 'livrare'],
    response: 'Durata lucrărilor: Măsurători: 1-2 ore, Producție: 7-14 zile lucrătoare, Montaj: 1-2 zile (în funcție de complexitate). Respectăm întotdeauna termenele stabilite și vă ținem la curent cu progresul.'
  },
  
  // Zone de acoperire
  'zona': {
    keywords: ['zonă', 'unde', 'acoperire', 'bucurești', 'ilfov', 'deplasare'],
    response: 'Acoperim București și județul Ilfov cu deplasare gratuită pentru măsurători. Pentru alte județe din Muntenia, aplicăm tarife preferențiale de deplasare. Contactați-ne pentru detalii despre zona dumneavoastră.'
  },
  
  // Salutări și conversație
  'salut': {
    keywords: ['salut', 'bună', 'hello', 'bună ziua', 'bună seara'],
    response: 'Bună ziua! Bine ați venit la Negulescu Gh.PFA! Sunt aici să vă ajut cu informații despre serviciile noastre de montaj ferestre și uși. Cu ce vă pot ajuta astăzi?'
  },
  'multumesc': {
    keywords: ['mulțumesc', 'mersi', 'thanks', 'mulțam'],
    response: 'Cu plăcere! Dacă aveți alte întrebări despre serviciile noastre sau doriți o programare, nu ezitați să mă întrebați. Echipa Negulescu Gh.PFA este aici pentru dumneavoastră!'
  }
};

// Funcție pentru găsirea celei mai bune potriviri
function findBestMatch(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();
  
  // Căutare directă în cuvinte cheie
  for (const [key, data] of Object.entries(chatDatabase)) {
    for (const keyword of data.keywords) {
      if (message.includes(keyword)) {
        return data.response;
      }
    }
  }
  
  // Răspuns implicit dacă nu se găsește o potrivire
  return 'Îmi pare rău, nu am înțeles întrebarea. Vă pot ajuta cu informații despre: serviciile noastre (ferestre, uși), programări și contact, garanții și calitate, proces de lucru și timpi. Sau mă puteți contacta direct pentru o consultanță personalizată!';
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Mesajul este obligatoriu' },
        { status: 400 }
      );
    }
    
    const response = findBestMatch(message);
    
    return NextResponse.json({
      response,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Eroare în API chat:', error);
    return NextResponse.json(
      { error: 'Eroare internă de server' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Chatbot API este funcțional',
    availableTopics: Object.keys(chatDatabase)
  });
}