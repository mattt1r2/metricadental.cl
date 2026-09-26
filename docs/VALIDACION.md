# Validación de la revisión visual

Fecha: 26 de septiembre de 2026. Servidor local del directorio `site/`, en `http://127.0.0.1:8081/`.

## Comprobado

- Revisión visual a 360, 390 y 430 px, tablet de 768 px y escritorio de 1366 px. Portada, encuadre, botones y navegación adaptados; sin desbordamiento horizontal en las medidas comprobadas.
- Menú móvil mediante teclado: Enter abre, Escape cierra y devuelve el foco al botón. Foco visible en enlaces y controles. Preguntas frecuentes con Enter, expansión y cierre correctos.
- Página de privacidad accesible desde el footer, con regreso a la landing y sin desbordamiento a 390 px.
- Firma SERVIMAT pequeña y sin panel. En el footer se oculta la flotante: `aria-hidden`, `inert`, `tabindex=-1`, visibilidad oculta y sin capturar clics. Fuera del footer reaparece cuando hay espacio sin texto o controles; puede cambiar de esquina o desaparecer temporalmente para evitar superposición. Crédito permanente dentro del footer.
- Video de 39,8 segundos: reproducción y pausa verificadas en el navegador integrado; sin reproducción automática y con `preload=none`. Estado inicial sin cargar el video. Se observó un cierre aislado de la pestaña al operar un control nativo; al repetir en una pestaña nueva, reprodujo y pausó correctamente, sin errores registrados en la página.
- Logos y fuentes locales cargados. No se incorpora Google Fonts remoto, mapa incrustado, feed de Instagram ni analítica.
- Revisión estática de las dos páginas: 40 enlaces, sin recursos locales faltantes, anclas internas inexistentes, IDs duplicados, formularios ni código en atributos. Todos los enlaces WhatsApp apuntan a `56949354494`; los enlaces que abren pestaña incluyen `noopener noreferrer`.
- `node --check site/script.js` y `git diff --check` correctos.
- Contrastes calculados para los colores principales: texto/fondo 11,79:1; texto secundario/fondo 5,64:1; secundario/lila 4,61:1; secundario/arena 4,73:1; blanco/botón petróleo 7,41:1. Se añadió foco claro sobre las secciones oscuras. Esto no constituye una auditoría completa de accesibilidad.
- Se conserva `noindex` en ambas páginas y en `_headers`. No hay precios, horarios, números de oficina o profesionales sin confirmar en la web.

## Pendiente de publicación y contenido

- Probar en teléfonos reales, especialmente Safari iOS y reproducción de video. Las dimensiones anteriores se verificaron mediante viewport del navegador integrado.
- Validar el material audiovisual y el texto con la clínica. Sustituir el fotograma de portada por una fotografía original de mayor calidad.
- Completar los pendientes de `BRIEF.md`, incluidos responsable de privacidad y vigencia de campañas.
- Las cabeceras preparadas en `_headers` requieren verificación después del despliegue en Cloudflare: el servidor local de Python no las aplica. HTTPS, certificado, DNS y dominio tampoco se validan con esta vista previa.
- Completar canonical, imagen social, URL pública, sitemap y retirada de noindex únicamente al aprobar y publicar el dominio definitivo.

No se ha desplegado en Cloudflare ni integrado esta rama a `main`.
