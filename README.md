# Métrica Dental

Web de Clínica Métrica Dental con inicio general y nueve páginas independientes de tratamientos. Diseño móvil, contacto por WhatsApp y firma SERVIMAT. Proyecto estático preparado para GitHub y Cloudflare Pages; sin despliegue definitivo.

## Vista previa

Carpeta de trabajo: `C:\Users\matt\Desktop\Trabajo\Paginas webs\metricadental.cl`.

Desde esa carpeta, ejecutar `python -m http.server 8081 --bind 127.0.0.1 --directory site` y abrir `http://127.0.0.1:8081/`.

## Estructura

- `site/index.html`: presentación breve, promociones interactivas y ampliables, catálogo, casos clínicos preparados para completar, galería, preguntas, mapa y contacto.
- `site/implantes.html`: retrato y currículum del doctor, video, promoción ilustrada con precio anterior y ahorro, selector de cuotas, garantía, cinco fases y preguntas.
- `site/ortodoncia.html` y `site/limpieza-dental.html`: información de cada tratamiento y sus promociones completas.
- `site/restauraciones.html`, `site/endodoncia.html`, `site/terceros-molares.html`, `site/coronas.html`, `site/carillas.html` y `site/blanqueamiento.html`: explicación, etapas y preguntas específicas.
- `site/styles.css`: diseño responsive.
- `site/script.js`: menú móvil, cierre accesible del desplegable de servicios, selector de precio total/cuotas, compatibilidad con enlaces de la antigua landing y firma flotante accesible.
- `site/privacidad.html`: borrador informativo de privacidad.
- `site/_headers`: cabeceras HTTP para Pages.
- `site/assets/`: logos, video optimizado e imagen de portada.
- `site/assets/fonts/`: Manrope alojada localmente y licencia OFL.
- `docs/BRIEF.md`: decisiones confirmadas y contenido pendiente.
- `docs/PUBLICACION.md`: preparación del despliegue.
- `docs/VALIDACION.md`: comprobaciones y límites de la revisión.
- `docs/PROMOCIONES.md`: plantilla e instrucciones para agregar, reordenar o retirar ofertas.
- `docs/MEDIOS.md`: plantillas para incorporar casos reales, fotos y videos en los espacios preparados.
- `docs/RECURSOS-VISUALES.md`: procedencia del retrato y logo JDentalCare, método y prompt de la ilustración genérica.

Los textos, enlaces y datos comerciales se editan directamente en HTML. Cada archivo está completo; mantener coherentes la navegación, el pie y la firma en todas las páginas. Los colores se encuentran al principio de `styles.css`. No hay dependencias de producción, recopilación de formularios ni pagos en línea.

Todas las páginas mantienen el orden Inicio → Promociones → Servicios → Casos clínicos → La clínica → Ubicación, siguiendo las secciones del inicio. El desplegable Servicios contiene los nueve tratamientos y el enlace al catálogo completo. En móvil, Inicio queda visible junto a Menú; el panel se puede desplazar si no cabe. El tratamiento actual se marca con `aria-current="page"`. Escape cierra primero Servicios y devuelve el foco a su control; un segundo Escape cierra el menú móvil. Los enlaces funcionan sin JavaScript.

El video se optimizó a partir del archivo suministrado, manteniendo el original fuera del repositorio. La portada utiliza la identidad de la clínica sin retrato del dueño. El video con poster ilustrado está en la página de implantes y en la galería del inicio. El antiguo fotograma `clinica.webp` se conserva sin referencias. El logo conserva su denominación original, que incluye Talca; la ciudad no se utiliza en el mensaje comercial.

Se utiliza Manrope en pesos 400, 500, 600 y 700, servida desde el propio sitio. Su licencia se conserva en `site/assets/fonts/OFL.txt`. No se realizan peticiones a Google Fonts desde la web.

La firma SERVIMAT usa el logo original suministrado y enlaza a su Instagram. Permanece fija y visible en la esquina inferior izquierda durante todo el recorrido, sin elevarse ni ocultarse por coincidir con contenido. Solo se oculta cuando aparece el footer, dejando la firma permanente del pie; al salir del footer reaparece en la misma esquina. WhatsApp permanece a la derecha. Si está oculta, no admite clics ni foco de teclado. Las transiciones respetan movimiento reducido.

Las secciones utilizan títulos directos sin minitítulos decorativos en mayúsculas. Las cinco fases conservan sus nombres descriptivos como encabezados, sin repetirlos en etiquetas pequeñas.

Los originales `logo-metrica-dental.png` y `logo-servimat.png` que ya existían en la raíz local se conservan intactos y están excluidos de Git; las copias utilizadas por la página viven dentro de `site/assets/`.

La página de implantes centraliza al profesional mencionado por el cliente, el video, la promoción de instalación JD ($270.000) y corona de zirconio con laboratorio y aditamentos ($300.000), con suma de $570.000. Evaluación, planificación, escáner y controles sin costo según los datos aportados. El 29/09/2026 se confirmó que el precio anterior real de la clínica era $700.000 para ese mismo tratamiento: se muestra tachado junto al precio actual y al ahorro de $130.000. Un selector permite alternar entre $570.000 y 12 cuotas de $47.500 sin interés, manteniendo el total y las condiciones visibles. La ilustración genérica y el logo JDentalCare se sirven localmente. El currículum y retrato aportados se presentan junto al nombre del profesional. Brackets y limpieza conservan sus condiciones en sus propias páginas; el inicio enlaza a las tres promociones.

El 28/09/2026 el usuario confirmó garantía de por vida para implante y corona condicionada a asistir a controles incluidos, y 12 cuotas sin interés con tarjeta de crédito mediante Compraquí de BancoEstado. La condición aparece junto a la garantía; no se promete otro mantenimiento gratuito ni se asume compatibilidad con todas las tarjetas. El 29/09/2026 el usuario pidió mostrar en el inicio tres espacios de casos clínicos para completar posteriormente, identificados como fotografías en preparación. La galería añade el video existente y dos espacios para fotos propias. Los comentarios de cada fase indican dónde incorporar fotografías; la guía `docs/MEDIOS.md` incluye plantillas. No hay carga pública de archivos ni casos inventados.

Se conserva el iframe oficial de Google Maps con carga diferida en el inicio. `_headers` permite únicamente `https://www.google.com` como origen de frames; la privacidad informa sobre esta conexión externa. Los enlaces antiguos como `/#promocion` redirigen a su página correspondiente; los nuevos apuntan directamente al HTML. Para anuncios de implantes, usar `implantes.html`.

El servidor temporal de revisión aplica las cabeceras de seguridad y limita los archivos servidos. Al añadir archivos nuevos, reiniciarlo para actualizar su lista permitida. No requiere cambios para editar archivos ya existentes.

El contenido pendiente (equipo, equipamiento, casos, dirección de acceso y fechas de las promociones) está documentado en el brief. Las fuentes de referencia para la redacción clínica están en `docs/FUENTES-CLINICAS.md`; la clínica debe validar la versión final. La privacidad sigue siendo un borrador hasta confirmar al responsable.

El sitio lleva `noindex` durante su preparación. No eliminarlo hasta completar la revisión descrita en `docs/PUBLICACION.md`.
