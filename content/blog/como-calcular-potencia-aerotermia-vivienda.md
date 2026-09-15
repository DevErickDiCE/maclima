---
id: "como-calcular-potencia-aerotermia-vivienda"
title: "Cómo calcular la potencia de aerotermia que necesita una vivienda"
seoTitle: "Potencia de aerotermia: cómo calcular los kW"
slug: "como-calcular-potencia-aerotermia-vivienda"
description: "La potencia de aerotermia de una vivienda sale de su carga térmica, la temperatura exterior de proyecto y el ACS, no de los metros cuadrados."
date: "2026-09-15"
updated_at: "2026-09-15"
category: "Aerotermia"
cluster: "Aerotermia"
keyword_principal: "potencia aerotermia vivienda"
intencion: "informacional"
zona: "España"
pagina_pilar: "/aerotermia"
status: "publicado"
image: "/blog/como-calcular-potencia-aerotermia-vivienda.webp"
imageAlt: "Vivienda con bomba de calor aerotérmica y símbolos de pérdidas de calor, termómetro exterior y agua caliente"
---

La potencia de aerotermia que necesita una vivienda **no se calcula por metros cuadrados**: se calcula a partir de su carga térmica en el día de diseño, sumando después lo que exija el agua caliente sanitaria y comprobando qué potencia entrega realmente el equipo a esa temperatura exterior.

El orden importa. Primero se fijan las condiciones de cálculo, luego se calculan las pérdidas de calor de la vivienda, después se decide cómo se resuelve el ACS y, por último, se busca un equipo cuya capacidad declarada cubra esa demanda en el punto más exigente **y** sepa bajar cuando la demanda es pequeña.

Este artículo explica el método y qué datos hace falta reunir. No incluye una calculadora: cualquier cifra obtenida sin los datos reales del inmueble es una estimación de partida, no un dimensionado.

## Qué significa exactamente “potencia” en una bomba de calor

Significa una capacidad medida en unas condiciones concretas, no un número fijo. Una bomba de calor aire-agua no entrega los mismos kilovatios en octubre que en enero, porque toma el calor del aire exterior.

El [Reglamento (UE) nº 813/2013 sobre diseño ecológico de aparatos de calefacción](https://www.boe.es/doue/2013/239/L00136-00161.pdf) obliga al fabricante a declarar la **capacidad calorífica declarada (Pdh)** a varias temperaturas exteriores: Tj = −7 °C, +2 °C, +7 °C y +12 °C, con temperatura interior de 20 °C. También define la **carga de diseño para calefacción (Pdesignh)**, que equivale a la potencia calorífica nominal (Prated) del equipo, y dos temperaturas clave:

- **Temperatura bivalente (Tbiv):** la temperatura exterior por debajo de la cual la capacidad declarada ya no cubre la carga y hace falta capacidad complementaria.
- **Temperatura límite de funcionamiento (TOL):** la temperatura exterior por debajo de la cual la capacidad declarada es cero.

Hay un detalle que cambia la lectura de cualquier catálogo: ese mismo reglamento define las **“condiciones climáticas medias”** como *las condiciones de temperatura características en la ciudad de Estrasburgo*, y fija para ellas una temperatura de diseño de referencia de −10 °C. Es decir, el kW nominal de la ficha describe un clima de referencia europeo, no el de la vivienda concreta. Por eso conviene mirar la tabla de capacidades a cada Tj, no la cifra que da nombre al modelo.

## Por qué los vatios por metro cuadrado solo sirven como comprobación

Sirven para detectar un disparate, no para dimensionar. Dos viviendas de 150 m² pueden necesitar potencias muy distintas según su aislamiento, su compacidad, sus ventanas, su orientación y su clima.

Daikin, en su guía sobre [el tamaño adecuado del equipo de aerotermia](https://www.daikin.es/es_es/hogar/inspiracion/articulos/tamano-adecuado-equipo-aerotermia.html), sitúa la mayoría de las viviendas entre **4 kW y 16 kW**. Es un rango amplio y deliberadamente amplio: describe dónde suele caer el resultado, no cómo se obtiene.

Una regla por superficie ignora justo lo que más pesa en el cálculo: cuánto calor se escapa por la envolvente y cuánto por la ventilación. Una vivienda rehabilitada y una de los años setenta con la misma planta pueden separarse por un factor de dos o tres. Úsala, como mucho, para preguntar por qué un presupuesto se aleja tanto del orden de magnitud esperado.

## Paso 1: fijar las condiciones de cálculo

Antes de calcular nada hay que decidir qué temperatura se quiere dentro y qué temperatura se supone fuera. Las dos están normalizadas.

Para el interior, el [Reglamento de Instalaciones Térmicas en los Edificios (RITE)](https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820) establece en su apartado IT 1.1.4.1.2 una temperatura operativa de invierno de 21 a 23 °C con humedad relativa del 40 al 50 %, y añade una instrucción explícita: *“Para el dimensionamiento de los sistemas de calefacción, se empleará una temperatura de cálculo de las condiciones interiores de 21 ºC”*.

Para el exterior, el apartado IT 1.2.4.1.1 del mismo reglamento indica que las cargas térmicas máximas de invierno se calculan con la temperatura seca correspondiente a un **percentil del 99 % (TS 99 %)**, y reserva el percentil 99,6 % para usos especiales como hospitales o museos.

Esa temperatura se consulta por estación meteorológica en la [Guía técnica de condiciones climáticas exteriores de proyecto del IDAE](https://www.idae.es/uploads/documentos/documentos_12_Guia_tecnica_condiciones_climaticas_exteriores_de_proyecto_e4e5b769.pdf), publicada en junio de 2010 con series de temperatura seca del periodo 1998-2007. Tres ejemplos de la Comunidad de Madrid ilustran por qué no vale una cifra única para “Madrid”:

- **Madrid-Barajas (582 m):** TS 99 % de −2,4 °C y mínima registrada de −10,5 °C.
- **Colmenar Viejo, FAMET (1.004 m):** TS 99 % de −1,0 °C y mínima de −9,8 °C.
- **Navacerrada, Puerto (1.890 m):** TS 99 % de −8,2 °C y mínima de −17,5 °C.

Conviene fijarse en Colmenar Viejo: está 400 metros por encima de Barajas y, sin embargo, su temperatura de proyecto es algo menos exigente. La altitud orienta, pero no sustituye a consultar la estación que corresponde. Y la diferencia entre −1 °C y −8 °C no es un matiz: cambia la carga de la vivienda y cambia la potencia que el equipo puede entregar ese día.

## Paso 2: calcular la carga térmica de la vivienda

La carga térmica es la potencia que hay que aportar de forma continua para mantener los 21 °C interiores cuando fuera se está a la temperatura de proyecto. Se expresa en kW y es el número que manda en todo el dimensionado.

Se compone, en esencia, de dos bloques:

- **Pérdidas por transmisión:** el calor que atraviesa muros, cubierta, suelo, ventanas y puentes térmicos. Depende de la superficie de cada elemento, de su transmitancia y del salto de temperatura.
- **Pérdidas por ventilación e infiltración:** el calor que se va con el aire que se renueva, por ventilación higiénica o por la permeabilidad de la envolvente.

El cálculo se hace **estancia por estancia**, no de forma global. Dos motivos: el emisor de cada habitación debe cubrir su propia pérdida, y el reparto por estancias es lo que permite después equilibrar la instalación. Un total correcto con un reparto equivocado da habitaciones frías y otras sobrecalentadas.

Para hacerlo bien hacen falta datos que casi nunca están en un formulario web: composición real de los cerramientos, superficie y tipo de acristalamiento por orientación, año de construcción y reformas, alturas, existencia de locales no calefactados debajo o al lado, y caudal de ventilación previsto. Por eso una calculadora que solo pregunta metros cuadrados y número de dormitorios no puede darte un resultado fiable, por mucho que devuelva un número con un decimal.

El RITE tampoco lo deja al criterio de cada uno: en el apartado IT 1.2.4.1.1 exige que *“la potencia que suministren las unidades de producción de calor o frío se ajustará a la demanda máxima simultánea de las instalaciones servidas”*, contando además las pérdidas de las redes de tuberías y el equivalente térmico de la potencia de las bombas.

## Paso 3: decidir cómo entra el agua caliente sanitaria

El ACS casi nunca se suma directamente a la carga de calefacción, porque no se demanda a la vez ni de la misma forma. Lo que sí hay que hacer es cuantificarlo y decidir cómo se resuelve.

La demanda de referencia está fijada en el Anejo F del [Documento Básico DB-HE del Código Técnico de la Edificación](https://www.codigotecnico.org/pdf/Documentos/HE/DBHE.pdf): **28 litros por día y persona a 60 °C** en uso residencial privado, con una ocupación mínima de cálculo según el número de dormitorios. El propio Anejo fija esa ocupación en 1,5 personas para una vivienda de un dormitorio, 3 para dos dormitorios, 4 para tres, 5 para cuatro y 6 para cinco. A esa demanda hay que sumarle las pérdidas por distribución, acumulación y recirculación.

Una vivienda de tres dormitorios queda así en 4 personas × 28 l/día = 112 litros diarios a 60 °C antes de pérdidas. Ese volumen se puede cubrir de dos maneras muy distintas:

- **Con acumulación suficiente**, preparando el agua en las horas que interesan. El depósito desacopla la demanda punta de la potencia del equipo y evita tener que sobredimensionar la máquina por una ducha.
- **Con poca o ninguna acumulación**, lo que traslada la punta al generador y empuja hacia arriba la potencia necesaria.

La decisión afecta al espacio disponible, al confort en horas punta y al coste. Lo que no debe hacerse es elegir una potencia mayor “por si acaso” para cubrir el ACS sin haber estudiado antes el volumen de acumulación.

## Paso 4: comprobar que el equipo da esa potencia el día más frío

Aquí es donde se decide si el modelo elegido sirve. La comparación correcta no es “carga térmica frente a kW nominales”, sino **carga térmica a la temperatura de proyecto frente a capacidad declarada (Pdh) a esa misma temperatura**.

Con los valores del reglamento europeo, la secuencia de comprobación es:

- Localizar en la ficha del fabricante la Pdh a la Tj más próxima a la temperatura de proyecto de la vivienda, y a la temperatura de agua que va a usar la instalación.
- Comprobar dónde queda la **temperatura bivalente** del equipo. Si está por encima de la temperatura de proyecto, habrá horas en las que el sistema necesite apoyo complementario.
- Comprobar la **temperatura límite de funcionamiento**. En el clima medio de referencia el reglamento la sitúa en −7 °C como máximo, pero cada modelo declara la suya.
- Decidir qué se hace con las horas por debajo del punto bivalente: resistencia de apoyo, caldera existente en configuración híbrida o aceptar una pequeña caída de temperatura interior en los días extremos.

En una vivienda de la Sierra de Madrid este paso deja de ser teórico. Con una temperatura de proyecto cercana a −8 °C, un equipo cuya capacidad se desploma a partir de −5 °C obligará a que el apoyo eléctrico trabaje justo los días de mayor consumo, que es exactamente lo que encarece la factura.

## Paso 5: mirar también la potencia mínima

Un equipo demasiado grande da problemas distintos de los de uno pequeño, y son problemas reales. La mayor parte del invierno la vivienda no pide la carga de diseño: la pide a −2 °C o a −8 °C, unas pocas horas al año.

Daikin lo describe sin rodeos en la guía ya citada: un equipo sobredimensionado *“se enciende y apaga con demasiada frecuencia, lo que desgasta los componentes prematuramente, es ineficiente, reduce la capacidad del sistema para deshumidificar y puede causar problemas de ruido”*. Y al revés, uno insuficiente *“tiene dificultades para satisfacer la demanda durante las olas de frío, lo que genera altos costes de funcionamiento”*.

El RITE apunta en la misma dirección cuando explica el sentido del cálculo: la finalidad de ajustar bien las condiciones exteriores es *“mejorar la eficiencia energética de los generadores, ajustar la potencia a la demanda térmica real y reducir la potencia de diseño en proyecto”*. Y exige estudiar las distintas demandas variando la hora del día y el mes del año para hallar, además de la máxima simultánea, *“las demandas parciales y la mínima”*.

Traducido a la práctica: pregunta al instalador por la **potencia mínima modulante** del equipo, no solo por la máxima. Un inversor con un rango de modulación amplio tolera mucho mejor una vivienda bien aislada que un equipo que solo sabe funcionar a plena carga.

## La temperatura del agua también cambia el resultado

La misma máquina entrega menos potencia y con peor rendimiento cuanto más caliente tiene que producir el agua. Por eso el dimensionado en kW y la elección del sistema de emisión son el mismo problema, no dos.

Una instalación pensada para trabajar a baja temperatura permite un equipo más ajustado; una que deba impulsar agua caliente para radiadores existentes puede necesitar más potencia o un modelo preparado para temperaturas de impulsión altas. Lo hemos desarrollado en los artículos sobre [aerotermia con radiadores](/blog/aerotermia-con-radiadores) y sobre [suelo radiante o fancoils con aerotermia](/blog/suelo-radiante-o-fancoils-con-aerotermia).

Si vas a comparar presupuestos, comprueba que todos calculan la potencia para la **misma temperatura de impulsión**. Dos propuestas con kW distintos pueden estar describiendo la misma vivienda con emisores diferentes.

## Qué datos debe reunir un profesional para calcular la potencia

- Ubicación exacta y altitud, para tomar la temperatura de proyecto correcta.
- Superficie útil, altura libre y distribución por estancias.
- Composición de fachada, cubierta y suelo, con el año de construcción y las reformas realizadas.
- Superficie, tipo y orientación de los acristalamientos.
- Locales colindantes no calefactados y su efecto sobre las pérdidas.
- Ventilación prevista y estado de la permeabilidad al aire.
- Emisores existentes o previstos, y temperatura de impulsión de diseño.
- Número de dormitorios y ocupación real, para el ACS, y volumen de acumulación posible.
- Servicios que debe cubrir el sistema: calefacción, refrigeración y agua caliente.
- Capacidad disponible en el cuadro eléctrico y potencia contratada.

Con estos datos el resultado deja de ser una estimación y pasa a ser un cálculo verificable. Sin ellos, cualquier cifra es un punto de partida.

## Errores habituales al elegir la potencia de aerotermia

- **Dimensionar por metros cuadrados.** Ignora aislamiento, ventanas, orientación y clima, que es donde está casi toda la diferencia.
- **Comparar la carga térmica con los kW nominales.** La cifra que hay que comparar es la capacidad declarada a la temperatura de proyecto.
- **Usar la potencia de la caldera antigua.** Las calderas se han sobredimensionado históricamente; copiar ese número arrastra el error.
- **Olvidar la temperatura de impulsión.** Un mismo equipo no rinde igual para suelo radiante que para radiadores a alta temperatura.
- **Sumar el ACS a la calefacción sin más.** Antes hay que decidir la acumulación y estudiar la simultaneidad.
- **Redondear siempre hacia arriba.** El sobredimensionado provoca ciclos cortos, desgaste y peor rendimiento estacional.
- **No mirar el punto bivalente.** Si cae por encima de la temperatura de proyecto, el apoyo eléctrico entrará los días más caros del año.
- **Dar por buena una calculadora online.** Puede servir para orientarse; no sustituye al cálculo de cargas ni a la visita técnica.

## Calculamos la potencia que necesita tu vivienda

En Maclima trabajamos el dimensionado antes de proponer equipo. Calculamos la carga térmica con las condiciones de proyecto de tu ubicación, revisamos los emisores y la temperatura de impulsión, definimos cómo se resuelve el ACS y contrastamos la capacidad declarada del modelo a esa temperatura exterior.

Puedes ver cómo planteamos una [instalación de aerotermia en Madrid](/aerotermia), consultar el [catálogo de soluciones de aerotermia](/catalogo#aerotermia-catalogo) o entender qué partidas debe detallar un [presupuesto de aerotermia](/blog/precio-aerotermia-madrid-2026) antes de comparar cifras.

Si quieres convertir los datos de tu vivienda en una potencia justificada, solicita una [consultoría de aerotermia gratuita](/consultoria-gratuita?tipo=Aerotermia#formulario).

## Conclusión

La potencia de aerotermia de una vivienda es el resultado de un cálculo, no una elección de catálogo. Se fijan las condiciones interiores y exteriores de proyecto, se calcula la carga térmica estancia por estancia, se decide cómo entra el agua caliente sanitaria y se comprueba que el equipo entrega esa potencia a la temperatura exterior real del emplazamiento.

Los dos extremos cuestan dinero. Quedarse corto obliga al apoyo eléctrico en los días fríos; pasarse provoca ciclos cortos, desgaste y peor rendimiento. El objetivo no es el equipo más grande, sino el que mejor se ajusta a la demanda real durante todo el invierno.

**¿Quieres saber qué potencia de aerotermia necesita tu vivienda? Contacta con Maclima Soluciones Energéticas y te asesoramos sin compromiso.**

## Fuentes técnicas consultadas

- [Reglamento de Instalaciones Térmicas en los Edificios, texto consolidado — BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820): condiciones interiores de diseño y temperatura de cálculo para calefacción (IT 1.1.4.1.2, tabla 1.4.1.1) y criterios generales de generación de calor y frío, percentil TS 99 % y estudio de demandas parciales y mínima (IT 1.2.4.1.1).
- [Guía técnica de condiciones climáticas exteriores de proyecto — IDAE](https://www.idae.es/uploads/documentos/documentos_12_Guia_tecnica_condiciones_climaticas_exteriores_de_proyecto_e4e5b769.pdf): temperaturas secas de proyecto TS 99 % y TS 99,6 % por estación meteorológica, edición de junio de 2010 con series de 1998-2007.
- [Reglamento (UE) nº 813/2013 sobre requisitos de diseño ecológico de los aparatos de calefacción — DOUE](https://www.boe.es/doue/2013/239/L00136-00161.pdf): definiciones de carga de diseño para calefacción (Pdesignh), temperatura bivalente y temperatura límite de funcionamiento, capacidades declaradas a Tj = −7, +2, +7 y +12 °C y condiciones climáticas medias de referencia.
- [Documento Básico DB-HE Ahorro de energía, Anejo F — Código Técnico de la Edificación](https://www.codigotecnico.org/pdf/Documentos/HE/DBHE.pdf): demanda de referencia de ACS de 28 litros/día·persona a 60 °C y valores mínimos de ocupación de cálculo en uso residencial privado.
- [Selección del tamaño adecuado del equipo de aerotermia — Daikin](https://www.daikin.es/es_es/hogar/inspiracion/articulos/tamano-adecuado-equipo-aerotermia.html): rango habitual de potencia en vivienda y consecuencias de sobredimensionar o infradimensionar el equipo.
