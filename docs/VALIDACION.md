# Validación de servicios, promociones y ubicación

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
