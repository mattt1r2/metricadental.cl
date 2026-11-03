"""Build static search/social metadata from confirmed clinic information.

Run from any directory with Python 3. No package or runtime dependency is added
to the website. Visible page content, prices and headings stay in the HTML.
"""
from pathlib import Path
import argparse
import html
import json
import re

SITE = Path(__file__).resolve().parents[1] / 'site'
BASE = 'https://metricadental.cl/'
SOCIAL = BASE + 'assets/metrica-dental-social-v1.jpg'
CLINIC_ID = BASE + '#clinica'

# Titles/descriptions are search snippets, independent of the visible headings.
PAGES = {
    'index': (
        'Métrica Dental',
        'Clínica Métrica Dental | Tratamientos y atención dental',
        'Conoce Métrica Dental: implantes, ortodoncia, limpieza y otros tratamientos. Revisa nuestras promociones y solicita tu hora por WhatsApp.'),
    'implantes': (
        'Implantes dentales',
        'Implantes dentales y corona por $570.000 | Métrica Dental',
        'Implante JD italiano y corona de zirconio por $570.000. Evaluación sin costo y 12 cuotas sin interés con Compraquí de BancoEstado. Consulta condiciones.'),
    'ortodoncia': (
        'Ortodoncia',
        'Ortodoncia y brackets | Métrica Dental',
        'Conoce el tratamiento de ortodoncia, sus etapas y la promoción de brackets. Revisa el valor de instalación y del control mensual en Métrica Dental.'),
    'restauraciones': (
        'Restauraciones',
        'Restauraciones dentales y caries | Métrica Dental',
        'Evalúa el tratamiento de caries y la reparación de dientes dañados en Métrica Dental. Conoce las etapas, resuelve tus dudas y solicita una hora.'),
    'endodoncia': (
        'Endodoncia',
        'Endodoncia y tratamiento de conductos | Métrica Dental',
        'Conoce cómo se evalúa y realiza un tratamiento de conductos para conservar el diente. Revisa las etapas y solicita tu evaluación en Métrica Dental.'),
    'terceros-molares': (
        'Terceros molares',
        'Muelas del juicio y terceros molares | Métrica Dental',
        'Evalúa tus muelas del juicio y si es necesaria su extracción. Conoce la planificación, las etapas y los cuidados orientativos en Métrica Dental.'),
    'coronas': (
        'Coronas',
        'Coronas dentales y rehabilitación | Métrica Dental',
        'Conoce las coronas dentales para proteger y rehabilitar dientes dañados. Revisa la evaluación, las etapas y los cuidados en Métrica Dental.'),
    'carillas': (
        'Carillas',
        'Carillas dentales y estética de la sonrisa | Métrica Dental',
        'Evalúa cambios en la forma y apariencia de tus dientes con carillas. Conoce la planificación, la colocación y los cuidados en Métrica Dental.'),
    'limpieza-dental': (
        'Limpieza dental',
        'Limpieza dental + flúor por $19.990 | Métrica Dental',
        'Limpieza dental y flúor por $19.990. Incluye destartraje supragingival, pulido, aeropulido y evaluación de caries. Solicita tu hora por WhatsApp.'),
    'blanqueamiento': (
        'Blanqueamiento dental',
        'Blanqueamiento dental profesional | Métrica Dental',
        'Evalúa opciones para aclarar el tono de tus dientes naturales. Conoce cómo se planifica el blanqueamiento, sus cuidados y solicita una evaluación.')
}

# Only the two confirmed promotions requested for this maintenance cycle.
# Their conditions remain alongside the visible prices and in each offer.
CONFIRMED_OFFERS = {
    'implantes': {
        'name': 'Implante + corona de zirconio',
        'price': '570000',
        'description': (
            'Instalación del implante JD: $270.000. Corona de zirconio, laboratorio y aditamentos: $300.000. '
            'No incluye regeneración ósea. La evaluación determina si el tratamiento es adecuado para ti '
            'y si necesitas procedimientos adicionales. Solicita el presupuesto de tu caso y confirma '
            'las condiciones de la promoción antes de iniciar.')
    },
    'limpieza-dental': {
        'name': 'Limpieza dental + flúor',
        'price': '19990',
        'description': (
            'Destartraje supragingival con ultrasonido, pulido coronario con pasta profiláctica, '
            'aeropulido de manchas, aplicación de barniz de flúor y evaluación de caries. '
            'La indicación de cada prestación depende de la evaluación clínica. '
            'Consulta disponibilidad antes de agendar.')
    }
}


def url_for(slug):
    return BASE if slug == 'index' else BASE + slug


def structured_data(slug, name, title, description):
    url = url_for(slug)
    clinic = {
        '@type': 'Dentist', '@id': CLINIC_ID, 'name': 'Métrica Dental',
        'url': BASE, 'telephone': '+56949354494',
        'logo': {'@type': 'ImageObject', 'url': BASE + 'assets/logo.webp'},
        'image': SOCIAL,
        'address': {'@type': 'PostalAddress',
                    'streetAddress': '1 Sur 690, Edificio Plaza Talca',
                    'addressLocality': 'Talca', 'addressCountry': 'CL'},
        'sameAs': ['https://www.instagram.com/clinicametricadental/']
    }
    # No business hours, ratings, clinic-specific Maps URL or credentials are
    # inferred from the building listing or from reference photographs.
    website = {'@type': 'WebSite', '@id': BASE + '#website',
               'url': BASE, 'name': 'Métrica Dental', 'inLanguage': 'es-CL',
               'publisher': {'@id': CLINIC_ID}}
    page = {'@type': 'WebPage', '@id': url + '#webpage', 'url': url,
            'name': title, 'description': description, 'inLanguage': 'es-CL',
            'isPartOf': {'@id': BASE + '#website'},
            'about': {'@id': CLINIC_ID}}
    graph = [clinic, website, page]
    if slug == 'index':
        clinic['hasOfferCatalog'] = {
            '@type': 'OfferCatalog', 'name': 'Tratamientos dentales',
            'itemListElement': [
                {'@type': 'Offer', 'url': url_for(service_slug),
                 'itemOffered': {'@type': 'Service',
                                 '@id': url_for(service_slug) + '#servicio',
                                 'name': service[0], 'url': url_for(service_slug),
                                 'provider': {'@id': CLINIC_ID}}}
                for service_slug, service in PAGES.items() if service_slug != 'index'
            ]}
        page['mainEntity'] = {'@id': CLINIC_ID}
    else:
        service_id = url + '#servicio'
        service = {'@type': 'Service', '@id': service_id,
                   'name': name, 'url': url, 'serviceType': name,
                   'description': description, 'provider': {'@id': CLINIC_ID},
                   'mainEntityOfPage': {'@id': url + '#webpage'}}
        if slug in CONFIRMED_OFFERS:
            service['offers'] = {
                '@type': 'Offer', '@id': url + '#oferta',
                **CONFIRMED_OFFERS[slug],
                'priceCurrency': 'CLP', 'url': url + '#promocion',
                'seller': {'@id': CLINIC_ID},
                'itemOffered': {'@id': service_id}
            }
        graph.append(service)
        breadcrumbs_id = url + '#breadcrumb'
        graph.append({'@type': 'BreadcrumbList', '@id': breadcrumbs_id,
                      'itemListElement': [
                          {'@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': BASE},
                          {'@type': 'ListItem', 'position': 2, 'name': name, 'item': url}]})
        page['mainEntity'] = {'@id': service_id}
        page['breadcrumb'] = {'@id': breadcrumbs_id}
    return {'@context': 'https://schema.org', '@graph': graph}


def apply(slugs=None):
    selected = list(dict.fromkeys(slugs)) if slugs else list(PAGES)
    for slug in selected:
        name, title, description = PAGES[slug]
        path = SITE / (slug + '.html')
        text = path.read_text(encoding='utf-8')
        if slug in CONFIRMED_OFFERS:
            visible_price = '$' + format(int(CONFIRMED_OFFERS[slug]['price']), ',').replace(',', '.')
            assert visible_price in text.partition('<body')[2], (slug, 'offer differs from visible price')
        text = re.sub(r'  <!-- SEO BEGIN -->.*?  <!-- SEO END -->\n?', '', text, flags=re.S)
        text = re.sub(r'<title>.*?</title>', '<title>' + html.escape(title) + '</title>', text, count=1)
        for key, value in [('description', description), ('og:title', title), ('og:description', description)]:
            pattern = r'(<meta (?:name|property)="' + re.escape(key) + r'" content=")[^"]*(">)'
            text, count = re.subn(pattern, lambda m: m[1] + html.escape(value, quote=True) + m[2], text, count=1)
            assert count == 1, (path.name, key)
        tags = [
            '  <!-- SEO BEGIN -->',
            f'  <meta property="og:image" content="{SOCIAL}">',
            f'  <meta property="og:image:secure_url" content="{SOCIAL}">',
            '  <meta property="og:image:type" content="image/jpeg">',
            '  <meta property="og:image:width" content="1200">',
            '  <meta property="og:image:height" content="630">',
            '  <meta property="og:image:alt" content="Métrica Dental: atención dental cercana para ti y tu familia.">',
            '  <meta name="twitter:card" content="summary_large_image">',
            f'  <meta name="twitter:title" content="{html.escape(title, quote=True)}">',
            f'  <meta name="twitter:description" content="{html.escape(description, quote=True)}">',
            f'  <meta name="twitter:image" content="{SOCIAL}">',
            '  <meta name="twitter:image:alt" content="Logo de Clínica Métrica Dental.">',
            '  <script type="application/ld+json">',
            json.dumps(structured_data(slug, name, title, description), ensure_ascii=False, indent=2),
            '  </script>',
            '  <!-- SEO END -->'
        ]
        text = text.replace('</head>', '\n'.join(tags) + '\n</head>')
        path.write_text(text, encoding='utf-8')
    print(f'Updated metadata, social cards and structured data on {len(selected)} public pages.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--pages', nargs='+', choices=list(PAGES), help='Update only the selected existing pages.')
    apply(parser.parse_args().pages)
