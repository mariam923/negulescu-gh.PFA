# 🚀 Transformations Rapides Restantes

## Remplacements CSS Globaux pour Despre Noi

### Sections à transformer:

**Story Section:**
```tsx
// Ligne 223
bg-gray-50 → bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark

// Ligne 231  
text-3xl md:text-4xl font-bold → text-3xl md:text-4xl font-display font-bold text-white

// Ligne 232
text-lg text-gray-600 → text-lg text-argus-gray-light/80 font-light
```

**Timeline Section:**
- Background: `bg-argus-dark`
- Titre: `text-white font-display`
- Années: `text-argus-ice-blue font-display`
- Cards: `glass-dark border-argus-ice-blue/10`
- Descriptions: `text-argus-gray-light/70`

**Values Section:**
- Background: `bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark`
- Icons: `bg-argus-ice-blue text-argus-dark`
- Titres: `text-white font-display`
- Texte: `text-argus-gray-light/70`

**Team Section:**
- Background: `bg-argus-dark`
- Cards: `glass-dark border-2 border-argus-ice-blue/10`
- Noms: `text-white font-display`
- Roles: `text-argus-ice-blue`
- Descriptions: `text-argus-gray-light/70`

**Mission/Vision Cards:**
- Background cards: `glass-dark border-argus-ice-blue/20`
- Icons: `bg-argus-ice-blue text-argus-dark`
- Titres: `text-white font-display`

**CTA Final:**
- Background: `bg-gradient-to-br from-argus-dark via-argus-anthracite to-black`
- Ambient orb animé
- Boutons: ice-blue style
- Footer: `<FooterMinimal />`

## Simplifications

Au lieu de transformer ligne par ligne, utiliser replace_all pour:

1. `bg-white` → `bg-argus-dark`
2. `bg-gray-50` → `bg-gradient-to-b from-black via-argus-anthracite/50 to-argus-dark`
3. `bg-blue-600` → `bg-argus-ice-blue`
4. `text-gray-600` → `text-argus-gray-light/80`
5. `text-slate-700` → `text-white`
6. `border-gray` → `border-argus-ice-blue/10`

Puis ajuster spécifiquement les Cards avec glass-dark.
