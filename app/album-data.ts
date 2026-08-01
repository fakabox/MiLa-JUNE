export type StreamingPlatform = {
  name: string;
  icon: string;
  url: string | null;
};

export type Track = {
  number: number;
  title: string;
  preview: string | null;
};

export const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

// MISE À JOUR FACILE
// 1. Collez les liens des plateformes à la place de null.
// 2. Collez les liens Instagram et TikTok à la place de null.
// 3. Ajoutez les extraits dans public/audio/ puis indiquez leur chemin.
//    Exemple : preview: "/audio/01-je-suis-mila.mp3"
export const album = {
  artist: "MiLa JUNE",
  title: "Extinction",
  releaseLabel: "Disponible le 9 août 2026",
  cover: assetPath("/extinction-album-cover.jpg"),
  socials: {
    instagram: "https://www.instagram.com/je_suis_mila_june",
    tiktok: "https://www.tiktok.com/@milajunemusic",
  },
  platforms: [
    { name: "Spotify", icon: "spotify", url: null },
    { name: "Apple Music", icon: "applemusic", url: null },
    { name: "Deezer", icon: "deezer", url: null },
    { name: "YouTube Music", icon: "youtubemusic", url: null },
    { name: "Amazon Music", icon: "amazonmusic", url: null },
  ] satisfies StreamingPlatform[],
  tracks: [
    { number: 1, title: "Je suis MiLa", preview: assetPath("/audio/01-je-suis-mila.mp3") },
    { number: 2, title: "Le voile vert", preview: assetPath("/audio/02-le-voile-vert.mp3") },
    {
      number: 3,
      title: "Les masques tombent",
      preview: assetPath("/audio/03-les-masques-tombent.mp3"),
    },
    { number: 4, title: "100 jours", preview: assetPath("/audio/04-100-jours.mp3") },
    { number: 5, title: "Asphalte", preview: assetPath("/audio/05-asphalte.mp3") },
    {
      number: 6,
      title: "Prochaine victime",
      preview: assetPath("/audio/06-prochaine-victime.mp3"),
    },
    { number: 7, title: "Joli gâchis", preview: assetPath("/audio/07-joli-gachis.mp3") },
    { number: 8, title: "Hoodie Love", preview: assetPath("/audio/08-hoodie-love.mp3") },
    { number: 9, title: "Validé", preview: assetPath("/audio/09-valide.mp3") },
    { number: 10, title: "Mon Harry", preview: assetPath("/audio/10-mon-harry.mp3") },
    { number: 11, title: "Vous passez", preview: assetPath("/audio/11-vous-passez.mp3") },
    {
      number: 12,
      title: "Éclats d’ambre",
      preview: assetPath("/audio/12-eclats-d-ambre.mp3"),
    },
    { number: 13, title: "Extinction", preview: assetPath("/audio/13-extinction.mp3") },
  ] satisfies Track[],
};
