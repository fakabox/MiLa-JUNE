import type { Metadata } from "next";
import { AlbumPage } from "./AlbumPage";

export const metadata: Metadata = {
  title: "Extinction — MiLa JUNE",
  description:
    "Écoutez les extraits d’Extinction, le nouvel album de MiLa JUNE, et retrouvez-le sur votre plateforme préférée.",
};

export default function Home() {
  return <AlbumPage />;
}
