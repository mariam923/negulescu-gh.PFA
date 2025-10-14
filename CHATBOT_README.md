# 🤖 Chatbot Negulescu Gh.PFA - Guide Complet

## 📋 Vue d'ensemble

Le chatbot intégré est un assistant virtuel intelligent conçu spécifiquement pour le site web Negulescu Gh.PFA. Il répond automatiquement aux questions des clients concernant les services de montaj ferestre și uși.

## ✨ Fonctionnalités

### 🎨 Design Luxueux
- **Couleurs premium** : Blanc, noir et doré avec dégradés élégants
- **Animations fluides** : Transitions et effets visuels sophistiqués
- **Interface responsive** : S'adapte parfaitement à tous les écrans
- **Position fixe** : Toujours visible en bas à droite

### 💬 Fonctionnalités de Chat
- **Dialogue dynamique** : Messages utilisateur et réponses bot en temps réel
- **Scroll automatique** : Navigation fluide vers les nouveaux messages
- **Indicateur de frappe** : Animation pendant le traitement des réponses
- **Actions rapides** : Boutons pour questions fréquentes
- **Horodatage** : Affichage de l'heure pour chaque message

### 🧠 Intelligence Artificielle
- **Base de données complète** : Plus de 15 catégories de questions/réponses
- **Reconnaissance de mots-clés** : Détection intelligente des intentions
- **Réponses contextuelles** : Informations précises sur les services
- **Fallback intelligent** : Réponse par défaut si aucune correspondance

## 🗂️ Structure des Fichiers

```
src/
├── components/
│   └── ChatBot.tsx          # Composant principal du chatbot
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts     # API endpoint pour les réponses
│   ├── layout.tsx           # Intégration globale
│   └── globals.css          # Styles et animations
└── CHATBOT_README.md        # Cette documentation
```

## 🔧 Configuration

### Personnaliser les Réponses

Les réponses du chatbot sont configurées dans `src/app/api/chat/route.ts` :

```typescript
const chatDatabase = {
  'nouveau_sujet': {
    keywords: ['mot1', 'mot2', 'expression'],
    response: 'Votre réponse personnalisée ici'
  }
};
```

### Modifier l'Apparence

Les styles sont dans `src/components/ChatBot.tsx` et `src/app/globals.css` :

- **Couleurs** : Modifiez les classes `bg-gradient-to-r from-amber-400`
- **Taille** : Ajustez `w-96 h-[32rem]` pour la fenêtre
- **Position** : Changez `bottom-6 right-6` pour le placement

## 📚 Base de Données des Réponses

### Catégories Disponibles

1. **Services généraux** (`servicii`, `ferestre`, `usi`)
2. **Oferte și consultanță** (`oferta`, `consultanta`)
3. **Contact și programări** (`contact`, `programare`)
4. **Garanție și calitate** (`garantie`, `calitate`)
5. **Proces și timp** (`proces`, `timp`)
6. **Zone de acoperire** (`zona`)
7. **Conversație** (`salut`, `multumesc`)

### Exemple de Questions Supportées

- "Ce servicii oferiti?"
- "Cât costă o fereastră?"
- "Cum vă pot contacta?"
- "Ce garanție aveți?"
- "În ce zone lucrați?"
- "Cât durează montajul?"

## 🚀 Utilisation

### Pour les Développeurs

1. **Ajouter de nouvelles réponses** :
   ```typescript
   'nou_subiect': {
     keywords: ['cuvant1', 'cuvant2'],
     response: 'Răspuns nou aici'
   }
   ```

2. **Modifier l'interface** :
   - Couleurs dans les classes Tailwind
   - Animations dans `globals.css`
   - Logique dans `ChatBot.tsx`

3. **Tester l'API** :
   ```bash
   curl -X POST http://localhost:3001/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "test"}'
   ```

### Pour les Utilisateurs

1. **Ouvrir le chat** : Cliquez sur l'icône en bas à droite
2. **Poser une question** : Tapez votre message et appuyez sur Entrée
3. **Actions rapides** : Utilisez les boutons prédéfinis
4. **Fermer** : Cliquez sur le X en haut à droite

## 🎯 Optimisations

### Performance
- **Lazy loading** : Le chatbot se charge uniquement quand nécessaire
- **Debouncing** : Évite les requêtes multiples
- **Cache local** : Stockage des messages en mémoire

### SEO
- **Pas d'impact** : Le chatbot n'affecte pas le référencement
- **Accessible** : Compatible avec les lecteurs d'écran
- **Mobile-first** : Optimisé pour tous les appareils

## 🔒 Sécurité

- **Validation des entrées** : Vérification des messages
- **Rate limiting** : Protection contre le spam (à implémenter)
- **Sanitisation** : Nettoyage des données utilisateur

## 🐛 Dépannage

### Problèmes Courants

1. **Le chatbot ne s'affiche pas** :
   - Vérifiez que `ChatBot` est importé dans `layout.tsx`
   - Contrôlez la console pour les erreurs JavaScript

2. **Les réponses ne fonctionnent pas** :
   - Testez l'endpoint `/api/chat` directement
   - Vérifiez les mots-clés dans `chatDatabase`

3. **Problèmes de style** :
   - Assurez-vous que Tailwind CSS est configuré
   - Vérifiez que `globals.css` contient les animations

### Logs de Débogage

```typescript
// Dans ChatBot.tsx
console.log('Message envoyé:', userMessage.text);
console.log('Réponse reçue:', data.response);

// Dans route.ts
console.log('Message reçu:', message);
console.log('Réponse trouvée:', response);
```

## 🔄 Mises à Jour Futures

### Fonctionnalités Prévues
- **Intégration WhatsApp** : Redirection automatique
- **Formulaire de contact** : Capture des leads
- **Analytics** : Suivi des conversations
- **Multi-langue** : Support anglais/français
- **IA avancée** : Intégration OpenAI (optionnel)

### Améliorations Possibles
- **Persistance** : Sauvegarde des conversations
- **Notifications** : Alertes pour nouveaux messages
- **Customisation** : Thèmes personnalisables
- **Export** : Téléchargement des conversations

## 📞 Support

Pour toute question technique ou personnalisation :
- **Email** : support@negulescu.ro
- **Téléphone** : +40-XXX-XXX-XXX
- **Documentation** : Ce fichier README

---

**Développé avec ❤️ pour Negulescu Gh.PFA**

*Dernière mise à jour : Janvier 2024*