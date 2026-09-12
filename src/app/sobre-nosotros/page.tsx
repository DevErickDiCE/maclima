import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { LEGAL_COMPANY } from "@/lib/legal-content";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";

// El copy sale de la portada, del brief del proyecto y de los datos legales ya
// publicados. No se añaden cifras, años, obras ni certificaciones.
const DESCRIPTION =
  "Maclima distribuye, instala y asesora en aerotermia, fotovoltaica y geotermia en Madrid. Quiénes somos, cómo trabajamos y dónde.";
const URL = `${SITE_URL}/sobre-nosotros`;

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "Sobre nosotros | Maclima Soluciones Energéticas",
    description: DESCRIPTION,
    url: URL,
    locale: "es_ES",
    type: "website",
    images: [{ ...DEFAULT_OG_IMAGE, alt: "Sobre nosotros — Maclima Soluciones Energéticas" }],
  },
};

const SOLUCIONES = [
  {
    titulo: "Aerotermia",
    texto: "Calefacción, refrigeración y agua caliente sanitaria aprovechando la energía del aire exterior.",
  },
  {
    titulo: "Fotovoltaica",
    texto: "Producción de electricidad solar para reducir el consumo de red y aprovechar mejor la energía disponible.",
  },
  {
    titulo: "Geotermia",
    texto: "Climatización eficiente aprovechando la temperatura estable del terreno para calefacción, refrigeración y ACS.",
  },
  {
    titulo: "Almacenamiento y BESS",
    texto: "Baterías para usar la energía cuando más conviene. No todos los proyectos las necesitan: primero analizamos su viabilidad técnica y económica.",
  },
] as const;

const PASOS = [
  { titulo: "Nos cuentas tu caso", texto: "Inmueble, uso previsto y objetivo principal." },
  { titulo: "Analizamos necesidades", texto: "Consumo, espacio disponible e instalación existente." },
  { titulo: "Recomendamos solución", texto: "Aerotermia, fotovoltaica, geotermia o combinación según viabilidad." },
  { titulo: "Preparamos propuesta", texto: "Información clara para avanzar con criterio." },
] as const;

const PARA_QUIEN = [
  "Propietarios de chalets y viviendas unifamiliares de la Sierra de Madrid.",
  "Pisos y áticos con limitaciones para colocar una unidad exterior.",
  "Negocios y pequeñas empresas con consumos energéticos relevantes.",
  "Comunidades de propietarios interesadas en autoconsumo o rehabilitación.",
  "Arquitectos, reformistas e instaladores que necesitan apoyo técnico o suministro.",
] as const;

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": URL,
  url: URL,
  name: "Sobre nosotros",
  inLanguage: "es-ES",
  about: { "@id": `${SITE_URL}/#organization` },
};

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_54%,#EAEAFF_100%)] py-9 sm:py-16">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(149,18,160,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(149,18,160,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-[#D9D9FF]/80 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl rounded-[24px] border border-white/80 bg-white/[0.82] p-4 shadow-[0_18px_56px_rgba(149,18,160,0.1)] backdrop-blur-xl sm:rounded-[30px] sm:p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9512A0]/25 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#9512A0] shadow-sm sm:px-4 sm:py-2 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Sobre nosotros
              </span>
              <h1 className="mt-3 max-w-4xl text-[1.65rem] font-black leading-tight text-[#17111A] sm:mt-4 sm:text-4xl lg:text-[2.8rem]">
                Quiénes somos
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">
                {LEGAL_COMPANY.brand} es el nombre comercial de {LEGAL_COMPANY.holder}. Distribuimos e
                instalamos soluciones de aerotermia, fotovoltaica y geotermia en Madrid para viviendas,
                negocios y profesionales del sector, con asesoramiento técnico gratuito para elegir el
                sistema más eficiente.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                <Chip icon={Building2} label={LEGAL_COMPANY.brand} />
                <Chip icon={MapPin} label="Collado Mediano · Sierra de Guadarrama · Comunidad de Madrid" />
                <Chip icon={ShieldCheck} label="Asesoramiento técnico gratuito" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-9 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
            <Tarjeta titulo="Qué hacemos">
              <p>
                Distribuimos, instalamos y asesoramos sobre aerotermia, fotovoltaica, geotermia,
                climatización eficiente, agua caliente sanitaria y almacenamiento energético. Integramos
                estas tecnologías para mejorar el confort, reducir el consumo y adaptar cada instalación a
                viviendas, negocios o proyectos profesionales.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {SOLUCIONES.map((solucion) => (
                  <li key={solucion.titulo} className="rounded-2xl border border-[#D9D9FF]/80 bg-white px-4 py-3">
                    <p className="text-sm font-black text-[#17111A]">{solucion.titulo}</p>
                    <p className="mt-1 text-sm leading-6 text-[#4A4552]">{solucion.texto}</p>
                  </li>
                ))}
              </ul>
            </Tarjeta>

            <Tarjeta titulo="Cómo trabajamos">
              <p>
                No vendemos equipos sin contexto: estudiamos el inmueble, el consumo y la viabilidad antes
                de recomendar. Cada propuesta sigue cuatro pasos.
              </p>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {PASOS.map((paso, indice) => (
                  <li key={paso.titulo} className="rounded-2xl border border-[#D9D9FF]/80 bg-white px-4 py-3">
                    <p className="text-sm font-black text-[#17111A]">
                      <span className="text-[#9512A0]">{indice + 1}.</span> {paso.titulo}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#4A4552]">{paso.texto}</p>
                  </li>
                ))}
              </ol>
            </Tarjeta>

            <Tarjeta titulo="Para quién trabajamos">
              <ul className="grid gap-3 sm:grid-cols-2">
                {PARA_QUIEN.map((texto) => (
                  <li
                    key={texto}
                    className="rounded-2xl border border-[#D9D9FF]/80 bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#17111A]"
                  >
                    {texto}
                  </li>
                ))}
              </ul>
            </Tarjeta>

            <Tarjeta titulo="Dónde trabajamos">
              <p>
                Tenemos el domicilio social en Collado Mediano. Trabajamos sobre todo en la Sierra de
                Guadarrama y en el resto de la Comunidad de Madrid.
              </p>
            </Tarjeta>

            <Tarjeta titulo="Lo que no hacemos">
              <p>
                No garantizamos ahorros, subvenciones, precios ni amortizaciones sin un cálculo y una fuente.
                Las ayudas, la fiscalidad, las tarifas y la normativa se comprueban el día que se revisan, y
                ninguna recomendación sustituye el estudio técnico de cada instalación.
              </p>
            </Tarjeta>

            <Tarjeta titulo="Nuestro blog">
              <p>
                Los artículos del <Link href="/blog" className="font-bold text-[#9512A0] underline underline-offset-4">blog</Link>{" "}
                los firma el equipo de Maclima. Enlazamos las fuentes oficiales, como el IDAE, el BOE o las
                fichas de los fabricantes, junto a cada dato, y cuando una ayuda o una norma cambia, el
                artículo se actualiza con su nueva fecha.
              </p>
            </Tarjeta>

            <Tarjeta titulo="Datos de la empresa">
              <dl className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                <Dato etiqueta="Titular" valor={LEGAL_COMPANY.holder} />
                <Dato etiqueta="Nombre comercial" valor={LEGAL_COMPANY.brand} />
                <Dato etiqueta="CIF" valor={LEGAL_COMPANY.taxId} />
                <Dato etiqueta="Domicilio social" valor={LEGAL_COMPANY.address} />
                <Dato etiqueta="Teléfono" valor={LEGAL_COMPANY.phone} />
                <Dato etiqueta="Email" valor={LEGAL_COMPANY.email} />
              </dl>
            </Tarjeta>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] pb-10 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[24px] border border-[#D9D9FF]/80 bg-white p-4 sm:rounded-[30px] sm:p-8">
              <h2 className="text-2xl font-black leading-tight text-[#17111A] sm:text-3xl">
                ¿Quieres saber qué sistema encaja en tu caso?
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#4A4552]">
                Cuéntanos tu inmueble y tu consumo. Te asesoramos sin coste antes de pedir presupuesto.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/consultoria-gratuita"
                  className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-[0.95rem] font-bold text-white transition duration-200 ease-out hover:bg-[#7B0C81]"
                >
                  Consultoría gratuita
                  <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-[#9512A0]/30 bg-white px-5 py-3 text-[0.95rem] font-bold text-[#9512A0] transition duration-200 ease-out hover:bg-[#F8F7FF]"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Chip({ icon: Icon, label }: { icon: typeof Building2; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#9512A0]/12 bg-white px-3 py-1.5 text-xs font-semibold text-[#4A4552] shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
      <Icon className="h-3.5 w-3.5 text-[#9512A0] sm:h-4 sm:w-4" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

function Tarjeta({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <article className="rounded-[22px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFBFF_100%)] p-4 shadow-[0_14px_40px_rgba(23,17,26,0.05)] sm:rounded-[28px] sm:p-8">
      <h2 className="text-[1.35rem] font-black leading-tight text-[#17111A] sm:text-[1.75rem]">{titulo}</h2>
      <div className="mt-3 text-sm leading-6 text-[#4A4552] sm:mt-4 sm:text-base sm:leading-8">{children}</div>
    </article>
  );
}

function Dato({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <div className="rounded-xl border border-[#D9D9FF]/80 bg-white px-3.5 py-3 sm:rounded-2xl sm:px-4">
      <dt className="text-xs font-black uppercase tracking-[0.12em] text-[#9512A0]">{etiqueta}</dt>
      <dd className="mt-1 text-sm font-semibold leading-6 text-[#17111A]">{valor}</dd>
    </div>
  );
}
