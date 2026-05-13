import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consultoría gratuita en aerotermia, fotovoltaica y geotermia",
  description:
    "Solicita tu consultoría técnica gratuita con Maclima. Analizamos tu vivienda, negocio o instalación para orientarte sobre la solución energética más adecuada sin compromiso.",
  alternates: {
    canonical: `${SITE_URL}/consultoria-gratuita`,
  },
  openGraph: {
    title: "Consultoría gratuita en aerotermia, fotovoltaica y geotermia | Maclima",
    description:
      "Solicita tu consultoría técnica gratuita con Maclima. Analizamos tu vivienda, negocio o instalación para orientarte sobre la solución energética más adecuada sin compromiso.",
    url: `${SITE_URL}/consultoria-gratuita`,
    locale: "es_ES",
    type: "website",
    images: [{ ...DEFAULT_OG_IMAGE, alt: "Consultoría gratuita — Maclima" }],
  },
};

export default function ConsultoriaGratuitaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
