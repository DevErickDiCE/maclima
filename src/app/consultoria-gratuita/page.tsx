"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BatteryCharging,
  Building2,
  Check,
  ClipboardList,
  Droplets,
  FileText,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  ThermometerSun,
  TrendingDown,
  Zap,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";
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

const heroBenefits = [
  "Estudio previo sin compromiso",
  "Orientación técnica personalizada",
  "Solución adaptada al proyecto real",
] as const;

const reviewItems = [
  {
    n: 1,
    title: "Tipo de inmueble o instalación",
    text: "Revisamos si se trata de una vivienda, negocio, comunidad, reforma, obra nueva o instalación profesional, porque cada caso requiere criterios distintos de diseño y dimensionamiento.",
  },
  {
    n: 2,
    title: "Consumo y necesidades energéticas",
    text: "Valoramos el uso previsto, horarios, demanda de calefacción, refrigeración, ACS, consumo eléctrico y objetivos de ahorro para entender qué solución puede tener más sentido.",
  },
  {
    n: 3,
    title: "Espacio disponible y condiciones técnicas",
    text: "Analizamos cubierta, orientación, sombras, sala técnica, ubicación de equipos, acceso, instalación existente y posibles condicionantes del inmueble.",
  },
  {
    n: 4,
    title: "Soluciones posibles y siguiente paso",
    text: "Comparamos alternativas como aerotermia, fotovoltaica, geotermia, acumulación, baterías o soluciones combinadas, y te orientamos sobre la opción más viable antes de preparar una propuesta.",
  },
] as const;

const processSteps = [
  {
    n: 1,
    title: "Nos cuentas tu caso",
    text: "Recogemos información básica sobre el inmueble, el uso previsto, el consumo aproximado y el objetivo principal: ahorro, confort, renovación de equipos, autoconsumo o mejora de eficiencia.",
  },
  {
    n: 2,
    title: "Analizamos consumo, espacio y necesidades",
    text: "Revisamos demanda energética, potencia contratada, superficie disponible, orientación, sombras, sala técnica, ACS, climatización, acumulación o almacenamiento.",
  },
  {
    n: 3,
    title: "Estudiamos la solución más adecuada",
    text: "Comparamos si encaja mejor aerotermia, fotovoltaica, geotermia, baterías, acumulación o una combinación de sistemas según las condiciones reales del proyecto.",
  },
  {
    n: 4,
    title: "Revisamos trámites y viabilidad",
    text: "Tenemos en cuenta permisos, legalización, normativa, certificaciones, posibles ayudas, bonificaciones y requisitos técnicos aplicables según el tipo de instalación.",
  },
  {
    n: 5,
    title: "Orientamos el siguiente paso",
    text: "Te indicamos si merece la pena avanzar con una propuesta técnica o comercial, qué datos faltan y qué solución parece más razonable según tu caso concreto.",
  },
] as const;

const solutions = [
  {
    icon: ThermometerSun,
    title: "Aerotermia",
    text: "Para calefacción, refrigeración y agua caliente sanitaria, especialmente en viviendas, reformas, negocios o instalaciones que buscan sustituir sistemas tradicionales y mejorar eficiencia.",
  },
  {
    icon: Sun,
    title: "Fotovoltaica",
    text: "Para generar electricidad propia, reducir consumo de red, aprovechar cubierta disponible y estudiar autoconsumo con o sin excedentes.",
  },
  {
    icon: Layers,
    title: "Geotermia",
    text: "Para proyectos donde se busca alta estabilidad térmica aprovechando la temperatura constante del terreno, siempre con estudio previo de viabilidad.",
  },
  {
    icon: Droplets,
    title: "ACS y acumulación",
    text: "Para producción de agua caliente sanitaria, acumuladores, termoacumuladores y sistemas de apoyo según el consumo real de la vivienda o instalación.",
  },
  {
    icon: BatteryCharging,
    title: "Baterías y almacenamiento",
    text: "Para aprovechar excedentes solares, mejorar autoconsumo, gestionar horarios de uso y reducir dependencia de la red según el perfil de consumo.",
  },
  {
    icon: Building2,
    title: "Instalaciones profesionales",
    text: "Para negocios, comunidades, instaladores o proyectos con necesidades técnicas específicas donde conviene estudiar dimensionamiento, compatibilidades y normativa.",
  },
] as const;

const supportAreas = [
  {
    icon: TrendingDown,
    title: "Bonificaciones, ayudas y ahorro",
    text: "Revisamos posibles bonificaciones de IBI, deducciones fiscales, subvenciones disponibles, incentivos autonómicos o municipales y estimación de ahorro según el tipo de instalación.",
  },
  {
    icon: Award,
    title: "CAES y certificados energéticos",
    text: "Valoramos si el proyecto puede apoyarse en certificados energéticos o Certificados de Ahorro Energético cuando proceda, junto con la documentación técnica necesaria.",
  },
  {
    icon: ShieldCheck,
    title: "Legalización y normativa",
    text: "Revisamos memoria técnica, certificados de instalación, registro de autoconsumo, coordinación con distribuidora o industria y otros requisitos según el tipo de proyecto.",
  },
] as const;

const normas = [
  "Real Decreto 1027/2007, de 20 de julio, por el que se aprueba el Reglamento de Instalaciones Térmicas en los Edificios (RITE) y sus Instrucciones Técnicas Complementarias ITE. Correcciones del RITE.",
  "Real Decreto 314/2006, de 17 de marzo, por el que se aprueba el Código Técnico de la Edificación. Documentos Básicos HE 1 «Ahorro de energía. Limitación de demanda energética», HE 2 «Ahorro de energía. Rendimiento de las instalaciones térmicas», HS 3 «Salubridad. Calidad del aire interior», HS 4 «Salubridad. Suministro de agua», HS 5 «Salubridad. Evacuación de aguas» y SI «Seguridad en caso de incendio».",
  "Reglamento electrotécnico para baja tensión y sus instrucciones técnicas complementarias ITC BT. Real Decreto 842/2002 de 2 de agosto. (BOE N.º 224 de 18/09/2002).",
  "Reglamento de seguridad para plantas e instalaciones frigoríficas.",
] as const;

function FormWithParams() {
  const params = useSearchParams();
  const tipoParam = params.get("tipo") ?? undefined;
  return (
    <ContactForm
      projectTypes={projectTypes}
      origen="Página de consultoría gratuita"
      eyebrow="Formulario de solicitud"
      title={null}
      textareaRows={4}
      defaultTipo={tipoParam}
    />
  );
}

export default function ConsultoriaGratuitaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_46%,#EAEAFF_100%)] pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(133,14,136,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.07)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute right-[-12%] top-[-14%] h-[520px] w-[520px] rounded-full bg-[#D9D9FF]/55 blur-3xl" />
          <div className="absolute bottom-[-24%] left-[-8%] h-80 w-80 rounded-full bg-[#F2B84B]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1.3fr] lg:gap-8 lg:px-8">

            {/* Columna izquierda */}
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#850E88]/15 bg-white/85 px-3.5 py-1.5 text-[10.5px] font-black uppercase tracking-[0.20em] text-[#850E88] shadow-sm backdrop-blur">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Consultoría gratuita
              </span>
              <h1 className="mt-4 text-[1.8rem] font-black leading-[1.08] tracking-[-0.01em] text-[#17111A] sm:text-[2.15rem] lg:text-[2.25rem]">
                Elige la solución energética adecuada para tu vivienda, negocio o instalación
              </h1>
              <p className="mt-5 text-[15px] leading-[1.7] text-[#5F5A66]">
                En Maclima estudiamos tu caso antes de recomendar una solución.
                Analizamos el tipo de inmueble, consumo, espacio disponible,
                instalación existente y objetivos de ahorro para valorar si encaja
                mejor aerotermia, fotovoltaica, geotermia, ACS, almacenamiento o
                una solución combinada.
              </p>
              <div className="mt-4 flex items-start gap-2.5">
                <span className="mt-2 h-0.5 w-6 shrink-0 rounded-full bg-[#850E88]" />
                <p className="text-sm font-bold leading-6 text-[#17111A]">
                  No partimos de un producto. Partimos de tu necesidad real.
                </p>
              </div>

              {/* Beneficios sutiles */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-[#5F5A66]">
                {heroBenefits.map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5">
                    <Check className="h-2.5 w-2.5 shrink-0 text-[#850E88]" aria-hidden="true" />
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <a
                  href="#formulario"
                  className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-3.5 text-[0.9rem] font-bold text-white shadow-[0_20px_48px_rgba(133,14,136,0.32)] ring-1 ring-[#850E88]/40 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] sm:w-auto"
                >
                  <span className="whitespace-nowrap">Solicitar consultoría gratuita</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-[0.9rem] font-semibold text-[#5F5A66] shadow-sm ring-1 ring-[#D9D9FF] transition duration-200 ease-out hover:-translate-y-0.5 hover:text-[#850E88] hover:ring-[#850E88]/30 sm:w-auto"
                >
                  <span className="whitespace-nowrap">Contactar por WhatsApp</span>
                  <MessageCircle className="h-4 w-4 shrink-0 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-2.5 text-[11px] font-medium text-[#9C97A5]">
                Para viviendas, negocios, comunidades y profesionales del sector.
              </p>
            </motion.div>

            {/* Columna derecha: imagen */}
            <motion.div {...fadeUp} className="relative pb-10 sm:pb-12 lg:pb-12">
              {/* Glow suave detrás */}
              <div className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-[48px] bg-[radial-gradient(ellipse_at_55%_50%,rgba(133,14,136,0.16),transparent_65%)] blur-2xl" />

              <div className="relative overflow-hidden rounded-[26px] ring-1 ring-[#D9D9FF]/50 shadow-[0_44px_120px_rgba(23,17,26,0.22)] sm:rounded-[32px]">
                <Image
                  src="/consulta.webp"
                  alt="Consultoría energética profesional — Maclima analiza cada proyecto antes de recomendar una solución"
                  width={1586}
                  height={992}
                  className="w-full scale-[1.07] object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(133,14,136,0.10)_0%,transparent_40%,rgba(23,17,26,0.30)_100%)]" />

                {/* Tag sutil arriba */}
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-md">
                    Aerotermia · Fotovoltaica · Geotermia
                  </span>
                </div>
              </div>

              {/* Card flotante refinada — glass */}
              <div className="absolute -bottom-2 right-2 w-[158px] rounded-[14px] border border-white/60 bg-white/82 p-3 shadow-[0_16px_40px_rgba(133,14,136,0.20)] backdrop-blur-md sm:-bottom-3 sm:right-3 sm:w-[178px] sm:p-3.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#850E88]/12 text-[#850E88]">
                    <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
                  </span>
                  <p className="text-[9.5px] font-black uppercase tracking-[0.14em] text-[#850E88]">
                    Estudio previo
                  </p>
                </div>
                <p className="mt-1 text-[11px] font-medium leading-[1.5] text-[#5F5A66]">
                  Analizamos consumo, inmueble y viabilidad antes de recomendar.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── 2. QUÉ REVISAMOS ────────────────────────────────── */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="text-[10.5px] font-black uppercase tracking-[0.20em] text-[#850E88]">
                Primera consulta
              </p>
              <h2 className="mt-2 text-2xl font-black leading-[1.15] tracking-[-0.01em] text-[#17111A] sm:text-[1.85rem]">
                Qué revisamos en la primera consulta
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#5F5A66]">
                La primera consulta nos sirve para entender el punto de partida
                del proyecto y evitar recomendaciones genéricas. Con esa información
                podemos orientar mejor la solución, detectar limitaciones técnicas
                y definir el siguiente paso.
              </p>
            </motion.div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {reviewItems.map((item) => (
                <motion.div
                  key={item.n}
                  {...fadeUp}
                  className="group flex gap-4 rounded-[20px] border border-[#D9D9FF]/60 bg-white p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/25 hover:shadow-[0_18px_48px_rgba(133,14,136,0.08)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8F7FF] text-[11px] font-black tracking-wider text-[#850E88] ring-1 ring-[#850E88]/15 transition duration-200 group-hover:bg-[#850E88] group-hover:text-white group-hover:ring-[#850E88]">
                    {item.n.toString().padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="text-[15px] font-black leading-snug text-[#17111A]">{item.title}</p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#5F5A66]">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CÓMO FUNCIONA ────────────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF9FF_100%)] py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
              <motion.div {...fadeUp}>
                <p className="text-[10.5px] font-black uppercase tracking-[0.20em] text-[#850E88]">
                  Proceso
                </p>
                <h2 className="mt-2 text-2xl font-black leading-[1.15] tracking-[-0.01em] text-[#17111A] sm:text-[1.85rem]">
                  Cómo funciona la consultoría
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#5F5A66]">
                  El proceso es sencillo: primero entendemos tu caso, después
                  revisamos las alternativas posibles y finalmente te indicamos
                  qué solución merece la pena estudiar con más detalle.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#5F5A66]">
                  {["Sin compromiso", "Orientación técnica", "Propuesta personalizada"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5">
                      <Check className="h-3 w-3 shrink-0 text-[#850E88]" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                {processSteps.map((step, i) => (
                  <div key={step.n} className="flex gap-3.5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#850E88] text-[11px] font-black text-white shadow-[0_4px_12px_rgba(133,14,136,0.30)]">
                        {step.n}
                      </span>
                      {i < processSteps.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-gradient-to-b from-[#850E88]/25 via-[#D9D9FF]/40 to-transparent" />
                      )}
                    </div>
                    <div className={`flex-1 ${i < processSteps.length - 1 ? "pb-2.5" : ""}`}>
                      <div className="rounded-[16px] border border-[#D9D9FF]/55 bg-white px-4 py-3 shadow-[0_4px_18px_rgba(23,17,26,0.04)] transition duration-200 hover:border-[#850E88]/20 hover:shadow-[0_10px_28px_rgba(133,14,136,0.08)]">
                        <p className="text-[14.5px] font-black leading-snug text-[#17111A]">{step.title}</p>
                        <p className="mt-1 text-[13px] leading-[1.6] text-[#5F5A66]">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 4. FORMULARIO ───────────────────────────────────── */}
        <section
          id="formulario"
          className="bg-[linear-gradient(180deg,#EAEAFF_0%,#F8F7FF_100%)] py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-12">
              <motion.div {...fadeUp}>
                <p className="text-[10.5px] font-black uppercase tracking-[0.20em] text-[#850E88]">
                  Solicitud
                </p>
                <h2 className="mt-2 text-2xl font-black leading-[1.15] tracking-[-0.01em] text-[#17111A] sm:text-[1.85rem]">
                  Cuéntanos tu caso y te orientamos
                </h2>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#5F5A66]">
                  Déjanos tus datos y cuéntanos brevemente qué necesitas.
                  Revisaremos tu caso y te contactaremos para orientarte sobre
                  la solución más adecuada antes de preparar ninguna propuesta.
                </p>
                <div className="mt-4 flex items-start gap-2.5">
                  <span className="mt-2 h-0.5 w-7 shrink-0 rounded-full bg-[#850E88]" />
                  <p className="text-sm font-bold leading-6 text-[#17111A]">
                    La primera consulta es orientativa y gratuita.
                  </p>
                </div>
                <div className="mt-6 grid gap-2">
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/60 bg-white px-4 py-3 text-sm font-semibold text-[#17111A] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/25 hover:shadow-sm"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#850E88]" aria-hidden="true" />
                    WhatsApp: {CONTACT_INFO.whatsapp}
                  </a>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/60 bg-white px-4 py-3 text-sm font-semibold text-[#17111A] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/25 hover:shadow-sm"
                  >
                    <Zap className="h-4 w-4 shrink-0 text-[#850E88]" aria-hidden="true" />
                    Teléfono: {CONTACT_INFO.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <Suspense
                  fallback={
                    <ContactForm
                      projectTypes={projectTypes}
                      origen="Página de consultoría gratuita"
                      eyebrow="Formulario de solicitud"
                      title={null}
                      textareaRows={4}
                    />
                  }
                >
                  <FormWithParams />
                </Suspense>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 5. SOLUCIONES QUE PODEMOS VALORAR ──────────────── */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="text-[10.5px] font-black uppercase tracking-[0.20em] text-[#850E88]">
                Soluciones
              </p>
              <h2 className="mt-2 text-2xl font-black leading-[1.15] tracking-[-0.01em] text-[#17111A] sm:text-[1.85rem]">
                Soluciones que podemos valorar en tu caso
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#5F5A66]">
                No todas las soluciones encajan en todos los proyectos. La
                consultoría sirve para decidir con criterio técnico qué sistema
                puede aportar más eficiencia, ahorro y viabilidad.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {solutions.map(({ icon: Icon, title, text }, i) => {
                const featured = i < 3;
                return (
                  <motion.div
                    key={title}
                    {...fadeUp}
                    className={`group relative flex gap-4 rounded-[20px] border p-5 transition duration-200 ease-out hover:-translate-y-0.5 ${
                      featured
                        ? "border-[#850E88]/18 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_100%)] shadow-[0_14px_44px_rgba(133,14,136,0.07)] hover:border-[#850E88]/35 hover:shadow-[0_22px_56px_rgba(133,14,136,0.14)]"
                        : "border-[#D9D9FF]/55 bg-white hover:border-[#850E88]/20 hover:shadow-[0_16px_42px_rgba(133,14,136,0.08)]"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition duration-200 ${
                        featured
                          ? "bg-[#850E88] text-white shadow-[0_8px_22px_rgba(133,14,136,0.30)] group-hover:scale-105"
                          : "border border-[#D9D9FF] bg-[#F8F7FF] text-[#850E88] group-hover:border-[#850E88]/30"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <p className="text-[15px] font-black leading-snug text-[#17111A]">{title}</p>
                      <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#5F5A66]">{text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 6. TAMBIÉN PODEMOS REVISAR ──────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#FAF9FF_0%,#EAEAFF_100%)] py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="text-[10.5px] font-black uppercase tracking-[0.20em] text-[#850E88]">
                Alcance
              </p>
              <h2 className="mt-2 text-2xl font-black leading-[1.15] tracking-[-0.01em] text-[#17111A] sm:text-[1.85rem]">
                También podemos revisar ayudas, trámites y viabilidad
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#5F5A66]">
                Además de la solución técnica, valoramos si el proyecto puede
                beneficiarse de trámites, incentivos o requisitos administrativos
                asociados, siempre según municipio, normativa vigente y
                características de la instalación.
              </p>
            </motion.div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {supportAreas.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="group rounded-[20px] border border-[#D9D9FF]/55 bg-white p-5 shadow-[0_12px_36px_rgba(133,14,136,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/25 hover:shadow-[0_18px_48px_rgba(133,14,136,0.12)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F7FF] text-[#850E88] ring-1 ring-[#850E88]/12 transition duration-200 group-hover:bg-[#850E88] group-hover:text-white group-hover:ring-[#850E88]">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-black leading-snug text-[#17111A]">{title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#5F5A66]">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. NORMATIVA ────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <div className="mb-6 max-w-3xl">
                <p className="text-[10.5px] font-black uppercase tracking-[0.20em] text-[#850E88]">
                  Criterio técnico
                </p>
                <h2 className="mt-2 text-xl font-black leading-[1.2] tracking-[-0.01em] text-[#17111A] sm:text-2xl">
                  Trabajamos con criterio técnico y normativa vigente
                </h2>
                <p className="mt-3 text-sm leading-[1.7] text-[#5F5A66]">
                  Cada proyecto debe estudiarse según el tipo de instalación, el inmueble
                  y la normativa aplicable. Por eso la consultoría no se limita a elegir
                  un producto del catálogo: también revisa la viabilidad técnica,
                  documental y administrativa cuando sea necesario.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#D9D9FF]/55 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFAFF_100%)] p-5 shadow-[0_12px_36px_rgba(23,17,26,0.04)] sm:p-7">
                <div className="flex items-center gap-3 border-b border-[#D9D9FF]/60 pb-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8F7FF] text-[#850E88] ring-1 ring-[#850E88]/12">
                    <ClipboardList className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#850E88]">
                      Marco normativo
                    </p>
                    <p className="text-xs font-bold text-[#17111A]">
                      Referencias legales aplicables
                    </p>
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  {normas.map((norma, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-xl border border-[#D9D9FF]/45 bg-white px-4 py-3 transition duration-200 hover:border-[#850E88]/20"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F8F7FF] text-[10px] font-black text-[#850E88] ring-1 ring-[#850E88]/15">
                        {i + 1}
                      </span>
                      <p className="text-[12.5px] font-medium leading-[1.65] text-[#5F5A66]">{norma}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 8. CATÁLOGO ORIENTATIVO ─────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF9FF_100%)] py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="rounded-[24px] border border-[#D9D9FF]/55 bg-[linear-gradient(135deg,#FFFFFF_0%,#FBFAFF_100%)] p-6 shadow-[0_14px_44px_rgba(133,14,136,0.07)] sm:p-8 lg:p-9"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F8F7FF] text-[#850E88] ring-1 ring-[#850E88]/15">
                      <FileText className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h2 className="text-lg font-black leading-snug tracking-[-0.01em] text-[#17111A] sm:text-xl">
                      Catálogo orientativo
                    </h2>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#5F5A66]">
                    Las soluciones mostradas en la web sirven como referencia para
                    conocer el tipo de sistemas con los que trabaja Maclima. La
                    elección final no se realiza de forma automática: primero
                    analizamos el inmueble, el consumo, la viabilidad técnica y las
                    necesidades reales del proyecto.
                  </p>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-[#9C97A5]">
                    Después de la consulta, recomendamos la opción que mejor encaja
                    por eficiencia, confort, ahorro y presupuesto.
                  </p>
                </div>
                <Link
                  href="/catalogo"
                  className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(133,14,136,0.22)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] lg:w-auto lg:shrink-0"
                >
                  Ver catálogo consultivo
                  <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ───────────────────────────────────────── */}
        <section className="bg-[#0F0A14] py-14 sm:py-18">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(135deg,#1C1320_0%,#2A1830_48%,#6f0b72_100%)] px-6 py-12 text-center shadow-[0_36px_96px_rgba(133,14,136,0.32)] sm:px-12 sm:py-16 sm:rounded-[36px]">
              <div className="pointer-events-none absolute right-[-12%] top-[-30%] h-80 w-80 rounded-full bg-[#D9D9FF]/15 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-35%] left-[-10%] h-72 w-72 rounded-full bg-[#850E88]/40 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85),transparent)]" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.20em] text-white/95 backdrop-blur">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Consultoría sin compromiso
                </span>
                <h2 className="mt-5 text-[1.75rem] font-black leading-[1.1] tracking-[-0.01em] text-white sm:text-[2rem] lg:text-[2.3rem]">
                  ¿Listo para analizar tu proyecto?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-[#E5E0EE]">
                  Solicita tu consultoría gratuita y te orientamos antes de presupuestar.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#formulario"
                    className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[0.95rem] font-bold text-[#850E88] shadow-[0_20px_44px_rgba(0,0,0,0.22)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF] sm:w-auto"
                  >
                    Solicitar consultoría gratuita
                    <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] px-6 py-3.5 text-[0.95rem] font-bold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/[0.12] sm:w-auto"
                  >
                    Contactar por WhatsApp
                    <MessageCircle className="h-4 w-4 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
