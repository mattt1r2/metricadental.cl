"""Check static SEO, crawlable routes, structured data and preserved page copy."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import xml.etree.ElementTree as ET
import hashlib, json, re

SITE = Path(__file__).resolve().parents[1] / 'site'
BASE = 'https://metricadental.cl/'
VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}

class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=set();self.links=[];self.stack=[];self.h1=0
        self.title='';self.in_title=False;self.meta={};self.canonical=[];self.schema=[];self.in_schema=False
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'):
            assert a['id'] not in self.ids,('duplicate id',a['id'])
            self.ids.add(a['id'])
        if tag=='h1':self.h1+=1
        if tag=='title':self.in_title=True
        if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        if tag=='script' and a.get('type')=='application/ld+json':self.in_schema=True;self.schema.append('')
        if tag=='img':assert 'alt' in a
        for attr in ['href','src','poster']:
            if a.get(attr):self.links.append(a[attr])
        if tag not in VOID:self.stack.append(tag)
    def handle_startendtag(self,tag,attrs):
        self.handle_starttag(tag,attrs)
        if tag not in VOID:self.stack.pop()
    def handle_endtag(self,tag):
        assert self.stack and self.stack[-1]==tag,('unbalanced markup',tag,self.stack[-5:])
        self.stack.pop()
        if tag=='title':self.in_title=False
        if tag=='script':self.in_schema=False
    def handle_data(self,text):
        if self.in_title:self.title+=text
        if self.in_schema:self.schema[-1]+=text

pages={}
for path in SITE.glob('*.html'):
    if path.name.startswith('google'):continue  # Ownership verification is not a web page.
    p=Page();p.feed(path.read_text(encoding='utf-8'))
    assert not p.stack and p.h1==1,path.name
    pages[path.name]=p

indexed={name:p for name,p in pages.items() if p.meta.get('robots')=='index, follow'}
assert len(indexed)==10
assert len({p.title for p in indexed.values()})==10
assert len({p.meta['description'] for p in indexed.values()})==10
assert 'noindex' in pages['404.html'].meta['robots']
assert 'noindex' in pages['privacidad.html'].meta['robots']

refs=0
for name,p in pages.items():
    for link in p.links:
        u=urlsplit(link)
        if u.scheme or u.netloc:continue
        assert not u.path.endswith('.html'),(name,'noncanonical internal link',link)
        path=unquote(u.path).lstrip('/')
        target=path or ('index.html' if u.path=='/' else name)
        resolved=SITE/target
        if not resolved.is_file() and not resolved.suffix:target += '.html';resolved=SITE/target
        assert resolved.is_file(),(name,link)
        if u.fragment and target in pages:assert unquote(u.fragment) in pages[target].ids,(name,link)
        refs+=1

for name,p in indexed.items():
    url=BASE if name=='index.html' else BASE+Path(name).stem
    assert p.canonical==[url]
    assert len(p.schema)==1
    graph=json.loads(p.schema[0])['@graph']
    clinic=next(n for n in graph if n['@type']=='Dentist')
    assert clinic['telephone']=='+56949354494'
    assert clinic['address']['streetAddress']=='1 Sur 690, Edificio Plaza Talca'
    assert not set(clinic).intersection({'openingHours','openingHoursSpecification','aggregateRating','review','hasMap'})
    assert p.meta['og:image'].startswith(BASE)
    assert (SITE/urlsplit(p.meta['og:image']).path.lstrip('/')).is_file()
    if name=='index.html':assert len(clinic['hasOfferCatalog']['itemListElement'])==9
    else:
        service=next(n for n in graph if n['@type']=='Service')
        assert service['url']==url and service['provider']['@id']==clinic['@id']
        breadcrumb=next(n for n in graph if n['@type']=='BreadcrumbList')
        assert [n['position'] for n in breadcrumb['itemListElement']]==[1,2]

sitemap={loc.text for loc in ET.parse(SITE/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
assert sitemap=={p.canonical[0] for p in indexed.values()}
assert 'Allow: /' in (SITE/'robots.txt').read_text()
headers=(SITE/'_headers').read_text()
for protection in ["frame-ancestors 'none'", "object-src 'none'", "script-src 'self'", 'Strict-Transport-Security','X-Content-Type-Options']:
    assert protection in headers
assert "'unsafe-inline'" not in headers and "'unsafe-eval'" not in headers
assert all(p.stat().st_size<25*1024*1024 for p in SITE.rglob('*') if p.is_file())

for filename in ['styles.css','service-layout.css','script.js','servimat-analytics.js']:
    version=hashlib.sha256((SITE/filename).read_bytes().replace(b'\r\n',b'\n')).hexdigest()[:12]
    for path in SITE.glob('*.html'):
        for match in re.finditer(r'["\']/?'+re.escape(filename)+r'([^"\']*)',path.read_text(encoding='utf-8')):
            assert match[1]=='?v='+version,(path.name,filename,'stale version')
print(f'OK: {len(pages)} web pages, {len(indexed)} indexable routes, {refs} local references; unique metadata, schemas, canonical links, sitemap and CSP.')
