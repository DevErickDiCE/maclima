"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
    id: "panel-solar-fotovoltaico",
    vertical: "fotovoltaica",
    brand: "Equipamiento fotovoltaico",
    name: "Paneles solares",
    category: "Paneles solares",
    image: "/fotovoltaica.png",
    thumbnailType: "solar-panel",
    shortDescription:
      "Captación de energía solar para autoconsumo en vivienda, negocio o instalación profesional.",
    description:
      "Captación de energía solar para autoconsumo en vivienda, negocio o instalación profesional. Dimensionados según consumo, cubierta y objetivos del proyecto.",
    tags: ["Paneles", "Autoconsumo", "Energía solar"],
    applications: ["Viviendas", "Negocios", "Cubiertas", "Autoconsumo"],
    features: [
      "Captación solar",
      "Aplicación en autoconsumo",
      "Dimensionamiento a medida",
    ],
    compatibility: ["Inversores", "Baterías", "Estructuras para cubierta"],
    fit: [
      "Usuarios que quieren reducir consumo de red",
      "Negocios con consumo diurno",
      "Proyectos escalables con posible batería",
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
    id: "inversor-fotovoltaico",
    vertical: "fotovoltaica",
    brand: "Conversión energética",
    name: "Inversores fotovoltaicos",
    category: "Inversores",
    thumbnailType: "inverter",
    shortDescription:
      "Conversión de energía solar en electricidad útil para la instalación.",
    description:
      "Conversión de energía solar en electricidad útil para la instalación. Selección según potencia, instalación y estrategia de autoconsumo.",
    tags: ["Inversor", "Conversión", "Autoconsumo"],
    applications: ["Viviendas", "Negocios", "Instalaciones solares"],
    features: [
      "Conversión energética",
      "Gestión de producción",
      "Integración en autoconsumo",
    ],
    compatibility: ["Paneles solares", "Baterías", "Monitorización"],
    fit: [
      "Instalaciones solares nuevas",
      "Ampliaciones de autoconsumo",
      "Proyectos que requieren control energético",
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
    id: "bateria-almacenamiento",
    vertical: "fotovoltaica",
    brand: "Acumulación energética",
    name: "Baterías de almacenamiento",
    category: "Baterías",
    thumbnailType: "battery",
    shortDescription: "Aprovechamiento de excedentes para utilizar la energía en otros momentos del día.",
    description:
      "Aprovechamiento de excedentes para utilizar la energía en otros momentos del día. Dimensionadas según hábitos de consumo y objetivos del proyecto.",
    tags: ["Batería", "Acumulación", "Autoconsumo"],
    applications: ["Viviendas", "Negocios", "Autoconsumo con excedentes"],
    features: [
      "Almacenamiento energético",
      "Uso diferido de excedentes",
      "Apoyo a instalaciones solares",
    ],
    compatibility: ["Paneles solares", "Inversores compatibles", "Gestión energética"],
    fit: [
      "Instalaciones con excedentes",
      "Usuarios que consumen fuera de horas solares",
      "Proyectos que buscan más independencia de red",
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
    id: "kit-autoconsumo",
    vertical: "fotovoltaica",
    brand: "Solución completa",
    name: "Kits de autoconsumo",
    category: "Kits",
    thumbnailType: "kit",
    shortDescription: "Conjunto de componentes adaptados al consumo, cubierta y objetivos de ahorro.",
    description:
      "Conjunto de componentes adaptados al consumo, cubierta y objetivos de ahorro. Configurado según potencia objetivo y posibilidades de ampliación.",
    tags: ["Kit solar", "Autoconsumo", "Vivienda"],
    applications: ["Viviendas", "Negocios", "Proyectos compactos"],
    features: [
      "Conjunto de componentes",
      "Configuración a medida",
      "Preparado para asesoramiento previo",
    ],
    compatibility: ["Paneles", "Inversores", "Estructuras"],
    fit: [
      "Usuarios que quieren una solución completa",
      "Proyectos con necesidades claras de autoconsumo",
      "Instalaciones que deben revisarse antes de propuesta",
    ],
  },
  {
    id: "estructura-cubierta",
    vertical: "fotovoltaica",
    brand: "Montaje e instalación",
    name: "Estructuras para cubierta",
    category: "Estructuras",
    thumbnailType: "mount",
    shortDescription: "Sistemas de soporte para diferentes tipos de superficie y orientación.",
    description:
      "Sistemas de soporte para diferentes tipos de superficie y orientación. Valorando inclinación, fijación y seguridad según cada proyecto.",
    tags: ["Estructuras", "Cubierta", "Instalación"],
    applications: ["Cubiertas inclinadas", "Cubiertas planas", "Negocios"],
    features: [
      "Montaje técnico",
      "Adaptación a cubierta",
      "Soporte para paneles solares",
    ],
    compatibility: ["Paneles solares", "Kits de autoconsumo", "Instalación profesional"],
    fit: [
      "Proyectos con cubierta disponible",
      "Instalaciones que requieren revisión de soporte",
      "Profesionales que necesitan solución de montaje",
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
    id: "solucion-hibrida",
    vertical: "fotovoltaica",
    brand: "Integración energética",
    name: "Solución híbrida aerotermia + fotovoltaica",
    category: "Solución combinada",
    image: "/fotovoltaica.png",
    thumbnailType: "hybrid",
    shortDescription: "Combinación de climatización eficiente y autoconsumo eléctrico.",
    description:
      "Combinación de climatización eficiente y autoconsumo eléctrico. Integración consultiva para apoyar consumos eléctricos ligados a climatización y ACS según cada instalación.",
    tags: ["Aerotermia", "Fotovoltaica", "Solución híbrida"],
    applications: ["Viviendas", "Negocios", "Proyectos de eficiencia"],
    features: [
      "Integración entre verticales",
      "Estudio de consumo e inmueble",
      "Propuesta técnica personalizada",
    ],
    compatibility: ["Aerotermia", "Paneles solares", "Baterías opcionales"],
    fit: [
      "Usuarios que valoran una estrategia energética completa",
      "Negocios con consumo eléctrico relevante",
      "Proyectos que buscan confort y autoconsumo",
    ],
  },
  {
    id: "instalacion-medida",
    vertical: "fotovoltaica",
    brand: "Proyecto técnico",
    name: "Instalación a medida",
    category: "Proyecto",
    thumbnailType: "project",
    shortDescription:
      "Dimensionamiento según consumo, inmueble e instalación existente.",
    description:
      "Dimensionamiento según consumo, inmueble e instalación existente. Servicio consultivo para estudiar espacio disponible y objetivos antes de recomendar una solución energética.",
    tags: ["Proyecto", "Asesoramiento", "Instalación"],
    applications: ["Viviendas", "Negocios", "Profesionales", "Comunidades"],
    features: [
      "Estudio previo",
      "Recomendación técnica",
      "Propuesta personalizada",
    ],
    compatibility: ["Aerotermia", "Fotovoltaica", "Soluciones combinadas"],
    fit: [
      "Usuarios que no saben qué solución elegir",
      "Profesionales que necesitan soporte",
      "Proyectos donde conviene comparar alternativas",
    ],
  },
  {
    id: "bomba-calor-geotermica",
    vertical: "geotermia",
    brand: "Geotermia",
    name: "Bomba de calor geotérmica",
    category: "Climatización geotérmica",
    thumbnailType: "geo",
    shortDescription:
      "Climatización eficiente aprovechando la temperatura estable del subsuelo.",
    description:
      "Sistema de climatización que utiliza la temperatura constante del terreno como fuente energética para calefacción, refrigeración y apoyo al ACS. Requiere estudio previo de viabilidad geotérmica según terreno e inmueble.",
    tags: ["Geotermia", "Climatización", "Alta eficiencia"],
    applications: ["Viviendas", "Negocios", "Obra nueva", "Proyectos exigentes"],
    features: [
      "Calefacción y refrigeración",
      "Temperatura estable del terreno",
      "Según viabilidad técnica",
    ],
    compatibility: ["Suelo radiante", "Fancoils", "ACS", "Sondas geotérmicas"],
    fit: [
      "Proyectos con estudio técnico previo confirmado",
      "Inmuebles con terreno disponible para captación",
      "Instalaciones que buscan alta eficiencia y estabilidad",
    ],
  },
  {
    id: "captacion-geotermica",
    vertical: "geotermia",
    brand: "Geotermia",
    name: "Sistemas de captación geotérmica",
    category: "Captación",
    thumbnailType: "geo",
    shortDescription:
      "Sondas y circuitos de captación adaptados al terreno e inmueble.",
    description:
      "Sistemas de captación del calor del subsuelo mediante sondas verticales u horizontales. La elección del sistema depende del terreno disponible, la geología local y las necesidades energéticas del proyecto.",
    tags: ["Geotermia", "Captación", "Sondas"],
    applications: ["Viviendas unifamiliares", "Negocios", "Proyectos con terreno"],
    features: [
      "Sondas verticales u horizontales",
      "Según terreno e inmueble",
      "Adaptado al proyecto",
    ],
    compatibility: ["Bombas de calor geotérmicas", "Climatización", "ACS"],
    fit: [
      "Proyectos con espacio de captación disponible",
      "Instalaciones que requieren estudio geológico previo",
      "Usuarios que buscan independencia energética a largo plazo",
    ],
  },
  {
    id: "geotermia-acs",
    vertical: "geotermia",
    brand: "Geotermia",
    name: "Geotermia para ACS",
    category: "ACS geotérmica",
    thumbnailType: "geo",
    shortDescription:
      "Producción de agua caliente sanitaria apoyada en energía geotérmica.",
    description:
      "Aprovechamiento de la energía geotérmica para apoyar o gestionar la producción de agua caliente sanitaria. Solución interesante en proyectos donde se busca reducir la dependencia de sistemas convencionales según viabilidad del terreno.",
    tags: ["Geotermia", "ACS", "Energía renovable"],
    applications: ["Viviendas", "Negocios", "Comunidades"],
    features: [
      "Producción de ACS",
      "Energía del subsuelo",
      "Según viabilidad técnica",
    ],
    compatibility: ["Sistemas geotérmicos", "Acumulación", "Climatización"],
    fit: [
      "Proyectos con demanda de ACS y geotermia viable",
      "Instalaciones que buscan confort y eficiencia",
      "Estudios donde se valora la independencia energética",
    ],
  },
  {
    id: "estudio-viabilidad-geotermica",
    vertical: "geotermia",
    brand: "Consultoría técnica",
    name: "Estudio de viabilidad geotérmica",
    category: "Consultoría",
    thumbnailType: "project",
    shortDescription:
      "Análisis técnico previo para valorar si la geotermia encaja con el proyecto.",
    description:
      "Evaluación técnica del terreno, el inmueble y las necesidades energéticas para determinar la viabilidad de un sistema geotérmico. Es el primer paso antes de dimensionar cualquier instalación geotérmica.",
    tags: ["Geotermia", "Estudio", "Viabilidad"],
    applications: ["Viviendas", "Negocios", "Proyectos exigentes", "Obra nueva"],
    features: [
      "Análisis de viabilidad",
      "Evaluación del terreno",
      "Orientación técnica previa",
    ],
    compatibility: ["Geotermia", "Aerotermia", "Soluciones combinadas"],
    fit: [
      "Proyectos que quieren evaluar la geotermia como opción",
      "Inmuebles con terreno disponible y demanda energética relevante",
      "Usuarios que buscan orientación técnica antes de decidir",
    ],
  },
  {
    id: "solucion-combinada-geo-foto",
    vertical: "geotermia",
    brand: "Integración energética",
    name: "Geotermia + fotovoltaica",
    category: "Solución combinada",
    thumbnailType: "project",
    shortDescription:
      "Integración de geotermia y energía solar para mayor eficiencia y menor dependencia de red.",
    description:
      "Combinación de un sistema geotérmico con producción fotovoltaica para reducir el consumo eléctrico de la bomba de calor. Una solución avanzada para proyectos que buscan máxima eficiencia energética. Requiere estudio previo de ambas verticales.",
    tags: ["Geotermia", "Fotovoltaica", "Solución combinada"],
    applications: ["Viviendas", "Negocios", "Proyectos de alta eficiencia"],
    features: [
      "Integración geotermia + solar",
      "Estudio de consumo e inmueble",
      "Propuesta técnica personalizada",
    ],
    compatibility: ["Geotermia", "Paneles solares", "Baterías opcionales"],
    fit: [
      "Proyectos con alta demanda y terreno disponible",
      "Usuarios que buscan independencia energética máxima",
      "Instalaciones donde se valora la estrategia energética completa",
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_54%,#EAEAFF_100%)] py-12 sm:py-16"
    >
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(133,14,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute right-[-12%] top-10 h-80 w-80 rounded-full bg-[#D9D9FF]/80 blur-3xl" />
      <div className="absolute bottom-[-18%] left-[-10%] h-72 w-72 rounded-full bg-[#F2B84B]/14 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
        <motion.div {...fadeUp}>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#850E88]">
            CATÁLOGO CONSULTIVO
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-black leading-[1.08] text-[#17111A] sm:text-4xl lg:text-5xl">
            Catálogo consultivo de aerotermia, fotovoltaica y geotermia
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5F5A66]">
            Consulta las principales familias y soluciones energéticas con las
            que trabaja Maclima. Analizamos cada caso para valorar
            compatibilidad, dimensionamiento e instalación antes de recomendar
            una solución.
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
          className="rounded-[30px] border border-white/80 bg-white/82 p-5 shadow-[0_26px_80px_rgba(133,14,136,0.14)] backdrop-blur-xl sm:p-6"
        >
          <div className="rounded-[22px] border border-[#850E88]/12 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_62%,#EAEAFF_100%)] p-5">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#850E88]">
              ENFOQUE MACLIMA
            </p>
            <p className="mt-2.5 text-lg font-black leading-snug text-[#17111A]">
              No vendemos productos de forma automática.
            </p>
            <p className="mt-2.5 text-sm font-semibold leading-6 text-[#5F5A66]">
              Te ayudamos a elegir la solución adecuada según tu vivienda,
              negocio o proyecto profesional.
            </p>
          </div>
          <div className="mt-3.5 grid gap-2 lg:grid-cols-1">
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
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-max gap-2">
          {catalogNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-[#D9D9FF] bg-white px-4 py-2 text-sm font-black text-[#5F5A66] transition duration-200 ease-out hover:border-[#850E88]/30 hover:bg-[#F8F7FF] hover:text-[#850E88]"
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
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-[36px] border border-[#D9D9FF]/80 bg-[radial-gradient(circle_at_12%_12%,rgba(217,217,255,0.9),transparent_30%),linear-gradient(135deg,#FFFFFF_0%,#F8F7FF_54%,#EAEAFF_100%)] p-5 shadow-[0_30px_96px_rgba(133,14,136,0.13)] sm:p-7 lg:p-9"
        >
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="relative min-h-[340px] overflow-hidden rounded-[32px] border border-white/80 bg-[#17111A] shadow-[0_28px_84px_rgba(23,17,26,0.16)] sm:min-h-[500px]">
              <Image
                src="/imagen/BEN-Dual-AIR/electric-bruin.webp"
                alt="BEN Dual-Air sistema de aerotermia interior compacto"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[56%_center]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,26,0)_0%,rgba(23,17,26,0.38)_100%)]" />
              <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-3 py-2 text-xs font-black uppercase text-[#850E88] shadow-sm backdrop-blur">
                Producto estrella
              </span>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                PRODUCTO ESTRELLA EN AEROTERMIA
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
                BEN Dual-Air: aerotermia compacta para climatización,
                ventilación y ACS
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5F5A66]">
                Sistema compacto de aerotermia interior para integrar
                calefacción, refrigeración, ventilación y agua caliente
                sanitaria en una única solución. Una opción avanzada para
                proyectos donde se busca confort, eficiencia y control.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
    <section id={id} className={`py-16 sm:py-20 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#17111A] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5F5A66]">{text}</p>
          </div>
          <p className="rounded-full border border-[#D9D9FF]/80 bg-white px-4 py-2 text-xs font-black uppercase text-[#5F5A66] shadow-sm">
            {products.length} soluciones visibles
          </p>
        </motion.div>

        <div className="mt-7 overflow-x-auto pb-1">
          <div className="flex min-w-max gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-black transition duration-200 ease-out ${
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

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onInfo={() => onInfo(product)}
            />
          ))}
        </div>
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
        className={`relative h-56 overflow-hidden ${
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
                ? "object-contain p-1"
                : "object-cover object-center"
            }
          />
        ) : (
          <CatalogVisual type={product.thumbnailType} label={product.brand} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-[#850E88]">
          {product.brand}
        </p>
        <h3 className="mt-2 text-xl font-black leading-tight text-[#17111A]">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-bold text-[#5F5A66]">
          {product.category}
        </p>
        <p className="mt-4 text-sm leading-6 text-[#5F5A66]">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
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
        </div>
        <button
          type="button"
          onClick={onInfo}
          className="group/button mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#850E88]/20 bg-white px-5 py-3 text-sm font-black text-[#850E88] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8F7FF] hover:shadow-[0_14px_30px_rgba(133,14,136,0.1)]"
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
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto overflow-x-hidden rounded-t-[30px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:max-h-[86vh] sm:rounded-[32px]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D9D9FF] bg-white/90 text-[#850E88] shadow-sm backdrop-blur transition duration-200 ease-out hover:bg-[#F8F7FF]"
          aria-label="Cerrar información"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className={`relative flex min-h-[220px] items-center justify-center p-4 sm:min-h-[300px] sm:p-6 lg:min-h-full lg:p-8 ${product.cardImageBg === "white" ? "bg-white" : "bg-[linear-gradient(135deg,#FFFFFF_0%,#EAEAFF_100%)]"}`}>
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

          <div className="p-4 sm:p-6 lg:p-7">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#850E88]">
              {product.category}
            </p>
            <h2
              id="catalog-modal-title"
              className="mt-1.5 text-xl font-black leading-tight text-[#17111A] sm:text-2xl"
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
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-white/20 bg-[radial-gradient(circle_at_82%_20%,rgba(217,217,255,0.24),transparent_28%),linear-gradient(135deg,#17111A_0%,#2A1830_70%,#850E88_100%)] p-6 text-white shadow-[0_30px_100px_rgba(23,17,26,0.22)] sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D9D9FF]">
              Asesoramiento técnico
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              ¿No sabes qué solución encaja con tu proyecto?
            </h2>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-[#D9D9FF]">
              Analizamos tu consumo, tipo de inmueble, instalación existente y
              objetivos de ahorro para recomendarte una solución adecuada antes
              de preparar presupuesto o propuesta técnica.
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
