"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AirVent,
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Gauge,
  Home,
  HousePlug,
  Layers,
  Leaf,
  LucideIcon,
  MessageCircle,
  PanelTop,
  Plug,
  ShieldCheck,
  Smartphone,
  Droplets,
  Snowflake,
  Sparkles,
  Sun,
  ThermometerSun,
  Users,
  Waves,
  Zap,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { CONTACT_INFO } from "@/lib/contact-info";

const heroTrustLine = [
  "Estudio previo sin compromiso",
  "Soluciones para vivienda y negocio",
  "Soporte para profesionales",
] as const;

const heroSignals = [
  "Aerotermia",
  "Fotovoltaica",
  "Geotermia",
] as const;

const aerothermalBenefits = [
  "Calefacción",
  "Refrigeración",
  "ACS",
  "Bajo consumo",
] as const;

const photovoltaicBenefits = [
  "Autoconsumo",
  "Ahorro en factura",
  "Baterías",
  "Menor dependencia",
] as const;

const geothermalBenefits = [
  "Alta eficiencia",
  "Climatización",
  "ACS",
  "Energía renovable",
] as const;

const aerothermalAdvantages = [
  {
    title: "Calefacción",
    text: "Confort eficiente en invierno.",
    icon: ThermometerSun,
    accent: "orange",
    chip: "Suelo radiante",
  },
  {
    title: "Refrigeración",
    text: "Climatización reversible en verano.",
    icon: Snowflake,
    accent: "ice",
    chip: "Fancoils",
  },
  {
    title: "ACS",
    text: "Agua caliente para el uso diario.",
    icon: Droplets,
    accent: "violet",
    chip: "Acumulación",
  },
  {
    title: "Ahorro energético",
    text: "Menor consumo y mayor eficiencia.",
    icon: Gauge,
    accent: "solar",
    chip: "Bajo consumo",
  },
  {
    title: "Sostenibilidad",
    text: "Menos dependencia de combustibles fósiles.",
    icon: Leaf,
    accent: "green",
    chip: "Energía renovable",
  },
  {
    title: "Techo radiante",
    text: "Confort uniforme y discreto.",
    icon: Waves,
    accent: "rose",
    chip: "Frío y calor",
  },
] as const;

const photovoltaicHighlights = [
  {
    title: "Energía propia",
    text: "Aprovecha la energía solar para cubrir parte de tu consumo diario.",
    icon: Sun,
    accent: "solar",
  },
  {
    title: "Menos dependencia de la red",
    text: "Reduce la electricidad demandada a la compañía eléctrica.",
    icon: Plug,
    accent: "violet",
  },
  {
    title: "Preparada para crecer",
    text: "Compatible con baterías, aerotermia y futuras ampliaciones.",
    icon: BatteryCharging,
    accent: "green",
  },
] as const;


const benBullets = [
  "Calefacción y refrigeración",
  "Agua caliente sanitaria",
  "Ventilación",
  "Control remoto",
  "Solución compacta",
] as const;

const aerothermalCatalog = [
  {
    name: "BEN Dual-Air",
    text: "Aerotermia interior sin unidad exterior.",
    href: "/catalogo/ben-dual-air",
    imageSrc: "/imagen/BEN-Dual-AIR/ben-100-electric-format.webp",
    badge: "Producto estrella",
    featured: true,
    kind: "product",
    thumbType: "ben",
  },
  {
    name: "Climer EcoHeat ACS",
    text: "Bomba de calor para agua caliente sanitaria.",
    href: "/catalogo#aerotermia-catalogo",
    imageSrc: "/imagen/climer-ecoheat-acs.webp",
    badge: "ACS",
    kind: "product",
    thumbType: "acs",
  },
  {
    name: "Climer Calefacción y refrigeración",
    text: "Bomba de calor para climatización eficiente.",
    href: "/catalogo#aerotermia-catalogo",
    imageSrc: "/imagen/climer-ai20pro.webp",
    badge: "Climatización",
    kind: "product",
    thumbType: "clima",
  },
  {
    name: "Elnur Gabarron Thermira Monobloc",
    text: "Aerotermia monobloc aire-agua para calefacción, refrigeración y ACS.",
    href: "/catalogo#aerotermia-catalogo",
    imageSrc: "/imagen/thermira-monobloc.jpg",
    badge: "Monobloc",
    kind: "product",
    thumbType: "clima",
  },
] as const;

const photovoltaicCatalog = [
  {
    name: "Módulo Hanersun 720W",
    text: "Panel TOPCon bifacial de alta potencia.",
    href: "/catalogo#fotovoltaica-catalogo",
    imageSrc: "/imagen/hanersun_132cell_720w.webp",
    badge: "Panel",
    kind: "product",
    thumbType: "solar-panel",
  },
  {
    name: "Inversor Deye 12kW",
    text: "Inversor híbrido para autoconsumo y baterías.",
    href: "/catalogo#fotovoltaica-catalogo",
    imageSrc: "/imagen/SG01LP1-EU-optimized.webp",
    badge: "Híbrido",
    kind: "product",
    thumbType: "inverter",
  },
  {
    name: "Optimizador Tigo TS4-X-O",
    text: "Optimización, monitorización y apagado rápido.",
    href: "/catalogo#fotovoltaica-catalogo",
    imageSrc: "/imagen/Tigo_TS4-X-O-optimized.webp",
    badge: "Optimización",
    kind: "product",
    thumbType: "inverter",
  },
  {
    name: "Batería SolaX T-BAT-SYS-LV D53",
    text: "Almacenamiento residencial de baja tensión.",
    href: "/catalogo#fotovoltaica-catalogo",
    imageSrc: "/imagen/solax_T-BAT-SYS-LV-D53-.webp",
    badge: "Batería",
    kind: "product",
    thumbType: "battery",
  },
  {
    name: "APsystems APbattery 6.5 kWh",
    text: "Batería LiFePO4 para sistemas fotovoltaicos.",
    href: "/catalogo#fotovoltaica-catalogo",
    imageSrc: "/imagen/apsystems_apbattery.webp",
    badge: "Batería",
    kind: "product",
    thumbType: "battery",
  },
  {
    name: "Cargador VE SolaX G2 X1 7.2kW",
    text: "Carga inteligente para vehículo eléctrico.",
    href: "/catalogo#fotovoltaica-catalogo",
    imageSrc: "/imagen/solax_evcharger_g2_a-optimized.webp",
    badge: "Cargador VE",
    kind: "product",
    thumbType: "inverter",
  },
  {
    name: "Estructura coplanar Salvateja",
    text: "Sistema de montaje para cubierta de teja.",
    href: "/catalogo#fotovoltaica-catalogo",
    imageSrc: "/imagen/estructura_coplanar_salvateja_ennova-optimized.webp",
    badge: "Estructura",
    kind: "product",
    thumbType: "mount",
  },
  {
    name: "Cuadro protecciones DC",
    text: "Protección eléctrica para instalaciones fotovoltaicas.",
    href: "/catalogo#fotovoltaica-catalogo",
    imageSrc: "/imagen/protecciones_DC_2st_16a-optimized.webp",
    badge: "Protección",
    kind: "product",
    thumbType: "inverter",
  },
] as const;

const geothermalCatalog = [
  {
    name: "Bomba de calor geotérmica premium",
    text: "Climatización, ACS y confort estable aprovechando el subsuelo.",
    href: "/catalogo#geotermia-catalogo",
    imageSrc: "/imagen/S1155.png",
    badge: "Alta eficiencia",
    kind: "product" as const,
    thumbType: "geo" as const,
  },
  {
    name: "Bomba de calor geotérmica inverter",
    text: "Sistema inverter para proyectos con alta demanda energética.",
    href: "/catalogo#geotermia-catalogo",
    imageSrc: "/imagen/f1355.png",
    badge: "Inverter",
    kind: "product" as const,
    thumbType: "geo" as const,
  },
  {
    name: "Bomba de calor geotérmica compacta",
    text: "Solución compacta para calefacción, refrigeración y ACS.",
    href: "/catalogo#geotermia-catalogo",
    imageSrc: "/imagen/geo-bomba-calor.png",
    badge: "Compacta",
    kind: "product" as const,
    thumbType: "geo" as const,
  },
  {
    name: "Estudio de viabilidad",
    text: "Análisis técnico previo del terreno y proyecto.",
    href: "/catalogo#geotermia-catalogo",
    badge: "Consultoría",
    kind: "family" as const,
    thumbType: "project" as const,
  },
] as const;

const consultingSteps = [
  {
    title: "Nos cuentas tu caso",
    description: "Inmueble, uso previsto y objetivo principal.",
  },
  {
    title: "Analizamos necesidades",
    description: "Consumo, espacio disponible e instalación existente.",
  },
  {
    title: "Recomendamos solución",
    description: "Aerotermia, fotovoltaica, geotermia o combinación según viabilidad.",
  },
  {
    title: "Preparamos propuesta",
    description: "Información clara para avanzar con criterio.",
  },
] as const;

const trustItems = [
  { title: "Asesoramiento gratuito", icon: ClipboardCheck },
  { title: "Particulares y profesionales", icon: Users },
  { title: "Catálogo especializado", icon: FileText },
  { title: "Instalación profesional", icon: ShieldCheck },
  { title: "Ahorro y eficiencia", icon: Zap },
  { title: "Aerotermia · Fotovoltaica · Geotermia", icon: HousePlug },
] as const;

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

export function MaclimaHome() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main>
        <Hero />
        <Verticals />
        <AerothermalEfficiency />
        <PhotovoltaicIntelligence />
        <GeothermalSection />
        <FeaturedSolutions />
        <ConsultiveCatalog />
        <FreeConsulting />
        <TrustBlock />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#EAEAFF]">
      <Image
        src="/hero-maclima.png"
        alt="Vivienda moderna con placas solares y sistema energético integrado"
        fill
        className="absolute inset-0 z-0 object-cover object-[95%_center] md:object-[56%_center] lg:object-[54%_center] xl:object-[52%_center]"
        priority
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(234,234,255,0.88)_24%,rgba(234,234,255,0.52)_42%,rgba(234,234,255,0.14)_60%,rgba(23,17,26,0.02)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38)_0%,rgba(234,234,255,0.06)_35%,rgba(23,17,26,0.10)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_45%,transparent_70%)] md:hidden" />
      <div className="absolute inset-0 z-0 opacity-55 [background-image:linear-gradient(rgba(133,14,136,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.09)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_22%,rgba(217,217,255,0.28),transparent_34%),radial-gradient(circle_at_12%_82%,rgba(133,14,136,0.12),transparent_30%)]" />

      <div className="absolute right-[12%] top-[9%] z-10 hidden items-center gap-1.5 rounded-full border border-[#D9D9FF]/50 bg-white/45 px-3 py-1 backdrop-blur-sm lg:flex">
        <span className="h-1 w-1 rounded-full bg-[#850E88]/60" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-[0.14em] text-[#5f0a63]">MACLIMA CALOR Y FRÍO S.L.</span>
      </div>

      <div className="mx-auto flex min-h-[640px] max-w-7xl items-stretch px-4 pt-10 pb-10 sm:min-h-[640px] sm:items-center sm:px-6 sm:py-14 md:items-center lg:min-h-[min(690px,calc(100svh-76px))] lg:px-8 lg:py-12 xl:min-h-[min(720px,calc(100svh-76px))] xl:py-14">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col max-w-[640px] lg:max-w-[680px]"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-[#850E88]/15 bg-white/[0.74] px-3 py-1.5 text-xs font-bold text-[#850E88] shadow-sm backdrop-blur md:mb-4 md:px-4 md:py-2 md:text-sm lg:mb-3">
            <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden="true" />
            <span className="md:hidden">Distribución · instalación · asesoramiento</span>
            <span className="hidden md:block">Distribución, instalación y asesoramiento técnico</span>
          </div>
          <h1 className="max-w-[620px] text-[2rem] font-black leading-[1.08] text-[#17111A] sm:text-[2.6rem] md:text-[3rem] lg:max-w-[600px] lg:text-[3rem] lg:leading-[1.04] xl:max-w-[620px] xl:text-[3.25rem]">
            <span className="block md:hidden">Aerotermia, solar y geotermia para ahorrar energía</span>
            <span className="hidden md:block">Aerotermia, fotovoltaica y geotermia para ahorrar energía</span>
          </h1>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-6 text-[#3D3748] sm:mt-4 sm:text-lg sm:leading-8 lg:mt-3 lg:max-w-[34rem] lg:text-[1.05rem] lg:leading-7">
            <span className="block md:hidden">Soluciones energéticas en Madrid con asesoramiento técnico gratuito.</span>
            <span className="hidden md:block">Distribuimos e instalamos soluciones de aerotermia, fotovoltaica y geotermia en Madrid para viviendas, negocios y profesionales del sector, con asesoramiento técnico gratuito para elegir el sistema más eficiente.</span>
          </p>
          <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#D9D9FF]/50 bg-white/45 px-3 py-1 backdrop-blur-sm lg:hidden">
            <span className="h-1 w-1 rounded-full bg-[#850E88]/60" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.10em] text-[#3D2E42]">MACLIMA CALOR Y FRÍO S.L.</span>
          </div>
          <div className="mt-4 hidden flex-wrap gap-2 sm:flex lg:mt-3">
            {heroSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-lg border border-[#850E88]/15 bg-white/[0.72] px-3 py-2 text-sm font-bold text-[#17111A] backdrop-blur lg:py-1.5"
              >
                {signal}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3 pt-8 sm:mt-7 sm:flex-row sm:pt-0 lg:mt-6">
            <Link
              href="/contacto"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(133,14,136,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] hover:shadow-[0_20px_46px_rgba(133,14,136,0.30)] sm:min-h-[52px] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
            >
              Solicitar consultoría gratuita
              <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1 sm:h-5 sm:w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/catalogo"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#850E88]/20 bg-white/[0.84] px-5 py-3 text-sm font-bold text-[#850E88] shadow-sm backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_rgba(133,14,136,0.10)] sm:min-h-[52px] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
            >
              Ver catálogo
              <FileText className="h-4 w-4 transition duration-200 ease-out group-hover:-translate-y-0.5 sm:h-5 sm:w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-5 hidden flex-wrap gap-2 sm:flex lg:mt-4">
            {heroTrustLine.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/[0.45] px-3 py-1.5 text-sm font-semibold text-[#17111A] backdrop-blur-sm lg:py-1"
              >
                <Check className="h-3.5 w-3.5 text-[#850E88]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Verticals() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F9F7FF_54%,#FFFFFF_100%)] py-12 sm:py-20">
      <div className="absolute left-[-12%] top-16 h-72 w-72 rounded-full bg-[#EAEAFF] blur-3xl" />
      <div className="absolute bottom-6 right-[-10%] h-64 w-64 rounded-full bg-[#F2B84B]/14 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
            SOLUCIONES PRINCIPALES
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
            Tres tecnologías, un mismo objetivo: ahorrar energía
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
            Integramos aerotermia, fotovoltaica y geotermia para mejorar el
            confort, reducir el consumo y adaptar cada instalación a viviendas,
            negocios o proyectos profesionales.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <SolutionCard
            icon={ThermometerSun}
            title="Aerotermia"
            subtitle="Confort térmico eficiente"
            text="Calefacción, refrigeración y agua caliente sanitaria aprovechando la energía del aire exterior."
            benefits={aerothermalBenefits}
            href="#aerotermia"
            cta="Explorar aerotermia"
            tone="aero"
          />
          <SolutionCard
            icon={PanelTop}
            title="Fotovoltaica"
            subtitle="Energía solar para autoconsumo"
            text="Producción de electricidad solar para reducir el consumo de red y aprovechar mejor la energía disponible."
            benefits={photovoltaicBenefits}
            href="#fotovoltaica"
            cta="Explorar fotovoltaica"
            tone="solar"
          />
          <SolutionCard
            icon={Layers}
            title="Geotermia"
            subtitle="Energía del terreno"
            text="Climatización eficiente aprovechando la temperatura estable del terreno para calefacción, refrigeración y ACS."
            benefits={geothermalBenefits}
            href="#geotermia"
            cta="Explorar geotermia"
            tone="geo"
          />
        </div>

        <motion.div
          {...fadeUp}
          className="relative mx-auto mt-6 max-w-4xl overflow-hidden rounded-[28px] border border-[#850E88]/15 bg-[#17111A] px-5 py-5 text-white shadow-[0_24px_70px_rgba(23,17,26,0.16)] sm:px-7"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(217,217,255,0.24),transparent_34%),radial-gradient(circle_at_80%_50%,rgba(242,184,75,0.18),transparent_30%)]" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D9D9FF]">
                Solución energética combinada
              </p>
              <p className="mt-1 max-w-2xl text-base font-semibold leading-7 text-white/90">
                Podemos estudiar la combinación de aerotermia, fotovoltaica y
                geotermia según las condiciones del inmueble, consumo y
                objetivos de ahorro.
              </p>
            </div>
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#D9D9FF]">
              <HousePlug className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AerothermalEfficiency() {
  return (
    <section
      id="aerotermia"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_42%,#EAEAFF_100%)] py-12 sm:py-20"
    >
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(133,14,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute right-[-14%] top-10 h-72 w-72 rounded-full bg-[#D9D9FF] blur-3xl" />
      <div className="absolute bottom-[-18%] left-[-10%] h-80 w-80 rounded-full bg-[#850E88]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-black uppercase text-[#850E88]">
              Aerotermia eficiente
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
              Energía renovable del aire para climatizar tu vivienda o negocio
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F5A66]">
              La aerotermia aprovecha la energía presente en el aire exterior
              para generar calefacción, refrigeración y agua caliente sanitaria
              con un consumo eléctrico reducido. Es una solución limpia,
              eficiente y preparada para sustituir sistemas tradicionales
              basados en combustibles fósiles.
            </p>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[#17111A]">
              En Maclima te ayudamos a estudiar tu caso y elegir el sistema más
              adecuado según el tipo de inmueble, consumo, instalación existente
              y objetivos de ahorro.
            </p>
            <Link
              href="/aerotermia"
              className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] hover:shadow-[0_24px_54px_rgba(133,14,136,0.28)] sm:w-auto"
            >
              Solicitar asesoramiento en aerotermia
              <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.article
            {...fadeUp}
            className="relative overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(145deg,#FFFFFF_0%,#FFF2D8_34%,#EAEAFF_100%)] p-6 shadow-[0_30px_90px_rgba(133,14,136,0.18)] backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,#850E88,transparent)]" />
            <div className="absolute right-[-42px] top-[-42px] h-40 w-40 rounded-full bg-[#F2B84B]/28 blur-3xl" />
            <div className="absolute bottom-[-48px] left-[-38px] h-44 w-44 rounded-full bg-[#850E88]/12 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="inline-flex rounded-full border border-[#850E88]/15 bg-white/[0.72] px-3 py-2 text-xs font-black uppercase tracking-wide text-[#850E88] shadow-sm backdrop-blur">
                    ENERGÍA AMBIENTAL
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-[#17111A]">
                    Hasta un 80% de energía aprovechada del aire
                  </h3>
                </div>
                <span className="rounded-[24px] bg-[linear-gradient(135deg,#850E88_0%,#A018A4_48%,#F2B84B_145%)] px-5 py-4 text-4xl font-black leading-none text-white shadow-[0_20px_46px_rgba(133,14,136,0.28)]">
                  80%
                </span>
              </div>
              <p className="mt-4 text-base leading-7 text-[#5F5A66]">
                La aerotermia aprovecha energía ambiental del aire exterior y
                utiliza electricidad para mover el sistema.
              </p>

              <div className="mt-6 grid gap-3 rounded-[24px] border border-white/80 bg-white/[0.66] p-3 shadow-inner backdrop-blur sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-sm font-black text-[#17111A]">
                      4 partes del aire
                    </span>
                    <span className="rounded-full bg-[#FFF2D8] px-2.5 py-1 text-xs font-black text-[#9A5B12]">
                      Aire exterior
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="group/energy relative overflow-hidden rounded-2xl border border-[#D99A2B]/22 bg-[linear-gradient(135deg,#FFF2D8_0%,#F3EFFF_100%)] p-3 shadow-[0_12px_26px_rgba(242,184,75,0.18)]"
                      >
                        <span className="absolute right-[-18px] top-[-18px] h-14 w-14 rounded-full bg-[#F2B84B]/32 blur-xl transition duration-200 ease-out group-hover/energy:scale-125" />
                        <AirVent
                          className="relative h-6 w-6 text-[#850E88]"
                          aria-hidden="true"
                        />
                        <span className="relative mt-2 block text-sm font-black text-[#17111A]">
                          Aire
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center py-1 text-[#850E88] sm:px-1">
                  <ArrowRight
                    className="hidden h-7 w-7 sm:block"
                    aria-hidden="true"
                  />
                  <span className="h-px w-full bg-[linear-gradient(90deg,transparent,#850E88,transparent)] sm:hidden" />
                </div>

                <div className="grid gap-3">
                  <div className="relative overflow-hidden rounded-2xl border border-[#38BDF8]/20 bg-[linear-gradient(135deg,#F1FBFF_0%,#F4F0FF_100%)] p-4 shadow-[0_12px_28px_rgba(56,189,248,0.12)]">
                    <span className="absolute right-[-18px] top-[-18px] h-14 w-14 rounded-full bg-[#38BDF8]/20 blur-xl" />
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#850E88] shadow-sm">
                        <Zap className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-black text-[#17111A]">
                          1 parte eléctrica
                        </p>
                        <p className="mt-1 text-xs font-bold text-[#5F5A66]">
                          Electricidad
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-[#850E88]/18 bg-[#17111A] p-4 text-white shadow-[0_16px_34px_rgba(23,17,26,0.18)]">
                    <span className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,#F2B84B,transparent)]" />
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-[#F2B84B]">
                        <Home className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-black">
                          Energía útil para climatización y ACS
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white/70">
                          Calefacción, refrigeración y agua caliente sanitaria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-full border border-white/80 bg-white/[0.72] p-1 shadow-inner">
                <div className="h-2.5 w-4/5 rounded-full bg-[linear-gradient(90deg,#850E88_0%,#A018A4_52%,#F2B84B_100%)] shadow-[0_0_24px_rgba(242,184,75,0.34)]" />
              </div>
              <div className="mt-5 rounded-2xl border border-[#D9D9FF] bg-[#F8F7FF] px-4 py-3 text-sm font-semibold leading-6 text-[#5F5A66]">
                Representación orientativa según tecnología, rendimiento del
                equipo y condiciones de instalación.
              </div>
            </div>
          </motion.article>
        </div>

        <motion.div {...fadeUp} className="mt-10 sm:mt-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
            <h3 className="text-2xl font-black text-[#17111A] sm:text-3xl">
              Ventajas de instalar aerotermia
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#5F5A66]">
              Una sola tecnología puede cubrir gran parte de las necesidades
              térmicas de una vivienda o negocio, mejorando el confort durante
              todo el año y reduciendo el consumo energético.
            </p>
            </div>
            <span className="inline-flex w-fit rounded-full border border-[#850E88]/15 bg-white/[0.72] px-4 py-2 text-xs font-black uppercase text-[#850E88] shadow-sm backdrop-blur">
              Banda de beneficios
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {aerothermalAdvantages.map((advantage) => (
              <EnergyAdvantageCard
                key={advantage.title}
                icon={advantage.icon}
                title={advantage.title}
                text={advantage.text}
                accent={advantage.accent}
                chip={advantage.chip}
              />
            ))}
          </div>

          <p className="mt-5 text-sm font-semibold leading-6 text-[#5F5A66]">
            <span className="font-black text-[#850E88]">Compatible con:</span>{" "}
            suelo radiante · techo radiante · fancoils · radiadores de agua ·
            ACS
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PhotovoltaicIntelligence() {
  return (
    <section
      id="fotovoltaica"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#EAEAFF_0%,#FFFFFF_48%,#F8F7FF_100%)] py-12 sm:py-20"
    >
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(133,14,136,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.055)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute left-[-12%] top-12 h-80 w-80 rounded-full bg-[#F2B84B]/18 blur-3xl" />
      <div className="absolute right-[-14%] bottom-[-16%] h-96 w-96 rounded-full bg-[#850E88]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[36px] border border-white/80 bg-[radial-gradient(circle_at_74%_18%,rgba(242,184,75,0.2),transparent_26%),linear-gradient(135deg,#FFFFFF_0%,#FFF8EE_38%,#EAEAFF_100%)] p-5 shadow-[0_32px_100px_rgba(133,14,136,0.16)] sm:p-7 lg:p-9"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.08fr)] lg:items-center lg:gap-8">
            <div>
              <p className="text-sm font-black uppercase text-[#850E88]">
                FOTOVOLTAICA INTELIGENTE
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                Produce tu propia energía solar y reduce tu consumo de red
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F5A66]">
                La energía fotovoltaica transforma la luz del sol en
                electricidad para cubrir parte del consumo de tu vivienda,
                negocio o instalación profesional. Una solución eficiente,
                escalable y compatible con baterías, aerotermia y autoconsumo.
              </p>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[#17111A]">
                En Maclima analizamos tu consumo, espacio disponible y objetivos
                de ahorro para recomendarte una instalación fotovoltaica
                adaptada a tu proyecto.
              </p>
              <Link
                href="/fotovoltaica"
                className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] hover:shadow-[0_24px_54px_rgba(133,14,136,0.28)] sm:w-auto"
              >
                Solicitar asesoramiento fotovoltaico
                <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <div className="mt-8 grid gap-3">
                {photovoltaicHighlights.map((benefit) => (
                  <PhotovoltaicHighlight
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    text={benefit.text}
                    accent={benefit.accent}
                  />
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-[#850E88]/14 blur-3xl" />
              <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/80 bg-[linear-gradient(145deg,#FFFFFF_0%,#F7F3FF_58%,#EAEAFF_100%)] p-4 shadow-[0_30px_90px_rgba(23,17,26,0.16)] sm:min-h-[520px] lg:min-h-[650px]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_16%,rgba(242,184,75,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(133,14,136,0.1)_100%)]" />
                <Image
                  src="/fotovoltaica.png"
                  alt="Sistema fotovoltaico con paneles solares, inversor y batería para autoconsumo"
                  width={1450}
                  height={1024}
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="absolute left-1/2 top-1/2 h-auto w-[128%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_32px_58px_rgba(133,14,136,0.2)] sm:w-[118%] lg:w-[126%]"
                />
                <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/90 px-3 py-2 text-xs font-black uppercase text-[#850E88] shadow-sm backdrop-blur">
                  Autoconsumo solar
                </span>
                <span className="absolute left-5 top-16 rounded-full border border-white/60 bg-white/90 px-3 py-2 text-xs font-black text-[#17111A] shadow-sm backdrop-blur sm:left-auto sm:right-5 sm:top-5">
                  Paneles · Inversor · Batería
                </span>
                <span className="absolute bottom-5 left-5 rounded-full border border-white/60 bg-white/90 px-3 py-2 text-xs font-black text-[#850E88] shadow-sm backdrop-blur">
                  Compatible con aerotermia
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7 overflow-hidden rounded-[24px] border border-[#D9D9FF]/80 bg-[#17111A] p-5 text-white shadow-[0_22px_64px_rgba(23,17,26,0.16)] sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black uppercase text-[#F2B84B]">
                  Solución combinada
                </span>
                <h3 className="mt-3 text-2xl font-black">
                  Aerotermia + fotovoltaica: una combinación eficiente
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/70">
                  La energía solar puede apoyar el consumo eléctrico de sistemas
                  de aerotermia, ayudando a optimizar calefacción, refrigeración
                  y agua caliente sanitaria según cada instalación.
                </p>
              </div>
              <Link
                href="/consultoria-gratuita"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#850E88] shadow-[0_16px_34px_rgba(255,255,255,0.12)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FFF2D8] sm:w-auto"
              >
                Consultar solución combinada
                <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GeothermalSection() {
  return (
    <section
      id="geotermia"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#EAEAFF_0%,#FFFFFF_48%,#F8F7FF_100%)] py-12 sm:py-20"
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(133,14,136,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.055)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute right-[-8%] top-[-4%] h-[55%] w-[42%] rounded-full bg-[#2F7D6D]/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-8%] h-64 w-64 rounded-full bg-[#850E88]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[36px] border border-[#D6EFE8]/50 bg-[radial-gradient(circle_at_76%_18%,rgba(47,125,109,0.10),transparent_40%),linear-gradient(135deg,#FFFFFF_0%,#F0F9F6_26%,#EAEAFF_100%)] p-5 shadow-[0_32px_100px_rgba(133,14,136,0.13)] sm:p-7 lg:p-9"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2F7D6D]">
                Geotermia eficiente
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                Energía estable del terreno para climatizar tu vivienda o negocio
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F5A66]">
                La geotermia aprovecha la temperatura constante del subsuelo para
                apoyar sistemas de calefacción, refrigeración y agua caliente
                sanitaria con un alto nivel de eficiencia.
              </p>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[#17111A]">
                En Maclima estudiamos la viabilidad de cada instalación para
                valorar si la geotermia encaja con el terreno, el inmueble y los
                objetivos del proyecto.
              </p>
              <Link
                href="/contacto"
                className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] hover:shadow-[0_24px_54px_rgba(133,14,136,0.28)] sm:w-auto"
              >
                Solicitar asesoramiento en geotermia
                <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] shadow-[0_28px_84px_rgba(23,17,26,0.22)] sm:min-h-[400px] lg:min-h-[500px]">
              <Image
                src="/geotermia.png"
                alt="Sistema de geotermia con vivienda moderna, tubos enterrados y equipos técnicos"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,30,25,0.06)_0%,transparent_28%,rgba(15,30,25,0.72)_100%)]" />
              <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white backdrop-blur-sm">
                Geotermia
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="text-base font-black text-white sm:text-lg">
                  Temperatura estable del subsuelo
                </h3>
                <p className="mt-1 text-sm font-semibold leading-5 text-white/75">
                  Aprovecha la estabilidad térmica del terreno para mejorar la
                  eficiencia del sistema.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Alta eficiencia", "Climatización", "ACS"].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm"
                    >
                      <Check className="h-3 w-3 text-[#A8D5C8]" aria-hidden="true" />
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs font-semibold text-white/45">
                  Requiere estudio previo según terreno e inmueble.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedSolutions() {
  return (
    <section id="ben-dual-air-destacado" className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[36px] border border-[#D9D9FF]/80 bg-[radial-gradient(circle_at_18%_10%,rgba(217,217,255,0.82),transparent_26%),linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_46%,#EAEAFF_100%)] p-5 shadow-[0_30px_96px_rgba(133,14,136,0.13)] sm:p-7 lg:p-9"
        >
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase text-[#850E88]">
              PRODUCTO ESTRELLA EN AEROTERMIA
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
              BEN Dual-Air: aerotermia compacta para climatización,
              ventilación y ACS
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F5A66]">
              BEN Dual-Air integra calefacción, refrigeración, ventilación y
              agua caliente sanitaria en una solución compacta de instalación
              interior. Está pensada para pisos, viviendas unifamiliares, obra
              nueva y reformas donde se busca confort, eficiencia y control sin
              depender de una unidad exterior visible.
            </p>
            <Link
              href="/aerotermia"
              className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] hover:shadow-[0_24px_54px_rgba(133,14,136,0.28)] sm:w-auto"
            >
              Solicitar asesoramiento sobre BEN Dual-Air
              <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(380px,0.94fr)] lg:items-stretch lg:gap-8">
            <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/80 bg-[#17111A] shadow-[0_28px_84px_rgba(23,17,26,0.16)] sm:min-h-[520px]">
              <Image
                src="/imagen/BEN-Dual-AIR/electric-bruin.webp"
                alt="BEN Dual-Air sistema de aerotermia interior compacto"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[56%_center]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,26,0.02)_0%,rgba(23,17,26,0.36)_100%)]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/88 px-3 py-2 text-xs font-black uppercase text-[#850E88] shadow-sm backdrop-blur">
                BEN Dual-Air
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-white/88 p-4 shadow-[0_16px_38px_rgba(23,17,26,0.18)] backdrop-blur">
                <p className="text-sm font-black text-[#17111A]">
                  Sistema interior compacto
                </p>
                <p className="mt-1 text-xs font-bold leading-5 text-[#5F5A66]">
                  Climatización, ventilación y ACS según configuración del
                  proyecto.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/80 bg-white/[0.78] p-6 shadow-[0_22px_70px_rgba(133,14,136,0.1)] backdrop-blur sm:p-8">
              <p className="text-sm font-black uppercase text-[#850E88]">
                Todo eléctrico, compacto y preparado para viviendas modernas
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-[#17111A]">
                Aerotermia interior sin unidad exterior
              </h3>
              <p className="mt-5 text-base leading-7 text-[#5F5A66]">
                BEN Dual-Air es una bomba de calor interior que puede integrar
                ventilación, calefacción, refrigeración y agua caliente sanitaria
                en una unidad compacta. Su diseño permite resolver la instalación
                sin unidad exterior, una ventaja importante en pisos, comunidades
                o viviendas donde no se quiere ocupar fachada, terraza o cubierta.
              </p>
              <p className="mt-4 text-base font-semibold leading-7 text-[#17111A]">
                En condiciones adecuadas de instalación, el sistema puede montarse
                en aproximadamente 3 horas, reduciendo tiempos de intervención y
                molestias en la vivienda. En Maclima revisamos cada caso para
                confirmar viabilidad, configuración y necesidades reales del
                proyecto.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#D9D9FF] bg-[#F8F7FF] p-4">
                  <p className="text-xs font-black uppercase text-[#850E88]">
                    Formato
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#17111A]">
                    Sin unidad exterior
                  </p>
                </div>
                <div className="rounded-2xl border border-[#D9D9FF] bg-[#F8F7FF] p-4">
                  <p className="text-xs font-black uppercase text-[#850E88]">
                    Enfoque
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#17111A]">
                    Pisos y unifamiliares
                  </p>
                </div>
              </div>
              <p className="mt-2 text-[11px] leading-4 text-[#5F5A66]">
                *Aproximadamente 3 horas según condiciones de instalación y
                viabilidad técnica.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <BenFeatureBandCard
              icon={Zap}
              title="Híbrido o 100% eléctrico"
              text="Funciona como sistema eléctrico completo o como apoyo híbrido según la instalación."
            />
            <BenFeatureBandCard
              icon={Smartphone}
              title="Smart y conectado"
              text="Control y seguimiento del sistema mediante app y termostato conectado."
            />
            <BenFeatureBandCard
              icon={Home}
              title="Integración interior compacta"
              text="Diseñado para integrarse en viviendas modernas sin unidad exterior visible."
            />
            <BenFeatureBandCard
              icon={ThermometerSun}
              title="Confort eficiente todo el año"
              text="Calefacción, refrigeración, ventilación y ACS en una solución compacta."
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 rounded-[22px] border border-white/70 bg-white/[0.56] p-3 backdrop-blur">
            {benBullets.map((benefit) => (
              <span
                key={benefit}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D9D9FF]/80 bg-[#F8F7FF]/80 px-2.5 py-1.5 text-xs font-bold text-[#4A4352]"
              >
                <Check className="h-3.5 w-3.5 text-[#850E88]" aria-hidden="true" />
                {benefit}
              </span>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-[#D9D9FF]/80 bg-[#17111A] p-5 text-white shadow-[0_24px_72px_rgba(23,17,26,0.16)] sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-black">
                  ¿Quieres saber si BEN Dual-Air encaja en tu proyecto?
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/70">
                  Analizamos tu vivienda, instalación existente y necesidades de
                  confort para recomendarte la solución más adecuada.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/consultoria-gratuita"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#850E88] shadow-[0_16px_34px_rgba(255,255,255,0.12)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FFF7FF]"
                >
                  Solicitar asesoramiento
                  <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  href="/aerotermia"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Ver soluciones de aerotermia
                  <ChevronRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ConsultiveCatalog() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#EAEAFF_100%)] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Catálogo consultivo"
          title="Catálogo consultivo de soluciones energéticas"
          text="Consulta algunas de las soluciones con las que trabaja Maclima en aerotermia, fotovoltaica y geotermia. El catálogo es orientativo: cada instalación se estudia antes de recomendar un equipo, combinación de sistemas o propuesta técnica."
        />
        <div className="mx-auto mt-5 max-w-2xl rounded-2xl border border-[#850E88]/12 bg-white/[0.8] px-4 py-3 text-center text-sm font-semibold leading-6 text-[#5F5A66] shadow-sm backdrop-blur">
          No vendemos productos de forma automática. Analizamos cada caso antes de recomendar.
        </div>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          <CatalogColumn
            icon={ThermometerSun}
            title="Aerotermia"
            items={aerothermalCatalog}
            href="/catalogo#aerotermia-catalogo"
            cta="Ver catálogo de aerotermia"
          />
          <CatalogColumn
            icon={PanelTop}
            title="Fotovoltaica"
            items={photovoltaicCatalog}
            href="/catalogo#fotovoltaica-catalogo"
            cta="Ver catálogo fotovoltaico"
            moreItemsNote="Y otras soluciones de soporte, estructura y protección."
          />
          <CatalogColumn
            icon={Layers}
            title="Geotermia"
            items={geothermalCatalog}
            href="/catalogo#geotermia-catalogo"
            cta="Ver catálogo de geotermia"
          />
        </div>
      </div>
    </section>
  );
}

function FreeConsulting() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-8 lg:px-8">
        <motion.div {...fadeUp}>
          <p className="text-xs font-black uppercase tracking-wider text-[#850E88]">
            Consultoría gratuita
          </p>
          <h2 className="mt-2 max-w-2xl text-2xl font-black leading-tight text-[#17111A] sm:text-3xl lg:text-4xl">
            Consulta gratuita para elegir la solución adecuada
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-[#5F5A66]">
            Analizamos tu vivienda, negocio o proyecto profesional para orientarte entre aerotermia, fotovoltaica, geotermia o una solución combinada.
          </p>
          <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-[#17111A]">
            El objetivo no es venderte un producto concreto, sino recomendarte la opción más eficiente y razonable según tu caso.
          </p>
          <Link
            href="/consultoria-gratuita"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(133,14,136,0.26)] transition hover:-translate-y-0.5 hover:bg-[#6f0b72] sm:w-auto"
          >
            Solicitar consultoría gratuita
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-[#D9D9FF] bg-[#EAEAFF] p-4 shadow-[0_16px_48px_rgba(133,14,136,0.10)] sm:p-5"
        >
          <div className="grid gap-2">
            {consultingSteps.map((step, index) => (
              <div key={step.title} className="group flex items-center gap-3 rounded-xl border border-white/70 bg-white p-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(133,14,136,0.06)]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#850E88] text-xs font-black text-white shadow-[0_8px_18px_rgba(133,14,136,0.16)]">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-black text-[#17111A]">{step.title}</p>
                  <p className="text-xs leading-5 text-[#5F5A66]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-[#850E88]/15 bg-white p-4 shadow-[0_10px_28px_rgba(23,17,26,0.05)]">
            <div className="grid gap-3 sm:grid-cols-2">
              <ContactField label="Nombre" />
              <ContactField label="Teléfono" />
              <ContactField label="Tipo de proyecto" wide />
              <ContactField label="Mensaje opcional" wide tall />
            </div>
            <Link
              href="/contacto"
              className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#850E88]/20 bg-white px-4 py-2.5 text-sm font-bold text-[#850E88] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#EAEAFF] hover:shadow-[0_10px_24px_rgba(133,14,136,0.08)]"
            >
              Continuar en contacto
              <ChevronRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBlock() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Confianza técnica"
          title="Distribución, instalación y asesoramiento técnico en un solo equipo"
          text="Una propuesta pensada para tomar decisiones energéticas con información clara, soporte técnico y una ejecución profesional."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <TrustCard key={item.title} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[linear-gradient(135deg,#7D0E80_0%,#6F0B72_42%,#D9D9FF_100%)] py-14 sm:py-22">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/[0.08] px-6 py-12 shadow-[0_28px_80px_rgba(23,17,26,0.18)] backdrop-blur-xl sm:px-10"
        >
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]" />
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            Da el primer paso hacia una instalación energética más eficiente
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#F8F7FF]">
            Habla con Maclima y recibe orientación personalizada para tu proyecto
            energético: aerotermia, fotovoltaica o geotermia.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/consultoria-gratuita"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-[#850E88] shadow-[0_18px_44px_rgba(23,17,26,0.18)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(23,17,26,0.24)]"
            >
              Solicitar consultoría
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
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase text-[#850E88]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[#5F5A66]">{text}</p>
    </motion.div>
  );
}



function PhotovoltaicHighlight({
  icon: Icon,
  title,
  text,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: "violet" | "solar" | "green";
}) {
  const accents = {
    violet: {
      shell: "border-[#850E88]/18 bg-[#F5F0FF]",
      icon: "text-[#850E88]",
      glow: "bg-[#850E88]/12",
    },
    solar: {
      shell: "border-[#D99A2B]/28 bg-[#FFF2D8]",
      icon: "text-[#9A5B12]",
      glow: "bg-[#F2B84B]/20",
    },
    green: {
      shell: "border-[#22C55E]/24 bg-[#ECFDF3]",
      icon: "text-[#16A34A]",
      glow: "bg-[#22C55E]/14",
    },
  }[accent];

  return (
    <article className="group flex gap-4 rounded-[22px] border border-white/80 bg-white/[0.74] p-4 shadow-[0_14px_38px_rgba(133,14,136,0.08)] backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_20px_52px_rgba(133,14,136,0.12)]">
      <span
        className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition duration-200 ease-out group-hover:scale-105 ${accents.shell}`}
      >
        <span className={`absolute inset-2 rounded-xl blur-md ${accents.glow}`} />
        <Icon
          className={`relative h-8 w-8 transition duration-200 ease-out group-hover:-translate-y-0.5 ${accents.icon}`}
          aria-hidden="true"
        />
      </span>
      <div>
        <h3 className="text-base font-black leading-tight text-[#17111A]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-[#5F5A66]">{text}</p>
      </div>
    </article>
  );
}

function EnergyAdvantageCard({
  icon: Icon,
  title,
  text,
  accent,
  chip,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: "orange" | "ice" | "violet" | "solar" | "green" | "rose";
  chip: string;
}) {
  const accents = {
    orange: {
      shell: "border-[#FB923C]/20 bg-[#FFF3E8]",
      icon: "text-[#EA580C]",
      glow: "bg-[#FB923C]/18",
    },
    ice: {
      shell: "border-[#38BDF8]/22 bg-[#ECFAFF]",
      icon: "text-[#0284C7]",
      glow: "bg-[#38BDF8]/18",
    },
    violet: {
      shell: "border-[#850E88]/18 bg-[#F5F0FF]",
      icon: "text-[#850E88]",
      glow: "bg-[#850E88]/12",
    },
    solar: {
      shell: "border-[#D99A2B]/24 bg-[#FFF2D8]",
      icon: "text-[#9A5B12]",
      glow: "bg-[#F2B84B]/24",
    },
    green: {
      shell: "border-[#22C55E]/22 bg-[#ECFDF3]",
      icon: "text-[#16A34A]",
      glow: "bg-[#22C55E]/16",
    },
    rose: {
      shell: "border-[#D946EF]/18 bg-[#FFF1FF]",
      icon: "text-[#A21CAF]",
      glow: "bg-[#D946EF]/14",
    },
  }[accent];

  return (
    <article className="group flex min-h-[205px] flex-col rounded-[22px] border border-white/80 bg-white p-5 shadow-[0_16px_44px_rgba(133,14,136,0.08)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(133,14,136,0.12)] xl:min-h-[230px]">
      <span
        className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border transition duration-200 ease-out group-hover:scale-105 group-hover:shadow-[0_14px_32px_rgba(23,17,26,0.1)] ${accents.shell}`}
      >
        <span className={`absolute inset-2 rounded-2xl blur-lg ${accents.glow}`} />
        <Icon
          className={`relative h-11 w-11 transition duration-200 ease-out group-hover:-translate-y-0.5 ${accents.icon}`}
          aria-hidden="true"
        />
      </span>
      <h4 className="mt-5 text-lg font-black leading-tight text-[#17111A]">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-5 text-[#5F5A66]">{text}</p>
      <div className="mt-auto pt-5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9D9FF]/80 bg-[#F8F7FF] px-2.5 py-1.5 text-[11px] font-bold leading-none text-[#4A4352]">
          <Check className="h-3 w-3 text-[#850E88]" aria-hidden="true" />
          {chip}
        </span>
      </div>
    </article>
  );
}

function SolutionCard({
  icon: Icon,
  title,
  subtitle,
  text,
  benefits,
  href,
  cta,
  tone,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  text: string;
  benefits: readonly string[];
  href: string;
  cta: string;
  tone: "aero" | "solar" | "geo";
}) {
  const cardAccent =
    tone === "solar"
      ? {
          glow: "bg-[#F2B84B]/18",
          iconShell: "border-[#D99A2B]/28 bg-[#FFF2D8]",
          icon: "text-[#9A5B12]",
          chip: "border-[#D99A2B]/24 bg-[#FFF2D8]",
          line: "from-transparent via-[#D99A2B] to-transparent",
        }
      : tone === "geo"
        ? {
            glow: "bg-[#10B981]/14",
            iconShell: "border-[#10B981]/24 bg-[#ECFDF5]",
            icon: "text-[#059669]",
            chip: "border-[#10B981]/20 bg-[#ECFDF5]",
            line: "from-transparent via-[#10B981] to-transparent",
          }
        : {
            glow: "bg-[#D9D9FF]/70",
            iconShell: "border-[#D9D9FF] bg-[#EAEAFF]",
            icon: "text-[#850E88]",
            chip: "border-[#D9D9FF]/80 bg-[#F8F7FF]",
            line: "from-transparent via-[#850E88] to-transparent",
          };

  return (
    <motion.article
      {...fadeUp}
      className="group relative flex min-h-full flex-col overflow-hidden rounded-[26px] border border-[#D9D9FF]/90 bg-white p-5 shadow-[0_22px_70px_rgba(23,17,26,0.07)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_28px_82px_rgba(133,14,136,0.12)] sm:rounded-[30px] sm:p-7 lg:p-8"
    >
      <div className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r ${cardAccent.line} opacity-70`} />
      <div className={`absolute right-[-22px] top-8 h-32 w-32 rounded-full ${cardAccent.glow} blur-2xl transition duration-300 ease-out group-hover:scale-110`} />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#EAEAFF]/55 blur-3xl" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border sm:h-16 sm:w-16 sm:rounded-[22px] ${cardAccent.iconShell} transition duration-200 ease-out group-hover:shadow-[0_14px_34px_rgba(23,17,26,0.1)]`}>
            <Icon className={`h-6 w-6 transition duration-200 ease-out group-hover:scale-105 sm:h-8 sm:w-8 ${cardAccent.icon}`} aria-hidden="true" />
          </span>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-[#850E88] sm:mt-6 sm:text-sm">
            {subtitle}
          </p>
          <h3 className="mt-2 text-2xl font-black text-[#17111A] sm:text-3xl">{title}</h3>
        </div>
      </div>
      <p className="mt-3 max-w-xl text-sm leading-6 text-[#5F5A66] sm:mt-4 sm:text-base sm:leading-7">{text}</p>
      <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
        {benefits.slice(0, 3).map((benefit) => (
          <span
            key={benefit}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-bold text-[#17111A] sm:gap-2 sm:px-3 sm:py-2 sm:text-sm ${cardAccent.chip}`}
          >
            <Check className="h-3 w-3 text-[#850E88] sm:h-4 sm:w-4" aria-hidden="true" />
            {benefit}
          </span>
        ))}
      </div>
      <Link
        href={href}
        className="relative mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-black text-[#850E88] transition duration-200 ease-out hover:text-[#6f0b72] sm:pt-7"
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </motion.article>
  );
}

function BenFeatureBandCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="group rounded-[30px] bg-[linear-gradient(135deg,#850E88_0%,#D9D9FF_52%,#F8F7FF_100%)] p-px transition duration-200 ease-out hover:-translate-y-0.5">
      <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[29px] bg-white px-5 py-6 text-center transition duration-200 ease-out group-hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFAFF_100%)] sm:min-h-[260px] sm:px-6 sm:py-8 md:min-h-[320px]">
        <Icon
          className="h-16 w-16 stroke-[1.5] text-[#850E88] transition duration-200 ease-out group-hover:-translate-y-1"
          aria-hidden="true"
        />
        <h3 className="mt-8 max-w-[13rem] text-xl font-black leading-snug text-[#17111A]">
          {title}
        </h3>
        <p className="mt-4 max-w-[15rem] text-sm font-semibold leading-6 text-[#5F5A66]">
          {text}
        </p>
      </div>
    </article>
  );
}

function CatalogColumn({
  icon: Icon,
  title,
  items,
  href,
  cta,
  moreItemsNote,
}: {
  icon: LucideIcon;
  title: string;
  items: readonly {
    name: string;
    text: string;
    href?: string;
    badge: string;
    featured?: boolean;
    kind: "product" | "brand" | "family";
    imageSrc?: string;
    thumbLabel?: string;
    thumbType:
      | "ben"
      | "brand"
      | "acs"
      | "clima"
      | "solar-thermal"
      | "tank"
      | "solar-panel"
      | "inverter"
      | "battery"
      | "kit"
      | "mount"
      | "hybrid"
      | "project"
      | "geo";
  }[];
  href: string;
  cta: string;
  moreItemsNote?: string;
}) {
  const visibleItems = items.slice(0, 4);

  return (
    <motion.article
      {...fadeUp}
      className="flex h-full flex-col rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_22px_70px_rgba(133,14,136,0.1)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_28px_82px_rgba(133,14,136,0.14)] sm:p-7"
    >
      <div className="flex min-h-[52px] items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAEAFF] text-[#850E88]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-black text-[#17111A]">{title}</h3>
      </div>
      <div className="mt-5 flex flex-1 flex-col gap-2">
        {visibleItems.map((item) => (
          <CatalogPreviewItem key={item.name} item={item} />
        ))}
      </div>
      {moreItemsNote ? (
        <p className="mt-3 rounded-xl border border-[#D9D9FF]/70 bg-[#F8F7FF] px-3 py-2 text-center text-xs font-semibold leading-5 text-[#5F5A66]">
          {moreItemsNote}
        </p>
      ) : null}
      <Link
        href={href}
        className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-3 text-sm font-bold text-white transition duration-200 ease-out hover:bg-[#6f0b72] hover:shadow-[0_18px_40px_rgba(133,14,136,0.22)]"
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </motion.article>
  );
}

function CatalogPreviewItem({
  item,
}: {
  item: {
    name: string;
    text: string;
    href?: string;
    badge: string;
    featured?: boolean;
    kind: "product" | "brand" | "family";
    imageSrc?: string;
    thumbLabel?: string;
    thumbType:
      | "ben"
      | "brand"
      | "acs"
      | "clima"
      | "solar-thermal"
      | "tank"
      | "solar-panel"
      | "inverter"
      | "battery"
      | "kit"
      | "mount"
      | "hybrid"
      | "project"
      | "geo";
  };
}) {
  const className = `group flex flex-1 items-center gap-3 rounded-[18px] border p-3 text-left transition duration-200 ease-out sm:gap-3.5 sm:p-3.5 ${
    item.featured
      ? "border-[#850E88]/18 bg-[linear-gradient(135deg,#FFFFFF_0%,#F9F7FF_56%,#EAEAFF_100%)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(133,14,136,0.08)]"
      : "border-[#D9D9FF]/65 bg-[#FDFDFF] hover:-translate-y-0.5 hover:border-[#850E88]/20 hover:bg-[#FAF9FF] hover:shadow-[0_10px_24px_rgba(133,14,136,0.06)]"
  }`;

  const content = (
    <>
      <CatalogThumbnail item={item} />
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-sm font-black leading-snug text-[#17111A]">
          {item.name}
        </p>
        <p className="mt-0.5 line-clamp-2 text-xs font-medium leading-5 text-[#5F5A66]">
          {item.text}
        </p>
      </div>
      <span className="shrink-0 text-[#B7AEC3] transition duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-[#850E88]">
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

function CatalogThumbnail({
  item,
}: {
  item: {
    name: string;
    kind: "product" | "brand" | "family";
    imageSrc?: string;
    thumbLabel?: string;
    featured?: boolean;
    thumbType:
      | "ben"
      | "brand"
      | "acs"
      | "clima"
      | "solar-thermal"
      | "tank"
      | "solar-panel"
      | "inverter"
      | "battery"
      | "kit"
      | "mount"
      | "hybrid"
      | "project"
      | "geo";
  };
}) {
  const styles =
    item.thumbType === "geo"
      ? "border-[#2F7D6D]/20 bg-[linear-gradient(135deg,#FFFFFF_0%,#E8F6F2_100%)] text-[#2F7D6D]"
      : item.kind === "brand"
        ? "border-[#D9D9FF]/80 bg-[linear-gradient(135deg,#FFFFFF_0%,#F3EEFF_100%)] text-[#850E88]"
        : item.kind === "family"
          ? "border-[#D99A2B]/16 bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF2D8_100%)] text-[#9A5B12]"
          : item.featured
            ? "border-[#850E88]/18 bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F1FF_66%,#EAEAFF_100%)] text-[#850E88]"
            : "border-[#D99A2B]/18 bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF5E2_100%)] text-[#9A5B12]";

  return (
    <div
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border shadow-[0_10px_24px_rgba(23,17,26,0.06)] sm:h-[72px] sm:w-[72px] ${styles}`}
    >
      {item.imageSrc ? (
        <Image
          src={item.imageSrc}
          alt={item.name}
          fill
          sizes="72px"
          unoptimized
          className={
            item.thumbType === "ben"
              ? "object-cover"
              : "object-contain p-1.5 drop-shadow-[0_6px_10px_rgba(23,17,26,0.12)]"
          }
        />
      ) : item.thumbType === "brand" ? (
        <span className="px-2 text-center text-[0.62rem] font-black uppercase leading-tight tracking-[0.08em] sm:text-[0.68rem]">
          {item.thumbLabel ?? item.name}
        </span>
      ) : (
        <CatalogMockup type={item.thumbType} label={item.thumbLabel} />
      )}
    </div>
  );
}

function CatalogMockup({
  type,
  label,
}: {
  type:
    | "ben"
    | "acs"
    | "clima"
    | "solar-thermal"
    | "tank"
    | "solar-panel"
    | "inverter"
    | "battery"
    | "kit"
    | "mount"
    | "hybrid"
    | "project"
    | "geo";
  label?: string;
}) {
  if (type === "geo") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-3 top-3 h-4 rounded-lg border border-[#2F7D6D]/22 bg-[#E8F6F2]" />
        <div className="absolute inset-x-5 top-9 h-3 rounded-lg border border-[#2F7D6D]/16 bg-[linear-gradient(90deg,#E8F6F2_0%,#EAEAFF_100%)]" />
        <div className="absolute inset-x-7 top-14 h-2.5 rounded-lg border border-[#D9D9FF]/60 bg-[#EAEAFF]" />
        <div className="absolute left-1/2 bottom-3 h-5 w-1 -translate-x-1/2 rounded-full bg-[#2F7D6D]/40" />
      </div>
    );
  }
  if (type === "acs" || type === "tank") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-[32%] bottom-3 top-3 rounded-[999px] border border-white/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#EEE7FF_100%)] shadow-[0_8px_18px_rgba(23,17,26,0.08)]" />
        <div className="absolute left-1/2 top-4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#850E88]/35" />
        <div className="absolute inset-x-[38%] bottom-2 h-1 rounded-full bg-[#D99A2B]/35" />
      </div>
    );
  }

  if (type === "solar-panel") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-2 right-2 top-3 h-8 rounded-xl border border-[#D99A2B]/24 bg-[linear-gradient(180deg,#F6F4FF_0%,#E6ECFF_100%)] shadow-[0_8px_18px_rgba(23,17,26,0.06)]" />
        <div className="absolute left-3 right-3 top-[18px] grid grid-cols-4 gap-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="h-2 rounded-[4px] bg-[#7D8DB0]/45"
            />
          ))}
        </div>
        <div className="absolute left-1/2 top-12 h-2 w-8 -translate-x-1/2 rounded-full bg-[#F2B84B]/55" />
      </div>
    );
  }

  if (type === "inverter") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-[28%] inset-y-[18%] rounded-[18px] border border-white/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F1FF_100%)] shadow-[0_10px_20px_rgba(23,17,26,0.08)]" />
        <div className="absolute left-1/2 top-[32%] h-3 w-3 -translate-x-1/2 rounded-full bg-[#D99A2B]/65" />
        <div className="absolute inset-x-[36%] bottom-[24%] h-1.5 rounded-full bg-[#850E88]/22" />
      </div>
    );
  }

  if (type === "battery") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-[30%] inset-y-[18%] rounded-[16px] border border-white/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF2D8_100%)] shadow-[0_10px_20px_rgba(23,17,26,0.08)]" />
        <div className="absolute inset-x-[40%] top-[20%] h-1.5 rounded-full bg-[#9A5B12]/40" />
        <div className="absolute inset-x-[38%] top-[42%] h-2 rounded-full bg-[linear-gradient(90deg,#850E88_0%,#F2B84B_100%)]" />
        <div className="absolute inset-x-[38%] top-[52%] h-2 rounded-full bg-[#F2B84B]/35" />
      </div>
    );
  }

  if (type === "clima") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-3 right-3 top-4 h-4 rounded-full border border-[#850E88]/14 bg-white/85" />
        <div className="absolute left-4 right-4 top-10 h-[2px] rounded-full bg-[#38BDF8]/50" />
        <div className="absolute left-4 right-4 top-[46px] h-[2px] rounded-full bg-[#FB923C]/45" />
      </div>
    );
  }

  if (type === "solar-thermal") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-2.5 right-2.5 top-4 h-6 rounded-xl border border-[#D99A2B]/22 bg-[linear-gradient(180deg,#FFF7EA_0%,#F4EEFF_100%)]" />
        <div className="absolute left-1/2 top-2.5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#F2B84B]/70" />
        <div className="absolute left-4 right-4 top-12 h-1.5 rounded-full bg-[#850E88]/20" />
      </div>
    );
  }

  if (type === "kit") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-2.5 top-4 h-7 w-7 rounded-xl border border-white/80 bg-white/90 shadow-sm" />
        <div className="absolute right-2.5 top-4 h-7 w-7 rounded-xl border border-[#D99A2B]/20 bg-[#FFF2D8]" />
        <div className="absolute bottom-4 left-1/2 h-7 w-10 -translate-x-1/2 rounded-xl border border-[#850E88]/14 bg-[#F5F0FF]" />
      </div>
    );
  }

  if (type === "mount") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-3 top-5 h-px bg-[#9A5B12]/35" />
        <div className="absolute left-4 top-4 h-7 w-px bg-[#9A5B12]/35" />
        <div className="absolute left-1/2 top-4 h-7 w-px -translate-x-1/2 bg-[#9A5B12]/35" />
        <div className="absolute right-4 top-4 h-7 w-px bg-[#9A5B12]/35" />
        <div className="absolute inset-x-4 top-8 h-3 rounded-full bg-[#F2B84B]/20" />
      </div>
    );
  }

  if (type === "hybrid") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-3 top-4 h-7 w-7 rounded-xl border border-[#D99A2B]/22 bg-[#FFF2D8]" />
        <div className="absolute right-3 top-4 h-7 w-7 rounded-xl border border-[#850E88]/16 bg-[#F5F0FF]" />
        <div className="absolute left-1/2 top-7 h-px w-6 -translate-x-1/2 bg-[linear-gradient(90deg,#D99A2B_0%,#850E88_100%)]" />
        <div className="absolute inset-x-5 bottom-4 h-2 rounded-full bg-[#17111A]/10" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute left-3 right-3 top-3 h-8 rounded-2xl border border-white/80 bg-white/90 shadow-sm" />
      <div className="absolute left-4 right-4 top-5 h-1.5 rounded-full bg-[#850E88]/16" />
      <div className="absolute left-4 right-8 top-9 h-1.5 rounded-full bg-[#D99A2B]/22" />
      <div className="absolute bottom-3 left-3 right-3 rounded-full bg-[#F5F0FF] px-2 py-1 text-center text-[0.52rem] font-black uppercase tracking-[0.08em] text-[#850E88]">
        {label ?? "PROYECTO"}
      </div>
    </div>
  );
}

function TrustCard({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <motion.article
      {...fadeUp}
      className="group rounded-2xl border border-[#D9D9FF] bg-[#F8F7FF] p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F0EDFF] hover:shadow-[0_14px_34px_rgba(133,14,136,0.08)]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9D9FF] text-[#850E88] transition duration-200 ease-out group-hover:scale-105">
        <Icon className="h-5 w-5 transition duration-200 ease-out group-hover:-translate-y-0.5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-black text-[#17111A]">{title}</h3>
    </motion.article>
  );
}

function ContactField({
  label,
  wide = false,
  tall = false,
}: {
  label: string;
  wide?: boolean;
  tall?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label className="text-[11px] font-black uppercase tracking-wide text-[#850E88]">{label}</label>
      {tall ? (
        <textarea
          className="mt-1.5 min-h-[72px] w-full rounded-lg border border-[#D9D9FF] bg-[#F8F7FF] px-3 py-2 text-sm text-[#17111A] outline-none transition duration-200 ease-out placeholder:text-[#8D8696] hover:border-[#C8B8D7] focus:border-[#850E88] focus:bg-white focus:shadow-[0_0_0_3px_rgba(133,14,136,0.08)]"
          placeholder="Cuéntanos brevemente tu proyecto"
        />
      ) : (
        <input
          className="mt-1.5 h-10 w-full rounded-lg border border-[#D9D9FF] bg-[#F8F7FF] px-3 text-sm text-[#17111A] outline-none transition duration-200 ease-out placeholder:text-[#8D8696] hover:border-[#C8B8D7] focus:border-[#850E88] focus:bg-white focus:shadow-[0_0_0_3px_rgba(133,14,136,0.08)]"
          placeholder={label}
        />
      )}
    </div>
  );
}
