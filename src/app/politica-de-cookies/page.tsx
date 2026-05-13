import type { Metadata } from "next";
import { Cookie } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { LEGAL_COMPANY } from "@/lib/legal-content";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description:
    "Politica de cookies de Maclima sobre el uso actual de cookies tecnicas y el criterio de actualizacion futura si se incorporan herramientas de analitica o marketing.",
  alternates: {
    canonical: `${SITE_URL}/politica-de-cookies`,
  },
  openGraph: {
    title: "Politica de cookies | Maclima Soluciones Energeticas",
    description:
      "Politica de cookies de Maclima sobre el uso actual de cookies tecnicas y el criterio de actualizacion futura si se incorporan herramientas de analitica o marketing.",
    url: `${SITE_URL}/politica-de-cookies`,
    locale: "es_ES",
    type: "website",
    images: [
      {
        ...DEFAULT_OG_IMAGE,
        alt: "Politica de cookies — Maclima Soluciones Energeticas",
      },
    ],
  },
};

const sections = [
  {
    title: "Que son las cookies",
    paragraphs: [
      "Las cookies son pequenos archivos que pueden almacenarse en el dispositivo del usuario cuando visita una pagina web. Sirven para recordar determinada informacion tecnica o de navegacion.",
      "No todas las cookies tienen la misma finalidad. Algunas son necesarias para el funcionamiento basico del sitio y otras se usan para analitica, publicidad o personalizacion.",
    ],
  },
  {
    title: "Que cookies utiliza esta web",
    paragraphs: [
      "En el estado actual del proyecto, esta web no esta planteada para usar cookies de marketing, publicidad comportamental ni analitica de terceros.",
      "Si el funcionamiento tecnico del sitio lo requiere, unicamente podrian utilizarse cookies tecnicas o necesarias para permitir la navegacion, la seguridad o el correcto uso de funciones basicas.",
    ],
  },
  {
    title: "Cookies que no se usan actualmente",
    paragraphs: [
      "A dia de hoy no esta previsto activar cookies de analisis, publicidad o seguimiento de usuarios.",
    ],
    bullets: [
      "No se usan cookies de Google Analytics",
      "No se usa Meta Pixel",
      "No se usan cookies publicitarias",
      "No se aplican perfiles de seguimiento comercial",
    ],
  },
  {
    title: "Posibles cambios futuros",
    paragraphs: [
      "Si mas adelante se incorporan herramientas como Google Analytics, Meta Pixel, mapas, videos incrustados o integraciones externas que requieran cookies no necesarias, esta politica debera actualizarse.",
      "En ese escenario tambien habra que revisar si corresponde implantar un banner o sistema de consentimiento previo conforme a la normativa aplicable.",
    ],
  },
  {
    title: "Como configurar o eliminar cookies",
    paragraphs: [
      "El usuario puede permitir, bloquear o eliminar cookies desde la configuracion de su navegador. Cada navegador ofrece rutas de configuracion diferentes para gestionar privacidad, historial o almacenamiento local.",
      "La desactivacion de determinadas cookies tecnicas puede afectar al funcionamiento correcto de algunas partes del sitio si esas cookies fueran necesarias.",
    ],
  },
  {
    title: "Revision de esta politica",
    paragraphs: [
      "Esta politica puede modificarse si cambia la tecnologia empleada por la web o si se anaden nuevas herramientas que impliquen el uso de cookies distintas a las actuales.",
      `Ultima actualizacion: ${LEGAL_COMPANY.lastUpdated}.`,
    ],
  },
] as const;

export default function PoliticaCookiesPage() {
  return (
    <LegalPage
      eyebrow="Uso de cookies"
      title="Politica de cookies"
      description="Documento sencillo y claro sobre el uso actual de cookies en la web, limitado a lo estrictamente tecnico si fuera necesario, y sobre el criterio de actualizacion si se anaden herramientas futuras."
      icon={Cookie}
      sections={sections}
    />
  );
}
