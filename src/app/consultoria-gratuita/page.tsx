"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BatteryCharging,
  Building2,
  Calculator,
  Check,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Droplets,
  FileText,
  Layers,
  MessageCircle,
  Plug,
  ShieldCheck,
  Sparkles,
  Sun,
  ThermometerSun,
  TrendingDown,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { CONTACT_INFO } from "@/lib/contact-info";


const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

const projectTypes = [
  "Aerotermia",
  "Fotovoltaica",
  "Geotermia",
  "ACS",
  "Baterías / almacenamiento",
  "No lo tengo claro todavía",
  "Otro",
] as const;

const processSteps = [
  {
    n: 1,
    title: "Nos cuentas tu caso",
    text: "Recogemos información básica sobre el inmueble, el uso previsto, el consumo y el objetivo principal del proyecto.",
  },
  {
    n: 2,
    title: "Analizamos consumo, espacio y necesidades",
    text: "Valoramos demanda energética, potencia contratada, cubierta, orientación, sombras, espacio técnico, ACS, climatización o almacenamiento.",
  },
  {
    n: 3,
    title: "Estudiamos la solución más adecuada",
    text: "Comparamos si encaja mejor aerotermia, fotovoltaica, geotermia, ACS, baterías, acumulación o una combinación de sistemas.",
  },
  {
    n: 4,
    title: "Revisamos trámites y viabilidad",
    text: "Tenemos en cuenta permisos, legalización, normativa, certificados, bonificaciones y posibles ayudas aplicables.",
  },
  {
    n: 5,
    title: "Preparamos una propuesta orientada al proyecto real",
    text: "Recomendamos la solución más razonable en función de eficiencia, confort, ahorro, viabilidad técnica y presupuesto.",
  },
] as const;

const consultancyAreas = [
  {
    icon: Calculator,
    title: "Estudios y dimensionamiento",
    text: "Calculamos la solución según consumo, perfil de uso, potencia contratada, superficie, orientación, sombras y necesidades del inmueble.",
    points: [
      "Consumo anual y perfil horario",
      "Potencia contratada",
      "Superficie y orientación",
      "Sombras y rendimiento",
      "Integración con aerotermia o baterías",
    ],
  },
  {
    icon: ClipboardList,
    title: "Tramitación administrativa",
    text: "Orientamos sobre los permisos y gestiones necesarios antes de ejecutar o legalizar una instalación.",
    points: [
      "Declaración responsable de obra",
      "Licencia de obra menor",
      "Licencia de obra mayor si aplica",
      "Gestión documental",
      "Seguimiento administrativo",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Legalización y normativa",
    text: "Revisamos los requisitos técnicos y normativos que pueden afectar a la instalación para evitar problemas posteriores.",
    points: [
      "Memorias técnicas",
      "Certificados de instalación",
      "Registro de autoconsumo",
      "Coordinación con distribuidora",
      "Legalización ante Industria",
    ],
  },
  {
    icon: TrendingDown,
    title: "Beneficios y ahorro",
    text: "Analizamos el potencial de ahorro y las ventajas económicas disponibles según municipio, instalación y perfil de consumo.",
    points: [
      "Reducción de factura",
      "Optimización de excedentes",
      "Retorno de inversión",
      "Posibles subvenciones",
      "Bonificaciones fiscales",
    ],
  },
  {
    icon: Award,
    title: "Certificados energéticos y CAES",
    text: "Valoramos si el proyecto puede apoyarse en certificados energéticos o Certificados de Ahorro Energético según el tipo de actuación.",
    points: [
      "Certificado energético",
      "Certificados de Ahorro Energético",
      "Mejora de eficiencia",
      "Documentación técnica",
      "Análisis de requisitos",
    ],
  },
  {
    icon: Plug,
    title: "Autoconsumo y excedentes",
    text: "Estudiamos cómo aprovechar la energía generada, reducir consumo de red y gestionar excedentes de forma eficiente.",
    points: [
      "Autoconsumo individual",
      "Autoconsumo compartido",
      "Compensación de excedentes",
      "Baterías y almacenamiento",
      "Optimización de factura",
    ],
  },
] as const;

const solutions = [
  {
    icon: ThermometerSun,
    title: "Aerotermia",
    text: "Para climatización, calefacción, refrigeración y ACS, especialmente en viviendas, reformas, obra nueva o negocios que buscan eficiencia térmica.",
  },
  {
    icon: Sun,
    title: "Fotovoltaica",
    text: "Para reducir consumo eléctrico, aprovechar cubierta disponible, generar energía propia y estudiar autoconsumo con o sin excedentes.",
  },
  {
    icon: Layers,
    title: "Geotermia",
    text: "Para proyectos donde se busca estabilidad térmica y alta eficiencia aprovechando la temperatura constante del terreno, con estudio previo de viabilidad.",
  },
  {
    icon: Droplets,
    title: "ACS y acumulación",
    text: "Para producción de agua caliente sanitaria, acumuladores, termoacumuladores y sistemas de apoyo según consumo real.",
  },
  {
    icon: BatteryCharging,
    title: "Baterías y almacenamiento",
    text: "Para aprovechar excedentes solares, mejorar autoconsumo, gestionar horarios y reducir dependencia de la red según el perfil de uso.",
  },
  {
    icon: Building2,
    title: "Instalaciones profesionales",
    text: "Para negocios, comunidades, instaladores o proyectos con necesidades técnicas más específicas.",
  },
] as const;

const normas = [
  "Real Decreto 1027/2007, de 20 de julio, por el que se aprueba el Reglamento de Instalaciones Térmicas en los Edificios (RITE) y sus Instrucciones Técnicas Complementarias ITE. Correcciones del RITE.",
  "Real Decreto 314/2006, de 17 de marzo, por el que se aprueba el Código Técnico de la Edificación. Documentos Básicos HE 1 «Ahorro de energía. Limitación de demanda energética», HE 2 «Ahorro de energía. Rendimiento de las instalaciones térmicas», HS 3 «Salubridad. Calidad del aire interior», HS 4 «Salubridad. Suministro de agua», HS 5 «Salubridad. Evacuación de aguas» y SI «Seguridad en caso de incendio».",
  "Reglamento electrotécnico para baja tensión y sus instrucciones técnicas complementarias ITC BT. Real Decreto 842/2002 de 2 de agosto. (BOE Nº. 224 de 18/09/2002).",
  "Reglamento de seguridad para plantas e instalaciones frigoríficas.",
] as const;

export default function ConsultoriaGratuitaPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main>

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_52%,#EAEAFF_100%)] py-14 sm:py-16">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(133,14,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-[#D9D9FF]/80 blur-3xl" />
          <div className="absolute bottom-[-16%] left-[-8%] h-64 w-64 rounded-full bg-[#F2B84B]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.62fr] lg:items-center lg:px-8">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#850E88]/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#850E88] shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Consultoría gratuita
              </span>
              <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-[#17111A] sm:text-4xl lg:text-[2.75rem]">
                Elige tu solución energética con criterio técnico
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F5A66]">
                Analizamos tu vivienda, negocio o instalación para valorar qué
                sistema encaja mejor: aerotermia, fotovoltaica, geotermia, ACS,
                almacenamiento o una solución combinada.
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#5F5A66]">
                Primero estudiamos tu caso. Después te orientamos sobre la opción
                más adecuada.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#formulario"
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72]"
                >
                  Solicitar consultoría
                  <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-[#850E88]/18 bg-white/85 px-6 py-3.5 text-[0.95rem] font-bold text-[#850E88] shadow-sm backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white"
                >
                  Contactar por WhatsApp
                  <MessageCircle className="h-4 w-4 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 text-xs font-semibold text-[#9C97A5]">
                Sin compromiso · Orientación técnica · Propuesta personalizada
              </p>
            </motion.div>

            <motion.aside
              {...fadeUp}
              className="hidden rounded-[28px] border border-[#D9D9FF]/70 bg-white/90 p-6 shadow-[0_22px_64px_rgba(133,14,136,0.10)] backdrop-blur-xl lg:block"
            >
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#850E88]">
                Proceso consultivo
              </p>
              <div className="mt-4 grid gap-2.5">
                {[
                  { n: "1", label: "Analizamos tu caso" },
                  { n: "2", label: "Comparamos soluciones" },
                  { n: "3", label: "Recomendamos el siguiente paso" },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/60 bg-[#F8F7FF] px-4 py-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#850E88] text-xs font-black text-white">
                      {item.n}
                    </span>
                    <span className="text-sm font-bold text-[#17111A]">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        {/* ── Proceso ─────────────────────────────────────────── */}
        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">

              <motion.div {...fadeUp}>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                  PROCESO
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                  Cómo funciona la consultoría
                </h2>
                <p className="mt-3 text-sm font-semibold italic leading-6 text-[#850E88]/70">
                  Un proceso simple, pero con criterio técnico: primero
                  entendemos el caso, después valoramos alternativas y
                  finalmente orientamos la decisión.
                </p>
                <p className="mt-4 text-base leading-7 text-[#5F5A66]">
                  Antes de recomendar una solución, analizamos tu caso paso a
                  paso para valorar consumo, inmueble, viabilidad técnica,
                  trámites y la opción energética más adecuada.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Sin compromiso", "Orientación técnica", "Propuesta personalizada"].map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#D9D9FF]/80 bg-[#F8F7FF] px-3 py-1.5 text-xs font-bold text-[#17111A]"
                    >
                      <Check className="h-3 w-3 text-[#850E88]" aria-hidden="true" />
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                {processSteps.map((step, i) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#850E88] text-sm font-black text-white shadow-[0_8px_18px_rgba(133,14,136,0.22)]">
                        {step.n}
                      </span>
                      {i < processSteps.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-gradient-to-b from-[#850E88]/25 to-[#D9D9FF]/40" />
                      )}
                    </div>
                    <div className={`flex-1 ${i < processSteps.length - 1 ? "pb-4" : ""}`}>
                      <div className="rounded-[20px] border border-[#D9D9FF]/70 bg-[#F8F7FF] px-5 py-4">
                        <p className="text-sm font-black leading-snug text-[#17111A]">
                          {step.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-[#5F5A66]">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Áreas de consultoría ─────────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#F8F7FF_0%,#EAEAFF_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                ALCANCE
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                Áreas que revisamos en la consultoría
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                La consulta permite valorar tanto la solución energética como los
                trámites, legalización y beneficios asociados al proyecto.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {consultancyAreas.map(({ icon: Icon, title, text, points }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_56px_rgba(133,14,136,0.08)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(133,14,136,0.12)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D9D9FF] bg-[#EAEAFF] text-[#850E88]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-black text-[#17111A]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5F5A66]">{text}</p>
                  <ul className="mt-4 grid gap-1.5">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs font-semibold text-[#5F5A66]">
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#850E88]" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Soluciones que podemos valorar ──────────────────── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                SOLUCIONES
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                Soluciones que podemos valorar en tu caso
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                No todas las soluciones encajan en todos los proyectos. La
                consultoría sirve para elegir con criterio técnico.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="flex gap-4 rounded-[24px] border border-[#D9D9FF]/70 bg-[#F8F7FF] p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_38px_rgba(133,14,136,0.08)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAEAFF] text-[#850E88]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-black text-[#17111A]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#5F5A66]">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Normativa ────────────────────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <motion.div {...fadeUp}>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                  CRITERIO TÉCNICO
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                  Trabajamos con criterio técnico y normativa vigente
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                  Cada proyecto debe estudiarse según el tipo de instalación, el
                  inmueble y la normativa aplicable. Por eso la consultoría no se
                  limita a elegir un producto del catálogo.
                </p>
                <p className="mt-4 text-base leading-7 text-[#5F5A66]">
                  En Maclima valoramos cada proyecto teniendo en cuenta la
                  normativa técnica aplicable, los requisitos de instalación y la
                  documentación necesaria para que la solución sea viable, segura
                  y correctamente tramitada.
                </p>
              </motion.div>

              <motion.div {...fadeUp} className="grid gap-3">
                <p className="text-sm font-black text-[#17111A]">
                  Marco normativo de referencia
                </p>
                {normas.map((norma, i) => (
                  <div
                    key={i}
                    className="rounded-[20px] border border-[#D9D9FF]/80 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAEAFF] text-[10px] font-black text-[#850E88]">
                        {i + 1}
                      </span>
                      <p className="text-xs font-semibold leading-5 text-[#5F5A66]">
                        {norma}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Beneficios, bonificaciones y trámites ───────────── */}
        <section className="bg-[linear-gradient(180deg,#EAEAFF_0%,#FFFFFF_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                BENEFICIOS Y TRÁMITES
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                También revisamos ayudas, bonificaciones y trámites
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5F5A66]">
                Además de la solución técnica, revisamos si el proyecto puede
                beneficiarse de trámites o incentivos asociados, siempre según
                municipio, normativa vigente y características de la instalación.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Bonificaciones",
                  items: [
                    "Posibles bonificaciones de IBI según ayuntamiento",
                    "Deducciones fiscales si aplican",
                    "Incentivos o ayudas disponibles",
                    "Programas autonómicos o municipales",
                  ],
                },
                {
                  icon: Award,
                  title: "CAES",
                  items: [
                    "Revisión de posibles Certificados de Ahorro Energético",
                    "Documentación técnica necesaria",
                    "Estimación orientativa según actuación",
                    "Tramitación o acompañamiento si procede",
                  ],
                },
                {
                  icon: ClipboardCheck,
                  title: "Legalización",
                  items: [
                    "Memoria técnica o proyecto si aplica",
                    "Certificados de instalación",
                    "Registro de autoconsumo",
                    "Coordinación con industria o distribuidora",
                  ],
                },
              ].map(({ icon: Icon, title, items }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_56px_rgba(133,14,136,0.08)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D9D9FF] bg-[#EAEAFF] text-[#850E88]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-black text-[#17111A]">{title}</h3>
                  <ul className="mt-4 grid gap-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-semibold leading-5 text-[#5F5A66]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#850E88]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.p {...fadeUp} className="mx-auto mt-8 max-w-3xl text-center text-sm font-semibold text-[#9C97A5]">
              Las ayudas, bonificaciones y certificados dependen de cada caso,
              municipio, tipo de instalación y requisitos vigentes. Por eso se
              revisan durante la consulta previa.
            </motion.p>
          </div>
        </section>

        {/* ── Catálogo orientativo ─────────────────────────────── */}
        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="rounded-[28px] border border-[#D9D9FF]/70 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_100%)] px-6 py-6 shadow-sm sm:px-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <span className="inline-flex shrink-0 self-start items-center gap-1.5 rounded-full border border-[#850E88]/15 bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] shadow-sm">
                  <FileText className="h-3 w-3" aria-hidden="true" />
                  Catálogo orientativo
                </span>
                <div>
                  <p className="text-sm font-bold leading-6 text-[#17111A]">
                    Las soluciones mostradas en la web sirven como referencia para
                    conocer el alcance de los sistemas con los que trabaja Maclima.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5F5A66]">
                    La elección final no se realiza de forma automática. Tras una
                    consulta previa, analizamos las características de cada
                    vivienda, negocio o instalación y recomendamos la opción que
                    mejor se adapta a sus necesidades reales de eficiencia,
                    confort, ahorro y viabilidad técnica.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Formulario ──────────────────────────────────────── */}
        <section id="formulario" className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_52%,#EAEAFF_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div {...fadeUp}>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                  CONTACTO
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                  Solicita tu consultoría gratuita
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                  Déjanos tus datos y cuéntanos brevemente qué tipo de solución
                  necesitas. Revisaremos tu caso para orientarte sobre el
                  siguiente paso.
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#5F5A66]">
                  La primera consulta es orientativa y sirve para valorar el caso
                  antes de preparar una propuesta técnica o comercial.
                </p>
                <div className="mt-8 grid gap-3">
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    className="group flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3 text-sm font-semibold text-[#17111A] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18"
                  >
                    <MessageCircle className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                    WhatsApp: {CONTACT_INFO.whatsapp}
                  </a>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="group flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3 text-sm font-semibold text-[#17111A] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18"
                  >
                    <Zap className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                    Teléfono: {CONTACT_INFO.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                className="rounded-[30px] border border-[#D9D9FF]/80 bg-white p-6 shadow-[0_26px_80px_rgba(133,14,136,0.12)] sm:p-8"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                  Formulario de solicitud
                </p>
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1.5 text-xs font-black uppercase tracking-[0.10em] text-[#850E88]">
                      Nombre
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="min-h-12 rounded-2xl border border-[#D9D9FF] bg-white px-4 text-sm font-medium text-[#17111A] outline-none transition duration-200 focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)]"
                      />
                    </label>
                    <label className="grid gap-1.5 text-xs font-black uppercase tracking-[0.10em] text-[#850E88]">
                      Teléfono
                      <input
                        type="tel"
                        placeholder="Tu teléfono"
                        className="min-h-12 rounded-2xl border border-[#D9D9FF] bg-white px-4 text-sm font-medium text-[#17111A] outline-none transition duration-200 focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)]"
                      />
                    </label>
                  </div>

                  <label className="grid gap-1.5 text-xs font-black uppercase tracking-[0.10em] text-[#850E88]">
                    Tipo de proyecto
                    <select className="min-h-12 rounded-2xl border border-[#D9D9FF] bg-white px-4 text-sm font-medium text-[#17111A] outline-none transition duration-200 focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)]">
                      {projectTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-1.5 text-xs font-black uppercase tracking-[0.10em] text-[#850E88]">
                    Mensaje (opcional)
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos brevemente tu proyecto o duda"
                      className="rounded-2xl border border-[#D9D9FF] bg-white px-4 py-3 text-sm font-medium text-[#17111A] outline-none transition duration-200 placeholder:text-[#9C97A5] focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)]"
                    />
                  </label>

                  <button
                    type="submit"
                    className="group mt-1 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72]"
                  >
                    Enviar solicitud
                    <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </form>

                <div
                  className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-semibold leading-6 transition duration-200 ${
                    submitted
                      ? "border-[#850E88]/18 bg-[#F8F2FF] text-[#5F5A66]"
                      : "border-[#D9D9FF]/70 bg-[#F8F7FF] text-[#7A7483]"
                  }`}
                >
                  {submitted
                    ? "Solicitud recibida. Te contactaremos para revisar tu caso y orientarte sobre el siguiente paso."
                    : "También puedes contactarnos directamente por WhatsApp para una respuesta más rápida."}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
