# Site personnel — Pierre-Olivier Marquis

Mon portfolio d'étudiant en génie électrique à Concordia. C'est du HTML, du CSS
et un peu de JavaScript, sans framework ni étape de build.

En ligne : [pierreoliviermarquis.com](https://pierreoliviermarquis.com)

## Structure

```
.
├── index.html            # Tout le contenu de la page
├── favicon.ico           # Icône PM reprise par Google dans les résultats
├── favicon.svg           # Même icône en vectoriel, pour les navigateurs
├── favicon-96.png        # Version 96 px (Google demande un multiple de 48)
├── apple-touch-icon.png  # Version 180 px pour l'écran d'accueil iOS
├── robots.txt
├── sitemap.xml
├── css/
│   ├── base.css          # Variables, reset, typographie
│   ├── layout.css        # En-tête, menu mobile, sections, pied de page
│   ├── components.css    # Boutons, cartes de projet, compétences, contact
│   └── print.css         # Version imprimable
└── js/
    ├── navigation.js     # Menu mobile, en-tête au défilement, lien actif
    └── main.js           # Apparition au défilement, année du copyright
```

Les trois feuilles CSS sont chargées dans l'ordre base → layout → components,
parce que c'est l'ordre de la cascade. Les couleurs et les espacements sont des
variables au début de `base.css`, donc changer le thème se fait à une seule
place. Le site reste lisible sans JavaScript : les scripts n'ajoutent que des
détails.

## Déploiement

Hébergé sur GitHub Pages, avec le domaine dans le fichier `CNAME`. Rien à
compiler, donc un push sur `main` suffit.
