import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const benBenefits = [
  "Calefacción y refrigeración",
  "Agua caliente sanitaria",
  "Ventilación integrada",
  "Control remoto",
  "Instalación interior compacta",
] as const;

export const metadata: Metadata = {
  title: "BEN Dual-Air | Aerotermia compacta | Maclima Soluciones Energéticas",
  description:
    "Ficha consultiva de BEN Dual-Air, sistema compacto de aerotermia interior para climatización, ventilación y ACS.",
};

export default function BenDualAirPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_48%,#EAEAFF_100%)] text-[#17111A]">
      <SiteHeader />
      <main>
        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 rounded-xl border border-[#850E88]/15 bg-white px-4 py-3 text-sm font-bold text-[#850E88] shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al catálogo
            </Link>

            <article className="mt-6 overflow-hidden rounded-[34px] border border-[#D9D9FF]/80 bg-[radial-gradient(circle_at_12%_12%,rgba(217,217,255,0.8),transparent_30%),linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_52%,#EAEAFF_100%)] p-5 shadow-[0_28px_88px_rgba(133,14,136,0.12)] sm:p-7 lg:p-9">
              <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                <div className="relative min-h-[320px] overflow-hidden rounded-[30px] border border-white/80 bg-[#17111A] shadow-[0_28px_84px_rgba(23,17,26,0.16)] sm:min-h-[480px]">
                  <Image
                    src="/imagen/BEN-Dual-AIR/electric-bruin.webp"
                    alt="BEN Dual-Air sistema de aerotermia interior compacto"
                    fill
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover object-[56%_center]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,26,0)_0%,rgba(23,17,26,0.36)_100%)]" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#850E88] shadow-sm backdrop-blur">
                    Producto estrella en aerotermia
                  </span>
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                    PRODUCTO ESTRELLA EN AEROTERMIA
                  </p>
                  <h1 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl lg:text-5xl">
                    BEN Dual-Air: aerotermia compacta para climatización,
                    ventilación y ACS
                  </h1>
                  <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                    BEN Dual-Air es una bomba de calor interior que puede
                    integrar ventilación, calefacción, refrigeración y agua
                    caliente sanitaria en una unidad compacta. Puede funcionar
                    como sistema eléctrico completo o como apoyo híbrido junto a
                    otros sistemas existentes, según las necesidades de cada
                    instalación.
                  </p>
                  <p className="mt-5 text-base leading-7 text-[#5F5A66]">
                    Su diseño permite trabajar con aire de ventilación, aire
                    exterior o una combinación de ambos, lo que lo convierte en
                    una solución flexible para viviendas, apartamentos,
                    reformas y proyectos de alta eficiencia.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {benBenefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/75 bg-white/88 px-4 py-3 shadow-sm"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAEAFF] text-[#850E88]">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-bold text-[#17111A]">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/consultoria-gratuita"
                      className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72]"
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
      </main>
      <SiteFooter />
    </div>
  );
}
