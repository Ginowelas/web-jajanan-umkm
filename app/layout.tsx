import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warung Mak Menuk | Order Jajanan Pasar dan Nasi Box",
  description:
    "Pesan jajanan pasar tradisional dan Nasi box UMKM premium melalui WhatsApp. Fresh harian untuk arisan, hajatan, kantor, dan acara keluarga.",
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
    title: "Jajanan Pagi | Order Jajanan Pasar dan Snack Box",
    description: "Pesan jajanan pasar dan snack box fresh harian untuk arisan, hajatan, kantor, dan acara keluarga.",
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
