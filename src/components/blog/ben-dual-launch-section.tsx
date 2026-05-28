import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Euro,
  Home,
  MessageCircle,
  Ruler,
  Sparkles,
  Wind,
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact-info";

const STATS = [
  { icon: Home, title: "Sin unidad exterior", body: "Compacta y discreta" },
  { icon: Ruler, title: "Hasta 90 m²", body: "Sujeto a estudio técnico" },
  { icon: Wind, title: "3 en 1", body: "Calefacción · Frío · Ventilación" },
  { icon: Euro, title: "Desde 350 €", body: "Instalación de lanzamiento" },
] as const;

export function BenDualLaunchSection() {
  return (
    <section
      aria-labelledby="ben-dual-launch-title"
      className="not-prose my-12"
    >
      {/* Card principal */}
      <div className="relative overflow-hidden rounded-3xl border border-[#E6D6F0] bg-gradient-to-br from-white via-[#FAF5FF] to-[#F4ECFB] shadow-[0_28px_60px_-20px_rgba(149,18,160,0.22)]">
        {/* Acento vertical izquierdo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-8 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#9512A0] via-[#A832B0] to-[#7B0C81]"
        />
        {/* Blobs decorativos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#9512A0]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#D9D9FF]/40 blur-3xl"
        />

        <div className="relative grid grid-cols-1 gap-10 p-7 sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-14 lg:p-14">
          {/* Texto */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E6D6F0] bg-white/80 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#9512A0] shadow-[0_4px_12px_rgba(149,18,160,0.08)] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Lanzamiento especial
            </span>

            <h2
              id="ben-dual-launch-title"
              className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-[#17111A] sm:text-5xl lg:text-[3.25rem]"
            >
              BEN{" "}
              <span className="bg-gradient-to-r from-[#9512A0] via-[#A832B0] to-[#C038C9] bg-clip-text text-transparent">
                Dual-Air
              </span>
            </h2>

            <p className="mt-5 text-xl font-bold leading-snug text-[#17111A] sm:text-2xl">
              Instalación y mano de obra{" "}
              <span className="whitespace-nowrap text-[#9512A0]">
                desde 350 €
              </span>{" "}
              por lanzamiento.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#4A4552]">
              Una oportunidad para valorar una solución eficiente y diferente
              si tienes un piso, ático o vivienda unifamiliar. Consúltanos y te
              informamos sin compromiso.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/consultoria-gratuita"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9512A0] to-[#7B0C81] px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_36px_-10px_rgba(149,18,160,0.55)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_42px_-10px_rgba(149,18,160,0.65)]"
              >
                Consúltanos sin compromiso
                <ArrowRight
                  className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D3C5E5] bg-white/90 px-5 py-3 text-sm font-bold text-[#17111A] backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#9512A0]/60"
              >
                <MessageCircle
                  className="h-4 w-4 text-[#25D366]"
                  aria-hidden="true"
                />
                WhatsApp
              </a>
            </div>

            <p className="mt-6 max-w-xl text-xs leading-5 text-[#8B8194]">
              Precio sujeto a valoración técnica, condiciones de la vivienda y
              configuración necesaria.
            </p>
          </div>

          {/* Imagen — solo desktop */}
          <div className="relative hidden lg:block">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -m-8 rounded-[2.5rem] bg-gradient-to-br from-[#EAEAFF]/70 via-[#F4ECFB] to-[#FAF5FF] blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#E6D6F0] bg-gradient-to-br from-white via-[#FAF5FF] to-[#F4ECFB] shadow-[0_28px_60px_-20px_rgba(149,18,160,0.30)]">
              <Image
                src="/blog/ben-dual-air-unidad-interior.webp"
                alt="Unidad interior BEN Dual-Air integrada en una vivienda"
                fill
                sizes="(max-width: 1024px) 0px, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards inferiores — auto-rows-min + items-start para que cada card mida según su contenido */}
      <ul className="m-0 mt-6 grid list-none auto-rows-min grid-cols-1 items-start gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, title, body }) => (
          <li
            key={title}
            className="group relative rounded-2xl border border-[#E6D6F0] bg-white p-5 text-left shadow-[0_10px_28px_-8px_rgba(23,17,26,0.08)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[#9512A0]/40 hover:shadow-[0_18px_38px_-10px_rgba(149,18,160,0.18)] sm:p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FAF5FF] to-[#F4ECFB] text-[#9512A0] ring-1 ring-inset ring-[#E6D6F0]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="mt-3.5 text-lg font-black leading-tight text-[#9512A0] sm:text-xl">
              {title}
            </p>
            <p className="mt-1 text-sm leading-snug text-[#6B6275]">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
