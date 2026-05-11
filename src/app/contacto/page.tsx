import type { Metadata } from "next";
import { ContactoPage } from "@/components/contacto-page";

export const metadata: Metadata = {
  title: "Contacto | Maclima Soluciones Energéticas",
  description:
    "Contacta con Maclima para asesoramiento técnico en aerotermia, fotovoltaica y geotermia. Consulta gratuita para viviendas, negocios y profesionales del sector.",
};

export default function ContactPageRoute() {
  return <ContactoPage />;
}
