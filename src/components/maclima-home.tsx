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
  "Geotermia",
  "Fotovoltaica",
] as const;

const aerothermalBenefits = [
  "Climatización",
  "Refrigeración",
  "ACS",
  "Bajo consumo",
] as const;

const photovoltaicBenefits = [
  "Autoconsumo",
  "Ahorro",
  "Baterías",
  "Menor dependencia",
] as const;

const geothermalBenefits = [
  "ACS",
  "Refrigeración",
  "Climatización",
  "Alta eficiencia",
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

const bessFeatures = [
  {
    title: "Almacenamiento con baterías",
    text: "Guarda excedentes o energía disponible para usarla cuando más conviene.",
    icon: BatteryCharging,
  },
  {
    title: "Integración con fotovoltaica",
    text: "Permite aprovechar mejor una instalación solar nueva o existente.",
    icon: Sun,
  },
  {
    title: "Optimización del consumo",
    text: "Ayuda a adaptar el uso de energía a horarios, hábitos y tarifas.",
    icon: Gauge,
  },
  {
    title: "Mayor independencia energética",
    text: "Reduce la dependencia directa de la red eléctrica según el diseño del sistema.",
    icon: Plug,
  },
  {
    title: "Continuidad operativa",
    text: "Puede aportar respaldo ante cortes, picos o necesidades críticas.",
    icon: ShieldCheck,
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
    name: "Ecoforest ecoGEO+ LITE 1-6 PRO",
    text: "Geotérmica compacta con refrigerante natural R290 e inverter.",
    href: "/catalogo#geotermia-catalogo",
    imageSrc: "/imagen/ecogeo_lite_1_6_PRO.png",
    badge: "R290 · Compacta",
    kind: "product" as const,
    thumbType: "geo" as const,
  },
  {
    name: "Ecoforest ecoGEO+ 2-10 PRO",
    text: "Gama media 2-10 kW con R290, inverter, ACS y refrigeración.",
    href: "/catalogo#geotermia-catalogo",
    imageSrc: "/imagen/ecoGEO-PRO-2-10.png",
    badge: "R290 · Inverter",
    kind: "product" as const,
    thumbType: "geo" as const,
  },
  {
    name: "Ecoforest ecoGEO+ 4-16 PRO",
    text: "Alta potencia 4-16 kW con hibridación fotovoltaica de serie.",
    href: "/catalogo#geotermia-catalogo",
    imageSrc: "/imagen/ecoGEO-PRO-2-10.png",
    badge: "Alta potencia",
    kind: "product" as const,
    thumbType: "geo" as const,
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
        <GeothermalSection />
        <PhotovoltaicIntelligence />
        <EnergyStorage />
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
        className="absolute inset-0 z-0 object-cover object-[80%_45%] md:object-[58%_center] lg:object-[60%_center] xl:object-[58%_center]"
        priority
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(234,234,255,0.88)_24%,rgba(234,234,255,0.52)_42%,rgba(234,234,255,0.14)_60%,rgba(23,17,26,0.02)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38)_0%,rgba(234,234,255,0.06)_35%,rgba(23,17,26,0.10)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.42)_28%,rgba(255,255,255,0.12)_50%,rgba(23,17,26,0.20)_100%)] md:hidden" />
      <div className="absolute inset-0 z-0 opacity-55 [background-image:linear-gradient(rgba(149,18,160,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(149,18,160,0.09)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_22%,rgba(217,217,255,0.28),transparent_34%),radial-gradient(circle_at_12%_82%,rgba(149,18,160,0.12),transparent_30%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-8 z-20 hidden md:block lg:top-10 xl:top-12">
        <div className="mx-auto flex max-w-7xl items-start justify-end px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto flex flex-col items-end text-right">
            <p className="inline-flex items-center gap-2.5 text-[1.2rem] font-black uppercase leading-none tracking-[0.18em] text-[#9512A0] lg:text-[1.35rem] lg:tracking-[0.2em] xl:text-[1.45rem]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#9512A0]" aria-hidden="true" />
              MACLIMA CALOR Y FRÍO S.L.
            </p>
            <p className="mt-2.5 text-[1.05rem] font-bold leading-snug text-[#1F1623] lg:text-[1.15rem] xl:text-[1.2rem]">
              Distribución · instalación · asesoramiento técnico
            </p>
            <span className="mt-2.5 block h-[3px] w-14 rounded-full bg-[#9512A0] lg:w-16" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex min-h-[620px] max-w-7xl items-stretch px-4 pt-5 pb-10 sm:min-h-[660px] sm:items-center sm:px-6 sm:py-14 md:items-start md:pt-10 md:pb-16 lg:min-h-[min(710px,calc(100svh-76px))] lg:px-8 lg:pt-14 lg:pb-20 xl:min-h-[min(740px,calc(100svh-76px))] xl:pt-16 xl:pb-24">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col max-w-[640px] lg:max-w-[680px]"
        >
          <div className="mb-6 flex flex-col items-center text-center md:hidden">
            <p className="inline-flex items-center gap-2.5 text-[0.95rem] font-black uppercase leading-none tracking-[0.18em] text-[#9512A0] sm:gap-3 sm:text-[1.05rem] sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9512A0]" aria-hidden="true" />
              MACLIMA CALOR Y FRÍO S.L.
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9512A0]" aria-hidden="true" />
            </p>
            <p className="mt-3 text-[0.95rem] font-semibold leading-snug text-[#1F1623] sm:mt-3.5 sm:text-[1rem]">
              Distribución · instalación · asesoramiento técnico
            </p>
            <span className="mt-4 block h-[2px] w-14 rounded-full bg-[#9512A0] sm:h-[3px] sm:w-16" aria-hidden="true" />
          </div>
          <h1 className="max-w-[620px] text-[1.74rem] font-black leading-[1.06] text-[#17111A] sm:text-[2.6rem] md:text-[3rem] md:mt-4 lg:max-w-[600px] lg:mt-6 lg:text-[3rem] lg:leading-[1.04] xl:max-w-[620px] xl:mt-8 xl:text-[3.25rem]">
            Aerotermia, geotermia y fotovoltaica para ahorrar energía
          </h1>
          <p className="mt-3 max-w-xl text-[0.88rem] leading-6 text-[#3D3748] sm:mt-4 sm:text-lg sm:leading-8 lg:mt-5 lg:max-w-[34rem] lg:text-[1.05rem] lg:leading-7">
            <span className="block md:hidden">Soluciones energéticas en Madrid con asesoramiento técnico gratuito.</span>
            <span className="hidden md:block">Distribuimos e instalamos soluciones de aerotermia, fotovoltaica y geotermia en Madrid para viviendas, negocios y profesionales del sector, con asesoramiento técnico gratuito para elegir el sistema más eficiente.</span>
          </p>
          <div className="mt-3 hidden flex-wrap gap-1.5 sm:mt-4 sm:flex sm:gap-2 lg:mt-3">
            {heroSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-lg border border-[#9512A0]/25 bg-white/[0.74] px-2.5 py-1.5 text-[11px] font-bold text-[#17111A] backdrop-blur sm:px-3 sm:py-2 sm:text-sm lg:py-1.5"
              >
                {signal}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-2.5 pt-6 sm:mt-7 sm:flex-row sm:gap-3 sm:pt-0 lg:mt-6">
            <Link
              href="/consultoria-gratuita#formulario"
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-[0.9rem] font-bold text-white shadow-[0_14px_36px_rgba(149,18,160,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81] hover:shadow-[0_20px_46px_rgba(149,18,160,0.30)] sm:min-h-[52px] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
            >
              Solicitar consultoría gratuita
              <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1 sm:h-5 sm:w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/catalogo"
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-[#9512A0]/30 bg-white/[0.84] px-5 py-3 text-[0.9rem] font-bold text-[#9512A0] shadow-sm backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_rgba(149,18,160,0.10)] sm:min-h-[52px] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
            >
              Ver catálogo
              <FileText className="h-4 w-4 transition duration-200 ease-out group-hover:-translate-y-0.5 sm:h-5 sm:w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-3 hidden flex-wrap gap-1.5 sm:mt-5 sm:flex sm:gap-2 lg:mt-4">
            {heroTrustLine.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/[0.52] px-2.5 py-1 text-[11px] font-semibold text-[#17111A] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm lg:py-1"
              >
                <Check className="h-3.5 w-3.5 text-[#9512A0]" aria-hidden="true" />
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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F9F7FF_54%,#FFFFFF_100%)] py-10 sm:py-20">
      <div className="absolute left-[-12%] top-16 h-72 w-72 rounded-full bg-[#EAEAFF] blur-3xl" />
      <div className="absolute bottom-6 right-[-10%] h-64 w-64 rounded-full bg-[#F2B84B]/14 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9512A0]">
            SOLUCIONES PRINCIPALES
          </p>
          <h2 className="mt-2.5 text-[1.55rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
            Tres tecnologías, un mismo objetivo: ahorrar energía
          </h2>
          <p className="mt-3 text-[0.95rem] leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">
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
          className="relative mt-6 overflow-hidden rounded-[22px] border border-[#9512A0]/25 bg-[#17111A] px-4 py-4 text-white shadow-[0_18px_54px_rgba(23,17,26,0.14)] sm:rounded-[28px] sm:px-7 sm:py-5 sm:shadow-[0_24px_70px_rgba(23,17,26,0.16)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(217,217,255,0.24),transparent_34%),radial-gradient(circle_at_80%_50%,rgba(242,184,75,0.18),transparent_30%)]" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D9D9FF] sm:text-sm">
                Solución energética combinada
              </p>
              <p className="mt-1 max-w-2xl text-sm font-semibold leading-6 text-white/90 sm:text-base sm:leading-7">
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_42%,#EAEAFF_100%)] py-10 sm:py-20"
    >
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(149,18,160,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(149,18,160,0.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute right-[-14%] top-10 h-72 w-72 rounded-full bg-[#D9D9FF] blur-3xl" />
      <div className="absolute bottom-[-18%] left-[-10%] h-80 w-80 rounded-full bg-[#9512A0]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-black uppercase text-[#9512A0]">
              Aerotermia eficiente
            </p>
            <h2 className="mt-2.5 max-w-3xl text-[1.55rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
              Energía renovable del aire para climatizar tu vivienda o negocio
            </h2>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">
              La aerotermia aprovecha la energía presente en el aire exterior
              para generar calefacción, refrigeración y agua caliente sanitaria
              con un consumo eléctrico reducido. Es una solución limpia,
              eficiente y preparada para sustituir sistemas tradicionales
              basados en combustibles fósiles.
            </p>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-[#17111A] sm:mt-5 sm:text-base sm:leading-7">
              En Maclima te ayudamos a estudiar tu caso y elegir el sistema más
              adecuado según el tipo de inmueble, consumo, instalación existente
              y objetivos de ahorro.
            </p>
            <Link
              href="/consultoria-gratuita?tipo=Aerotermia#formulario"
              className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(149,18,160,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81] hover:shadow-[0_24px_54px_rgba(149,18,160,0.28)] sm:mt-8 sm:min-h-14 sm:w-auto sm:px-6 sm:py-4 sm:text-base"
            >
              Solicitar asesoramiento en aerotermia
              <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.article
            {...fadeUp}
            className="relative overflow-hidden rounded-[24px] border border-white/80 bg-[linear-gradient(145deg,#FFFFFF_0%,#FFF2D8_34%,#EAEAFF_100%)] p-4 shadow-[0_20px_62px_rgba(149,18,160,0.14)] backdrop-blur-xl sm:rounded-[30px] sm:p-8 sm:shadow-[0_30px_90px_rgba(149,18,160,0.18)]"
          >
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,#9512A0,transparent)]" />
            <div className="absolute right-[-42px] top-[-42px] h-40 w-40 rounded-full bg-[#F2B84B]/28 blur-3xl" />
            <div className="absolute bottom-[-48px] left-[-38px] h-44 w-44 rounded-full bg-[#9512A0]/12 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="inline-flex rounded-full border border-[#9512A0]/25 bg-white/[0.72] px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#9512A0] shadow-sm backdrop-blur sm:px-3 sm:py-2 sm:text-xs">
                    ENERGÍA AMBIENTAL
                  </p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-[#17111A] sm:text-2xl">
                    Hasta un 80% de energía aprovechada del aire
                  </h3>
                </div>
                <span className="rounded-[18px] bg-[linear-gradient(135deg,#9512A0_0%,#A018A4_48%,#F2B84B_145%)] px-4 py-3 text-3xl font-black leading-none text-white shadow-[0_16px_34px_rgba(149,18,160,0.22)] sm:rounded-[24px] sm:px-5 sm:py-4 sm:text-4xl sm:shadow-[0_20px_46px_rgba(149,18,160,0.28)]">
                  80%
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#4A4552] sm:mt-4 sm:text-base sm:leading-7">
                La aerotermia aprovecha energía ambiental del aire exterior y
                utiliza electricidad para mover el sistema.
              </p>

              <div className="mt-4 grid gap-3 rounded-[20px] border border-white/80 bg-white/[0.66] p-3 shadow-inner backdrop-blur sm:mt-6 sm:rounded-[24px] sm:grid-cols-[1fr_auto_1fr] sm:items-center">
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
                        className="group/energy relative overflow-hidden rounded-xl border border-[#D99A2B]/22 bg-[linear-gradient(135deg,#FFF2D8_0%,#F3EFFF_100%)] p-2.5 shadow-[0_10px_22px_rgba(242,184,75,0.16)] sm:rounded-2xl sm:p-3 sm:shadow-[0_12px_26px_rgba(242,184,75,0.18)]"
                      >
                        <span className="absolute right-[-18px] top-[-18px] h-14 w-14 rounded-full bg-[#F2B84B]/32 blur-xl transition duration-200 ease-out group-hover/energy:scale-125" />
                        <AirVent
                          className="relative h-6 w-6 text-[#9512A0]"
                          aria-hidden="true"
                        />
                        <span className="relative mt-2 block text-sm font-black text-[#17111A]">
                          Aire
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center py-1 text-[#9512A0] sm:px-1">
                  <ArrowRight
                    className="hidden h-7 w-7 sm:block"
                    aria-hidden="true"
                  />
                  <span className="h-px w-full bg-[linear-gradient(90deg,transparent,#9512A0,transparent)] sm:hidden" />
                </div>

                <div className="grid gap-3">
                  <div className="relative overflow-hidden rounded-2xl border border-[#38BDF8]/20 bg-[linear-gradient(135deg,#F1FBFF_0%,#F4F0FF_100%)] p-4 shadow-[0_12px_28px_rgba(56,189,248,0.12)]">
                    <span className="absolute right-[-18px] top-[-18px] h-14 w-14 rounded-full bg-[#38BDF8]/20 blur-xl" />
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#9512A0] shadow-sm sm:h-11 sm:w-11 sm:rounded-2xl">
                        <Zap className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-black text-[#17111A]">
                          1 parte eléctrica
                        </p>
                        <p className="mt-1 text-xs font-bold text-[#4A4552]">
                          Electricidad
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-[#9512A0]/28 bg-[#17111A] p-4 text-white shadow-[0_16px_34px_rgba(23,17,26,0.18)]">
                    <span className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,#F2B84B,transparent)]" />
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/12 text-[#F2B84B] sm:h-11 sm:w-11 sm:rounded-2xl">
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
                <div className="h-2.5 w-4/5 rounded-full bg-[linear-gradient(90deg,#9512A0_0%,#A018A4_52%,#F2B84B_100%)] shadow-[0_0_24px_rgba(242,184,75,0.34)]" />
              </div>
              <div className="mt-4 rounded-2xl border border-[#D9D9FF] bg-[#F8F7FF] px-3.5 py-3 text-xs font-semibold leading-5 text-[#4A4552] sm:mt-5 sm:px-4 sm:text-sm sm:leading-6">
                Representación orientativa según tecnología, rendimiento del
                equipo y condiciones de instalación.
              </div>
            </div>
          </motion.article>
        </div>

        <motion.div {...fadeUp} className="mt-8 sm:mt-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
            <h3 className="text-[1.45rem] font-black text-[#17111A] sm:text-3xl">
              Ventajas de instalar aerotermia
            </h3>
            <p className="mt-3 text-[0.95rem] leading-6 text-[#4A4552] sm:mt-4 sm:text-lg sm:leading-8">
              Una sola tecnología puede cubrir gran parte de las necesidades
              térmicas de una vivienda o negocio, mejorando el confort durante
              todo el año y reduciendo el consumo energético.
            </p>
            </div>
            <span className="inline-flex w-fit rounded-full border border-[#9512A0]/25 bg-white/[0.72] px-4 py-2 text-xs font-black uppercase text-[#9512A0] shadow-sm backdrop-blur">
              Banda de beneficios
            </span>
          </div>

          <div className="mt-5 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 xl:grid-cols-6">
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

          <p className="mt-5 text-sm font-semibold leading-6 text-[#4A4552]">
            <span className="font-black text-[#9512A0]">Compatible con:</span>{" "}
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#EAEAFF_0%,#FFFFFF_48%,#F8F7FF_100%)] py-10 sm:py-20"
    >
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(149,18,160,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(149,18,160,0.055)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute left-[-12%] top-12 h-80 w-80 rounded-full bg-[#F2B84B]/18 blur-3xl" />
      <div className="absolute right-[-14%] bottom-[-16%] h-96 w-96 rounded-full bg-[#9512A0]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[24px] border border-white/80 bg-[radial-gradient(circle_at_74%_18%,rgba(242,184,75,0.2),transparent_26%),linear-gradient(135deg,#FFFFFF_0%,#FFF8EE_38%,#EAEAFF_100%)] p-4 shadow-[0_24px_72px_rgba(149,18,160,0.12)] sm:rounded-[36px] sm:p-7 sm:shadow-[0_32px_100px_rgba(149,18,160,0.16)] lg:p-9"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.08fr)] lg:items-center lg:gap-8">
            <div>
              <p className="text-sm font-black uppercase text-[#9512A0]">
                FOTOVOLTAICA INTELIGENTE
              </p>
              <h2 className="mt-2.5 max-w-3xl text-[1.55rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
                Produce tu propia energía solar y reduce tu consumo de red
              </h2>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">
                La energía fotovoltaica transforma la luz del sol en
                electricidad para cubrir parte del consumo de tu vivienda,
                negocio o instalación profesional. Una solución eficiente,
                escalable y compatible con baterías, aerotermia y autoconsumo.
              </p>
              <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-[#17111A] sm:mt-5 sm:text-base sm:leading-7">
                En Maclima analizamos tu consumo, espacio disponible y objetivos
                de ahorro para recomendarte una instalación fotovoltaica
                adaptada a tu proyecto.
              </p>
              <Link
                href="/consultoria-gratuita?tipo=Fotovoltaica#formulario"
                className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(149,18,160,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81] hover:shadow-[0_24px_54px_rgba(149,18,160,0.28)] sm:mt-8 sm:min-h-14 sm:w-auto sm:px-6 sm:py-4 sm:text-base"
              >
                Solicitar asesoramiento fotovoltaico
                <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <div className="mt-5 grid gap-2.5 sm:mt-8 sm:gap-3">
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
              <div className="absolute inset-8 rounded-full bg-[#9512A0]/14 blur-3xl" />
              <div className="relative min-h-[300px] overflow-hidden rounded-[22px] border border-white/80 bg-[linear-gradient(145deg,#FFFFFF_0%,#F7F3FF_58%,#EAEAFF_100%)] p-4 shadow-[0_22px_64px_rgba(23,17,26,0.14)] sm:min-h-[520px] sm:rounded-[32px] sm:shadow-[0_30px_90px_rgba(23,17,26,0.16)] lg:min-h-[650px]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_16%,rgba(242,184,75,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(149,18,160,0.1)_100%)]" />
                <Image
                  src="/fotovoltaica.png"
                  alt="Sistema fotovoltaico con paneles solares, inversor y batería para autoconsumo"
                  width={1450}
                  height={1024}
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="absolute left-1/2 top-1/2 h-auto w-[138%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_26px_48px_rgba(149,18,160,0.18)] sm:w-[118%] sm:drop-shadow-[0_32px_58px_rgba(149,18,160,0.2)] lg:w-[126%]"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/90 px-2.5 py-1.5 text-[10px] font-black uppercase text-[#9512A0] shadow-sm backdrop-blur sm:left-5 sm:top-5 sm:px-3 sm:py-2 sm:text-xs">
                  Autoconsumo solar
                </span>
                <span className="absolute left-3 top-12 rounded-full border border-white/60 bg-white/90 px-2.5 py-1.5 text-[10px] font-black text-[#17111A] shadow-sm backdrop-blur sm:left-auto sm:right-5 sm:top-5 sm:px-3 sm:py-2 sm:text-xs">
                  Paneles · Inversor · Batería
                </span>
                <span className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/90 px-2.5 py-1.5 text-[10px] font-black text-[#9512A0] shadow-sm backdrop-blur sm:bottom-5 sm:left-5 sm:px-3 sm:py-2 sm:text-xs">
                  Compatible con aerotermia
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[20px] border border-[#D9D9FF]/80 bg-[#17111A] p-4 text-white shadow-[0_18px_50px_rgba(23,17,26,0.14)] sm:mt-7 sm:rounded-[24px] sm:p-6 sm:shadow-[0_22px_64px_rgba(23,17,26,0.16)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black uppercase text-[#F2B84B]">
                  Solución combinada
                </span>
                <h3 className="mt-2.5 text-xl font-black sm:mt-3 sm:text-2xl">
                  Aerotermia + fotovoltaica: una combinación eficiente
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/70">
                  La energía solar puede apoyar el consumo eléctrico de sistemas
                  de aerotermia, ayudando a optimizar calefacción, refrigeración
                  y agua caliente sanitaria según cada instalación.
                </p>
              </div>
              <Link
                href="/consultoria-gratuita#formulario"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#9512A0] shadow-[0_16px_34px_rgba(255,255,255,0.12)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FFF2D8] sm:w-auto"
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

function EnergyStorage() {
  return (
    <section
      id="bess"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F8F7FF_0%,#FFFFFF_55%,#EAEAFF_100%)] py-10 sm:py-16"
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(149,18,160,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(149,18,160,0.055)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute right-[-10%] top-12 h-80 w-80 rounded-full bg-[#9512A0]/12 blur-3xl" />
      <div className="absolute left-[-12%] bottom-[-14%] h-80 w-80 rounded-full bg-[#F2B84B]/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[24px] border border-white/80 bg-[radial-gradient(circle_at_76%_18%,rgba(149,18,160,0.12),transparent_40%),linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_46%,#EAEAFF_100%)] p-4 shadow-[0_22px_68px_rgba(149,18,160,0.11)] sm:rounded-[36px] sm:p-7 sm:shadow-[0_30px_96px_rgba(149,18,160,0.13)] lg:p-9"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start lg:gap-x-8 lg:gap-y-8">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#9512A0]">
                Almacenamiento energético
              </p>
              <h2 className="mt-2.5 text-[1.55rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
                BESS y baterías para aprovechar mejor tu energía
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#4A4552] sm:mt-4 sm:text-lg sm:leading-8">
                Los sistemas BESS permiten almacenar energía mediante baterías
                para usarla cuando más conviene. Son una solución especialmente
                interesante para instalaciones fotovoltaicas, negocios,
                empresas, comunidades o proyectos con consumos relevantes que
                buscan optimizar el uso de la energía y reducir la dependencia
                de la red.
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#17111A] sm:mt-4 sm:text-base sm:leading-7">
                En Maclima estudiamos cada caso para valorar si una solución de
                almacenamiento encaja con la instalación, el perfil de consumo,
                la potencia contratada, los horarios de uso, el espacio
                disponible y los objetivos de ahorro o continuidad operativa.
              </p>
              <div className="mt-4 rounded-[18px] border border-[#9512A0]/12 bg-white/80 px-4 py-3 shadow-sm backdrop-blur sm:mt-5 sm:rounded-[22px] sm:px-5">
                <p className="text-sm font-bold leading-6 text-[#17111A] sm:text-[0.95rem] sm:leading-7">
                  No todos los proyectos necesitan baterías. Por eso analizamos
                  primero la viabilidad técnica y económica antes de recomendar
                  una solución BESS.
                </p>
              </div>
              <div className="mt-5 flex flex-col items-stretch gap-2.5 sm:mt-6 lg:flex-row lg:items-center lg:gap-3">
                <Link
                  href="/consultoria-gratuita#formulario"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(149,18,160,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81] sm:min-h-14 sm:px-5 sm:py-3.5 sm:text-[0.95rem]"
                >
                  Solicitar consultoría sobre BESS
                  <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1 sm:h-5 sm:w-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/catalogo#fotovoltaica-catalogo"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#9512A0]/30 bg-white px-5 py-3 text-sm font-bold text-[#9512A0] shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF] sm:min-h-14 sm:px-5 sm:py-3.5 sm:text-[0.95rem]"
                >
                  Ver catálogo fotovoltaico
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-2 lg:col-start-1 lg:row-start-2">
              <div className="absolute -inset-6 rounded-[40px] bg-[#9512A0]/10 blur-3xl" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_22px_64px_rgba(23,17,26,0.14)] sm:aspect-[16/10] sm:rounded-[32px] sm:shadow-[0_30px_90px_rgba(23,17,26,0.16)] lg:aspect-[16/9] xl:aspect-[16/8]">
                <Image
                  src="/bess.png"
                  alt="Sistema BESS con paneles solares y baterías integrados en una vivienda con conexiones energéticas"
                  fill
                  sizes="(min-width: 1024px) 90vw, 100vw"
                  className="object-cover object-[center_58%] sm:object-[center_60%] lg:object-[center_57%]"
                />
                <div className="absolute top-3 left-3 max-w-[84%] rounded-2xl border border-white/60 bg-white/92 px-3.5 py-2.5 shadow-sm backdrop-blur sm:top-5 sm:left-5 sm:max-w-[22rem] sm:px-4 sm:py-3">
                  <p className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#9512A0] sm:text-[11px]">
                    <BatteryCharging className="h-3.5 w-3.5" aria-hidden="true" />
                    BESS · Fotovoltaica · Autoconsumo
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[#17111A] sm:text-sm sm:leading-6">
                    Almacenamiento, optimización y continuidad operativa.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-start-2 lg:row-start-1">
              <div className="h-full rounded-[20px] border border-[#D9D9FF]/80 bg-white/85 p-4 shadow-[0_14px_34px_rgba(149,18,160,0.07)] backdrop-blur sm:rounded-[24px] sm:p-6 sm:shadow-[0_18px_44px_rgba(149,18,160,0.08)]">
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#9512A0]">
                  Qué podemos valorar
                </p>
                <motion.ul {...fadeUp} className="mt-3 grid gap-2.5">
                  {bessFeatures.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-[#D9D9FF]/70 bg-white px-3.5 py-3"
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8F7FF] text-[#9512A0]"
                        aria-hidden="true"
                      >
                        <item.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-black leading-5 text-[#17111A]">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-[#4A4552]">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>

            <div className="lg:col-start-1 lg:row-start-3">
              <div className="h-full rounded-[20px] border border-[#D9D9FF] bg-[#F8F7FF] px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#9512A0]">
                  Ayudas y subvenciones
                </p>
                <p className="mt-2 text-xs leading-5 text-[#4A4552] sm:text-sm sm:leading-6">
                  También revisamos posibles ayudas, subvenciones o incentivos
                  disponibles para proyectos de almacenamiento energético,
                  siempre según ubicación, tipo de instalación, convocatoria
                  vigente y requisitos técnicos aplicables.
                </p>
              </div>
            </div>

            <div className="lg:col-start-2 lg:row-start-3">
              <div className="h-full rounded-[20px] border border-[#D9D9FF] bg-white/85 px-4 py-4 backdrop-blur sm:px-5 sm:py-5">
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#9512A0]">
                  Marcas con las que trabajamos
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-[#9512A0]/25 bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[#9512A0]">
                    Reaseen
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#9512A0]/25 bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[#9512A0]">
                    Goodyear
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#4A4552]">
                  Trabajamos con soluciones fotovoltaicas y paneles de marcas
                  como Reaseen y Goodyear, valorando siempre la opción más
                  adecuada según el proyecto, la instalación y las necesidades
                  reales del cliente.
                </p>
              </div>
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#EAEAFF_0%,#FFFFFF_48%,#F8F7FF_100%)] py-10 sm:py-20"
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(149,18,160,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(149,18,160,0.055)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute right-[-8%] top-[-4%] h-[55%] w-[42%] rounded-full bg-[#2F7D6D]/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-8%] h-64 w-64 rounded-full bg-[#9512A0]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[24px] border border-[#D6EFE8]/50 bg-[radial-gradient(circle_at_76%_18%,rgba(47,125,109,0.10),transparent_40%),linear-gradient(135deg,#FFFFFF_0%,#F0F9F6_26%,#EAEAFF_100%)] p-4 shadow-[0_22px_68px_rgba(149,18,160,0.11)] sm:rounded-[36px] sm:p-7 sm:shadow-[0_32px_100px_rgba(149,18,160,0.13)] lg:p-9"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2F7D6D]">
                Geotermia eficiente
              </p>
              <h2 className="mt-2.5 max-w-3xl text-[1.55rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
                Energía estable del terreno para climatizar tu vivienda o negocio
              </h2>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">
                La geotermia aprovecha la temperatura constante del subsuelo para
                apoyar sistemas de calefacción, refrigeración y agua caliente
                sanitaria con un alto nivel de eficiencia.
              </p>
              <div className="mt-3 flex items-start gap-2.5 rounded-xl border-l-[3px] border-[#2F7D6D] bg-[#F0F9F6]/70 px-3 py-2.5 sm:mt-4 sm:gap-3 sm:px-4 sm:py-3">
                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7D6D] sm:h-5 sm:w-5" aria-hidden="true" />
                <p className="max-w-2xl text-[0.88rem] font-semibold leading-6 text-[#17111A] sm:text-[1rem] sm:leading-7">
                  Una de las tecnologías con mayor rendimiento energético para
                  climatización, refrigeración y ACS, gracias al aprovechamiento
                  de la temperatura estable del terreno.
                </p>
              </div>
              <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-[#17111A] sm:mt-5 sm:text-base sm:leading-7">
                En Maclima estudiamos la viabilidad de cada instalación para
                valorar si la geotermia encaja con el terreno, el inmueble y los
                objetivos del proyecto.
              </p>
              <Link
                href="/consultoria-gratuita?tipo=Geotermia#formulario"
                className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(149,18,160,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81] hover:shadow-[0_24px_54px_rgba(149,18,160,0.28)] sm:mt-8 sm:min-h-14 sm:w-auto sm:px-6 sm:py-4 sm:text-base"
              >
                Solicitar asesoramiento en geotermia
                <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-[22px] shadow-[0_22px_64px_rgba(23,17,26,0.18)] sm:min-h-[400px] sm:rounded-[28px] sm:shadow-[0_28px_84px_rgba(23,17,26,0.22)] lg:min-h-[500px]">
              <Image
                src="/geotermia.png"
                alt="Sistema de geotermia con vivienda moderna, tubos enterrados y equipos técnicos"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,30,25,0.03)_0%,transparent_30%,rgba(15,30,25,0.42)_62%,rgba(15,30,25,0.84)_100%)] sm:bg-[linear-gradient(180deg,rgba(15,30,25,0.04)_0%,transparent_22%,rgba(15,30,25,0.55)_55%,rgba(15,30,25,0.92)_100%)]" />
              <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-black/40 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white backdrop-blur-sm sm:left-4 sm:top-4">
                Geotermia
              </span>
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-7 sm:p-6">
                <h3 className="text-base font-black text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] sm:text-lg">
                  Temperatura estable del subsuelo
                </h3>
                <p className="mt-2 text-[0.82rem] font-medium leading-[1.5] text-white/88 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] sm:mt-1 sm:text-sm sm:font-semibold sm:leading-5 sm:text-white/90">
                  Aprovecha la estabilidad térmica del terreno para mejorar la
                  eficiencia del sistema.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-3 sm:gap-2">
                  {["Alta eficiencia", "Climatización", "ACS"].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-black/35 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm sm:py-1.5"
                    >
                      <Check className="h-3 w-3 text-[#A8D5C8]" aria-hidden="true" />
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] sm:mt-3">
                  Requiere estudio previo según terreno e inmueble.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-[#2F7D6D]/15 pt-6 sm:mt-10 sm:pt-9">
            <div className="max-w-3xl">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#2F7D6D] sm:text-xs">
                Beneficios técnicos
              </p>
              <h3 className="mt-2 text-[1.2rem] font-black leading-tight text-[#17111A] sm:mt-2.5 sm:text-[1.65rem]">
                Ventajas técnicas de <span className="text-[#2F7D6D]">ecoGeo</span> y la geotermia
              </h3>
              <p className="mt-2 text-[0.92rem] leading-6 text-[#4A4552] sm:mt-3 sm:text-base sm:leading-7">
                Tecnología eficiente para aprovechar la energía estable del
                terreno en calefacción, refrigeración y agua caliente sanitaria.
              </p>
            </div>

            <article className="relative mt-5 overflow-hidden rounded-[18px] border border-[#2F7D6D]/22 bg-[linear-gradient(120deg,#FFFFFF_0%,#F0F9F6_100%)] p-4 sm:mt-7 sm:rounded-[22px] sm:p-6">
              <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F7D6D]/14 text-[#2F7D6D] sm:h-12 sm:w-12">
                  <Gauge className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-[0.98rem] font-black text-[#17111A] sm:text-[1.15rem]">
                    Alto COP y rendimiento estacional
                  </h4>
                  <p className="mt-1 text-[0.88rem] leading-6 text-[#4A4552] sm:mt-1.5 sm:text-[0.95rem] sm:leading-7">
                    La geotermia puede alcanzar altos niveles de eficiencia
                    porque intercambia energía con el terreno, cuya temperatura
                    es más estable que la del aire exterior.
                  </p>
                </div>
              </div>
            </article>

            <div className="mt-3.5 grid gap-3.5 sm:mt-5 sm:gap-5 lg:grid-cols-2">
              <article className="relative overflow-hidden rounded-[18px] border border-[#2F7D6D]/15 bg-white/80 p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-6">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#2F7D6D]" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F7D6D]/12 text-[#2F7D6D] sm:h-11 sm:w-11">
                    <Gauge className="h-5 w-5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  <h4 className="text-base font-black text-[#17111A] sm:text-xl">
                    Ventajas <span className="text-[#2F7D6D]">ecoGeo</span>
                  </h4>
                </div>
                <ul className="mt-3.5 space-y-2 sm:mt-5 sm:space-y-2.5">
                  {ecoGeoAdvantages.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#2F7D6D]/10 text-[#2F7D6D] sm:h-7 sm:w-7">
                        <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-[0.9rem] leading-6 text-[#1F1623] sm:text-[0.95rem] sm:leading-7">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="relative overflow-hidden rounded-[18px] border border-[#9512A0]/25 bg-white/80 p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-6">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#9512A0]" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#9512A0]/12 text-[#9512A0] sm:h-11 sm:w-11">
                    <Leaf className="h-5 w-5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  <h4 className="text-base font-black text-[#17111A] sm:text-xl">
                    Ventajas de la geotermia
                  </h4>
                </div>
                <ul className="mt-3.5 space-y-2 sm:mt-5 sm:space-y-2.5">
                  {geothermalAdvantages.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#9512A0]/10 text-[#9512A0] sm:h-7 sm:w-7">
                        <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-[0.9rem] leading-6 text-[#1F1623] sm:text-[0.95rem] sm:leading-7">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="max-w-2xl text-xs leading-5 text-[#4A4552] sm:text-sm sm:leading-6">
                Estudiamos cada proyecto para comprobar si la geotermia es la
                opción más eficiente y viable según terreno, inmueble y demanda
                energética.
              </p>
              <Link
                href="/consultoria-gratuita?tipo=Geotermia#formulario"
                className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-[#2F7D6D]/25 bg-white px-4 py-2.5 text-[0.85rem] font-bold text-[#2F7D6D] shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F0F9F6] sm:self-auto sm:px-5 sm:py-3 sm:text-[0.9rem]"
              >
                Solicitar estudio de geotermia
                <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const ecoGeoAdvantages = [
  { icon: Gauge, text: "Tecnología inverter y compresor de velocidad variable." },
  { icon: ThermometerSun, text: "Sistema HTR de recuperación de calor." },
  { icon: Snowflake, text: "Producción de frío y calor con el mismo equipo." },
  { icon: AirVent, text: "Capacidad para producir frío y calor simultáneamente." },
  { icon: Layers, text: "Instalación en cascada según las necesidades del proyecto." },
  { icon: ShieldCheck, text: "Solución orientada a instalaciones eficientes y escalables." },
] as const;

const geothermalAdvantages = [
  { icon: Leaf, text: "Fuente de energía renovable." },
  { icon: Waves, text: "Sin emisiones directas de CO₂ durante el funcionamiento." },
  { icon: ShieldCheck, text: "Equipos fiables y de alta durabilidad." },
  { icon: HousePlug, text: "Calefacción, refrigeración y ACS en una misma solución." },
  { icon: Gauge, text: "Bajo mantenimiento y costes de operación reducidos." },
  { icon: ThermometerSun, text: "Alta estabilidad energética gracias a la temperatura constante del terreno." },
] as const;

function FeaturedSolutions() {
  return (
    <section id="ben-dual-air-destacado" className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[24px] border border-[#D9D9FF]/80 bg-[radial-gradient(circle_at_18%_10%,rgba(217,217,255,0.82),transparent_26%),linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_46%,#EAEAFF_100%)] p-4 shadow-[0_22px_68px_rgba(149,18,160,0.11)] sm:rounded-[36px] sm:p-7 sm:shadow-[0_30px_96px_rgba(149,18,160,0.13)] lg:p-9"
        >
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase text-[#9512A0]">
              PRODUCTO ESTRELLA EN AEROTERMIA
            </p>
            <h2 className="mt-2.5 text-[1.55rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
              BEN Dual-Air: aerotermia compacta para climatización,
              ventilación y ACS
            </h2>
            <p className="mt-3 max-w-3xl text-[0.95rem] leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">
              BEN Dual-Air integra calefacción, refrigeración, ventilación y
              agua caliente sanitaria en una solución compacta de instalación
              interior. Está pensada para pisos, viviendas unifamiliares, obra
              nueva y reformas donde se busca confort, eficiencia y control sin
              depender de una unidad exterior visible.
            </p>
            <Link
              href="/consultoria-gratuita?tipo=Aerotermia#formulario"
              className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(149,18,160,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81] hover:shadow-[0_24px_54px_rgba(149,18,160,0.28)] sm:mt-8 sm:min-h-14 sm:w-auto sm:px-6 sm:py-4 sm:text-base"
            >
              Solicitar asesoramiento sobre BEN Dual-Air
              <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(380px,0.94fr)] lg:items-stretch lg:gap-8">
            <div className="relative min-h-[260px] overflow-hidden rounded-[22px] border border-white/80 bg-[#17111A] shadow-[0_20px_58px_rgba(23,17,26,0.14)] sm:min-h-[520px] sm:rounded-[32px] sm:shadow-[0_28px_84px_rgba(23,17,26,0.16)]">
              <Image
                src="/imagen/BEN-Dual-AIR/electric-bruin.webp"
                alt="BEN Dual-Air sistema de aerotermia interior compacto"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[56%_center]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,26,0.02)_0%,rgba(23,17,26,0.36)_100%)]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/88 px-3 py-2 text-xs font-black uppercase text-[#9512A0] shadow-sm backdrop-blur">
                BEN Dual-Air
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-white/88 p-4 shadow-[0_16px_38px_rgba(23,17,26,0.18)] backdrop-blur">
                <p className="text-sm font-black text-[#17111A]">
                  Sistema interior compacto
                </p>
                <p className="mt-1 text-xs font-bold leading-5 text-[#4A4552]">
                  Climatización, ventilación y ACS según configuración del
                  proyecto.
                </p>
              </div>
            </div>

            <div className="rounded-[22px] border border-white/80 bg-white/[0.78] p-4 shadow-[0_16px_46px_rgba(149,18,160,0.08)] backdrop-blur sm:rounded-[32px] sm:p-8 sm:shadow-[0_22px_70px_rgba(149,18,160,0.1)]">
              <p className="text-sm font-black uppercase text-[#9512A0]">
                Todo eléctrico, compacto y preparado para viviendas modernas
              </p>
              <h3 className="mt-2.5 text-[1.45rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-3xl">
                Aerotermia interior sin unidad exterior
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4A4552] sm:mt-5 sm:text-base sm:leading-7">
                BEN Dual-Air es una bomba de calor interior que puede integrar
                ventilación, calefacción, refrigeración y agua caliente sanitaria
                en una unidad compacta. Su diseño permite resolver la instalación
                sin unidad exterior, una ventaja importante en pisos, comunidades
                o viviendas donde no se quiere ocupar fachada, terraza o cubierta.
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#17111A] sm:mt-4 sm:text-base sm:leading-7">
                En condiciones adecuadas de instalación, el sistema puede montarse
                en aproximadamente 3 horas, reduciendo tiempos de intervención y
                molestias en la vivienda. En Maclima revisamos cada caso para
                confirmar viabilidad, configuración y necesidades reales del
                proyecto.
              </p>

              <div className="mt-5 grid gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">
                <div className="rounded-2xl border border-[#D9D9FF] bg-[#F8F7FF] p-4">
                  <p className="text-xs font-black uppercase text-[#9512A0]">
                    Formato
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#17111A]">
                    Sin unidad exterior
                  </p>
                </div>
                <div className="rounded-2xl border border-[#D9D9FF] bg-[#F8F7FF] p-4">
                  <p className="text-xs font-black uppercase text-[#9512A0]">
                    Enfoque
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#17111A]">
                    Pisos y unifamiliares
                  </p>
                </div>
              </div>
              <p className="mt-2 text-[11px] leading-4 text-[#4A4552]">
                *Aproximadamente 3 horas según condiciones de instalación y
                viabilidad técnica.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                <Check className="h-3.5 w-3.5 text-[#9512A0]" aria-hidden="true" />
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
                  href="/consultoria-gratuita#formulario"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#9512A0] shadow-[0_16px_34px_rgba(255,255,255,0.12)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FFF7FF]"
                >
                  Solicitar asesoramiento
                  <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  href="/catalogo#aerotermia-catalogo"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Ver catálogo de aerotermia
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
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#EAEAFF_100%)] py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Catálogo consultivo"
          title="Catálogo consultivo de soluciones energéticas"
          text="Consulta algunas de las soluciones con las que trabaja Maclima en aerotermia, fotovoltaica y geotermia. El catálogo es orientativo: cada instalación se estudia antes de recomendar un equipo, combinación de sistemas o propuesta técnica."
        />
        <div className="mx-auto mt-4 max-w-2xl rounded-2xl border border-[#9512A0]/12 bg-white/[0.8] px-4 py-3 text-center text-xs font-semibold leading-5 text-[#4A4552] shadow-sm backdrop-blur sm:mt-5 sm:text-sm sm:leading-6">
          No vendemos productos de forma automática. Analizamos cada caso antes de recomendar.
        </div>
        <div className="mt-6 grid items-stretch gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-3">
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
    <section className="bg-white py-9 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-8 lg:px-8">
        <motion.div {...fadeUp}>
          <p className="text-xs font-black uppercase tracking-wider text-[#9512A0]">
            Consultoría gratuita
          </p>
          <h2 className="mt-2 max-w-2xl text-2xl font-black leading-tight text-[#17111A] sm:text-3xl lg:text-4xl">
            Consulta gratuita para elegir la solución adecuada
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-[#4A4552]">
            Analizamos tu vivienda, negocio o proyecto profesional para orientarte entre aerotermia, fotovoltaica, geotermia o una solución combinada.
          </p>
          <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-[#17111A]">
            El objetivo no es venderte un producto concreto, sino recomendarte la opción más eficiente y razonable según tu caso.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/consultoria-gratuita#formulario"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(149,18,160,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81]"
            >
              Solicitar consultoría gratuita
              <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#9512A0]/30 bg-white px-5 py-3 text-sm font-bold text-[#9512A0] shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FAF4FF] hover:shadow-[0_14px_34px_rgba(149,18,160,0.10)]"
            >
              Contactar por WhatsApp
              <MessageCircle className="h-4 w-4 transition duration-200 ease-out group-hover:scale-105" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-[#D9D9FF] bg-[#EAEAFF] p-3.5 shadow-[0_14px_38px_rgba(149,18,160,0.08)] sm:p-5 sm:shadow-[0_16px_48px_rgba(149,18,160,0.10)]"
        >
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#9512A0]">
            Así funciona la consulta
          </p>
          <div className="mt-3 grid gap-2">
            {consultingSteps.map((step, index) => (
              <div key={step.title} className="flex items-center gap-3 rounded-xl border border-white/70 bg-white p-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(149,18,160,0.06)]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#9512A0] text-xs font-black text-white shadow-[0_8px_18px_rgba(149,18,160,0.16)]">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-black text-[#17111A]">{step.title}</p>
                  <p className="text-xs leading-5 text-[#4A4552]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBlock() {
  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Confianza técnica"
          title="Distribución, instalación y asesoramiento técnico en un solo equipo"
          text="Una propuesta pensada para tomar decisiones energéticas con información clara, soporte técnico y una ejecución profesional."
        />
        <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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
    <section className="bg-[linear-gradient(135deg,#7D0E80_0%,#6F0B72_42%,#D9D9FF_100%)] py-10 sm:py-22">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[24px] border border-white/20 bg-white/[0.08] px-5 py-9 shadow-[0_22px_64px_rgba(23,17,26,0.16)] backdrop-blur-xl sm:rounded-[32px] sm:px-10 sm:py-12 sm:shadow-[0_28px_80px_rgba(23,17,26,0.18)]"
        >
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]" />
          <h2 className="text-[1.65rem] font-black leading-tight text-white sm:text-4xl">
            Da el primer paso hacia una instalación energética más eficiente
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#F8F7FF] sm:mt-5 sm:text-lg sm:leading-8">
            Habla con Maclima y recibe orientación personalizada para tu proyecto
            energético: aerotermia, fotovoltaica o geotermia.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/consultoria-gratuita#formulario"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-[#9512A0] shadow-[0_18px_44px_rgba(23,17,26,0.18)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(23,17,26,0.24)]"
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
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#9512A0] sm:text-sm sm:tracking-normal">{eyebrow}</p>
      <h2 className="mt-2.5 text-[1.55rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-[0.95rem] leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">{text}</p>
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
      shell: "border-[#9512A0]/28 bg-[#F5F0FF]",
      icon: "text-[#9512A0]",
      glow: "bg-[#9512A0]/12",
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
    <article className="group flex gap-3 rounded-[18px] border border-white/80 bg-white/[0.74] p-3.5 shadow-[0_12px_30px_rgba(149,18,160,0.07)] backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_20px_52px_rgba(149,18,160,0.12)] sm:gap-4 sm:rounded-[22px] sm:p-4">
      <span
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-sm transition duration-200 ease-out group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl ${accents.shell}`}
      >
        <span className={`absolute inset-2 rounded-xl blur-md ${accents.glow}`} />
        <Icon
          className={`relative h-6 w-6 transition duration-200 ease-out group-hover:-translate-y-0.5 sm:h-8 sm:w-8 ${accents.icon}`}
          aria-hidden="true"
        />
      </span>
      <div>
        <h3 className="text-base font-black leading-tight text-[#17111A]">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-5 text-[#4A4552] sm:text-sm sm:leading-6">{text}</p>
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
      shell: "border-[#9512A0]/28 bg-[#F5F0FF]",
      icon: "text-[#9512A0]",
      glow: "bg-[#9512A0]/12",
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
    <article className="group flex min-h-0 flex-row items-center gap-3 rounded-[18px] border border-white/80 bg-white p-3.5 shadow-[0_12px_30px_rgba(149,18,160,0.07)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(149,18,160,0.12)] sm:min-h-[205px] sm:flex-col sm:items-start sm:gap-0 sm:rounded-[22px] sm:p-5 xl:min-h-[230px]">
      <span
        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition duration-200 ease-out group-hover:scale-105 group-hover:shadow-[0_14px_32px_rgba(23,17,26,0.1)] sm:h-[72px] sm:w-[72px] sm:rounded-[24px] ${accents.shell}`}
      >
        <span className={`absolute inset-2 rounded-2xl blur-lg ${accents.glow}`} />
        <Icon
          className={`relative h-7 w-7 transition duration-200 ease-out group-hover:-translate-y-0.5 sm:h-11 sm:w-11 ${accents.icon}`}
          aria-hidden="true"
        />
      </span>
      <div className="min-w-0 flex-1 sm:flex-none">
        <h4 className="text-sm font-black leading-tight text-[#17111A] sm:mt-5 sm:text-lg">
          {title}
        </h4>
        <p className="mt-1 text-xs leading-5 text-[#4A4552] sm:mt-2 sm:text-sm">{text}</p>
        <div className="mt-2 sm:mt-auto sm:pt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9D9FF]/80 bg-[#F8F7FF] px-2.5 py-1 text-[10px] font-bold leading-none text-[#4A4352] sm:py-1.5 sm:text-[11px]">
            <Check className="h-3 w-3 text-[#9512A0]" aria-hidden="true" />
            {chip}
          </span>
        </div>
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
            icon: "text-[#9512A0]",
            chip: "border-[#D9D9FF]/80 bg-[#F8F7FF]",
            line: "from-transparent via-[#9512A0] to-transparent",
          };

  return (
    <motion.article
      {...fadeUp}
      className="group relative flex min-h-full flex-col overflow-hidden rounded-[20px] border border-[#D9D9FF]/90 bg-white p-4 shadow-[0_16px_48px_rgba(23,17,26,0.06)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_28px_82px_rgba(149,18,160,0.12)] sm:rounded-[30px] sm:p-7 sm:shadow-[0_22px_70px_rgba(23,17,26,0.07)] lg:p-8"
    >
      <div className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r ${cardAccent.line} opacity-70`} />
      <div className={`absolute right-[-22px] top-8 h-32 w-32 rounded-full ${cardAccent.glow} blur-2xl transition duration-300 ease-out group-hover:scale-110`} />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#EAEAFF]/55 blur-3xl" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`relative flex h-11 w-11 items-center justify-center rounded-xl border sm:h-16 sm:w-16 sm:rounded-[22px] ${cardAccent.iconShell} transition duration-200 ease-out group-hover:shadow-[0_14px_34px_rgba(23,17,26,0.1)]`}>
            <Icon className={`h-6 w-6 transition duration-200 ease-out group-hover:scale-105 sm:h-8 sm:w-8 ${cardAccent.icon}`} aria-hidden="true" />
          </span>
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#9512A0] sm:mt-6 sm:text-sm">
            {subtitle}
          </p>
          <h3 className="mt-1.5 text-xl font-black text-[#17111A] sm:mt-2 sm:text-3xl">{title}</h3>
        </div>
      </div>
      <p className="mt-2.5 max-w-xl text-sm leading-6 text-[#4A4552] sm:mt-4 sm:text-base sm:leading-7">{text}</p>
      <div className="mt-3 flex flex-nowrap items-center gap-1 sm:mt-5 sm:gap-1.5">
        {benefits.slice(0, 3).map((benefit) => (
          <span
            key={benefit}
            className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-2 py-1 text-[10px] font-bold text-[#17111A] sm:px-2.5 sm:py-1 sm:text-[11px] ${cardAccent.chip}`}
          >
            <Check className="h-2.5 w-2.5 shrink-0 text-[#9512A0]" aria-hidden="true" />
            {benefit}
          </span>
        ))}
      </div>
      <Link
        href={href}
        className="relative mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#9512A0]/25 bg-[#F8F7FF] px-4 py-2.5 text-sm font-black text-[#9512A0] transition duration-200 ease-out hover:text-[#7B0C81] sm:mt-auto sm:min-h-0 sm:w-fit sm:justify-start sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:pt-7"
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
    <article className="group rounded-[22px] bg-[linear-gradient(135deg,#9512A0_0%,#D9D9FF_52%,#F8F7FF_100%)] p-px transition duration-200 ease-out hover:-translate-y-0.5 sm:rounded-[30px]">
      <div className="flex min-h-0 items-center gap-4 rounded-[21px] bg-white px-4 py-4 text-left transition duration-200 ease-out group-hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFAFF_100%)] sm:min-h-[260px] sm:flex-col sm:justify-center sm:rounded-[29px] sm:px-6 sm:py-8 sm:text-center md:min-h-[320px]">
        <Icon
          className="h-10 w-10 shrink-0 stroke-[1.5] text-[#9512A0] transition duration-200 ease-out group-hover:-translate-y-1 sm:h-16 sm:w-16"
          aria-hidden="true"
        />
        <div>
          <h3 className="max-w-[13rem] text-base font-black leading-snug text-[#17111A] sm:mt-8 sm:text-xl">
            {title}
          </h3>
          <p className="mt-1.5 max-w-[15rem] text-xs font-semibold leading-5 text-[#4A4552] sm:mt-4 sm:text-sm sm:leading-6">
            {text}
          </p>
        </div>
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
      className="flex h-full flex-col rounded-[22px] border border-white/80 bg-white p-4 shadow-[0_16px_48px_rgba(149,18,160,0.08)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_28px_82px_rgba(149,18,160,0.14)] sm:rounded-[28px] sm:p-7 sm:shadow-[0_22px_70px_rgba(149,18,160,0.1)]"
    >
      <div className="flex min-h-[52px] items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAEAFF] text-[#9512A0]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-black text-[#17111A]">{title}</h3>
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-2 sm:mt-5">
        {visibleItems.map((item) => (
          <CatalogPreviewItem key={item.name} item={item} />
        ))}
      </div>
      {moreItemsNote ? (
        <p className="mt-3 rounded-xl border border-[#D9D9FF]/70 bg-[#F8F7FF] px-3 py-2 text-center text-xs font-semibold leading-5 text-[#4A4552]">
          {moreItemsNote}
        </p>
      ) : null}
      <Link
        href={href}
        className="group mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white transition duration-200 ease-out hover:bg-[#7B0C81] hover:shadow-[0_18px_40px_rgba(149,18,160,0.22)] sm:mt-5 sm:min-h-12"
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
  const className = `group flex flex-1 items-center gap-2.5 rounded-[16px] border p-2.5 text-left transition duration-200 ease-out sm:gap-3.5 sm:rounded-[18px] sm:p-3.5 ${
    item.featured
      ? "border-[#9512A0]/28 bg-[linear-gradient(135deg,#FFFFFF_0%,#F9F7FF_56%,#EAEAFF_100%)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(149,18,160,0.08)]"
      : "border-[#D9D9FF]/65 bg-[#FDFDFF] hover:-translate-y-0.5 hover:border-[#9512A0]/30 hover:bg-[#FAF9FF] hover:shadow-[0_10px_24px_rgba(149,18,160,0.06)]"
  }`;

  const content = (
    <>
      <CatalogThumbnail item={item} />
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-sm font-black leading-snug text-[#17111A]">
          {item.name}
        </p>
        <p className="mt-0.5 line-clamp-2 text-xs font-medium leading-5 text-[#4A4552]">
          {item.text}
        </p>
      </div>
      <span className="shrink-0 text-[#B7AEC3] transition duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-[#9512A0]">
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
        ? "border-[#D9D9FF]/80 bg-[linear-gradient(135deg,#FFFFFF_0%,#F3EEFF_100%)] text-[#9512A0]"
        : item.kind === "family"
          ? "border-[#D99A2B]/16 bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF2D8_100%)] text-[#9A5B12]"
          : item.featured
            ? "border-[#9512A0]/28 bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F1FF_66%,#EAEAFF_100%)] text-[#9512A0]"
            : "border-[#D99A2B]/18 bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF5E2_100%)] text-[#9A5B12]";

  return (
    <div
      className={`relative flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-hidden rounded-xl border shadow-[0_8px_18px_rgba(23,17,26,0.05)] sm:h-[72px] sm:w-[72px] sm:rounded-2xl sm:shadow-[0_10px_24px_rgba(23,17,26,0.06)] ${styles}`}
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
        <div className="absolute inset-x-7 top-14 h-2.5 rounded-lg border border-[#D9D9FF]/80 bg-[#EAEAFF]" />
        <div className="absolute left-1/2 bottom-3 h-5 w-1 -translate-x-1/2 rounded-full bg-[#2F7D6D]/40" />
      </div>
    );
  }
  if (type === "acs" || type === "tank") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-[32%] bottom-3 top-3 rounded-[999px] border border-white/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#EEE7FF_100%)] shadow-[0_8px_18px_rgba(23,17,26,0.08)]" />
        <div className="absolute left-1/2 top-4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#9512A0]/35" />
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
        <div className="absolute inset-x-[36%] bottom-[24%] h-1.5 rounded-full bg-[#9512A0]/22" />
      </div>
    );
  }

  if (type === "battery") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-[30%] inset-y-[18%] rounded-[16px] border border-white/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF2D8_100%)] shadow-[0_10px_20px_rgba(23,17,26,0.08)]" />
        <div className="absolute inset-x-[40%] top-[20%] h-1.5 rounded-full bg-[#9A5B12]/40" />
        <div className="absolute inset-x-[38%] top-[42%] h-2 rounded-full bg-[linear-gradient(90deg,#9512A0_0%,#F2B84B_100%)]" />
        <div className="absolute inset-x-[38%] top-[52%] h-2 rounded-full bg-[#F2B84B]/35" />
      </div>
    );
  }

  if (type === "clima") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-3 right-3 top-4 h-4 rounded-full border border-[#9512A0]/14 bg-white/85" />
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
        <div className="absolute left-4 right-4 top-12 h-1.5 rounded-full bg-[#9512A0]/20" />
      </div>
    );
  }

  if (type === "kit") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-2.5 top-4 h-7 w-7 rounded-xl border border-white/80 bg-white/90 shadow-sm" />
        <div className="absolute right-2.5 top-4 h-7 w-7 rounded-xl border border-[#D99A2B]/20 bg-[#FFF2D8]" />
        <div className="absolute bottom-4 left-1/2 h-7 w-10 -translate-x-1/2 rounded-xl border border-[#9512A0]/14 bg-[#F5F0FF]" />
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
        <div className="absolute right-3 top-4 h-7 w-7 rounded-xl border border-[#9512A0]/16 bg-[#F5F0FF]" />
        <div className="absolute left-1/2 top-7 h-px w-6 -translate-x-1/2 bg-[linear-gradient(90deg,#D99A2B_0%,#9512A0_100%)]" />
        <div className="absolute inset-x-5 bottom-4 h-2 rounded-full bg-[#17111A]/10" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute left-3 right-3 top-3 h-8 rounded-2xl border border-white/80 bg-white/90 shadow-sm" />
      <div className="absolute left-4 right-4 top-5 h-1.5 rounded-full bg-[#9512A0]/16" />
      <div className="absolute left-4 right-8 top-9 h-1.5 rounded-full bg-[#D99A2B]/22" />
      <div className="absolute bottom-3 left-3 right-3 rounded-full bg-[#F5F0FF] px-2 py-1 text-center text-[0.52rem] font-black uppercase tracking-[0.08em] text-[#9512A0]">
        {label ?? "PROYECTO"}
      </div>
    </div>
  );
}

function TrustCard({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <motion.article
      {...fadeUp}
      className="group flex items-center gap-3 rounded-2xl border border-[#D9D9FF] bg-[#F8F7FF] p-4 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F0EDFF] hover:shadow-[0_14px_34px_rgba(149,18,160,0.08)] sm:block sm:p-5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9D9FF] text-[#9512A0] transition duration-200 ease-out group-hover:scale-105 sm:h-11 sm:w-11">
        <Icon className="h-5 w-5 transition duration-200 ease-out group-hover:-translate-y-0.5" aria-hidden="true" />
      </span>
      <h3 className="text-base font-black text-[#17111A] sm:mt-4 sm:text-lg">{title}</h3>
    </motion.article>
  );
}
