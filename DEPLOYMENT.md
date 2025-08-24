# Déploiement Netlify - Guide de Configuration

## Problème Résolu

Le build Netlify échouait avec l'erreur : "publish directory was not found at '/opt/build/repo/build'"

## Solution Implémentée

### 1. Configuration Next.js (`next.config.js`)
```javascript
const nextConfig = {
  output: 'export',        // Export statique pour Netlify
  trailingSlash: true,     // URLs avec slash final
  images: {
    unoptimized: true      // Images non optimisées pour export statique
  },
  distDir: 'build'         // Répertoire de sortie personnalisé
};
```

### 2. Configuration Netlify (`netlify.toml`)
```toml
[build]
  publish = "build"        # Répertoire de publication
  command = "npm run build" # Commande de build

[build.environment]
  NODE_VERSION = "18"      # Version Node.js
```

### 3. Modifications Git (`.gitignore`)
- Le dossier `build` n'est plus ignoré par Git
- Permet à Netlify d'accéder aux fichiers buildés

## Commandes de Build

```bash
# Build local
npm run build

# Vérifier le contenu du build
ls -la build/
```

## Structure du Build

Après le build, le dossier `build/` contient :
- `index.html` - Page d'accueil
- Dossiers pour chaque route (`contact/`, `despre-noi/`, etc.)
- Assets statiques (`_next/`, `images/`)
- Fichiers de configuration (`robots.txt`, `sitemap.xml`)

## Vérification

✅ Build réussi avec `npm run build`
✅ Dossier `build/` créé avec tous les fichiers
✅ Configuration Netlify en place
✅ Fichiers non ignorés par Git

## Déploiement

1. Commitez tous les changements
2. Poussez vers votre repository
3. Netlify détectera automatiquement la configuration
4. Le build utilisera le répertoire `build/` comme publish directory