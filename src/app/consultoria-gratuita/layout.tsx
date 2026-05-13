import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría gratuita en aerotermia, fotovoltaica y geotermia",
  description:
    "Solicita tu consultoría técnica gratuita con Maclima. Analizamos tu vivienda, negocio o instalación para orientarte sobre la solución energética más adecuada sin compromiso.",
  alternates: {
    canonical: "/consultoria-gratuita",
  },
  openGraph: {
    title: "Consultoría gratuita en aerotermia, fotovoltaica y geotermia | Maclima",
    description:
      "Solicita tu consultoría técnica gratuita con Maclima. Analizamos tu vivienda, negocio o instalación para orientarte sobre la solución energética más adecuada sin compromiso.",
    url: "/consultoria-gratuita",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/whatsapp.png", width: 800, height: 800, alt: "Consultoría gratuita — Maclima", type: "image/png" }],
  },
};

export default function ConsultoriaGratuitaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
