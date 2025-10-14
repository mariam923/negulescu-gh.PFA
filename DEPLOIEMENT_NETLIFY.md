# 🚀 Guide de Déploiement Netlify - Negulescu Website

## 📋 Prérequis
- ✅ Compte GitHub (avec le repository)
- ✅ Compte Netlify (gratuit)

---

## 🎯 Méthode 1: Déploiement via Interface Netlify (Recommandé)

### Étape 1: Créer un compte Netlify
1. Allez sur: **https://app.netlify.com/signup**
2. Connectez-vous avec votre compte **GitHub**

### Étape 2: Importer votre projet
1. Cliquez sur **"Add new site"** → **"Import an existing project"**
2. Choisissez **"Deploy with GitHub"**
3. Autorisez Netlify à accéder à GitHub
4. Sélectionnez le repository: **`mariam923/negulescu-gh.PFA`**

### Étape 3: Configuration du build
Netlify détectera automatiquement Next.js. Vérifiez:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: `18`

### Étape 4: Déployer
1. Cliquez sur **"Deploy site"**
2. Attendez 2-3 minutes (première fois)
3. ✅ Votre site est en ligne!

### Étape 5: Configurer le domaine (optionnel)
1. Allez dans **Site settings** → **Domain management**
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS selon les instructions Netlify

---

## 🎯 Méthode 2: Déploiement via CLI (Avancé)

### Installation
```bash
npm install -g netlify-cli
netlify login
```

### Déploiement
```bash
# Dans le dossier du projet
netlify init

# Suivez les instructions
# - Link to GitHub
# - Configure build settings
# - Deploy!

# Pour déployer manuellement
netlify deploy --prod
```

---

## ⚙️ Configuration Automatique

Le fichier `netlify.toml` est déjà configuré avec:
- ✅ Build command optimisé
- ✅ Plugin Next.js de Netlify
- ✅ Redirections personnalisées
- ✅ Node.js 18

---

## 🔄 Mises à jour automatiques

Une fois connecté à GitHub:
1. **Chaque push sur `main`** → Déploiement automatique
2. **Preview sur les PRs** → Tester avant de merger
3. **Rollback facile** → Revenir à une version précédente

---

## 📊 Avantages Netlify

### Performance
- ✅ CDN mondial (temps de chargement rapide)
- ✅ Cache intelligent
- ✅ Compression automatique

### Fonctionnalités
- ✅ HTTPS automatique (SSL gratuit)
- ✅ Déploiement continu (CI/CD)
- ✅ Preview deployments
- ✅ Rollback instantané
- ✅ Analytics (plan payant)

### Next.js Support
- ✅ Server-Side Rendering (SSR)
- ✅ API Routes
- ✅ Incremental Static Regeneration (ISR)
- ✅ Image Optimization

---

## 🐛 Résolution de problèmes

### Build échoue?
1. Vérifiez les logs dans Netlify
2. Testez localement: `npm run build`
3. Vérifiez `package.json` (toutes les dépendances présentes)

### Site ne s'affiche pas?
1. Vérifiez la console du navigateur (F12)
2. Regardez les Network requests
3. Consultez les logs Netlify

### Variables d'environnement?
1. Site settings → Environment variables
2. Ajoutez vos variables (API keys, etc.)
3. Redéployez

---

## 🎨 Votre Site

### Informations
- **Repository**: https://github.com/mariam923/negulescu-gh.PFA
- **Framework**: Next.js 14
- **Taille vidéos optimisée**: 14.57 MB
- **Build time estimé**: 2-3 minutes

### Domaines suggérés
- `negulescu-gh-pfa.netlify.app` (gratuit)
- `negulescu.ro` (personnalisé)
- `ferestrenegulescu.ro` (personnalisé)

---

## 📞 Support

- **Netlify Docs**: https://docs.netlify.com
- **Next.js on Netlify**: https://docs.netlify.com/frameworks/next-js
- **Community Forum**: https://answers.netlify.com

---

## ✅ Checklist finale

Avant de déployer:
- [ ] Code poussé sur GitHub
- [ ] `npm run build` fonctionne localement
- [ ] Variables d'environnement configurées (si nécessaire)
- [ ] Images optimisées
- [ ] Vidéos compressées (fait ✅)

Après déploiement:
- [ ] Tester toutes les pages
- [ ] Vérifier les formulaires
- [ ] Tester sur mobile
- [ ] Vérifier la vitesse (PageSpeed Insights)
- [ ] Configurer le domaine personnalisé
