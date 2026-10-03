# Publicación y mantenimiento

Publicada el 03/10/2026 en **https://metricadental.cl/**, con autorización del usuario para producción, seguridad y despliegues desde GitHub. El dominio está registrado en NIC Chile y el alojamiento pertenece a la cuenta Cloudflare del cliente, tabraham339@gmail.com. Se usa el plan Free.

## Cloudflare Pages

- Repositorio: mattt1r2/metricadental.cl.
- Proyecto Pages: metricadental-cl. Primer despliegue: ba2811f6, commit 06e35ad.
- Rama de producción: main; versión aprobada del PR #1 ya integrada.
- Framework: ninguno. Comando: exit 0. Directorio de salida: site. Raíz del repositorio sin cambiar.
- Dominio principal: https://metricadental.cl. Ambos dominios (raíz y www) figuran Active / SSL enabled en Pages.
- Los push a main generan despliegues automáticos. Las otras ramas son vistas previas.
- No subir la raíz del repositorio como carpeta pública: contiene documentación y desarrollo.
- CNAME raíz y www apuntan a metricadental-cl.pages.dev, creados desde Custom domains.
- Regla activa WWW a metricadental.cl: https://www.metricadental.cl/* → https://metricadental.cl/${1}, estado 301, conservando parámetros. HTTPS obligatorio también redirige las solicitudes HTTP.

## Seguridad

site/_headers aplica CSP restrictiva, HSTS de un año sin includeSubDomains/preload, protección contra inclusión en iframes, nosniff, política de referencia y permisos restringidos. Scripts, fuentes y medios son locales. Google Maps es el único iframe permitido. No activar inyección de analítica o scripts de terceros sin revisar CSP y privacidad.

HTTPS obligatorio, SSL/TLS Full (strict), TLS mínimo 1.2 y TLS 1.3 activos. Certificado Universal SSL activo y HTTPS público validado sin omitir la comprobación del certificado. Se conservan las protecciones gratuitas de DDoS y el ruleset WAF administrado. DNSSEC no está configurado: necesita publicar el DS exacto en NIC y verificar la cadena.

Producción permite indexación. Los hostnames pages.dev mantienen X-Robots-Tag: noindex, nofollow. robots.txt, sitemap.xml y URL canónicas usan el dominio definitivo. La página 404 devuelve un error real en Pages y ofrece navegación al inicio.

## Mantenimiento

servimat18@gmail.com figura Active en Members tras aceptar la invitación autorizada. Permisos: Domain Administrator limitado a metricadental.cl y Developer Platform Editor para los recursos de la cuenta. No se concedieron facturación ni gestión de miembros; la cuenta del cliente conserva la propiedad.

La aplicación GitHub Cloudflare Workers and Pages fue autorizada para metricadental.cl, conservando el acceso existente a movo-website. El selector de repositorios de Cloudflare muestra ambos; este proyecto utiliza únicamente metricadental.cl. La autorización de la instalación es compartida: no retirar MOVO ni modificarla sin evaluar el otro sitio. No se modificó su proyecto ni su repositorio.

Para publicar cambios: editar, revisar, hacer commit y push a main; comprobar el despliegue en Workers & Pages y la URL pública. Para cambios amplios, revisar una rama preview antes de integrarla. Pages permite volver a un despliegue anterior.

## Contenido y revisión

Se conservan espacios de casos clínicos y fotografías en preparación a petición del usuario. No inventar resultados. La privacidad describe la clínica, contacto confirmado, Maps y alojamiento. Oficina, horarios y materiales nuevos se incorporarán cuando el cliente los confirme.

Validación pública del 03/10/2026: 35 archivos servidos coinciden con el checkout (normalizando LF/CRLF en texto), HTTPS y cabeceras correctos, dominio www redirige conservando ruta y parámetros, y rutas inexistentes responden 404. Los archivos de documentación y Git no están expuestos. En navegador se comprobó el menú móvil, navegación a implantes, selector de cuotas, reproducción del video y mapa visible. Más detalle en VALIDACION.md.

Documentación: https://developers.cloudflare.com/pages/configuration/git-integration/ y https://developers.cloudflare.com/pages/configuration/headers/

## Avance del 01/10/2026

- Versión aprobada integrada a main mediante PR #1 (merge bac09d3), con archivos de producción en site/.
- Validación local: 12 HTML, 484 referencias locales, 10 URL sitemap, sintaxis JavaScript y diff correctos.
- Panel de Cloudflare: Full (strict) guardado, Always Use HTTPS activado, mínimo TLS 1.2, TLS 1.3 activo. Certificado pendiente mientras se activa el dominio. Ruleset administrado mostrado como Always active.
- Alojamiento Git todavía pendiente: el panel de creación exige verificar el correo de la cuenta del cliente.
- Invitación de mantenimiento preparada y autorizada (Domain Administrator limitado a metricadental.cl; Developer Platform Editor). El envío devolvió un error; no se considera completado hasta aparecer en miembros.
- Consultas DNS públicas todavía devolvían NXDOMAIN. No dar el dominio por accesible ni HTTPS por validado hasta comprobar la publicación real.

## Avance del 03/10/2026

- Correo del cliente verificado: Cloudflare permite entrar al flujo de Pages con repositorio Git. La lista de proyectos seguía vacía antes de iniciar la conexión.
- DNS delegado a blair.ns.cloudflare.com y melnicoff.ns.cloudflare.com, confirmado el 02/10/2026.
- Certificado Universal SSL para metricadental.cl y *.metricadental.cl activo, con vencimiento mostrado el 30/12/2026 y certificado de respaldo emitido. HTTPS obligatorio, TLS mínimo 1.2 y TLS 1.3 siguen activos; HTTPS público validado.
- Invitación aceptada por servimat18@gmail.com; estado Active confirmado en Members. Permisos: Domain Administrator para metricadental.cl y Developer Platform Editor para la cuenta.
- Identidad de mattt1r2 verificada y permisos de la aplicación guardados tras confirmación específica del usuario. Proyecto Pages creado desde GitHub, publicado y asociado a ambos dominios; ambos activos con SSL. Se guarda esta documentación en main para comprobar un despliegue automático posterior al inicial.
