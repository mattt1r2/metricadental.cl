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
