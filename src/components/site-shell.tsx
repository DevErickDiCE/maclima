"use client";

import Link from "next/link";
import { ArrowRight, Mail, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "@/lib/contact-info";

export const siteNavItems = [
  { label: "Inicio", href: "/" },
  { label: "Aerotermia", href: "/#aerotermia" },
  { label: "Fotovoltaica", href: "/#fotovoltaica" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Consultoría gratuita", href: "/contacto" },
  { label: "Contacto", href: "/contacto" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9D9FF]/80 bg-white/[0.9] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Maclima inicio">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#850E88] text-white shadow-[0_12px_32px_rgba(133,14,136,0.25)]">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-[#17111A] sm:text-lg">
              Maclima
            </span>
            <span className="block text-xs font-semibold uppercase text-[#850E88]">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9D9FF] text-[#850E88] transition duration-200 ease-out hover:bg-[#F8F7FF] lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          className="border-t border-[#D9D9FF] bg-white px-4 py-4 shadow-[0_22px_60px_rgba(23,17,26,0.08)] lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {siteNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-base font-semibold text-[#17111A] transition duration-200 ease-out hover:bg-[#EAEAFF] hover:text-[#850E88]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consultoria-gratuita"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-4 text-base font-bold text-white"
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
    <footer className="bg-[#17111A] py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.95fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#850E88] text-white">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-black">Maclima Soluciones Energéticas</p>
              <p className="text-sm font-semibold text-[#D9D9FF]">
                MACLIMA CALOR Y FRÍO S.L.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-[#D9D9FF]">
            Distribución, instalación y asesoramiento técnico en aerotermia y
            fotovoltaica para cliente final, negocio y profesional del sector.
          </p>
          <p className="mt-4 max-w-md text-xs leading-5 text-[#D9D9FF]">
            Maclima Soluciones Energéticas es el nombre comercial de MACLIMA
            CALOR Y FRÍO S.L.
          </p>
        </div>

        <div>
          <p className="font-black text-white">Enlaces</p>
          <nav className="mt-4 grid gap-3 text-sm font-semibold text-[#D9D9FF]">
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
          <p className="font-black text-white">Contacto</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-[#D9D9FF]">
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
    </footer>
  );
}
