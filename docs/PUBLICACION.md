# Publicación y mantenimiento

El 01/10/2026 el usuario autorizó publicar la web, aplicar seguridad y conectar GitHub para despliegues automáticos. Confirmó la compra de metricadental.cl en NIC Chile con la cuenta del cliente. Cloudflare tiene la zona creada en el plan Free; la activación DNS y el hosting aún deben verificarse en el panel.

## Cloudflare Pages

- Repositorio: mattt1r2/metricadental.cl.
- Rama de producción: main, después de integrar la versión aprobada del PR #1.
- Framework: ninguno. Comando: exit 0. Directorio de salida: site. Raíz del repositorio sin cambiar.
- Dominio principal: https://metricadental.cl. Añadir www.metricadental.cl y redirigirlo al principal.
- Los push a main deben generar un despliegue. Las otras ramas son vistas previas.
- No subir la raíz del repositorio como carpeta pública: contiene documentación y desarrollo.

## Seguridad

site/_headers aplica CSP restrictiva, HSTS de un año sin includeSubDomains/preload, protección contra inclusión en iframes, nosniff, política de referencia y permisos restringidos. Scripts, fuentes y medios son locales. Google Maps es el único iframe permitido. No activar inyección de analítica o scripts de terceros sin revisar CSP y privacidad.

Configurar HTTPS obligatorio, SSL/TLS Full (strict), TLS mínimo 1.2 y comprobar el certificado. Conservar las protecciones gratuitas de DDoS y WAF disponibles. DNSSEC necesita publicar el DS exacto en NIC; no darlo por habilitado hasta verificar la cadena.

Producción permite indexación. Los hostnames pages.dev mantienen X-Robots-Tag: noindex, nofollow. robots.txt, sitemap.xml y URL canónicas usan el dominio definitivo. La página 404 devuelve un error real en Pages y ofrece navegación al inicio.

## Mantenimiento

El usuario solicitó acceso de mantenimiento desde su cuenta. Conceder los permisos necesarios para el dominio y Pages, manteniendo la cuenta del cliente como propietaria. No conceder facturación ni gestión de miembros si no hace falta. Confirmar los permisos antes de enviar la invitación.

Para publicar cambios: editar, revisar, hacer commit y push a main; comprobar el despliegue en Workers & Pages y la URL pública. Para cambios amplios, revisar una rama preview antes de integrarla. Pages permite volver a un despliegue anterior.

## Contenido y revisión

Se conservan espacios de casos clínicos y fotografías en preparación a petición del usuario. No inventar resultados. La privacidad describe la clínica, contacto confirmado, Maps y alojamiento. Oficina, horarios y materiales nuevos se incorporarán cuando el cliente los confirme.

Antes de dar la publicación por terminada, verificar HTTPS, cabeceras, código desplegado, enlaces, vídeo, mapa, menú y ausencia de desbordamiento en móvil y escritorio. Registrar aquí el resultado real; este documento no confirma que el sitio ya esté operativo.

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
- Certificado Universal SSL para metricadental.cl y *.metricadental.cl activo, con vencimiento mostrado el 30/12/2026 y certificado de respaldo emitido. HTTPS obligatorio, TLS mínimo 1.2 y TLS 1.3 siguen activos. Falta validar HTTPS con el sitio publicado.
- Invitación enviada a servimat18@gmail.com; aparece en Members como Pending. Permisos: Domain Administrator para metricadental.cl y Developer Platform Editor para la cuenta. Falta que el destinatario la acepte.
- La conexión de GitHub abrió la instalación existente y pidió verificar la identidad de mattt1r2 por correo. Código solicitado al usuario; no se han modificado los permisos de la aplicación GitHub ni creado el proyecto Pages. La publicación sigue pendiente.
