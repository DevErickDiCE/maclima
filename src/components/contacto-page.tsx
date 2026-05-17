"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";
import { CONTACT_INFO } from "@/lib/contact-info";

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

const supportPoints = [
  "Aerotermia para climatización, ACS y confort térmico",
  "Fotovoltaica para autoconsumo y menor dependencia de red",
  "Geotermia para proyectos con viabilidad técnica confirmada",
  "Soluciones combinadas según consumo, terreno y objetivos",
  "Soporte para viviendas, negocios y profesionales del sector",
] as const;

const processSteps = [
  {
    title: "Nos cuentas tu caso",
    text: "Recogemos la información básica del proyecto.",
  },
  {
    title: "Revisamos la viabilidad",
    text: "Valoramos consumo, inmueble, instalación y objetivos.",
  },
  {
    title: "Te orientamos con criterio",
    text: "Recomendamos la solución más adecuada antes de presupuestar.",
  },
] as const;

const projectTypes = [
  "Aerotermia",
  "Fotovoltaica",
  "Geotermia",
  "Aerotermia + fotovoltaica",
  "Solución energética combinada",
  "Catálogo / producto concreto",
  "Profesional del sector",
  "Otro",
] as const;

export function ContactoPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_52%,#EAEAFF_100%)] py-10 sm:py-20">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(133,14,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute right-[-10%] top-12 h-72 w-72 rounded-full bg-[#D9D9FF]/80 blur-3xl" />
          <div className="absolute bottom-[-18%] left-[-10%] h-64 w-64 rounded-full bg-[#F2B84B]/12 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center"
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                  CONTACTO Y CONSULTORÍA
                </p>
                <h1 className="mt-3 max-w-4xl text-[2rem] font-black leading-tight text-[#17111A] sm:mt-4 sm:text-5xl lg:text-6xl">
                  Hablemos de tu proyecto energético
                </h1>
                <p className="mt-3 max-w-3xl text-[0.95rem] leading-6 text-[#5F5A66] sm:mt-5 sm:text-lg sm:leading-8">
                  Cuéntanos qué necesitas y te orientamos entre aerotermia,
                  fotovoltaica, geotermia o una solución combinada según tu
                  vivienda, negocio o instalación profesional.
                </p>
                <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                  <Link
                    href="/consultoria-gratuita"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_38px_rgba(133,14,136,0.23)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] sm:min-h-14 sm:px-6 sm:py-4 sm:text-base sm:shadow-[0_18px_44px_rgba(133,14,136,0.26)]"
                  >
                    Solicitar consultoría gratuita
                    <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#850E88]/18 bg-white/85 px-5 py-3 text-sm font-bold text-[#850E88] shadow-sm backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white sm:min-h-14 sm:px-6 sm:py-4 sm:text-base"
                  >
                    Contactar por WhatsApp
                    <MessageCircle className="h-5 w-5 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/80 bg-white/84 p-4 shadow-[0_20px_60px_rgba(133,14,136,0.11)] backdrop-blur-xl sm:rounded-[30px] sm:p-6 sm:shadow-[0_26px_80px_rgba(133,14,136,0.14)]">
                <div className="rounded-[20px] border border-[#850E88]/12 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_62%,#EAEAFF_100%)] p-4 sm:rounded-[24px] sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#850E88] text-white shadow-[0_14px_34px_rgba(133,14,136,0.18)]">
                      <Sparkles className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-black uppercase text-[#850E88]">
                        Enfoque consultivo
                      </p>
                      <p className="text-lg font-black text-[#17111A]">
                        Analizamos antes de recomendar
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[#5F5A66]">
                    No vendemos productos de forma automática. Analizamos cada
                    caso antes de recomendar una solución.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <motion.div {...fadeUp}>
              <div className="rounded-[24px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-4 shadow-[0_16px_48px_rgba(23,17,26,0.06)] sm:rounded-[30px] sm:p-8 sm:shadow-[0_22px_70px_rgba(23,17,26,0.08)]">
                <h2 className="text-[1.5rem] font-black leading-tight text-[#17111A] sm:text-3xl">
                  Asesoramiento técnico antes de presupuestar
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5F5A66] sm:mt-4 sm:text-base sm:leading-7">
                  Antes de recomendar un producto, revisamos el tipo de
                  inmueble, consumo, instalación existente y objetivos de ahorro
                  para orientar la solución más adecuada.
                </p>

                <ul className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3">
                  {supportPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-xl border border-[#D9D9FF]/70 bg-white px-3.5 py-3 text-sm font-bold leading-6 text-[#17111A] sm:rounded-2xl sm:px-4"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#850E88]"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-[20px] border border-[#D9D9FF]/80 bg-[#FDFDFF] p-4 sm:mt-8 sm:rounded-[24px] sm:p-5">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                    Contacto directo
                  </p>
                  <div className="mt-4 grid gap-3 text-sm font-semibold text-[#17111A]">
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="flex min-h-12 items-center gap-3 rounded-xl border border-[#D9D9FF]/70 bg-white px-3.5 py-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18 sm:rounded-2xl sm:px-4"
                    >
                      <Phone className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                      <span>Teléfono: {CONTACT_INFO.phone}</span>
                    </a>
                    <a
                      href={CONTACT_INFO.whatsappHref}
                      className="flex min-h-12 items-center gap-3 rounded-xl border border-[#D9D9FF]/70 bg-white px-3.5 py-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18 sm:rounded-2xl sm:px-4"
                    >
                      <MessageCircle
                        className="h-4 w-4 text-[#850E88]"
                        aria-hidden="true"
                      />
                      <span>WhatsApp: {CONTACT_INFO.whatsapp}</span>
                    </a>
                    <a
                      href={CONTACT_INFO.emailHref}
                      className="flex min-h-12 items-center gap-3 rounded-xl border border-[#D9D9FF]/70 bg-white px-3.5 py-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18 sm:rounded-2xl sm:px-4"
                    >
                      <Mail className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                      <span>Email: {CONTACT_INFO.email}</span>
                    </a>
                    <div className="flex items-center gap-3 rounded-xl border border-[#D9D9FF]/70 bg-white px-3.5 py-3 sm:rounded-2xl sm:px-4">
                      <MapPin className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                      <span>C/ CobaÑera 2 7 1 B, 28450 Collado Mediano, Madrid</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <ContactForm
                projectTypes={projectTypes}
                origen="Página de contacto"
                eyebrow="Formulario de contacto"
                title="Solicitud preparada para cliente final y profesional"
              />
            </motion.div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="rounded-[22px] border border-[#D9D9FF]/80 bg-white p-4 shadow-[0_14px_40px_rgba(23,17,26,0.05)] sm:rounded-[28px] sm:p-8 sm:shadow-[0_18px_54px_rgba(23,17,26,0.06)]"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                Cómo trabajamos
              </p>
              <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:grid-cols-3">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[18px] border border-[#D9D9FF]/70 bg-[#FDFDFF] p-4 sm:rounded-[24px] sm:p-5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#850E88] text-sm font-black text-white shadow-[0_10px_24px_rgba(133,14,136,0.18)]">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-black text-[#17111A]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#5F5A66]">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="rounded-[22px] border border-[#D9D9FF]/80 bg-[linear-gradient(135deg,#17111A_0%,#2A1830_100%)] p-4 text-white shadow-[0_18px_54px_rgba(23,17,26,0.15)] sm:rounded-[28px] sm:p-8 sm:shadow-[0_24px_70px_rgba(23,17,26,0.18)]"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                    ¿Eres profesional del sector?
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-[#D9D9FF]">
                    También trabajamos con instaladores, empresas de reformas y
                    profesionales técnicos que necesitan producto, orientación o
                    soporte para sus proyectos.
                  </p>
                </div>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#850E88] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF]"
                >
                  Solicitar información profesional
                  <ChevronRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#7D0E80_0%,#6F0B72_42%,#D9D9FF_100%)] py-10 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="rounded-[24px] border border-white/20 bg-white/[0.08] px-5 py-9 text-center shadow-[0_22px_64px_rgba(23,17,26,0.16)] backdrop-blur-xl sm:rounded-[32px] sm:px-10 sm:py-12 sm:shadow-[0_28px_80px_rgba(23,17,26,0.18)]"
            >
              <h2 className="text-[1.65rem] font-black leading-tight text-white sm:text-4xl">
                ¿Quieres que revisemos tu caso?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#F8F7FF] sm:mt-5 sm:text-lg sm:leading-8">
                Déjanos tus datos y te ayudamos a valorar la solución energética
                más adecuada para tu proyecto.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/consultoria-gratuita"
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-[#850E88] shadow-[0_18px_44px_rgba(23,17,26,0.18)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(23,17,26,0.24)]"
                >
                  Solicitar consultoría gratuita
                  <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/50 bg-white/[0.12] px-6 py-4 text-base font-bold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/[0.18] hover:shadow-[0_18px_36px_rgba(23,17,26,0.18)]"
                >
                  Contactar por WhatsApp
                  <MessageCircle className="h-5 w-5 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
