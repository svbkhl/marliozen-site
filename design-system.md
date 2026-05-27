# Design System — La Marlio'Zen

> Direction choisie : **Organique / Papier découpé** (voir justification en fin de document)

---

## Identité de marque

**Nom complet** : Association La Marlio'Zen  
**Sous-titre** : Espace de Vie Sociale du quartier de Marlioz  
**Ville** : Aix-les-Bains, Savoie  
**Valeurs** : Vivre-ensemble · Mixité sociale · Solidarité · Intergénérationnel

---

## Palette de couleurs

### Couleurs primaires

| Nom       | HEX       | Rôle                                        |
|-----------|-----------|---------------------------------------------|
| Crème     | `#F7F0E3` | Background principal, douceur, chaleur      |
| Terracotta| `#C4622D` | Couleur principale, action, énergie chaude  |
| Sauge     | `#6B9E78` | Couleur secondaire, nature, calme           |
| Miel      | `#D4A853` | Accent, highlights, badges                  |

### Couleurs secondaires

| Nom            | HEX       | Rôle                                   |
|----------------|-----------|----------------------------------------|
| Terracotta clair | `#E8885E` | Hover states, fonds de sections       |
| Sauge sombre   | `#4A7A56` | Textes sur fond clair, variante sauge  |
| Papier         | `#EDE5D0` | Cards, séparateurs, fonds alternatifs  |
| Brun chaud     | `#8B6F5E` | Textes secondaires, placeholders       |

### Couleurs de texte

| Nom           | HEX       | Usage                              |
|---------------|-----------|------------------------------------|
| Brun profond  | `#2D2416` | Texte principal (titres, corps)    |
| Brun moyen    | `#5C4033` | Texte secondaire, légendes         |
| Brun doux     | `#8B6F5E` | Placeholders, métadonnées          |
| Blanc chaud   | `#FDF8F0` | Texte sur fonds sombres            |

### Couleurs système

| Nom           | HEX       | Usage                              |
|---------------|-----------|------------------------------------|
| Succès        | `#4A7A56` | Formulaires validés, confirmations |
| Erreur        | `#C93D1B` | Messages d'erreur                  |
| Avertissement | `#D4A853` | Alertes informatives               |

---

## Typographie

### Font families

```css
/* Display / Titres */
--font-display: 'Fraunces', Georgia, serif;

/* Corps / Interface */
--font-body: 'Nunito', 'Segoe UI', sans-serif;

/* Monospace (code, petits détails) */
--font-mono: 'Courier Prime', 'Courier New', monospace;
```

**Fraunces** — Serif optique expressif avec une âme artisanale. Ses variantes en italique et les swash opticals lui donnent un caractère unique, proche des typographies d'affiches anciennes. Utilisé pour H1–H3 et la hero.

**Nunito** — Sans-serif arrondi et chaleureux. Ses terminaisons arrondies lui confèrent une accessibilité et une douceur parfaites pour une association communautaire. Utilisé pour le corps de texte, les labels et la navigation.

### Échelle typographique

```css
--text-xs:   0.75rem;   /* 12px — métadonnées */
--text-sm:   0.875rem;  /* 14px — labels, badges */
--text-base: 1rem;      /* 16px — corps de texte */
--text-lg:   1.125rem;  /* 18px — intro paragraphs */
--text-xl:   1.25rem;   /* 20px — sous-titres */
--text-2xl:  1.5rem;    /* 24px — H4 */
--text-3xl:  1.875rem;  /* 30px — H3 */
--text-4xl:  2.25rem;   /* 36px — H2 */
--text-5xl:  3rem;      /* 48px — H1 */
--text-6xl:  clamp(3rem, 8vw, 4.5rem); /* Hero titre */
--text-7xl:  clamp(3.5rem, 10vw, 6rem); /* Hero display */
```

### Weights & styles

```css
--font-light:    300;
--font-regular:  400;
--font-medium:   500;
--font-semibold: 600;
--font-bold:     700;

/* Fraunces italic pour les accents expressifs */
.accent-italic { font-style: italic; font-variation-settings: 'SOFT' 100; }
```

### Line heights

```css
--leading-tight:   1.1;  /* Grands titres hero */
--leading-snug:    1.25; /* H2–H3 */
--leading-normal:  1.5;  /* Corps de texte */
--leading-relaxed: 1.625;/* Paragraphes longs */
--leading-loose:   2;    /* Espacé pour lisibilité */
```

---

## Espacement

### Spacing scale (base 4px)

```css
--space-1:  0.25rem;  /* 4px  */
--space-2:  0.5rem;   /* 8px  */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Section padding

```css
--section-sm: clamp(3rem, 6vw, 5rem);
--section-md: clamp(4rem, 8vw, 7rem);
--section-lg: clamp(5rem, 10vw, 9rem);
```

---

## Border radius

```css
--radius-sm:   0.25rem;  /* 4px  — éléments discrets */
--radius-md:   0.5rem;   /* 8px  — boutons, inputs */
--radius-lg:   1rem;     /* 16px — cards standards */
--radius-xl:   1.5rem;   /* 24px — cards prominentes */
--radius-2xl:  2rem;     /* 32px — sections arrondies */
--radius-full: 9999px;   /* badges, pills, avatars */

/* Formes organiques irrégulières — via SVG clip-path */
--shape-blob-1: "M60,5 C80,5 95,20 95,45 C95,70 80,90 55,92 C30,94 5,78 5,52 C5,26 40,5 60,5";
--shape-blob-2: "M50,3 C75,3 97,25 97,52 C97,79 75,97 50,97 C25,97 3,75 3,50 C3,25 25,3 50,3";
```

---

## Ombres

```css
--shadow-xs:   0 1px 2px rgba(45,36,22,0.06);
--shadow-sm:   0 2px 6px rgba(45,36,22,0.08), 0 1px 2px rgba(45,36,22,0.04);
--shadow-md:   0 4px 16px rgba(45,36,22,0.10), 0 2px 4px rgba(45,36,22,0.06);
--shadow-lg:   0 8px 32px rgba(45,36,22,0.12), 0 4px 8px rgba(45,36,22,0.08);
--shadow-xl:   0 16px 48px rgba(45,36,22,0.14), 0 8px 16px rgba(45,36,22,0.10);

/* Ombres colorées pour éléments d'accentuation */
--shadow-terracotta: 0 8px 24px rgba(196,98,45,0.25);
--shadow-sage:       0 8px 24px rgba(107,158,120,0.25);
```

---

## Formes décoratives SVG (OrganicShape)

Le système de design utilise des formes SVG organiques pour créer une atmosphère de "papier découpé" :

```
Blob 1 (hero background)  — grande forme ovale irrégulière, terracotta clair
Blob 2 (sections)         — forme ronde aplatie, sauge transparent
Blob 3 (cards)            — petite forme anguleuse, miel
Torn paper divider        — bord déchiré SVG entre sections
Leaf shape                — motif feuille décoratif, répété
```

---

## Composants clés

### Boutons

```
Primary   — background terracotta, texte blanc, radius-md
           hover: background terracotta-dark, légère élévation
Secondary — background transparent, border sauge, texte sauge
           hover: background sauge/10
Ghost     — texte terracotta, underline au hover
```

### Cards événements

Style : "carte postale artisanale"
- Background papier (`#EDE5D0`)
- Border top colorée (3px, couleur catégorie)
- Shadow douce
- Tag catégorie en badge pill coloré
- Date en Fraunces italic
- Radius-xl

### Badges catégories

| Catégorie   | Background | Texte     |
|-------------|------------|-----------|
| Sport       | `#FFECD8`  | `#C4622D` |
| Culture     | `#E8F4EA`  | `#4A7A56` |
| Solidarité  | `#FFF4CC`  | `#8A6B00` |
| Festif      | `#F3E8FF`  | `#6B35A8` |
| Famille     | `#E8F0FF`  | `#2B5AE0` |

---

## Principes de design

### Ce qu'on fait ✓

- **Chaleur et humanité** : typographie organique, couleurs terre, textures subtiles
- **Asymétrie intentionnelle** : layouts déséquilibrés, grilles cassées, overlaps contrôlés
- **Formes libres** : blobs SVG, bords déchirés, clip-paths irréguliers
- **Hiérarchie typographique forte** : Fraunces italic grand format = impact immédiat
- **Espaces généreux** : padding large, respiration, jamais compressé
- **Contrastes doux** : jamais de noir pur sur blanc pur — brun sur crème
- **Animation subtile** : fade-in au scroll, pas de bounce ou de spin agaçant

### Ce qu'on évite ✗

- Header noir sticky avec backdrop-blur SaaS
- Gradient bleu → violet (look startup générique)
- Cards toutes identiques avec même arrondi
- Hero centré symétrique avec bouton CTA seul au centre
- Grid parfaitement uniforme (4 colonnes identiques)
- Polices Arial, Inter, Roboto, Space Grotesk
- Icônes FontAwesome sans contexte
- Borders partout (border-box fever)
- Effets glassmorphism non justifiés

---

## Animations

```css
/* Principes */
--transition-fast:   150ms ease;
--transition-base:   250ms ease;
--transition-slow:   400ms ease;
--transition-spring: 300ms cubic-bezier(0.34, 1.56, 0.64, 1);

/* Scroll reveals (Framer Motion) */
fadeInUp:    translateY(20px) → 0, opacity 0 → 1, duration 0.5s
fadeInLeft:  translateX(-20px) → 0, opacity 0 → 1, duration 0.5s
scaleIn:     scale(0.95) → 1, opacity 0 → 1, duration 0.4s
```

`prefers-reduced-motion: reduce` → toutes les animations désactivées.

---

## Justification du choix de direction

**Direction choisie : Organique / Papier découpé**

Cette direction est la plus juste pour La Marlio'Zen pour 5 raisons :
1. Les associations de quartier vivent par leurs affiches, flyers et communications artisanales — cette esthétique est *native* à leur univers.
2. La palette terracotta/sauge/miel est chaleureuse et inclusive, jamais intimidante pour un public diversifié (seniors, familles, jeunes).
3. Fraunces italic donne une personnalité forte sans arrogance — elle est expressive mais accessible.
4. Les formes organiques SVG créent une identité visuelle unique et mémorable sans budget photo.
5. Contrairement à la direction éditoriale (trop froide, magazine bobo) et street (trop énergique, excluant les seniors), l'organique parle à *toutes* les générations du quartier.
