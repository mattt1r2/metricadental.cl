# Métrica Dental

Landing de Clínica Métrica Dental centrada en implantes, con diseño móvil, contacto por WhatsApp y firma SERVIMAT. Conserva las otras prestaciones más abajo. Proyecto estático preparado para GitHub y Cloudflare Pages; sin despliegue definitivo.

## Vista previa

Carpeta de trabajo: `C:\Users\matt\Desktop\Trabajo\Paginas webs\metricadental.cl`.

Desde esa carpeta, ejecutar `python -m http.server 8081 --bind 127.0.0.1 --directory site` y abrir `http://127.0.0.1:8081/`.

## Estructura

- `site/index.html`: contenido completo de la landing.
- `site/styles.css`: diseño responsive.
- `site/script.js`: menú móvil, apertura de procedimientos por enlace y firma flotante accesible.
- `site/privacidad.html`: borrador informativo de privacidad.
- `site/_headers`: cabeceras HTTP para Pages.
- `site/assets/`: logos, video optimizado e imagen de portada.
- `site/assets/fonts/`: Manrope alojada localmente y licencia OFL.
- `docs/BRIEF.md`: decisiones confirmadas y contenido pendiente.
- `docs/PUBLICACION.md`: preparación del despliegue.
- `docs/VALIDACION.md`: comprobaciones y límites de la revisión.

Los textos, enlaces y datos comerciales se editan directamente en HTML. Los colores se encuentran al principio de `styles.css`. No hay dependencias de producción, recopilación de formularios ni servicios de pago.

El video se optimizó a partir del archivo suministrado, manteniendo el original fuera del repositorio. La portada muestra una ilustración original de tratamientos y no al dueño. El antiguo fotograma `clinica.webp` se conserva pero ya no está referenciado. El logo conserva su denominación original, que incluye Talca; la ciudad no se utiliza en el mensaje comercial.

Se utiliza Manrope en pesos 400, 500, 600 y 700, servida desde el propio sitio. Su licencia se conserva en `site/assets/fonts/OFL.txt`. No se realizan peticiones a Google Fonts desde la web.

La firma SERVIMAT usa el logo original suministrado y enlaza a su Instagram. Se oculta cuando el footer aparece, dejando la firma permanente del pie. Para evitar cubrir textos y controles, busca espacio únicamente a la izquierda (abajo o elevada) o se oculta temporalmente. WhatsApp permanece a la derecha. Si está oculta, no admite clics ni foco de teclado. Las transiciones respetan movimiento reducido.

Las secciones utilizan títulos directos sin minitítulos decorativos en mayúsculas. Las cinco fases conservan sus nombres descriptivos como encabezados, sin repetirlos en etiquetas pequeñas.

Los originales `logo-metrica-dental.png` y `logo-servimat.png` que ya existían en la raíz local se conservan intactos y están excluidos de Git; las copias utilizadas por la página viven dentro de `site/assets/`.

La portada presenta implantes, el profesional mencionado por el cliente y el video. Sigue la promoción de instalación JD ($270.000) y corona de zirconio con laboratorio y aditamentos ($300.000), con suma explícita de $570.000. Evaluación, planificación, escáner y controles sin costo según la nueva información aportada. Las cinco fases aparecen antes de los otros ocho servicios. Brackets y limpieza conservan sus condiciones dentro de un bloque desplegable.

Las garantías y condiciones de cuotas están pendientes; la página solo invita a consultar opciones de pago. No se promete mantenimiento gratuito. La sección `#casos` permanece oculta hasta recibir 3 a 5 casos reales autorizados; los comentarios de cada fase indican dónde incorporar fotografías propias. No se muestran marcadores vacíos al paciente.

Se conserva el iframe oficial de Google Maps con carga diferida. `_headers` permite únicamente `https://www.google.com` como origen de frames; la privacidad informa sobre esta conexión externa. El enlace `/#promocion` abre directamente la oferta de implantes y `/#tratamientos` permite consultar el resto de los servicios.

El contenido pendiente (equipo, equipamiento, casos, dirección de acceso y fechas de las promociones) está documentado en el brief. Las fuentes de referencia para la redacción clínica están en `docs/FUENTES-CLINICAS.md`; la clínica debe validar la versión final. La privacidad sigue siendo un borrador hasta confirmar al responsable.

El sitio lleva `noindex` durante su preparación. No eliminarlo hasta completar la revisión descrita en `docs/PUBLICACION.md`.
