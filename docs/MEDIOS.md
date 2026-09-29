# Incorporar casos clínicos, fotografías y videos

Los espacios están preparados en `site/index.html`. Se sustituyen editando HTML y copiando los archivos a `site/assets/`; no hay un formulario de subida público ni se almacenan datos de pacientes.

## Casos clínicos del inicio

Buscar `id="casos"`. Hay tres `.case-placeholder`, cada uno con espacios antes/después. Mientras no existan casos, se muestra “Fotografías del caso en preparación”. No se han usado resultados ficticios.

Cuando la clínica entregue fotos autorizadas, copiar archivos con nombres sin datos identificativos, por ejemplo `caso-01-antes.webp` y `caso-01-despues.webp`. Reemplazar uno de los bloques `.case-placeholder` completos por este artículo y adaptar texto y dimensiones a los archivos reales:

```html
<article class="clinical-case">
  <div class="case-photos">
    <figure>
      <img src="assets/caso-01-antes.webp" alt="Descripción clínica de la situación inicial" width="1000" height="1000" loading="lazy">
      <figcaption>Antes</figcaption>
    </figure>
    <figure>
      <img src="assets/caso-01-despues.webp" alt="Descripción clínica del resultado documentado" width="1000" height="1000" loading="lazy">
      <figcaption>Después</figcaption>
    </figure>
  </div>
  <h3>Nombre del tratamiento real</h3>
  <p>Descripción breve validada por la clínica, con las etapas realizadas y el seguimiento correspondiente.</p>
</article>
```

Los archivos de ejemplo no existen: incorporar primero el material antes de pegar el artículo. No conservar texto genérico como si describiera un caso real. Se pueden añadir más artículos dentro de `.clinical-cases-grid`; el diseño agrega filas. Las imágenes usan `object-fit: contain` para mostrar el encuadre clínico completo.

Al incorporar el primer caso, cambiar `.media-pending` a “Estamos preparando más casos para compartir contigo” si siguen faltando fotografías. Quitar ese aviso y los bloques pendientes cuando la galería esté completa. Mantener la nota de resultados individuales. La autorización de publicación se gestiona fuera del repositorio; no guardar aquí consentimientos ni datos identificativos de pacientes.

## Fotografías de la clínica

Buscar `id="galeria"`. Dentro de `.clinic-photo-slots` hay dos figuras `.media-placeholder`. Reemplazar cada una por una fotografía propia, con su descripción:

```html
<figure class="clinic-photo">
  <img src="assets/recepcion.webp" alt="Descripción real de la recepción de Métrica Dental" width="1200" height="900" loading="lazy">
  <figcaption>Recepción de la clínica</figcaption>
</figure>
```

Adaptar dimensiones, nombre y descripción a la imagen entregada. No usar una fotografía de banco de imágenes como si fuera una instalación real de la clínica.

## Videos

El inicio tiene un reproductor real en `.clinic-media-video`; actualmente muestra `assets/implantes.mp4`, el video suministrado previamente. La página de implantes mantiene su propio reproductor. Ambos tienen controles, sin reproducción automática, y `preload="none"`.

Para sustituirlo, copiar el nuevo MP4 a `site/assets/`, cambiar el `src` del `<source>`, el enlace alternativo y el `poster`, y actualizar el título, texto, `aria-label` y dimensiones. Añadir otra figura `.clinic-media-video` en `.clinic-media-grid` permite publicar un video adicional. Incorporar subtítulos WebVTT mediante `<track kind="captions" srclang="es" label="Español" src="assets/video-es.vtt">` cuando estén disponibles.

Las cinco fases en `implantes.html` conservan comentarios para añadir fotografías propias dentro de cada `.journey-copy`.

## Revisar después de añadir archivos

1. Abrir la vista previa y comprobar que cada foto/video carga y tiene su texto correcto.
2. En el servidor temporal de este proyecto, reiniciar solo el servidor de vista previa para renovar su lista de archivos permitidos. No hace falta cambiar el enlace del túnel.
3. Revisar móvil y escritorio. Conservar las imágenes originales fuera del repositorio y subir copias optimizadas a la web.
4. Antes de publicar definitivamente, retirar cualquier espacio pendiente que todavía no tenga material.
