import type { Metadata } from "next";
import { ContactoPage } from "@/components/contacto-page";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto — Asesoramiento en aerotermia, fotovoltaica y geotermia",
  description:
    "Contacta con Maclima para asesoramiento técnico gratuito en aerotermia, fotovoltaica y geotermia. Respondemos por teléfono, WhatsApp o formulario.",
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    title: "Contacto | Maclima Soluciones Energéticas",
    description:
      "Contacta con Maclima para asesoramiento técnico gratuito en aerotermia, fotovoltaica y geotermia. Respondemos por teléfono, WhatsApp o formulario.",
    url: `${SITE_URL}/contacto`,
    locale: "es_ES",
    type: "website",
    images: [{ ...DEFAULT_OG_IMAGE, alt: "Contacto — Maclima Soluciones Energéticas" }],
  },
};

export default function ContactPageRoute() {
  return <ContactoPage />;
}
