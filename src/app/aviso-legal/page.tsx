import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { LEGAL_COMPANY } from "@/lib/legal-content";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Informacion general sobre la titularidad, uso del sitio web, responsabilidad, propiedad intelectual y marco legal de Maclima Soluciones Energeticas.",
  alternates: {
    canonical: `${SITE_URL}/aviso-legal`,
  },
  openGraph: {
    title: "Aviso legal | Maclima Soluciones Energeticas",
    description:
      "Informacion general sobre la titularidad, uso del sitio web, responsabilidad, propiedad intelectual y marco legal de Maclima Soluciones Energeticas.",
    url: `${SITE_URL}/aviso-legal`,
    locale: "es_ES",
    type: "website",
    images: [{ ...DEFAULT_OG_IMAGE, alt: "Aviso legal — Maclima Soluciones Energeticas" }],
  },
};

const sections = [
  {
    title: "Titularidad del sitio web",
    paragraphs: [
      `El presente sitio web corresponde a ${LEGAL_COMPANY.holder}, que opera comercialmente como ${LEGAL_COMPANY.brand}.`,
      `La actividad principal de la empresa es ${LEGAL_COMPANY.activity} El ambito de actuacion indicado en esta web se centra en ${LEGAL_COMPANY.scope}`,
      `Datos identificativos: domicilio social en ${LEGAL_COMPANY.address}, CIF ${LEGAL_COMPANY.taxId}, email ${LEGAL_COMPANY.email} y telefono ${LEGAL_COMPANY.phone}.`,
    ],
  },
  {
    title: "Objeto de la web",
    paragraphs: [
      "Esta web tiene una finalidad informativa y comercial. Sirve para presentar las soluciones energeticas y los servicios de distribucion, instalacion y asesoramiento tecnico con los que trabaja Maclima.",
      "Tambien permite solicitar contacto, consultoria inicial, orientacion tecnica o interes en productos y soluciones del catalogo consultivo.",
    ],
  },
  {
    title: "Condiciones generales de uso",
    paragraphs: [
      "El acceso a la web atribuye la condicion de usuario e implica la aceptacion de un uso adecuado de sus contenidos y funcionalidades.",
      "El usuario se compromete a no emplear este sitio para actividades contrarias a la ley, a la buena fe, a los derechos de terceros o al funcionamiento normal del servicio.",
    ],
    bullets: [
      "No alterar ni intentar vulnerar la seguridad del sitio.",
      "No usar formularios o vias de contacto para fines ilicitos o fraudulentos.",
      "No reproducir contenidos sin autorizacion cuando exista proteccion aplicable.",
      "No suplantar identidades ni aportar datos falsos de forma deliberada.",
    ],
  },
  {
    title: "Responsabilidad sobre contenidos",
    paragraphs: [
      "Maclima procura que la informacion publicada sea clara, util y este razonablemente actualizada. Aun asi, algunos contenidos pueden requerir revision, ajuste tecnico o actualizacion posterior.",
      "La informacion de esta web no sustituye una evaluacion tecnica individual del inmueble, la instalacion o el proyecto concreto. Cualquier recomendacion definitiva debe partir de un estudio previo.",
    ],
  },
  {
    title: "Enlaces externos",
    paragraphs: [
      "La web puede incluir enlaces a servicios o plataformas de terceros, como correo electronico, WhatsApp u otros recursos externos que faciliten el contacto o la informacion complementaria.",
      "Maclima no controla de forma permanente los contenidos, politicas o condiciones de esos sitios externos, por lo que cada usuario debe revisarlos directamente antes de utilizarlos.",
    ],
  },
  {
    title: "Propiedad intelectual e industrial",
    paragraphs: [
      "Los textos, imagenes, marcas, nombres comerciales, elementos graficos, estructura y diseno del sitio pertenecen a Maclima o se usan con autorizacion o base legitima cuando corresponde.",
      "Queda prohibida la reproduccion, distribucion, transformacion o comunicacion publica de los contenidos de la web sin autorizacion previa, salvo en los casos permitidos por la normativa aplicable.",
    ],
  },
  {
    title: "Proteccion de datos",
    paragraphs: [
      "El tratamiento de datos personales que pueda realizarse a traves de formularios, correo electronico o WhatsApp se explica de forma mas detallada en la Politica de Privacidad de esta web.",
      "Para entender como se recogen, usan y conservan los datos, conviene revisar dicha politica junto con este aviso legal.",
    ],
  },
  {
    title: "Legislacion aplicable y jurisdiccion",
    paragraphs: [
      "La relacion entre el titular del sitio y los usuarios se regira por la normativa espanola que resulte aplicable en cada momento.",
      "En caso de conflicto, y salvo que una norma imperativa disponga otra cosa, las partes se someteran a los juzgados y tribunales que correspondan conforme a la legislacion vigente.",
      `Ultima actualizacion: ${LEGAL_COMPANY.lastUpdated}.`,
    ],
  },
] as const;

export default function AvisoLegalPage() {
  return (
    <LegalPage
      eyebrow="Marco legal del sitio"
      title="Aviso legal de Maclima Soluciones Energeticas"
      description="Resumen claro de la titularidad del sitio, el alcance informativo y comercial de la web, las condiciones de uso y el marco basico de responsabilidad aplicable."
      icon={Scale}
      sections={sections}
    />
  );
}
