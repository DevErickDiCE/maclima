import type { Metadata } from "next";
import { ContactoPage } from "@/components/contacto-page";

export const metadata: Metadata = {
  title: "Contacto — Asesoramiento en aerotermia, fotovoltaica y geotermia",
  description:
    "Contacta con Maclima para asesoramiento técnico gratuito en aerotermia, fotovoltaica y geotermia. Respondemos por teléfono, WhatsApp o formulario.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Maclima Soluciones Energéticas",
    description:
      "Contacta con Maclima para asesoramiento técnico gratuito en aerotermia, fotovoltaica y geotermia. Respondemos por teléfono, WhatsApp o formulario.",
    url: "/contacto",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/whatsapp.png?v=2", width: 800, height: 800, alt: "Contacto — Maclima Soluciones Energéticas", type: "image/png" }],
  },
};

export default function ContactPageRoute() {
  return <ContactoPage />;
}
