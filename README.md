# Métrica Dental

Landing de Clínica Métrica Dental con diseño móvil, contacto por WhatsApp y firma SERVIMAT. Proyecto estático preparado para GitHub y Cloudflare Pages; todavía no publicado.

## Vista previa

Carpeta de trabajo: `C:\Users\matt\Desktop\Trabajo\Paginas webs\metricadental.cl`.

Desde esa carpeta, ejecutar `python -m http.server 8081 --bind 127.0.0.1 --directory site` y abrir `http://127.0.0.1:8081/`.

## Estructura

- `site/index.html`: contenido completo de la landing.
- `site/styles.css`: diseño responsive.
- `site/script.js`: menú móvil y firma flotante accesible.
- `site/privacidad.html`: borrador informativo de privacidad.
- `site/_headers`: cabeceras HTTP para Pages.
- `site/assets/`: logos, video optimizado e imagen de portada.
- `site/assets/fonts/`: Manrope alojada localmente y licencia OFL.
- `docs/BRIEF.md`: decisiones confirmadas y contenido pendiente.
- `docs/PUBLICACION.md`: preparación del despliegue.
- `docs/VALIDACION.md`: comprobaciones y límites de la revisión.

Los textos, enlaces y datos comerciales se editan directamente en HTML. Los colores se encuentran al principio de `styles.css`. No hay dependencias de producción, recopilación de formularios ni servicios de pago.

El video se optimizó a partir del archivo suministrado, manteniendo el original fuera del repositorio. La imagen de portada procede del mismo video. El logo conserva su denominación original, que incluye Talca; la ciudad no se utiliza en el mensaje comercial.

Se utiliza Manrope en pesos 400, 500, 600 y 700, servida desde el propio sitio. Su licencia se conserva en `site/assets/fonts/OFL.txt`. No se realizan peticiones a Google Fonts desde la web.

La firma SERVIMAT usa el logo original suministrado y enlaza a su Instagram. Se oculta cuando el footer aparece, dejando la firma permanente del pie. Para evitar cubrir textos y controles, busca un espacio libre en las esquinas inferiores o se oculta temporalmente. Si está oculta, no admite clics ni foco de teclado. Las transiciones respetan movimiento reducido.

Los originales `logo-metrica-dental.png` y `logo-servimat.png` que ya existían en la raíz local se conservan intactos y están excluidos de Git; las copias utilizadas por la página viven dentro de `site/assets/`.

El contenido pendiente (equipo, equipamiento, casos y promociones verificadas) está documentado en el brief; no hay fichas ficticias ni precios antiguos presentados como actuales. La privacidad sigue siendo un borrador hasta confirmar al responsable.

El sitio lleva `noindex` durante su preparación. No eliminarlo hasta completar la revisión descrita en `docs/PUBLICACION.md`.
