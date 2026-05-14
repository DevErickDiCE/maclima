"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Calculator,
  ClipboardList,
  FileText,
  MessageCircle,
  Plug,
  ShieldCheck,
  Sparkles,
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

const reviewItems = [
  {
    n: 1,
    title: "Tipo de vivienda, negocio o instalación",
    text: "Recogemos la información básica del inmueble, el uso previsto y el objetivo principal del proyecto.",
  },
  {
    n: 2,
    title: "Consumo y necesidades energéticas",
    text: "Valoramos demanda energética, potencia contratada, perfil de uso y objetivos de ahorro.",
  },
  {
    n: 3,
    title: "Espacio disponible y condiciones técnicas",
    text: "Revisamos cubierta, orientación, sombras, espacio técnico, captación y acceso a instalaciones existentes.",
  },
  {
    n: 4,
    title: "Posibles soluciones y siguiente paso",
    text: "Comparamos aerotermia, fotovoltaica, geotermia, ACS, baterías o combinaciones y orientamos la decisión.",
  },
] as const;

const consultancyAreas = [
  {
    icon: Calculator,
    title: "Estudios y dimensionamiento",
    text: "Calculamos la solución según consumo, perfil de uso, potencia contratada, superficie, orientación y sombras.",
  },
  {
    icon: ClipboardList,
    title: "Tramitación administrativa",
    text: "Orientamos sobre permisos y gestiones necesarios antes de ejecutar o legalizar una instalación.",
  },
  {
    icon: ShieldCheck,
    title: "Legalización y normativa",
    text: "Revisamos los requisitos técnicos y normativos que pueden afectar a la instalación.",
  },
  {
    icon: TrendingDown,
    title: "Beneficios, ayudas y ahorro",
    text: "Analizamos el potencial de ahorro y las ventajas económicas disponibles según municipio e instalación.",
  },
  {
    icon: Award,
    title: "Certificados energéticos y CAES",
    text: "Valoramos si el proyecto puede apoyarse en certificados energéticos o Certificados de Ahorro Energético.",
  },
  {
    icon: Plug,
    title: "Autoconsumo y excedentes",
    text: "Estudiamos cómo aprovechar la energía generada, reducir consumo de red y gestionar excedentes.",
  },
] as const;

const normas = [
  "Real Decreto 1027/2007, de 20 de julio, por el que se aprueba el Reglamento de Instalaciones Térmicas en los Edificios (RITE) y sus Instrucciones Técnicas Complementarias ITE. Correcciones del RITE.",
  "Real Decreto 314/2006, de 17 de marzo, por el que se aprueba el Código Técnico de la Edificación. Documentos Básicos HE 1 «Ahorro de energía. Limitación de demanda energética», HE 2 «Ahorro de energía. Rendimiento de las instalaciones térmicas», HS 3 «Salubridad. Calidad del aire interior», HS 4 «Salubridad. Suministro de agua», HS 5 «Salubridad. Evacuación de aguas» y SI «Seguridad en caso de incendio».",
  "Reglamento electrotécnico para baja tensión y sus instrucciones técnicas complementarias ITC BT. Real Decreto 842/2002 de 2 de agosto. (BOE N.º 224 de 18/09/2002).",
  "Reglamento de seguridad para plantas e instalaciones frigoríficas.",
] as const;

export default function ConsultoriaGratuitaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_48%,#EAEAFF_100%)] py-12 sm:py-16 lg:py-20">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(133,14,136,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.07)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute right-[-8%] top-0 h-96 w-96 rounded-full bg-[#D9D9FF]/60 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-6%] h-72 w-72 rounded-full bg-[#F2B84B]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:px-8">

            {/* ── Columna izquierda ── */}
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#850E88]/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#850E88] shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Consultoría gratuita
              </span>
              <h1 className="mt-4 max-w-2xl text-[1.9rem] font-black leading-[1.1] text-[#17111A] sm:text-4xl lg:text-[2.65rem]">
                Elige tu solución energética con criterio técnico
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#5F5A66] sm:text-lg sm:leading-8">
                Analizamos tu vivienda, negocio o instalación para valorar qué
                sistema encaja mejor: aerotermia, fotovoltaica, geotermia, ACS,
                almacenamiento o una solución combinada.
              </p>
              <p className="mt-3 text-sm font-bold leading-6 text-[#17111A]">
                Primero estudiamos tu caso. Después te orientamos sobre la opción
                más adecuada.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#formulario"
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.28)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72]"
                >
                  Solicitar consultoría
                  <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-[#850E88]/20 bg-white/90 px-6 py-3.5 text-[0.95rem] font-bold text-[#850E88] shadow-sm backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white"
                >
                  Contactar por WhatsApp
                  <MessageCircle className="h-4 w-4 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-3 text-xs font-semibold text-[#9C97A5]">
                Sin compromiso · Orientación técnica · Propuesta personalizada
              </p>
            </motion.div>

            {/* ── Columna derecha: imagen visual ── */}
            <motion.div
              {...fadeUp}
              className="relative pb-8 sm:pb-10"
            >
              {/* Imagen principal */}
              <div className="relative overflow-hidden rounded-[24px] shadow-[0_32px_96px_rgba(23,17,26,0.18)] sm:rounded-[30px]">
                <Image
                  src="/consulta.webp"
                  alt="Consultoría energética profesional — Maclima analiza cada proyecto antes de recomendar una solución"
                  width={1586}
                  height={992}
                  className="w-full object-cover"
                  priority
                />
                {/* Overlay de profundidad */}
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(133,14,136,0.07)_0%,transparent_45%,rgba(23,17,26,0.26)_100%)]" />

                {/* Etiqueta de soluciones (bottom-left) */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center rounded-full border border-white/30 bg-white/88 px-3 py-1.5 text-[11px] font-black tracking-wide text-[#850E88] shadow-sm backdrop-blur">
                    Aerotermia · Fotovoltaica · Geotermia
                  </span>
                </div>
              </div>

              {/* Card flotante "Estudio previo" (bottom-right, fuera del overflow-hidden) */}
              <div className="absolute bottom-0 right-3 w-[190px] rounded-[18px] border border-[#D9D9FF]/80 bg-white p-4 shadow-[0_20px_50px_rgba(133,14,136,0.16)] sm:right-4 sm:w-[200px]">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#850E88]">
                  Estudio previo
                </p>
                <p className="mt-1 text-xs font-medium leading-[1.45rem] text-[#5F5A66]">
                  Analizamos consumo, inmueble y viabilidad antes de recomendar.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── 2. QUÉ REVISAMOS ────────────────────────────────── */}
        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#850E88] sm:text-sm">
                Primera consulta
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-[#17111A] sm:text-3xl">
                Qué revisamos en la primera consulta
              </h2>
            </motion.div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {reviewItems.map((item) => (
                <motion.div
                  key={item.n}
                  {...fadeUp}
                  className="flex gap-4 rounded-[20px] border border-[#D9D9FF]/70 bg-[#F8F7FF] px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#850E88] text-sm font-black text-white shadow-[0_6px_14px_rgba(133,14,136,0.20)]">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-sm font-black leading-snug text-[#17111A]">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-[#5F5A66]">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. FORMULARIO ───────────────────────────────────── */}
        <section
          id="formulario"
          className="bg-[linear-gradient(180deg,#F8F7FF_0%,#EAEAFF_100%)] py-10 sm:py-14"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div {...fadeUp}>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#850E88] sm:text-sm">
                  Solicitud
                </p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-[#17111A] sm:text-3xl">
                  Cuéntanos tu caso y te orientamos
                </h2>
                <p className="mt-4 text-base leading-7 text-[#5F5A66]">
                  Déjanos tus datos y cuéntanos brevemente qué necesitas. Revisaremos
                  tu caso para orientarte sobre la solución más adecuada antes de
                  preparar ninguna propuesta.
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#5F5A66]">
                  La primera consulta es orientativa y gratuita.
                </p>
                <div className="mt-6 grid gap-2.5">
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3 text-sm font-semibold text-[#17111A] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18"
                  >
                    <MessageCircle className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                    WhatsApp: {CONTACT_INFO.whatsapp}
                  </a>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3 text-sm font-semibold text-[#17111A] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18"
                  >
                    <Zap className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                    Teléfono: {CONTACT_INFO.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <ContactForm
                  projectTypes={projectTypes}
                  origen="Página de consultoría gratuita"
                  eyebrow="Formulario de solicitud"
                  title={null}
                  textareaRows={4}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 4. TAMBIÉN PODEMOS REVISAR ──────────────────────── */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#850E88] sm:text-sm">
                Alcance
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-[#17111A] sm:text-3xl">
                También podemos revisar
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#5F5A66] sm:text-base sm:leading-7">
                La consulta no se limita a elegir un producto. Revisamos trámites,
                legalización, beneficios y viabilidad normativa de cada proyecto.
              </p>
            </motion.div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {consultancyAreas.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="flex gap-4 rounded-[20px] border border-[#D9D9FF]/70 bg-[#F8F7FF] px-5 py-4 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_38px_rgba(133,14,136,0.07)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D9D9FF] bg-white text-[#850E88]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-black leading-snug text-[#17111A]">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-[#5F5A66]">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. NORMATIVA ────────────────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] py-10 sm:py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="rounded-[24px] border border-[#D9D9FF]/70 bg-white p-6 shadow-[0_12px_36px_rgba(23,17,26,0.05)] sm:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D9D9FF] bg-[#F8F7FF] text-[#850E88]">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#17111A]">
                    Marco normativo de referencia
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[#5F5A66]">
                    Trabajamos con criterio técnico y normativa vigente en cada proyecto.
                  </p>
                </div>
              </div>
              <ul className="mt-5 grid gap-2.5">
                {normas.map((norma, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-[#D9D9FF]/70 bg-[#FDFDFF] px-4 py-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAEAFF] text-[10px] font-black text-[#850E88]">
                      {i + 1}
                    </span>
                    <p className="text-xs font-semibold leading-5 text-[#5F5A66]">{norma}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── 6. CATÁLOGO ORIENTATIVO ─────────────────────────── */}
        <section className="bg-white py-8 sm:py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="flex flex-col gap-3 rounded-[20px] border border-[#D9D9FF]/70 bg-[#F8F7FF] px-5 py-5 sm:flex-row sm:items-start sm:gap-5 sm:px-7"
            >
              <span className="inline-flex shrink-0 self-start items-center gap-1.5 rounded-full border border-[#850E88]/15 bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] shadow-sm">
                <FileText className="h-3 w-3" aria-hidden="true" />
                Catálogo orientativo
              </span>
              <div>
                <p className="text-sm font-bold leading-6 text-[#17111A]">
                  Las soluciones mostradas en la web sirven como referencia para
                  conocer el alcance de los sistemas con los que trabaja Maclima.
                </p>
                <p className="mt-1.5 text-sm leading-6 text-[#5F5A66]">
                  La elección final no se realiza de forma automática. Tras una
                  consulta previa, analizamos las características de cada vivienda,
                  negocio o instalación y recomendamos la opción que mejor se adapta
                  a sus necesidades reales de eficiencia, confort, ahorro y
                  viabilidad técnica.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ───────────────────────────────────────── */}
        <section className="bg-[linear-gradient(135deg,#17111A_0%,#2A1830_62%,#850E88_100%)] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              ¿Listo para analizar tu proyecto?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#D9D9FF]">
              Solicita tu consultoría gratuita y te orientamos antes de presupuestar.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#formulario"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[0.95rem] font-bold text-[#850E88] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF]"
              >
                Solicitar consultoría
                <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={CONTACT_INFO.whatsappHref}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-[0.95rem] font-bold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/15"
              >
                Contactar por WhatsApp
                <MessageCircle className="h-4 w-4 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
