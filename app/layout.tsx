import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jajanan Pagi | Menu Jajanan Pasar Tradisional",
  description:
    "Jajanan pasar tradisional fresh setiap hari untuk snack box, arisan, hajatan, kantor, dan acara keluarga.",
  keywords: [
    "jajanan pasar",
    "snack box",
    "UMKM jajanan",
    "klepon",
    "lupis",
    "onde-onde",
    "lemper",
    "risoles"
  ],
  openGraph: {
    title: "Jajanan Pagi | Jajanan Pasar Fresh Setiap Hari",
    description: "Pesan jajanan pasar untuk snack box, arisan, hajatan, kantor, dan acara keluarga.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
