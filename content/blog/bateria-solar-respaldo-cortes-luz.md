---
id: "bateria-solar-respaldo-cortes-luz"
title: "Batería solar para cortes de luz: qué necesita un sistema de respaldo"
seoTitle: "Batería solar para cortes de luz: qué necesita"
slug: "bateria-solar-respaldo-cortes-luz"
description: "Una batería solar no da luz en un apagón por sí sola: hace falta un inversor con salida de respaldo, un cuadro de cargas críticas y separarse de la red."
date: "2026-11-10"
updated_at: "2026-11-10"
category: "BESS"
cluster: "BESS"
keyword_principal: "batería solar para cortes de luz"
intencion: "comercial"
zona: "España"
pagina_pilar: "/fotovoltaica"
status: "publicado"
image: "/blog/merece-la-pena-una-bateria-solar.webp"
imageAlt: "Inversor blanco y batería modular gris montados en una pared interior, unidos por cables, con una vivienda con placas solares en el tejado al fondo"
---

**Una batería solar solo mantiene la luz durante un corte si forma parte de un sistema preparado para ello: un inversor con salida de respaldo, capaz de separarse de la red y formar su propia red eléctrica, un circuito con las cargas que se quieren mantener y las protecciones y la puesta a tierra que exige ese modo de funcionamiento.** Sin esas piezas, cuando se va la luz la instalación se apaga aunque la batería esté llena y haga sol.

No es un fallo del equipo. Es una obligación: toda instalación de autoconsumo conectada a la red debe dejar de alimentarla cuando la red cae. Lo que distingue a un sistema de respaldo es que, al desconectarse, sigue alimentando una parte de la vivienda sin devolver tensión a la calle.

En esta guía explicamos por qué la mayoría de las instalaciones solares se apagan en un corte, qué componentes necesita un sistema de respaldo, qué cargas tiene sentido mantener y cómo saber si una batería que ya tienes está preparada para ello. Si todavía estás decidiendo si te compensa una batería, empieza por [¿merece la pena instalar una batería solar?](/blog/merece-la-pena-una-bateria-solar), donde lo analizamos desde el ahorro y el autoconsumo.

## Por qué las placas se apagan en un corte aunque haya sol

**Porque la normativa obliga a que se desconecten.** El [apartado 4.3 de la ITC-BT-40 del Reglamento Electrotécnico para Baja Tensión](https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099) establece que todas las instalaciones de generación interconectadas a la red de distribución en baja tensión deben disponer de dispositivos que, entre otras cosas, impidan «el funcionamiento en isla de dicha red de distribución». Y precisa que estas prescripciones se aplican a todas las instalaciones de autoconsumo interconectadas, sea cual sea su potencia.

Funcionar en isla significa seguir dando tensión a un tramo de red que se ha quedado sin suministro. Es peligroso para quien trabaja en la línea y para los vecinos, por eso el inversor vigila la red de forma continua. El [artículo 14 del Real Decreto 1699/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-19242#a14) exige un interruptor automático para la «desconexión-conexión automática de la instalación en caso de anomalía de tensión o frecuencia de la red», y permite que esa función la cumpla el propio inversor si incorpora las protecciones.

En la práctica, los inversores lo traen de serie. La [ficha técnica del inversor híbrido Deye SUN-12K-SG02LP1-EU-AM3](https://www.deyeinverter.com/deyeinverter/2026/09/14/BDatasheetSUN-76-12K-SG02LP1-EU-AM220260911en.pdf), que está en nuestro catálogo, incluye entre sus protecciones integradas la «Anti-islanding Protection». Cuando la red cae, el inversor deja de inyectar. Si la vivienda no tiene una salida de respaldo, también deja de recibir.

## Qué hace distinto a un sistema de respaldo

**Un sistema de respaldo no incumple la protección antiisla: primero se separa de la red y después alimenta solo la instalación propia.** El [artículo 12.1 del Real Decreto 1699/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-19242#a12) lo admite expresamente: los esquemas de conexión deben posibilitar «el trabajo en isla, sobre sus propios consumos, nunca alimentando a otros usuarios de la red».

Para hacerlo de forma segura, el sistema tiene que resolver tres cosas en el momento del corte:

- **Abrir la conexión con la red** antes de alimentar nada, para que no pueda volver tensión a la acometida.
- **Generar su propia tensión y frecuencia** a partir de la batería, porque ya no hay red a la que seguir.
- **Rehacer la referencia de tierra.** El [apartado 8.2.3 de la ITC-BT-40](https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099) exige que, cuando la instalación receptora se alimente de forma exclusiva desde la generación, un polo auxiliar del interruptor de interconexión desconecte el neutro de la red y conecte a tierra el neutro de la generación.

Ese último punto es el que más se pasa por alto. El [manual del Deye SUN-5/12K-SG02LP1-EU-AM3](https://www.deyeinverter.com/deyeinverter/2026/05/19/BManualSUN-5-12K-SG02LP1-EU-AM320260519en.pdf) indica que, en modo de respaldo, el neutro y la tierra de la salida de cargas se unen mediante un relé, externo o integrado según la versión de hardware, y advierte de que, si la puesta a tierra del respaldo no está bien hecha, la función de respaldo puede no funcionar con normalidad cuando falla la red.

Una instalación de este tipo sigue siendo de autoconsumo conectada a la red, no una instalación aislada. Las [preguntas frecuentes del MITECO sobre autoconsumo](https://www.miteco.gob.es/es/energia/energia-electrica/electricidad/autoconsumo-electrico/preguntas-frecuentes-autoconsumo.html) recuerdan, citando el Real Decreto 244/2019, que las instalaciones desconectadas de la red mediante dispositivos interruptores o equivalentes no se consideran aisladas. Se tramita y se legaliza como cualquier otro autoconsumo.

## Qué necesita un sistema de respaldo con batería solar

### Un inversor con salida de respaldo

**Es la pieza que decide si hay luz en un corte.** No todos los inversores, ni siquiera todos los híbridos, tienen una salida de respaldo, y los que la tienen pueden llamarla de distintas formas: backup, EPS, UPS o load. Hay que comprobarlo en la ficha técnica y en el manual del modelo concreto, no en el folleto.

En el Deye SUN-12K, por ejemplo, el manual describe tres bornas de conexión diferenciadas, marcadas como Grid, Load y GEN. Los circuitos conectados a la salida Load son los que se mantienen en un corte. Los que siguen colgando del lado de la red (el manual los llama «On-Grid Home Load») se quedan sin suministro como el resto de la vivienda. El manual también exige un interruptor automático separado entre el inversor y la red y otro entre el inversor y las cargas de respaldo.

El tiempo de conmutación también varía según el equipo y su configuración. En ese modelo, el parámetro «Backup Delay» fija cuánto tarda el inversor en dar salida tras el corte; el manual pone como ejemplo 3 ms y advierte de que algunas versiones antiguas de firmware no tienen la función. Si en la vivienda hay equipos que no toleran ni un parpadeo, como algunos ordenadores o equipos médicos, ese dato hay que pedirlo por escrito.

### Una batería compatible y bien comunicada

La batería tiene que estar admitida por el fabricante del inversor y comunicarse con él. El manual de Deye remite a su lista de baterías aprobadas para configurar el protocolo de comunicación del sistema de gestión de la batería (BMS) y prevé que, si esa comunicación falla con la opción BMS_Err_Stop activada, el inversor se detenga y avise de la avería. Una batería «que encaja» pero no se comunica puede dejar el respaldo fuera de servicio justo cuando hace falta.

La [Guía Profesional de Tramitación del Autoconsumo del IDAE](https://www.idae.es/sites/default/files/documentos/publicaciones_idae/20240709_Guia_Profesional_Tramitacion_autoconsumo_v.6.pdf) recoge en su anexo C que las baterías pueden compartir el inversor de la generación o tener uno independiente. Las dos arquitecturas pueden dar respaldo, pero cada una lo resuelve de manera distinta y conviene saber cuál se está comprando.

### Un cuadro de cargas críticas

Lo habitual es separar en un cuadro propio los circuitos que se quieren mantener y conectarlo a la salida de respaldo. El resto de la vivienda sigue alimentada por la red en condiciones normales y se apaga en un corte. Esto obliga a decidir antes de instalar qué circuitos van a cada lado, y a menudo a reorganizar el cuadro existente.

### Placas que puedan seguir cargando durante el corte

Que el sistema tenga batería no significa que las placas sigan produciendo durante el corte. Depende de dónde estén conectadas:

- Si las placas entran por el propio inversor híbrido, pueden seguir cargando la batería y alimentando las cargas de respaldo mientras haya sol, dentro de los límites del equipo.
- Si las placas tienen su propio inversor de red, ese inversor se desconecta en el corte por la protección antiisla. Solo puede seguir produciendo si está acoplado a la salida del híbrido y el fabricante lo admite. El manual de Deye describe esa conexión en el lado de cargas y cómo el híbrido sube la frecuencia para desconectar el inversor de red cuando la batería se llena, pero aclara que algunas versiones de firmware no tienen la función.

Este punto es decisivo en cortes largos: sin recarga solar, el respaldo dura lo que dure la batería.

## Qué cargas puede mantener una batería en un apagón

**Hay dos límites distintos: la potencia que entrega el inversor en cada momento y la energía que guarda la batería.** Confundirlos es la causa más común de decepción.

### La potencia: qué puede funcionar a la vez

La salida de respaldo tiene una potencia máxima continua y un margen corto para picos. La ficha del Deye SUN-12K indica 12.000 W de potencia activa nominal y, en modo aislado, un pico de dos veces la potencia nominal durante 10 segundos. Los equipos con motor o compresor, como frigoríficos, bombas o compresores de climatización, piden mucha más corriente al arrancar que en marcha. El manual de Deye recoge que, en modo aislado, arrancar con una carga grande puede provocar un fallo por sobrecorriente y recomienda reducir la potencia conectada.

Por eso el cuadro de respaldo no se diseña sumando potencias nominales, sino revisando qué arranca y qué funciona a la vez.

### La energía: cuánto tiempo dura

La autonomía sale de dividir la energía útil de la batería entre el consumo medio de las cargas conectadas. Como cálculo orientativo: una batería con 5 kWh útiles alimentando cargas que consumen 500 W de media se vaciaría en unas 10 horas como máximo, y en la práctica antes, por las pérdidas de la conversión y por la reserva que deja el sistema.

Esa reserva existe y se configura. En el Deye, el parámetro «Shutdown» fija el estado de carga al que, en modo aislado, el inversor deja de alimentar las cargas; el manual muestra como ejemplo un 10 % y, en otra configuración, un 20 %. Ese porcentaje no está disponible durante el corte.

### Qué se suele incluir y qué no

Los circuitos que suelen tener sentido en un cuadro de respaldo doméstico son los de bajo consumo y alta necesidad: iluminación básica, frigorífico y congelador, router y comunicaciones, la electrónica y la bomba de circulación de la calefacción, alarmas, portones o una bomba de pozo si la vivienda depende de ella.

Los grandes consumos, como el horno, la placa de inducción, el termo eléctrico, la recarga del coche o una bomba de calor, suelen quedarse fuera o estudiarse aparte, porque agotan la batería en poco tiempo o superan la potencia de la salida. Si la vivienda tiene aerotermia y la calefacción es la prioridad en un corte de invierno, hay que dimensionarlo de forma específica; no se resuelve añadiendo la bomba de calor al cuadro de respaldo sin hacer números.

## Cómo saber si tu batería ya tiene respaldo

**Si ya tienes batería, la forma de saberlo es comprobar la instalación, no provocar un corte.** Revisa con tu instalador o con la documentación del proyecto:

- el modelo exacto del inversor y si su ficha técnica incluye salida de respaldo (backup, EPS, UPS o load);
- si esa salida está conectada a algún circuito o se dejó sin usar;
- qué circuitos cuelgan de ella y si hay un cuadro de cargas críticas identificado;
- cómo se ha resuelto la unión de neutro y tierra en modo aislado;
- qué reserva mínima de batería está configurada para el modo aislado;
- si las placas pueden seguir cargando la batería durante el corte;
- si el respaldo se probó en la puesta en marcha y con qué resultado.

Muchas instalaciones tienen un inversor con salida de respaldo que nunca se cableó porque el objetivo inicial era solo el ahorro. Activarla suele requerir obra en el cuadro eléctrico, y esa obra debe hacerla un instalador habilitado: no manipules el cuadro ni el inversor para probarlo.

## Qué debe revisar un profesional

Un proyecto de respaldo con batería debería dejar por escrito, como mínimo:

- **El objetivo.** Qué cargas se quieren mantener, durante cuánto tiempo y en qué época del año.
- **La salida de respaldo del inversor.** Potencia continua, pico admisible y su duración, tiempo de conmutación y versión de firmware necesaria.
- **La compatibilidad de la batería.** Que el modelo figure entre los admitidos por el fabricante del inversor y la configuración de comunicación.
- **El cuadro de cargas críticas.** Qué circuitos van a la salida de respaldo, con sus protecciones, y cómo se reorganiza el cuadro existente.
- **La separación de la red y la puesta a tierra en modo aislado.** Conforme a la [ITC-BT-40](https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099) y al manual del fabricante.
- **La recarga durante el corte.** Si las placas siguen produciendo en modo aislado y con qué arquitectura.
- **La reserva de batería y la autonomía estimada.** Calculada con las cargas reales, no con una cifra genérica.
- **La tramitación.** El [artículo 5.7 del Real Decreto 244/2019](https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089#a5) permite el almacenamiento en autoconsumo si dispone de las protecciones que exige la normativa de seguridad industrial aplicable; la instalación se legaliza como el resto del autoconsumo.
- **La prueba de funcionamiento.** Un ensayo controlado en la puesta en marcha que demuestre que la salida de respaldo funciona.

Si el respaldo es para un negocio con procesos que no pueden pararse, el análisis cambia de escala: lo tratamos en [BESS para empresas](/blog/bess-para-empresas).

## Cómo encaja con una instalación fotovoltaica

Lo más sencillo es decidir el respaldo a la vez que la [instalación fotovoltaica](/fotovoltaica), porque condiciona la elección del inversor, la batería y el diseño del cuadro. Añadirlo después es posible en muchos casos, pero a veces obliga a cambiar el inversor. En el [catálogo de soluciones fotovoltaicas](/catalogo#fotovoltaica-catalogo) puedes consultar las familias de inversores híbridos y baterías con las que trabajamos.

## Conclusión

Una batería solar no da luz en un corte por sí sola. Lo hace un sistema completo: un inversor con salida de respaldo que se separa de la red, una batería compatible, un cuadro de cargas críticas, la puesta a tierra correcta para el modo aislado y, si se quiere aguantar cortes largos, placas que puedan seguir cargando. Lo que mantiene encendido y durante cuánto tiempo se decide con la potencia de la salida, la energía útil de la batería y las cargas reales de la vivienda.

**¿Quieres saber si tu instalación puede darte respaldo en un corte o qué haría falta para conseguirlo? Solicita una [consultoría fotovoltaica gratuita](/consultoria-gratuita?tipo=Fotovoltaica#formulario) y revisamos el inversor, la batería y el cuadro antes de recomendar ningún cambio.**
