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
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#850E88] text-white shadow-[0_10px_26px_rgba(133,14,136,0.22)] sm:h-11 sm:w-11 sm:shadow-[0_12px_32px_rgba(133,14,136,0.25)]">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[0.95rem] font-bold text-[#17111A] sm:text-lg">
              Maclima
            </span>
            <span className="block max-w-[8.6rem] text-[0.64rem] font-semibold uppercase leading-tight text-[#850E88] sm:max-w-none sm:text-xs">
              Soluciones Energéticas
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {siteNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-[#5F5A66] transition duration-200 ease-out hover:bg-[#EAEAFF] hover:text-[#850E88]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/consultoria-gratuita"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(133,14,136,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] hover:shadow-[0_20px_42px_rgba(133,14,136,0.3)]"
          >
            Solicitar consultoría
            <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D9D9FF] text-[#850E88] transition duration-200 ease-out hover:bg-[#F8F7FF] sm:h-11 sm:w-11 lg:hidden"
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
                className="rounded-xl px-3.5 py-2.5 text-[0.95rem] font-semibold text-[#17111A] transition duration-200 ease-out hover:bg-[#EAEAFF] hover:text-[#850E88] sm:px-4 sm:py-3 sm:text-base"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consultoria-gratuita"
              className="group mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-3 text-[0.95rem] font-bold text-white sm:py-4 sm:text-base"
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
    <footer className="bg-[#17111A] py-9 text-white sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#850E88] text-white sm:h-11 sm:w-11">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-base font-black leading-tight sm:text-lg">Maclima Soluciones Energéticas</p>
              <p className="mt-0.5 text-xs font-semibold text-[#D9D9FF] sm:text-sm">
                MACLIMA CALOR Y FRÍO S.L.
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#D9D9FF] sm:mt-5">
            Distribución, instalación y asesoramiento técnico en aerotermia,
            fotovoltaica y geotermia para cliente final, negocio y profesional del sector.
          </p>
          <p className="mt-3 max-w-md text-xs leading-5 text-[#D9D9FF] sm:mt-4">
            Maclima Soluciones Energéticas es el nombre comercial de {LEGAL_COMPANY.holder}
          </p>
          <p className="mt-3 max-w-md text-xs leading-5 text-[#D9D9FF]/80">
            CIF: {LEGAL_COMPANY.taxId}<br />
            {LEGAL_COMPANY.address}<br />
            Tel: {CONTACT_INFO.phone}<br />
            Email: {CONTACT_INFO.email}<br />
            WhatsApp: {CONTACT_INFO.whatsapp}
          </p>
        </div>

        <div>
          <p className="font-black text-white">Enlaces</p>
          <nav className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-semibold text-[#D9D9FF] sm:mt-4 sm:grid-cols-1 sm:gap-3">
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

        <div>
          <p className="font-black text-white">Legal</p>
          <nav className="mt-3 grid gap-2.5 text-sm font-semibold text-[#D9D9FF] sm:mt-4 sm:gap-3">
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

        <div>
          <p className="font-black text-white">Contacto</p>
          <div className="mt-3 grid gap-2.5 text-sm font-semibold text-[#D9D9FF] sm:mt-4 sm:gap-3">
            <a
              className="flex items-center gap-2 transition duration-200 ease-out hover:translate-x-0.5 hover:text-white"
              href={CONTACT_INFO.phoneHref}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CONTACT_INFO.phone}
            </a>
            <a
              className="flex items-center gap-2 transition duration-200 ease-out hover:translate-x-0.5 hover:text-white"
              href={CONTACT_INFO.emailHref}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {CONTACT_INFO.email}
            </a>
            <a
              className="flex items-center gap-2 transition duration-200 ease-out hover:translate-x-0.5 hover:text-white"
              href={CONTACT_INFO.whatsappHref}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp · {CONTACT_INFO.whatsapp}
            </a>
          </div>
        </div>

      </div>
      <div className="mx-auto mt-7 max-w-7xl border-t border-white/10 px-4 pt-5 sm:mt-10 sm:px-6 sm:pt-6 lg:px-8">
        <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-xs font-medium leading-5 text-[#D9D9FF]/70 sm:justify-start">
          <span>Desarrollado por</span>
          <a
            href="https://www.potenciasoluciones.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[#D9D9FF]/90 underline decoration-white/20 underline-offset-4 transition duration-200 ease-out hover:text-white hover:decoration-white/60"
          >
            PotencIA Soluciones
          </a>
        </p>
      </div>
    </footer>
  );
}
