# Agregar y mantener promociones

La portada presenta primero a Métrica Dental y después las ofertas. Todas se escriben como HTML dentro de `.promotion-showcase` en `site/index.html`: no hace falta un panel, una base de datos ni modificar JavaScript.

## Agregar una oferta

1. Copiar el artículo completo de abajo dentro de `.promotion-showcase`, después de los artículos existentes.
2. Reemplazar el título, precio, prestaciones, condiciones y enlace con datos confirmados. Usar un `id` único en el título y el mismo valor en `aria-labelledby`.
3. Elegir `home-offer-lilac` o `home-offer-sand`. Si se omite la variante, se usa lila. Las clases no dependen del tratamiento: pueden reutilizarse para cualquier campaña.
4. Crear o actualizar la promoción completa en la página del tratamiento. El enlace de la tarjeta debe llevar a esa sección existente, no a una página pendiente ni directamente a WhatsApp.
5. Revisar el resultado en celular y escritorio. La cuadrícula agrega filas según la cantidad de ofertas. Con una oferta destacada, una última oferta sin pareja ocupa el ancho de la fila a partir de cuatro tarjetas.

Plantilla completa de un artículo; sustituir todos los datos de ejemplo antes de incorporarlo al sitio:

```html
<article class="home-offer home-offer-sand" aria-labelledby="nueva-oferta-title">
  <div class="home-offer-top">
    <h3 id="nueva-oferta-title">Nombre de la promoción</h3>
    <p class="home-offer-price">$VALOR</p>
  </div>
  <p class="home-offer-includes">Prestaciones incluidas confirmadas por la clínica.</p>
  <p class="home-offer-detail">Condiciones, vigencia y costos adicionales, si corresponde.</p>
  <a class="home-offer-link" href="tratamiento.html#promocion">Ver promoción de tratamiento <span aria-hidden="true">↗</span></a>
</article>
```

Eliminar `.home-offer-detail` si no hay una condición adicional que mostrar. No añadir fechas, descuentos, cupos o financiación sin confirmación. Mantener los importes y condiciones coherentes entre el inicio y la página del tratamiento.

## Oferta destacada

El primer artículo puede usar `home-offer home-offer-featured` para mantener la composición verde petróleo de implantes. Usar como máximo una destacada, siempre al principio. El desglose de valores (`home-offer-breakdown`) y las cuotas (`home-offer-finance`) son opcionales; no copiarlos a otro servicio sin condiciones confirmadas.

En móvil las ofertas se muestran en su orden de lectura, una debajo de otra. En tablet la destacada ocupa una fila completa; en escritorio ocupa la izquierda de las dos primeras filas y las siguientes continúan debajo. El diseño no está limitado a tres ofertas ni requiere editar selectores por cada tratamiento nuevo.

## Cambiar el orden o retirar una campaña

Mover o quitar el artículo completo. Conservar al principio la oferta destacada si la hubiera. No dejar tarjetas vacías ni mensajes de «próximamente». Al retirar una campaña, actualizar también la página del tratamiento para que un enlace guardado no presente valores vencidos como vigentes; conservar la información del servicio.

Las tres campañas actuales permanecen con los datos confirmados del cliente. El contenido de esta plantilla no se publica automáticamente.
