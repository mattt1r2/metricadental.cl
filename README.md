# Métrica Dental

Primera versión de la landing. Proyecto estático preparado para GitHub y Cloudflare Pages; todavía no publicado.

## Vista previa

Desde la raíz del repositorio, ejecutar `python -m http.server 8080 --directory site` y abrir `http://localhost:8080`.

## Estructura

- `site/index.html`: contenido completo de la landing.
- `site/styles.css`: diseño responsive.
- `site/script.js`: menú móvil.
- `site/privacidad.html`: borrador informativo de privacidad.
- `site/_headers`: cabeceras HTTP para Pages.
- `site/assets/`: logo y video optimizado con imagen de portada.
- `docs/BRIEF.md`: decisiones confirmadas y contenido pendiente.
- `docs/PUBLICACION.md`: preparación del despliegue.

Los textos, enlaces y datos comerciales se editan directamente en HTML. Los colores se encuentran al principio de `styles.css`. No hay dependencias de producción, recopilación de formularios ni servicios de pago.

El video se optimizó a partir del archivo suministrado, manteniendo el original fuera del repositorio. La imagen de portada procede del mismo video. El logo conserva su denominación original, que incluye Talca; la ciudad no se utiliza en el mensaje comercial.

Se utilizan fuentes del sistema en esta primera versión para evitar peticiones externas. La tipografía de marca queda pendiente de selección definitiva.

El sitio lleva `noindex` durante su preparación. No eliminarlo hasta completar la revisión descrita en `docs/PUBLICACION.md`.
