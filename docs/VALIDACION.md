# Validación del sitio

## Contraste, imágenes y navegación visual: 29/09/2026

- Sustituidas 170 flechas de texto por SVG inline decorativos en las once páginas. Sin caracteres Unicode de flecha restantes. La plantilla de promociones también usa SVG. No se realizó una prueba en un dispositivo iOS físico.
- Logo aumentado a aproximadamente 173–190 px en móvil y 220 px en escritorio; texto principal de 16 px. Cabecera de escritorio desde 1100 px. Medición de inicio a 360, 390, 430, 768, 900, 1000, 1099, 1100 y 1440 px sin desbordamiento; las nueve páginas de servicios también comprobadas a 390 px. Revisión visual móvil, tablet y escritorio.
- Verde petróleo profundo en presentación y catálogo; lila, arena, terracota y ciruela con más presencia. Corregido el contraste de los textos de casos clínicos sobre el nuevo fondo lila: 7,85:1 para el texto principal. Revisados además los colores de texto de las ofertas y del catálogo.
- Catálogo con nueve fotografías/ilustraciones referenciales y filtros por área. Probados clic y teclado: Todos 9, Rehabilitación 4, Estética y alineación 3, Cuidado dental 2. Conteo anunciado con aria-live. Navegación real desde el catálogo a ortodoncia comprobada.
- Ocho páginas de tratamientos incorporan una imagen reemplazable y conservan debajo los enlaces a sus etapas. Implantes mantiene su material existente. Tres imágenes nuevas y una conversión del implante a WebP: 526.938 bytes en total. Recursos servidos con HTTP 200. No representan pacientes ni instalaciones reales.
- Movimiento breve al entrar contenido, cambiar importes y pasar sobre fotos/flechas. Código condicionado por prefers-reduced-motion; contenido visible sin animaciones. No se simuló el ajuste del sistema operativo. Precio probado de nuevo: 12 cuotas de $47.500 con total $570.000 siempre visible, y regreso a Valor total.
- Menú móvil y Escape comprobados. SERVIMAT sigue fija abajo a la izquierda y se oculta al entrar el footer; WhatsApp a la derecha. Consola sin errores ni avisos durante la revisión.
- Auditoría final: once HTML, 458 enlaces/recursos locales y anclas válidas, IDs únicos, un H1 por página, etiquetas balanceadas, noindex y cabeceras HTTP. Sintaxis JavaScript y git diff --check correctos.
- Imágenes, método de generación y prompts en docs/RECURSOS-VISUALES.md; sustitución por material propio en docs/MEDIOS.md. Captura local: work/visual-refresh-services.png. Continúan pendientes las fotografías reales, casos autorizados y verificación externa del mapa. Sin despliegue definitivo.

## Casos, medios y promoción interactiva: 29/09/2026

- Inicio con tres espacios de casos antes/después identificados como fotografías en preparación; no hay casos ni pacientes inventados. Galería con el video existente y dos espacios para fotos propias. Plantillas en docs/MEDIOS.md.
- Retrato real y seis antecedentes de formación aportados por el usuario en la página de implantes. Desplegable de formación probado con Enter; conserva Universidad de Talca solo como institución del título de cirujano dentista.
- Precio anterior $700.000 confirmado por el usuario como valor previo real de la clínica; actual $570.000 y ahorro $130.000 en ambas páginas. Selector total/cuotas probado con clic y teclado: 12 × $47.500 = $570.000, con total y condiciones siempre presentes. Beneficios de las tres promociones y desglose de implantes comprobados.
- Ilustración genérica, retrato y logo oficial servidos localmente: HTTP 200 y carga visible. Dos servidores de vista previa antiguos atendían el mismo puerto; se sustituyeron por una única instancia con la lista de recursos actualizada, conservando el túnel.
- Sin desbordamiento en inicio a 360, 390, 430, 768, 900, 1000 y 1440 px; implantes a 360, 390, 430, 768, 900 y 1440 px. Revisión visual de promoción móvil, retrato, galería en tablet, casos y promoción en escritorio. En móvil, el valor y sus controles aparecen antes de la ilustración.
- Menú de las once páginas actualizado al orden Inicio → Promociones → Servicios → Casos clínicos → La clínica → Ubicación. Navegación desde implantes a los casos del inicio comprobada: conserva /index.html#casos, sin redirección a la sección antigua. Menú móvil se cierra al navegar.
- Video de la galería reproducido y pausado por teclado: duración 39,8 segundos, readyState 4 y sin error de medios. No tiene reproducción automática ni precarga del archivo completo.
- SERVIMAT conserva su posición inferior izquierda; al entrar el footer se oculta con aria-hidden y al salir reaparece. WhatsApp sigue a la derecha.
- Auditoría de once HTML, 441 enlaces/recursos locales y anclas válidas, IDs únicos, un H1, etiquetas balanceadas, noindex y cabeceras HTTP. JavaScript con sintaxis válida; git diff sin espacios sobrantes. Consola limpia en una carga nueva de la promoción.
- Captura local: work/promocion-sep29.png. Fuentes y prompt de la ilustración documentados en docs/RECURSOS-VISUALES.md.
- Permanecen pendientes las fotografías reales, casos autorizados y la revisión clínica/comercial previa a publicación. Se conserva la limitación de verificación externa del mapa descrita en las revisiones anteriores. Sin despliegue definitivo.

## Presentación, promociones ampliables y menú: 28/09/2026

- Orden del inicio: presentación breve de Métrica Dental, promociones destacadas, servicios, información ampliada de la clínica, preguntas y ubicación/contacto. Se conserva el estilo aprobado de las tres ofertas y el H1 vuelve a presentar la clínica.
- Bloques de promoción reutilizables con variantes destacada, lila y arena. La guía docs/PROMOCIONES.md incluye una plantilla completa. Las ofertas nuevas continúan en filas; los ejemplos de prueba no se incorporaron al sitio.
- Se comprobaron composiciones locales con 1, 2, 4, 5 y 6 ofertas en 390, 768 y 1440 px: sin solapamientos, desbordamiento ni precios recortados. La última oferta sin pareja ocupa la fila completa en los casos de 4 y 6.
- Revisión visual de la portada en 360, 390, 430, 768 y 1440 px; medición adicional en 1000 px. Sin desbordamiento horizontal ni importes recortados.
- Menú consistente en las once páginas: Inicio → Promociones → Servicios → La clínica → Ubicación. Comprobados en móvil el enlace a promociones, el cierre del menú, el cambio a ortodoncia, su servicio actual y el regreso a Inicio.
- Auditoría completa: once HTML, 421 enlaces/recursos locales, anclas existentes, IDs únicos, un H1, etiquetas balanceadas, noindex y cabeceras HTTP. Se conservan los precios y condiciones, las páginas de servicios y el comportamiento de SERVIMAT.

## Promociones como portada: 28/09/2026

- Las tres promociones abren el inicio, con precios destacados, desglose de implante y corona, 12 cuotas y control mensual de brackets separado. La presentación general y los nueve servicios aparecen después.
- Composición revisada visualmente en 360, 390, 430, 768 y 1440 px. Medición adicional en 1000 px; sin desbordamiento horizontal ni precios recortados en los seis tamaños.
- Enlaces reales desde las tres ofertas hacia la sección de promoción de implantes, ortodoncia y limpieza, y regreso a Inicio comprobados en móvil.
- Auditoría de once HTML y 421 enlaces/recursos locales: anclas existentes, IDs únicos, un H1, HTML balanceado, noindex y cabeceras HTTP conservados. Consola sin avisos ni errores y diff sin espacios sobrantes.
- Sin cambios en el comportamiento del menú, la firma SERVIMAT, el mapa ni las páginas de tratamientos. No se añadieron dependencias ni recursos externos. Captura de escritorio guardada en work/home-promotions.png para revisión local.

## Inicio y menú de servicios: 28/09/2026

- Cabecera común en las once páginas, incluida privacidad, con Inicio y nueve enlaces de servicios. Inicio permanece visible en móvil y tablet; servicio actual marcado con aria-current.
- Navegación real en móvil desde implantes a endodoncia usando el menú y regreso al inicio desde la cabecera. En escritorio, cambio a carillas y resaltado del servicio actual verificados.
- Escape cierra primero Servicios y devuelve el foco al summary; el siguiente Escape cierra Menú y devuelve el foco al botón. Clic exterior cierra el desplegable de escritorio.
- Revisados 360, 390, 430, 768 y 1440 px; sin desbordamiento horizontal, tampoco en el cambio de diseño a 900 px. Panel móvil con desplazamiento para acceder a todos los enlaces.
- Auditoría local actualizada: 422 enlaces/recursos y anclas válidos en once HTML; cabeceras y noindex conservados. JavaScript sin errores de sintaxis.

## Conversión a sitio multipágina: 28/09/2026

- Inicio general de la clínica y nueve páginas de tratamientos; privacidad completa once HTML. Todos respondieron HTTP 200 desde el servidor de vista previa reiniciado, con CSP y noindex.
- Auditoría de 298 enlaces/recursos locales: archivos y anclas existentes, IDs únicos, un H1 por página, HTML balanceado e imágenes con atributo alt. JavaScript sin errores de sintaxis y diff sin espacios sobrantes.
- Navegación real desde el catálogo a ortodoncia; menú móvil hacia promociones del inicio y desde ahí a implantes. Los otros ocho tratamientos cargaron con su H1, cuatro etapas y WhatsApp contextual. El enlace anterior /#promocion redirige a implantes.html#promocion.
- Revisión visual en 360 y 390 px (inicio), 390 px (ortodoncia e implantes), 430 px (promoción de brackets), 768 px (cuotas y garantía) y 1440 px (inicio). Sin desbordamiento horizontal en esos tamaños ni en las ocho páginas de servicios revisadas a 390 px.
- SERVIMAT conserva la posición fija inferior izquierda; en el footer de implantes se oculta con aria-hidden y permanece el crédito del pie. Al volver al inicio reaparece.
- Bloque de 12 cuotas sin interés con texto HTML y Compraquí de BancoEstado; garantía de implante y corona junto a su condición de asistencia a controles incluidos. Datos aportados por el usuario el 28/09/2026, sin extenderlos a todos los tratamientos ni a todas las tarjetas.
- La portada no usa retrato del dueño. El video permanece en implantes; fotografías de instalaciones y casos siguen pendientes. El mapa mantiene la limitación de verificación externa documentada abajo. Sin despliegue definitivo.

## Ajuste de títulos y firma fija: 27/09/2026

- Eliminados 17 minitítulos de la landing y uno de privacidad, junto con etiquetas decorativas redundantes del video y las tarjetas. Los títulos de sección y de las cinco fases son directos y descriptivos.
- SERVIMAT permanece fija abajo a la izquierda. Se eliminó la lógica anterior que la elevaba u ocultaba al coincidir con contenido; WhatsApp conserva la derecha.
- Comprobación en 360, 390, 430, 768 y 1440 px, sin desbordamiento horizontal: firma visible a 13 px del borde inferior y 15 px del izquierdo en móvil (23 px en tablet/escritorio).
- A 390 px se verificó la misma posición en promoción y fases; al llegar al footer se oculta con `aria-hidden=true` y `tabindex=-1`, mientras permanece la firma del pie. Al volver a la promoción reaparece en la misma esquina y recupera el acceso por teclado.
- Sin errores de sintaxis JavaScript ni espacios sobrantes en el diff.

## Revisión del 27/09/2026: foco en implantes

- Una sola página principal, según la aclaración del usuario: implantes primero y otros ocho servicios más abajo. No se creó una landing separada.
- Portada con marca de la clínica, nombre del profesional aportado, video local con controles y sin reproducción automática. No se añadió un retrato.
- Promoción nueva: implante JD $270.000; corona de zirconio con laboratorio y aditamentos $300.000; suma $570.000. Evaluación, planificación, escáner y controles sin costo, conforme al mensaje del cliente. No se prometen cobertura universal, plazos exactos ni procedimientos adicionales incluidos.
- Cinco fases visibles, catálogo de ocho servicios y procedimientos conservados. Brackets y limpieza mantienen valores y prestaciones en un bloque desplegable.
- Casos clínicos ocultos hasta recibir fotografías y autorizaciones. Sin promesas de garantía de por vida, cuotas sin interés o mantenimiento gratuito; el usuario los dejó pendientes.
- Revisión visual en 360, 390 y 430 px, tablet 768 px y escritorio 1366 px; sin desbordamiento horizontal en esos tamaños. Precios y beneficios legibles, portada/video, fases y promociones secundarias comprobados.
- Enlace de ortodoncia abre y enfoca su explicación. Desplegable de otras promociones comprobado. Cinco fases y ocho procedimientos presentes.
- Verificación estática con Python estándar: etiquetas HTML balanceadas, recursos y anclas locales existentes, IDs únicos, WhatsApp correcto, sin formularios, noindex en las dos páginas. Consola de la vista previa sin errores ni avisos registrados durante la revisión.
- Mapa y video originales conservados. No se da por resuelta la limitación de visualización del mapa descrita en la revisión anterior.

## Revisión anterior: 26/09/2026

Fecha: 26 de septiembre de 2026. Vista previa local: http://127.0.0.1:8081/.

## Contenido y navegación

- La portada y el poster del video ya no usan el retrato. Se conserva el video original como explicación complementaria, que sólo reproduce al interactuar.
- Nueve servicios enlazan a información dentro de la página: implantes, ortodoncia, restauraciones, endodoncia, terceros molares, coronas, carillas, limpieza y blanqueamiento.
- Implantes incluye cinco etapas; los otros ocho procedimientos tienen cuatro etapas cada uno. Los enlaces a desplegables abren el contenido y enfocan su resumen; también funciona la llegada directa con fragmento de URL.
- Promociones transcritas de los datos e imágenes confirmados por el usuario: brackets $79.990, 10 cupos mensuales, control mensual separado $33.000, y limpieza + flúor $19.990. Se muestran todas las prestaciones confirmadas, sin inventar plazo final ni cupos restantes.
- Los carteles originales se pueden desplegar con teclado. No se publica la campaña antigua de implantes.
- Menú móvil, Escape, foco visible, preguntas frecuentes, regreso al inicio y privacidad comprobados.
- Revisión estática de enlaces locales, anclas, IDs y WhatsApp: sin recursos faltantes, IDs repetidos ni formularios. Los siete enlaces WhatsApp de la landing usan 56949354494; los nueve servicios no abandonan la web.
- JavaScript sin errores de sintaxis. No se modifica el archivo de video previamente probado; conserva controles, playsinline y preload=none.

## Diseño y firma

Revisión visual móvil en 360 y 390 px: portada sin retrato, prestaciones y precios legibles, procedimientos desplegados, sin desbordamiento horizontal. También se revisaron 430 px (guía de implantes), tablet de 768 px (contacto) y escritorio de 1366 px. Se corrigió la altura de la ilustración para evitar espacios vacíos en móvil.

Se conserva SERVIMAT con ocultación al entrar el footer, sin foco ni clics mientras está oculta. Se añadió el iframe del mapa a los obstáculos para evitar cubrir sus controles. En móvil, el botón flotante de WhatsApp se reduce a un icono con área táctil de 48 × 48 px y nombre accesible, para ocupar menos espacio. Menú, promociones y procedimientos usan superficies táctiles amplias y foco visible; los movimientos respetan prefers-reduced-motion.

## Google Maps: inserción correcta, verificación visual pendiente

Se obtuvo el iframe desde Compartir > Incorporar un mapa en la ficha exacta del Edificio Plaza Talca suministrada por el usuario. El código utiliza loading=lazy, título accesible, dimensiones adaptables y el origen Google permitido en la CSP.

En el navegador integrado de Codex el iframe permaneció en blanco, tanto con carga diferida como inmediata. La variante de consulta por ubicación tampoco resolvió la visualización, por lo que se conserva el código oficial. Una consulta HTTP de diagnóstico con contexto de iframe recibió 200 y el documento de Google que inicializa el mapa del edificio, sin mensaje de error; esto no sustituye una comprobación visual en otro navegador. El enlace externo al mismo edificio sí funciona.

Antes de publicar, comprobar el mapa en Chrome/Edge/Safari y en el despliegue Cloudflare. No se da por validada su representación visual. La privacidad ya explica la conexión a Google y sus posibles cookies.

## Pendientes

- Revisión clínica de los textos orientativos y autorización final del material audiovisual.
- Confirmar oficina, horarios y dirección de acceso: el usuario indicó 1 Sur 690; la ficha del edificio dice Calle 1 Pte. 690.
- Confirmar fechas y condiciones adicionales de promociones, responsable de privacidad y dominio.
- Validar en teléfonos reales. Las comprobaciones responsive se realizan con viewport del navegador integrado.
- Verificar HTTPS y cabeceras después del despliegue: el servidor Python local no aplica _headers. Noindex permanece activo.

Sin despliegue en Cloudflare ni integración a main.
