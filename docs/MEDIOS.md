# Incorporar casos clínicos, fotografías y videos

Los espacios están preparados en `site/index.html`. Se sustituyen editando HTML y copiando los archivos a `site/assets/`; no hay un formulario de subida público ni se almacenan datos de pacientes.

## Fotografías de los servicios

El catálogo del inicio incorpora una imagen referencial en `.service-thumb` para cada tratamiento; no utiliza fotogramas recortados de los videos. Endodoncia, restauraciones y limpieza muestran los clips completos únicamente en sus páginas. Las otras cinco páginas distintas de implantes mantienen una figura `.treatment-photo`; implantes conserva la ilustración, retrato y video anterior, además del nuevo clip.

Los tratamientos sin material propio utilizan imágenes referenciales generadas de modelos y materiales, identificadas como tales. Se agrupan por tema: `ortodoncia-referencial.webp`, `cuidado-dental-referencial.webp` y `rehabilitacion-referencial.webp`, además de `implante-3d.webp`. Estas referencias no representan pacientes, instalaciones ni resultados de la clínica. La procedencia y los prompts están en docs/RECURSOS-VISUALES.md. Las tres WebP suman aproximadamente 446 KiB.

Para poner una fotografía real de un servicio:

1. Guardarla con un nombre propio en `site/assets/`, por ejemplo `ortodoncia-clinica.webp`. Evitar sobrescribir un recurso compartido porque afectaría a otros servicios.
2. Cambiar el `src` de la imagen dentro del enlace correspondiente `.service-link[href="ortodoncia.html"]` de `index.html`.
3. Cambiar también el `src` y las dimensiones del `<img>` en `.treatment-photo` de la página del servicio. Escribir un `alt` descriptivo y actualizar su pie. La miniatura del inicio conserva `alt=""` porque el enlace ya tiene el nombre del tratamiento.
4. Cuando todas las fotografías sean propias, actualizar `.service-photo-note` del catálogo. Si se mezclan con referencias, indicar cuáles siguen siendo referenciales.

Para incorporar otra imagen a una página, copiar la figura `.treatment-photo` con el archivo y pie correctos a la etapa correspondiente. Los filtros del catálogo utilizan `data-service-category`: `rehabilitacion`, `estetica` o `cuidado`; al cambiar una foto, conservar esos atributos y el enlace al tratamiento.

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

Buscar `id="galeria"`, el desplegable “Fotografías de la clínica” dentro de La clínica. En `.clinic-photo-slots` hay dos figuras `.media-placeholder`. Reemplazar cada una por una fotografía propia, con su descripción:

```html
<figure class="clinic-photo">
  <img src="assets/recepcion.webp" alt="Descripción real de la recepción de Métrica Dental" width="1200" height="900" loading="lazy">
  <figcaption>Recepción de la clínica</figcaption>
</figure>
```

Adaptar dimensiones, nombre y descripción a la imagen entregada. No usar una fotografía de banco de imágenes como si fuera una instalación real de la clínica.

## Videos

El 04/10/2026 se revisaron los siete MP4 entregados en `material/`, mediante secuencias de fotogramas y transcripción local orientativa. Los originales se conservan en esa carpeta, excluida de Git. Las copias web están en `site/assets/videos/`: H.264/AAC, yuv420p, 540 px de ancho y faststart para comenzar la reproducción sin descargar el archivo completo. Los siete videos suman unos 11,3 MiB y sus portadas están en WebP.

| Archivo web | Contenido y ubicación |
| --- | --- |
| `tecnologia.mp4` | Escáner intraoral para planificar implantes, carillas y coronas. En Inicio → La clínica, antes de Servicios. |
| `ubicacion.mp4` | Presentación del edificio y entorno de la clínica. En Inicio → Ubicación, junto al mapa. |
| `implantes.mp4` | Presentación del tratamiento por el Dr. Tomás Abraham. En la página de implantes, junto a la garantía y antes de las cinco fases. |
| `limpieza.mp4` | Limpieza y barniz de flúor, con valor de $19.990. En la presentación de Limpieza dental. |
| `endodoncia.mp4` | Explicación del objetivo del tratamiento de conductos. En la presentación de Endodoncia. |
| `equipo.mp4` | Recuperación de un diente mediante diagnóstico y restauración. Aunque el nombre original parecía general, corresponde a Restauraciones; va junto a su presentación. |
| `restauraciones.mp4` | Clip de la mujer retirado de la página el 05/10/2026 a petición del usuario. Archivo conservado; Restauraciones muestra únicamente `equipo.mp4`. |

Todos usan `.video-card.video-portrait`, controles nativos, `muted`, `loop`, `playsinline`, `preload="none"`, portada y enlace alternativo. Conservan el encuadre vertical completo y su proporción natural. Al entrar en pantalla se reproduce un solo video, silenciado; al salir o cambiar de pestaña se pausa y vuelve a silenciarse. El botón SVG permite activar sonido opcional. La pausa manual se respeta hasta que el video salga de pantalla. Con movimiento reducido, la reproducción es manual. No añadir pies repetidos debajo de los clips. El video anterior `assets/implantes.mp4` se conserva en su lugar en la página de implantes y es distinto del nuevo `assets/videos/implantes.mp4`.

Para sustituir un video, copiar el nuevo MP4 optimizado a `site/assets/videos/`, cambiar el `src` del `<source>`, el enlace alternativo y el `poster`, y actualizar el `aria-label` descriptivo y las dimensiones. Para otro video, añadir una figura `.video-card.video-portrait` dentro de la sección apropiada. No copiar en titulares precios o afirmaciones clínicas sin confirmarlos. Incorporar subtítulos WebVTT mediante `<track kind="captions" srclang="es" label="Español" src="assets/video-es.vtt">` cuando se disponga de una transcripción revisada; no publicar automáticamente la salida de reconocimiento de voz.

Las cinco fases en `implantes.html` conservan comentarios para añadir fotografías propias dentro de cada `.journey-copy`.

## Revisar después de añadir archivos

1. Abrir la vista previa y comprobar que cada foto/video carga y tiene su texto correcto.
2. En el servidor temporal de este proyecto, reiniciar solo el servidor de vista previa para renovar su lista de archivos permitidos. No hace falta cambiar el enlace del túnel.
3. Revisar móvil y escritorio. Conservar las imágenes originales fuera del repositorio y subir copias optimizadas a la web.
4. Antes de publicar definitivamente, retirar cualquier espacio pendiente que todavía no tenga material.
