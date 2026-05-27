import type { Metadata } from "next"
import { Fraunces, Nunito } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "La Marlio'Zen — Espace de Vie Sociale à Marlioz, Aix-les-Bains",
    template: "%s | La Marlio'Zen",
  },
  description:
    "Association de quartier à Aix-les-Bains : vivre-ensemble, événements solidaires, accompagnement et lien social pour tous les habitants de Marlioz.",
  keywords: [
    "association Aix-les-Bains",
    "EVS Marlioz",
    "lien social",
    "vivre-ensemble",
    "tournoi football inter-quartier",
    "cinéma plein air Aix-les-Bains",
    "espace de vie sociale",
    "association loi 1901 Savoie",
    "quartier Marlioz",
  ],
  authors: [{ name: "La Marlio'Zen" }],
  creator: "La Marlio'Zen",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Marlio'Zen",
    title: "La Marlio'Zen — Espace de Vie Sociale à Marlioz, Aix-les-Bains",
    description:
      "Association de quartier à Aix-les-Bains : vivre-ensemble, événements solidaires, accompagnement et lien social pour tous les habitants de Marlioz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Marlio'Zen",
    description: "L'Espace de Vie Sociale du quartier de Marlioz, Aix-les-Bains.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://marliozen.fr"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${nunito.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
