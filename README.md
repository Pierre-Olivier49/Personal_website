# Site personnel — Pierre-Olivier Marquis

Mon portfolio d'étudiant en génie électrique à Concordia. C'est du HTML, du CSS
et un peu de JavaScript, sans framework ni étape de build. Je voulais quelque
chose que je peux modifier rapidement entre deux sessions.

En ligne : [pierreoliviermarquis.com](https://pierreoliviermarquis.com)

## Structure

```
.
├── index.html         # Tout le contenu de la page
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── css/
│   ├── base.css       # Variables, reset, typographie
│   ├── layout.css     # En-tête, menu mobile, sections, pied de page
│   ├── components.css # Boutons, cartes de projet, compétences, contact
│   └── print.css      # Version imprimable
└── js/
    ├── navigation.js  # Menu mobile, en-tête au défilement, lien actif
    └── main.js        # Apparition au défilement, année du copyright
```

Les trois feuilles CSS sont chargées dans l'ordre base → layout → components,
parce que c'est l'ordre de la cascade. Les couleurs et les espacements sont des
variables au début de `base.css`, donc changer le thème se fait à une seule
place. Le site reste lisible sans JavaScript : les scripts n'ajoutent que des
détails.

## Lancer le site en local

Ouvrir `index.html` directement fonctionne, mais un petit serveur local se
rapproche plus des vraies conditions :

```bash
python -m http.server 8000     # http://localhost:8000
```

## Modifier le contenu

- Nouveau projet : copier un `<article class="proj-card">` dans `index.html`
- Nouvelle compétence : ajouter un `<li>` dans le `.skill-pills` concerné
- Nouvelle section : un `<section class="section" id="...">` et le lien dans les
  deux menus
- Couleurs : les variables en haut de `css/base.css`

Ajouter l'attribut `data-reveal` à un bloc suffit pour qu'il apparaisse en fondu
au défilement.

## À faire

- [ ] Image de partage 1200 × 630 px (`og:image`) pour les aperçus LinkedIn
- [ ] Mettre le CV en PDF à la racine et le lier depuis la section Contact
- [ ] Mettre à jour `lastmod` dans `sitemap.xml` après une refonte

## Déploiement

Hébergé sur GitHub Pages, avec le domaine dans le fichier `CNAME`. Rien à
compiler, donc un push sur `main` suffit.

Le contenu suit mon CV de septembre 2026. Quand je le mets à jour, je repasse
sur les sections Expérience, Éducation, Projets et Compétences.
