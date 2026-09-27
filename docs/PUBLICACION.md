# Publicación pendiente

1. Verificar y registrar el dominio con el cliente como titular. No se ha comprobado disponibilidad.
2. Completar y revisar los pendientes del brief, incluido el borrador de privacidad.
3. Conectar este repositorio a Cloudflare Pages mediante integración Git. Usar `main` como rama de producción cuando su contenido esté aprobado. Crear vistas previas desde ramas de trabajo.
4. Configurar como sitio estático sin framework; directorio de salida `site`, sin proceso de compilación.
5. Conectar el dominio mediante la opción de dominios personalizados de Pages y seguir las instrucciones DNS vigentes. Registrar los nameservers de Cloudflare en NIC Chile cuando corresponda.
6. Comprobar el certificado y las redirecciones HTTPS. El archivo `_headers` incluye HSTS sin `includeSubDomains` ni `preload`; ampliar sólo después de revisar todos los subdominios.
7. Verificar que CSP, vídeo, imágenes y navegación funcionen en el despliegue real. El servidor estándar `python -m http.server` no aplica `_headers`; el servidor temporal preparado para la revisión del cliente sí las añade, pero no sustituye una validación en Pages.
8. Completar SEO con URL canónica, metadatos sociales y sitemap usando el dominio confirmado. Añadir datos estructurados únicamente con información verificada.
9. Retirar `noindex` de las páginas y de `_headers` únicamente cuando se publique la versión aprobada. Mantener las vistas previas fuera de indexación mediante la configuración correspondiente.
10. Comprobar enlaces de WhatsApp y Maps, menú móvil, teclado, contraste y comportamiento en escritorio, tablet y celular.

No se han creado cuentas, comprado dominios ni desplegado el sitio en Cloudflare Pages. El usuario activó un enlace temporal de TryCloudflare desde su computador, sin utilizar su cuenta ni conectar el dominio. A petición del usuario, el mapa del edificio está incrustado mediante el código oficial de Google Maps y `loading=lazy`; puede conectarse a Google al acercarse a la sección. Hay también enlace externo. Revisar su funcionamiento con la CSP desplegada y conservar la información correspondiente en privacidad.

Documentación: https://developers.cloudflare.com/pages/configuration/git-integration/ y https://developers.cloudflare.com/pages/configuration/headers/
