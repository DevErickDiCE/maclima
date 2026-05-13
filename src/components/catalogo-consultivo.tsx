"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { CONTACT_INFO } from "@/lib/contact-info";

type CatalogVertical = "aerotermia" | "fotovoltaica" | "geotermia";

type ThumbnailType =
  | "ben"
  | "climer"
  | "yekallor"
  | "acs"
  | "clima"
  | "tank"
  | "solar-thermal"
  | "solar-panel"
  | "inverter"
  | "battery"
  | "kit"
  | "mount"
  | "hybrid"
  | "project"
  | "geo";

type CatalogProduct = {
  id: string;
  vertical: CatalogVertical;
  brand: string;
  name: string;
  category: string;
  image?: string;
  thumbnailType: ThumbnailType;
  cardImageFit?: "contain" | "cover";
  cardImageBg?: string;
  modalImageFit?: "contain" | "cover";
  shortDescription: string;
  description: string;
  tags: string[];
  applications: string[];
  features: string[];
  compatibility: string[];
  fit: string[];
  hasFullPage?: boolean;
  fullPageHref?: string;
};

const catalogNav = [
  { label: "Todos", href: "#catalogo-todos" },
  { label: "Aerotermia", href: "#aerotermia-catalogo" },
  { label: "Fotovoltaica", href: "#fotovoltaica-catalogo" },
  { label: "Geotermia", href: "#geotermia-catalogo" },
  { label: "BEN Dual-Air", href: "#ben-dual-air-catalogo" },
] as const;

const aerothermalFilters = [
  "Todas",
  "BEN",
  "Climer",
  "Yekallor",
  "ELNUR GABARRON",
  "ACS",
  "Calefacción y refrigeración",
  "Termoacumuladores",
] as const;

const photovoltaicFilters = [
  "Todas",
  "Paneles",
  "HANERSUN",
  "Inversores",
  "Baterías",
  "Kits",
  "Estructuras",
  "Optimizadores",
  "Protecciones",
  "Cargadores VE",
] as const;

const geothermalFilters = [
  "Todas",
  "Climatización",
  "Captación",
  "ACS",
  "Consultoría",
  "Combinada",
] as const;

const catalogProducts: CatalogProduct[] = [
  {
    id: "ben-dual-air",
    vertical: "aerotermia",
    brand: "BEN",
    name: "BEN Dual-Air",
    category: "Producto estrella",
    image: "/imagen/BEN-Dual-AIR/ben-100-electric-format.webp",
    thumbnailType: "ben",
    cardImageFit: "cover",
    modalImageFit: "cover",
    shortDescription:
      "Climatización, ventilación y ACS en una solución compacta.",
    description:
      "BEN Dual-Air integra calefacción, refrigeración, ventilación y agua caliente sanitaria en una unidad compacta para viviendas, apartamentos, obra nueva y reformas.",
    tags: ["Aerotermia", "ACS", "Ventilación", "Vivienda"],
    applications: ["Viviendas", "Apartamentos", "Obra nueva", "Reformas"],
    features: [
      "Calefacción y refrigeración",
      "Agua caliente sanitaria",
      "Ventilación integrada",
      "Control remoto",
    ],
    compatibility: [
      "Instalaciones interiores",
      "Sistemas eléctricos",
      "Proyectos de alta eficiencia",
    ],
    fit: [
      "Viviendas con espacio técnico interior",
      "Proyectos que buscan una solución compacta",
      "Reformas donde se estudia una instalación eficiente",
    ],
    hasFullPage: true,
    fullPageHref: "/catalogo/ben-dual-air",
  },
  {
    id: "climer-ecoheat-acs",
    vertical: "aerotermia",
    brand: "Climer",
    name: "Climer EcoHeat ACS",
    category: "Climer · ACS",
    thumbnailType: "acs",
    image: "/imagen/climer-ecoheat-acs.webp",
    cardImageFit: "contain",
    modalImageFit: "contain",
    shortDescription:
      "Equipo de bomba de calor para producción eficiente de agua caliente sanitaria.",
    description:
      "Equipo de bomba de calor para producción de agua caliente sanitaria, pensado para mejorar la eficiencia energética en viviendas, negocios o instalaciones con consumo regular de ACS. La gama EcoHeat trabaja con tecnología de alta eficiencia y permite producir agua caliente sanitaria hasta 55–60 ºC según configuración.",
    tags: ["ACS", "Aerotermia", "Vivienda"],
    applications: [
      "Duchas",
      "Cocina",
      "Viviendas",
      "Negocios",
      "Reformas",
      "Instalaciones con consumo diario de agua caliente",
    ],
    features: [
      "Producción eficiente de ACS",
      "Capacidades desde 100 L hasta 500 L",
      "ACS hasta 60 ºC según configuración",
      "Instalación mural o de suelo",
      "Concepto Plug & Play",
      "Compatible con instalación fotovoltaica",
    ],
    compatibility: [
      "Instalaciones de ACS",
      "Acumulación",
      "Reformas",
      "Autoconsumo fotovoltaico",
      "Sustitución de sistemas tradicionales",
    ],
    fit: [
      "Viviendas, locales o instalaciones que quieren mejorar la producción de agua caliente sanitaria",
      "Proyectos que buscan reducir la dependencia de sistemas tradicionales",
      "Instalaciones donde se valora una solución eficiente, compacta y compatible con autoconsumo fotovoltaico",
    ],
  },
  {
    id: "climer-calefaccion-refrigeracion",
    vertical: "aerotermia",
    brand: "Climer",
    name: "Climer Calefacción y refrigeración",
    category: "Climer · Calefacción y refrigeración",
    thumbnailType: "clima",
    image: "/imagen/climer-ai20pro.webp",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription: "Sistema de bomba de calor aerotérmica para calefacción y refrigeración.",
    description:
      "Sistema de bomba de calor aerotérmica para aplicaciones domésticas y comerciales, preparado para calefacción y refrigeración según la demanda térmica del inmueble. Gracias a su compresor Inverter, ajusta la potencia en cada momento para mejorar el rendimiento y adaptarse a diferentes condiciones climáticas.",
    tags: ["Calefacción", "Refrigeración", "Bajo consumo"],
    applications: [
      "Vivienda",
      "Negocio",
      "Reforma",
      "Obra nueva",
      "Instalaciones con necesidad de frío y calor",
      "Proyectos con demanda térmica variable",
    ],
    features: [
      "Calefacción y refrigeración",
      "Sistema Inverter",
      "Programación con curva climática integrada",
      "Instalación rápida y sencilla",
      "Solo requiere conexiones hidráulicas",
      "Temperatura de impulsión hasta 70 ºC",
      "Preparado para climas fríos y cálidos",
    ],
    compatibility: [
      "Fancoils",
      "Suelo radiante",
      "Radiadores de agua",
      "Sistemas hidráulicos existentes, según estudio técnico",
    ],
    fit: [
      "Inmuebles que necesitan una solución de climatización eficiente durante todo el año",
      "Proyectos que buscan calefacción y refrigeración con un sistema adaptable a la demanda real",
      "Instalaciones preparadas para trabajar en distintos climas",
    ],
  },
  {
    id: "climer-termoacumulador",
    vertical: "aerotermia",
    brand: "Climer",
    name: "Climer Termoacumulador",
    category: "Climer · Termoacumuladores",
    thumbnailType: "tank",
    image: "/imagen/climer-termoacumulador.webp",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Gama de termoacumuladores para ACS y apoyo a calefacción con diferentes capacidades.",
    description:
      "Gama de termoacumuladores Climer para instalaciones donde se necesita almacenar agua caliente con estabilidad, buena capacidad y bajo mantenimiento. Una solución pensada para ACS y apoyo a calefacción, con depósitos de diferentes capacidades y posibilidad de integración con otras tecnologías.",
    tags: ["ACS", "Acumulación", "Calefacción"],
    applications: [
      "Viviendas",
      "Negocios",
      "Instalaciones técnicas",
      "ACS",
      "Calefacción",
      "Proyectos con demanda de acumulación",
    ],
    features: [
      "Capacidades desde 200 L hasta 2.000 L",
      "Fabricados en acero inoxidable",
      "Alta vida útil",
      "Bajo mantenimiento",
      "Instalación interior o exterior",
      "Hibridable con otras tecnologías",
      "Depósitos para ACS y calefacción",
    ],
    compatibility: [
      "ACS",
      "Calefacción",
      "Aerotermia",
      "Instalaciones híbridas",
      "Sistemas con bomba de calor",
      "Proyectos con acumulación térmica",
    ],
    fit: [
      "Instalaciones que necesitan acumular agua caliente sanitaria o apoyar sistemas de calefacción",
      "Proyectos con demanda de capacidad donde conviene estudiar dimensionamiento",
      "Instalaciones que buscan depósitos fiables compatibles con otras tecnologías",
    ],
  },
  {
    id: "yekallor-bomba-calor",
    vertical: "aerotermia",
    brand: "Yekallor",
    name: "Yekallor Monobloco Inverter R290",
    category: "Yekallor · Aerotermia",
    thumbnailType: "yekallor",
    image: "/imagen/yekallor-monobloco-r290.webp",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Bomba de calor monobloc inverter R290 para calefacción, ACS y sistemas de climatización eficientes.",
    description:
      "Bomba de calor monobloc inverter R290 para proyectos de aerotermia en viviendas, negocios e instalaciones técnicas. Está diseñada para trabajar en exterior y aportar calefacción, apoyo a agua caliente sanitaria y confort térmico con una solución eficiente y adaptable según la demanda del inmueble.",
    tags: ["Aerotermia", "R290", "Alta temperatura", "Calefacción", "ACS"],
    applications: [
      "Vivienda",
      "Negocio",
      "Obra nueva",
      "Reforma",
      "Calefacción central",
      "Proyectos con demanda térmica alta",
    ],
    features: [
      "Tecnología monobloc inverter",
      "Refrigerante R290",
      "Alta temperatura hasta 75 ºC",
      "Compatible con Wi-Fi",
      "Modelos 2.AT9 / 2.AT12 / 3.AT16",
      "Componentes Wilo y GMCC",
      "Solución de baja energía",
      "Diseñada para instalación exterior",
    ],
    compatibility: [
      "Suelo radiante",
      "Radiadores",
      "Fancoils",
      "ACS según configuración",
      "Instalaciones con fotovoltaica",
      "Sistemas de calefacción central",
    ],
    fit: [
      "Proyectos donde se busca sustituir o complementar sistemas tradicionales de calefacción",
      "Viviendas, reformas o instalaciones con radiadores, suelo radiante o necesidades de agua caliente sanitaria",
      "Instalaciones que buscan una bomba de calor exterior eficiente y adaptable según demanda",
    ],
  },
  {
    id: "yekallor-acs",
    vertical: "aerotermia",
    brand: "Yekallor",
    name: "Yekallor BC AQS",
    category: "Yekallor · ACS",
    thumbnailType: "acs",
    image: "/imagen/yekallor-bc-aqs.webp",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Bomba de calor para ACS con modelos BC 100, 200, 300 y 500, refrigerante R290 y acumulación eficiente.",
    description:
      "Bomba de calor para producción de agua caliente sanitaria, pensada para viviendas, comunidades, negocios e instalaciones con consumo regular de ACS. Permite estudiar diferentes capacidades según demanda, espacio disponible y configuración técnica.",
    tags: ["ACS", "R290", "Acumulación", "Bajo consumo", "Anti-legionela"],
    applications: [
      "Viviendas",
      "Comunidades",
      "Negocios",
      "Instalaciones técnicas",
    ],
    features: [
      "Modelos BC 100 / 200 / 300 / 500",
      "Refrigerante R290",
      "Acumulador inoxidable dúplex 2205",
      "Producción hasta 60 ºC",
    ],
    compatibility: [
      "ACS",
      "Aerotermia",
      "Apoyo eléctrico / boost",
      "Paneles solares según configuración",
    ],
    fit: [
      "Consumo regular de ACS",
      "Sustitución de sistemas tradicionales",
      "Proyectos con acumulación",
      "Instalaciones con estudio previo",
    ],
  },
  {
    id: "yekallor-depositos-acumulacion",
    vertical: "aerotermia",
    brand: "Yekallor",
    name: "Yekallor Termoacumuladores",
    category: "Yekallor · Termoacumuladores",
    thumbnailType: "tank",
    image: "/imagen/yekallor-termoacumuladores.webp",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Depósitos para almacenar energía térmica en forma de agua caliente o fría, mejorando la estabilidad y eficiencia de la instalación.",
    description:
      "Depósitos técnicos diseñados para almacenar energía térmica de forma temporal, en agua caliente o fría, y ayudar a estabilizar instalaciones de aerotermia, calefacción, refrigeración o ACS. Su dimensionamiento debe estudiarse según la fuente de calor, el consumo y el tipo de instalación.",
    tags: ["Acumulación", "Inercia", "Aerotermia", "ACS"],
    applications: [
      "Aerotermia",
      "ACS",
      "Calefacción",
      "Refrigeración",
    ],
    features: [
      "Depósitos de inercia y acumulación",
      "Modelos DPI 200L / 300L / TI 50L / 100L",
      "Almacenamiento de agua caliente o fría",
      "Mejora la estabilidad del sistema",
    ],
    compatibility: [
      "Bombas de calor",
      "Calderas",
      "Recuperadores de calor",
      "Instalaciones híbridas",
    ],
    fit: [
      "Instalaciones con demanda variable",
      "Proyectos con acumulación térmica",
      "Sistemas que requieren estabilidad",
      "Instalaciones con estudio técnico previo",
    ],
  },
  {
    id: "elnur-gabarron-thermira-monobloc",
    vertical: "aerotermia",
    brand: "ELNUR GABARRON",
    name: "Thermira Monobloc",
    category: "Aerotermia · Monobloc",
    image: "/imagen/thermira-monobloc.jpg",
    thumbnailType: "yekallor",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Bomba de calor aire-agua monobloc para calefacción, refrigeración y ACS, preparada para suelo radiante, radiadores y fancoils según instalación.",
    description:
      "Bomba de calor aire-agua monobloc compacta, diseñada para aportar calefacción, refrigeración y producción de agua caliente sanitaria en una única unidad exterior. Es una solución interesante para obra nueva, reformas y proyectos donde se busca eficiencia, instalación sencilla y compatibilidad con sistemas hidráulicos existentes.",
    tags: ["Aerotermia", "Monobloc", "ACS", "R32", "A+++"],
    applications: [
      "Viviendas",
      "Obra nueva",
      "Reformas",
      "Calefacción y ACS",
    ],
    features: [
      "Sistema monobloc exterior",
      "Calefacción, refrigeración y ACS",
      "Tecnología inverter",
      "Eficiencia energética A+++",
      "Refrigerante R32",
      "Conexión Wi-Fi",
    ],
    compatibility: [
      "Suelo radiante",
      "Radiadores",
      "Fancoils",
      "Sistemas hidráulicos",
      "Termostatos ambiente",
      "Energías renovables",
    ],
    fit: [
      "Viviendas con instalación hidráulica",
      "Proyectos de renovación energética",
      "Instalaciones con radiadores o suelo radiante",
      "Clientes que buscan climatización y ACS en un sistema compacto",
    ],
  },
  {
    id: "elnur-gabarron-termo-tag",
    vertical: "aerotermia",
    brand: "ELNUR GABARRON",
    name: "Termo Aerotermia TAG",
    category: "Aerotermia · ACS",
    image: "/imagen/TERMO-AEROTERMICO.webp",
    thumbnailType: "acs",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Termo aerotérmico de alta eficiencia para producción de agua caliente sanitaria, disponible en versiones de 200 y 300 litros.",
    description:
      "Termo aerotérmico de alta eficiencia para agua caliente sanitaria. Aprovecha la energía del aire para reducir el consumo frente a un termo eléctrico convencional y está disponible en versiones de 200 y 300 litros.",
    tags: ["ACS", "Aerotermia", "WiFi", "R290"],
    applications: [
      "Pisos y viviendas",
      "Segunda vivienda",
      "Pequeños negocios",
      "Reformas de ACS",
    ],
    features: [
      "200 y 300 litros",
      "Bomba de calor integrada",
      "Resistencia auxiliar",
      "Clasificación energética A+",
      "Control WiFi mediante app",
      "Refrigerante natural R290",
      "Función antilegionela",
    ],
    compatibility: [
      "Instalación interior",
      "Conductos de aire",
      "Apoyo eléctrico",
      "Fotovoltaica según configuración",
    ],
    fit: [
      "Usuarios con consumo habitual de agua caliente",
      "Viviendas que quieren sustituir termo eléctrico",
      "Proyectos donde se busca ACS eficiente y controlable",
      "Instalaciones donde conviene estudiar capacidad, ventilación y ubicación",
    ],
  },
  {
    id: "hanersun-hn21n-66ht-720w",
    vertical: "fotovoltaica",
    brand: "HANERSUN",
    name: "Hanersun 720W TOPCon",
    category: "Fotovoltaica · Paneles solares",
    image: "/imagen/hanersun_132cell_720w.webp",
    thumbnailType: "solar-panel",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Módulo solar bifacial de alta potencia, pensado para maximizar producción y rentabilidad por instalación.",
    description:
      "Módulo solar bifacial de 720W con tecnología N-Type TOPCon, diseñado para aumentar la producción energética y aprovechar mejor cada metro cuadrado de cubierta. Una solución orientada a proyectos donde importan la potencia, la eficiencia y la rentabilidad de la instalación.",
    tags: ["Paneles", "720W", "TOPCon", "Bifacial", "Alta eficiencia"],
    applications: [
      "Viviendas",
      "Negocios",
      "Cubiertas industriales",
      "Instalaciones comerciales",
      "Proyectos de autoconsumo",
    ],
    features: [
      "720W de potencia",
      "Tecnología N-Type TOPCon",
      "Módulo bifacial",
      "132 células · 23,2% de eficiencia",
      "Buen rendimiento con altas temperaturas",
      "Alta durabilidad mecánica",
      "37 kg · 2384×1303×33 mm",
    ],
    compatibility: [
      "Inversores fotovoltaicos",
      "Baterías de almacenamiento",
      "Estructuras para cubierta",
      "Sistemas de autoconsumo",
      "Instalaciones conectadas a red",
    ],
    fit: [
      "Proyectos que buscan máxima producción por metro cuadrado",
      "Cubiertas donde se quiere reducir el número de módulos",
      "Clientes que priorizan potencia y eficiencia",
      "Instaladores que trabajan en proyectos de alta rentabilidad",
    ],
  },
  {
    id: "tigo-ts4-x-o-800w",
    vertical: "fotovoltaica",
    brand: "TIGO",
    name: "Tigo TS4-X-O 800W",
    category: "Fotovoltaica · Optimizador",
    image: "/imagen/Tigo_TS4-X-O-optimized.webp",
    thumbnailType: "inverter",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Optimizador MLPE para módulos de alta potencia, con monitorización, seguridad y apagado rápido a nivel de módulo.",
    description:
      "Optimizador MLPE para instalaciones fotovoltaicas modernas, diseñado para trabajar con módulos de alta potencia y alta corriente. Ayuda a mejorar el rendimiento del sistema, reducir pérdidas por sombras o desajustes y añadir monitorización y apagado rápido a nivel de módulo.",
    tags: ["Optimizadores", "800W", "Apagado rápido", "Monitorización"],
    applications: [
      "Autoconsumo residencial",
      "Instalaciones comerciales",
      "Cubiertas con sombras parciales",
      "Sistemas con módulos de alta potencia",
      "Proyectos que requieren seguridad adicional",
    ],
    features: [
      "Hasta 800W de potencia",
      "Corriente máxima 20A",
      "Optimización individual por módulo",
      "Monitorización del rendimiento",
      "Apagado rápido certificado",
      "Protección exterior IP68",
      "Rango de temperatura -40 ºC a +85 ºC",
    ],
    compatibility: [
      "Módulos fotovoltaicos actuales",
      "Inversores de múltiples marcas",
      "Tigo Access Point",
      "Cloud Connect Advanced",
      "Sistemas con apagado rápido",
    ],
    fit: [
      "Proyectos donde se quiere maximizar cada módulo",
      "Instalaciones con sombras, suciedad o desajustes",
      "Clientes que quieren monitorización avanzada",
      "Instalaciones que requieren apagado rápido y mayor seguridad",
    ],
  },
  {
    id: "deye-sun-12k-sg02lp1",
    vertical: "fotovoltaica",
    brand: "DEYE",
    name: "DEYE SUN-12K",
    category: "Fotovoltaica · Inversor híbrido",
    image: "/imagen/SG01LP1-EU-optimized.webp",
    thumbnailType: "inverter",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Inversor híbrido de 12 kW para autoconsumo con baterías de bajo voltaje, respaldo energético y gestión inteligente de la energía solar.",
    description:
      "El DEYE SUN-12K-SG02LP1-EU-AM3 es un inversor híbrido monofásico de 12 kW pensado para instalaciones solares con alto consumo y baterías de bajo voltaje. Permite gestionar de forma inteligente la energía solar, la red eléctrica y el almacenamiento para optimizar el autoconsumo y ofrecer respaldo en caso de corte.",
    tags: ["Inversores", "Híbrido", "Baterías", "12 kW", "Bajo voltaje"],
    applications: [
      "Viviendas con alto consumo",
      "Instalaciones con baterías",
      "Sistemas de autoconsumo con respaldo",
      "Pequeños negocios",
      "Proyectos ampliables",
    ],
    features: [
      "Potencia nominal 12 kW",
      "Inversor híbrido monofásico",
      "Batería de bajo voltaje 40-60 V",
      "Carga/descarga hasta 250 A",
      "Compatible con litio o plomo-ácido",
      "Protección IP65 · Eficiencia 97,6 %",
      "Paralelo hasta 16 unidades",
    ],
    compatibility: [
      "Baterías de litio",
      "Baterías plomo-ácido",
      "Paneles solares fotovoltaicos",
      "Instalaciones conectadas a red",
      "Sistemas con respaldo o aislados",
    ],
    fit: [
      "Clientes que quieren almacenar excedentes solares",
      "Viviendas que buscan reducir dependencia de la red",
      "Instalaciones con necesidad de backup eléctrico",
      "Proyectos que requieren potencia elevada y escalabilidad",
    ],
  },
  {
    id: "apsystems-apbattery-6-5kwh",
    vertical: "fotovoltaica",
    brand: "APsystems",
    name: "APbattery 6.5 kWh",
    category: "Fotovoltaica · Batería",
    image: "/imagen/apsystems_apbattery.webp",
    thumbnailType: "battery",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Batería LiFePO4 de 6,5 kWh para almacenamiento de energía solar, preparada para sistemas residenciales y pequeños negocios.",
    description:
      "La APsystems APbattery 6.5 kWh es una batería de almacenamiento energético acoplada a CA, pensada para instalaciones fotovoltaicas residenciales y pequeños negocios. Permite guardar parte de la energía generada por los paneles solares, mejorar el autoconsumo y reducir la dependencia de la red eléctrica.",
    tags: ["Baterías", "6.5 kWh", "LiFePO4", "Plug & Play", "IP55"],
    applications: [
      "Viviendas con instalación fotovoltaica",
      "Pequeños negocios",
      "Autoconsumo con baterías",
      "Instalaciones con excedentes solares",
      "Proyectos de almacenamiento residencial",
    ],
    features: [
      "Capacidad 6,5 kWh · Tensión 51,2 V",
      "Tecnología LiFePO4",
      "Hasta 8 APbatteries en paralelo",
      "Refrigeración pasiva sin ventiladores",
      "Instalación Plug & Play",
      "Protección IP55",
      "Diseño modular y ampliable",
    ],
    compatibility: [
      "Sistemas fotovoltaicos residenciales",
      "PCS / sistema de conversión",
      "Autoconsumo con baterías",
      "Instalaciones CA",
      "Sistemas modulares ampliables",
    ],
    fit: [
      "Clientes que quieren aprovechar mejor sus excedentes solares",
      "Viviendas que consumen energía fuera de las horas de producción",
      "Instalaciones donde se busca más independencia de la red",
      "Proyectos donde conviene empezar con una batería y ampliar después",
    ],
  },
  {
    id: "solax-t-bat-sys-lv-d53",
    vertical: "fotovoltaica",
    brand: "SolaX Power",
    name: "SolaX T-BAT-SYS-LV D53",
    category: "Fotovoltaica · Batería",
    image: "/imagen/solax_T-BAT-SYS-LV-D53-.webp",
    thumbnailType: "battery",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Batería de litio de 5,3 kWh para instalaciones fotovoltaicas con inversores híbridos SolaX LV.",
    description:
      "La SolaX Power T-BAT-SYS-LV D53 es una batería de litio de baja tensión diseñada para sistemas de autoconsumo con inversores híbridos SolaX LV. Permite almacenar energía solar para usarla posteriormente, aumentar la autonomía del sistema y reducir la dependencia de la red eléctrica.",
    tags: ["Baterías", "5.3 kWh", "Baja tensión", "Litio", "SolaX"],
    applications: [
      "Viviendas con autoconsumo fotovoltaico",
      "Pequeños negocios",
      "Instalaciones con inversor híbrido compatible",
      "Proyectos con consumo nocturno",
      "Sistemas de almacenamiento residencial",
    ],
    features: [
      "Capacidad 5,3 kWh · Baja tensión",
      "Rango de carga 45-58 V · 100 A",
      "Hasta 6000 ciclos de carga",
      "Gestión inteligente de carga/descarga",
      "Monitorización mediante app",
      "Peso 48,5 kg · 645×150×430 mm",
    ],
    compatibility: [
      "Inversores híbridos SolaX LV",
      "Sistemas fotovoltaicos residenciales",
      "Autoconsumo con baterías",
      "Instalaciones de baja tensión",
      "Monitorización energética",
    ],
    fit: [
      "Clientes que quieren mejorar el aprovechamiento de su energía solar",
      "Viviendas con instalación fotovoltaica existente o prevista",
      "Proyectos donde se quiere reducir consumo de red",
      "Instalaciones que requieren compatibilidad con inversores SolaX LV",
    ],
  },
  {
    id: "ennova-estructura-coplanar-salvateja",
    vertical: "fotovoltaica",
    brand: "Ennova",
    name: "Estructura Coplanar Salvateja",
    category: "Fotovoltaica · Estructura",
    image: "/imagen/estructura_coplanar_salvateja_ennova-optimized.webp",
    thumbnailType: "mount",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Sistema coplanar para instalar módulos fotovoltaicos sobre cubiertas de teja con anclaje bajo teja.",
    description:
      "La estructura coplanar Salvateja de Ennova está pensada para instalaciones fotovoltaicas sobre cubiertas de teja. Utiliza perfil continuo y anclajes bajo teja para fijar los módulos de forma estable, manteniendo una integración limpia sobre el tejado.",
    tags: ["Estructuras", "Coplanar", "Teja", "Kit", "Ennova"],
    applications: [
      "Viviendas unifamiliares",
      "Cubiertas de teja",
      "Instalaciones de autoconsumo",
      "Tejados inclinados",
      "Instalaciones fotovoltaicas sobre cubierta existente",
    ],
    features: [
      "Sistema coplanar para cubierta de teja",
      "Instalación mediante perfil continuo",
      "Anclaje bajo teja",
      "Kit adaptable según número de módulos",
      "Integración visual limpia sobre tejado",
      "Requiere revisión previa de la cubierta",
    ],
    compatibility: [
      "Módulos solares fotovoltaicos",
      "Cubiertas inclinadas de teja",
      "Sistemas de autoconsumo",
      "Kits de montaje fotovoltaico",
      "Instalaciones residenciales",
    ],
    fit: [
      "Viviendas con tejado de teja y orientación adecuada",
      "Proyectos que buscan aprovechar la cubierta existente",
      "Instalaciones que requieren una estructura discreta e integrada",
      "Casos donde debe estudiarse previamente la cubierta y el anclaje",
    ],
  },
  {
    id: "toscano-cuadros-eco-dc",
    vertical: "fotovoltaica",
    brand: "Toscano",
    name: "Cuadros ECO-DC",
    category: "Fotovoltaica · Protección DC",
    image: "/imagen/toscano_dc2-2_m16_v600-a-optimized.webp",
    thumbnailType: "inverter",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Cuadros de protección para corriente continua en instalaciones fotovoltaicas, con seccionamiento y protección del generador solar.",
    description:
      "Los cuadros ECO-DC de Toscano están diseñados para proteger y seccionar la parte de corriente continua de una instalación fotovoltaica. Incorporan protección del generador solar frente a sobretensiones, sobreintensidades y maniobras de corte en el lado DC.",
    tags: ["Protecciones", "Cuadro DC", "Fotovoltaica", "Seguridad", "IP65"],
    applications: [
      "Instalaciones fotovoltaicas",
      "Autoconsumo residencial",
      "Autoconsumo industrial",
      "Campos solares con varios strings",
      "Protección del generador fotovoltaico",
    ],
    features: [
      "Protección en corriente continua",
      "Seccionamiento del lado DC",
      "Protección contra sobretensiones",
      "Protección frente a sobreintensidades",
      "Preparados para strings fotovoltaicos",
      "Hasta 1000 VDC según configuración",
      "Grado de protección IP65",
    ],
    compatibility: [
      "Módulos solares fotovoltaicos",
      "Strings fotovoltaicos",
      "Inversores solares",
      "Instalaciones de corriente continua",
      "Sistemas de autoconsumo",
    ],
    fit: [
      "Instalaciones que requieren protección y seccionamiento DC",
      "Proyectos con varios strings fotovoltaicos",
      "Sistemas donde se busca mayor seguridad en el lado DC",
      "Proyectos que deben dimensionarse según corriente, tensión y configuración",
    ],
  },
  {
    id: "toscano-cuadro-dc-2strings-25a",
    vertical: "fotovoltaica",
    brand: "Toscano",
    name: "Cuadro protecciones DC 2 strings 25A",
    category: "Fotovoltaica · Protección DC",
    image: "/imagen/protecciones_DC_2st_16a-optimized.webp",
    thumbnailType: "inverter",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Cuadro DC para instalaciones solares de 2 strings, con protección frente a sobretensiones y conexión Plug & Play mediante MC4.",
    description:
      "Cuadro de protección de corriente continua para instalaciones fotovoltaicas de 2 strings. Ayuda a proteger la instalación frente a subidas de tensión y maniobras del lado DC, integrando protección contra sobretensiones tipo 2 y conexión mediante MC4.",
    tags: ["Protecciones", "Cuadro DC", "2 strings", "25A", "MC4"],
    applications: [
      "Autoconsumo fotovoltaico",
      "Instalaciones de 2 strings",
      "Viviendas y negocios",
      "Protección lado DC",
      "Entrada/salida MC4",
    ],
    features: [
      "Corriente continua · 2 strings",
      "Corriente máxima 25A",
      "Magnetotérmico x2 500V",
      "Protector sobretensiones x2 600V · tipo 2",
      "Conectores MC4 en entrada y salida",
      "Instalación Plug & Play",
    ],
    compatibility: [
      "Módulos solares fotovoltaicos",
      "Strings fotovoltaicos",
      "Inversores solares",
      "Sistemas de autoconsumo",
      "Protecciones fotovoltaicas",
    ],
    fit: [
      "Instalaciones con 2 strings solares",
      "Proyectos que requieren protección DC compacta",
      "Viviendas y negocios con autoconsumo fotovoltaico",
      "Proyectos donde se necesita cuadro ya cableado con MC4",
    ],
  },
  {
    id: "solax-cargador-ve-g2-x1-72kw",
    vertical: "fotovoltaica",
    brand: "SolaX Power",
    name: "Cargador VE SolaX G2 X1 7.2kW",
    category: "Fotovoltaica · Cargador VE",
    image: "/imagen/solax_evcharger_g2_a-optimized.webp",
    thumbnailType: "inverter",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Cargador monofásico de hasta 7,2kW con manguera integrada, pensado para viviendas con autoconsumo solar y carga inteligente de vehículo eléctrico.",
    description:
      "El cargador VE SolaX G2 X1 7.2kW es una solución monofásica para carga de vehículo eléctrico en viviendas con autoconsumo fotovoltaico. Permite cargar el vehículo de forma inteligente, aprovechar mejor el excedente solar y controlar la carga desde la app SolaX Cloud.",
    tags: ["Cargadores VE", "7.2kW", "Monofásico", "SolaX", "Autoconsumo"],
    applications: [
      "Viviendas con autoconsumo solar",
      "Garajes privados",
      "Carga de vehículo eléctrico",
      "Instalaciones monofásicas",
      "Usuarios con excedente solar",
    ],
    features: [
      "Hasta 7,2kW monofásico",
      "Manguera integrada",
      "Priorización del excedente fotovoltaico",
      "Control desde app SolaX Cloud",
      "Carga programada",
      "Instalación mural compacta",
    ],
    compatibility: [
      "Sistemas fotovoltaicos",
      "Inversores híbridos SolaX",
      "Instalaciones monofásicas",
      "Autoconsumo residencial",
      "Gestión energética doméstica",
    ],
    fit: [
      "Usuarios con vehículo eléctrico y autoconsumo solar",
      "Viviendas que quieren cargar con excedente fotovoltaico",
      "Proyectos que buscan reducir dependencia de la red",
      "Instalaciones compatibles con SolaX según configuración técnica",
    ],
  },
  {
    id: "solax-aelio-b200",
    vertical: "fotovoltaica",
    brand: "SolaX Power",
    name: "SolaX Aelio B200",
    category: "Fotovoltaica · BESS C&I",
    image: "/imagen/solax_bess_trene-optimized.webp",
    thumbnailType: "battery",
    cardImageFit: "contain",
    cardImageBg: "white",
    modalImageFit: "contain",
    shortDescription:
      "Sistema BESS comercial e industrial para almacenar energía, optimizar autoconsumo y mejorar la gestión de demanda en instalaciones de alto consumo.",
    description:
      "SolaX Aelio B200 es un sistema de almacenamiento energético para aplicaciones comerciales e industriales. Permite gestionar la energía fotovoltaica, almacenar excedentes, reducir picos de demanda y adaptar la carga y descarga según los horarios y necesidades de cada instalación.",
    tags: ["Baterías", "BESS", "Comercial", "LFP", "SolaX"],
    applications: [
      "Empresas e industria ligera",
      "Comunidades energéticas",
      "Instalaciones comerciales",
      "Proyectos con autoconsumo",
      "Gestión de demanda y picos",
    ],
    features: [
      "Sistema BESS C&I · hasta 200kWh",
      "Baterías LFP de alta seguridad",
      "Gestión de carga y descarga por horarios",
      "Reducción de picos de demanda",
      "Modo reserva energética",
      "Escalable según proyecto",
    ],
    compatibility: [
      "Fotovoltaica comercial",
      "Sistemas híbridos",
      "Instalaciones C&I",
      "Autoconsumo empresarial",
      "Proyectos con alta demanda",
    ],
    fit: [
      "Empresas con consumo elevado y picos de potencia",
      "Instalaciones que quieren aprovechar excedentes solares",
      "Proyectos que buscan respaldo energético y optimización horaria",
      "Instalaciones que requieren estudio técnico previo de consumo",
    ],
  },
  {
    id: "bombas-calor-geotermicas",
    vertical: "geotermia",
    brand: "Geotermia",
    name: "Bombas de calor geotérmicas",
    category: "Geotermia · Climatización",
    thumbnailType: "geo",
    shortDescription:
      "Climatización eficiente aprovechando la temperatura estable del subsuelo.",
    description:
      "Solución consultiva para proyectos que buscan calefacción, refrigeración y confort estable mediante intercambio energético con el subsuelo. Antes de recomendar una bomba de calor geotérmica, Maclima estudia la demanda térmica del inmueble, el sistema de emisión, el espacio disponible, el terreno y la viabilidad técnica de la captación.",
    tags: ["Geotermia", "Climatización", "Alta eficiencia", "Consultoría"],
    applications: [
      "Viviendas unifamiliares",
      "Obra nueva",
      "Reformas energéticas",
      "Proyectos con demanda térmica estable",
    ],
    features: [
      "Calefacción y refrigeración",
      "Alto rendimiento estacional",
      "Confort estable durante todo el año",
      "Dimensionamiento según demanda",
      "Integración con sistemas hidráulicos",
      "Requiere estudio técnico previo",
    ],
    compatibility: [
      "Captación geotérmica vertical u horizontal según estudio",
      "Suelo radiante",
      "Fancoils",
      "Sistemas de climatización eficientes",
      "Viviendas con espacio técnico disponible",
    ],
    fit: [
      "Clientes que buscan eficiencia y confort estable",
      "Viviendas donde se pueda estudiar captación geotérmica",
      "Proyectos que priorizan bajo consumo y solución duradera",
      "Obra nueva o reformas con enfoque energético",
    ],
  },
  {
    id: "sistemas-captacion-geotermica",
    vertical: "geotermia",
    brand: "Geotermia",
    name: "Sistemas de captación",
    category: "Geotermia · Captación",
    thumbnailType: "clima",
    shortDescription:
      "Circuitos adaptados al terreno, al inmueble y a la demanda energética.",
    description:
      "La captación es una parte clave de cualquier proyecto geotérmico. Puede plantearse mediante soluciones verticales u horizontales según terreno, parcela, espacio disponible y normativa. Maclima trata esta fase como un estudio técnico, no como un producto cerrado, porque condiciona el rendimiento, el coste y la viabilidad de la instalación.",
    tags: ["Geotermia", "Captación", "Terreno", "Viabilidad"],
    applications: [
      "Viviendas unifamiliares",
      "Obra nueva",
      "Reformas energéticas",
      "Parcelas con viabilidad técnica",
    ],
    features: [
      "Captación vertical u horizontal según estudio",
      "Adaptación al terreno disponible",
      "Evaluación de permisos y condicionantes",
      "Dimensionamiento técnico",
      "Coordinación con demanda térmica",
      "Solución definida proyecto a proyecto",
    ],
    compatibility: [
      "Bombas de calor geotérmicas",
      "Circuitos enterrados",
      "Sistemas hidráulicos",
      "Proyectos con estudio del terreno",
      "Instalaciones de climatización eficiente",
    ],
    fit: [
      "Proyectos con espacio o terreno analizable",
      "Clientes que necesitan confirmar viabilidad antes de invertir",
      "Obra nueva con planificación energética",
      "Reformas donde se pueda estudiar captación",
    ],
  },
  {
    id: "geotermia-para-acs",
    vertical: "geotermia",
    brand: "Geotermia",
    name: "Geotermia para ACS",
    category: "Geotermia · Agua caliente sanitaria",
    thumbnailType: "tank",
    shortDescription:
      "Apoyo para agua caliente sanitaria dentro de una solución geotérmica estudiada.",
    description:
      "La geotermia puede integrarse en proyectos donde además de climatización se estudia producción o apoyo de agua caliente sanitaria. La solución depende de la demanda, la acumulación necesaria, el uso del inmueble y la configuración hidráulica. Maclima analiza cada caso para evitar sobredimensionar equipos o plantear combinaciones poco eficientes.",
    tags: ["Geotermia", "ACS", "Acumulación", "Eficiencia"],
    applications: [
      "Viviendas unifamiliares",
      "Obra nueva",
      "Reformas energéticas",
      "Proyectos con ACS",
      "Instalaciones con acumulación",
    ],
    features: [
      "Apoyo a agua caliente sanitaria",
      "Estudio de acumulación",
      "Integración hidráulica",
      "Combinación con climatización",
      "Dimensionamiento según consumo",
      "Recomendación previa no automática",
    ],
    compatibility: [
      "Acumuladores de ACS",
      "Bombas de calor geotérmicas",
      "Sistemas hidráulicos",
      "Instalaciones con demanda de agua caliente",
      "Proyectos con captación viable",
    ],
    fit: [
      "Viviendas con consumo regular de ACS",
      "Proyectos donde se busca una solución integral",
      "Clientes que quieren estudiar climatización y ACS juntas",
      "Instalaciones con espacio para acumulación",
    ],
  },
  {
    id: "estudio-viabilidad-geotermia",
    vertical: "geotermia",
    brand: "Geotermia",
    name: "Estudio de viabilidad",
    category: "Geotermia · Consultoría",
    thumbnailType: "project",
    shortDescription:
      "Análisis técnico previo del terreno, demanda energética e inmueble.",
    description:
      "Antes de recomendar geotermia, Maclima revisa si el proyecto tiene sentido técnico y económico. El estudio contempla demanda térmica, terreno, espacio disponible, posibles sistemas de captación, necesidades de ACS, sistema de emisión, permisos y objetivos del cliente. Esta fase evita presentar la geotermia como un catálogo cerrado cuando depende mucho del contexto.",
    tags: ["Geotermia", "Consultoría", "Viabilidad", "Proyecto"],
    applications: [
      "Primer estudio técnico",
      "Obra nueva",
      "Reformas energéticas",
      "Proyectos con dudas de viabilidad",
      "Comparativa de soluciones",
    ],
    features: [
      "Análisis de demanda térmica",
      "Revisión del terreno",
      "Valoración de captación",
      "Estudio de ACS y climatización",
      "Orientación técnica previa",
      "Recomendación personalizada",
    ],
    compatibility: [
      "Aerotermia",
      "Fotovoltaica",
      "Sistemas hidráulicos",
      "Suelo radiante o fancoils",
      "Proyectos híbridos según viabilidad",
    ],
    fit: [
      "Clientes que no saben si geotermia encaja",
      "Proyectos que necesitan comparar alternativas",
      "Viviendas con terreno o reforma prevista",
      "Promotores que buscan una solución eficiente",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

export function CatalogoConsultivo() {
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(
    null
  );
  const [aerothermalFilter, setAerothermalFilter] = useState("Todas");
  const [photovoltaicFilter, setPhotovoltaicFilter] = useState("Todas");
  const [geothermalFilter, setGeothermalFilter] = useState("Todas");

  const benProduct = catalogProducts.find(
    (product) => product.id === "ben-dual-air"
  );
  const aerothermalProducts = catalogProducts.filter(
    (product) => product.vertical === "aerotermia"
  );
  const photovoltaicProducts = catalogProducts.filter(
    (product) => product.vertical === "fotovoltaica"
  );
  const geothermalProducts = catalogProducts.filter(
    (product) => product.vertical === "geotermia"
  );

  const visibleAerothermalProducts = filterProducts(
    aerothermalProducts,
    aerothermalFilter
  );
  const visiblePhotovoltaicProducts = filterProducts(
    photovoltaicProducts,
    photovoltaicFilter
  );
  const visibleGeothermalProducts = filterProducts(
    geothermalProducts,
    geothermalFilter
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main id="catalogo-todos">
        <CatalogHero />
        <CatalogNav />
        {benProduct ? (
          <FeaturedBen product={benProduct} />
        ) : null}
        <CatalogSection
          id="aerotermia-catalogo"
          eyebrow="Catálogo de aerotermia"
          title="Aerotermia"
          text="Soluciones para climatización, ACS, acumulación y sistemas compatibles con viviendas, negocios y profesionales."
          products={visibleAerothermalProducts}
          filters={aerothermalFilters}
          activeFilter={aerothermalFilter}
          onFilterChange={setAerothermalFilter}
          onInfo={setSelectedProduct}
        />
        <CatalogSection
          id="fotovoltaica-catalogo"
          eyebrow="Catálogo fotovoltaico"
          title="Fotovoltaica"
          text="Soluciones para autoconsumo, paneles solares, inversores, baterías, kits y estructuras adaptadas a cada instalación."
          products={visiblePhotovoltaicProducts}
          filters={photovoltaicFilters}
          activeFilter={photovoltaicFilter}
          onFilterChange={setPhotovoltaicFilter}
          onInfo={setSelectedProduct}
          solar
        />
        <CatalogSection
          id="geotermia-catalogo"
          eyebrow="Catálogo de geotermia"
          title="Geotermia"
          text="Soluciones consultivas para proyectos que estudian la viabilidad de la geotermia como fuente energética. Cada instalación requiere análisis previo del terreno, el inmueble y las necesidades del proyecto."
          products={visibleGeothermalProducts}
          filters={geothermalFilters}
          activeFilter={geothermalFilter}
          onFilterChange={setGeothermalFilter}
          onInfo={setSelectedProduct}
          geo
        />
        <CatalogFinalCta />
      </main>
      <SiteFooter />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

function filterProducts(products: CatalogProduct[], filter: string) {
  if (filter === "Todas") {
    return products;
  }

  return products.filter((product) => {
    const haystack = [
      product.brand,
      product.name,
      product.category,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    const needle = filter.toLowerCase();

    if (needle === "paneles") return haystack.includes("panel");
    if (needle === "baterías") return haystack.includes("bater");
    if (needle === "kits") return haystack.includes("kit");
    if (needle === "estructuras") return haystack.includes("estructura");
    if (needle === "termoacumuladores") return haystack.includes("termo");

    return haystack.includes(needle);
  });
}

function CatalogHero() {
  return (
    <section
      id="catalogo-todos"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_54%,#EAEAFF_100%)] py-10 sm:py-16"
    >
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(133,14,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute right-[-12%] top-10 h-80 w-80 rounded-full bg-[#D9D9FF]/80 blur-3xl" />
      <div className="absolute bottom-[-18%] left-[-10%] h-72 w-72 rounded-full bg-[#F2B84B]/14 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
        <motion.div {...fadeUp}>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#850E88] sm:text-sm sm:tracking-[0.18em]">
            CATÁLOGO CONSULTIVO
          </p>
          <h1 className="mt-3 max-w-3xl text-[1.65rem] font-black leading-[1.1] text-[#17111A] sm:text-4xl lg:text-5xl">
            Catálogo consultivo de soluciones energéticas
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#5F5A66] sm:mt-5 sm:text-base sm:leading-7">
            Consulta las principales soluciones con las que trabaja Maclima.
            Tras analizar cada caso, recomendamos la opción más adecuada según
            consumo, inmueble y viabilidad técnica.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            <Link
              href="/consultoria-gratuita"
              className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_14px_36px_rgba(133,14,136,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] sm:w-auto"
            >
              Solicitar asesoramiento
              <ArrowRight className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#9C97A5]">
                Explorar:
              </span>
              <Link
                href="#aerotermia-catalogo"
                className="inline-flex items-center rounded-full border border-[#D9D9FF] bg-[#EAEAFF] px-4 py-2 text-sm font-bold text-[#850E88] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/30 hover:bg-white"
              >
                Aerotermia
              </Link>
              <Link
                href="#fotovoltaica-catalogo"
                className="inline-flex items-center rounded-full border border-[#D99A2B]/24 bg-[#FFF2D8] px-4 py-2 text-sm font-bold text-[#9A5B12] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FFF8EE]"
              >
                Fotovoltaica
              </Link>
              <Link
                href="#geotermia-catalogo"
                className="inline-flex items-center rounded-full border border-[#2F7D6D]/22 bg-[#E8F6F2] px-4 py-2 text-sm font-bold text-[#2F7D6D] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#D6EFE8]"
              >
                Geotermia
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.aside
          {...fadeUp}
          className="rounded-[22px] border border-white/80 bg-white/82 p-4 shadow-[0_20px_60px_rgba(133,14,136,0.10)] backdrop-blur-xl sm:rounded-[30px] sm:p-6 sm:shadow-[0_26px_80px_rgba(133,14,136,0.14)]"
        >
          <div className="rounded-[18px] border border-[#850E88]/12 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_62%,#EAEAFF_100%)] p-4 sm:rounded-[22px] sm:p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] sm:text-xs sm:tracking-[0.14em]">
              ENFOQUE MACLIMA
            </p>
            <p className="mt-2 text-base font-black leading-snug text-[#17111A] sm:mt-2.5 sm:text-lg">
              No vendemos productos de forma automática.
            </p>
            <p className="mt-1.5 text-xs font-semibold leading-5 text-[#5F5A66] sm:mt-2.5 sm:text-sm sm:leading-6">
              Analizamos cada caso antes de recomendar una solución.
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5 sm:hidden">
            {["Distribución", "Instalación", "Asesoramiento técnico"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D9D9FF]/80 bg-white px-2.5 py-1 text-[11px] font-bold text-[#17111A] shadow-sm"
              >
                <Check className="h-3 w-3 text-[#850E88]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-3.5 hidden gap-2 sm:grid lg:grid-cols-1">
            {[
              { label: "Distribución", desc: "Marcas y equipos seleccionados" },
              { label: "Instalación", desc: "Equipos propios para cada proyecto" },
              { label: "Asesoramiento técnico", desc: "Antes de presupuestar o proponer" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-[#D9D9FF]/80 bg-white px-4 py-3 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAEAFF] text-[#850E88]">
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-sm font-black text-[#17111A]">{item.label}</p>
                  <p className="text-[11px] font-medium text-[#5F5A66]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function CatalogNav() {
  return (
    <nav className="sticky top-[76px] z-30 border-y border-[#D9D9FF]/70 bg-white/86 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex min-w-max gap-1.5 sm:gap-2">
          {catalogNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-[#D9D9FF] bg-white px-3 py-1.5 text-xs font-black text-[#5F5A66] transition duration-200 ease-out hover:border-[#850E88]/30 hover:bg-[#F8F7FF] hover:text-[#850E88] sm:px-4 sm:py-2 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function FeaturedBen({
  product,
}: {
  product: CatalogProduct;
}) {
  return (
    <section
      id="ben-dual-air-catalogo"
      className="bg-white py-10 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-[24px] border border-[#D9D9FF]/80 bg-[radial-gradient(circle_at_12%_12%,rgba(217,217,255,0.9),transparent_30%),linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_54%,#EAEAFF_100%)] p-4 shadow-[0_30px_96px_rgba(133,14,136,0.13)] sm:rounded-[36px] sm:p-7 lg:p-9"
        >
          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="relative min-h-[240px] overflow-hidden rounded-[20px] border border-white/80 bg-[#17111A] shadow-[0_22px_64px_rgba(23,17,26,0.14)] sm:min-h-[500px] sm:rounded-[32px] sm:shadow-[0_28px_84px_rgba(23,17,26,0.16)]">
              <Image
                src="/imagen/BEN-Dual-AIR/electric-bruin.webp"
                alt="BEN Dual-Air sistema de aerotermia interior compacto"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[56%_center]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,26,0)_0%,rgba(23,17,26,0.38)_100%)]" />
              <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/90 px-2.5 py-1.5 text-[10px] font-black uppercase text-[#850E88] shadow-sm backdrop-blur sm:left-5 sm:top-5 sm:px-3 sm:py-2 sm:text-xs">
                Producto estrella
              </span>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#850E88] sm:text-sm sm:tracking-[0.16em]">
                PRODUCTO ESTRELLA EN AEROTERMIA
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
                BEN Dual-Air: aerotermia compacta para climatización,
                ventilación y ACS
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#5F5A66] sm:mt-5 sm:text-lg sm:leading-8">
                Sistema compacto de aerotermia interior para integrar
                calefacción, refrigeración, ventilación y ACS en una única
                solución.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <Link
                  href={product.fullPageHref ?? "/catalogo/ben-dual-air"}
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-5 py-3 text-sm font-black text-white shadow-[0_16px_36px_rgba(133,14,136,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72]"
                >
                  Ver ficha completa
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/consultoria-gratuita"
                  className="inline-flex min-h-13 items-center justify-center rounded-xl border border-[#850E88]/20 bg-white px-5 py-3 text-sm font-black text-[#850E88] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF]"
                >
                  Solicitar asesoramiento sobre BEN
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function CatalogSection({
  id,
  eyebrow,
  title,
  text,
  products,
  filters,
  activeFilter,
  onFilterChange,
  onInfo,
  solar = false,
  geo = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  products: CatalogProduct[];
  filters: readonly string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onInfo: (product: CatalogProduct) => void;
  solar?: boolean;
  geo?: boolean;
}) {
  const bg = geo
    ? "bg-[linear-gradient(180deg,#FFFFFF_0%,#ECFDF5_45%,#F0FDF4_100%)]"
    : solar
      ? "bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF8EE_45%,#EAEAFF_100%)]"
      : "bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)]";

  return (
    <section id={id} className={`py-10 sm:py-20 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="flex flex-col gap-3 sm:gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#850E88] sm:text-sm sm:tracking-[0.16em]">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-[#17111A] sm:mt-3 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5F5A66] sm:mt-4 sm:text-lg sm:leading-8">{text}</p>
          </div>
          <p className="self-start rounded-full border border-[#D9D9FF]/80 bg-white px-3 py-1.5 text-[10px] font-black uppercase text-[#5F5A66] shadow-sm sm:self-auto sm:px-4 sm:py-2 sm:text-xs">
            {products.length} soluciones visibles
          </p>
        </motion.div>

        <div className="mt-5 -mx-4 overflow-x-auto pb-1 sm:mx-0 sm:mt-7">
          <div className="flex min-w-max gap-2 px-4 sm:px-0">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-black transition duration-200 ease-out sm:px-4 sm:py-2 sm:text-sm ${
                  activeFilter === filter
                    ? "border-[#850E88] bg-[#850E88] text-white shadow-[0_10px_24px_rgba(133,14,136,0.18)]"
                    : geo
                      ? "border-[#10B981]/20 bg-white text-[#065F46] hover:bg-[#ECFDF5]"
                      : solar
                        ? "border-[#D99A2B]/18 bg-white text-[#9A5B12] hover:bg-[#FFF2D8]"
                        : "border-[#D9D9FF] bg-white text-[#5F5A66] hover:bg-[#F8F7FF] hover:text-[#850E88]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onInfo={() => onInfo(product)}
            />
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-8 rounded-[20px] border border-[#D9D9FF]/70 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_100%)] px-4 py-4 shadow-sm sm:mt-10 sm:rounded-[24px] sm:px-8 sm:py-6"
        >
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-6">
            <span className="inline-flex shrink-0 self-start rounded-full border border-[#850E88]/15 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.10em] text-[#850E88] shadow-sm sm:px-3 sm:py-1.5 sm:text-[11px] sm:tracking-[0.12em]">
              Catálogo orientativo
            </span>
            <div>
              <p className="text-xs font-bold leading-5 text-[#17111A] sm:text-sm sm:leading-6">
                Las soluciones mostradas sirven como referencia del alcance de
                los sistemas con los que trabaja Maclima.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#5F5A66] sm:mt-1.5 sm:text-sm sm:leading-6">
                Tras una consulta previa, analizamos cada caso y recomendamos
                la opción más adecuada según necesidades reales de eficiencia,
                confort y viabilidad técnica.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  onInfo,
}: {
  product: CatalogProduct;
  onInfo: () => void;
}) {
  const solar = product.vertical === "fotovoltaica";
  const geo = product.vertical === "geotermia";

  return (
    <motion.article
      {...fadeUp}
      className="group flex min-h-full flex-col overflow-hidden rounded-[26px] border border-[#D9D9FF]/80 bg-white shadow-[0_20px_60px_rgba(23,17,26,0.07)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_28px_82px_rgba(133,14,136,0.12)]"
    >
      <div
        className={`relative h-52 overflow-hidden sm:h-56 ${
          product.cardImageBg === "white"
            ? "bg-white"
            : geo
              ? "bg-[linear-gradient(135deg,#FFFFFF_0%,#ECFDF5_100%)]"
              : solar
                ? "bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF2D8_100%)]"
                : "bg-[linear-gradient(135deg,#FFFFFF_0%,#EAEAFF_100%)]"
        }`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className={
              product.cardImageFit === "contain"
                ? "object-contain p-1 sm:p-2"
                : "object-cover object-center"
            }
          />
        ) : (
          <CatalogVisual type={product.thumbnailType} label={product.brand} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-black uppercase tracking-[0.10em] text-[#850E88] sm:text-xs sm:tracking-[0.12em]">
          {product.brand}
        </p>
        <h3 className="mt-1.5 line-clamp-2 text-base font-black leading-tight text-[#17111A] sm:mt-2 sm:text-xl">
          {product.name}
        </h3>
        <p className="mt-1 text-xs font-bold text-[#5F5A66] sm:text-sm">
          {product.category}
        </p>
        <p className="mt-3 line-clamp-2 text-xs leading-5 text-[#5F5A66] sm:mt-4 sm:text-sm sm:leading-6 sm:line-clamp-none">
          {product.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2 py-0.5 text-[10px] font-bold sm:px-2.5 sm:py-1 sm:text-xs ${
                geo
                  ? "border-[#10B981]/20 bg-[#ECFDF5] text-[#065F46]"
                  : solar
                    ? "border-[#D99A2B]/20 bg-[#FFF2D8] text-[#9A5B12]"
                    : "border-[#D9D9FF]/80 bg-[#F8F7FF] text-[#4A4352]"
              }`}
            >
              {tag}
            </span>
          ))}
          <span className="hidden sm:contents">
            {product.tags.slice(3).map((tag) => (
              <span
                key={tag}
                className={`rounded-full border px-2.5 py-1 text-xs font-bold ${
                  geo
                    ? "border-[#10B981]/20 bg-[#ECFDF5] text-[#065F46]"
                    : solar
                      ? "border-[#D99A2B]/20 bg-[#FFF2D8] text-[#9A5B12]"
                      : "border-[#D9D9FF]/80 bg-[#F8F7FF] text-[#4A4352]"
                }`}
              >
                {tag}
              </span>
            ))}
          </span>
        </div>
        <button
          type="button"
          onClick={onInfo}
          className="group/button mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#850E88]/20 bg-white px-4 py-2.5 text-xs font-black text-[#850E88] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF] hover:shadow-[0_14px_30px_rgba(133,14,136,0.1)] sm:mt-auto sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm"
        >
          Ver información
          <ChevronRight className="h-4 w-4 transition duration-200 ease-out group-hover/button:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}

function CatalogVisual({
  type,
  label,
}: {
  type: ThumbnailType;
  label?: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(242,184,75,0.22),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(133,14,136,0.16),transparent_34%)]" />

      {type === "geo" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-6">
          {[
            { w: "w-full", color: "bg-[#ECFDF5]", border: "border-[#10B981]/30" },
            { w: "w-4/5", color: "bg-[#D1FAE5]", border: "border-[#10B981]/22" },
            { w: "w-3/5", color: "bg-[#A7F3D0]", border: "border-[#10B981]/18" },
          ].map((layer, i) => (
            <div
              key={i}
              className={`h-8 rounded-xl border ${layer.color} ${layer.border} ${layer.w}`}
            />
          ))}
          <div className="mt-1 h-4 w-1.5 rounded-full bg-[#10B981]/60" />
        </div>
      ) : null}
      {type === "climer" || type === "yekallor" ? (
        <div className="absolute inset-6 flex items-center justify-center rounded-[28px] border border-white/80 bg-white/82 shadow-[0_18px_40px_rgba(23,17,26,0.08)] backdrop-blur">
          <span className="text-xl font-black uppercase tracking-[0.12em] text-[#850E88]">
            {label}
          </span>
        </div>
      ) : null}

      {type === "acs" || type === "tank" ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-20 rounded-[999px] border border-white/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#EAEAFF_100%)] shadow-[0_18px_44px_rgba(23,17,26,0.1)]" />
          <div className="absolute h-3 w-3 rounded-full bg-[#850E88]/35" />
        </div>
      ) : null}

      {type === "clima" ? (
        <div className="absolute inset-8 rounded-[30px] border border-white/80 bg-white/78 p-6 shadow-[0_18px_44px_rgba(23,17,26,0.08)]">
          <div className="h-10 rounded-full bg-[#F5F0FF]" />
          <div className="mt-8 h-2 rounded-full bg-[#38BDF8]/45" />
          <div className="mt-4 h-2 rounded-full bg-[#FB923C]/45" />
        </div>
      ) : null}

      {type === "solar-thermal" || type === "solar-panel" ? (
        <div className="absolute inset-8 rotate-[-4deg] rounded-[26px] border border-[#D99A2B]/24 bg-[linear-gradient(180deg,#F6F4FF_0%,#DDE6FF_100%)] p-4 shadow-[0_18px_44px_rgba(23,17,26,0.1)]">
          <div className="grid h-full grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} className="rounded-lg bg-[#7888AA]/45" />
            ))}
          </div>
        </div>
      ) : null}

      {type === "inverter" ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-24 rounded-[28px] border border-white/80 bg-white shadow-[0_18px_44px_rgba(23,17,26,0.1)]" />
          <div className="absolute top-[43%] h-5 w-5 rounded-full bg-[#D99A2B]/70" />
          <div className="absolute top-[56%] h-2 w-12 rounded-full bg-[#850E88]/18" />
        </div>
      ) : null}

      {type === "battery" ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-24 rounded-[26px] border border-white/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF2D8_100%)] shadow-[0_18px_44px_rgba(23,17,26,0.1)]" />
          <div className="absolute h-3 w-12 rounded-full bg-[linear-gradient(90deg,#850E88_0%,#F2B84B_100%)]" />
          <div className="absolute mt-8 h-3 w-12 rounded-full bg-[#F2B84B]/35" />
        </div>
      ) : null}

      {type === "kit" || type === "hybrid" ? (
        <div className="absolute inset-8 grid grid-cols-2 gap-4">
          <div className="rounded-[24px] border border-white/80 bg-white/86 shadow-[0_14px_34px_rgba(23,17,26,0.08)]" />
          <div className="rounded-[24px] border border-[#D99A2B]/20 bg-[#FFF2D8]" />
          <div className="col-span-2 rounded-[24px] border border-[#850E88]/14 bg-[#F5F0FF]" />
        </div>
      ) : null}

      {type === "mount" ? (
        <div className="absolute inset-10 rounded-[28px] border border-[#D99A2B]/18 bg-white/72 p-6 shadow-[0_18px_44px_rgba(23,17,26,0.08)]">
          <div className="grid h-full grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <span
                key={index}
                className="rounded-lg border border-[#9A5B12]/20 bg-[#FFF2D8]"
              />
            ))}
          </div>
        </div>
      ) : null}

      {type === "project" ? (
        <div className="absolute inset-8 rounded-[28px] border border-white/80 bg-white/82 p-6 shadow-[0_18px_44px_rgba(23,17,26,0.08)]">
          <div className="h-5 rounded-full bg-[#850E88]/16" />
          <div className="mt-5 h-4 w-3/4 rounded-full bg-[#D99A2B]/20" />
          <div className="mt-5 grid grid-cols-3 gap-3">
            <span className="h-12 rounded-2xl bg-[#EAEAFF]" />
            <span className="h-12 rounded-2xl bg-[#FFF2D8]" />
            <span className="h-12 rounded-2xl bg-[#F8F7FF]" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: CatalogProduct | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const modalVisualBg =
    product.cardImageBg === "white"
      ? "bg-white"
      : product.vertical === "geotermia"
        ? "bg-[linear-gradient(135deg,#FFFFFF_0%,#ECFDF5_55%,#EAEAFF_100%)]"
        : "bg-[linear-gradient(135deg,#FFFFFF_0%,#EAEAFF_100%)]";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-[#17111A]/64 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="catalog-modal-title"
    >
      <motion.div
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative max-h-[96dvh] w-full max-w-5xl overflow-y-auto overflow-x-hidden rounded-t-[24px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:max-h-[86vh] sm:rounded-[32px]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="fixed right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#D9D9FF] bg-white text-[#850E88] shadow-md transition duration-200 ease-out hover:bg-[#F8F7FF] sm:absolute sm:h-11 sm:w-11 sm:rounded-2xl sm:bg-white/90 sm:shadow-sm sm:backdrop-blur"
          aria-label="Cerrar información"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className={`relative flex min-h-[180px] items-center justify-center p-3 sm:min-h-[300px] sm:p-6 lg:min-h-full lg:p-8 ${modalVisualBg}`}>
            {product.image ? (
              <>
                <div className={`absolute inset-0 animate-pulse ${product.cardImageBg === "white" ? "bg-gray-100/60" : "bg-[#EAEAFF]/60"}`} />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  loading="eager"
                  className={
                    product.modalImageFit === "contain"
                      ? "object-contain p-1"
                      : "object-cover object-center"
                  }
                />
              </>
            ) : (
              <CatalogVisual type={product.thumbnailType} label={product.brand} />
            )}
          </div>

          <div className="p-4 pb-6 sm:p-6 lg:p-7">
            <p className="pr-12 text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] sm:pr-0 sm:text-xs sm:tracking-[0.14em]">
              {product.category}
            </p>
            <h2
              id="catalog-modal-title"
              className="mt-1.5 pr-12 text-lg font-black leading-tight text-[#17111A] sm:pr-0 sm:text-2xl"
            >
              {product.name}
            </h2>
            <p className="mt-2 text-sm leading-[1.4rem] text-[#5F5A66]">
              {product.description}
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <ModalInfoBlock title="Aplicaciones" items={product.applications} />
              <ModalInfoBlock
                title="Características principales"
                items={product.features}
              />
              <ModalInfoBlock
                title="Compatibilidades"
                items={product.compatibility}
              />
              <ModalInfoBlock title="Para quién encaja" items={product.fit} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ModalInfoBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-[#D9D9FF]/60 bg-white p-2.5">
      <p className="text-[11px] font-black uppercase tracking-wide text-[#17111A]">{title}</p>
      <ul className="mt-1.5 grid gap-0.5">
        {items.map((item) => (
          <li
            key={item}
            className="text-[11px] font-medium leading-5 text-[#5F5A66]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CatalogFinalCta() {
  return (
    <section
      id="cta-catalogo"
      className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8"
    >
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-6xl overflow-hidden rounded-[26px] border border-white/20 bg-[radial-gradient(circle_at_82%_20%,rgba(217,217,255,0.24),transparent_28%),linear-gradient(135deg,#17111A_0%,#2A1830_70%,#850E88_100%)] p-5 text-white shadow-[0_30px_100px_rgba(23,17,26,0.22)] sm:rounded-[34px] sm:p-8 lg:p-10"
      >
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D9D9FF] sm:text-sm sm:tracking-[0.16em]">
              Asesoramiento técnico
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:mt-3 sm:text-4xl">
              ¿No sabes qué solución encaja con tu proyecto?
            </h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-[#D9D9FF] sm:mt-5 sm:text-base sm:leading-7">
              Analizamos tu consumo, inmueble e instalación existente para
              recomendarte una solución antes de preparar presupuesto.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/consultoria-gratuita"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-black text-[#850E88] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF]"
            >
              Solicitar consultoría gratuita
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={CONTACT_INFO.whatsappHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-base font-black text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/15"
            >
              Contactar por WhatsApp
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
