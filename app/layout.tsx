import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicUrl = "https://fakabox.github.io/MiLa-JUNE/";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: {
    default: "Extinction — MiLa JUNE",
    template: "%s — MiLa JUNE",
  },
  description:
    "La page officielle de l’album Extinction de MiLa JUNE.",
  icons: {
    icon: `${basePath}/extinction-album-cover.jpg`,
    shortcut: `${basePath}/extinction-album-cover.jpg`,
  },
  openGraph: {
    type: "music.album",
    title: "Extinction — MiLa JUNE",
    description: "Écoutez les extraits du nouvel album de MiLa JUNE.",
    url: publicUrl,
    images: [`${publicUrl}og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extinction — MiLa JUNE",
    description: "Écoutez les extraits du nouvel album de MiLa JUNE.",
    images: [`${publicUrl}og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
