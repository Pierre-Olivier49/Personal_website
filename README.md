# Site personnel — Pierre-Olivier Marquis

Portfolio statique (HTML/CSS/JS), sans dépendance ni étape de build.

## Structure

```
.
├── index.html         # Structure et contenu de la page
├── favicon.svg        # Icône d'onglet
├── robots.txt         # Directives pour les moteurs de recherche
├── sitemap.xml        # Plan du site (mettre à jour `lastmod` après refonte)
├── css/
│   ├── base.css       # Jetons de design, reset, typographie, utilitaires
│   ├── layout.css     # En-tête, menu mobile, sections, pied de page
│   ├── components.css # Boutons, accueil, cartes, compétences, contact
│   └── print.css      # Version imprimable (media="print")
└── js/
    ├── navigation.js  # Menu mobile, en-tête au défilement, lien actif
    └── main.js        # Apparition au défilement, année du copyright
```

Trois feuilles chargées dans cet ordre — **base → layout → components** —
parce que c'est l'ordre du cascade : les jetons et le reset d'abord, les
composants ensuite, qui peuvent ainsi affiner ce qui précède.

### Pourquoi ce découpage

- **Un fichier = une responsabilité.** Retoucher les cartes de projet mène à
  `components.css`, pas à 600 lignes de CSS mélangées à du HTML.
- **Jetons centralisés.** Couleurs, espacements et durées vivent en haut de
  `base.css` : changer `--gold` retouche le site entier.
- **Amélioration progressive.** Le contenu est complet et lisible sans
  JavaScript ; les scripts n'ajoutent que du confort.

## Développement

Aucune installation requise. Ouvrir `index.html` fonctionne, mais un petit
serveur local reproduit mieux les conditions réelles :

```bash
python -m http.server 8000     # puis http://localhost:8000
# ou
npx serve .
```

## Ajouter du contenu

| Tâche | Où |
| --- | --- |
| Nouveau projet | Dupliquer un `<article class="proj-card">` dans `index.html` |
| Nouvelle compétence | Ajouter un `<li>` dans le `.skill-pills` correspondant |
| Nouvelle section | `<section class="section" id="...">` + un `<li>` dans les deux menus |
| Changer les couleurs | Les variables en haut de `css/base.css` |

Les éléments portant l'attribut `data-reveal` apparaissent en fondu au
défilement ; l'ajouter à un nouveau bloc suffit.

## À compléter avant la mise en ligne

1. Ajouter une image de partage (1200 × 630 px) déclarée via `og:image` — les
   aperçus LinkedIn en dépendent.
2. Déposer le CV en PDF à la racine et le lier depuis la section Contact.

Le contenu suit le CV de septembre 2026 : après chaque mise à jour du CV,
vérifier les sections Expérience, Éducation, Projets et Compétences.

## Déploiement

Site 100 % statique : déposer le dossier tel quel sur GitHub Pages, Netlify ou
Cloudflare Pages. Aucune commande de build.
