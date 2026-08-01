# MiLa JUNE — Extinction

Page officielle de l’album **Extinction**, prête pour une publication statique sur GitHub Pages.

Site public : https://fakabox.github.io/MiLa-JUNE/

## Mettre à jour les plateformes et les extraits

Toutes les informations modifiables sont regroupées dans un seul fichier :

`app/album-data.ts`

### Ajouter une plateforme

Remplacer `url: null` par le lien de la plateforme :

```ts
{ name: "Spotify", icon: "spotify", url: "https://open.spotify.com/..." }
```

Le bouton passe automatiquement de **Bientôt** à un lien actif.

### Ajouter un extrait

1. Placer le fichier MP3 de 20 à 30 secondes dans `public/audio/`.
2. Dans `app/album-data.ts`, remplacer `preview: null` par son chemin :

```ts
{ number: 1, title: "Je suis MiLa", preview: "/audio/01-je-suis-mila.mp3" }
```

Le bouton de lecture devient automatiquement actif. Un seul extrait est joué à la fois.

## Publication GitHub Pages

La commande `pnpm run build:github` fabrique une version entièrement statique dans le dossier `out/`. Chaque envoi sur la branche `main` déclenche ensuite automatiquement la publication GitHub Pages.
