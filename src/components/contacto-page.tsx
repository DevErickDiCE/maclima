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
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tipo: projectTypes[0],
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          origen: "Página de contacto",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }
      setStatus("success");
      setForm({ nombre: "", telefono: "", email: "", tipo: projectTypes[0], mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_52%,#EAEAFF_100%)] py-16 sm:py-20">
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
                <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[#17111A] sm:text-5xl lg:text-6xl">
                  Hablemos de tu proyecto energético
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F5A66]">
                  Cuéntanos qué necesitas y te orientamos entre aerotermia,
                  fotovoltaica, geotermia o una solución combinada según tu
                  vivienda, negocio o instalación profesional.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/consultoria-gratuita"
                    className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72]"
                  >
                    Solicitar consultoría gratuita
                    <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#850E88]/18 bg-white/85 px-6 py-4 text-base font-bold text-[#850E88] shadow-sm backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white"
                  >
                    Contactar por WhatsApp
                    <MessageCircle className="h-5 w-5 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/80 bg-white/84 p-5 shadow-[0_26px_80px_rgba(133,14,136,0.14)] backdrop-blur-xl sm:p-6">
                <div className="rounded-[24px] border border-[#850E88]/12 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_62%,#EAEAFF_100%)] p-5">
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

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <motion.div {...fadeUp}>
              <div className="rounded-[30px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-6 shadow-[0_22px_70px_rgba(23,17,26,0.08)] sm:p-8">
                <h2 className="text-3xl font-black leading-tight text-[#17111A]">
                  Asesoramiento técnico antes de presupuestar
                </h2>
                <p className="mt-4 text-base leading-7 text-[#5F5A66]">
                  Antes de recomendar un producto, revisamos el tipo de
                  inmueble, consumo, instalación existente y objetivos de ahorro
                  para orientar la solución más adecuada.
                </p>

                <ul className="mt-6 grid gap-3">
                  {supportPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3 text-sm font-bold leading-6 text-[#17111A]"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#850E88]"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-[24px] border border-[#D9D9FF]/80 bg-[#FDFDFF] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                    Contacto directo
                  </p>
                  <div className="mt-4 grid gap-3 text-sm font-semibold text-[#17111A]">
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18"
                    >
                      <Phone className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                      <span>Teléfono: {CONTACT_INFO.phone}</span>
                    </a>
                    <a
                      href={CONTACT_INFO.whatsappHref}
                      className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18"
                    >
                      <MessageCircle
                        className="h-4 w-4 text-[#850E88]"
                        aria-hidden="true"
                      />
                      <span>WhatsApp: {CONTACT_INFO.whatsapp}</span>
                    </a>
                    <a
                      href={CONTACT_INFO.emailHref}
                      className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18"
                    >
                      <Mail className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                      <span>Email: {CONTACT_INFO.email}</span>
                    </a>
                    <div className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-4 py-3">
                      <MapPin className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
                      <span>C/ CobaÑera 2 7 1 B, 28450 Collado Mediano, Madrid</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <div className="rounded-[30px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-6 shadow-[0_26px_80px_rgba(133,14,136,0.14)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                  Formulario de contacto
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A]">
                  Solicitud preparada para cliente final y profesional
                </h2>

                <form
                  className="mt-6 grid gap-4"
                  onSubmit={handleSubmit}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Teléfono"
                      name="telefono"
                      placeholder="Tu teléfono"
                      value={form.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    placeholder="Tu email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                  />

                  <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#850E88]">
                    Tipo de proyecto
                    <select
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                      className="min-h-14 rounded-2xl border border-[#D9D9FF] bg-white px-4 text-base font-semibold text-[#17111A] outline-none transition duration-200 ease-out focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)]"
                    >
                      {projectTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#850E88]">
                    Mensaje
                    <textarea
                      name="mensaje"
                      rows={5}
                      placeholder="Cuéntanos brevemente tu proyecto"
                      value={form.mensaje}
                      onChange={handleChange}
                      className="rounded-2xl border border-[#D9D9FF] bg-white px-4 py-4 text-base font-medium text-[#17111A] outline-none transition duration-200 ease-out placeholder:text-[#9C97A5] focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)]"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group mt-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Enviando..." : "Enviar solicitud"}
                    <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </form>

                <div
                  className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-semibold transition duration-200 ease-out ${
                    status === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : status === "error"
                        ? "border-red-200 bg-red-50 text-red-800"
                        : "border-[#D9D9FF]/70 bg-white text-[#7A7483]"
                  }`}
                >
                  {status === "success"
                    ? "Consulta enviada correctamente. Te contactaremos lo antes posible."
                    : status === "error"
                      ? "No se pudo enviar el formulario. También puedes escribirnos por WhatsApp."
                      : "También puedes contactarnos directamente por WhatsApp para una respuesta más rápida."}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="rounded-[28px] border border-[#D9D9FF]/80 bg-white p-6 shadow-[0_18px_54px_rgba(23,17,26,0.06)] sm:p-8"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
                Cómo trabajamos
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[24px] border border-[#D9D9FF]/70 bg-[#FDFDFF] p-5"
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

        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="rounded-[28px] border border-[#D9D9FF]/80 bg-[linear-gradient(135deg,#17111A_0%,#2A1830_100%)] p-6 text-white shadow-[0_24px_70px_rgba(23,17,26,0.18)] sm:p-8"
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

        <section className="bg-[linear-gradient(135deg,#7D0E80_0%,#6F0B72_42%,#D9D9FF_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="rounded-[32px] border border-white/20 bg-white/[0.08] px-6 py-12 text-center shadow-[0_28px_80px_rgba(23,17,26,0.18)] backdrop-blur-xl sm:px-10"
            >
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                ¿Quieres que revisemos tu caso?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#F8F7FF]">
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

function Field({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#850E88]">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="min-h-14 rounded-2xl border border-[#D9D9FF] bg-white px-4 text-base font-medium text-[#17111A] outline-none transition duration-200 ease-out placeholder:text-[#9C97A5] focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)]"
      />
    </label>
  );
}
