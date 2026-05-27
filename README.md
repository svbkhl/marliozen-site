# La Marlio'Zen — Site Internet

Site officiel de **La Marlio'Zen**, Espace de Vie Sociale (EVS) du quartier de Marlioz à Aix-les-Bains (Savoie).

Association loi 1901, ~190 adhérents et bénévoles, partenaires : CAF de la Savoie, OPAC de la Savoie, Ville d'Aix-les-Bains, Grand Lac.

---

## Stack technique

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**
- **Framer Motion** (animations, prefers-reduced-motion respecté)
- **Lucide React** (icônes)
- **next/font** — Google Fonts : Fraunces (display) + Nunito (body)
- **Resend** — emails formulaires (mode démo sans clé)
- **next-sitemap** — sitemap.xml + robots.txt

---

## Installation

```bash
# Cloner ou dézipper le projet
cd marliozen-site

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Editer .env.local avec vos valeurs (voir section Variables)

# Lancer en développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## Variables d'environnement

Créer un fichier `.env.local` à la racine :

```env
# Clé API Resend (optionnel — mode démo sans clé)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx

# Email de destination pour les formulaires
CONTACT_EMAIL=contact@marliozen.fr

# URL du site (pour le sitemap)
SITE_URL=https://marliozen.fr
```

**Sans `RESEND_API_KEY`** : les formulaires fonctionnent en mode démo (message de confirmation affiché, aucun email envoyé).

---

## Structure du projet

```
/app
  layout.tsx              — Layout racine (Header, Footer, fonts, metadata)
  page.tsx                — Page d'accueil
  /association            — Présentation, équipe, projet social
  /evenements             — Liste filtrée + fiches détaillées
  /adherer                — Formulaire d'adhésion + bénévolat
  /partenaires            — CAF, OPAC, Ville, Grand Lac
  /contact                — Formulaire + carte
  /api/contact            — Route POST pour le formulaire de contact
  /api/adhesion           — Route POST pour le formulaire d'adhésion

/components
  /layout                 — Header, Footer, MobileMenu
  /sections               — Hero, StatsCounter, ValueCards, EventCard...
  /forms                  — ContactForm, AdhesionForm
  /shared                 — BlurFadeIn, OrganicShape, SectionTitle
  /ui                     — Composants shadcn/ui

/data                     — Données statiques TypeScript
  events.ts               — 6 événements avec slugs et détails
  values.ts               — 4 valeurs de l'association
  team.ts                 — Bureau + équipe d'animation
  partners.ts             — 4 partenaires institutionnels
  testimonials.ts         — 4 témoignages d'habitants
  stats.ts                — Chiffres clés
```

---

## Gestion du contenu

Toutes les données sont dans `/data/*.ts`. Pas de CMS, pas de base de données.

### Ajouter un événement

Éditer `/data/events.ts` — ajouter un objet dans le tableau `events` :

```ts
{
  slug: "nom-unique-kebab-case",
  title: "Titre complet",
  shortTitle: "Titre court",
  category: "sport" | "culture" | "solidarite" | "festif" | "famille",
  date: "YYYY-MM-DD",
  dateDisplay: "Samedi 14 juin 2025",
  time: "10h00",
  location: "Nom du lieu",
  address: "Adresse complète",
  description: "Description courte (carte)",
  longDescription: `Description longue (fiche détail)`,
  image: "/images/mon-image.jpg",
  emoji: "⚽",
  upcoming: true,  // false = événement passé
  featured: true,  // afficher sur la page d'accueil
  tags: ["tag1", "tag2"],
}
```

### Modifier les tarifs d'adhésion

Éditer directement `/app/adherer/page.tsx` — tableau `tarifs`.

### Modifier les partenaires

Éditer `/data/partners.ts`.

---

## Déploiement sur Vercel

### Option 1 : via Vercel CLI

```bash
pnpm install -g vercel
vercel login
vercel --prod
```

### Option 2 : via GitHub

1. Pousser le code sur un dépôt GitHub
2. Connecter le repo à Vercel (vercel.com/new)
3. Variables d'environnement à configurer dans Vercel > Settings > Environment Variables :
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `SITE_URL`

### Build de production

```bash
pnpm build   # Next.js build + génération sitemap
pnpm start   # Serveur de production local
```

---

## Design system

Direction choisie : **Organique / Papier découpé**

- **Fonts** : Fraunces (display) + Nunito (body)
- **Palette principale** : Crème `#F7F0E3` · Terracotta `#C4622D` · Sauge `#6B9E78` · Miel `#D4A853`
- **Accessibilité** : WCAG AA, navigation clavier, aria-labels, prefers-reduced-motion

Voir `/design-system.md` pour la documentation complète et `/design-explorations/` pour les 3 directions explorées.

---

## Contenu placeholder

Le site contient des contenus placeholder réalistes à remplacer par le vrai contenu :

- `contact@marliozen.fr` → email réel de l'association
- Photos événements dans `/public/images/` → photos réelles
- Logos partenaires dans `/public/logos/` → vrais fichiers SVG/PNG
- PDF dans `/public/docs/` → rapport moral et bulletin d'adhésion réels
- Horaires d'ouverture à vérifier et ajuster
- Tarifs d'adhésion à confirmer

---

## Licence

Projet réalisé pour l'association La Marlio'Zen. Tous droits réservés.
