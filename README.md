# Métrica Dental

Web de Clínica Métrica Dental con inicio general y nueve páginas independientes de tratamientos. Diseño móvil, contacto por WhatsApp y firma SERVIMAT. Publicada en **https://metricadental.cl/** desde el 03/10/2026 mediante Cloudflare Pages, proyecto `metricadental-cl`.

Los cambios enviados a `main` en `mattt1r2/metricadental.cl` generan un despliegue automático. Cloudflare publica únicamente `site/` (framework None, comando `exit 0`). `www.metricadental.cl` redirige al dominio principal con HTTPS. Configuración, acceso de mantenimiento y comprobaciones en `docs/PUBLICACION.md`.

## Vista previa

Carpeta de trabajo: `C:\Users\matt\Desktop\Trabajo\Paginas webs\metricadental.cl`.

Desde esa carpeta, ejecutar `python -m http.server 8081 --bind 127.0.0.1 --directory site` y abrir `http://127.0.0.1:8081/`.

## Estructura

- `site/index.html`: presentación breve, promociones interactivas y ampliables, la clínica con video de tecnología, catálogo, casos clínicos preparados para completar, preguntas, video de ubicación, mapa y contacto.
- `site/implantes.html`: retrato y currículum del doctor, video, promoción ilustrada con precio anterior y ahorro, selector de cuotas, garantía, cinco fases y preguntas.
- `site/ortodoncia.html` y `site/limpieza-dental.html`: información de cada tratamiento y sus promociones completas.
- `site/restauraciones.html`, `site/endodoncia.html`, `site/terceros-molares.html`, `site/coronas.html`, `site/carillas.html` y `site/blanqueamiento.html`: explicación, etapas y preguntas específicas.
- `site/styles.css`: diseño responsive.
- `site/script.js`: menú móvil, cierre accesible del desplegable de servicios, selector de precio total/cuotas, filtros del catálogo y apariciones suaves con movimiento reducido, compatibilidad con enlaces de la antigua landing y firma flotante accesible.
- `site/privacidad.html`: información de privacidad y servicios externos.
- `site/_headers`: cabeceras HTTP para Pages.
- `site/assets/`: logos, iconos del sitio, imágenes y video anterior de implantes.
- `site/assets/videos/`: siete videos nuevos optimizados y sus portadas WebP, distribuidos entre el inicio y los tratamientos. Originales conservados en `material/`, fuera de Git.
- `site/assets/fonts/`: Manrope alojada localmente y licencia OFL.
- `docs/BRIEF.md`: decisiones confirmadas y contenido pendiente.
- `docs/PUBLICACION.md`: configuración del despliegue y mantenimiento.
- `docs/VALIDACION.md`: comprobaciones y límites de la revisión.
- `docs/PROMOCIONES.md`: plantilla e instrucciones para agregar, reordenar o retirar ofertas.
- `docs/MEDIOS.md`: plantillas para incorporar casos reales, fotos y videos en los espacios preparados.
- `docs/RECURSOS-VISUALES.md`: procedencia del retrato y logo JDentalCare, método y prompt de la ilustración genérica.

Los textos, enlaces y datos comerciales se editan directamente en HTML. Cada archivo está completo; mantener coherentes la navegación, el pie y la firma en todas las páginas. Los colores se encuentran al principio de `styles.css`. No hay dependencias de producción, recopilación de formularios ni pagos en línea.

Antes de subir cambios en `styles.css` o `script.js`, ejecutar `python scripts/version-assets.py`: actualiza sus versiones en los enlaces HTML para evitar recursos antiguos en la caché del navegador. Utiliza únicamente la biblioteca estándar de Python; no es una dependencia del sitio publicado.

Actualización del 05/10/2026: los enlaces del inicio apuntan a sus fragmentos locales y no recargan index.html. El ajuste inicial a Inicio ocurre una sola vez; no se repite al terminar de cargar el mapa. Las entradas desde otra página a una sección se posicionan directamente, activando el desplazamiento suave después de cargar. Videos ampliados desde 900 px, tamaños móviles conservados; Restauraciones presenta solo al doctor. El favicon usa el logo completo sobre transparencia, con una nueva URL para renovar la caché.

Todas las páginas mantienen el orden Inicio → Promociones → La clínica → Servicios → Casos clínicos → Ubicación, siguiendo las secciones del inicio. El desplegable Servicios contiene los nueve tratamientos y el enlace al catálogo completo. En móvil, Inicio queda visible junto a Menú; el panel se abre sobre el contenido y se puede desplazar si no cabe. La navegación de escritorio aparece a partir de 1100 px para dar espacio al logo ampliado. El tratamiento actual se marca con `aria-current="page"`; en el inicio se usa `aria-current="location"` siguiendo la sección que llega bajo la cabecera. El indicador cambia solo de color y subrayado, sin recuadro ni cambios de tamaño. Una entrada directa sin ancla, incluida una recarga desde abajo, vuelve inmediatamente a Inicio. Escape cierra primero Servicios y devuelve el foco a su control; un segundo Escape cierra el menú móvil. Los enlaces funcionan sin JavaScript.

La presentación inicial utiliza la identidad de la clínica sin retrato del dueño. Los videos reales se reproducen automáticamente al entrar en pantalla y empiezan silenciados, tanto en producción como en la vista previa. Un botón SVG permite activar sonido; los controles nativos permiten pausar, buscar y ampliar. Al salir de pantalla o cambiar de pestaña se pausan y vuelven a silenciarse. Solo se reproduce uno a la vez. Se respeta la pausa del visitante y prefers-reduced-motion. Conservan su proporción natural en bloques compactos, sin pies repetidos ni franjas laterales. La página de implantes conserva además el video anterior con poster ilustrado. El antiguo fotograma `clinica.webp` se conserva sin referencias. El logo conserva su denominación original, que incluye Talca; la ciudad no se utiliza en el mensaje comercial. El favicon y el icono de Apple muestran el logo completo original de la clínica, recortando únicamente el margen transparente.

Se utiliza Manrope en pesos 400, 500, 600 y 700, servida desde el propio sitio. Su licencia se conserva en `site/assets/fonts/OFL.txt`. No se realizan peticiones a Google Fonts desde la web.

La firma SERVIMAT usa el logo original suministrado y enlaza a su Instagram. Permanece fija y visible en la esquina inferior izquierda durante todo el recorrido, sin elevarse ni ocultarse por coincidir con contenido. Solo se oculta cuando aparece el footer, dejando la firma permanente del pie; al salir del footer reaparece en la misma esquina. WhatsApp permanece a la derecha. Si está oculta, no admite clics ni foco de teclado. Las transiciones respetan movimiento reducido.

Las secciones utilizan títulos directos sin minitítulos decorativos en mayúsculas. Las cinco fases conservan sus nombres descriptivos como encabezados, sin repetirlos en etiquetas pequeñas.

Los originales `logo-metrica-dental.png` y `logo-servimat.png` que ya existían en la raíz local se conservan intactos y están excluidos de Git; las copias utilizadas por la página viven dentro de `site/assets/`.

La página de implantes centraliza al profesional mencionado por el cliente, el video, la promoción de instalación JD ($270.000) y corona de zirconio con laboratorio y aditamentos ($300.000), con suma de $570.000. Evaluación, planificación, escáner y controles sin costo según los datos aportados. El 29/09/2026 se confirmó que el precio anterior real de la clínica era $700.000 para ese mismo tratamiento: se muestra tachado junto al precio actual y al ahorro de $130.000. Un selector permite alternar entre $570.000 y 12 cuotas de $47.500 sin interés, manteniendo el total y las condiciones visibles. La ilustración genérica y el logo JDentalCare se sirven localmente. El currículum y retrato aportados se presentan junto al nombre del profesional. Brackets y limpieza conservan sus condiciones en sus propias páginas; el inicio enlaza a las tres promociones.

El 28/09/2026 el usuario confirmó garantía de por vida para implante y corona condicionada a asistir a controles incluidos, y 12 cuotas sin interés con tarjeta de crédito mediante Compraquí de BancoEstado. La condición aparece junto a la garantía; no se promete otro mantenimiento gratuito ni se asume compatibilidad con todas las tarjetas. El 29/09/2026 el usuario pidió mostrar en el inicio tres espacios de casos clínicos para completar posteriormente, identificados como fotografías en preparación. La galería añade el video existente y dos espacios para fotos propias. Los comentarios de cada fase indican dónde incorporar fotografías; la guía `docs/MEDIOS.md` incluye plantillas. No hay carga pública de archivos ni casos inventados.

Se conserva el iframe oficial de Google Maps con carga diferida en el inicio. `_headers` permite únicamente `https://www.google.com` como origen de frames; la privacidad informa sobre esta conexión externa. Los enlaces antiguos como `/#promocion` redirigen a su página correspondiente; los nuevos apuntan directamente al HTML. Para anuncios de implantes, usar `implantes.html`.

El servidor temporal de revisión aplica las cabeceras de seguridad y limita los archivos servidos. Al añadir archivos nuevos, reiniciarlo para actualizar su lista permitida. No requiere cambios para editar archivos ya existentes.

El contenido pendiente (equipo, equipamiento, casos, dirección de acceso y fechas de las promociones) está documentado en el brief. Las fuentes de referencia para la redacción clínica están en `docs/FUENTES-CLINICAS.md`; la clínica debe validar la versión final. La privacidad sigue siendo un borrador hasta confirmar al responsable.

El sitio de producción permite indexación, con URL canónicas y sitemap en `metricadental.cl`. Los dominios de vista previa `pages.dev` conservan la cabecera `noindex, nofollow`; privacidad y 404 también mantienen su exclusión de indexación.


La revisión visual del 29/09/2026 utiliza SVG para todas las flechas, amplía el logo y los textos y refuerza los bloques verde petróleo, lila, arena y ciruela. El catálogo incorpora fotografías referenciales y filtros por área, con contador anunciado y botones utilizables por teclado. Las ocho páginas de servicio distintas de implantes conservan medios sustituibles y una única explicación detallada de sus etapas. La información permanece disponible sin JavaScript. Las apariciones, el cambio de importes y el hover son breves y respetan prefers-reduced-motion; no hay animación decorativa continua; los videos visibles tienen reproducción silenciada. Imágenes y reemplazos documentados en docs/MEDIOS.md.
