import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { LEGAL_COMPANY } from "@/lib/legal-content";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politica de privacidad",
  description:
    "Informacion sobre que datos personales puede tratar Maclima, para que finalidades, con que base legal y como puede ejercer el usuario sus derechos.",
  alternates: {
    canonical: `${SITE_URL}/politica-de-privacidad`,
  },
  openGraph: {
    title: "Politica de privacidad | Maclima Soluciones Energeticas",
    description:
      "Informacion sobre que datos personales puede tratar Maclima, para que finalidades, con que base legal y como puede ejercer el usuario sus derechos.",
    url: `${SITE_URL}/politica-de-privacidad`,
    locale: "es_ES",
    type: "website",
    images: [
      {
        ...DEFAULT_OG_IMAGE,
        alt: "Politica de privacidad — Maclima Soluciones Energeticas",
      },
    ],
  },
};

const sections = [
  {
    title: "Responsable del tratamiento",
    paragraphs: [
      `El responsable del tratamiento de los datos personales recabados a traves de esta web es ${LEGAL_COMPANY.holder}, nombre comercial ${LEGAL_COMPANY.brand}.`,
      `Antes de cerrar esta politica con datos definitivos conviene completar los siguientes campos: domicilio social ${LEGAL_COMPANY.address}, CIF o NIF ${LEGAL_COMPANY.taxId}, email ${LEGAL_COMPANY.email} y telefono ${LEGAL_COMPANY.phone}.`,
    ],
  },
  {
    title: "Datos que se pueden recoger",
    paragraphs: [
      "Maclima puede recibir datos personales cuando el usuario rellena formularios de contacto o consultoria, escribe por correo electronico o inicia una conversacion por WhatsApp.",
    ],
    bullets: [
      "Nombre",
      "Telefono",
      "Email",
      "Tipo de proyecto",
      "Mensaje o informacion enviada por el usuario",
    ],
  },
  {
    title: "Finalidad del tratamiento",
    paragraphs: [
      "Los datos se utilizan exclusivamente para atender la solicitud o la comunicacion iniciada por el usuario y para dar continuidad a esa relacion si la consulta asi lo requiere.",
    ],
    bullets: [
      "Responder solicitudes de informacion",
      "Gestionar consultas tecnicas",
      "Preparar orientacion o propuesta personalizada",
      "Mantener la comunicacion comercial solicitada por el usuario",
    ],
  },
  {
    title: "Base legal",
    paragraphs: [
      "La base que legitima el tratamiento dependera del tipo de contacto realizado y del contexto de la solicitud.",
    ],
    bullets: [
      "Consentimiento del usuario al enviar el formulario",
      "Interes legitimo para responder comunicaciones iniciadas por el usuario",
      "Ejecucion de medidas precontractuales si solicita presupuesto o asesoramiento",
    ],
  },
  {
    title: "Conservacion de los datos",
    paragraphs: [
      "Los datos se conservaran durante el tiempo necesario para gestionar la consulta, mantener la comunicacion asociada y atender posibles responsabilidades legales derivadas de dicha relacion.",
      "Cuando dejen de ser necesarios, se suprimiran o bloquearan conforme a la normativa aplicable.",
    ],
  },
  {
    title: "Destinatarios",
    paragraphs: [
      "Con caracter general no se cederan datos a terceros, salvo obligacion legal o cuando resulte necesario contar con proveedores que intervengan en la prestacion tecnica u operativa del servicio.",
      "En esos casos, el acceso de terceros se limitara a lo necesario y bajo las garantias correspondientes.",
    ],
  },
  {
    title: "Derechos del usuario",
    paragraphs: [
      `El usuario puede ejercitar sus derechos de acceso, rectificacion, supresion, oposicion, limitacion del tratamiento y portabilidad dirigiendose a ${LEGAL_COMPANY.email}.`,
      "Si fuera necesario, tambien podra presentar una reclamacion ante la autoridad de control competente en materia de proteccion de datos.",
    ],
  },
  {
    title: "Seguridad de la informacion",
    paragraphs: [
      "Maclima adopta medidas razonables de caracter tecnico y organizativo para proteger la informacion personal frente a accesos no autorizados, alteraciones, perdida o destruccion.",
      "Aun asi, ningun entorno digital puede garantizar una seguridad absoluta, por lo que la proteccion se revisa con criterio de proporcionalidad y mejora continua.",
    ],
  },
  {
    title: "Formularios, email y WhatsApp",
    paragraphs: [
      "Al contactar a traves de formularios, email o WhatsApp, el usuario facilita voluntariamente informacion para que su consulta pueda ser atendida.",
      "En el caso de WhatsApp, ademas de esta politica, resultan aplicables las condiciones y politicas propias de Meta y WhatsApp sobre el uso de su plataforma.",
    ],
  },
  {
    title: "Cambios en esta politica",
    paragraphs: [
      "Esta politica puede actualizarse si cambia la operativa de la web, los formularios disponibles, los canales de contacto o las obligaciones legales aplicables.",
      `Ultima actualizacion: ${LEGAL_COMPANY.lastUpdated}.`,
    ],
  },
] as const;

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Proteccion de datos"
      title="Politica de privacidad"
      description="Explicacion clara de como se pueden tratar los datos personales que lleguen a Maclima mediante formularios, email o WhatsApp, y de que derechos conserva el usuario en todo momento."
      icon={ShieldCheck}
      sections={sections}
    />
  );
}
