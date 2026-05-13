export const LEGAL_COMPANY = {
  holder: "Maclima Calor y Frio S.L.",
  brand: "Maclima Soluciones Energeticas",
  activity:
    "Distribucion, instalacion y asesoramiento tecnico en soluciones energeticas.",
  scope: "Madrid y alrededores.",
  email: "[EMAIL_EMPRESA]",
  phone: "[TELEFONO_EMPRESA]",
  address: "[DOMICILIO_EMPRESA]",
  taxId: "[CIF_EMPRESA]",
  lastUpdated: "13 de mayo de 2026",
} as const;

export const LEGAL_RELATED_LINKS = [
  {
    href: "/aviso-legal",
    label: "Aviso legal",
    description: "Titularidad, condiciones de uso, responsabilidad y propiedad intelectual.",
  },
  {
    href: "/politica-de-privacidad",
    label: "Politica de privacidad",
    description: "Tratamiento de datos personales en formularios, email y WhatsApp.",
  },
  {
    href: "/politica-de-cookies",
    label: "Politica de cookies",
    description: "Uso actual de cookies tecnicas y criterio para futuras integraciones.",
  },
] as const;

export const LEGAL_COMPLETION_NOTE =
  "Antes de dar por cerradas estas paginas conviene completar los campos entre corchetes con los datos legales definitivos de la empresa.";
