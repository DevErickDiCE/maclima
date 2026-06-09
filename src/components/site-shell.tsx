"use client";

import Link from "next/link";
import { ArrowRight, Mail, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "@/lib/contact-info";
import { LEGAL_COMPANY } from "@/lib/legal-content";

export const siteNavItems = [
  { label: "Inicio", href: "/" },
  { label: "Aerotermia", href: "/#aerotermia" },
  { label: "Fotovoltaica", href: "/#fotovoltaica" },
  { label: "Geotermia", href: "/#geotermia" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Blog", href: "/blog" },
  { label: "Consultoría gratuita", href: "/consultoria-gratuita" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const legalNavItems = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Politica de privacidad", href: "/politica-de-privacidad" },
  { label: "Politica de cookies", href: "/politica-de-cookies" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9D9FF]/80 bg-white/[0.9] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Maclima inicio">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9512A0] text-white shadow-[0_10px_26px_rgba(149,18,160,0.22)] sm:h-11 sm:w-11 sm:shadow-[0_12px_32px_rgba(149,18,160,0.25)]">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block text-[0.95rem] font-bold text-[#17111A] sm:text-lg">
              Maclima
            </span>
            <span className="block whitespace-nowrap text-[0.58rem] font-semibold uppercase leading-tight tracking-[0.01em] text-[#9512A0] sm:max-w-none sm:text-xs sm:tracking-normal">
              Soluciones Energéticas
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {siteNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-[#4A4552] transition duration-200 ease-out hover:bg-[#EAEAFF] hover:text-[#9512A0]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/consultoria-gratuita"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(149,18,160,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81] hover:shadow-[0_20px_42px_rgba(149,18,160,0.3)]"
          >
            Solicitar consultoría
            <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D9D9FF] text-[#9512A0] transition duration-200 ease-out hover:bg-[#F8F7FF] sm:h-11 sm:w-11 lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          className="border-t border-[#D9D9FF] bg-white px-4 py-3 shadow-[0_22px_60px_rgba(23,17,26,0.08)] sm:py-4 lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="mx-auto grid max-w-7xl gap-1.5 sm:gap-2">
            {siteNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3.5 py-2.5 text-[0.95rem] font-semibold text-[#17111A] transition duration-200 ease-out hover:bg-[#EAEAFF] hover:text-[#9512A0] sm:px-4 sm:py-3 sm:text-base"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consultoria-gratuita"
              className="group mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-[0.95rem] font-bold text-white sm:py-4 sm:text-base"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar consultoría
              <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#17111A] py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 sm:gap-10 lg:grid-cols-[1.5fr_0.85fr_0.85fr_1fr] lg:gap-12">
          <div className="lg:order-1">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#9512A0] text-white">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-base font-black sm:text-lg">Maclima Soluciones Energéticas</p>
                <p className="mt-0.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#B79DD9] sm:text-[11px]">
                  {LEGAL_COMPANY.holder.toUpperCase()}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#E6E6FF]">
              Distribución, instalación y asesoramiento técnico en aerotermia,
              fotovoltaica y geotermia para viviendas, negocios y profesionales.
            </p>
            <div className="mt-5 space-y-1 text-xs leading-5 text-[#D9D9FF]/85">
              <p>CIF: {LEGAL_COMPANY.taxId}</p>
              <p>{LEGAL_COMPANY.address}</p>
            </div>
          </div>

          <div className="lg:order-4">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white">
              Contacto
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[#D9D9FF]">
              <a
                href={CONTACT_INFO.phoneHref}
                className="group inline-flex items-center gap-2.5 transition duration-200 ease-out hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#B79DD9] transition duration-200 ease-out group-hover:text-white" aria-hidden="true" />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={CONTACT_INFO.emailHref}
                className="group inline-flex items-center gap-2.5 break-all transition duration-200 ease-out hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#B79DD9] transition duration-200 ease-out group-hover:text-white" aria-hidden="true" />
                {CONTACT_INFO.email}
              </a>
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 transition duration-200 ease-out hover:text-white"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[#B79DD9] transition duration-200 ease-out group-hover:text-white" aria-hidden="true" />
                WhatsApp · {CONTACT_INFO.whatsapp}
              </a>
            </div>
          </div>

          <div className="lg:order-2">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white">
              Enlaces
            </p>
            <nav className="mt-4 grid gap-3 text-sm font-medium text-[#D9D9FF]" aria-label="Enlaces de Maclima">
              {siteNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition duration-200 ease-out hover:translate-x-0.5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:order-3">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white">
              Legal
            </p>
            <nav className="mt-4 grid gap-3 text-sm font-medium text-[#D9D9FF]" aria-label="Enlaces legales">
              {legalNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition duration-200 ease-out hover:translate-x-0.5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-7">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs font-semibold text-[#E6E6FF] sm:text-[13px]">
                © 2026 Maclima Soluciones Energéticas · Todos los derechos reservados
              </p>
              <p className="text-[11px] leading-5 text-[#D9D9FF]/80 sm:text-xs">
                Nombre comercial de {LEGAL_COMPANY.holder}. CIF y datos registrales disponibles en el{" "}
                <Link
                  href="/aviso-legal"
                  className="underline decoration-white/20 underline-offset-4 transition duration-200 ease-out hover:text-[#D9D9FF] hover:decoration-white/60"
                >
                  Aviso legal
                </Link>
                .
              </p>
            </div>
            <p className="text-center text-xs text-[#D9D9FF]/90 sm:text-right sm:text-[13px]">
              Desarrollado por{" "}
              <a
                href="https://www.potenciasoluciones.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap font-semibold text-[#D9D9FF] underline decoration-white/25 underline-offset-4 transition duration-200 ease-out hover:text-white hover:decoration-white/60"
              >
                PotencIA Soluciones
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
