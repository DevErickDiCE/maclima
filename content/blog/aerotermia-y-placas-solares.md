---
id: "aerotermia-y-placas-solares"
title: "Aerotermia y placas solares: cómo combinar climatización y autoconsumo"
seoTitle: "Aerotermia y placas solares: cómo combinarlas"
slug: "aerotermia-y-placas-solares"
description: "Aerotermia y placas solares encajan cuando el consumo coincide con la producción: acumulación térmica, señal fotovoltaica y límites de los excedentes."
date: "2026-09-18"
updated_at: "2026-09-18"
category: "Integración"
cluster: "Integración"
keyword_principal: "aerotermia y placas solares"
intencion: "comercial"
zona: "España"
pagina_pilar: "/aerotermia"
status: "publicado"
image: "/blog/aerotermia-y-placas-solares.webp"
imageAlt: "Vivienda unifamiliar con placas solares en la cubierta de teja y una unidad exterior de aerotermia instalada junto a la fachada"
---

Combinar aerotermia y placas solares funciona, pero **no porque una instalación cubra automáticamente a la otra**: funciona cuando el diseño consigue que la bomba de calor consuma en las horas en las que los paneles producen. Fuera de esas horas, la aerotermia tira de la red igual que si no hubiera placas.

Ese es el problema real que hay que resolver, y no se resuelve poniendo más paneles. La calefacción se demanda en invierno y de madrugada; la fotovoltaica produce en verano y a mediodía. Todo lo que hace que la combinación merezca la pena —acumulación térmica, control por señal de excedente, dimensionado conjunto— existe para acercar esas dos curvas.

Este artículo explica dónde encajan de forma natural, dónde hay que forzarlas y qué límites tiene la operación. No promete una factura eléctrica a cero, porque la regulación española de autoconsumo no lo permite.

## Qué aporta realmente juntar las dos instalaciones

Aporta un multiplicador. Una bomba de calor no transforma un kilovatio eléctrico en un kilovatio térmico: lo transforma en varios, porque la mayor parte del calor lo toma del aire exterior.

La [Guía IDAE 025 sobre la bomba de calor en la rehabilitación energética de edificios](https://www.idae.es/sites/default/files/documentos/publicaciones_idae/Guias_IDAE_La_Bomba_de_calor_2023_V11.pdf), redactada por AFEC para el IDAE en septiembre de 2023, lo cuantifica al comparar la fotovoltaica con la solar térmica: *«por cada kW fotovoltaico, la bomba de calor convierte cada kW eléctrico fotovoltaico en aproximadamente 3-4 kW térmicos de media»*.

Por eso la misma guía señala que la bomba de calor *«es combinable con cualquier fuente renovable destinada al autoconsumo eléctrico»* y que el objetivo de diseño debe ser el aprovechamiento *«para el autoconsumo instantáneo, es decir, sin almacenar en baterías o verter a la red»*.

La palabra que manda es **instantáneo**. El multiplicador solo se aplica a la electricidad que la bomba de calor consume mientras el sol la está generando.

## El desajuste de fondo: la demanda se mueve mucho más que la producción

Hay un tópico que conviene desmontar: la idea de que el problema es que en invierno las placas «casi no producen». En Madrid no es así, y los datos lo dicen con claridad.

Consultando el [sistema PVGIS de la Comisión Europea](https://re.jrc.ec.europa.eu/pvg_tools/es/) para el centro de Madrid (40,417 N; −3,704 O; 665 m) con 1 kWp orientado al sur, 35° de inclinación, montaje sobre cubierta y 14 % de pérdidas de sistema, la producción media mensual de la base PVGIS-SARAH2 (series 2005-2020) queda así:

- **Julio, el mejor mes:** 161,3 kWh, unos 5,2 kWh al día.
- **Enero:** 102,1 kWh, unos 3,3 kWh al día.
- **Diciembre:** 99,7 kWh, unos 3,2 kWh al día.
- **Noviembre, el peor mes:** 97,5 kWh, unos 3,3 kWh al día.
- **Total anual:** 1.559,5 kWh por kWp instalado.

Entre el mejor mes y el peor hay un factor de **1,65**. Es una variación notable, pero moderada. La demanda de calefacción de esa misma vivienda, en cambio, pasa de ser prácticamente nula en julio a ser máxima en enero: ahí el factor no es 1,65, es incomparablemente mayor.

El desajuste, por tanto, **no está en la producción solar: está en la demanda térmica**. Y se repite dentro de cada día. En diciembre esos 3,2 kWh diarios se concentran en unas pocas horas centrales, justo cuando la vivienda está vacía o ya templada, mientras que la calefacción trabaja de madrugada y a primera hora.

A eso se le suma una segunda capa. El [Reglamento (UE) nº 813/2013 de diseño ecológico de aparatos de calefacción](https://www.boe.es/doue/2013/239/L00136-00161.pdf) obliga a declarar la capacidad de la bomba de calor a distintas temperaturas exteriores (Tj = −7, +2, +7 y +12 °C) precisamente porque no es la misma: el día más frío del año el equipo entrega menos potencia y con peor rendimiento. Es decir, la hora de mayor demanda coincide con el peor rendimiento del equipo **y** con la menor producción solar. Ninguna de las tres cosas se arregla añadiendo paneles.

## La refrigeración es donde la coincidencia sale gratis

En verano el problema se da la vuelta solo. Cuanto más aprieta el sol, más produce la instalación y más frío pide la vivienda, con apenas unas horas de desfase.

La Guía IDAE 025 lo formula sin matices: *«La producción y el consumo deben, en la medida de lo posible, coincidir en el tiempo. En el caso de la producción de frío (refrigeración) esto suele ocurrir por lo general de manera natural»*.

Por eso, cuando alguien plantea placas solares para «la aerotermia», conviene aclarar qué servicios va a cubrir el equipo. Una bomba de calor que solo da calefacción y agua caliente aprovecha mucho peor una instalación fotovoltaica que una multitarea que además refrigera, porque esta última tiene demanda justo en los meses de máxima producción.

## El agua caliente sanitaria es el punto de encuentro más fácil

El ACS es la demanda térmica que existe los doce meses del año y que, además, se puede desplazar en el tiempo sin que nadie lo note. Es el candidato natural para absorber el excedente del mediodía.

La guía del IDAE describe el mecanismo: las bombas de calor multitarea y las dedicadas a ACS *«almacenarán la energía eléctrica producida en forma de energía térmica en depósitos de ACS (elevando su temperatura), depósitos de inercia (incrementando o disminuyendo su temperatura), o en los espacios de la vivienda aprovechando la inercia de los suelos radiantes»*. Y añade que un equipo de ACS puede *«trabajar como una “batería” térmica para almacenar el resto del excedente de energía en forma de calor»*.

La forma concreta de hacerlo que recomienda la guía consiste en manejar **dos consignas** en el depósito:

- Una temperatura **alta** para los momentos con aporte fotovoltaico, porque *«ese exceso de temperatura sobre la consigna permite almacenar una mayor cantidad de energía, porque aumenta el salto térmico para un mismo volumen de agua»*.
- Una temperatura **lo más baja posible** para el resto del día, en modo mantenimiento, que es cuando el calor solo se pierde.

Hay dos condiciones que la guía subraya y que no son opcionales. La primera es de seguridad: subir la consigna *«requerirá del uso de una válvula termostática a la salida del depósito para evitar quemaduras a los usuarios y a la instalación»*. La segunda es de dimensionado: *«un dimensionamiento generoso de los depósitos, con un elevado nivel de estratificación, es fundamental»*, y conviene que sea *«generoso, pero no excesivo»*.

Un detalle operativo que casi nunca aparece en los folletos: en la mayoría de configuraciones, *«cuando la bomba de calor está trabajando en ACS, no cubre otras demandas»*. Si programas la carga solar del depósito a la hora en que la vivienda pide calefacción, estás compitiendo contigo mismo.

## Almacenar calor sale más barato que almacenar electricidad

Antes de presupuestar una batería conviene agotar el almacenamiento térmico, que en muchas viviendas ya está instalado y no se está usando.

La Guía IDAE 025 lo plantea justo en esos términos: *«Una opción para no encarecer el precio de la instalación FV mediante la instalación de baterías para aprovechar los excedentes es la acumulación térmica, tanto en agua, mediante un depósito de inercia que además beneficiará el funcionamiento de la máquina, como en el propio ambiente interior de la vivienda»*.

La técnica, en calefacción, es un sobrecalentamiento ligero y controlado: cuando se detecta excedente *«se programa una elevación ligera de la temperatura de la vivienda durante las horas centrales, sin exceder los valores de confort»*, de modo que *«la vivienda aproveche esa inercia térmica y se mantengan las condiciones de temperatura y confort hasta la noche»*.

Aquí está el filtro que decide si tu vivienda es candidata o no. La guía es explícita: *«para que ello sea posible es imprescindible contar con un buen nivel de aislamiento de la vivienda, que reduzca las pérdidas energéticas y permita mantener la temperatura ambiente el mayor tiempo posible dentro de los límites de confort en las horas donde no existe producción FV»*.

En una vivienda mal aislada el calor acumulado a mediodía se ha escapado antes de la cena, y la estrategia solo consume más. En una vivienda con suelo radiante y buena envolvente, la inercia del forjado hace de acumulador sin coste adicional: lo hemos desarrollado al comparar [suelo radiante o fancoils con aerotermia](/blog/suelo-radiante-o-fancoils-con-aerotermia), porque un fancoil, que apenas tiene inercia, no sirve para esto.

Esto no cancela el debate sobre baterías, que responde a otras necesidades —respaldo, consumo nocturno, perfil de la vivienda— y que tratamos aparte en [si merece la pena una batería solar](/blog/merece-la-pena-una-bateria-solar).

## Cómo se entera la bomba de calor de que sobra sol

Esta es la parte que convierte la idea en una instalación que funciona. Alguien tiene que avisar al equipo, y hay dos vías.

Según el IDAE, el aviso puede llegar *«a través de una señal física (un contacto libre de tensión o una señal con voltaje) o una señal vía bus»*, y advierte de que *«cada fabricante, no obstante, ofrece un protocolo de conexión diferente, aunque estandarizado (contactos libres de tensión, Smartgrid, EEBus, etc.)»*.

Un ejemplo concreto ayuda a ver el nivel de detalle que hay detrás. El [manual de instalación de la Daikin Altherma 4 H W](https://www.daikin.eu/content/dam/document-library/installation-manuals/heat/air-to-water-heat-pump-high-temperature/epbx10a4v/EPBX%28U%2910A4V.EPBX10A9W.EPBX14A4V.EPBX%28U%2914A9W_Installation%20manual_4PES773385-1C_Spanish.pdf) describe dos contactos entrantes que activan cuatro modos de Smart Grid:

- **Funcionamiento libre:** el equipo decide por su cuenta.
- **Apagado forzado:** el equipo se para.
- **Activación recomendada:** hay excedente y conviene consumir.
- **Activación forzada:** el equipo arranca aunque no lo pediría.

El mismo manual documenta además un medidor de impulsos de energía fotovoltaica, que permite modular el consumo en función de la potencia realmente disponible en lugar de trabajar con un simple sí o no.

Y documenta también los límites, que es lo que rara vez se cuenta. Advierte de que el límite de potencia *«es posible que en algunos casos no se tenga en cuenta […] por motivos de fiabilidad (por ejemplo, en el inicio y desescarche de la bomba de calor)»* y de que, si la resistencia de reserva necesita apoyo por protección, entrará *«con una capacidad mínima de 2 kW […] aunque se supere el límite de potencia»*. Traducido: habrá momentos en los que el equipo consuma de la red pese a la lógica solar, y es normal.

Antes de montar una arquitectura de control sofisticada, merece la pena leer la otra recomendación del IDAE: *«evitar sistemas de control excesivamente complejos, por encima de lo necesario y de lo que los usuarios pueden manejar»*. Para el ACS, la propia guía reconoce que el aprovechamiento *«puede ser tan sencillo como con una adecuada programación horaria, un contacto libre de tensión, etc.»*.

## Dimensionar el conjunto: ni más paneles ni más kilovatios

El error más caro de esta combinación es dimensionar cada instalación por su lado y esperar que encajen. El IDAE recoge cuatro recomendaciones de diseño, y las dos primeras van justo en esa dirección:

- *«Evitar el sobredimensionamiento de la instalación fotovoltaica. Analizar los datos de consumo real, picos, tejado, orientación, inclinación, consumos futuros, etc.»*
- *«Evitar el sobredimensionamiento de la bomba de calor, que no solo encarece la instalación, sino que provoca sobredimensionamientos en la instalación eléctrica y potencia contratada»*.
- *«Evitar sistemas de control excesivamente complejos»*, por el coste y la dificultad de manejo.
- *«Mantener el balance económico (coste de la instalación vs. energía auto consumida), ajustando la producción al consumo, lo máximo posible»*.

Y cierra con una frase que contradice el impulso comercial habitual: *«cuanto más ajustado y más pequeño sea el excedente, más rentable resultará la instalación fotovoltaica para el usuario y menor su periodo de amortización»*.

El orden de trabajo que se deriva de esto tiene una trampa conocida. La potencia de la bomba de calor sale de la carga térmica de la vivienda, no del consumo eléctrico; lo explicamos en [cómo calcular la potencia de aerotermia que necesita una vivienda](/blog/como-calcular-potencia-aerotermia-vivienda). El número de paneles sale del consumo eléctrico anual, siguiendo el método de [cuántas placas solares necesita una vivienda](/blog/cuantas-placas-solares-necesita-una-vivienda). Pero si vas a instalar las dos cosas, ese consumo eléctrico **todavía no existe**:

- Dimensionar las placas con las facturas anteriores a la aerotermia deja la instalación corta, porque falta todo el consumo térmico futuro.
- Dimensionar las placas para cubrir el consumo del mes de enero deja una instalación enorme que en verano vierte a la red casi todo lo que produce.

Lo razonable es estimar primero el consumo eléctrico anual **con la aerotermia dentro**, repartido por meses, y dimensionar la fotovoltaica contra esa curva y no contra el pico.

## Qué pasa con la electricidad que no llegas a autoconsumir

Aquí se acaban las buenas noticias, y conviene saberlo antes de firmar. El [Real Decreto 244/2019, que regula las condiciones administrativas, técnicas y económicas del autoconsumo](https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089) establece el mecanismo de compensación simplificada, y lo hace con un tope explícito.

Su artículo 14 dice literalmente: *«En ningún caso, el valor económico de la energía horaria excedentaria podrá ser superior al valor económico de la energía horaria consumida de la red en el periodo de facturación, el cual no podrá ser superior a un mes»*.

De esa frase salen tres consecuencias prácticas:

- **El saldo no puede ser negativo.** Como mucho, el excedente anula el término de energía del mes. Nunca paga el término de potencia, los impuestos ni el alquiler del contador.
- **El saldo no se acumula de un mes a otro.** Lo que sobra en julio no está disponible en enero, que es justo cuando la aerotermia más consume.
- **No existe la factura cero.** Cualquier oferta que la prometa está describiendo algo distinto de lo que permite este mecanismo.

Para acogerse a la compensación, el mismo real decreto exige que la fuente sea renovable, que la potencia total de producción no supere los 100 kW, que haya un único contrato de suministro, que se firme un contrato de compensación y que la instalación no tenga régimen retributivo adicional. Las alternativas de gestión del excedente —y en qué se diferencian de verdad— las comparamos en [compensación de excedentes o batería virtual](/blog/compensacion-excedentes-o-bateria-virtual).

## La potencia contratada y el cuadro eléctrico no los arreglan las placas

Este punto sorprende a mucha gente: instalar fotovoltaica **no reduce la potencia que necesitas tener contratada**. La potencia se contrata para el peor instante, y el peor instante de una vivienda con aerotermia es una madrugada de enero, sin sol, con el compresor y quizá la resistencia de apoyo trabajando a la vez.

La Guía IDAE 025 dedica a esto un apartado propio y distingue dos situaciones de partida:

- Si la vivienda venía de **equipos de combustión** (gas o gasóleo), *«la potencia contratada deberá revisarse y en su caso aumentarse si fuera necesario»*, porque la demanda térmica pasa a ser eléctrica.
- Si venía de **equipos eléctricos de expansión directa y termo eléctrico**, *«generalmente la potencia contratada podría disminuir por la mejor eficiencia de los equipos instalados»*.

En cualquiera de los dos casos, la guía recuerda que para solicitar el cambio de potencia hace falta *«el certificado de la instalación eléctrica emitido por la empresa instaladora»*, y que el sobredimensionamiento del equipo arrastra *«sobrecostes en todos los aspectos, incluido el de contratación eléctrica, conductores, protecciones, etc.»*.

Conviene resolver esto al principio del proyecto. Descubrir a mitad de obra que el cuadro no admite la nueva previsión de cargas cambia el presupuesto y el calendario.

## Qué debe revisar un profesional antes de combinar las dos instalaciones

- **Servicios que va a cubrir la bomba de calor:** calefacción, refrigeración y ACS, o solo alguno. De ello depende cuánta producción solar es aprovechable.
- **Curva de consumo eléctrico prevista con la aerotermia incluida**, mes a mes, no la factura del año pasado.
- **Carga térmica de la vivienda y temperatura de impulsión de diseño**, que fijan la potencia del equipo con independencia de los paneles.
- **Capacidad de acumulación disponible:** volumen y estratificación del depósito de ACS, existencia de depósito de inercia y espacio para ampliarlo.
- **Inercia y aislamiento de la envolvente**, para saber si el sobrecalentamiento ligero es viable o solo va a generar pérdidas.
- **Protocolo de comunicación del equipo y del inversor:** contacto libre de tensión, Smart Grid, bus, medidor de impulsos; y si ambos fabricantes son compatibles.
- **Comportamiento del equipo fuera de la lógica solar:** arranques, desescarches y entrada de la resistencia de apoyo.
- **Cuadro eléctrico, previsión de cargas y potencia contratada**, con el certificado de instalación eléctrica que corresponda.
- **Orientación, inclinación y sombras de la cubierta**, y su efecto sobre el reparto mensual de la producción.
- **Modalidad de autoconsumo y contrato de compensación**, comprobando que se cumplen los requisitos del RD 244/2019.

## Estudiamos la aerotermia y la fotovoltaica como un solo sistema

En Maclima planteamos las dos instalaciones a la vez porque las decisiones se condicionan: la potencia de la bomba de calor mueve la previsión de cargas, el volumen de acumulación decide cuánto excedente es aprovechable y la curva de consumo resultante determina cuántos paneles tienen sentido.

Puedes ver cómo abordamos una [instalación de aerotermia en Madrid](/aerotermia), cómo planteamos el [asesoramiento fotovoltaico](/fotovoltaica) o revisar el [catálogo de soluciones de aerotermia](/catalogo#aerotermia-catalogo) y el [catálogo fotovoltaico](/catalogo#fotovoltaica-catalogo).

Si quieres saber qué parte de tu climatización puede cubrir el sol en tu caso concreto, solicita una [consultoría energética gratuita](/consultoria-gratuita#formulario).

## Conclusión

Aerotermia y placas solares se complementan bien, pero no de forma automática. El multiplicador de la bomba de calor —del orden de 3 a 4 kW térmicos por cada kW eléctrico, según el IDAE— solo se aplica a la energía que se consume mientras los paneles producen, y eso obliga a trabajar el encaje horario, no la cantidad de paneles.

La refrigeración encaja sola. El agua caliente sanitaria encaja con una consigna doble y un depósito bien dimensionado. La calefacción es el caso difícil y solo funciona con inercia y buen aislamiento. Fuera de ahí, la red sigue ahí, la potencia contratada sigue haciendo falta y los excedentes tienen un tope legal que ninguna oferta comercial puede saltarse.

Producir tu propia electricidad no elimina la necesidad de dimensionar bien: la hace más importante, porque ahora un error de dimensionado se paga dos veces.

**¿Estás valorando aerotermia y placas solares para tu vivienda? Contacta con Maclima Soluciones Energéticas y estudiamos las dos instalaciones juntas, sin compromiso.**

## Fuentes técnicas consultadas

- [Guía IDAE 025: La bomba de calor en la rehabilitación energética de edificios — IDAE, septiembre de 2023](https://www.idae.es/sites/default/files/documentos/publicaciones_idae/Guias_IDAE_La_Bomba_de_calor_2023_V11.pdf): combinación con energía solar fotovoltaica y gestión de excedentes (apartado 2.4.1), acumulación térmica en depósitos de ACS, de inercia y en la propia vivienda, consignas dobles y válvula termostática, recomendaciones de diseño frente al sobredimensionamiento, factor de conversión de 3-4 kW térmicos por kW eléctrico fotovoltaico (apartado 2.4.3) y contratación de la potencia eléctrica (apartado 3.5.6). Guía redactada por AFEC para el IDAE.
- [Real Decreto 244/2019, por el que se regulan las condiciones administrativas, técnicas y económicas del autoconsumo de energía eléctrica — BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089): modalidades de autoconsumo con y sin excedentes (artículo 4), requisitos y límite económico del mecanismo de compensación simplificada con periodo de facturación no superior a un mes (artículo 14).
- [PVGIS — Sistema de Información Geográfica Fotovoltaica, Centro Común de Investigación de la Comisión Europea](https://re.jrc.ec.europa.eu/pvg_tools/es/): producción media mensual y anual por kWp para Madrid (40,417 N; −3,704 O), inclinación 35°, azimut sur, montaje sobre cubierta y 14 % de pérdidas de sistema, base de radiación PVGIS-SARAH2 con series de 2005 a 2020.
- [Reglamento (UE) nº 813/2013 sobre requisitos de diseño ecológico de los aparatos de calefacción — DOUE](https://www.boe.es/doue/2013/239/L00136-00161.pdf): obligación de declarar la capacidad calorífica de la bomba de calor a las temperaturas exteriores Tj = −7, +2, +7 y +12 °C.
- [Manual de instalación de la bomba de calor Daikin Altherma 4 H W — Daikin](https://www.daikin.eu/content/dam/document-library/installation-manuals/heat/air-to-water-heat-pump-high-temperature/epbx10a4v/EPBX%28U%2910A4V.EPBX10A9W.EPBX14A4V.EPBX%28U%2914A9W_Installation%20manual_4PES773385-1C_Spanish.pdf): modos de Smart Grid mediante dos contactos entrantes (funcionamiento libre, apagado forzado, activación recomendada y activación forzada), medidor de impulsos de energía fotovoltaica y excepciones al límite de potencia en arranque, desescarche y apoyo de la resistencia de reserva.
