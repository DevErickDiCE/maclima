import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Droplets,
  Home,
  Layers,
  MessageCircle,
  Smartphone,
  Snowflake,
  ThermometerSun,
  Wind,
  Zap,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { CONTACT_INFO } from "@/lib/contact-info";

export const metadata: Metadata = {
  title: "BEN Dual-Air — Aerotermia interior sin unidad exterior",
  description:
    "BEN Dual-Air es una solución de aerotermia interior compacta para climatización, ventilación y ACS, ideal para pisos, viviendas unifamiliares, obra nueva y reformas sin unidad exterior visible.",
  alternates: {
    canonical: "/catalogo/ben-dual-air",
  },
  openGraph: {
    title: "BEN Dual-Air — Aerotermia interior sin unidad exterior | Maclima",
    description:
      "Climatización, ventilación y ACS en una solución compacta sin unidad exterior. Ideal para pisos, viviendas unifamiliares, obra nueva y reformas.",
    url: "/catalogo/ben-dual-air",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/imagen/BEN-Dual-AIR/ben-100-electric-format.webp",
        width: 800,
        height: 800,
        alt: "BEN Dual-Air — Sistema de aerotermia interior compacto",
      },
    ],
  },
};

const heroBenefits = [
  {
    label: "Sin unidad exterior",
    desc: "Sin equipos visibles en fachada o terraza.",
  },
  {
    label: "Ideal para pisos y unifamiliares",
    desc: "Pensado para viviendas con espacio exterior limitado.",
  },
  {
    label: "Instalación aprox. 3 h",
    desc: "En condiciones adecuadas.",
    note: true,
  },
] as const;

const differentials = [
  {
    icon: Home,
    title: "Sin equipos visibles en fachada",
    text: "Evita ocupar fachada, terraza o cubierta con una unidad exterior convencional.",
  },
  {
    icon: Layers,
    title: "Solución compacta interior",
    text: "Integra climatización, ventilación y ACS en una configuración preparada para viviendas modernas.",
  },
  {
    icon: Clock,
    title: "Menos molestias de instalación",
    text: "En condiciones adecuadas, el montaje puede realizarse en aproximadamente 3 horas.",
  },
] as const;

const idealFor = [
  "Pisos y apartamentos",
  "Viviendas unifamiliares",
  "Comunidades con limitaciones de fachada",
  "Obra nueva eficiente",
  "Reformas energéticas",
  "Proyectos sin unidad exterior visible",
] as const;

const functions = [
  {
    icon: ThermometerSun,
    title: "Calefacción",
    text: "Confort térmico eficiente en meses fríos.",
  },
  {
    icon: Snowflake,
    title: "Refrigeración",
    text: "Apoyo para climatización en verano.",
  },
  {
    icon: Droplets,
    title: "Agua caliente sanitaria",
    text: "Producción de ACS para el uso diario.",
  },
  {
    icon: Wind,
    title: "Ventilación",
    text: "Trabaja con aire de ventilación, exterior o combinación de ambos.",
  },
  {
    icon: Smartphone,
    title: "Control remoto",
    text: "Compatible con control y seguimiento del sistema según configuración.",
  },
] as const;

const installationSteps = [
  "Revisamos tu vivienda o proyecto",
  "Confirmamos viabilidad técnica",
  "Definimos configuración del sistema",
  "Instalación en condiciones adecuadas (aprox. 3 horas)",
  "Puesta en marcha y explicación de uso",
] as const;

export default function BenDualAirPage() {
  return (
    <div className="min-h-screen bg-white text-[#17111A]">
      <SiteHeader />
      <main>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_52%,#EAEAFF_100%)] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 rounded-xl border border-[#850E88]/15 bg-white px-4 py-2.5 text-sm font-bold text-[#850E88] shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al catálogo
            </Link>

            <article className="mt-6 overflow-hidden rounded-[34px] border border-[#D9D9FF]/80 bg-[radial-gradient(circle_at_10%_12%,rgba(217,217,255,0.8),transparent_30%),linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_52%,#EAEAFF_100%)] p-5 shadow-[0_28px_88px_rgba(133,14,136,0.13)] sm:p-7 lg:p-9">
              <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">

                <div className="relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/80 bg-[#17111A] shadow-[0_28px_84px_rgba(23,17,26,0.18)] sm:min-h-[420px] lg:min-h-[440px]">
                  <Image
                    src="/imagen/BEN-Dual-AIR/electric-bruin.webp"
                    alt="BEN Dual-Air sistema de aerotermia interior compacto instalado en vivienda"
                    fill
                    priority
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover object-[56%_center]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,26,0)_0%,rgba(23,17,26,0.34)_100%)]" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#850E88] shadow-sm backdrop-blur">
                    Producto estrella en aerotermia
                  </span>
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                    PRODUCTO ESTRELLA EN AEROTERMIA
                  </p>
                  <h1 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl lg:text-[2.5rem]">
                    BEN Dual-Air: aerotermia interior sin unidad exterior
                  </h1>
                  <p className="mt-4 text-base leading-7 text-[#5F5A66]">
                    Climatización, ventilación y agua caliente sanitaria en una
                    solución compacta para pisos, viviendas unifamiliares, obra
                    nueva y reformas.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5F5A66]">
                    BEN Dual-Air es una bomba de calor interior que puede
                    integrar calefacción, refrigeración, ventilación y ACS sin
                    unidad exterior visible, una ventaja importante cuando no se
                    quiere ocupar fachada, terraza o cubierta.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {heroBenefits.map((b) => (
                      <div
                        key={b.label}
                        className="rounded-2xl border border-[#D9D9FF]/75 bg-white/90 px-3 py-3 text-center shadow-sm"
                      >
                        <span className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#EAEAFF] text-[#850E88]">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <p className="text-xs font-bold leading-snug text-[#17111A]">
                          {b.label}
                          {"note" in b && b.note ? (
                            <span className="ml-0.5 text-[9px] font-semibold text-[#9C97A5]">*</span>
                          ) : null}
                        </p>
                        <p className="mt-1 text-[11px] font-medium leading-4 text-[#5F5A66]">
                          {b.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-[11px] font-semibold text-[#9C97A5]">
                    * Según condiciones de instalación y viabilidad técnica.
                  </p>

                  <div className="mt-6">
                    <Link
                      href="/contacto"
                      className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] sm:w-auto"
                    >
                      Solicitar asesoramiento sobre BEN Dual-Air
                      <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── Galería ────────────────────────────────────────────── */}
        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
              GALERÍA DE PRODUCTO
            </p>
            <h2 className="mt-3 text-2xl font-black text-[#17111A] sm:text-3xl">
              BEN Dual-Air en detalle
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.4fr_1fr_1fr]">
              <div className="relative min-h-[280px] overflow-hidden rounded-[28px] border border-[#D9D9FF]/70 bg-[#F8F7FF] shadow-[0_22px_64px_rgba(23,17,26,0.10)] sm:min-h-[360px] sm:row-span-2 lg:row-span-1 lg:min-h-[340px]">
                <Image
                  src="/imagen/BEN-Dual-AIR/ben-100-electric-format.webp"
                  alt="Unidad interior BEN Dual-Air para aerotermia compacta"
                  fill
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 55vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="relative min-h-[200px] overflow-hidden rounded-[28px] border border-[#D9D9FF]/70 bg-[#17111A] shadow-[0_22px_64px_rgba(23,17,26,0.12)] sm:min-h-0 lg:min-h-[340px]">
                <Image
                  src="/imagen/BEN-Dual-AIR/electric-bruin.webp"
                  alt="Sistema BEN Dual-Air para climatización, ventilación y ACS"
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 100vw"
                  className="object-cover object-[56%_center]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(23,17,26,0.25)_100%)]" />
              </div>
              <div className="relative min-h-[200px] overflow-hidden rounded-[28px] border border-[#D9D9FF]/70 bg-[#EAEAFF] shadow-[0_22px_64px_rgba(133,14,136,0.10)] sm:min-h-0 lg:min-h-[340px]">
                <Image
                  src="/imagen/BEN-Dual-AIR/ben-stat-4-png.webp"
                  alt="Termostato BEN Stat para control del sistema de aerotermia"
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Por qué es diferente ────────────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#F8F7FF_0%,#EAEAFF_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                DIFERENCIAL BEN DUAL-AIR
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                Aerotermia sin unidad exterior visible
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                A diferencia de las soluciones tradicionales con unidad
                exterior, BEN Dual-Air concentra el sistema en una unidad
                interior compacta. Esto facilita su integración en pisos,
                comunidades, viviendas con limitaciones de fachada o proyectos
                donde se busca una instalación limpia y discreta.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {differentials.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_22px_70px_rgba(133,14,136,0.08)] sm:p-7"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9D9FF] bg-[#EAEAFF] text-[#850E88] shadow-sm">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-[#17111A]">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#5F5A66]">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-center text-sm font-semibold text-[#9C97A5]">
              La viabilidad depende del inmueble, configuración técnica y
              condiciones de instalación. Revisamos cada caso antes de
              recomendar.
            </p>
          </div>
        </section>

        {/* ── Ideal para ──────────────────────────────────────────── */}
        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                  PERFIL DE PROYECTO
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                  Ideal para pisos, viviendas unifamiliares y reformas
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                  Pensado para viviendas donde no se quiere ocupar fachada,
                  terraza o cubierta con una unidad exterior convencional.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {idealFor.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D9D9FF]/80 bg-[#F8F7FF] px-4 py-2.5 text-sm font-bold text-[#17111A]"
                  >
                    <Check className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Funciones integradas ─────────────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_42%,#EAEAFF_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                  FUNCIONES INTEGRADAS
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                  Climatización, ventilación y ACS en una unidad compacta
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {functions.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-4 rounded-[22px] border border-[#D9D9FF]/70 bg-white p-4 shadow-[0_14px_38px_rgba(133,14,136,0.07)]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAEAFF] text-[#850E88]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-black text-[#17111A]">{title}</p>
                        <p className="mt-1 text-xs leading-5 text-[#5F5A66]">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative min-h-[280px] overflow-hidden rounded-[28px] border border-[#D9D9FF]/70 bg-[#EAEAFF] shadow-[0_22px_64px_rgba(133,14,136,0.12)] sm:min-h-[340px]">
                  <Image
                    src="/imagen/BEN-Dual-AIR/ben-stat-4-png.webp"
                    alt="Termostato BEN Stat para control del sistema de aerotermia"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-contain p-8"
                  />
                </div>
                <div className="rounded-[22px] border border-[#D9D9FF]/80 bg-white px-5 py-4 text-sm font-semibold leading-6 text-[#5F5A66] shadow-sm">
                  <span className="font-black text-[#850E88]">BEN Stat:</span>{" "}
                  Control y seguimiento del sistema con termostato conectado, según
                  configuración del proyecto.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Instalación ─────────────────────────────────────────── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                INSTALACIÓN Y VIABILIDAD
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                Instalación rápida, siempre con estudio previo
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                Cada vivienda requiere una revisión técnica previa para
                confirmar la viabilidad, ubicación del equipo, necesidades de
                climatización y configuración adecuada.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl">
              <ol className="grid gap-3">
                {installationSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 rounded-[20px] border border-[#D9D9FF]/70 bg-[#F8F7FF] px-5 py-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#850E88] text-sm font-black text-white shadow-[0_8px_18px_rgba(133,14,136,0.18)]">
                      {i + 1}
                    </span>
                    <p className="text-sm font-bold text-[#17111A]">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-5 flex items-start gap-3 rounded-[20px] border border-[#D9D9FF] bg-white px-5 py-4 text-sm font-semibold leading-6 text-[#5F5A66] shadow-sm">
                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#850E88]" aria-hidden="true" />
                El tiempo de instalación puede variar según el inmueble,
                accesos, configuración y trabajos previos necesarios.
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA final ───────────────────────────────────────────── */}
        <section className="bg-[linear-gradient(135deg,#17111A_0%,#2A1830_62%,#850E88_100%)] py-18 sm:py-22">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/[0.08] px-6 py-12 shadow-[0_28px_80px_rgba(23,17,26,0.20)] backdrop-blur-xl sm:px-10">
              <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]" />
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                ¿Quieres saber si BEN Dual-Air encaja en tu vivienda?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#F8F7FF]">
                Te ayudamos a valorar si esta solución es adecuada para tu
                piso, vivienda unifamiliar, reforma u obra nueva.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-[#850E88] shadow-[0_18px_44px_rgba(23,17,26,0.18)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF]"
                >
                  Solicitar asesoramiento
                  <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/50 bg-white/[0.12] px-6 py-4 text-base font-bold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/[0.18]"
                >
                  Contactar por WhatsApp
                  <MessageCircle className="h-5 w-5 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
