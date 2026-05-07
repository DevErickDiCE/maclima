import { FuturePage } from "@/components/future-page";
import { ClipboardCheck } from "lucide-react";

const introCards = [
  {
    title: "Qué incluye",
    text: "Una primera conversación orientada a entender consumo, inmueble, objetivos y condicionantes del proyecto.",
  },
  {
    title: "Para quién es",
    text: "Para cliente final, negocio o profesional que necesita criterio técnico antes de elegir solución energética.",
  },
  {
    title: "Qué conseguimos",
    text: "Una recomendación más razonable entre aerotermia, fotovoltaica o una combinación de ambas.",
  },
] as const;

export function ConsultoriaGratuitaPage() {
  return (
    <FuturePage
      eyebrow="Consultoría gratuita"
      title="Asesoramiento técnico para elegir la solución adecuada"
      description="La consultoría gratuita es el principal punto de captación de la web. Debe dejar claro que Maclima estudia cada caso antes de recomendar una solución o preparar una propuesta."
      introCards={introCards}
      roadmapTitle="Cómo funciona el proceso"
      roadmap={[
        "Nos cuentas tu caso y el tipo de proyecto",
        "Analizamos consumo, inmueble y necesidades reales",
        "Recomendamos aerotermia, fotovoltaica o solución combinada",
        "Preparamos una propuesta personalizada",
      ]}
      primaryPanel={{
        eyebrow: "Valor consultivo",
        title: "No empujamos producto, orientamos la decisión",
        text: "La página debe explicar que el trabajo empieza con un análisis técnico y una conversación útil, no con un presupuesto automático o una compra cerrada.",
        bullets: [
          "Evaluación inicial",
          "Contexto del inmueble",
          "Objetivos de ahorro",
          "Selección de solución energética",
          "Propuesta personalizada",
        ],
        cta: "Continuar en contacto",
        href: "/contacto",
      }}
      secondaryPanel={{
        eyebrow: "Captación clara",
        title: "Formulario sencillo y orientado a siguiente paso",
        text: "La estructura debe invitar a dejar nombre, teléfono, tipo de proyecto y un mensaje opcional sin añadir fricción innecesaria.",
        bullets: [
          "Nombre",
          "Teléfono",
          "Tipo de proyecto",
          "Mensaje opcional",
          "Respuesta consultiva posterior",
        ],
        cta: "Ver página de contacto",
        href: "/contacto",
      }}
      consultiveNote="Te ayudamos a elegir la solución energética más eficiente según tu consumo, tu inmueble, tu presupuesto y tus objetivos de ahorro."
      icon={ClipboardCheck}
    />
  );
}

export default ConsultoriaGratuitaPage;
